import nodemailer from "nodemailer";

console.log("📨 Initializing SMTP transporter...");

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP connection failed:", error);
  } else {
    console.log("✅ SMTP server is ready to send emails");
  }
});


export async function sendMagicEmail(email, link) {
  try {
    console.log("📧 Preparing email...");
    console.log("To:", email);
    console.log("Magic Link:", link);

    const info = await transporter.sendMail({
      from: `"Global Business Alliance" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Your GBA Login Link",
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>Global Business Alliance</h2>
          <p>Click the link below to continue:</p>
          <a href="${link}" 
             style="display:inline-block;padding:10px 20px;background:#2563eb;color:white;text-decoration:none;border-radius:6px">
             Access your account
          </a>
          <p style="margin-top:20px;font-size:12px;color:#666">
          This link expires in 15 minutes.
          </p>
        </div>
      `
    });

    console.log("✅ Email sent!");
    console.log("📬 Message ID:", info.messageId);

  } catch (error) {
    console.error("❌ Email sending failed:", error);
    throw error;
  }
}