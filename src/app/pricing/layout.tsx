import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Output-based pricing for AXIOM. Pay per skill execution across 5 levels — from free Explore outputs to Autonomous cycles. Assistant-based tiers starting free. No seats, no tokens, no meters.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
