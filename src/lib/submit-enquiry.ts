export interface EnquiryInput {
  kind: "enquiry" | "contact" | "newsletter";
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  product?: string;
  message?: string;
  website?: string;
}

export interface EnquiryResult {
  ok: boolean;
  message: string;
}

/** Single client-side entry point for every form on the site. */
export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(input),
    });
    const data = (await res.json().catch(() => null)) as
      | { success?: boolean; message?: string }
      | null;

    if (!res.ok || !data?.success) {
      return {
        ok: false,
        message: data?.message ?? "Something went wrong. Please try again.",
      };
    }
    return { ok: true, message: data.message ?? "Enquiry received" };
  } catch {
    return {
      ok: false,
      message: "We could not reach the server. Please check your connection and retry.",
    };
  }
}
