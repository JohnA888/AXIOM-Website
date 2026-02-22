import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS } from "@/data/site-data";

const categoryColorMap: Record<string, string> = {
  "Product Updates": "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  "Use Cases": "bg-success/10 text-success border-success/20",
  Engineering: "bg-navy/10 text-navy border-navy/20",
  Industry: "bg-warning/10 text-warning border-warning/20",
  Comparisons: "bg-purple-100 text-purple-700 border-purple-200",
};

type CategoryGradient = { gradient: [string, string]; patternId: string };

const categoryGradients: Record<string, CategoryGradient> = {
  "Product Updates": { gradient: ["#4A90D9", "#1B2A4A"], patternId: "ProductUpdates" },
  "Use Cases": { gradient: ["#27AE60", "#1B2A4A"], patternId: "UseCases" },
  Engineering: { gradient: ["#1B2A4A", "#0F1923"], patternId: "Engineering" },
  Industry: { gradient: ["#F39C12", "#1B2A4A"], patternId: "Industry" },
  Comparisons: { gradient: ["#8B5CF6", "#1B2A4A"], patternId: "Comparisons" },
};

function CategoryPattern({ category }: { category: string }) {
  switch (category) {
    case "Product Updates":
      return (
        <>
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
      );
    case "Use Cases":
      return (
        <>
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
      );
    case "Engineering":
      return (
        <>
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
      );
    case "Industry":
      return (
        <>
          <rect x="60" y="90" width="20" height="40" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="100" y="70" width="20" height="60" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="140" y="55" width="20" height="75" rx="2" fill="rgba(255,255,255,0.12)" />
          <rect x="180" y="60" width="20" height="70" rx="2" fill="rgba(255,255,255,0.07)" />
          <rect x="220" y="40" width="20" height="90" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="260" y="50" width="20" height="80" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="300" y="30" width="20" height="100" rx="2" fill="rgba(255,255,255,0.13)" />
          <polyline points="70,85 110,65 150,50 190,55 230,35 270,45 310,25" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
      );
    case "Comparisons":
      return (
        <>
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
      );
    default:
      return null;
  }
}

function HeroCategoryImage({ category }: { category: string }) {
  const config = categoryGradients[category] || categoryGradients["Product Updates"];
  return (
    <div className="relative aspect-[2/1] rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
      <svg
        viewBox="0 0 540 270"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`hero-grad-${config.patternId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={config.gradient[0]} />
            <stop offset="100%" stopColor={config.gradient[1]} />
          </linearGradient>
        </defs>
        <rect width="540" height="270" fill={`url(#hero-grad-${config.patternId})`} />
        {/* Scaled-up pattern centered in hero */}
        <g transform="translate(0, 65)">
          <CategoryPattern category={category} />
        </g>
        {/* Duplicate pattern at top for fuller coverage */}
        <g transform="translate(40, -10) scale(0.8)" opacity="0.6">
          <CategoryPattern category={category} />
        </g>
        {/* AXIOM "A" logo mark - larger for hero */}
        <g transform="translate(490, 230)" opacity="0.15">
          <polygon points="20,0 34,38 6,38" fill="white" />
          <line x1="12" y1="24" x2="28" y2="24" stroke="white" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function CardCategoryImage({ category }: { category: string }) {
  const config = categoryGradients[category] || categoryGradients["Product Updates"];
  return (
    <div className="relative aspect-[16/9] overflow-hidden">
      <svg
        viewBox="0 0 540 140"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`card-grad-${config.patternId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={config.gradient[0]} />
            <stop offset="100%" stopColor={config.gradient[1]} />
          </linearGradient>
        </defs>
        <rect width="540" height="140" fill={`url(#card-grad-${config.patternId})`} />
        <CategoryPattern category={category} />
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

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark-bg bg-grid-pattern pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(74,144,217,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Category Badge */}
          <Badge
            className={`mb-4 ${categoryColorMap[post.category] || "bg-accent-blue/10 text-accent-blue border-accent-blue/20"}`}
          >
            {post.category}
          </Badge>

          {/* Title */}
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 -mt-8">
          <HeroCategoryImage category={post.category} />
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <article className="prose prose-lg max-w-none">
            <div
              className="text-body-text leading-relaxed text-base md:text-lg"
              style={{ whiteSpace: "pre-line" }}
            >
              {post.body}
            </div>
          </article>

          {/* Tags / Share */}
          <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
            <Badge
              className={`${categoryColorMap[post.category] || "bg-accent-blue/10 text-accent-blue border-accent-blue/20"}`}
            >
              {post.category}
            </Badge>
            <Link
              href="/blog"
              className="text-sm font-medium text-accent-blue hover:underline"
            >
              View all posts
            </Link>
          </div>
        </div>
      </section>

      {/* Continue Reading */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
              Continue Reading
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:border-accent-blue/20 transition-all duration-300"
              >
                {/* Category Branded Image */}
                <CardCategoryImage category={relatedPost.category} />

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <Badge
                    className={`mb-3 w-fit text-xs ${categoryColorMap[relatedPost.category] || "bg-accent-blue/10 text-accent-blue border-accent-blue/20"}`}
                  >
                    {relatedPost.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-navy leading-snug group-hover:text-accent-blue transition-colors duration-200 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-text leading-relaxed line-clamp-3 flex-1">
                    {relatedPost.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-4 text-xs text-muted-text">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {relatedPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-accent-blue group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1B2A4A 0%, #4A90D9 100%)",
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
            Ready to replace 9 tools with one?
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Free for teams under 5. No credit card required.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-navy hover:bg-gray-100 transition-colors"
            >
              Start Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 hover:bg-white/10 transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
