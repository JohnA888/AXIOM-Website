import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Rocket,
  Settings,
  Code,
  Mail,
  Calendar,
  Mic,
  Shield,
  Puzzle,
  Database,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Get started with AXIOM. Setup guides, API reference, skill authoring, and integration walkthroughs.",
};

const sections = [
  {
    title: "Getting Started",
    description:
      "Account setup, OpenRouter API key configuration, connecting your first integration, and running your first skill.",
    icon: Rocket,
    href: "#getting-started",
  },
  {
    title: "Core Concepts",
    description:
      "Skills, workflows, Policy Engine, memory system, MCP servers, and the heartbeat scheduler.",
    icon: BookOpen,
    href: "#core-concepts",
  },
  {
    title: "Email Intelligence",
    description:
      "Configure AI triage, smart drafts, follow-up tracking, and inbox zero workflows.",
    icon: Mail,
    href: "#email",
  },
  {
    title: "Calendar & Scheduling",
    description:
      "Smart time blocking, focus protection, habit scheduling, and scheduling links.",
    icon: Calendar,
    href: "#calendar",
  },
  {
    title: "Meeting Intelligence",
    description:
      "Recording, transcription, summaries, action items, and CRM sync.",
    icon: Mic,
    href: "#meetings",
  },
  {
    title: "Policy Engine",
    description:
      "Configure governance rules, approval workflows, spend limits, and data classification.",
    icon: Shield,
    href: "#policy",
  },
  {
    title: "Administration",
    description:
      "User management, SSO/SAML setup, deployment options, and secrets management.",
    icon: Settings,
    href: "#admin",
  },
  {
    title: "API Reference",
    description:
      "REST API endpoints, authentication, rate limits, webhook events, and error codes.",
    icon: Code,
    href: "#api",
  },
  {
    title: "Skill Development",
    description:
      "Skill manifest format, MCP tool access, permissions model, testing, and publishing.",
    icon: Puzzle,
    href: "#skills",
  },
  {
    title: "Integrations",
    description:
      "Per-integration setup guides for Gmail, Outlook, Zoom, Teams, Salesforce, and more.",
    icon: Database,
    href: "#integrations",
  },
];

export default function DocsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-dark-bg bg-grid-pattern py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Documentation
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Everything you need to set up, configure, and get the most out of
            AXIOM. From your first skill to advanced enterprise deployments.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="relative flex-1 max-w-lg">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doc Sections Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group rounded-xl border border-gray-200 p-6 hover:border-accent-blue hover:shadow-lg transition-all"
            >
              <section.icon className="h-8 w-8 text-accent-blue mb-4" />
              <h2 className="text-lg font-semibold text-navy mb-2 group-hover:text-accent-blue transition-colors">
                {section.title}
              </h2>
              <p className="text-sm text-muted-text mb-4">
                {section.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-navy mb-8">Quick Start</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Create your account",
                desc: "Sign up for free — no credit card required.",
              },
              {
                step: "2",
                title: "Add your OpenRouter key",
                desc: "Create a free OpenRouter account and paste your API key.",
              },
              {
                step: "3",
                title: "Connect your tools",
                desc: "Link Gmail, Outlook, Google Calendar, or any supported integration.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl bg-white border border-gray-200 p-6"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-blue text-white font-bold text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
                <p className="text-sm text-muted-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <div className="rounded-xl border border-dashed border-gray-300 bg-accent-light/30 p-12">
          <BookOpen className="mx-auto h-12 w-12 text-accent-blue mb-4" />
          <h2 className="text-xl font-semibold text-navy mb-2">
            Full documentation coming soon
          </h2>
          <p className="text-muted-text max-w-md mx-auto">
            We&apos;re building comprehensive guides for every feature. In the
            meantime, reach out to our team for help getting started.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-blue px-6 py-3 text-sm font-medium text-white hover:bg-accent-blue/90 transition-colors"
          >
            Contact Support <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
