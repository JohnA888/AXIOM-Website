"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Calendar,
  Clock,
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
    title: "How a 500-Person Law Firm Replaced 9 Tools with AXIOM",
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

function BlogCardImage({ category }: { category: Exclude<Category, "All"> }) {
  const configs: Record<
    Exclude<Category, "All">,
    { gradient: [string, string]; pattern: React.ReactNode }
  > = {
    "Product Updates": {
      gradient: ["#4A90D9", "#1B2A4A"],
      pattern: (
        <>
          {/* Circuit-board pattern: circles + connecting lines */}
          <circle cx="60" cy="40" r="6" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <circle cx="180" cy="30" r="4" fill="rgba(255,255,255,0.1)" />
          <circle cx="300" cy="60" r="8" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <circle cx="420" cy="35" r="5" fill="rgba(255,255,255,0.08)" />
          <circle cx="140" cy="90" r="3" fill="rgba(255,255,255,0.15)" />
          <circle cx="350" cy="100" r="6" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <circle cx="500" cy="70" r="4" fill="rgba(255,255,255,0.12)" />
          <line x1="66" y1="40" x2="176" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="184" y1="30" x2="292" y2="60" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="308" y1="60" x2="415" y2="35" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="143" y1="90" x2="344" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="60" y1="46" x2="140" y2="87" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="356" y1="100" x2="496" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <circle cx="240" cy="120" r="10" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="250" y1="120" x2="350" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <circle cx="80" cy="130" r="3" fill="rgba(255,255,255,0.1)" />
          <circle cx="460" cy="120" r="5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </>
      ),
    },
    "Use Cases": {
      gradient: ["#27AE60", "#1B2A4A"],
      pattern: (
        <>
          {/* Org chart pattern: rectangles + connecting lines */}
          <rect x="220" y="15" width="40" height="22" rx="4" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <rect x="100" y="60" width="36" height="20" rx="3" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <rect x="340" y="60" width="36" height="20" rx="3" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <rect x="40" y="105" width="30" height="18" rx="3" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <rect x="140" y="105" width="30" height="18" rx="3" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <rect x="300" y="105" width="30" height="18" rx="3" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <rect x="400" y="105" width="30" height="18" rx="3" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="240" y1="37" x2="118" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="240" y1="37" x2="358" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="118" y1="80" x2="55" y2="105" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="118" y1="80" x2="155" y2="105" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="358" y1="80" x2="315" y2="105" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="358" y1="80" x2="415" y2="105" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <rect x="470" y="40" width="24" height="14" rx="2" fill="rgba(255,255,255,0.05)" />
          <rect x="490" y="90" width="20" height="12" rx="2" fill="rgba(255,255,255,0.04)" />
        </>
      ),
    },
    Engineering: {
      gradient: ["#1B2A4A", "#0F1923"],
      pattern: (
        <>
          {/* Code/gear pattern: angle brackets + circles */}
          <text x="50" y="50" fontFamily="monospace" fontSize="28" fill="rgba(255,255,255,0.12)" fontWeight="bold">{"<"}</text>
          <text x="90" y="50" fontFamily="monospace" fontSize="28" fill="rgba(255,255,255,0.08)" fontWeight="bold">{"/"}</text>
          <text x="115" y="50" fontFamily="monospace" fontSize="28" fill="rgba(255,255,255,0.12)" fontWeight="bold">{">"}</text>
          <circle cx="240" cy="65" r="22" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <circle cx="240" cy="65" r="12" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <circle cx="240" cy="65" r="3" fill="rgba(255,255,255,0.12)" />
          <text x="340" y="45" fontFamily="monospace" fontSize="20" fill="rgba(255,255,255,0.08)">{"{ }"}</text>
          <text x="430" y="80" fontFamily="monospace" fontSize="24" fill="rgba(255,255,255,0.06)" fontWeight="bold">{"<>"}</text>
          <line x1="50" y1="85" x2="180" y2="85" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="270" y1="85" x2="400" y2="85" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="420" cy="40" r="16" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="410" y1="40" x2="430" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="420" y1="30" x2="420" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <text x="80" y="120" fontFamily="monospace" fontSize="12" fill="rgba(255,255,255,0.05)">fn()</text>
          <text x="350" y="120" fontFamily="monospace" fontSize="12" fill="rgba(255,255,255,0.05)">0x1F</text>
          <circle cx="500" cy="110" r="8" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </>
      ),
    },
    Industry: {
      gradient: ["#F39C12", "#1B2A4A"],
      pattern: (
        <>
          {/* Chart/graph pattern: bars + trend line */}
          <rect x="60" y="90" width="20" height="40" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="100" y="70" width="20" height="60" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="140" y="55" width="20" height="75" rx="2" fill="rgba(255,255,255,0.12)" />
          <rect x="180" y="60" width="20" height="70" rx="2" fill="rgba(255,255,255,0.07)" />
          <rect x="220" y="40" width="20" height="90" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="260" y="50" width="20" height="80" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="300" y="30" width="20" height="100" rx="2" fill="rgba(255,255,255,0.13)" />
          <polyline
            points="70,85 110,65 150,50 190,55 230,35 270,45 310,25"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="70" cy="85" r="3" fill="rgba(255,255,255,0.2)" />
          <circle cx="150" cy="50" r="3" fill="rgba(255,255,255,0.2)" />
          <circle cx="230" cy="35" r="3" fill="rgba(255,255,255,0.2)" />
          <circle cx="310" cy="25" r="3" fill="rgba(255,255,255,0.2)" />
          <line x1="380" y1="100" x2="380" y2="30" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="380" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <rect x="400" y="70" width="14" height="30" rx="1" fill="rgba(255,255,255,0.05)" />
          <rect x="430" y="55" width="14" height="45" rx="1" fill="rgba(255,255,255,0.05)" />
          <rect x="460" y="45" width="14" height="55" rx="1" fill="rgba(255,255,255,0.06)" />
        </>
      ),
    },
    Comparisons: {
      gradient: ["#8B5CF6", "#1B2A4A"],
      pattern: (
        <>
          {/* Scale/balance pattern: triangles + connecting lines */}
          <line x1="240" y1="20" x2="240" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <line x1="120" y1="55" x2="360" y2="55" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <polygon points="240,15 248,28 232,28" fill="rgba(255,255,255,0.15)" />
          <line x1="120" y1="55" x2="100" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="120" y1="55" x2="140" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="100" y1="85" x2="140" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="360" y1="55" x2="340" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="360" y1="55" x2="380" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="340" y1="75" x2="380" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <polygon points="50,110 70,80 90,110" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <polygon points="430,100 450,70 470,100" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="90" y1="40" x2="50" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="390" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <circle cx="70" cy="40" r="2" fill="rgba(255,255,255,0.08)" />
          <circle cx="450" cy="40" r="2" fill="rgba(255,255,255,0.08)" />
        </>
      ),
    },
  };

  const config = configs[category];

  return (
    <div className="relative aspect-[16/9] overflow-hidden">
      <svg
        viewBox="0 0 540 140"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`grad-${category.replace(/\s/g, "")}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={config.gradient[0]} />
            <stop offset="100%" stopColor={config.gradient[1]} />
          </linearGradient>
        </defs>
        <rect width="540" height="140" fill={`url(#grad-${category.replace(/\s/g, "")})`} />
        {config.pattern}
        {/* AXIOM "A" logo mark in bottom-right corner */}
        <g transform="translate(500, 110)" opacity="0.12">
          <polygon points="15,0 25,28 5,28" fill="white" />
          <line x1="10" y1="18" x2="20" y2="18" stroke="white" strokeWidth="2" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-navy/0 group-hover:bg-white/5 transition-colors duration-300" />
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg hover:border-accent-blue/20 transition-all duration-300"
    >
      {/* Category Branded Image */}
      <BlogCardImage category={post.category} />

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
