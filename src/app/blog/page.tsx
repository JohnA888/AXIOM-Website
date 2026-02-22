import type { Metadata } from "next";
import { BlogContent } from "./blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, product updates, and engineering deep dives from the AXIOM team. Learn about AI operations, enterprise governance, and how teams are replacing nine tools with one platform.",
};

export default function BlogPage() {
  return <BlogContent />;
}
