import express from "express";
import crypto from "crypto";
import prisma from "../services/prisma.js";
import { sendMagicEmail } from "../services/mailService.js";

const router = express.Router();

router.post("/magic-link", async (req, res) => {
  try {

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    const token = crypto.randomBytes(32).toString("hex");

    await prisma.magicLink.create({
      data: {
        email,
        token,
        expiresAt: new Date(Date.now() + 15 * 60000)
      }
    });

    const link = `${process.env.API_URL}/api/auth/verify?token=${token}`;

    await sendMagicEmail(email, link);

    res.json({ success: true });

  } catch (error) {
    console.error("Magic link error:", error);
    res.status(500).json({ message: "Failed to send magic link" });
  }
});
router.get("/verify", async (req, res) => {
  const record = await prisma.magicLink.findFirst({
    where: { token: req.query.token, used: false }
  });

  if (!record) return res.send("Invalid link");

  await prisma.magicLink.update({
    where: { id: record.id },
    data: { used: true }
  });

  res.redirect(`${process.env.CLIENT_URL}/join-now`);
});

export default router;
