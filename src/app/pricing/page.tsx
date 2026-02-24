"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Zap,
  Shield,
  ChevronRight,
  Sparkles,
  Users,
  Target,
  Layers,
  Rocket,
  Bot,
  TrendingUp,
  BarChart3,
  Lock,
  Brain,
  Eye,
  Award,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

/* -------------------------------------------------------------------------- */
/*  Five Skill Levels                                                         */
/* -------------------------------------------------------------------------- */

const skillLevels = [
  {
    level: 1,
    name: "Explore",
    icon: Sparkles,
    color: "bg-blue-500",
    colorLight: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    priceRange: "$0\u2013$1",
    pricePer: "per run",
    description:
      "Single-tool, single-step operations that produce one discrete output. Low risk, immediate value, designed to build comfort and confidence.",
    examples: [
      "Summarize a document",
      "Draft a social post",
      "Reformat a data file",
      "Generate a meeting agenda",
    ],
    characteristics: [
      "Single MCP tool per run",
      "Human reviews 100% of outputs",
      "Completes in seconds",
    ],
  },
  {
    level: 2,
    name: "Assist",
    icon: Target,
    color: "bg-emerald-500",
    colorLight: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    priceRange: "$2\u2013$10",
    pricePer: "per run",
    description:
      "Multi-tool skills that combine context and produce polished deliverables. Hours of work compressed into minutes.",
    examples: [
      "Blog post with SEO research",
      "Formatted financial summary",
      "Multi-email outreach sequence",
      "Competitive analysis brief",
    ],
    characteristics: [
      "2\u20133 MCP tools orchestrated",
      "Context-aware processing",
      "Ready-to-use deliverables",
    ],
  },
  {
    level: 3,
    name: "Collaborate",
    icon: Layers,
    color: "bg-amber-500",
    colorLight: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    priceRange: "$5\u2013$25",
    pricePer: "per workflow cycle",
    description:
      "Multi-step workflows where the assistant makes decisions within defined guardrails. You review outcomes, not every step.",
    examples: [
      "Invoice batch processing",
      "Content calendar management",
      "Employee onboarding flow",
      "Campaign cycle execution",
    ],
    characteristics: [
      "Conditional logic & decisions",
      "Chains multiple skills",
      "Human reviews final outcome",
    ],
  },
  {
    level: 4,
    name: "Orchestrate",
    icon: Rocket,
    color: "bg-purple-500",
    colorLight: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    priceRange: "$15\u2013$100+",
    pricePer: "per business metric",
    description:
      "Complex multi-skill workflows with minimal human input. The assistant manages business processes end-to-end, producing metric-level outcomes.",
    examples: [
      "End-to-end payroll processing",
      "Lead qualification pipeline",
      "Monthly financial reconciliation",
      "Regulatory compliance monitoring",
    ],
    characteristics: [
      "Chains Level 2\u20133 skills",
      "Handles exceptions & edge cases",
      "Periodic human oversight",
    ],
  },
  {
    level: 5,
    name: "Autonomous",
    icon: Bot,
    color: "bg-rose-500",
    colorLight: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    priceRange: "$50\u2013$500+",
    pricePer: "per autonomous cycle",
    description:
      "Self-initiating skills that monitor, decide, act, and report independently. Every cycle delivers a concrete, measurable business outcome.",
    examples: [
      "Overnight operations management",
      "Continuous lead nurture engine",
      "Autonomous financial operations",
      "24/7 system monitoring & response",
    ],
    characteristics: [
      "Self-initiating on schedules or triggers",
      "Intelligent escalation",
      "Comprehensive action reporting",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Assistant-Based Tiers                                                     */
/* -------------------------------------------------------------------------- */

const tiers = [
  {
    id: "starter",
    name: "Starter",
    label: "Free",
    price: "$0",
    period: "/month",
    assistants: "1 assistant",
    description:
      "Unlimited Explore-level outputs. Experience real value before you ever see a price tag.",
    cta: "Get Started Free",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      "1 AI assistant",
      "Unlimited Level 1 (Explore) outputs",
      "All 50 built-in skills at Level 1",
      "Email intelligence",
      "Calendar optimization",
      "Meeting transcription",
      "Basic Policy Engine",
      "10 GB memory",
      "WorkSHIFT Coach",
      "Community support",
      "BYO OpenRouter key",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    label: "Professional",
    price: "$99\u2013$299",
    period: "/month + per-output",
    assistants: "Up to 5 assistants",
    description:
      "Pay-per-output at all skill levels. Full autonomous capabilities for growing teams.",
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Up to 5 AI assistants",
      "Pay-per-output at all 5 levels",
      "Autonomous skill execution",
      "Advanced Policy Engine",
      "Full skill progression system",
      "Mastery gates & level tracking",
      "100 GB memory",
      "CRM & PM integrations",
      "Custom skills via SDK",
      "Priority support",
      "API access",
    ],
  },
  {
    id: "business",
    name: "Business",
    label: "Business",
    price: "$499\u2013$999",
    period: "/month + per-output",
    assistants: "Up to 25 assistants",
    description:
      "Volume discounts on per-output pricing. Deploy specialized assistants across your organization.",
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      "Up to 25 AI assistants",
      "Volume output discounts",
      "Everything in Professional",
      "SkillForge marketplace access",
      "Custom skill development",
      "Advanced analytics & ROI dashboards",
      "Dedicated account manager",
      "SSO / SAML",
      "Unlimited storage",
      "SLA 99.9%",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    label: "Enterprise",
    price: "Custom",
    period: "",
    assistants: "Unlimited assistants",
    description:
      "Dedicated infrastructure, custom per-output pricing, and white-glove deployment.",
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      "Unlimited AI assistants",
      "Custom per-output pricing",
      "Everything in Business",
      "Air-gapped deployment",
      "Custom data residency",
      "SOC-2 compliance",
      "Row-level security",
      "Private SkillForge",
      "Custom training & onboarding",
      "Flexible LLM hosting",
      "Audit log export",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ Items                                                                 */
/* -------------------------------------------------------------------------- */

const faqItems = [
  {
    q: "What is output-based pricing?",
    a: "Instead of charging per seat or per user, AXIOM charges per skill execution (\u201Cper run\u201D). The unit of value is the completed output \u2014 a blog post written, a payroll cycle processed, a compliance audit completed. You pay for the thing you got, not for how many people sit in front of the platform.",
  },
  {
    q: "What are the five skill levels?",
    a: "AXIOM classifies every skill into five levels of increasing complexity and autonomy: Explore (single-step, $0\u2013$1), Assist (multi-tool, $2\u2013$10), Collaborate (workflow, $5\u2013$25), Orchestrate (end-to-end process, $15\u2013$100+), and Autonomous (self-initiating, $50\u2013$500+). Each level represents more business impact and more value delivered.",
  },
  {
    q: "How do I unlock higher skill levels?",
    a: "You earn access through demonstrated mastery, not by purchasing upgrades. When you\u2019ve completed 20+ successful runs at your current level with an 85%+ acceptance rate across 3+ distinct skills, the next level unlocks automatically. This ensures you succeed before you scale.",
  },
  {
    q: "What\u2019s the difference between assistants and users?",
    a: "Pricing is anchored to assistants, not users. An assistant is an autonomous AI agent that can operate independently \u2014 running skills, processing workflows, and managing tasks without a human sitting in front of it. A single user may manage one assistant; an enterprise may deploy dozens, each running specialized skills.",
  },
  {
    q: "What\u2019s included in the free Starter tier?",
    a: "Starter gives you 1 AI assistant with unlimited Level 1 (Explore) outputs, access to all 50 built-in skills at the Explore level, email intelligence, calendar optimization, meeting transcription, basic Policy Engine, 10 GB memory, the WorkSHIFT Coach, and community support. No credit card required.",
  },
  {
    q: "What is OpenRouter, and why do I need my own key?",
    a: "OpenRouter is a unified API gateway that gives you access to models from OpenAI, Anthropic, Google, and others. By using your own key, you control exactly which models AXIOM uses and you pay the model providers directly at their published rates \u2014 no markup. This keeps your costs transparent.",
  },
  {
    q: "How much does OpenRouter typically cost?",
    a: "For typical business usage, expect $3\u2013$8 per user per month in model costs through OpenRouter. Heavy power users who rely on AI throughout the day may see costs of $10\u2013$15 per month. Actual costs depend on which models you choose and how frequently you use AI features.",
  },
  {
    q: "Can a CFO predict monthly costs?",
    a: "Yes. Per-run pricing makes costs completely predictable. A CFO can forecast: \u201CWe run payroll biweekly for 200 employees at $X per run. That\u2019s $Y per month.\u201D Every invoice shows exactly what was done. The customer never questions the price because each run represents a concrete, measurable business outcome.",
  },
  {
    q: "What is the WorkSHIFT Coach?",
    a: "The WorkSHIFT Coach is a built-in skill powered by the WorkSHIFT methodology \u2014 a 31-day professional AI transformation journey. It lives inside every AXIOM account, observes your usage patterns, and delivers contextual nudges to help you get more value from the platform: celebrating milestones, recommending relevant skills, and guiding your progression through the five skill levels.",
  },
  {
    q: "Can you build custom skills for my organization?",
    a: "Yes. We offer custom skill development with a one-time build fee plus ongoing per-run revenue share. Custom skills run at the appropriate skill-level pricing and can optionally be published to the SkillForge marketplace for other customers, creating a potential royalty stream for early contributors.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function PricingPage() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* ------------------------------------------------------------------ */}
      {/*  Hero                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative bg-dark-bg bg-grid-pattern overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(74,144,217,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-28 text-center sm:px-8 lg:pt-36">
          <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/30 border text-xs">
            <Zap className="mr-1 size-3" />
            Output-Based Pricing
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
            Pay for outcomes.{" "}
            <span className="text-gradient">Not seats.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
            AXIOM charges per skill execution &mdash; not per user, not per
            seat. Every dollar maps to a measurable output: a report generated,
            a workflow completed, an operation managed autonomously.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: TrendingUp, label: "Evergreen revenue model" },
              { icon: BarChart3, label: "Predictable for CFOs" },
              { icon: Activity, label: "Value-reinforcing" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
              >
                <item.icon className="h-3.5 w-3.5 text-accent-blue" />
                <span className="text-xs font-medium text-gray-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  How Pricing Works — Explainer                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface px-6 py-16 sm:px-8 border-b border-gray-200">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
              How output-based pricing works
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-text">
              No credits, no tokens, no meters ticking down. The monthly
              platform fee covers your assistant infrastructure. Every output is
              priced individually at its skill-level rate.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "You run a skill",
                description:
                  "Your assistant executes a skill \u2014 from a quick document summary to an end-to-end payroll cycle.",
              },
              {
                icon: Eye,
                title: "You see the value",
                description:
                  "The system quantifies what happened: \u201CYour Research skill compiled a competitive brief in 4 minutes. Estimated manual time: 2.5 hours.\u201D",
              },
              {
                icon: Award,
                title: "You pay for the output",
                description:
                  "Each run is priced based on its skill level. Simple outputs cost cents. Complex autonomous operations cost more \u2014 because they deliver more.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-accent-blue/10 p-3 text-accent-blue">
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

      {/* ------------------------------------------------------------------ */}
      {/*  Five Skill Levels                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/30 border text-xs">
              <Layers className="mr-1 size-3" />
              Skill Levels
            </Badge>
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
              Five levels. Earn your way up.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-text">
              Users unlock higher skill levels through demonstrated mastery, not
              purchases. As complexity grows, so does the business impact
              &mdash; and the value of every run.
            </p>
          </div>

          <div className="space-y-4">
            {skillLevels.map((sl) => {
              const Icon = sl.icon;
              const isExpanded = expandedLevel === sl.level;
              return (
                <div
                  key={sl.level}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isExpanded
                      ? "border-accent-blue/30 shadow-lg shadow-accent-blue/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() =>
                      setExpandedLevel(isExpanded ? null : sl.level)
                    }
                    className="flex w-full items-center gap-4 p-6 text-left"
                  >
                    {/* Level badge */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${sl.color} text-white text-sm font-bold`}
                    >
                      {sl.level}
                    </div>

                    {/* Name + description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-bold text-navy">
                          {sl.name}
                        </h3>
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${sl.colorLight}`}
                        >
                          {sl.priceRange} {sl.pricePer}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-text line-clamp-1">
                        {sl.description}
                      </p>
                    </div>

                    {/* Chevron */}
                    <ChevronRight
                      className={`h-5 w-5 shrink-0 text-muted-text transition-transform duration-300 ${
                        isExpanded ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <p className="text-sm font-semibold text-navy mb-2">
                            Characteristics
                          </p>
                          <ul className="space-y-2">
                            {sl.characteristics.map((c) => (
                              <li
                                key={c}
                                className="flex items-start gap-2 text-sm text-muted-text"
                              >
                                <Check className="mt-0.5 size-4 shrink-0 text-success" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-navy mb-2">
                            Example skills
                          </p>
                          <ul className="space-y-2">
                            {sl.examples.map((ex) => (
                              <li
                                key={ex}
                                className="flex items-start gap-2 text-sm text-muted-text"
                              >
                                <Icon className="mt-0.5 size-4 shrink-0 text-accent-blue" />
                                {ex}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pricing summary table */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-surface">
                  <th className="px-6 py-3.5 font-semibold text-navy">
                    Level
                  </th>
                  <th className="px-6 py-3.5 font-semibold text-navy">Name</th>
                  <th className="px-6 py-3.5 font-semibold text-navy">
                    Pricing Model
                  </th>
                  <th className="px-6 py-3.5 font-semibold text-navy text-right">
                    Price Range
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    level: 1,
                    name: "Explore",
                    model: "Free / micro-fee per output",
                    range: "$0\u2013$1 per run",
                  },
                  {
                    level: 2,
                    name: "Assist",
                    model: "Fixed rate per deliverable",
                    range: "$2\u2013$10 per run",
                  },
                  {
                    level: 3,
                    name: "Collaborate",
                    model: "Per workflow outcome",
                    range: "$5\u2013$25 per cycle",
                  },
                  {
                    level: 4,
                    name: "Orchestrate",
                    model: "Per business metric",
                    range: "$15\u2013$100+ per run",
                  },
                  {
                    level: 5,
                    name: "Autonomous",
                    model: "Per autonomous cycle",
                    range: "$50\u2013$500+ per cycle",
                  },
                ].map((row) => (
                  <tr
                    key={row.level}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="px-6 py-3.5">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent-blue/10 text-xs font-bold text-accent-blue">
                        {row.level}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 font-medium text-navy">
                      {row.name}
                    </td>
                    <td className="px-6 py-3.5 text-muted-text">
                      {row.model}
                    </td>
                    <td className="px-6 py-3.5 text-right font-semibold text-navy">
                      {row.range}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Skill Progression — Mastery System                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-navy px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent-blue/20 text-accent-blue border-accent-blue/30 border">
              <Award className="mr-1 size-3" />
              Mastery System
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Earn your way to autonomy
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Higher skill levels unlock through demonstrated mastery &mdash;
              not purchases. You succeed before you scale.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Activity,
                metric: "20+",
                label: "Successful runs",
                description:
                  "Demonstrate consistent engagement at your current skill level.",
              },
              {
                icon: Check,
                metric: "85%+",
                label: "Acceptance rate",
                description:
                  "Accept or use outputs without significant rework at a high rate.",
              },
              {
                icon: Layers,
                metric: "3+",
                label: "Distinct skills used",
                description:
                  "Explore breadth at your current level, not just a single workflow.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <item.icon className="mx-auto mb-3 h-6 w-6 text-accent-blue" />
                <p className="text-3xl font-bold text-white">{item.metric}</p>
                <p className="text-sm font-medium text-white/80 mt-1">
                  {item.label}
                </p>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* WorkSHIFT Coach callout */}
          <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-accent-blue/30 bg-accent-blue/10 p-6 text-center">
            <p className="text-sm font-bold text-white mb-1">
              Powered by the WorkSHIFT methodology
            </p>
            <p className="text-xs text-white/60 leading-relaxed max-w-xl mx-auto">
              Every AXIOM account includes the WorkSHIFT Coach &mdash; a
              built-in skill drawn from the 31-day professional AI
              transformation journey. It guides your progression from Explore
              to Autonomous with contextual nudges at every level.
            </p>
            <a
              href="https://c1m.ai/work-shift/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue hover:text-white transition-colors"
            >
              Learn about WorkSHIFT <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          <div className="mt-6 mx-auto max-w-3xl">
            {/* Engagement loop */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-bold text-white mb-4 text-center">
                The value loop
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    step: "Use",
                    desc: "Run a skill. Your assistant delivers.",
                  },
                  {
                    step: "Value",
                    desc: "See the time saved and output quality.",
                  },
                  {
                    step: "Progress",
                    desc: "Watch your mastery metrics advance.",
                  },
                  {
                    step: "Expand",
                    desc: "Discover what you can unlock next.",
                  },
                ].map((item, i) => (
                  <div key={item.step} className="text-center">
                    <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-blue/20 text-xs font-bold text-accent-blue">
                      {i + 1}
                    </div>
                    <p className="text-sm font-semibold text-white">
                      {item.step}
                    </p>
                    <p className="mt-1 text-xs text-white/50">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Platform Tiers — Assistant-Based Packaging                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/30 border text-xs">
              <Users className="mr-1 size-3" />
              Platform Tiers
            </Badge>
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
              Assistant-based packaging
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-text">
              Pricing is anchored to assistants, not users. Each assistant can
              operate autonomously &mdash; running skills, processing workflows,
              and managing tasks independently.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-2xl border p-7 ${
                  tier.highlighted
                    ? "border-accent-blue bg-white shadow-xl shadow-accent-blue/10 ring-2 ring-accent-blue lg:scale-105"
                    : "border-gray-200 bg-white shadow-sm"
                }`}
              >
                {tier.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-blue text-white px-3 py-1">
                    {tier.badge}
                  </Badge>
                )}

                <div className="mb-5">
                  <h3 className="text-lg font-bold text-navy">{tier.label}</h3>
                  <p className="mt-1 text-xs text-muted-text">
                    {tier.assistants}
                  </p>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-navy">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-muted-text text-xs">
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-text leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <Button
                  variant={tier.ctaVariant}
                  size="lg"
                  className={`w-full mb-6 ${
                    tier.highlighted
                      ? "bg-accent-blue hover:bg-accent-blue/90 text-white"
                      : ""
                  }`}
                  asChild
                >
                  <Link
                    href={
                      tier.id === "enterprise" || tier.id === "business"
                        ? "/contact"
                        : "/signup"
                    }
                  >
                    {tier.cta}
                    <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>

                <ul className="flex-1 space-y-2.5 text-sm text-body-text">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-text">
            No credits, no tokens, no meters. Platform fees cover assistant
            infrastructure &mdash; context memory, Policy Engine, WorkSHIFT
            Coach. Every output is priced individually.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  OpenRouter Explainer                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface border-y border-gray-200 px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/30 border text-xs">
            <Zap className="mr-1 size-3" />
            BYO Model
          </Badge>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            You control your AI model costs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-text">
            AXIOM uses OpenRouter so you pick the models, see every token, and
            pay providers directly. No markup. Full transparency.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-0">
            {[
              {
                icon: Shield,
                name: "AXIOM",
                sub: "Platform",
                color: "text-accent-blue",
              },
              {
                icon: Zap,
                name: "OpenRouter",
                sub: "API Gateway",
                color: "text-warning",
              },
              {
                icon: Users,
                name: "AI Models",
                sub: "OpenAI, Anthropic, etc.",
                color: "text-success",
              },
            ].map((node, i) => (
              <div key={node.name} className="flex items-center gap-0">
                <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
                  <node.icon className={`mb-2 size-8 ${node.color}`} />
                  <span className="text-sm font-semibold text-navy">
                    {node.name}
                  </span>
                  <span className="text-xs text-muted-text">{node.sub}</span>
                </div>
                {i < 2 && (
                  <ChevronRight className="hidden size-6 text-muted-text/40 sm:block mx-2" />
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 grid max-w-lg gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-left shadow-sm">
              <p className="text-sm font-medium text-muted-text">
                Typical usage
              </p>
              <p className="mt-1 text-2xl font-bold text-navy">
                $3&ndash;$8
                <span className="text-sm font-normal text-muted-text">
                  /user/mo
                </span>
              </p>
              <p className="mt-2 text-xs text-muted-text">
                Standard business workflows with email, calendar, and meeting
                intelligence.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-left shadow-sm">
              <p className="text-sm font-medium text-muted-text">
                Heavy usage
              </p>
              <p className="mt-1 text-2xl font-bold text-navy">
                $10&ndash;$15
                <span className="text-sm font-normal text-muted-text">
                  /user/mo
                </span>
              </p>
              <p className="mt-2 text-xs text-muted-text">
                Power users running AI throughout the day with large document
                processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Value Transparency + Stickiness                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
              The more you use it, the more valuable it gets
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-text">
              AXIOM becomes smarter with every interaction &mdash; building
              context, learning preferences, and quantifying the value it
              delivers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Brain,
                title: "Accumulated Context",
                description:
                  "Every execution builds understanding of your preferences, terminology, and quality standards.",
              },
              {
                icon: TrendingUp,
                title: "Progression Investment",
                description:
                  "Your mastery metrics, unlocked skills, and assistant context are assets you\u2019ve built over time.",
              },
              {
                icon: BarChart3,
                title: "Value Transparency",
                description:
                  "A running ROI dashboard shows time saved, outputs produced, and cost avoided. Renewal conversations become trivial.",
              },
              {
                icon: Lock,
                title: "Ecosystem Effects",
                description:
                  "As the SkillForge marketplace grows, every new skill adds value to every existing customer.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-accent-blue/30 hover:shadow-md transition-all"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-accent-blue/10 p-3 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-navy mb-2">
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

      {/* ------------------------------------------------------------------ */}
      {/*  Custom Skill Development                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface border-y border-gray-200 px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/30 border text-xs">
                  Custom Development
                </Badge>
                <h2 className="text-2xl font-extrabold text-navy">
                  We build custom skills for your business
                </h2>
                <p className="mt-3 text-sm text-muted-text leading-relaxed">
                  Need a Level 4 payroll skill or a Level 5 autonomous
                  operations monitor? Our team designs, builds, tests, and
                  deploys custom skills tailored to your workflows.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    label: "Build fee",
                    desc: "One-time development, testing, and deployment.",
                  },
                  {
                    label: "Per-run revenue",
                    desc: "Every execution earns at the skill-level rate.",
                  },
                  {
                    label: "Marketplace potential",
                    desc: "Generalized skills can be published for other customers.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-lg border border-gray-100 bg-surface/50 p-3"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        {item.label}
                      </p>
                      <p className="text-xs text-muted-text">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent-blue text-white hover:bg-accent-blue/90"
                asChild
              >
                <Link href="/contact">
                  Discuss a Custom Skill
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  FAQ                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-text">
            Everything about output-based pricing, skill levels, and getting
            started.
          </p>

          <Accordion type="single" collapsible className="mt-12">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left text-navy hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-text leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Bottom CTA                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1B2A4A 0%, #4A90D9 100%)",
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Pay for outcomes, not seats
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
            Start free with unlimited Explore outputs. No credit card required.
            Scale to autonomy when you&apos;re ready.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-navy hover:bg-gray-100"
              asChild
            >
              <Link href="/signup">
                Get Started Free
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
