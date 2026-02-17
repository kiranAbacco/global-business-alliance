import express from "express";
import bcrypt from "bcryptjs";
import prisma from "../services/prisma.js";
import { sendOtpEmail } from "../services/mailer.js";

const router = express.Router();

/* SEND OTP */
router.post("/send-otp", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.user.upsert({
      where: { email },
      update: {
        otp,
        otpExpiry: new Date(Date.now() + 10 * 60 * 1000)
      },
      create: {
        name,
        email,
        phone,
        otp,
        otpExpiry: new Date(Date.now() + 10 * 60 * 1000)
      }
    });

    try {
      await sendOtpEmail(email, otp);
    } catch (err) {
      console.error("Email failed:", err.message);
    }

    res.json({ message: "OTP sent to email" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* VERIFY OTP */
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    if (!email || !otp || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.otp !== otp || user.otpExpiry < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
        isVerified: true,
        otp: null,
        otpExpiry: null
      }
    });

    res.json({ message: "Account created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
