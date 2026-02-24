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

/* ================================================================== */
/*  DATA                                                               */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/*  Partner Logo SVG Components                                        */
/* ------------------------------------------------------------------ */

function OpenRouterLogo() {
  return (
    <svg
      width="120"
      height="36"
      viewBox="0 0 120 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="OpenRouter"
    >
      {/* O shape */}
      <path
        d="M8 8C8 4.686 10.686 2 14 2h4c3.314 0 6 2.686 6 6v4c0 3.314-2.686 6-6 6h-4c-3.314 0-6-2.686-6-6V8Z"
        stroke="#6366F1"
        strokeWidth="2.5"
        fill="none"
      />
      {/* R shape */}
      <path
        d="M28 2h6c3.314 0 6 2.686 6 6v0c0 3.314-2.686 6-6 6h-6V2Zm0 12 7 8"
        stroke="#6366F1"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Circuit accent line */}
      <path
        d="M42 10h8m0 0 3-3m-3 3 3 3"
        stroke="#6366F1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      {/* Text */}
      <text
        x="8"
        y="33"
        fontFamily="system-ui, sans-serif"
        fontSize="10"
        fontWeight="600"
        fill="#6366F1"
        letterSpacing="0.5"
      >
        OpenRouter
      </text>
    </svg>
  );
}

function AnthropicLogo() {
  return (
    <svg
      width="120"
      height="36"
      viewBox="0 0 120 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Anthropic"
    >
      <defs>
        <linearGradient id="anthropic-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D97757" />
          <stop offset="100%" stopColor="#C4613F" />
        </linearGradient>
      </defs>
      {/* Stylized A mark */}
      <path
        d="M16 24 24 4l8 20M12 17h24"
        stroke="url(#anthropic-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Text */}
      <text
        x="46"
        y="18"
        fontFamily="system-ui, sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#D97757"
      >
        Anthropic
      </text>
    </svg>
  );
}

function DeepgramLogo() {
  return (
    <svg
      width="120"
      height="36"
      viewBox="0 0 120 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Deepgram"
    >
      {/* D shape */}
      <path
        d="M4 6v24h8c6.627 0 12-5.373 12-12S18.627 6 12 6H4Z"
        stroke="#13EF93"
        strokeWidth="2.2"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Sound wave accents */}
      <path
        d="M28 12c2 2 2 10 0 12M33 9c3.5 3.5 3.5 15 0 18"
        stroke="#13EF93"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Text */}
      <text
        x="42"
        y="22"
        fontFamily="system-ui, sans-serif"
        fontSize="12"
        fontWeight="600"
        fill="#13EF93"
      >
        Deepgram
      </text>
    </svg>
  );
}

function TwilioLogo() {
  return (
    <svg
      width="100"
      height="36"
      viewBox="0 0 100 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Twilio"
    >
      {/* Circle */}
      <circle cx="16" cy="18" r="14" stroke="#F22F46" strokeWidth="2.2" fill="none" />
      {/* Inner dots (Twilio icon pattern) */}
      <circle cx="11" cy="13" r="2.5" fill="#F22F46" />
      <circle cx="21" cy="13" r="2.5" fill="#F22F46" />
      <circle cx="11" cy="23" r="2.5" fill="#F22F46" />
      <circle cx="21" cy="23" r="2.5" fill="#F22F46" />
      {/* Text */}
      <text
        x="36"
        y="22"
        fontFamily="system-ui, sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#F22F46"
      >
        Twilio
      </text>
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg
      width="86"
      height="36"
      viewBox="0 0 86 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
    >
      {/* G */}
      <text x="0" y="25" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" fill="#4285F4">G</text>
      {/* o */}
      <text x="14" y="25" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" fill="#EA4335">o</text>
      {/* o */}
      <text x="28" y="25" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" fill="#FBBC05">o</text>
      {/* g */}
      <text x="42" y="25" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" fill="#4285F4">g</text>
      {/* l */}
      <text x="56" y="25" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" fill="#34A853">l</text>
      {/* e */}
      <text x="63" y="25" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" fill="#EA4335">e</text>
    </svg>
  );
}

function MicrosoftLogo() {
  return (
    <svg
      width="130"
      height="36"
      viewBox="0 0 130 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Microsoft"
    >
      {/* 4-square grid */}
      <rect x="2" y="6" width="10" height="10" fill="#F25022" rx="1" />
      <rect x="14" y="6" width="10" height="10" fill="#7FBA00" rx="1" />
      <rect x="2" y="18" width="10" height="10" fill="#00A4EF" rx="1" />
      <rect x="14" y="18" width="10" height="10" fill="#FFB900" rx="1" />
      {/* Text */}
      <text
        x="30"
        y="22"
        fontFamily="system-ui, sans-serif"
        fontSize="13"
        fontWeight="500"
        fill="#737373"
      >
        Microsoft
      </text>
    </svg>
  );
}

