import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FeatureRow {
  feature: string;
  axiom: boolean | "Partial";
  competitor: boolean | "Partial";
}

interface ToolInfo {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  costPerUser: string;
  axiomCost: string;
  features: FeatureRow[];
  axiomAdds: string[];
  migrationNote: string;
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const toolData: Record<string, ToolInfo> = {
  fyxer: {
    name: "Fyxer",
    slug: "fyxer",
    tagline: "AI email triage that goes further.",
    description:
      "Fyxer automates email sorting and drafting. AXIOM does the same -- plus calendar, meetings, tasks, transcription, and policy governance in a single platform.",
    costPerUser: "$19/mo",
    axiomCost: "$29/mo",
    features: [
      { feature: "Email triage & prioritisation", axiom: true, competitor: true },
      { feature: "AI email drafts", axiom: true, competitor: true },
      { feature: "Email thread summarisation", axiom: true, competitor: true },
      { feature: "Smart time blocking", axiom: true, competitor: false },
      { feature: "Task auto-scheduling", axiom: true, competitor: false },
      { feature: "Meeting transcription", axiom: true, competitor: false },
      { feature: "Field recording", axiom: true, competitor: false },
      { feature: "Policy engine", axiom: true, competitor: false },
      { feature: "Cross-context memory", axiom: true, competitor: false },
      { feature: "CRM integration", axiom: true, competitor: "Partial" },
      { feature: "Air-gap deployment", axiom: true, competitor: false },
      { feature: "BYO LLM", axiom: true, competitor: false },
    ],
    axiomAdds: [
      "Smart calendar time blocking and focus-time protection",
      "Automatic task scheduling across projects",
      "Meeting and field-recording transcription with AI summaries",
      "Enterprise policy engine with compliance guardrails",
      "Cross-context memory that connects email, meetings, and tasks",
      "Air-gapped and BYO-LLM deployment for regulated industries",
    ],
    migrationNote:
      "AXIOM imports your Fyxer email rules and preferences automatically. Most teams are fully migrated in under a day.",
  },
  reclaim: {
    name: "Reclaim",
    slug: "reclaim",
    tagline: "Smart scheduling, plus everything else.",
    description:
      "Reclaim excels at calendar time-blocking and habits. AXIOM matches those capabilities and adds email intelligence, transcription, policy governance, and unified AI memory.",
    costPerUser: "$15/mo",
    axiomCost: "$29/mo",
    features: [
      { feature: "Smart time blocking", axiom: true, competitor: true },
      { feature: "Focus time & habits", axiom: true, competitor: true },
      { feature: "Task auto-scheduling", axiom: true, competitor: true },
      { feature: "Calendar analytics", axiom: true, competitor: true },
      { feature: "Email triage", axiom: true, competitor: false },
      { feature: "AI email drafts", axiom: true, competitor: false },
      { feature: "Meeting transcription", axiom: true, competitor: false },
      { feature: "Field recording", axiom: true, competitor: false },
      { feature: "Policy engine", axiom: true, competitor: false },
      { feature: "Cross-context memory", axiom: true, competitor: false },
      { feature: "CRM integration", axiom: true, competitor: "Partial" },
      { feature: "Air-gap deployment", axiom: true, competitor: false },
      { feature: "BYO LLM", axiom: true, competitor: false },
    ],
    axiomAdds: [
      "AI-powered email triage, drafts, and thread summarisation",
      "Meeting and field-recording transcription with action items",
      "Enterprise policy engine enforcing compliance in real time",
      "Unified memory connecting calendar context to emails and tasks",
      "Air-gapped and self-hosted deployment options",
      "Bring-your-own LLM support for data sovereignty",
    ],
    migrationNote:
      "AXIOM syncs with your existing Google or Outlook calendar instantly. Reclaim habits and task lists import with a single click.",
  },
  motion: {
    name: "Motion",
    slug: "motion",
    tagline: "Project AI meets full operations AI.",
    description:
      "Motion combines calendar AI with project management. AXIOM covers all of that and layers on email intelligence, meeting transcription, policy governance, and enterprise deployment options.",
    costPerUser: "$34/mo",
    axiomCost: "$29/mo",
    features: [
      { feature: "Calendar AI scheduling", axiom: true, competitor: true },
      { feature: "Task auto-scheduling", axiom: true, competitor: true },
      { feature: "Project management", axiom: true, competitor: true },
      { feature: "Focus time", axiom: true, competitor: "Partial" },
      { feature: "Email triage", axiom: true, competitor: false },
      { feature: "AI email drafts", axiom: true, competitor: false },
      { feature: "Meeting transcription", axiom: true, competitor: false },
      { feature: "Field recording", axiom: true, competitor: false },
      { feature: "Policy engine", axiom: true, competitor: false },
      { feature: "Cross-context memory", axiom: true, competitor: false },
      { feature: "CRM integration", axiom: true, competitor: "Partial" },
      { feature: "Air-gap deployment", axiom: true, competitor: false },
      { feature: "BYO LLM", axiom: true, competitor: false },
    ],
    axiomAdds: [
      "Full email intelligence -- triage, drafts, and summarisation",
      "Meeting and field-recording transcription with AI summaries",
      "Policy engine for enterprise compliance guardrails",
      "Cross-context memory linking emails, calendar, and tasks",
      "Air-gap and self-hosted deployment options",
      "BYO LLM support -- use your own models in your own cloud",
    ],
    migrationNote:
      "Projects and tasks import from Motion in minutes. AXIOM preserves your scheduling preferences and deadlines during migration.",
  },
  superhuman: {
    name: "Superhuman",
    slug: "superhuman",
    tagline: "Enterprise email, without the ceiling.",
    description:
      "Superhuman is a fast, polished email client with AI features. AXIOM matches its email intelligence and adds calendar management, meeting transcription, task scheduling, and enterprise-grade governance.",
    costPerUser: "$30/mo",
    axiomCost: "$29/mo",
    features: [
      { feature: "Email triage & prioritisation", axiom: true, competitor: true },
      { feature: "AI email drafts", axiom: true, competitor: true },
      { feature: "Email thread summarisation", axiom: true, competitor: true },
      { feature: "CRM integration", axiom: true, competitor: true },
      { feature: "Read receipts & insights", axiom: true, competitor: true },
      { feature: "Smart time blocking", axiom: true, competitor: false },
      { feature: "Task auto-scheduling", axiom: true, competitor: false },
      { feature: "Meeting transcription", axiom: true, competitor: false },
      { feature: "Field recording", axiom: true, competitor: false },
      { feature: "Policy engine", axiom: true, competitor: false },
      { feature: "Cross-context memory", axiom: true, competitor: false },
      { feature: "Air-gap deployment", axiom: true, competitor: false },
      { feature: "BYO LLM", axiom: true, competitor: false },
    ],
    axiomAdds: [
      "Smart calendar time-blocking and focus-time protection",
      "Automatic task scheduling integrated with email context",
      "Meeting and field-recording transcription with AI summaries",
      "Enterprise policy engine for compliance and governance",
      "Cross-context memory tying email conversations to meetings and tasks",
      "Air-gapped deployment and BYO LLM for regulated industries",
    ],
    migrationNote:
      "AXIOM connects directly to Gmail and Outlook -- no email migration needed. Your existing labels, filters, and contacts carry over automatically.",
  },
  tactiq: {
    name: "Tactiq",
    slug: "tactiq",
    tagline: "Transcription is just the beginning.",
    description:
      "Tactiq captures meeting transcripts and generates summaries. AXIOM provides the same transcription quality and adds email, calendar, task management, and enterprise policy governance in one platform.",
    costPerUser: "$16/mo",
    axiomCost: "$29/mo",
    features: [
      { feature: "Meeting transcription", axiom: true, competitor: true },
      { feature: "AI meeting summaries", axiom: true, competitor: true },
      { feature: "Action item extraction", axiom: true, competitor: true },
      { feature: "Field recording", axiom: true, competitor: "Partial" },
      { feature: "Email triage", axiom: true, competitor: false },
      { feature: "AI email drafts", axiom: true, competitor: false },
      { feature: "Smart time blocking", axiom: true, competitor: false },
      { feature: "Task auto-scheduling", axiom: true, competitor: false },
      { feature: "Policy engine", axiom: true, competitor: false },
      { feature: "Cross-context memory", axiom: true, competitor: false },
      { feature: "CRM integration", axiom: true, competitor: "Partial" },
      { feature: "Air-gap deployment", axiom: true, competitor: false },
      { feature: "BYO LLM", axiom: true, competitor: false },
    ],
    axiomAdds: [
      "Full email intelligence -- triage, AI drafts, and thread summaries",
      "Smart calendar time-blocking and focus-time protection",
      "Automatic task scheduling from meeting action items",
      "Enterprise policy engine for compliance guardrails",
      "Cross-context memory connecting meetings to emails and tasks",
      "Air-gap deployment and BYO LLM for data sovereignty",
    ],
    migrationNote:
      "AXIOM connects to Zoom, Google Meet, and Teams on day one. Past Tactiq transcripts can be imported in bulk.",
  },
};

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return Object.keys(toolData).map((tool) => ({ tool }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool: slug } = await params;
  const tool = toolData[slug];
  if (!tool) return {};
  return {
    title: `AXIOM vs ${tool.name}`,
    description: tool.description,
  };
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function StatusIcon({ value }: { value: boolean | "Partial" }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-success/10 p-1">
        <Check className="size-4 text-success" strokeWidth={3} />
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
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-red-500/10 p-1">
      <X className="size-4 text-red-500" strokeWidth={3} />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function ToolComparisonPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool: slug } = await params;
  const tool = toolData[slug];
  if (!tool) notFound();

  const axiomWins = tool.features.filter(
    (f) => f.axiom === true && f.competitor !== true
  ).length;

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
            AXIOM vs {tool.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            {tool.description}
          </p>
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="rounded-lg bg-white/5 px-5 py-3 text-center">
              <p className="text-2xl font-bold text-accent-blue">{axiomWins}</p>
              <p className="text-xs text-gray-500">features AXIOM adds</p>
            </div>
            <div className="rounded-lg bg-white/5 px-5 py-3 text-center">
              <p className="text-2xl font-bold text-success">{tool.features.length}</p>
              <p className="text-xs text-gray-500">total capabilities compared</p>
            </div>
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
                    {tool.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tool.features.map((row, idx) => (
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

      {/* ---- What AXIOM Adds -------------------------------------- */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20">
              Beyond {tool.name}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              What AXIOM adds
            </h2>
            <p className="mt-4 text-muted-text">
              Capabilities you gain by switching to AXIOM.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {tool.axiomAdds.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <span className="mt-0.5 inline-flex shrink-0 items-center justify-center rounded-full bg-success/10 p-1">
                  <Check className="size-4 text-success" strokeWidth={3} />
                </span>
                <p className="text-sm leading-relaxed text-body-text">{item}</p>
              </div>
            ))}
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
            {/* Competitor card */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-text">
                {tool.name}
              </p>
              <p className="mt-3 text-4xl font-extrabold text-body-text">
                {tool.costPerUser}
              </p>
              <p className="mt-1 text-sm text-muted-text">per user / month</p>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-text">
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  Single-purpose tool
                </li>
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  Requires additional subscriptions
                </li>
                <li className="flex items-center gap-2">
                  <X className="size-4 text-red-400" />
                  No enterprise governance
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
                {tool.axiomCost}
              </p>
              <p className="mt-1 text-sm text-muted-text">per user / month</p>
              <ul className="mt-6 space-y-2.5 text-sm text-body-text">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  Replaces 5+ tools in one platform
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  Enterprise policy &amp; governance built in
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-success" />
                  Air-gap &amp; BYO LLM deployment
                </li>
              </ul>
            </div>
          </div>

          {/* 500-user calculation */}
          <div className="mt-8 rounded-xl border border-success/20 bg-success/5 p-6 text-center">
            <p className="text-sm text-muted-text">
              For a 500-person org, switching from {tool.name} alone saves
            </p>
            <p className="mt-1 text-3xl font-extrabold text-success">
              {(() => {
                const competitorMonthly = parseInt(
                  tool.costPerUser.replace(/\D/g, ""),
                  10
                );
                const axiomMonthly = parseInt(
                  tool.axiomCost.replace(/\D/g, ""),
                  10
                );
                const diff = (competitorMonthly - axiomMonthly) * 500 * 12;
                if (diff > 0)
                  return `$${diff.toLocaleString()}/yr`;
                return "comparable cost -- with 5x the features";
              })()}
            </p>
            <p className="mt-1 text-xs text-muted-text">
              And that is before you cancel the other four tools AXIOM also replaces.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Migration CTA ---------------------------------------- */}
      <section className="bg-navy py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Switch from {tool.name} in&nbsp;minutes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            {tool.migrationNote}
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
              <Link href="/compare">View All Comparisons</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
