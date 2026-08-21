import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

/** Reject anything larger than this before parsing. */
const MAX_BODY_BYTES = 8 * 1024;

/** Naive in-memory limiter: 5 submissions per IP per 10 minutes. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // crude bound; swap for Redis in production
  return recent.length > MAX_PER_WINDOW;
}

export interface EnquiryPayload {
  kind: "enquiry" | "contact" | "newsletter";
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  product?: string;
  message?: string;
  /** Honeypot — real users never fill this. */
  website?: string;
}

const KINDS = ["enquiry", "contact", "newsletter"] as const;

function str(value: unknown, max: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim().slice(0, max);
  return trimmed.length ? trimmed : undefined;
}

function validate(raw: unknown): { data: EnquiryPayload } | { error: string } {
  if (typeof raw !== "object" || raw === null) return { error: "Malformed request body" };
  const body = raw as Record<string, unknown>;

  const kind = typeof body.kind === "string" && (KINDS as readonly string[]).includes(body.kind)
    ? (body.kind as EnquiryPayload["kind"])
    : "enquiry";

  const data: EnquiryPayload = {
    kind,
    name: str(body.name, 120),
    company: str(body.company, 120),
    phone: str(body.phone, 40),
    email: str(body.email, 200),
    product: str(body.product, 120),
    message: str(body.message, 4000),
    website: str(body.website, 200),
  };

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
    return { error: "Please enter a valid email address." };
  }

  if (kind === "newsletter") {
    if (!data.email) return { error: "An email address is required." };
  } else {
    if (!data.name) return { error: "Please tell us your name." };
    if (!data.phone && !data.email) {
      return { error: "Please leave a phone number or an email address so we can reply." };
    }
  }

  return { data };
}

/** Never log full contact details — only enough to debug delivery. */
function redact(data: EnquiryPayload) {
  return {
    kind: data.kind,
    product: data.product,
    hasPhone: Boolean(data.phone),
    hasEmail: Boolean(data.email),
    messageLength: data.message?.length ?? 0,
  };
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many submissions. Please try again shortly." },
      { status: 429 }
    );
  }

  const length = Number(req.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { success: false, message: "That message is too long." },
      { status: 413 }
    );
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Malformed request body" },
      { status: 400 }
    );
  }

  const result = validate(raw);
  if ("error" in result) {
    return NextResponse.json({ success: false, message: result.error }, { status: 400 });
  }
  const { data } = result;

  // Honeypot hit: accept silently so bots do not learn they were caught.
  if (data.website) {
    return NextResponse.json({ success: true, message: "Enquiry received" });
  }

  // Delivery. Set ENQUIRY_WEBHOOK_URL to forward to email/CRM (Resend, Zapier,
  // HubSpot, a Slack incoming webhook…). Without it, enquiries are NOT stored.
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, receivedAt: new Date().toISOString() }),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("[enquiry] delivery failed", redact(data), err);
      return NextResponse.json(
        {
          success: false,
          message: "We could not send that just now. Please call or WhatsApp us instead.",
        },
        { status: 502 }
      );
    }
  } else {
    console.warn(
      "[enquiry] ENQUIRY_WEBHOOK_URL is not set — this enquiry was discarded.",
      redact(data)
    );
  }

  return NextResponse.json({ success: true, message: "Enquiry received" });
}
