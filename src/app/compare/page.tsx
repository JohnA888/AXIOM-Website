import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Minus, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "See how AXIOM replaces nine AI point-solutions — and stacks up against OpenClaw, Microsoft Copilot, and Anthropic Cowork. Compare features, pricing, and total cost of ownership.",
};

/* ------------------------------------------------------------------ */
/*  Point-solution comparison data                                     */
/* ------------------------------------------------------------------ */

type CellValue = true | false | "Partial" | string;

const columns = [
  "Capability",
  "AXIOM",
  "Fyxer",
  "Reclaim",
  "Motion",
  "Superhuman",
  "Fireflies",
  "Otter",
  "Calendly",
  "Tactiq",
  "Read.ai",
] as const;

type ColumnKey =
  | "axiom"
  | "fyxer"
  | "reclaim"
  | "motion"
  | "superhuman"
  | "fireflies"
  | "otter"
  | "calendly"
  | "tactiq"
  | "readai";

type MatrixRow = { capability: string; skillLevel?: { level: number; name: string } } & Record<ColumnKey, CellValue>;

/* Skill level map for AXIOM capabilities */
const skillLevelColors: Record<number, string> = {
  1: "bg-blue-500/10 text-blue-600 border-blue-500/30",
  2: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
  3: "bg-amber-500/10 text-amber-600 border-amber-500/30",
  4: "bg-purple-500/10 text-purple-600 border-purple-500/30",
  5: "bg-rose-500/10 text-rose-600 border-rose-500/30",
};

const matrixRows: MatrixRow[] = [
  {
    capability: "Email triage",
    skillLevel: { level: 1, name: "Explore" },
    axiom: true, fyxer: true, reclaim: false, motion: false, superhuman: true,
    fireflies: false, otter: false, calendly: false, tactiq: false, readai: false,
  },
  {
    capability: "AI email drafts",
    skillLevel: { level: 2, name: "Assist" },
    axiom: true, fyxer: true, reclaim: false, motion: false, superhuman: true,
    fireflies: false, otter: false, calendly: false, tactiq: false, readai: false,
  },
  {
    capability: "Smart time blocking",
    skillLevel: { level: 2, name: "Assist" },
    axiom: true, fyxer: false, reclaim: true, motion: true, superhuman: false,
    fireflies: false, otter: false, calendly: false, tactiq: false, readai: false,
  },
  {
    capability: "Focus time protection",
    skillLevel: { level: 2, name: "Assist" },
    axiom: true, fyxer: false, reclaim: true, motion: "Partial", superhuman: false,
    fireflies: false, otter: false, calendly: false, tactiq: false, readai: false,
  },
  {
    capability: "Task auto-scheduling",
    skillLevel: { level: 3, name: "Collaborate" },
    axiom: true, fyxer: false, reclaim: true, motion: true, superhuman: false,
    fireflies: false, otter: false, calendly: false, tactiq: false, readai: false,
  },
  {
    capability: "Scheduling links",
    skillLevel: { level: 1, name: "Explore" },
    axiom: true, fyxer: false, reclaim: false, motion: false, superhuman: false,
    fireflies: false, otter: false, calendly: true, tactiq: false, readai: false,
  },
  {
    capability: "Meeting transcription",
    skillLevel: { level: 1, name: "Explore" },
    axiom: true, fyxer: "Partial", reclaim: false, motion: false, superhuman: false,
    fireflies: true, otter: true, calendly: false, tactiq: true, readai: true,
  },
  {
    capability: "AI meeting summaries",
    skillLevel: { level: 2, name: "Assist" },
    axiom: true, fyxer: "Partial", reclaim: false, motion: false, superhuman: false,
    fireflies: true, otter: true, calendly: false, tactiq: true, readai: true,
  },
  {
    capability: "Meeting analytics",
    skillLevel: { level: 3, name: "Collaborate" },
    axiom: true, fyxer: false, reclaim: false, motion: false, superhuman: false,
    fireflies: "Partial", otter: "Partial", calendly: false, tactiq: false, readai: true,
  },
  {
    capability: "Field recording",
    skillLevel: { level: 1, name: "Explore" },
    axiom: true, fyxer: false, reclaim: false, motion: false, superhuman: false,
    fireflies: false, otter: false, calendly: false, tactiq: "Partial", readai: false,
  },
  {
    capability: "CRM integration",
    skillLevel: { level: 3, name: "Collaborate" },
    axiom: true, fyxer: "Partial", reclaim: "Partial", motion: "Partial", superhuman: true,
    fireflies: true, otter: "Partial", calendly: "Partial", tactiq: "Partial", readai: "Partial",
  },
  {
    capability: "Policy engine",
    skillLevel: { level: 4, name: "Orchestrate" },
    axiom: true, fyxer: false, reclaim: false, motion: false, superhuman: false,
    fireflies: false, otter: false, calendly: false, tactiq: false, readai: false,
  },
  {
    capability: "Cross-context memory",
    skillLevel: { level: 4, name: "Orchestrate" },
    axiom: true, fyxer: false, reclaim: false, motion: false, superhuman: false,
    fireflies: false, otter: false, calendly: false, tactiq: false, readai: false,
  },
  {
    capability: "Air-gap deployment",
    axiom: true, fyxer: false, reclaim: false, motion: false, superhuman: false,
    fireflies: false, otter: false, calendly: false, tactiq: false, readai: false,
  },
  {
    capability: "BYO LLM",
    axiom: true, fyxer: false, reclaim: false, motion: false, superhuman: false,
    fireflies: false, otter: false, calendly: false, tactiq: false, readai: false,
  },
  {
    capability: "Pricing model",
    axiom: "Output-based", fyxer: "$22–38/mo", reclaim: "$8–12/mo", motion: "$29–49/mo", superhuman: "$25–40/mo",
    fireflies: "$10–39/mo", otter: "$8–20/mo", calendly: "$10–16/mo", tactiq: "$12/mo", readai: "$20–30/mo",
  },
];

