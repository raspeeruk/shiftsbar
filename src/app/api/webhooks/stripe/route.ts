import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!key || !webhookSecret) {
    return NextResponse.json(
      { error: "Stripe not configured" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(key);
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      { error: "No signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch {
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  switch (event.type) {
    case "checkout.session.completed":
      // For v1: log subscription. Database integration later.
      console.log("New subscription:", event.data.object);
      break;

    case "customer.subscription.deleted":
      console.log("Subscription cancelled:", event.data.object);
      break;

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
