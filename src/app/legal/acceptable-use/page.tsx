import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "AXIOM Acceptable Use Policy — guidelines for platform usage.",
};

export default function AcceptableUsePage() {
  return (
    <div className="pt-24 pb-20">
      <article className="prose prose-lg mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold text-navy">
          Acceptable Use Policy
        </h1>
        <p className="text-sm text-muted-text">
          Effective Date: February 1, 2026 | Last Updated: February 1, 2026
        </p>

        <h2>1. Purpose</h2>
        <p>
          This policy outlines the acceptable use of the AXIOM platform to
          ensure a safe, secure, and productive environment for all users.
        </p>

        <h2>2. Prohibited Activities</h2>
        <p>You may not use AXIOM to:</p>
        <ul>
          <li>Send spam or unsolicited bulk communications</li>
          <li>Harass, threaten, or abuse others</li>
          <li>Violate any applicable laws or regulations</li>
          <li>Distribute malware or harmful code</li>
          <li>Attempt to gain unauthorized access to systems</li>
          <li>Use the AI capabilities for generating harmful content</li>
          <li>Circumvent usage limits or platform restrictions</li>
          <li>Resell or redistribute the Service without authorization</li>
        </ul>

        <h2>3. Resource Usage</h2>
        <p>
          Users must not abuse platform resources including API rate limits,
          storage quotas, and compute capacity. Excessive or abusive usage may
          result in throttling or suspension.
        </p>

        <h2>4. Enforcement</h2>
        <p>
          Violations may result in warnings, suspension, or termination of your
          account. We reserve the right to remove content that violates this
          policy.
        </p>

        <h2>5. Reporting</h2>
        <p>
          Report violations to{" "}
          <a href="mailto:abuse@axiom-ops.com">abuse@axiom-ops.com</a>.
        </p>
      </article>
    </div>
  );
}
