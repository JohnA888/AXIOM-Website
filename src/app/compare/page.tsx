import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "See how AXIOM replaces Fyxer, Reclaim, Motion, Superhuman, and Tactiq in a single AI operations platform. Compare features, pricing, and total cost of ownership.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type CellValue = true | false | "Partial" | string;

interface MatrixRow {
  capability: string;
  axiom: CellValue;
  fyxer: CellValue;
  reclaim: CellValue;
  motion: CellValue;
  superhuman: CellValue;
  tactiq: CellValue;
}

const columns = [
  "Capability",
  "AXIOM",
  "Fyxer",
  "Reclaim",
  "Motion",
  "Superhuman",
  "Tactiq",
] as const;

const matrixRows: MatrixRow[] = [
  {
    capability: "Email triage",
    axiom: true,
    fyxer: true,
    reclaim: false,
    motion: false,
    superhuman: true,
    tactiq: false,
  },
  {
    capability: "AI email drafts",
    axiom: true,
    fyxer: true,
    reclaim: false,
    motion: false,
    superhuman: true,
    tactiq: false,
  },
  {
    capability: "Smart time blocking",
    axiom: true,
    fyxer: false,
    reclaim: true,
    motion: true,
    superhuman: false,
    tactiq: false,
  },
  {
    capability: "Focus time",
    axiom: true,
    fyxer: false,
    reclaim: true,
    motion: "Partial",
    superhuman: false,
    tactiq: false,
  },
  {
    capability: "Task auto-scheduling",
    axiom: true,
    fyxer: false,
    reclaim: true,
    motion: true,
    superhuman: false,
    tactiq: false,
  },
  {
    capability: "Meeting transcription",
    axiom: true,
    fyxer: false,
    reclaim: false,
    motion: false,
    superhuman: false,
    tactiq: true,
  },
  {
    capability: "Field recording",
    axiom: true,
    fyxer: false,
    reclaim: false,
    motion: false,
    superhuman: false,
    tactiq: "Partial",
  },
  {
    capability: "Policy engine",
    axiom: true,
    fyxer: false,
    reclaim: false,
    motion: false,
    superhuman: false,
    tactiq: false,
  },
  {
    capability: "Cross-context memory",
    axiom: true,
    fyxer: false,
    reclaim: false,
    motion: false,
    superhuman: false,
    tactiq: false,
  },
  {
    capability: "CRM integration",
    axiom: true,
    fyxer: "Partial",
    reclaim: "Partial",
    motion: "Partial",
    superhuman: true,
    tactiq: "Partial",
  },
  {
    capability: "Air-gap deployment",
    axiom: true,
    fyxer: false,
    reclaim: false,
    motion: false,
    superhuman: false,
    tactiq: false,
  },
  {
    capability: "BYO LLM",
    axiom: true,
    fyxer: false,
    reclaim: false,
    motion: false,
    superhuman: false,
    tactiq: false,
  },
  {
    capability: "Monthly cost / user",
    axiom: "$29",
    fyxer: "$19",
    reclaim: "$15",
    motion: "$34",
    superhuman: "$30",
    tactiq: "$16",
  },
];

interface SavingsRow {
  tool: string;
  costPerUser: string;
  annualFor500: string;
  axiomReplaces: string;
}

const savingsRows: SavingsRow[] = [
  {
    tool: "Fyxer",
    costPerUser: "$19/mo",
    annualFor500: "$114,000",
    axiomReplaces: "Email triage & AI drafts",
  },
  {
    tool: "Reclaim",
    costPerUser: "$15/mo",
    annualFor500: "$90,000",
    axiomReplaces: "Smart time blocking & task scheduling",
  },
  {
    tool: "Motion",
    costPerUser: "$34/mo",
    annualFor500: "$204,000",
    axiomReplaces: "Calendar AI & task auto-scheduling",
  },
  {
    tool: "Superhuman",
    costPerUser: "$30/mo",
    annualFor500: "$180,000",
    axiomReplaces: "Email intelligence & CRM sync",
  },
  {
    tool: "Tactiq",
    costPerUser: "$16/mo",
    annualFor500: "$96,000",
    axiomReplaces: "Meeting transcription & summaries",
  },
];

const totalOtherAnnual = "$684,000";
const axiomAnnual = "$174,000";
const annualSavings = "$510,000";

