import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Shield,
  ScrollText,
  Users,
  Brain,
  AlertTriangle,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "AXIOM vs OpenClaw",
  description:
    "OpenClaw is the most popular open-source AI agent with 175K+ GitHub stars. Compare its community-driven approach with AXIOM's enterprise security, policy governance, and multi-tenant architecture.",
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
  { feature: "Multi-tenant server", axiom: true, competitor: false },
  { feature: "Policy engine", axiom: true, competitor: false },
  { feature: "Enterprise audit trail", axiom: true, competitor: false },
  { feature: "Air-gapped mode", axiom: true, competitor: "Partial" },
  { feature: "Provider-agnostic", axiom: true, competitor: true },
  { feature: "24/7 heartbeat", axiom: true, competitor: "Limited" },
  { feature: "Human-readable memory", axiom: true, competitor: false },
  { feature: "Voice/telephony", axiom: true, competitor: false },
  { feature: "SSO/SAML", axiom: true, competitor: false },
  { feature: "Open source", axiom: "Planned", competitor: true },
  { feature: "Community size", axiom: "New", competitor: "175K+ stars" },
];

interface AdvantageItem {
  icon: React.ElementType;
  title: string;
  openclawDetail: string;
  axiomDetail: string;
}

const axiomAdvantages: AdvantageItem[] = [
  {
    icon: Shield,
    title: "Enterprise Security",
    openclawDetail:
      "40,000+ exposed instances, multiple RCE vulnerabilities, 800+ malicious skills in ClawHub.",
    axiomDetail:
      "Encrypted vault, sandboxed execution, zero-trust LLM output.",
  },
  {
    icon: ScrollText,
    title: "Policy Engine",
    openclawDetail: "NO pre-execution governance.",
    axiomDetail: "Evaluates every action against org rules before execution.",
  },
  {
    icon: Lock,
    title: "Audit Trail",
    openclawDetail: "No audit logging.",
    axiomDetail:
      "Immutable, exportable, GDPR-compliant audit trail for every action.",
  },
  {
    icon: Users,
    title: "Multi-Tenant Architecture",
    openclawDetail:
      "Single-user design. 200 employees = 200 separate installations.",
    axiomDetail:
      "Multi-tenant with PostgreSQL RLS, SSO, and centralized admin.",
  },
  {
    icon: Brain,
    title: "Memory Transparency",
    openclawDetail: "Black-box vector DB with opaque memory storage.",
    axiomDetail:
      "Human-readable Markdown memory you can inspect, edit, and export.",
  },
];

const openclawStrengths = [
  "Massive community with 175K+ GitHub stars and hundreds of pre-built skills",
  "Runs on anything from Raspberry Pi to enterprise hardware",
  "Free and open source with no licensing costs",
  "Model-agnostic -- works with Ollama, OpenAI, Anthropic, and more",
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

export default function OpenClawComparisonPage() {
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
            AXIOM vs OpenClaw
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            OpenClaw is the most popular open-source AI agent with 175K+ GitHub
            stars. It runs locally, supports 100+ skills, and is completely free.
            AXIOM adds enterprise security, policy governance, multi-tenant
            architecture, and an immutable audit trail.
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

      {/* ---- Where OpenClaw Excels -------------------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-navy/10 text-navy border-navy/20">
              Honest Assessment
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Where OpenClaw excels
            </h2>
            <p className="mt-4 text-muted-text">
              Credit where it is due -- OpenClaw is a remarkable open-source
              project.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {openclawStrengths.map((item) => (
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
              The enterprise capabilities OpenClaw was never designed to provide.
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
                        OpenClaw
                      </p>
                      <p className="text-sm leading-relaxed text-body-text">
                        {item.openclawDetail}
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
                    OpenClaw
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Pricing comparison
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* OpenClaw card */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-text">
                OpenClaw
              </p>
              <p className="mt-3 text-4xl font-extrabold text-body-text">
                Free
              </p>
              <p className="mt-1 text-sm text-muted-text">
                open source + infrastructure costs
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-text">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  No licensing fees
                </li>
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  Self-managed infrastructure burden
                </li>
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  No enterprise security or governance
                </li>
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  200 users = 200 installations to maintain
                </li>
              </ul>
            </div>

            {/* AXIOM card */}
            <div className="relative rounded-xl border-2 border-accent-blue bg-accent-blue/5 p-8 shadow-md">
              <Badge className="absolute -top-3 right-6 bg-accent-blue text-white">
                Recommended
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
                  Multi-tenant -- one deployment for entire org
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  Enterprise security with encrypted vault
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  Policy engine and GDPR-compliant audit trail
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  SSO/SAML, centralized admin, role-based access
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
                  Organizations that need something running this week and are
                  comfortable with the security risks should evaluate OpenClaw.
                  It is a powerful open-source agent with a massive community.
                  AXIOM is purpose-built for organizations where security,
                  governance, and multi-tenant operations are non-negotiable.
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
            Enterprise-grade AI without the&nbsp;risk
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Get the power of an open-source agent ecosystem with the security,
            governance, and multi-tenant architecture your organization requires.
            Start a free pilot in under ten minutes.
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
