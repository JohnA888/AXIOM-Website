"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Mail,
  Calendar,
  Mic,
  Shield,
  Brain,
  Puzzle,
  Link2,
  Settings,
  Play,
  Star,
  Check,
  ArrowRight,
  Phone,
  Lock,
  Zap,
  Eye,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Intersection Observer hook for scroll-triggered animations        */
/* ------------------------------------------------------------------ */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ------------------------------------------------------------------ */
/*  Animated counter component                                        */
/* ------------------------------------------------------------------ */
function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.5);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ================================================================== */
/*  DATA                                                               */
/* ================================================================== */

const trustPartners = [
  "OpenRouter",
  "Anthropic",
  "Deepgram",
  "Twilio",
  "Google",
  "Microsoft",
];

const problemStats = [
  {
    value: "$1,650",
    label: "/user/year",
    description: "Average annual spend across fragmented AI tools per employee",
  },
  {
    value: "9",
    label: " tools",
    description: "Average number of AI point-solutions deployed per team",
  },
  {
    value: "0",
    label: " governance",
    description:
      "No centralized policy engine across disconnected AI vendors",
  },
  {
    value: "0",
    label: " shared memory",
    description:
      "Context is siloed — each tool starts from scratch every time",
  },
];

const features = [
  {
    icon: Mail,
    title: "Intelligent Email",
    description:
      "AI-drafted replies, smart triage, priority sorting, and follow-up tracking. Your inbox works for you.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Conflict-free booking, travel buffers, timezone logic, and attendee preferences — all automated.",
  },
  {
    icon: Mic,
    title: "Meeting Intelligence",
    description:
      "Real-time transcription, action-item extraction, summary generation, and automatic follow-ups.",
  },
  {
    icon: Shield,
    title: "Policy Engine",
    description:
      "Define what AI can and cannot do. Role-based controls, approval workflows, and full audit logs.",
  },
  {
    icon: Brain,
    title: "Shared Memory",
    description:
      "Persistent organizational context that every module shares. Your AI remembers everything.",
  },
  {
    icon: Puzzle,
    title: "Skills & Workflows",
    description:
      "Custom automations that chain modules together. Build once, run forever — no code required.",
  },
  {
    icon: Phone,
    title: "Voice & Telephony",
    description:
      "Call screening, real-time voice guidance, voicemail transcription, and outbound calling — all governed by policy.",
  },
];

const replacedTools = [
  { name: "Fyxer", price: "$30/mo" },
  { name: "Reclaim", price: "$10/mo" },
  { name: "Motion", price: "$39/mo" },
  { name: "Superhuman", price: "$33/mo" },
  { name: "Fireflies", price: "$25/mo" },
  { name: "Otter", price: "$14/mo" },
  { name: "Read.ai", price: "$25/mo" },
  { name: "Calendly", price: "$13/mo" },
  { name: "Tactiq", price: "$12/mo" },
];

