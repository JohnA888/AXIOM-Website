import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Users,
  Clock,
  ScrollText,
  Shield,
  Phone,
  Unplug,
  AlertTriangle,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "AXIOM vs Anthropic Cowork",
  description:
    "Anthropic Cowork is a powerful single-user desktop AI. Compare Cowork's frontier model quality with AXIOM's enterprise multi-tenant architecture, 24/7 operation, policy governance, and voice capabilities.",
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
  { feature: "Multi-tenant", axiom: true, competitor: false },
  { feature: "Policy engine", axiom: true, competitor: false },
  { feature: "Enterprise audit", axiom: true, competitor: false },
  { feature: "Air-gapped mode", axiom: true, competitor: false },
  { feature: "Provider-agnostic", axiom: true, competitor: false },
  { feature: "24/7 heartbeat", axiom: true, competitor: false },
  { feature: "Human-readable memory", axiom: true, competitor: false },
  { feature: "Voice/telephony", axiom: true, competitor: false },
  { feature: "Skill marketplace", axiom: "SkillForge", competitor: "Plugins" },
  { feature: "Desktop AI quality", axiom: "Depends on provider", competitor: "Exceptional" },
];

interface AdvantageItem {
  icon: React.ElementType;
  title: string;
  coworkDetail: string;
  axiomDetail: string;
}

const axiomAdvantages: AdvantageItem[] = [
  {
    icon: Users,
    title: "Enterprise Multi-Tenant",
    coworkDetail:
      "Single-user desktop application. No server mode, no multi-tenant support, no centralized management.",
    axiomDetail:
      "Centralized server with SSO, role-based access control, and multi-tenant architecture for the entire organization.",
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    coworkDetail:
      "Stops working when the laptop closes. No background processing or server-side execution.",
    axiomDetail:
      "Heartbeat runs on the server continuously -- email triage, deadline monitoring, and morning briefings even when you are offline.",
  },
  {
    icon: ScrollText,
    title: "Policy Governance",
    coworkDetail:
      "NO organizational policy engine. Individual users operate without governance guardrails.",
    axiomDetail:
      "Enforces organizational rules at every action. Compliance, data handling, and approval workflows built in.",
  },
  {
    icon: Shield,
    title: "Enterprise Audit",
    coworkDetail:
      "Anthropic explicitly states that Cowork activity is NOT included in audit logs or the compliance API.",
    axiomDetail:
      "Full immutable audit trail for every action. Exportable, searchable, and GDPR-compliant.",
  },
  {
    icon: Phone,
    title: "Voice & Telephony",
    coworkDetail:
      "No voice capabilities. Desktop-only text and file interaction.",
    axiomDetail:
      "Call screening, voice guidance, voicemail management, and outbound calling built into the platform.",
  },
  {
    icon: Unplug,
    title: "Provider Independence",
    coworkDetail:
      "Locked to Anthropic models only, with usage limits on all tiers.",
    axiomDetail:
      "Routes 80% of tasks to local providers at near-zero cost. Swap between Ollama, OpenRouter, Groq, Together, and Anthropic.",
  },
];

