import express from "express";
import prisma from "../services/prisma.js";

const router = express.Router();
export const getMembers = async (req, res) => {
  try {
    const members = await prisma.membershipApplication.findMany({
      orderBy: { createdAt: "desc" }
    });

    res.json(members);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch members" });
  }
};

router.get("/", async (req, res) => {
  try {
    const members = await prisma.membershipApplication.findMany({
      orderBy: { createdAt: "desc" }
    });

    res.json(members);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch members" });
  }
});



router.get("/:id", async (req, res) => {
  const member = await prisma.membershipApplication.findUnique({
    where: { id: Number(req.params.id) }
  });

  if (!member) return res.status(404).json(null);
  res.json(member);
});


export default router;