const columnKeys: ColumnKey[] = [
  "axiom", "fyxer", "reclaim", "motion", "superhuman",
  "fireflies", "otter", "calendly", "tactiq", "readai",
];

/* ------------------------------------------------------------------ */
/*  Savings data (all 9 tools, from marketing doc)                     */
/* ------------------------------------------------------------------ */

interface SavingsRow {
  tool: string;
  costRange: string;
  annualRange500: string;
  axiomReplaces: string;
}

const savingsRows: SavingsRow[] = [
  { tool: "Fyxer", costRange: "$22–$38/mo", annualRange500: "$135K–$225K", axiomReplaces: "Email intelligence + meeting notes + CRM sync" },
  { tool: "Reclaim", costRange: "$8–$12/mo", annualRange500: "$48K–$72K", axiomReplaces: "Smart time blocking + focus protection + habits" },
  { tool: "Motion", costRange: "$29–$49/mo", annualRange500: "$174K–$294K", axiomReplaces: "Task auto-scheduling + calendar AI" },
  { tool: "Superhuman", costRange: "$25–$40/mo", annualRange500: "$150K–$240K", axiomReplaces: "Split inbox + AI drafts + read tracking" },
  { tool: "Fireflies", costRange: "$10–$39/mo", annualRange500: "$60K–$234K", axiomReplaces: "Meeting recording + transcription + CRM sync" },
  { tool: "Otter", costRange: "$8–$20/mo", annualRange500: "$48K–$120K", axiomReplaces: "Meeting transcription + notes" },
  { tool: "Calendly", costRange: "$10–$16/mo", annualRange500: "$60K–$96K", axiomReplaces: "Scheduling links" },
  { tool: "Tactiq", costRange: "$12/mo", annualRange500: "$72K", axiomReplaces: "Meeting transcription + summaries + exports" },
  { tool: "Read.ai", costRange: "$20–$30/mo", annualRange500: "$120K–$180K", axiomReplaces: "Meeting analytics + engagement scoring" },
];

/* ------------------------------------------------------------------ */
/*  Enterprise competitor comparison matrix (from marketing doc)        */
/* ------------------------------------------------------------------ */

interface EnterpriseRow {
  capability: string;
  axiom: string;
  openclaw: string;
  copilot: string;
  cowork: string;
}

