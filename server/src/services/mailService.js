import nodemailer from "nodemailer";

console.log("📨 Initializing Brevo SMTP transporter...");

export const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
  connectionTimeout: 20000,
  greetingTimeout: 20000,
  socketTimeout: 20000
});

// Verify SMTP connection on server start
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP connection failed:", error);
  } else {
    console.log("✅ Brevo SMTP server is ready to send emails");
  }
});

export async function sendMagicEmail(email, link) {
  try {
    console.log("📧 Preparing magic link email...");
    console.log("📩 Recipient:", email);
    console.log("🔗 Magic link:", link);

    const info = await transporter.sendMail({
      from: `"Global Business Alliance" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Your GBA Login Link",
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;padding:20px">
          <h2>Global Business Alliance</h2>

          <p>Hello,</p>

          <p>Click the button below to access your account:</p>

          <a href="${link}" 
            style="
              display:inline-block;
              padding:12px 24px;
              background:#2563eb;
              color:#ffffff;
              text-decoration:none;
              border-radius:6px;
              font-weight:bold;
            ">
            Access your account
          </a>

          <p style="margin-top:20px">
            Or copy this link into your browser:
          </p>

          <p style="word-break:break-all;color:#2563eb">
            ${link}
          </p>

          <p style="margin-top:20px;font-size:12px;color:#666">
            This magic link will expire in 15 minutes.
          </p>

          <p style="font-size:12px;color:#999">
            Global Business Alliance
          </p>
        </div>
      `
    });

    console.log("✅ Email successfully sent!");
    console.log("📨 Message ID:", info.messageId);

  } catch (error) {
    console.error("❌ Email sending failed:");
    console.error(error);
    throw error;
  }
}