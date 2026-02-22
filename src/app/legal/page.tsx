import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Shield, Database, Cookie, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal",
  description: "AXIOM legal documents, terms of service, privacy policy, and compliance information.",
};

const legalDocs = [
  {
    title: "Terms of Service",
    description: "The terms governing your use of the AXIOM platform.",
    href: "/legal/terms",
    icon: FileText,
    updated: "February 2026",
  },
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information.",
    href: "/legal/privacy",
    icon: Shield,
    updated: "February 2026",
  },
  {
    title: "Data Processing Agreement",
    description: "Our commitments for processing your data in compliance with GDPR and other regulations.",
    href: "/legal/dpa",
    icon: Database,
    updated: "February 2026",
  },
  {
    title: "Cookie Policy",
    description: "How we use cookies and similar technologies on our website.",
    href: "/legal/cookies",
    icon: Cookie,
    updated: "February 2026",
  },
  {
    title: "Acceptable Use Policy",
    description: "Guidelines for appropriate use of the AXIOM platform and services.",
    href: "/legal/acceptable-use",
    icon: AlertCircle,
    updated: "February 2026",
  },
];

export default function LegalPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold text-navy mb-4">Legal</h1>
        <p className="text-lg text-muted-text mb-12">
          Transparency is one of our core values. Here you&apos;ll find all of
          our legal documents and policies.
        </p>

        <div className="space-y-4">
          {legalDocs.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="group flex items-start gap-4 rounded-xl border border-gray-200 p-6 hover:border-accent-blue hover:shadow-md transition-all"
            >
              <doc.icon className="h-6 w-6 text-accent-blue shrink-0 mt-0.5" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-navy group-hover:text-accent-blue transition-colors">
                  {doc.title}
                </h2>
                <p className="text-sm text-muted-text mt-1">
                  {doc.description}
                </p>
                <p className="text-xs text-muted-text mt-2">
                  Last updated: {doc.updated}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
