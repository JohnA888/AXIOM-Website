import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Handshake,
  Check,
  Zap,
  Globe,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TRUST_PARTNERS } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Explore the AXIOM Partner Program. Technology and solution partners that power and extend the AXIOM AI operations platform.",
};

const technologyPartnerBenefits = [
  "Native integration with the AXIOM platform",
  "Co-marketing opportunities and joint case studies",
  "Access to partner API sandbox and documentation",
  "Dedicated partner engineering support",
  "Inclusion in the AXIOM marketplace",
];

const solutionPartnerBenefits = [
  "Revenue sharing on referred customers",
  "Co-branded marketing materials",
  "Partner certification and training program",
  "Priority access to new features and beta programs",
  "Dedicated partner success manager",
];

const integrationPartners = [
  {
    name: "OpenRouter",
    description:
      "Unified LLM access layer. AXIOM uses OpenRouter for model routing, letting organizations choose their preferred AI providers.",
  },
  {
    name: "Anthropic",
    description:
      "Claude models power AXIOM's core intelligence — email drafting, meeting analysis, policy reasoning, and memory synthesis.",
  },
  {
    name: "Deepgram",
    description:
      "Real-time speech-to-text for meeting transcription, voice commands, and field recording with industry-leading accuracy.",
  },
  {
    name: "Twilio",
    description:
      "Voice telephony infrastructure for AXIOM's call management, automated dialers, and phone-based task workflows.",
  },
  {
    name: "Google",
    description:
      "Google Workspace integration for Gmail, Google Calendar, Google Drive, and Google Meet connectivity.",
  },
  {
    name: "Microsoft",
    description:
      "Microsoft 365 integration for Outlook, Teams, OneDrive, and Exchange — enabling seamless enterprise deployment.",
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark-bg bg-grid-pattern pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(74,144,217,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 bg-accent-blue/20 text-accent-blue border-accent-blue/30 hover:bg-accent-blue/20">
              Partners
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              AXIOM{" "}
              <span className="text-gradient">Partner Program</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Build, integrate, and grow with AXIOM. Our partner ecosystem
              powers enterprise AI operations for organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-blue uppercase tracking-wide">
              Partnership Tracks
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Two ways to partner.
            </h2>
            <p className="mt-4 text-lg text-muted-text">
              Whether you build technology or deliver solutions, there is a
              partnership path for you.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Technology Partners */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 hover:shadow-lg transition-shadow">
              <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-accent-light p-3 text-accent-blue">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">
                Technology Partners
              </h3>
              <p className="text-muted-text leading-relaxed mb-6">
                Build native integrations with AXIOM. Connect your platform,
                API, or infrastructure to the AXIOM ecosystem and reach
                enterprise customers who need governed AI operations.
              </p>
              <ul className="space-y-3">
                {technologyPartnerBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm"
                  >
                    <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    <span className="text-body-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution Partners */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 hover:shadow-lg transition-shadow">
              <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-accent-light p-3 text-accent-blue">
                <Handshake className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">
                Solution Partners
              </h3>
              <p className="text-muted-text leading-relaxed mb-6">
                Consultants, resellers, and system integrators who deploy AXIOM
                for enterprise clients. Help organizations transform their
                operations with governed AI.
              </p>
              <ul className="space-y-3">
                {solutionPartnerBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm"
                  >
                    <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    <span className="text-body-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners Grid */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full bg-warning/10 px-4 py-1.5 text-xs font-semibold text-warning uppercase tracking-wide">
              Integrations
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Powered by the best.
            </h2>
            <p className="mt-4 text-lg text-muted-text">
              AXIOM integrates with leading technology providers to deliver
              enterprise-grade AI operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrationPartners.map((partner) => (
              <div
                key={partner.name}
                className="group rounded-2xl border border-gray-200 bg-white p-8 hover:border-accent-blue/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent-blue font-bold text-lg group-hover:bg-accent-blue group-hover:text-white transition-colors">
                    {partner.name[0]}
                  </div>
                  <h3 className="text-lg font-bold text-navy">
                    {partner.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-text leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust bar */}
          <div className="mt-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-text mb-6">
              Trusted Integration Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {TRUST_PARTNERS.map((name) => (
                <div
                  key={name}
                  className="text-sm font-semibold text-gray-400 hover:text-navy transition-colors cursor-default select-none"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with AXIOM */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              Why partner with AXIOM?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Growing Market",
                description:
                  "Enterprise AI operations is a rapidly expanding market. Partners benefit from early positioning in a category-defining platform.",
              },
              {
                icon: Globe,
                title: "Enterprise Reach",
                description:
                  "AXIOM is built for enterprises with 500+ employees. Partners gain access to high-value customers with significant budgets.",
              },
              {
                icon: Shield,
                title: "Trust & Governance",
                description:
                  "AXIOM's Policy Engine and audit trail make it the choice for regulated industries — a partner's dream for compliance-heavy sectors.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-surface p-8 text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-accent-light p-3 text-accent-blue">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1B2A4A 0%, #4A90D9 100%)",
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
            Become a Partner
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Join the AXIOM ecosystem and help enterprises transform their AI
            operations. Let&apos;s build together.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-navy hover:bg-gray-100 transition-colors"
            >
              Apply to Partner Program
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="mailto:hello@AxiomAssistant.ai"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
