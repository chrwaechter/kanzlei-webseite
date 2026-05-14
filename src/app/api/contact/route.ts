import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, telefon, anliegen } = await req.json();

    // Validierung
    if (!name || !email || !anliegen) {
      return NextResponse.json(
        { error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1916;">
          <div style="background: #1a1916; padding: 32px; text-align: center;">
            <h1 style="color: #b8860b; font-size: 1.4rem; margin: 0; letter-spacing: 0.05em;">
              Kanzlei Wächter
            </h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin: 6px 0 0;">
              Neue Kontaktanfrage
            </p>
          </div>

          <div style="padding: 40px 32px; background: #f4f3f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #dddbd6; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6860; width: 120px;">
                  Name
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #dddbd6; font-size: 0.95rem;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #dddbd6; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6860;">
                  E-Mail
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #dddbd6; font-size: 0.95rem;">
                  <a href="mailto:${email}" style="color: #b8860b; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #dddbd6; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6860;">
                  Telefon
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #dddbd6; font-size: 0.95rem;">
                  ${telefon || "–"}
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 0 0; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6860; vertical-align: top;">
                  Anliegen
                </td>
                <td style="padding: 16px 0 0; font-size: 0.95rem; line-height: 1.7;">
                  ${anliegen.replace(/\n/g, "<br/>")}
                </td>
              </tr>
            </table>
          </div>

          <div style="padding: 20px 32px; background: #1a1916; text-align: center;">
            <p style="color: rgba(255,255,255,0.4); font-size: 11px; letter-spacing: 0.1em; margin: 0;">
              Diese E-Mail wurde über das Kontaktformular auf ra-waechter.de versendet.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Serverfehler. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}