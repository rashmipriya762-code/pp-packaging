import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Placeholder: In production, send to email or CRM
    console.log("New enquiry received:", body);
    return NextResponse.json({ success: true, message: "Enquiry received" });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to process enquiry" }, { status: 500 });
  }
}
