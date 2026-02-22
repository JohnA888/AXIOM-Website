import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Eye,
  Rocket,
  Boxes,
  Globe,
  TrendingUp,
  GraduationCap,
  Heart,
  Coffee,
  Laptop,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the AXIOM team. We are building the future of governed AI operations. Remote-first, equity included, and a mission that matters.",
};

const values = [
  {
    icon: Shield,
    title: "AI Sovereignty",
    description:
      "We believe organizations should own their AI infrastructure, data, and decision-making. No vendor lock-in, no opaque models — full control.",
  },
  {
    icon: Eye,
    title: "Trust Through Transparency",
    description:
      "Every AI action is logged, every policy is inspectable, every memory is human-readable. We build systems people can trust because they can verify.",
  },
  {
    icon: Rocket,
    title: "Ship What Matters",
    description:
      "We focus on outcomes, not output. We ship features that solve real problems for real operators — and we cut scope ruthlessly to do it well.",
  },
  {
    icon: Boxes,
    title: "Think in Systems",
    description:
      "Individual features are nice. Interconnected systems that amplify each other are powerful. We design for the whole, not just the parts.",
  },
];

const benefits = [
  {
    icon: Laptop,
    title: "Remote-First",
    description: "Work from anywhere. We are distributed across the US with an HQ in Austin, TX.",
  },
  {
    icon: TrendingUp,
    title: "Meaningful Equity",
    description: "Every team member gets equity. We are building this together.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "$2,000/year for conferences, courses, books, and tools to sharpen your craft.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision coverage for you and your family.",
  },
  {
    icon: Coffee,
    title: "Flexible Schedule",
    description: "We care about results, not hours logged. Take the time you need to do your best work.",
  },
  {
    icon: Globe,
    title: "Team Retreats",
    description: "Quarterly in-person gatherings to connect, strategize, and build relationships.",
  },
];

export default function CareersPage() {
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
              Careers
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build the Future of{" "}
              <span className="text-gradient">AI Operations</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              We are a small, focused team building something ambitious. Join us
              in creating the governed AI platform that enterprises trust to run
              their operations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-blue uppercase tracking-wide">
              Our Values
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              What we believe.
            </h2>
            <p className="mt-4 text-lg text-muted-text">
              These principles guide every decision we make — from product
              architecture to hiring.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 hover:border-accent-blue/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-accent-light p-3 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full bg-success/10 px-4 py-1.5 text-xs font-semibold text-success uppercase tracking-wide">
              Benefits
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Built for great work.
            </h2>
            <p className="mt-4 text-lg text-muted-text">
              We invest in our team so you can focus on building world-class
              software.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-accent-light p-3 text-accent-blue">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-navy mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We're Growing */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-warning/10 px-4 py-1.5 text-xs font-semibold text-warning uppercase tracking-wide">
              Open Roles
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              We&apos;re Growing
            </h2>
            <p className="mt-6 text-lg text-muted-text leading-relaxed max-w-2xl mx-auto">
              We&apos;re a small, focused team building something ambitious. If
              you&apos;re passionate about AI infrastructure and enterprise
              software, we want to hear from you.
            </p>

            <div className="mt-10 rounded-2xl border border-gray-200 bg-surface p-8 md:p-12">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-accent-blue/10 p-3 text-accent-blue">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Don&apos;t see a perfect fit?
              </h3>
              <p className="text-muted-text mb-6 max-w-lg mx-auto">
                We are always looking for exceptional people. Send us your
                resume and tell us what you are excited about building.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:careers@AxiomAssistant.ai"
                  className="inline-flex items-center justify-center rounded-full bg-accent-blue px-8 py-4 text-base font-semibold text-white hover:bg-accent-blue/90 transition-colors"
                >
                  careers@AxiomAssistant.ai
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 px-8 py-4 text-base font-semibold text-navy hover:bg-surface transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
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
            Ready to build the future of AI operations?
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Join a team where your work matters and your voice shapes the
            product.
          </p>
          <div className="mt-10">
            <a
              href="mailto:careers@AxiomAssistant.ai"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-navy hover:bg-gray-100 transition-colors"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
