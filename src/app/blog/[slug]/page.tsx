import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  ImageIcon,
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

      {/* Featured Image Placeholder */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 -mt-8">
          <div className="relative aspect-[2/1] rounded-2xl bg-surface border border-gray-200 flex items-center justify-center overflow-hidden shadow-lg">
            <div className="flex flex-col items-center gap-2 text-muted-text">
              <ImageIcon className="h-12 w-12" />
              <span className="text-sm font-medium">Featured Image</span>
            </div>
          </div>
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
                {/* Image Placeholder */}
                <div className="relative aspect-[16/9] bg-surface flex items-center justify-center overflow-hidden">
                  <div className="flex flex-col items-center gap-2 text-muted-text">
                    <ImageIcon className="h-8 w-8" />
                    <span className="text-xs font-medium">Featured Image</span>
                  </div>
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-300" />
                </div>

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