const enterpriseMatrix: EnterpriseRow[] = [
  { capability: "Multi-tenant server deployment", axiom: "Yes", openclaw: "No", copilot: "Yes (MSFT cloud)", cowork: "No" },
  { capability: "Policy engine (pre-execution)", axiom: "Yes", openclaw: "No", copilot: "Agent 365", cowork: "No" },
  { capability: "Enterprise audit trail", axiom: "Yes", openclaw: "No", copilot: "Yes", cowork: "No" },
  { capability: "Air-gapped / offline mode", axiom: "Yes", openclaw: "Partial", copilot: "No", cowork: "No" },
  { capability: "Provider-agnostic (swap LLMs)", axiom: "Yes", openclaw: "Yes", copilot: "No", cowork: "No" },
  { capability: "24/7 proactive heartbeat", axiom: "Yes", openclaw: "Limited", copilot: "Event-driven", cowork: "No" },
  { capability: "Human-readable memory", axiom: "Yes", openclaw: "No", copilot: "No", cowork: "No" },
  { capability: "Voice / telephony", axiom: "Yes", openclaw: "No", copilot: "Teams only", cowork: "No" },
  { capability: "Skill marketplace", axiom: "Yes", openclaw: "Yes (security issues)", copilot: "Copilot Studio", cowork: "Plugins" },
  { capability: "SSO / SAML integration", axiom: "Yes", openclaw: "No", copilot: "Yes (Azure AD)", cowork: "Enterprise plan" },
  { capability: "Office 365 deep integration", axiom: "No", openclaw: "No", copilot: "Yes", cowork: "No" },
  { capability: "Open source", axiom: "Planned", openclaw: "Yes", copilot: "No", cowork: "No" },
  { capability: "Ships today", axiom: "In development", openclaw: "Yes", copilot: "Yes", cowork: "Yes" },
  { capability: "Pricing model", axiom: "Output-based", openclaw: "Free + infra", copilot: "$30/mo + M365", cowork: "$20–$200/mo" },
];

const enterpriseCompetitors = [
  { slug: "openclaw", name: "OpenClaw", tagline: "Open-source AI agent with 175K+ GitHub stars", badge: "Open Source" },
  { slug: "copilot", name: "Microsoft Copilot", tagline: "Deep Office 365 integration, enterprise-backed", badge: "Incumbent" },
  { slug: "cowork", name: "Anthropic Cowork", tagline: "Frontier model quality for individual users", badge: "Frontier AI" },
];

const pointSolutionSlugs = [
  { slug: "fyxer", name: "Fyxer" },
  { slug: "reclaim", name: "Reclaim" },
  { slug: "motion", name: "Motion" },
  { slug: "superhuman", name: "Superhuman" },
  { slug: "fireflies", name: "Fireflies" },
  { slug: "otter", name: "Otter" },
  { slug: "calendly", name: "Calendly" },
  { slug: "tactiq", name: "Tactiq" },
  { slug: "readai", name: "Read.ai" },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function CellContent({ value }: { value: CellValue }) {
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
      <Badge variant="outline" className="border-warning/40 text-warning text-xs">
        Partial
      </Badge>
    );
  }
  return <span className="text-sm font-semibold">{value}</span>;
}

