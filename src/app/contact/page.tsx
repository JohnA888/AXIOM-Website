import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a demo of AXIOM's AI operations platform or get in touch with our team. See how one platform can replace nine tools and save your organization over $800K per year.",
};

export default function ContactPage() {
  return <ContactContent />;
}
