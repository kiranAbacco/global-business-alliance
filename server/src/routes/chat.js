import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const text = req.body.message.toLowerCase();

  const intents = [
    {
      keys: ["hi", "hello", "hey"],
      reply: "Hi 👋 Welcome to Global Business Alliance!"
    },
    {
      keys: ["how", "work", "platform"],
      reply: "GBA is a global B2B directory where companies register, get verified, and connect with international partners."
    },
    {
      keys: ["price", "pricing", "cost", "plan"],
      reply: "Our pricing starts at $29/month. We also offer a 30-day free trial."
    },
    {
      keys: ["free", "trial"],
      reply: "Yes! You get full access for 30 days with no credit card required."
    },
    {
      keys: ["register", "signup", "join"],
      reply: "Click on Register Free and create your company profile in just a few minutes."
    },
    {
      keys: ["members", "companies"],
      reply: "We have thousands of verified businesses from over 40 countries."
    },
    {
      keys: ["industry", "industries"],
      reply: "We support manufacturers, SaaS, exporters, consultants, and many more industries."
    },
    {
      keys: ["contact", "support", "help"],
      reply: "You can contact our support team at support@gba.com"
    }
  ];

  // find best match
  const match = intents.find(intent =>
    intent.keys.some(key => text.includes(key))
  );

  const reply = match
    ? match.reply
    : "I'm here to help 😊 Try asking about pricing, trial, registration, or how the platform works.";

  res.json({ reply });
});

export default router;
