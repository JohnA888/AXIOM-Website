import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by operators, for operators. Learn about AXIOM's mission to give every organization a tireless, trustworthy AI operations team — born from real-world enterprise experience at TSC Texas.",
};

export default function AboutPage() {
  return <AboutContent />;
}