const coworkStrengths = [
  "Backed by Anthropic's frontier models with exceptional reasoning quality",
  "Polished UX with async task queuing and progress tracking",
  "Growing plugin ecosystem with MCP connectors",
  "Browser automation via Claude in Chrome for web-based workflows",
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

export default function CoworkComparisonPage() {
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
            AXIOM vs Anthropic Cowork
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Anthropic Cowork brings frontier model quality to a polished
            single-user desktop app at $20-$200/mo. AXIOM delivers enterprise
            multi-tenant operations, 24/7 server-side intelligence, policy
            governance, and voice capabilities that work when the laptop is
            closed.
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

      {/* ---- Where Cowork Excels ---------------------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-navy/10 text-navy border-navy/20">
              Honest Assessment
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Where Anthropic Cowork excels
            </h2>
            <p className="mt-4 text-muted-text">
              Cowork is an excellent desktop AI backed by Anthropic&apos;s
              frontier research.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {coworkStrengths.map((item) => (
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
              The enterprise operations capabilities a desktop app cannot
              provide.
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
                        Anthropic Cowork
                      </p>
                      <p className="text-sm leading-relaxed text-body-text">
                        {item.coworkDetail}
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
                    Cowork
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

      {/* ---- Better Together -------------------------------------- */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-success/10 text-success border-success/20">
              Complementary
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              <span className="inline-flex items-center gap-2">
                <Handshake className="size-8 text-accent-blue" />
                Better Together: AXIOM + Cowork
              </span>
            </h2>
          </div>

          <div className="rounded-xl border border-accent-blue/20 bg-white p-8 shadow-sm">
            <p className="text-base leading-relaxed text-body-text">
              AXIOM and Cowork are not competing products. Cowork excels at
              desktop-local work: file organization, document drafting,
              research. AXIOM handles everything when the laptop is closed:
              email triage, deadline monitoring, call screening, morning
              briefings.
            </p>
            <p className="mt-4 text-base leading-relaxed text-body-text">
              AXIOM&apos;s skill import system can bring Cowork plugins into the
              AXIOM ecosystem, wrapping them with policy governance and audit
              controls. Standardize on Cowork for desktop productivity and AXIOM
              for governed enterprise operations.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-accent-blue/20 bg-accent-blue/5 p-5">
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent-blue">
                  Cowork handles
                </p>
                <ul className="space-y-2 text-sm text-body-text">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-accent-blue" />
                    File organization and management
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-accent-blue" />
                    Document drafting and editing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-accent-blue" />
                    Research and analysis tasks
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-accent-blue" />
                    Browser automation workflows
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-success/20 bg-success/5 p-5">
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-success">
                  AXIOM handles
                </p>
                <ul className="space-y-2 text-sm text-body-text">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-success" />
                    24/7 email triage and response
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-success" />
                    Deadline monitoring and alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-success" />
                    Call screening and voicemail
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-success" />
                    Morning briefings and daily ops
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Pricing Comparison ----------------------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Pricing comparison
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Cowork card */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-text">
                Anthropic Cowork
              </p>
              <p className="mt-3 text-4xl font-extrabold text-body-text">
                $20-$200
              </p>
              <p className="mt-1 text-sm text-muted-text">
                per month, single user
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-text">
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  Single user only -- no enterprise pricing
                </li>
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  No multi-tenant or centralized admin
                </li>
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  No server-side operations
                </li>
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  Usage limits on all tiers
                </li>
              </ul>
            </div>

            {/* AXIOM card */}
            <div className="relative rounded-xl border-2 border-accent-blue bg-accent-blue/5 p-8 shadow-md">
              <Badge className="absolute -top-3 right-6 bg-accent-blue text-white">
                Enterprise Ready
              </Badge>
              <p className="text-sm font-medium uppercase tracking-wider text-accent-blue">
                AXIOM
              </p>
              <p className="mt-3 text-4xl font-extrabold text-navy">
                $15-$45
              </p>
              <p className="mt-1 text-sm text-muted-text">per user / month</p>
              <ul className="mt-6 space-y-2.5 text-sm text-body-text">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  Multi-tenant with SSO and role-based access
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  24/7 server-side operations
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  Cost caps via policy engine
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  Volume pricing for enterprise
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
                  Cowork is excellent for individual knowledge workers who need
                  powerful AI for documents and research. It is not an enterprise
                  operations platform. For teams that need governed, always-on AI
                  operations, AXIOM is purpose-built. For desktop productivity,
                  Cowork is hard to beat -- and the two products work well
                  together.
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
            Enterprise AI that never&nbsp;sleeps
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Complement your desktop AI with governed, 24/7 enterprise
            operations. Start a free AXIOM pilot in under ten minutes -- pair it
            with Cowork for complete coverage.
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
