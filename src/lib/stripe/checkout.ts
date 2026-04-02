import Stripe from "stripe";

let stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY not configured");
    stripe = new Stripe(key);
  }
  return stripe;
}

export async function createCheckoutSession(
  priceId: string,
  successUrl: string,
  cancelUrl: string
): Promise<string> {
  const s = getStripe();

  const session = await s.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  if (!session.url) throw new Error("Failed to create checkout session");
  return session.url;
}
