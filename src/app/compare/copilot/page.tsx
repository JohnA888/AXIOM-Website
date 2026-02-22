import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Unplug,
  WifiOff,
  DollarSign,
  Brain,
  Zap,
  KeyRound,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "AXIOM vs Microsoft Copilot",
  description:
    "Microsoft Copilot costs $30/user/month on top of M365 licensing and locks you into Microsoft models. Compare Copilot's Office 365 integration with AXIOM's provider independence, true air-gap, and cost control.",
};

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */

type CellValue = true | false | "Partial" | string;

interface FeatureRow {
  feature: string;
  axiom: CellValue;
  competitor: CellValue;
}

const features: FeatureRow[] = [
  { feature: "Multi-tenant", axiom: true, competitor: "Via MSFT cloud" },
  { feature: "Policy engine", axiom: true, competitor: "Agent 365" },
  { feature: "Enterprise audit", axiom: true, competitor: true },
  { feature: "Air-gapped mode", axiom: true, competitor: false },
  { feature: "Provider-agnostic", axiom: true, competitor: false },
  { feature: "24/7 heartbeat", axiom: true, competitor: "Event-driven" },
  { feature: "Human-readable memory", axiom: true, competitor: false },
  { feature: "Voice/telephony", axiom: true, competitor: "Teams only" },
  { feature: "Office 365 deep integration", axiom: false, competitor: true },
  { feature: "Cost cap available", axiom: "Policy engine", competitor: "Manual monitoring" },
];

interface AdvantageItem {
  icon: React.ElementType;
  title: string;
  copilotDetail: string;
  axiomDetail: string;
}

const axiomAdvantages: AdvantageItem[] = [
  {
    icon: Unplug,
    title: "Provider Independence",
    copilotDetail:
      "Locked to Microsoft models. No option to use alternative providers.",
    axiomDetail:
      "Swap between Ollama, OpenRouter, Groq, Together, and Anthropic with one config change.",
  },
  {
    icon: WifiOff,
    title: "True Air-Gap",
    copilotDetail: "Requires Microsoft cloud connectivity at all times.",
    axiomDetail:
      "Runs on local hardware with zero internet. Full functionality offline.",
  },
  {
    icon: DollarSign,
    title: "Cost Control",
    copilotDetail:
      "$30/mo + M365 base + unpredictable agent credits. Costs escalate without warning.",
    axiomDetail:
      "80/20 routing: 80% local at near-zero cost. Self-hosted $15-30/user/mo with full cost caps.",
  },
  {
    icon: Brain,
    title: "Memory Transparency",
    copilotDetail:
      "Work IQ is a proprietary black box. You cannot inspect or export learned context.",
    axiomDetail:
      "Memory stored as Markdown files. Fully inspectable, editable, and exportable.",
  },
  {
    icon: Zap,
    title: "Proactive Intelligence",
    copilotDetail:
      "Reactive only -- Copilot responds when asked, does not monitor proactively.",
    axiomDetail:
      "Heartbeat runs 24/7: email triage, deadline monitoring, morning briefings without prompting.",
  },
  {
    icon: KeyRound,
    title: "No Vendor Lock-In",
    copilotDetail:
      "Stop paying Microsoft and everything disappears. Data and workflows are not portable.",
    axiomDetail:
      "Your data is yours forever. Export everything at any time, on any schedule.",
  },
];

