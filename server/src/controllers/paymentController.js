import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const { currency } = req.body;

    // 🔥 Map each currency to its Stripe Price ID
    const priceMap = {
     
  USD: "price_1QnREALTESTIDxxxx",


      EUR: "price_EUR_ID_HERE",
      GBP: "price_GBP_ID_HERE",
      INR: "price_INR_ID_HERE",
    };

    const priceId = priceMap[currency];

    if (!priceId) {
      return res.status(400).json({ error: "Invalid currency selected" });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/pricing`,
    });

    res.json({ url: session.url });

  } catch (error) {
    console.error("Stripe error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