const howItWorks = [
  {
    step: 1,
    icon: Link2,
    title: "Connect",
    description:
      "Link your email, calendar, and collaboration tools. Add your OpenRouter API key for model access.",
  },
  {
    step: 2,
    icon: Settings,
    title: "Configure",
    description:
      "Set organizational policies, approval workflows, role-based permissions, and AI behavior rules.",
  },
  {
    step: 3,
    icon: Play,
    title: "Let It Run",
    description:
      "AXIOM operates 24/7 — managing email, scheduling, meetings, and tasks while you focus on what matters.",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individuals and small teams getting started.",
    features: [
      "Up to 5 users",
      "Email intelligence",
      "Basic scheduling",
      "Meeting summaries",
      "Community support",
    ],
    cta: "Start Free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/user/mo",
    description: "For teams that want the full AXIOM experience.",
    features: [
      "Unlimited users",
      "All modules included",
      "Policy engine",
      "Shared memory",
      "Custom workflows",
      "Priority support",
      "API access",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced security & scale needs.",
    features: [
      "Everything in Pro",
      "SSO / SAML",
      "Dedicated infrastructure",
      "Custom SLAs",
      "On-premise option",
      "Dedicated CSM",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

/* ================================================================== */
/*  PAGE COMPONENT                                                     */
/* ================================================================== */

export default function Home() {
  const heroRef = useInView(0.1);
  const problemRef = useInView();
  const solutionRef = useInView();
  const replacementRef = useInView();
  const howRef = useInView();
  const testimonialRef = useInView();
  const pricingRef = useInView();

  return (
    <div className="overflow-x-hidden">
      {/* ============================================================ */}
      {/*  1. HERO SECTION                                             */}
      {/* ============================================================ */}
      <section className="relative bg-dark-bg bg-grid-pattern flex items-center pt-20">
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(74,144,217,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div
            ref={heroRef.ref}
            className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center transition-all duration-700 ${
              heroRef.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Left — Copy */}
            <div className="max-w-2xl">
              <span className="mb-6 inline-block rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-blue uppercase">
                AI Operations Platform &mdash; Early Access
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
                One AI platform.{" "}
                <span className="text-gradient">Nine tools replaced.</span>
              </h1>

              <p className="mt-4 text-sm md:text-base text-accent-blue/70 font-medium">
                For IT, RevOps, and services teams drowning in point solutions.
              </p>

              <p className="mt-4 text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                AXIOM is the governed AI ops layer that manages your email,
                calendar, meetings, tasks, and field recordings — with
                centralized policy, shared memory, and a proactive Heartbeat
                engine.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center bg-accent-blue text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-accent-blue/90 transition-colors"
                >
                  Start Free
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-colors"
                >
                  See How It Works <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right — Mock Dashboard */}
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">
                    axiom.app/dashboard
                  </span>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="rounded-xl bg-accent-blue/10 border border-accent-blue/20 p-4">
                    <p className="text-xs text-gray-400 mb-1">Emails Handled</p>
                    <p className="text-2xl font-bold text-white">1,284</p>
                    <p className="text-xs text-success mt-1">+23% this week</p>
                  </div>
                  <div className="rounded-xl bg-success/10 border border-success/20 p-4">
                    <p className="text-xs text-gray-400 mb-1">Hours Saved</p>
                    <p className="text-2xl font-bold text-white">47.2</p>
                    <p className="text-xs text-success mt-1">This month</p>
                  </div>
                  <div className="rounded-xl bg-warning/10 border border-warning/20 p-4">
                    <p className="text-xs text-gray-400 mb-1">Meetings</p>
                    <p className="text-2xl font-bold text-white">38</p>
                    <p className="text-xs text-accent-blue mt-1">12 this week</p>
                  </div>
                </div>

                {/* Activity feed */}
                <div className="space-y-3">
                  {[
                    {
                      icon: Mail,
                      label: "Drafted reply to Acme Corp proposal",
                      time: "2 min ago",
                      color: "text-accent-blue",
                    },
                    {
                      icon: Calendar,
                      label: "Rescheduled standup (conflict resolved)",
                      time: "8 min ago",
                      color: "text-success",
                    },
                    {
                      icon: Mic,
                      label: "Meeting summary sent to #product",
                      time: "14 min ago",
                      color: "text-warning",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/5 px-4 py-3"
                    >
                      <item.icon className={`h-4 w-4 ${item.color}`} />
                      <span className="flex-1 text-sm text-gray-300 truncate">
                        {item.label}
                      </span>
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating glow behind card */}
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-accent-blue/10 blur-3xl" />
            </div>
          </div>

          {/* Savings counter */}
          <div className="mt-12 text-center">
            <p className="text-success text-xl md:text-2xl font-bold animate-fade-up">
              <AnimatedCounter target={837} prefix="$" suffix="K" /> &ndash;{" "}
              <AnimatedCounter target={1530} prefix="$" suffix="K" />{" "}
              <span className="text-gray-400 font-normal">
                saved per year for a 500-person organization
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. TRUST BAR                                                */}
      {/* ============================================================ */}
      <section className="border-y border-gray-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-text mb-8">
            Powered by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustPartners.map((name) => (
              <div
                key={name}
                className="flex h-10 items-center px-4 rounded-lg text-sm font-semibold text-gray-400 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:text-navy transition-all duration-300 cursor-default select-none"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. THE PROBLEM                                              */}
      {/* ============================================================ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div
          ref={problemRef.ref}
          className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
            problemRef.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full bg-warning/10 px-4 py-1.5 text-xs font-semibold text-warning uppercase tracking-wide">
              The Problem
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Your team runs on 9 different AI tools. That&apos;s 9 invoices, 9
              logins, 9 data silos.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problemStats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="text-4xl md:text-5xl font-extrabold text-navy">
                  {stat.value}
                  <span className="text-lg font-semibold text-muted-text">
                    {stat.label}
                  </span>
                </p>
                <p className="mt-3 text-sm text-muted-text leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. THE SOLUTION — FEATURE GRID                              */}
      {/* ============================================================ */}
      <section className="py-24 lg:py-32 bg-white">
        <div
          ref={solutionRef.ref}
          className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
            solutionRef.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-blue uppercase tracking-wide">
              The Solution
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              One governed platform. Everything connected.
            </h2>
            <p className="mt-4 text-lg text-muted-text max-w-2xl mx-auto">
              Seven powerful modules with shared memory, centralized policy governance,
              and a Heartbeat engine that operates around the clock.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-gray-200 bg-white p-8 hover:border-accent-blue/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-accent-light p-3 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. TOOL REPLACEMENT                                         */}
      {/* ============================================================ */}
      <section className="py-24 lg:py-32 bg-dark-bg bg-grid-pattern relative">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(74,144,217,0.08) 0%, transparent 70%)",
          }}
        />

        <div
          ref={replacementRef.ref}
          className={`relative mx-auto max-w-7xl px-6 transition-all duration-700 ${
            replacementRef.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-blue uppercase tracking-wide">
              Cost Savings
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Replace your entire AI stack.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left — Tools list */}
            <div className="space-y-3">
              {replacedTools.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-4 hover:bg-white/10 transition-colors"
                >
                  <span className="text-gray-300 font-medium">{tool.name}</span>
                  <span className="text-gray-500 text-sm line-through">
                    {tool.price}
                  </span>
                </div>
              ))}
              <div className="pt-2 text-right">
                <p className="text-sm text-gray-500">
                  Total:{" "}
                  <span className="text-gray-400 line-through font-semibold">
                    $201/user/month
                  </span>
                </p>
              </div>
            </div>

            {/* Right — AXIOM card */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-sm rounded-2xl border-2 border-accent-blue bg-gradient-to-br from-accent-blue/20 to-accent-blue/5 p-10 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-white text-2xl font-extrabold">
                  A
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-1">
                  AXIOM
                </h3>
                <p className="text-5xl font-extrabold text-accent-blue mt-4">
                  $29
                </p>
                <p className="text-gray-400 mt-1">/user/month</p>
                <p className="mt-4 text-sm text-gray-400">
                  All 9 capabilities. One platform.
                </p>
              </div>

              <div className="mt-10 rounded-2xl bg-success/10 border border-success/20 px-8 py-5 text-center">
                <p className="text-success text-xl md:text-2xl font-bold">
                  For a 500-person company, that&apos;s $837K&ndash;$1.53M saved
                  per year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. HOW IT WORKS                                             */}
      {/* ============================================================ */}
      <section className="py-24 lg:py-32 bg-white">
        <div
          ref={howRef.ref}
          className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
            howRef.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-blue uppercase tracking-wide">
              Getting Started
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Up and running in three steps.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-gray-200 bg-surface p-8 text-center"
              >
                {/* Step number */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue text-white text-sm font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="mt-4 mb-5 inline-flex items-center justify-center rounded-xl bg-accent-light p-3 text-accent-blue">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connecting line (desktop) */}
          <div className="hidden md:flex justify-center mt-[-180px] mb-[120px] pointer-events-none">
            <div className="w-full max-w-3xl border-t-2 border-dashed border-accent-blue/20" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. WHY AXIOM                                                */}
      {/* ============================================================ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div
          ref={testimonialRef.ref}
          className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
            testimonialRef.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-blue uppercase tracking-wide">
              Why AXIOM
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Built different by design.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "AI Sovereignty",
                description:
                  "You choose your models, providers, and infrastructure. Run air-gapped or hybrid. Switch providers with zero code changes.",
              },
              {
                icon: Lock,
                title: "Policy Governance",
                description:
                  "Every AI action evaluated against org rules before execution. Not after. Not optionally. Every action, every time.",
              },
              {
                icon: Zap,
                title: "Proactive Operation",
                description:
                  "The Heartbeat runs 24/7 on the server. Processes overnight email, monitors deadlines, prepares briefings while you sleep.",
              },
              {
                icon: Eye,
                title: "Memory Transparency",
                description:
                  "Employees see everything the AI knows about them in plain-text files they can read, edit, and delete.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-gray-200 bg-white p-8 hover:border-accent-blue/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-accent-light p-3 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
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

      {/* ============================================================ */}
      {/*  8. PRICING PREVIEW                                          */}
      {/* ============================================================ */}
      <section className="py-24 lg:py-32 bg-white">
        <div
          ref={pricingRef.ref}
          className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
            pricingRef.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-blue uppercase tracking-wide">
              Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Simple, transparent pricing.
            </h2>
            <p className="mt-4 text-lg text-muted-text">
              Free for teams under 5. No credit card required.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  tier.highlighted
                    ? "border-accent-blue shadow-xl ring-2 ring-accent-blue/20 bg-white"
                    : "border-gray-200 bg-white shadow-sm"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-blue px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-navy">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-muted-text text-sm">
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-text">
                    {tier.description}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      <span className="text-body-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-accent-blue text-white hover:bg-accent-blue/90"
                      : "border border-gray-200 text-navy hover:bg-surface"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-text">
            Need a custom plan?{" "}
            <Link
              href="/pricing"
              className="text-accent-blue hover:underline font-medium"
            >
              View full pricing details
            </Link>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  9. FINAL CTA BANNER                                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1B2A4A 0%, #4A90D9 100%)",
          }}
        />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
            Stop paying for 9 tools. Start running on one.
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Free for teams under 5. No credit card required.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-navy hover:bg-gray-100 transition-colors"
            >
              Start Free <ArrowRight className="ml-2 h-4 w-4" />
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
