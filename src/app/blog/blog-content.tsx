"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Calendar,
  Clock,
  ImageIcon,
  Search,
  Loader2,
} from "lucide-react";

type Category =
  | "All"
  | "Product Updates"
  | "Use Cases"
  | "Engineering"
  | "Industry"
  | "Comparisons";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, "All">;
  date: string;
  readTime: string;
  slug: string;
};

const categories: Category[] = [
  "All",
  "Product Updates",
  "Use Cases",
  "Engineering",
  "Industry",
  "Comparisons",
];

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Introducing AXIOM 2.0: Unified AI Operations for the Enterprise",
    excerpt:
      "Today we are launching AXIOM 2.0 with a redesigned policy engine, expanded memory systems, and native air-gap deployment support. Here is what is new and why it matters.",
    category: "Product Updates",
    date: "Feb 18, 2026",
    readTime: "5 min read",
    slug: "introducing-axiom-2-0",
  },
  {
    id: "2",
    title: "How a 500-Person Law Firm Replaced 11 Tools with AXIOM",
    excerpt:
      "Goldstein & Associates was spending $1.2M annually on disconnected AI tools. Within 90 days of deploying AXIOM, they consolidated to a single platform and cut costs by 68%.",
    category: "Use Cases",
    date: "Feb 12, 2026",
    readTime: "8 min read",
    slug: "law-firm-case-study",
  },
  {
    id: "3",
    title: "Building a Multi-Tenant Policy Engine: Lessons from Production",
    excerpt:
      "A deep dive into how we architected AXIOM's policy governance layer to handle thousands of concurrent organizations, each with their own rules, permissions, and compliance requirements.",
    category: "Engineering",
    date: "Feb 5, 2026",
    readTime: "12 min read",
    slug: "multi-tenant-policy-engine",
  },
  {
    id: "4",
    title: "The Hidden Cost of AI Tool Sprawl in Enterprise Organizations",
    excerpt:
      "The average enterprise now uses 9.4 separate AI tools across departments. We break down the real costs — licensing, integration, security, and the hidden tax of context switching.",
    category: "Industry",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    slug: "hidden-cost-ai-tool-sprawl",
  },
  {
    id: "5",
    title: "AXIOM vs. Building Your Own: A Total Cost of Ownership Analysis",
    excerpt:
      "We often hear 'we will build it ourselves.' Here is an honest breakdown of what it takes to build, maintain, and govern an AI operations platform versus using AXIOM off the shelf.",
    category: "Comparisons",
    date: "Jan 20, 2026",
    readTime: "10 min read",
    slug: "axiom-vs-build-your-own",
  },
  {
    id: "6",
    title: "New: Smart Meeting Summaries with Action Item Extraction",
    excerpt:
      "AXIOM's meeting intelligence now automatically extracts action items, assigns owners, and creates follow-up tasks — all governed by your organization's policies.",
    category: "Product Updates",
    date: "Jan 14, 2026",
    readTime: "4 min read",
    slug: "smart-meeting-summaries",
  },
  {
    id: "7",
    title: "How Financial Services Teams Use AXIOM for Compliant AI Operations",
    excerpt:
      "Regulated industries face unique challenges with AI adoption. Learn how banks and financial institutions deploy AXIOM with full audit trails and compliance-first governance.",
    category: "Use Cases",
    date: "Jan 7, 2026",
    readTime: "7 min read",
    slug: "financial-services-compliant-ai",
  },
  {
    id: "8",
    title: "Real-Time Memory Systems: How AXIOM Learns Without Forgetting",
    excerpt:
      "An engineering deep dive into AXIOM's contextual memory architecture — how we give the AI long-term recall while maintaining data isolation between tenants and respecting retention policies.",
    category: "Engineering",
    date: "Dec 30, 2025",
    readTime: "14 min read",
    slug: "real-time-memory-systems",
  },
];

const categoryColorMap: Record<Exclude<Category, "All">, string> = {
  "Product Updates": "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  "Use Cases": "bg-success/10 text-success border-success/20",
  Engineering: "bg-navy/10 text-navy border-navy/20",
  Industry: "bg-warning/10 text-warning border-warning/20",
  Comparisons: "bg-purple-100 text-purple-700 border-purple-200",
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg hover:border-accent-blue/20 transition-all duration-300"
    >
      {/* Image Placeholder */}
      <div className="relative aspect-[16/9] bg-surface flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center gap-2 text-muted-text">
          <ImageIcon className="h-10 w-10" />
          <span className="text-xs font-medium">Featured Image</span>
        </div>
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <Badge
          className={`mb-3 w-fit text-xs ${categoryColorMap[post.category]}`}
        >
          {post.category}
        </Badge>
        <h3 className="text-lg font-bold text-navy leading-snug group-hover:text-accent-blue transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted-text leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-4 text-xs text-muted-text">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-accent-blue group-hover:translate-x-1 transition-all duration-200" />
        </div>
      </div>
    </Link>
  );
}

export function BlogContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoadingMore(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 bg-accent-blue/20 text-accent-blue border-accent-blue/30 hover:bg-accent-blue/20">
              AXIOM Blog
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-up">
              Insights &{" "}
              <span className="text-gradient">Updates</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed animate-fade-up delay-200">
              Product news, engineering deep dives, customer stories, and
              perspectives on the future of AI operations from the AXIOM team.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters + Content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Category Filter Tabs */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-accent-blue text-white shadow-md"
                    : "bg-surface text-muted-text hover:text-body-text hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Post Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="h-12 w-12 text-muted-text mb-4" />
              <h3 className="text-lg font-bold text-navy mb-2">
                No posts found
              </h3>
              <p className="text-muted-text max-w-sm">
                There are no blog posts in the &quot;{activeCategory}&quot;
                category yet. Check back soon or browse another category.
              </p>
            </div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="mt-16 flex justify-center">
              <Button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-gray-200 text-body-text hover:border-accent-blue hover:text-accent-blue"
              >
                {isLoadingMore ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Load More Posts"
                )}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
