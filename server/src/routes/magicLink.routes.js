import express from "express";
import crypto from "crypto";
import prisma from "../services/prisma.js";
import { sendMagicEmail } from "../services/mailService.js";

const router = express.Router();

router.post("/magic-link", async (req, res) => {
  try {
    console.log("📩 Magic link request received");

    const { email } = req.body;

    if (!email) {
      console.log("❌ Email missing");
      return res.status(400).json({ message: "Email is required" });
    }

    console.log("📧 Email:", email);

    // Generate token
    const token = crypto.randomBytes(32).toString("hex");

    console.log("🔑 Generated token:", token);

    // Save to DB
    const record = await prisma.magicLink.create({
      data: {
        email,
        token,
        expiresAt: new Date(Date.now() + 15 * 60000)
      }
    });

    console.log("💾 Magic link saved to DB:", record.id);

    // Generate link
    const link = `${process.env.API_URL}/api/auth/verify?token=${token}`;

    console.log("🔗 Magic link created:", link);

    // Send email
    console.log("📤 Sending email...");
    await sendMagicEmail(email, link);

    console.log("✅ Email sent successfully");

    res.json({
      success: true,
      message: "Magic link sent"
    });

  } catch (error) {
    console.error("❌ Magic link error:", error);
    res.status(500).json({ message: "Server error sending magic link" });
  }
});


router.get("/verify", async (req, res) => {
  try {
    const { token } = req.query;

    console.log("🔎 Verifying token:", token);

    const record = await prisma.magicLink.findFirst({
      where: {
        token,
        used: false
      }
    });

    if (!record) {
      console.log("❌ Invalid or used token");
      return res.send("Invalid or expired magic link");
    }

    console.log("✅ Valid token for:", record.email);

    await prisma.magicLink.update({
      where: { id: record.id },
      data: { used: true }
    });

    console.log("🔐 Token marked as used");

    const redirectUrl = `${process.env.CLIENT_URL}/join-now`;

    console.log("➡ Redirecting to:", redirectUrl);

    res.redirect(redirectUrl);

  } catch (error) {
    console.error("❌ Verify error:", error);
    res.status(500).send("Verification failed");
  }
});

export default router;