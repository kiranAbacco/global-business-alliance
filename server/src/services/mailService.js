import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

export async function sendMagicEmail(email, link) {
  await transporter.sendMail({
    from: "GBA <noreply@gba.com>",
    to: email,
    subject: "Your GBA Login Link",
    html: `
      <h2>Global Business Alliance</h2>
      <p>Click to continue:</p>
      <a href="${link}">${link}</a>
    `
  });
}
