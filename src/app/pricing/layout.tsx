import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for AXIOM. Free for teams under 5. Pro at $29/user/month. Enterprise with custom deployment options. Compare the cost of nine separate tools vs one platform.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
