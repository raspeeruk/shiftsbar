import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe/checkout";

export async function POST(req: NextRequest) {
  try {
    const priceId = process.env.STRIPE_PRICE_ID;
    if (!priceId) {
      return NextResponse.json(
        { error: "Stripe not configured" },
        { status: 500 }
      );
    }

    const origin = req.headers.get("origin") || "https://shiftsbar.com";

    const url = await createCheckoutSession(
      priceId,
      `${origin}/record?upgraded=true`,
      `${origin}/pricing`
    );

    return NextResponse.json({ url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Checkout failed" },
      { status: 500 }
    );
  }
}
