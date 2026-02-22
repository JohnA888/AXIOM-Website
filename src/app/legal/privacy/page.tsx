import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AXIOM Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <article className="prose prose-lg mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold text-navy">Privacy Policy</h1>
        <p className="text-sm text-muted-text">
          Effective Date: February 1, 2026 | Last Updated: February 1, 2026
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly (account details, form
          submissions), information from connected integrations (email metadata,
          calendar events, meeting recordings), and usage data (feature usage,
          performance metrics).
        </p>

        <h2>2. How We Use Information</h2>
        <p>
          We use your information to provide the AXIOM service, process AI
          operations on your behalf, improve our platform, communicate with you,
          and comply with legal obligations.
        </p>

        <h2>3. Data Sharing</h2>
        <p>
          We share data only with: LLM providers (via OpenRouter or your chosen
          provider) for AI processing, infrastructure providers for hosting, and
          as required by law. We never sell your personal data.
        </p>

        <h2>4. LLM Data Processing</h2>
        <p>
          When AXIOM processes data through AI models via OpenRouter, your data
          is sent to the model provider for inference only. Model providers do
          not use your data for training. Air-gap deployments process all data
          locally.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We employ AES-256 encryption at rest, TLS 1.3 in transit, row-level
          security for tenant isolation, and secrets management via Vault/KMS.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain your data for as long as your account is active. Upon account
          deletion, data is purged within 30 days. Enterprise customers may
          configure custom retention policies.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          You have the right to access, correct, delete, or export your data.
          Contact us at{" "}
          <a href="mailto:privacy@AxiomAssistant.ai">privacy@AxiomAssistant.ai</a> to
          exercise these rights.
        </p>

        <h2>8. GDPR and CCPA</h2>
        <p>
          We comply with GDPR for EU residents and CCPA for California
          residents. See our Data Processing Agreement for additional details.
        </p>

        <h2>9. Contact</h2>
        <p>
          For privacy inquiries, contact{" "}
          <a href="mailto:privacy@AxiomAssistant.ai">privacy@AxiomAssistant.ai</a>.
        </p>
      </article>
    </div>
  );
}