function EnterpriseCellContent({ value }: { value: string }) {
  if (value === "Yes") {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-success/10 p-1">
        <Check className="size-4 text-success" strokeWidth={3} />
      </span>
    );
  }
  if (value === "No") {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-red-500/10 p-1">
        <X className="size-4 text-red-500" strokeWidth={3} />
      </span>
    );
  }
  return (
    <span className="text-xs font-medium text-muted-text">{value}</span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ComparePage() {
  return (
    <>
      {/* ---- Hero ------------------------------------------------- */}
      <section className="relative overflow-hidden bg-dark-bg bg-grid-pattern py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/90 to-dark-bg" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20">
            Tool Consolidation
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Replace your entire AI&nbsp;stack.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Most teams juggle nine or more point-solution AI tools &mdash; each with its
            own login, billing, and data silo. AXIOM consolidates email, calendar,
            meetings, transcription, and task management into one governed platform
            and saves the average 500-person org{" "}
            <span className="text-success font-semibold">$837K&ndash;$1.53M per year</span>.
          </p>
        </div>
      </section>

      {/* ---- Enterprise Competitor Comparisons ---------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-navy/10 text-navy border-navy/20">
              Enterprise Platforms
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              AXIOM vs enterprise competitors
            </h2>
            <p className="mt-4 text-muted-text">
              How AXIOM compares to the three platforms enterprise buyers evaluate most.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {enterpriseCompetitors.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-accent-blue/40 hover:shadow-md"
              >
                <Badge className="mb-3 w-fit bg-accent-blue/10 text-accent-blue border-accent-blue/20 text-xs">
                  {comp.badge}
                </Badge>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-text">AXIOM vs</p>
                  <p className="text-xl font-bold text-navy">{comp.name}</p>
                  <p className="mt-2 text-sm text-muted-text leading-relaxed">
                    {comp.tagline}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-accent-blue">
                  Read comparison
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* Enterprise comparison matrix */}
          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold text-navy">
              Enterprise platform comparison matrix
            </h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-5 py-4 font-semibold min-w-[200px]">Capability</th>
                    <th className="bg-accent-blue px-5 py-4 text-center font-semibold">AXIOM</th>
                    <th className="px-5 py-4 text-center font-semibold">OpenClaw</th>
                    <th className="px-5 py-4 text-center font-semibold">Copilot</th>
                    <th className="px-5 py-4 text-center font-semibold">Cowork</th>
                  </tr>
                </thead>
                <tbody>
                  {enterpriseMatrix.map((row, idx) => (
                    <tr
                      key={row.capability}
                      className={idx % 2 === 0 ? "bg-white" : "bg-surface/60"}
                    >
                      <td className="px-5 py-3.5 font-medium text-body-text">
                        {row.capability}
                      </td>
                      <td className="bg-accent-blue/5 border-x border-accent-blue/10 px-5 py-3.5 text-center">
                        <EnterpriseCellContent value={row.axiom} />
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <EnterpriseCellContent value={row.openclaw} />
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <EnterpriseCellContent value={row.copilot} />
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <EnterpriseCellContent value={row.cowork} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Point-Solution Comparison Matrix ----------------------- */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-warning/10 text-warning border-warning/20">
              Point Solutions
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Feature-by-feature: AXIOM vs 9 tools
            </h2>
            <p className="mt-4 text-muted-text">
              See what each single-purpose tool covers &mdash; and where AXIOM fills every gap.
            </p>
          </div>

          {/* Skill Level Legend */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-semibold text-muted-text uppercase tracking-wider mr-1">AXIOM Skill Levels:</span>
            {[
              { level: 1, name: "Explore", price: "$0\u2013$1" },
              { level: 2, name: "Assist", price: "$2\u2013$10" },
              { level: 3, name: "Collaborate", price: "$5\u2013$25" },
              { level: 4, name: "Orchestrate", price: "$15\u2013$100+" },
              { level: 5, name: "Autonomous", price: "$50\u2013$500+" },
            ].map((sl) => (
              <span
                key={sl.level}
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${skillLevelColors[sl.level]}`}
              >
                L{sl.level} {sl.name}
                <span className="font-normal opacity-70">{sl.price}/run</span>
              </span>
            ))}
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full min-w-[1200px] text-left text-sm">
              <thead>
                <tr className="sticky top-0 z-10 bg-navy text-white">
                  {columns.map((col, i) => (
                    <th
                      key={col}
                      className={`whitespace-nowrap px-4 py-4 font-semibold text-xs ${
                        i === 0
                          ? "sticky left-0 z-20 bg-navy min-w-[160px]"
                          : "text-center"
                      } ${i === 1 ? "bg-accent-blue text-white" : ""}`}
                    >
                      {col}
                      {i === 1 && (
                        <span className="ml-1 inline-block rounded bg-white/20 px-1 py-0.5 text-[9px] uppercase tracking-wider">
                          All-in-one
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrixRows.map((row, idx) => {
                  const cells = columnKeys.map((key) => row[key]);
                  const sl = row.skillLevel;
                  return (
                    <tr
                      key={row.capability}
                      className={idx % 2 === 0 ? "bg-white" : "bg-surface/60"}
                    >
                      <td
                        className={`sticky left-0 z-10 px-4 py-3 font-medium text-body-text text-xs ${
                          idx % 2 === 0 ? "bg-white" : "bg-surface/60"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="whitespace-nowrap">{row.capability}</span>
                          {sl && (
                            <span className={`inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[9px] font-semibold whitespace-nowrap ${skillLevelColors[sl.level]}`}>
                              L{sl.level}
                            </span>
                          )}
                        </div>
                      </td>
                      {cells.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-4 py-3 text-center ${
                            ci === 0
                              ? "bg-accent-blue/5 border-x border-accent-blue/10"
                              : ""
                          }`}
                        >
                          <CellContent value={cell} />
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Savings Summary ---------------------------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Savings at a glance
            </h2>
            <p className="mt-4 text-muted-text">
              Annual cost comparison for a 500-person organization replacing all nine tools.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-navy/5">
                  <th className="px-5 py-3.5 font-semibold text-navy">Tool</th>
                  <th className="px-5 py-3.5 font-semibold text-navy">Cost range / user</th>
                  <th className="px-5 py-3.5 font-semibold text-navy">Annual (500 users)</th>
                  <th className="px-5 py-3.5 font-semibold text-navy">AXIOM replaces</th>
                </tr>
              </thead>
              <tbody>
                {savingsRows.map((row, idx) => (
                  <tr
                    key={row.tool}
                    className={`border-b border-gray-100 ${
                      idx % 2 !== 0 ? "bg-surface/40" : ""
                    }`}
                  >
                    <td className="px-5 py-3.5 font-medium text-body-text">{row.tool}</td>
                    <td className="px-5 py-3.5 text-body-text">{row.costRange}</td>
                    <td className="px-5 py-3.5 text-body-text">{row.annualRange500}</td>
                    <td className="px-5 py-3.5 text-muted-text">{row.axiomReplaces}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-navy/20 bg-navy/5">
                  <td className="px-5 py-4 font-bold text-navy">Combined total</td>
                  <td className="px-5 py-4">
                    <Minus className="size-4 text-muted-text" />
                  </td>
                  <td className="px-5 py-4 font-bold text-red-600">$837K&ndash;$1.53M</td>
                  <td className="px-5 py-4" />
                </tr>
                <tr className="bg-accent-blue/5">
                  <td className="px-5 py-4 font-bold text-accent-blue">AXIOM (replaces all)</td>
                  <td className="px-5 py-4 font-semibold text-accent-blue">Output-based</td>
                  <td className="px-5 py-4 font-bold text-accent-blue">Pay per run</td>
                  <td className="px-5 py-4 text-xs text-accent-blue">Platform from $0/mo + per-output fees across 5 skill levels</td>
                </tr>
                <tr className="bg-success/5">
                  <td className="px-5 py-4 font-bold text-success">Estimated savings</td>
                  <td className="px-5 py-4" />
                  <td className="px-5 py-4 text-lg font-extrabold text-success">
                    $837K&ndash;$1.53M
                  </td>
                  <td className="px-5 py-4 text-sm text-success">per year (500 users)</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Head-to-head Links ------------------------------------- */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Head-to-head comparisons
            </h2>
            <p className="mt-4 text-muted-text">
              Deep-dive into how AXIOM stacks up against each competitor.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pointSolutionSlugs.map((tool) => (
              <Link
                key={tool.slug}
                href={`/compare/${tool.slug}`}
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm transition-all hover:border-accent-blue/40 hover:shadow-md"
              >
                <div>
                  <p className="text-sm font-medium text-muted-text">AXIOM vs</p>
                  <p className="text-lg font-bold text-navy">{tool.name}</p>
                </div>
                <ArrowRight className="size-5 text-muted-text transition-transform group-hover:translate-x-1 group-hover:text-accent-blue" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA Banner --------------------------------------------- */}
      <section className="bg-navy py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to consolidate your AI&nbsp;stack?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Replace nine subscriptions with one platform. Start a free pilot in
            under ten minutes &mdash; no credit card required.
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
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