const toolSlugs = ["fyxer", "reclaim", "motion", "superhuman", "tactiq"];

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
            Most teams juggle five or more point-solution AI tools -- each with its
            own login, billing, and data silo. AXIOM consolidates email, calendar,
            meetings, transcription, and task management into one governed platform
            and saves the average 500-person org over half a million dollars a year.
          </p>
        </div>
      </section>

      {/* ---- Comparison Matrix ------------------------------------ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Feature-by-feature comparison
            </h2>
            <p className="mt-4 text-muted-text">
              See what each tool covers -- and where AXIOM fills every gap.
            </p>
          </div>

          {/* Scrollable wrapper for mobile */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead>
                <tr className="sticky top-0 z-10 bg-navy text-white">
                  {columns.map((col, i) => (
                    <th
                      key={col}
                      className={`whitespace-nowrap px-5 py-4 font-semibold ${
                        i === 0
                          ? "sticky left-0 z-20 bg-navy min-w-[180px]"
                          : "text-center"
                      } ${i === 1 ? "bg-accent-blue text-white" : ""}`}
                    >
                      {col}
                      {i === 1 && (
                        <span className="ml-2 inline-block rounded bg-white/20 px-1.5 py-0.5 text-[10px] uppercase tracking-wider">
                          All-in-one
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrixRows.map((row, idx) => {
                  const cells: CellValue[] = [
                    row.axiom,
                    row.fyxer,
                    row.reclaim,
                    row.motion,
                    row.superhuman,
                    row.tactiq,
                  ];
                  return (
                    <tr
                      key={row.capability}
                      className={idx % 2 === 0 ? "bg-white" : "bg-surface/60"}
                    >
                      {/* Sticky capability column */}
                      <td
                        className={`sticky left-0 z-10 whitespace-nowrap px-5 py-3.5 font-medium text-body-text ${
                          idx % 2 === 0 ? "bg-white" : "bg-surface/60"
                        }`}
                      >
                        {row.capability}
                      </td>
                      {cells.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-5 py-3.5 text-center ${
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

      {/* ---- Savings Summary -------------------------------------- */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Savings at a glance
            </h2>
            <p className="mt-4 text-muted-text">
              Annual cost comparison for a 500-person organization.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-navy/5">
                  <th className="px-5 py-3.5 font-semibold text-navy">Tool</th>
                  <th className="px-5 py-3.5 font-semibold text-navy">
                    Cost / user / mo
                  </th>
                  <th className="px-5 py-3.5 font-semibold text-navy">
                    Annual (500 users)
                  </th>
                  <th className="px-5 py-3.5 font-semibold text-navy">
                    AXIOM replaces
                  </th>
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
                    <td className="px-5 py-3.5 font-medium text-body-text">
                      {row.tool}
                    </td>
                    <td className="px-5 py-3.5 text-body-text">{row.costPerUser}</td>
                    <td className="px-5 py-3.5 text-body-text">{row.annualFor500}</td>
                    <td className="px-5 py-3.5 text-muted-text">{row.axiomReplaces}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-navy/20 bg-navy/5">
                  <td className="px-5 py-4 font-bold text-navy">
                    Combined total
                  </td>
                  <td className="px-5 py-4">
                    <Minus className="size-4 text-muted-text" />
                  </td>
                  <td className="px-5 py-4 font-bold text-red-600">
                    {totalOtherAnnual}
                  </td>
                  <td className="px-5 py-4" />
                </tr>
                <tr className="bg-accent-blue/5">
                  <td className="px-5 py-4 font-bold text-accent-blue">
                    AXIOM (replaces all)
                  </td>
                  <td className="px-5 py-4 font-semibold text-accent-blue">
                    $29/mo
                  </td>
                  <td className="px-5 py-4 font-bold text-accent-blue">
                    {axiomAnnual}
                  </td>
                  <td className="px-5 py-4" />
                </tr>
                <tr className="bg-success/5">
                  <td className="px-5 py-4 font-bold text-success">
                    You save
                  </td>
                  <td className="px-5 py-4" />
                  <td className="px-5 py-4 text-lg font-extrabold text-success">
                    {annualSavings}
                  </td>
                  <td className="px-5 py-4 text-sm text-success">
                    per year
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Individual Comparison Links -------------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Head-to-head comparisons
            </h2>
            <p className="mt-4 text-muted-text">
              Deep-dive into how AXIOM stacks up against each competitor.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolSlugs.map((slug) => {
              const name = slug.charAt(0).toUpperCase() + slug.slice(1);
              return (
                <Link
                  key={slug}
                  href={`/compare/${slug}`}
                  className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm transition-all hover:border-accent-blue/40 hover:shadow-md"
                >
                  <div>
                    <p className="text-sm font-medium text-muted-text">
                      AXIOM vs
                    </p>
                    <p className="text-lg font-bold text-navy">{name}</p>
                  </div>
                  <ArrowRight className="size-5 text-muted-text transition-transform group-hover:translate-x-1 group-hover:text-accent-blue" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- CTA Banner ------------------------------------------- */}
      <section className="bg-navy py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to consolidate your AI&nbsp;stack?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Replace five subscriptions with one platform. Start a free pilot in
            under ten minutes -- no credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent-blue text-white hover:bg-accent-blue/90"
            >
              <Link href="/contact">
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
