import type { Metadata } from "next";
import { FeaturesContent } from "./features-content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore AXIOM's complete feature set — email intelligence, smart scheduling, meeting transcription, policy governance, memory systems, and 37+ built-in AI skills in one unified platform.",
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
