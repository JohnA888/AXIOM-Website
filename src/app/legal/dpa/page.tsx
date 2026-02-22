import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description: "AXIOM Data Processing Agreement for GDPR and regulatory compliance.",
};

export default function DPAPage() {
  return (
    <div className="pt-24 pb-20">
      <article className="prose prose-lg mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold text-navy">
          Data Processing Agreement
        </h1>
        <p className="text-sm text-muted-text">
          Effective Date: February 1, 2026 | Last Updated: February 1, 2026
        </p>

        <p>
          This Data Processing Agreement (&quot;DPA&quot;) forms part of the
          agreement between TSC Texas (&quot;Processor&quot;) and the customer
          (&quot;Controller&quot;) for the AXIOM platform.
        </p>

        <h2>1. Scope and Purpose</h2>
        <p>
          This DPA applies to all personal data processed by AXIOM on behalf of
          the Controller in connection with the Service.
        </p>

        <h2>2. Processing Details</h2>
        <p>
          AXIOM processes data for: email intelligence, calendar optimization,
          meeting transcription, recording ingestion, and AI-powered workflow
          automation as configured by the Controller.
        </p>

        <h2>3. Security Measures</h2>
        <p>
          We implement technical and organizational measures including encryption
          (AES-256 at rest, TLS 1.3 in transit), access controls, audit logging,
          and regular security assessments.
        </p>

        <h2>4. Sub-processors</h2>
        <p>
          Current sub-processors include: OpenRouter (LLM routing), Deepgram
          (transcription), Twilio (telephony), and our cloud hosting provider.
          We maintain a current list at /security.
        </p>

        <h2>5. Data Subject Rights</h2>
        <p>
          We assist the Controller in responding to data subject requests for
          access, correction, deletion, and portability of personal data.
        </p>

        <div className="not-prose mt-8 rounded-xl bg-accent-light p-6">
          <p className="text-body-text mb-4">
            For a signed DPA or custom terms, contact our legal team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent-blue px-6 py-3 text-sm font-medium text-white hover:bg-accent-blue/90 transition-colors"
          >
            Contact Legal <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}
