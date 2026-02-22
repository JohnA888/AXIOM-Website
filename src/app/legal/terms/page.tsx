import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "AXIOM Terms of Service governing use of the platform.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      <article className="prose prose-lg mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold text-navy">Terms of Service</h1>
        <p className="text-sm text-muted-text">
          Effective Date: February 1, 2026 | Last Updated: February 1, 2026
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the AXIOM platform (&quot;Service&quot;),
          provided by TSC Texas (&quot;Company,&quot; &quot;we,&quot;
          &quot;us&quot;), you agree to be bound by these Terms of Service. If
          you do not agree, do not use the Service.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          AXIOM is an AI-powered operations management platform that provides
          email intelligence, calendar optimization, meeting transcription,
          recording ingestion, policy governance, and workflow automation. The
          Service integrates with third-party tools and AI model providers.
        </p>

        <h2>3. Account Registration</h2>
        <p>
          You must provide accurate, complete information when creating an
          account. You are responsible for maintaining the security of your
          credentials and for all activity under your account.
        </p>

        <h2>4. Acceptable Use</h2>
        <p>
          You agree not to use the Service for any unlawful purpose, to violate
          any applicable laws, to infringe on intellectual property rights, or to
          transmit harmful or malicious content.
        </p>

        <h2>5. Pricing and Billing</h2>
        <p>
          Free tier accounts are provided at no cost for teams of up to 5 users.
          Pro and Enterprise pricing is as listed on our pricing page. We reserve
          the right to change pricing with 30 days advance notice.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>
          AXIOM integrates with third-party services including OpenRouter for LLM
          access. Your use of these services is subject to their respective terms
          and privacy policies. We are not responsible for third-party service
          availability or performance.
        </p>

        <h2>7. Data and Privacy</h2>
        <p>
          Your use of the Service is also governed by our Privacy Policy. We
          process data as described therein and in any applicable Data Processing
          Agreement.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, TSC Texas shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising from your use of the Service.
        </p>

        <h2>9. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time for
          violation of these Terms. You may cancel your account at any time.
        </p>

        <h2>10. Contact</h2>
        <p>
          For questions about these Terms, contact us at{" "}
          <a href="mailto:legal@axiom-ops.com">legal@axiom-ops.com</a>.
        </p>
      </article>
    </div>
  );
}
