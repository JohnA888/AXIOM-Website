import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "AXIOM Cookie Policy — how we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 pb-20">
      <article className="prose prose-lg mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold text-navy">Cookie Policy</h1>
        <p className="text-sm text-muted-text">
          Effective Date: February 1, 2026 | Last Updated: February 1, 2026
        </p>

        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help us provide and improve our services.
        </p>

        <h2>2. Cookies We Use</h2>
        <h3>Essential Cookies</h3>
        <p>
          Required for the website to function. These include authentication
          cookies and security tokens.
        </p>

        <h3>Analytics Cookies</h3>
        <p>
          Help us understand how visitors use our website. We use privacy-focused
          analytics that do not track individuals across sites.
        </p>

        <h3>Preference Cookies</h3>
        <p>
          Remember your settings such as language preferences and display options.
        </p>

        <h2>3. Managing Cookies</h2>
        <p>
          You can control cookies through your browser settings. Disabling
          essential cookies may affect website functionality.
        </p>

        <h2>4. Contact</h2>
        <p>
          For questions about our cookie practices, contact{" "}
          <a href="mailto:privacy@axiom-ops.com">privacy@axiom-ops.com</a>.
        </p>
      </article>
    </div>
  );
}