const copilotStrengths = [
  "Deepest Office 365 integration -- Word, Excel, PowerPoint, Outlook, and Teams",
  "Agent 365 governance backed by Microsoft's enterprise security stack",
  "Computer Use Agent (CUA) for automating legacy desktop applications",
  "Zero deployment burden -- Microsoft manages the entire infrastructure",
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function StatusIcon({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-success/10 p-1">
        <Check className="size-4 text-success" strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-red-500/10 p-1">
        <X className="size-4 text-red-500" strokeWidth={3} />
      </span>
    );
  }
  if (value === "Partial") {
    return (
      <Badge
        variant="outline"
        className="border-warning/40 text-warning text-xs"
      >
        Partial
      </Badge>
    );
  }
  return (
    <span className="text-sm font-semibold text-body-text">{value}</span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CopilotComparisonPage() {
  return (
    <>
      {/* ---- Hero ------------------------------------------------- */}
      <section className="relative overflow-hidden bg-dark-bg bg-grid-pattern py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/90 to-dark-bg" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Link
            href="/compare"
            className="mb-6 inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-accent-blue"
          >
            <ArrowRight className="size-3 rotate-180" />
            All comparisons
          </Link>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AXIOM vs Microsoft Copilot
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Microsoft Copilot costs $30/user/month on top of M365 licensing and
            delivers deep Office 365 integration. AXIOM offers provider
            independence, true air-gap deployment, transparent cost controls, and
            24/7 proactive intelligence without vendor lock-in.
          </p>
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="rounded-lg bg-white/5 px-5 py-3 text-center">
              <p className="text-2xl font-bold text-accent-blue">
                {features.filter((f) => f.axiom === true && f.competitor !== true).length}
              </p>
              <p className="text-xs text-gray-500">features AXIOM adds</p>
            </div>
            <div className="rounded-lg bg-white/5 px-5 py-3 text-center">
              <p className="text-2xl font-bold text-success">
                {features.length}
              </p>
              <p className="text-xs text-gray-500">total capabilities compared</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Where Copilot Excels --------------------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-navy/10 text-navy border-navy/20">
              Honest Assessment
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Where Microsoft Copilot excels
            </h2>
            <p className="mt-4 text-muted-text">
              Copilot is a formidable product backed by the full weight of
              Microsoft.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copilotStrengths.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <span className="mt-0.5 inline-flex shrink-0 items-center justify-center rounded-full bg-navy/10 p-1">
                  <Check className="size-4 text-navy" strokeWidth={3} />
                </span>
                <p className="text-sm leading-relaxed text-body-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Where AXIOM Wins ------------------------------------- */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20">
              Enterprise Advantage
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Where AXIOM wins
            </h2>
            <p className="mt-4 text-muted-text">
              The freedoms and capabilities Copilot cannot offer.
            </p>
          </div>

          <div className="space-y-5">
            {axiomAdvantages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 p-2">
                      <Icon className="size-5 text-accent-blue" />
                    </span>
                    <h3 className="text-lg font-bold text-navy">
                      {item.title}
                    </h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-red-200 bg-red-50/50 p-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-600">
                        Microsoft Copilot
                      </p>
                      <p className="text-sm leading-relaxed text-body-text">
                        {item.copilotDetail}
                      </p>
                    </div>
                    <div className="rounded-lg border border-success/20 bg-success/5 p-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-success">
                        AXIOM
                      </p>
                      <p className="text-sm leading-relaxed text-body-text">
                        {item.axiomDetail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Side-by-side Feature Table --------------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Side-by-side feature comparison
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-4 font-semibold">Feature</th>
                  <th className="bg-accent-blue px-5 py-4 text-center font-semibold text-white">
                    AXIOM
                  </th>
                  <th className="px-5 py-4 text-center font-semibold">
                    Copilot
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? "bg-white" : "bg-surface/60"}
                  >
                    <td className="px-5 py-3.5 font-medium text-body-text">
                      {row.feature}
                    </td>
                    <td className="bg-accent-blue/5 border-x border-accent-blue/10 px-5 py-3.5 text-center">
                      <StatusIcon value={row.axiom} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <StatusIcon value={row.competitor} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Pricing Comparison ----------------------------------- */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Pricing comparison for 500 users
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Copilot card */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-text">
                Microsoft Copilot
              </p>
              <p className="mt-3 text-3xl font-extrabold text-body-text">
                $30/mo
              </p>
              <p className="mt-1 text-sm text-muted-text">
                per user + M365 base
              </p>
              <div className="mt-6 rounded-lg bg-red-50 p-4">
                <p className="text-sm font-semibold text-red-700">
                  $180K+/year
                </p>
                <p className="mt-0.5 text-xs text-red-600">
                  before agent credits
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-text">
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  M365 license required
                </li>
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  Unpredictable agent credits
                </li>
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  Microsoft model lock-in
                </li>
              </ul>
            </div>

            {/* AXIOM Self-hosted card */}
            <div className="relative rounded-xl border-2 border-accent-blue bg-accent-blue/5 p-8 shadow-md">
              <Badge className="absolute -top-3 right-6 bg-accent-blue text-white">
                Best Value
              </Badge>
              <p className="text-sm font-medium uppercase tracking-wider text-accent-blue">
                AXIOM Self-Hosted
              </p>
              <p className="mt-3 text-3xl font-extrabold text-navy">
                $15-$30/mo
              </p>
              <p className="mt-1 text-sm text-muted-text">per user</p>
              <div className="mt-6 rounded-lg bg-success/10 p-4">
                <p className="text-sm font-semibold text-success">
                  $90K-$180K/year
                </p>
                <p className="mt-0.5 text-xs text-success">
                  predictable, capped costs
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-body-text">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  80% local routing at near-zero cost
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  Full cost caps via policy engine
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  No vendor lock-in
                </li>
              </ul>
            </div>

            {/* AXIOM Cloud card */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-wider text-accent-blue">
                AXIOM Cloud
              </p>
              <p className="mt-3 text-3xl font-extrabold text-navy">
                $20-$45/mo
              </p>
              <p className="mt-1 text-sm text-muted-text">per user</p>
              <div className="mt-6 rounded-lg bg-accent-blue/10 p-4">
                <p className="text-sm font-semibold text-accent-blue">
                  $120K-$270K/year
                </p>
                <p className="mt-0.5 text-xs text-accent-blue">
                  managed infrastructure
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-body-text">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  Zero deployment burden
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  Provider-agnostic models
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  Full cost transparency
                </li>
              </ul>
            </div>
          </div>

          {/* Honest note */}
          <div className="mt-8 rounded-xl border border-warning/30 bg-warning/5 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 size-5 shrink-0 text-warning" />
              <div>
                <p className="font-semibold text-navy">Honest assessment</p>
                <p className="mt-1 text-sm leading-relaxed text-body-text">
                  Microsoft will cover 70-80% of AXIOM&apos;s functional surface
                  within 12-18 months. Organizations deeply embedded in the
                  Microsoft ecosystem without air-gap requirements should
                  seriously evaluate Copilot. AXIOM is built for organizations
                  that need provider independence, true offline operation, and
                  transparent cost control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA Banner ------------------------------------------- */}
      <section className="bg-navy py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            AI operations without vendor&nbsp;lock&#8209;in
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Keep your provider options open, your costs predictable, and your
            data portable. Start a free AXIOM pilot in under ten minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent-blue text-white hover:bg-accent-blue/90"
            >
              <Link href="/signup">
                Start Free Pilot
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/compare">View All Comparisons</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
