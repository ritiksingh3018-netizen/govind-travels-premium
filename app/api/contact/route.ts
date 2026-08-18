import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Yorra Tech <hello@yorra.in>",
      to: ["techyorra@gmail.com"],
      replyTo: email,

      subject: `New Project Enquiry — ${service}`,

      html: `
        <div style="margin:0;padding:0;background:#f5f7fa;font-family:Arial,Helvetica,sans-serif;">
          <div style="max-width:700px;margin:0 auto;padding:40px 20px;">

            <div style="background:#05070b;border-radius:18px;padding:28px 30px;color:#ffffff;">
              <h1 style="margin:0;font-size:24px;">
                New Project Enquiry
              </h1>

              <p style="margin:8px 0 0;color:#22d3ee;font-size:13px;">
                Yorra Tech Website
              </p>
            </div>

            <div style="margin-top:18px;background:#ffffff;border-radius:18px;padding:28px;border:1px solid #e5e7eb;">

              <h2 style="margin:0 0 20px;font-size:18px;color:#111827;">
                Client Details
              </h2>

              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr>
                  <td style="padding:10px 0;color:#6b7280;width:160px;">
                    Name
                  </td>
                  <td style="padding:10px 0;color:#111827;font-weight:600;">
                    ${escapeHtml(name)}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#6b7280;">
                    Email
                  </td>
                  <td style="padding:10px 0;color:#111827;">
                    ${escapeHtml(email)}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#6b7280;">
                    Phone
                  </td>
                  <td style="padding:10px 0;color:#111827;">
                    ${escapeHtml(phone || "Not provided")}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#6b7280;">
                    Company
                  </td>
                  <td style="padding:10px 0;color:#111827;">
                    ${escapeHtml(company || "Not provided")}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#6b7280;">
                    Service
                  </td>
                  <td style="padding:10px 0;color:#111827;font-weight:600;">
                    ${escapeHtml(service)}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#6b7280;">
                    Budget
                  </td>
                  <td style="padding:10px 0;color:#111827;">
                    ${escapeHtml(budget || "Not provided")}
                  </td>
                </tr>
              </table>

              <div style="margin-top:25px;padding-top:22px;border-top:1px solid #e5e7eb;">
                <h3 style="margin:0 0 10px;font-size:15px;color:#111827;">
                  Project Details
                </h3>

                <p style="margin:0;color:#4b5563;font-size:14px;line-height:1.7;white-space:pre-wrap;">
                  ${escapeHtml(message)}
                </p>
              </div>

            </div>

            <p style="margin:20px 0 0;text-align:center;color:#9ca3af;font-size:11px;">
              This enquiry was submitted through yorra.in
            </p>

          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send enquiry.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}

/* =========================================================
   Escape user input before inserting into HTML
========================================================= */

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}