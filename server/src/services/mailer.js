import nodemailer from "nodemailer";

console.log("📨 Initializing Brevo SMTP transporter for OTP...");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 2525,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000
});

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP connection failed:", error);
  } else {
    console.log("✅ Brevo SMTP ready for OTP emails");
  }
});

export const sendOtpEmail = async (email, otp) => {
  try {
    console.log("📧 Sending OTP email...");
    console.log("📩 Recipient:", email);
    console.log("🔐 OTP:", otp);

    const info = await transporter.sendMail({
      from: `"Global Business Alliance" <${process.env.MAIL_FROM}>`,
      to: email,
      subject: "Your GBA Verification Code",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>Global Business Alliance</h2>

          <p>Your verification code is:</p>

          <div style="
            font-size:32px;
            font-weight:bold;
            letter-spacing:5px;
            margin:20px 0;
            color:#2563eb;
          ">
            ${otp}
          </div>

          <p>This code will expire in <b>10 minutes</b>.</p>

          <p style="font-size:12px;color:#777;margin-top:20px">
            If you didn't request this code, you can safely ignore this email.
          </p>
        </div>
      `
    });

    console.log("✅ OTP email sent!");
    console.log("📨 Message ID:", info.messageId);

  } catch (error) {
    console.error("❌ OTP email failed:", error);
    throw error;
  }
};