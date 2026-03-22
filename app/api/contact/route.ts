import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Check if Resend API key exists
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // No API key — still return success so form works
      console.log("Contact form submission:", { name, email, company, service, budget, message });
      return NextResponse.json({ success: true });
    }

    // Send with Resend
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "ZENTIC Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "hello.faizidevx@gmail.com",
      subject: `New Enquiry from ${name} — ZENTIC Studio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #6366f1, #7c3aed); padding: 24px 32px; border-radius: 10px; margin-bottom: 28px;">
            <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 800;">New Client Enquiry</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px;">Submitted via ZENTIC Studio contact form</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 12px 16px; background: white; border-radius: 8px 8px 0 0; border-bottom: 1px solid #e2e8f0;">
              <strong style="color: #64748b; font-size: 11px; text-transform: uppercase;">Name</strong><br/>
              <span style="color: #1e293b; font-size: 15px; font-weight: 600;">${name}</span>
            </td></tr>
            <tr><td style="padding: 12px 16px; background: white; border-bottom: 1px solid #e2e8f0;">
              <strong style="color: #64748b; font-size: 11px; text-transform: uppercase;">Email</strong><br/>
              <a href="mailto:${email}" style="color: #6366f1; font-size: 15px;">${email}</a>
            </td></tr>
            <tr><td style="padding: 12px 16px; background: white; border-bottom: 1px solid #e2e8f0;">
              <strong style="color: #64748b; font-size: 11px; text-transform: uppercase;">Company</strong><br/>
              <span style="color: #1e293b; font-size: 15px;">${company || "Not provided"}</span>
            </td></tr>
            <tr><td style="padding: 12px 16px; background: white; border-bottom: 1px solid #e2e8f0;">
              <strong style="color: #64748b; font-size: 11px; text-transform: uppercase;">Service</strong><br/>
              <span style="color: #1e293b; font-size: 15px;">${service || "Not specified"}</span>
            </td></tr>
            <tr><td style="padding: 12px 16px; background: white; border-bottom: 1px solid #e2e8f0;">
              <strong style="color: #64748b; font-size: 11px; text-transform: uppercase;">Budget</strong><br/>
              <span style="color: #1e293b; font-size: 15px;">${budget || "Not specified"}</span>
            </td></tr>
            <tr><td style="padding: 12px 16px; background: white; border-radius: 0 0 8px 8px;">
              <strong style="color: #64748b; font-size: 11px; text-transform: uppercase;">Message</strong><br/>
              <p style="color: #1e293b; font-size: 15px; line-height: 1.7; margin: 8px 0 0;">${message}</p>
            </td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px 20px; background: #eff6ff; border-radius: 8px; border-left: 3px solid #6366f1;">
            <p style="margin: 0; font-size: 13px; color: #475569;">Reply directly to this email to respond to <strong>${name}</strong></p>
          </div>
        </div>
      `,
    });

    await resend.emails.send({
      from: "ZENTIC Studio <onboarding@resend.dev>",
      to: email,
      subject: "We received your message — ZENTIC Studio",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <div style="background: linear-gradient(135deg, #6366f1, #7c3aed); padding: 24px 32px; border-radius: 10px; margin-bottom: 28px;">
            <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 800;">Got your message!</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px;">ZENTIC Studio</p>
          </div>
          <p style="color: #1e293b; font-size: 16px; line-height: 1.7;">Hi <strong>${name}</strong>,</p>
          <p style="color: #475569; font-size: 15px; line-height: 1.7;">Thank you for reaching out to ZENTIC Studio. We have received your message and will get back to you within <strong>24 hours</strong>.</p>
          <p style="color: #475569; font-size: 15px; line-height: 1.7; margin-top: 24px;">Talk soon,<br/><strong style="color: #1e293b;">Faiz Rasool</strong><br/><span style="color: #64748b;">Founder, ZENTIC Studio</span></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}