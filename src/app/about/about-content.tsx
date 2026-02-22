"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  SlidersHorizontal,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MapPin,
  Target,
  Users,
  User,
  Rocket,
  Clock,
  Monitor,
  Globe,
  Cpu,
} from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Every AI decision is explainable and auditable. No black boxes. You can trace exactly why AXIOM took any action, review logs in real time, and maintain complete visibility across your operations.",
  },
  {
    icon: SlidersHorizontal,
    title: "User Control",
    description:
      "You set the rules, AXIOM follows them. Fine-grained policy controls let you define exactly what the AI can and cannot do — from email drafting to meeting scheduling — with human-in-the-loop approval at every level.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Governance",
    description:
      "SOC 2 Type II compliance, end-to-end encryption, role-based access control, and air-gap deployment options. Built for regulated industries and security-first organizations from day one.",
  },
  {
    icon: Sparkles,
    title: "Simplicity",
    description:
      "One platform, one login, one policy engine. AXIOM replaces the sprawl of nine separate tools with a unified experience that teams actually want to use — no training manuals required.",
  },
];

const teamMembers = [
  { name: "John Arnott", title: "CEO & Co-Founder" },
];

export function AboutContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 bg-accent-blue/20 text-accent-blue border-accent-blue/30 hover:bg-accent-blue/20">
              Our Story
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-up">
              Built by operators,{" "}
              <span className="text-gradient">for operators.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed animate-fade-up delay-200">
              We lived the pain of managing dozens of disconnected AI tools
              across enterprise operations. So we built the platform we wished
              existed.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="animate-fade-up">
              <Badge className="mb-4 bg-accent-light text-accent-blue border-accent-blue/20 hover:bg-accent-light">
                <MapPin className="mr-1 h-3 w-3" />
                TSC Texas
              </Badge>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                Born from real-world operations
              </h2>
              <div className="mt-6 space-y-4 text-body-text leading-relaxed">
                <p>
                  AXIOM was founded at TSC Texas by a team of enterprise
                  operators who experienced firsthand the chaos of managing
                  fragmented AI tools across large organizations. Every
                  department had its own stack — email assistants, calendar bots,
                  transcription services, task managers — none of which talked to
                  each other.
                </p>
                <p>
                  The result? Data silos, security gaps, ballooning costs, and
                  teams spending more time managing their tools than doing actual
                  work. We knew there had to be a better way.
                </p>
                <p>
                  So we built AXIOM: a single, governed AI operations platform
                  that replaces nine disconnected tools with one unified system.
                  Every action is policy-controlled, every decision is auditable,
                  and every team member gets an AI assistant that actually
                  understands the full context of their work.
                </p>
              </div>
            </div>
            <div className="animate-fade-up delay-200">
              <div className="rounded-2xl bg-surface p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">Our Mission</h3>
                </div>
                <blockquote className="text-2xl font-semibold text-navy leading-snug border-l-4 border-accent-blue pl-6">
                  Give every organization a tireless, trustworthy AI operations
                  team.
                </blockquote>
                <p className="mt-6 text-muted-text leading-relaxed">
                  We believe AI should amplify human judgment, not replace it.
                  AXIOM is designed to handle the operational heavy lifting —
                  email triage, scheduling, meeting follow-ups, task routing —
                  while keeping humans in control of every critical decision.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent-blue">9+</p>
                    <p className="text-sm text-muted-text mt-1">
                      Tools Replaced
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent-blue">50+</p>
                    <p className="text-sm text-muted-text mt-1">
                      AI Skills Built-In
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent-blue">100%</p>
                    <p className="text-sm text-muted-text mt-1">
                      Policy Governed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge className="mb-4 bg-accent-light text-accent-blue border-accent-blue/20 hover:bg-accent-light">
              What We Stand For
            </Badge>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-text text-lg">
              These principles guide every product decision, every line of code,
              and every customer interaction at AXIOM.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent-blue/20 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
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

      {/* Team Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge className="mb-4 bg-accent-light text-accent-blue border-accent-blue/20 hover:bg-accent-light">
              <Users className="mr-1 h-3 w-3" />
              The Team
            </Badge>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              The people behind AXIOM
            </h2>
            <p className="mt-4 text-muted-text text-lg">
              A team of operators, engineers, and AI researchers united by a
              shared mission to make enterprise AI actually work.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="group rounded-2xl bg-white border border-gray-100 p-6 text-center hover:shadow-lg hover:border-accent-blue/20 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-surface text-muted-text group-hover:bg-accent-light group-hover:text-accent-blue transition-colors duration-300">
                  <User className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-text">{member.title}</p>
              </div>
            ))}
          </div>

          {/* We're Growing Card */}
          <div className="mt-12 mx-auto max-w-2xl animate-fade-up">
            <div className="rounded-2xl border border-accent-blue/20 bg-accent-blue/5 p-8 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                We&apos;re Growing
              </h3>
              <p className="text-muted-text mb-6">
                We&apos;re building something ambitious. If you&apos;re passionate about AI infrastructure, we want to hear from you.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-accent-blue px-6 py-3 text-sm font-medium text-white hover:bg-accent-blue/90 transition-colors"
              >
                View Open Positions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Still Building Section */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge className="mb-4 bg-warning/10 text-warning border-warning/20 hover:bg-warning/10">
              Honest Limitations
            </Badge>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              What We&apos;re Still Building
            </h2>
            <p className="mt-4 text-muted-text text-lg">
              We believe in transparency. Here&apos;s what you should know before evaluating AXIOM.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                icon: Clock,
                title: "Not Yet Shipping",
                description:
                  "AXIOM is in active development. Organizations needing a solution today should evaluate alternatives. We're targeting Q3-Q4 2026.",
              },
              {
                icon: Monitor,
                title: "No Deep Office Integration",
                description:
                  "We operate alongside Office rather than inside it. This is by design \u2014 deep integration would create vendor lock-in.",
              },
              {
                icon: Globe,
                title: "Smaller Ecosystem",
                description:
                  "Our SkillForge launches with the platform. But our skill import system lets you bring Cowork plugins, Copilot Studio agents, and Claude Code skills into AXIOM.",
              },
              {
                icon: Cpu,
                title: "Model Quality Varies",
                description:
                  "Provider independence means quality depends on your choice. Local 8B models won't match Claude Opus \u2014 but you can route to Anthropic's API for complex tasks.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-warning/20 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-warning/10 text-warning group-hover:bg-warning group-hover:text-white transition-colors duration-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to join the mission?
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Whether you want to bring AXIOM to your organization or join our
              team building the future of enterprise AI, we would love to hear
              from you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-8"
              >
                <Link href="/careers">
                  Join Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-500 text-white hover:bg-white/10 hover:text-white rounded-full px-8"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
