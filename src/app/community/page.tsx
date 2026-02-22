import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Github,
  BookOpen,
  ArrowRight,
  FileText,
  Code2,
  Newspaper,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the AXIOM community. Connect with other users, contribute on GitHub, access documentation, and stay up to date with the latest product news.",
};

const communityChannels = [
  {
    icon: MessageCircle,
    title: "Discord",
    description:
      "Chat with the AXIOM team and community in real time. Get help, share workflows, and discuss best practices.",
    href: "#",
    cta: "Join Discord",
    color: "bg-[#5865F2]/10 text-[#5865F2]",
    hoverBorder: "hover:border-[#5865F2]/30",
  },
  {
    icon: Github,
    title: "GitHub",
    description:
      "Report issues, request features, contribute to open-source skills, and explore our public roadmap.",
    href: "#",
    cta: "View GitHub",
    color: "bg-navy/10 text-navy",
    hoverBorder: "hover:border-navy/30",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description:
      "Comprehensive guides for setup, configuration, policy authoring, skill creation, and API integration.",
    href: "/docs",
    cta: "Read Docs",
    color: "bg-accent-blue/10 text-accent-blue",
    hoverBorder: "hover:border-accent-blue/30",
  },
];

const resources = [
  {
    icon: FileText,
    title: "Documentation",
    description: "Setup guides, API reference, and tutorials.",
    href: "/docs",
  },
  {
    icon: Newspaper,
    title: "Blog",
    description: "Product updates, engineering deep dives, and case studies.",
    href: "/blog",
  },
  {
    icon: Code2,
    title: "API Reference",
    description: "Full REST and webhook API documentation.",
    href: "/docs",
  },
  {
    icon: BookOpen,
    title: "Changelog",
    description: "Every release, update, and improvement tracked.",
    href: "/changelog",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark-bg bg-grid-pattern pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(74,144,217,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 bg-accent-blue/20 text-accent-blue border-accent-blue/30 hover:bg-accent-blue/20">
              Community
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Join the{" "}
              <span className="text-gradient">AXIOM Community</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Connect with operators, engineers, and AI enthusiasts building
              the future of governed AI operations. Share workflows, get help,
              and shape the product roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-blue uppercase tracking-wide">
              Connect
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Find your community.
            </h2>
            <p className="mt-4 text-lg text-muted-text">
              Multiple ways to engage, learn, and contribute.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {communityChannels.map((channel) => (
              <div
                key={channel.title}
                className={`group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-lg ${channel.hoverBorder}`}
              >
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${channel.color}`}
                >
                  <channel.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  {channel.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed flex-1">
                  {channel.description}
                </p>
                <Link
                  href={channel.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-accent-blue hover:underline"
                >
                  {channel.cta}
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full bg-warning/10 px-4 py-1.5 text-xs font-semibold text-warning uppercase tracking-wide">
              Resources
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Community Resources
            </h2>
            <p className="mt-4 text-lg text-muted-text">
              Everything you need to build, integrate, and automate with AXIOM.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-accent-blue/30 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-accent-light p-3 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                  <resource.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-navy mb-1">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-surface p-8 md:p-12 text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-accent-blue/10 p-3 text-accent-blue">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
              Stay in the loop
            </h2>
            <p className="mt-3 text-muted-text">
              Get product updates, engineering insights, and community
              highlights delivered to your inbox. No spam, unsubscribe anytime.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm text-body-text placeholder:text-muted-text focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all"
              />
              <Button className="rounded-full bg-accent-blue px-6 text-white hover:bg-accent-blue/90">
                Subscribe
              </Button>
            </form>
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
            Building something with AXIOM? We&apos;d love to hear about it.
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Share your use case, get featured on our blog, or just say hello.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-navy hover:bg-gray-100 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
