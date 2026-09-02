import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Card from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "ShiftSBAR pricing — 3 free SBAR reports per day, or unlimited for $9.99/month.",
  alternates: { canonical: "/pricing" },
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "3 reports per day",
      "Voice + text input",
      "Full SBAR structuring",
      "Priority flagging",
      "PDF export",
    ],
    cta: "Start Free",
    href: "/record",
    accent: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    features: [
      "Unlimited reports",
      "Everything in Free",
      "Report history (coming soon)",
      "Multi-patient batching (coming soon)",
      "Priority support",
    ],
    cta: "Go Pro",
    href: "/record",
    accent: true,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-heading font-bold text-3xl mb-2">
            Simple Pricing for Nurses
          </h1>
          <p className="text-text-secondary">
            Free to start. Pro when you need unlimited.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${
                plan.accent ? "border-accent/50 ring-1 ring-accent/20" : ""
              }`}
            >
              {plan.accent && (
                <span className="text-accent text-[10px] font-mono font-semibold uppercase tracking-wider mb-2">
                  Most Popular
                </span>
              )}
              <h2 className="font-heading font-bold text-xl mb-1">
                {plan.name}
              </h2>
              <div className="mb-4">
                <span className="font-heading font-bold text-3xl">
                  {plan.price}
                </span>
                <span className="text-text-secondary text-sm">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke={plan.accent ? "#22C55E" : "#9CA3AF"}
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`w-full py-2.5 rounded-md text-sm font-semibold text-center transition-colors block ${
                  plan.accent
                    ? "bg-accent hover:bg-accent-hover text-bg"
                    : "bg-surface hover:bg-border text-text border border-border"
                }`}
              >
                {plan.cta}
              </Link>
            </Card>
          ))}
        </div>

        <p className="text-center text-text-secondary text-xs mt-8">
          No credit card required for Free plan. Cancel Pro anytime.
        </p>
      </main>
      <Footer />
    </div>
  );
}
