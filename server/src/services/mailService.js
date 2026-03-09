import nodemailer from "nodemailer";

console.log("📨 Initializing Brevo SMTP transporter...");

export const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 2525, // recommended for cloud servers
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000
});

// Verify SMTP connection
transporter.verify(function (error, success) {
  if (error) {
    console.error("❌ SMTP connection failed:", error);
  } else {
    console.log("✅ Brevo SMTP server ready");
  }
});

export async function sendMagicEmail(email, link) {
  try {
    console.log("📧 Preparing magic link email...");
    console.log("📩 Recipient:", email);
    console.log("🔗 Magic link:", link);

    const info = await transporter.sendMail({
      from: `"Global Business Alliance" <${process.env.MAIL_FROM}>`,
      to: email,
      subject: "Your GBA Login Link",
      html: `
        <div style="font-family:Arial, sans-serif; padding:20px">
          <h2>Global Business Alliance</h2>

          <p>Hello,</p>

          <p>Click the button below to access your account:</p>

          <a href="${link}"
            style="
              display:inline-block;
              padding:12px 24px;
              background:#2563eb;
              color:white;
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
            This link expires in 15 minutes.
          </p>

          <p style="font-size:12px;color:#999">
            Global Business Alliance Team
          </p>
        </div>
      `
    });

    console.log("✅ Email sent successfully!");
    console.log("📨 Message ID:", info.messageId);

  } catch (error) {
    console.error("❌ Email sending failed:");
    console.error(error);
    throw error;
  }
}