const partnerLogos: { key: string; component: React.ReactNode }[] = [
  { key: "openrouter", component: <OpenRouterLogo /> },
  { key: "anthropic", component: <AnthropicLogo /> },
  { key: "deepgram", component: <DeepgramLogo /> },
  { key: "twilio", component: <TwilioLogo /> },
  { key: "google", component: <GoogleLogo /> },
  { key: "microsoft", component: <MicrosoftLogo /> },
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
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "1 assistant. Unlimited Explore outputs. No credit card.",
    features: [
      "1 AI assistant",
      "Unlimited Level 1 outputs",
      "All 50 skills (Explore level)",
      "Basic Policy Engine",
      "WorkSHIFT Coach",
      "Community support",
    ],
    cta: "Start Free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$99\u2013$299",
    period: "/mo + per-output",
    description: "Up to 5 assistants. All 5 skill levels. Full autonomy.",
    features: [
      "Up to 5 AI assistants",
      "Pay-per-output at all levels",
      "Autonomous skill execution",
      "Advanced Policy Engine",
      "Mastery progression",
      "CRM & PM integrations",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Unlimited assistants. Custom per-output pricing.",
    features: [
      "Everything in Professional",
      "Unlimited AI assistants",
      "SSO / SAML",
      "Air-gapped deployment",
      "Custom data residency",
      "Private SkillForge",
      "Custom skill development",
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

            {/* Right — Mock Dashboard (based on real AXIOM Command Dashboard) */}
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <span className="ml-2 text-[10px] text-gray-500 font-mono">
                      AXIOM Command Dashboard — Atlas
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-mono text-gray-500">MODE: server</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-mono text-gray-500">TENANT: TSC-TX-01</span>
                  </div>
                </div>

                {/* KPI Row */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { label: "Heartbeat", value: "92%", delta: "31 runs, 4 alerts", color: "border-accent-blue/20 bg-accent-blue/10" },
                    { label: "Approvals", value: "7", delta: "2 critical, 3 high", color: "border-warning/20 bg-warning/10" },
                    { label: "Success Rate", value: "96.4%", delta: "184 / 191 total", color: "border-success/20 bg-success/10" },
                    { label: "Daily Cost", value: "$42.17", delta: "+$7.83 remaining", color: "border-accent-blue/20 bg-accent-blue/10" },
                  ].map((kpi) => (
                    <div key={kpi.label} className={`rounded-lg border ${kpi.color} p-3`}>
                      <p className="text-[9px] text-gray-400 uppercase tracking-wider font-mono mb-0.5">{kpi.label}</p>
                      <p className="text-lg font-bold text-white leading-tight">{kpi.value}</p>
                      <p className="text-[9px] text-gray-500 font-mono mt-0.5">{kpi.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Execution Engine + Inbox */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="rounded-lg bg-white/5 border border-white/5 p-3">
                    <p className="text-[9px] text-gray-400 uppercase tracking-wider font-mono mb-2">Execution Engine</p>
                    <div className="space-y-1.5">
                      {[
                        { name: "wf-deal-tracker", badge: "done", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10" },
                        { name: "wf-appointment-reminder", badge: "approval gate", color: "text-amber-400 border-amber-400/30 bg-amber-400/10" },
                        { name: "wf-voicemail-digest", badge: "running", color: "text-sky-400 border-sky-400/30 bg-sky-400/10" },
                      ].map((wf) => (
                        <div key={wf.name} className="flex items-center justify-between rounded-md bg-white/5 border border-white/5 px-2 py-1.5">
                          <span className="text-[10px] text-gray-300 font-mono truncate">{wf.name}</span>
                          <span className={`text-[8px] font-semibold uppercase tracking-wider rounded-full border px-1.5 py-0.5 ${wf.color}`}>{wf.badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/5 p-3">
                    <p className="text-[9px] text-gray-400 uppercase tracking-wider font-mono mb-2">Unified Inbox</p>
                    <div className="space-y-1.5">
                      {[
                        { msg: "VIP Email Escalation", badge: "needs action", color: "text-amber-400 border-amber-400/30 bg-amber-400/10", source: "Teams DM" },
                        { msg: "Unknown Caller Voicemail", badge: "triaged", color: "text-sky-400 border-sky-400/30 bg-sky-400/10", source: "Twilio voice" },
                        { msg: "Asana Task Scheduled", badge: "completed", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10", source: "scheduler" },
                      ].map((item) => (
                        <div key={item.msg} className="rounded-md bg-white/5 border border-white/5 px-2 py-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-gray-300 truncate">{item.msg}</span>
                            <span className={`text-[8px] font-semibold uppercase tracking-wider rounded-full border px-1.5 py-0.5 ${item.color}`}>{item.badge}</span>
                          </div>
                          <span className="text-[8px] text-gray-500 font-mono">{item.source}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Memory", items: ["preferences.md synced", "Style drift detected"] },
                    { label: "Policy", items: ["voice.outbound: DENY", "Audit trail: 312 events"] },
                    { label: "Enterprise", items: ["842 active users", "RLS isolation: pass"] },
                  ].map((section) => (
                    <div key={section.label} className="rounded-lg bg-white/5 border border-white/5 p-2">
                      <p className="text-[8px] text-gray-400 uppercase tracking-wider font-mono mb-1">{section.label}</p>
                      {section.items.map((item) => (
                        <p key={item} className="text-[9px] text-gray-400 font-mono truncate">{item}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating glow behind card */}
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-accent-blue/10 blur-3xl" />
            </div>
          </div>

          {/* Savings counter — locked to marketing doc figures */}
          <div className="mt-12 text-center">
            <p className="text-success text-xl md:text-2xl font-bold animate-fade-up">
              $837K &ndash; $1.53M{" "}
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
            {partnerLogos.map((logo) => (
              <div
                key={logo.key}
                className="flex h-10 items-center px-4 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default select-none"
              >
                {logo.component}
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
                <p className="text-2xl font-extrabold text-accent-blue mt-4">
                  Output-Based
                </p>
                <p className="text-gray-400 mt-1">Pay per skill execution</p>
                <p className="mt-4 text-sm text-gray-400">
                  Platform starts free. Pay only for what your assistants deliver.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-gray-400">
                    5 skill levels
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-gray-400">
                    $0&ndash;$500+ per run
                  </span>
                </div>
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
              Pay for outcomes, not seats.
            </h2>
            <p className="mt-4 text-lg text-muted-text">
              Output-based pricing across 5 skill levels. Start free with unlimited Explore outputs.
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
