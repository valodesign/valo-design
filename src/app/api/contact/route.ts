import nodemailer from "nodemailer";

export const runtime = "nodejs";

const contactEmail = process.env.CONTACT_TO_EMAIL || "info@valodesign.co.uk";

type ContactPayload = {
  company?: unknown;
  email?: unknown;
  location?: unknown;
  message?: unknown;
  name?: unknown;
  phone?: unknown;
  service?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured`);
  }

  return value;
}

function smtpPort() {
  const port = Number(process.env.SMTP_PORT || "587");
  return Number.isFinite(port) ? port : 587;
}

function smtpSecure(port: number) {
  if (process.env.SMTP_SECURE) {
    return process.env.SMTP_SECURE === "true";
  }

  return port === 465;
}

function buildTextEmail({
  email,
  location,
  message,
  name,
  phone,
  service,
}: Record<string, string>) {
  return [
    "New Valo Design enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    service ? `Service interest: ${service}` : "",
    location ? `Project location: ${location}` : "",
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== "")
    .join("\n");
}

function buildHtmlEmail({
  email,
  location,
  message,
  name,
  phone,
  service,
}: Record<string, string>) {
  const fields = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Service interest", service],
    ["Project location", location],
  ].filter(([, value]) => value);

  return `
    <div style="font-family: Arial, sans-serif; color: #16313b; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New Valo Design enquiry</h2>
      <table style="border-collapse: collapse; margin-bottom: 20px;">
        ${fields
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding: 4px 16px 4px 0; font-weight: 700;">${label}</td>
                <td style="padding: 4px 0;">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
      <p style="font-weight: 700; margin: 0 0 8px;">Message</p>
      <p style="white-space: pre-line; margin: 0;">${escapeHtml(message)}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const company = clean(payload.company);

    if (company) {
      return Response.json({ ok: true });
    }

    const fields = {
      email: clean(payload.email),
      location: clean(payload.location),
      message: clean(payload.message),
      name: clean(payload.name),
      phone: clean(payload.phone),
      service: clean(payload.service),
    };

    if (!fields.name || !fields.email || !fields.message) {
      return Response.json(
        { message: "Please add your name, email, and message." },
        { status: 400 },
      );
    }

    if (!isEmail(fields.email)) {
      return Response.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const port = smtpPort();
    const fromEmail = process.env.CONTACT_FROM_EMAIL || requiredEnv("SMTP_USER");
    const transporter = nodemailer.createTransport({
      auth: {
        pass: requiredEnv("SMTP_PASS"),
        user: requiredEnv("SMTP_USER"),
      },
      host: requiredEnv("SMTP_HOST"),
      port,
      secure: smtpSecure(port),
    });

    await transporter.sendMail({
      from: `"Valo Design Website" <${fromEmail}>`,
      html: buildHtmlEmail(fields),
      replyTo: fields.email,
      subject: `Valo Design enquiry from ${fields.name}`,
      text: buildTextEmail(fields),
      to: contactEmail,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed", error);

    return Response.json(
      { message: "The message could not be sent. Please email info@valodesign.co.uk." },
      { status: 500 },
    );
  }
}
