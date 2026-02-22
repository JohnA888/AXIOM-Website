import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Changelog",
  description: "See what's new in AXIOM. Product updates, improvements, and bug fixes.",
};

const releases = [
  {
    version: "1.0.0",
    date: "February 2026",
    title: "Initial Release",
    type: "major" as const,
    changes: [
      "Full email intelligence with AI triage and smart drafts",
      "Calendar optimization with focus time protection",
      "Meeting transcription and action item extraction",
      "Field recording ingestion from Bee, Plaud, and other devices",
      "Policy Engine with approval workflows and spend limits",
      "Cross-context memory system",
      "37 built-in skills",
      "CRM integration (Salesforce, HubSpot, Pipedrive)",
      "Project management integration (Jira, Linear, Asana)",
      "OpenRouter integration for bring-your-own LLM",
    ],
  },
];

const typeColors = {
  major: "bg-accent-blue text-white",
  minor: "bg-success text-white",
  patch: "bg-muted-text text-white",
};

export default function ChangelogPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold text-navy mb-4">Changelog</h1>
        <p className="text-lg text-muted-text mb-12">
          Track every update to the AXIOM platform. We ship improvements
          continuously and document everything here.
        </p>

        <div className="space-y-12">
          {releases.map((release) => (
            <article key={release.version} className="relative pl-8 border-l-2 border-accent-blue">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-accent-blue" />
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h2 className="text-2xl font-bold text-navy">
                  v{release.version}
                </h2>
                <Badge className={typeColors[release.type]}>
                  {release.type}
                </Badge>
                <span className="text-sm text-muted-text">{release.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-body-text mb-4">
                {release.title}
              </h3>
              <ul className="space-y-2">
                {release.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-text">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-blue shrink-0" />
                    {change}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
