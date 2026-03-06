import "dotenv/config";
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();


import clientRegisterRoutes from "./src/routes/clientregister.routes.js";
import membershipRoutes from "./src/routes/register.routes.js";
import authRoutes from "./src/routes/auth.routes.js"; // ✅ login route
import membersRoutes from "./src/routes/members.routes.js";
import magicLinkRoutes from "./src/routes/magicLink.routes.js";
import registerRoutes from "./src/routes/register.routes.js";
import chatRoutes from "./src/routes/chat.js";


import paymentRoutes from "./src/routes/paymentRoutes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://r3zh6rrw-5173.inc1.devtunnels.ms",
      "https://global-business-alliance-1.onrender.com"
    ],
    credentials: true
  })
);
app.use(express.json());

app.use("/api/payment", paymentRoutes);

app.use("/uploads", express.static("uploads"));
app.use("/api/chat", chatRoutes);


// Routes
app.use("/api/auth", magicLinkRoutes);
app.use("/api/client-register", clientRegisterRoutes);
app.use("/api/memberships", membershipRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/members", registerRoutes);
app.use("/api/members", membersRoutes);
// Health check
app.get("/", (req, res) => {
  res.send("GBA Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
