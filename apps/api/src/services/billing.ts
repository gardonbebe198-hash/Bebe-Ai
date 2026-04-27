import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET || "");

// =====================================
// 💳 STRIPE BILLING SERVICE
// =====================================

export const billingService = {
  
  async createCheckoutSession(email: string) {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        customer_email: email,
        line_items: [
          {
            price: process.env.STRIPE_PRICE_ID,
            quantity: 1
          }
        ],
        success_url: `${process.env.NEXT_PUBLIC_API_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/cancel`
      });

      console.log("✅ Checkout session created:", session.id);
      return session;
    } catch (error) {
      console.error("❌ Stripe error:", error);
      throw error;
    }
  },

  async handleWebhook(event: any) {
    try {
      switch (event.type) {
        case "checkout.session.completed":
          console.log("✅ Payment successful:", event.data.object);
          break;
        case "customer.subscription.updated":
          console.log("✅ Subscription updated:", event.data.object);
          break;
        default:
          console.log("Event:", event.type);
      }
    } catch (error) {
      console.error("❌ Webhook error:", error);
      throw error;
    }
  }
};