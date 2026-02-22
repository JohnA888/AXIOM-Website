import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Database,
  Eye,
  FileText,
  Server,
  AlertTriangle,
  Search,
  Users,
  ArrowRight,
  ArrowDown,
  Download,
  CheckCircle2,
  KeyRound,
  Network,
  Fingerprint,
  ScrollText,
  Clock,
  Globe,
  ShieldCheck,
  Ban,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description:
    "Learn how AXIOM protects your data with AES-256 encryption, TLS 1.3, row-level security, SOC-2 Type II compliance, and air-gapped deployment options. Security at every layer.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const dataFlowSteps = [
  {
    label: "User Action",
    description: "Request enters AXIOM through authenticated session",
    icon: Users,
  },
  {
    label: "Policy Engine",
    description: "Rules evaluated: permissions, classification, spend limits",
    icon: Shield,
  },
  {
    label: "Skill Execution",
    description: "Approved action routed to integration with scoped credentials",
    icon: Network,
  },
  {
    label: "LLM Processing",
    description: "Prompt sent to configured provider with data-minimization filters",
    icon: Server,
  },
  {
    label: "Audit Log",
    description: "Full request/response logged immutably with actor identity",
    icon: ScrollText,
  },
];

const encryptionDetails = [
  {
    icon: Lock,
    title: "AES-256 at Rest",
    description:
      "All data stored by AXIOM is encrypted using AES-256, the same standard used by governments for classified information. Encryption keys are rotated automatically.",
  },
  {
    icon: KeyRound,
    title: "TLS 1.3 in Transit",
    description:
      "Every connection between clients, AXIOM services, and third-party integrations is protected by TLS 1.3 with perfect forward secrecy. Older protocols are rejected.",
  },
  {
    icon: Fingerprint,
    title: "Customer-Managed Keys",
    description:
      "Enterprise customers on Hybrid and Air-Gapped plans can bring their own encryption keys. AXIOM never has access to your key material.",
  },
];

const accessControlFeatures = [
  {
    title: "Row-Level Security (RLS)",
    description:
      "Every database query is scoped to the authenticated tenant. Users within the same organization see only the data their role permits. Cross-tenant data access is architecturally impossible.",
  },
  {
    title: "Tenant Isolation",
    description:
      "Each organization operates in a logically isolated environment with dedicated database schemas, encryption keys, and credential vaults. Shared-nothing architecture at the data layer.",
  },
  {
    title: "Role-Based Access Control",
    description:
      "Admins, managers, and members each have distinct permission sets. Custom roles can be defined to match your organization's structure. All role changes are audited.",
  },
  {
    title: "SSO & SCIM",
    description:
      "SAML 2.0 and OIDC single sign-on. SCIM provisioning for automatic user lifecycle management synced with your identity provider. Enforce MFA at the IdP layer.",
  },
];

const llmPrivacyPoints = [
  "AXIOM never uses your data to train or fine-tune models.",
  "Prompts are constructed with data-minimization filters that strip unnecessary PII before sending to LLM providers.",
  "Air-Gapped deployments use local Ollama inference with zero external API calls.",
  "LLM provider agreements prohibit data retention beyond the request lifecycle.",
  "Prompt and response content is logged only within your tenant boundary and never shared across organizations.",
  "You choose your LLM provider: OpenRouter, Anthropic, Groq, Together, or Ollama.",
];

const complianceFrameworks = [
  {
    icon: ShieldCheck,
    title: "SOC-2 Type II",
    description:
      "Annual audit covering security, availability, and confidentiality trust service criteria. Report available under NDA.",
    status: "Certified",
  },
  {
    icon: Globe,
    title: "GDPR",
    description:
      "Full compliance with EU General Data Protection Regulation. Data Processing Agreements available for all customers.",
    status: "Compliant",
  },
  {
    icon: Shield,
    title: "CCPA",
    description:
      "California Consumer Privacy Act compliance for handling personal information of California residents.",
    status: "Compliant",
  },
  {
    icon: FileText,
    title: "HIPAA",
    description:
      "Business Associate Agreements available for healthcare organizations. PHI safeguards enforced at every layer.",
    status: "Available",
  },
];

const auditLogCapabilities = [
  "Every user action recorded with timestamp, actor, IP, and session context",
  "Policy engine decisions logged with full rule-evaluation trace",
  "Integration API calls captured with request/response metadata",
  "Immutable write-once storage prevents tampering or deletion",
  "Real-time streaming to your SIEM via webhook or Syslog",
  "90-day default retention; configurable up to 7 years for compliance",
];

const incidentResponsePhases = [
  {
    phase: "Detection",
    time: "< 15 min",
    description:
      "Automated monitoring and anomaly detection across all services. On-call engineering team alerted immediately.",
  },
  {
    phase: "Triage",
    time: "< 1 hr",
    description:
      "Severity classification, blast radius assessment, and initial containment. Affected customers notified within 1 hour for critical incidents.",
  },
  {
    phase: "Remediation",
    time: "< 4 hrs",
    description:
      "Root cause identified, patch deployed, and all affected systems verified. Post-incident review initiated within 24 hours.",
  },
  {
    phase: "Communication",
    time: "Ongoing",
    description:
      "Status page updated in real-time. Detailed post-mortem published within 5 business days with corrective actions.",
  },
];

const subprocessors = [
  {
    name: "OpenRouter",
    purpose: "LLM inference routing and model access",
    dataHandled: "Prompt content (no PII after filtering)",
    location: "United States",
  },
  {
    name: "Deepgram",
    purpose: "Speech-to-text transcription for meeting recordings",
    dataHandled: "Audio data (processed, not stored)",
    location: "United States",
  },
  {
    name: "Twilio",
    purpose: "Telephony and SMS integration",
    dataHandled: "Phone numbers, call metadata",
    location: "United States",
  },
];

const downloadableResources = [
  {
    title: "Security Whitepaper",
    description:
      "Comprehensive overview of AXIOM's security architecture, controls, and compliance posture.",
    format: "PDF",
    icon: FileText,
    href: "/downloads/axiom-security-whitepaper.pdf",
  },
  {
    title: "Data Processing Agreement",
    description:
      "Standard DPA template covering GDPR and international data transfer requirements.",
    format: "PDF",
    icon: ScrollText,
    href: "/downloads/axiom-dpa-template.pdf",
  },
  {
    title: "SOC-2 Type II Report",
    description:
      "Full audit report available under mutual NDA. Contact sales to request access.",
    format: "Under NDA",
    icon: ShieldCheck,
    href: "#demo-request",
    restricted: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function SecurityPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative bg-dark-bg bg-grid-pattern pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-accent-blue/8 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-accent-blue uppercase mb-8">
            Security & Compliance
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Security at every layer.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            From encryption and access control to audit logging and incident
            response, AXIOM is engineered so your data stays yours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-8 text-base h-12"
            >
              <Link href="#resources">
                Download Security Whitepaper{" "}
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 text-base h-12"
            >
              <Link href="/enterprise#demo-form">
                Talk to Sales <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Data Handling ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Data Handling
            </h2>
            <p className="mt-4 text-lg text-muted-text max-w-2xl mx-auto">
              Every request flows through a deterministic pipeline. Here is
              exactly what happens to your data at each stage.
            </p>
          </div>

          {/* Data Flow Diagram */}
          <div className="mx-auto max-w-2xl space-y-0">
            {dataFlowSteps.map((step, idx) => (
              <div key={step.label}>
                <div className="flex items-start gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                      <step.icon className="h-5 w-5" />
                    </div>
                    {idx < dataFlowSteps.length - 1 && (
                      <div className="w-px h-10 bg-gray-200 mt-2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">
                        Step {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy mt-1">
                      {step.label}
                    </h3>
                    <p className="text-sm text-muted-text mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
                {idx < dataFlowSteps.length - 1 && (
                  <div className="flex justify-start ml-[22px]">
                    <ArrowDown className="h-4 w-4 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Encryption ─────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Encryption
            </h2>
            <p className="mt-4 text-lg text-muted-text max-w-2xl mx-auto">
              Data is encrypted at rest and in transit with no exceptions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {encryptionDetails.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-text leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Access Control ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Access Control
            </h2>
            <p className="mt-4 text-lg text-muted-text max-w-2xl mx-auto">
              Multi-layered access controls ensure users see only what they are
              authorized to see and do only what they are permitted to do.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {accessControlFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <h3 className="text-lg font-bold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-muted-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LLM Data Privacy ───────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                LLM Data Privacy
              </h2>
              <p className="mt-4 text-lg text-muted-text">
                Your prompts and data are never used for model training. Here is
                our commitment.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10">
              <ul className="space-y-5">
                {llmPrivacyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-body-text leading-relaxed"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Compliance Frameworks ──────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Compliance Frameworks
            </h2>
            <p className="mt-4 text-lg text-muted-text max-w-2xl mx-auto">
              AXIOM maintains compliance with the frameworks your auditors
              require.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {complianceFrameworks.map((framework) => (
              <div
                key={framework.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                  <framework.icon className="h-6 w-6" />
                </div>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3 ${
                    framework.status === "Certified"
                      ? "bg-success/10 text-success"
                      : framework.status === "Compliant"
                        ? "bg-accent-blue/10 text-accent-blue"
                        : "bg-warning/10 text-warning"
                  }`}
                >
                  {framework.status}
                </span>
                <h3 className="text-lg font-bold text-navy">
                  {framework.title}
                </h3>
                <p className="mt-3 text-sm text-muted-text leading-relaxed">
                  {framework.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audit Logging ──────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                Audit Logging
              </h2>
              <p className="mt-4 text-lg text-muted-text">
                Complete, immutable, and exportable. Every action leaves a
                trail.
              </p>
              <ul className="mt-8 space-y-4">
                {auditLogCapabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-3 text-sm text-body-text"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual representation of a log entry */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 font-mono text-xs text-muted-text overflow-x-auto">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-navy font-semibold text-sm font-sans mb-4">
                  <ScrollText className="h-4 w-4" />
                  Sample Audit Log Entry
                </div>
                <div>
                  <span className="text-accent-blue">timestamp</span>:{" "}
                  <span className="text-body-text">
                    &quot;2025-01-15T14:32:07.891Z&quot;
                  </span>
                </div>
                <div>
                  <span className="text-accent-blue">actor</span>:{" "}
                  <span className="text-body-text">
                    &quot;user:jane@acme.com&quot;
                  </span>
                </div>
                <div>
                  <span className="text-accent-blue">action</span>:{" "}
                  <span className="text-body-text">
                    &quot;email.send&quot;
                  </span>
                </div>
                <div>
                  <span className="text-accent-blue">policy_result</span>:{" "}
                  <span className="text-success">
                    &quot;approved&quot;
                  </span>
                </div>
                <div>
                  <span className="text-accent-blue">rules_evaluated</span>:{" "}
                  <span className="text-body-text">3</span>
                </div>
                <div>
                  <span className="text-accent-blue">data_classification</span>:{" "}
                  <span className="text-body-text">
                    &quot;internal&quot;
                  </span>
                </div>
                <div>
                  <span className="text-accent-blue">tokens_used</span>:{" "}
                  <span className="text-body-text">847</span>
                </div>
                <div>
                  <span className="text-accent-blue">session_id</span>:{" "}
                  <span className="text-body-text">
                    &quot;sess_a7f3...&quot;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Incident Response ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Incident Response
            </h2>
            <p className="mt-4 text-lg text-muted-text max-w-2xl mx-auto">
              Defined processes. Clear timelines. No surprises.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {incidentResponsePhases.map((phase, idx) => (
              <div
                key={phase.phase}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white text-sm font-bold">
                    {idx + 1}
                  </div>
                  <Clock className="h-4 w-4 text-muted-text" />
                  <span className="text-sm font-semibold text-accent-blue">
                    {phase.time}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy">{phase.phase}</h3>
                <p className="mt-3 text-sm text-muted-text leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Penetration Testing ────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
              <Search className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Penetration Testing
            </h2>
            <p className="mt-4 text-lg text-muted-text">
              AXIOM undergoes annual third-party penetration testing conducted
              by an independent, CREST-accredited security firm. The scope
              covers external infrastructure, application-layer vulnerabilities,
              API security, and authentication flows. Critical and high-severity
              findings are remediated within 48 hours. A summary letter is
              available under NDA upon request.
            </p>
            <div className="mt-8">
              <Button variant="outline" asChild className="rounded-full">
                <Link href="/enterprise#demo-form">
                  Request Pen Test Summary{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Subprocessors ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Subprocessors
            </h2>
            <p className="mt-4 text-lg text-muted-text max-w-2xl mx-auto">
              Transparency about the third-party services AXIOM relies on to
              deliver its platform.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* Table header */}
            <div className="hidden sm:grid sm:grid-cols-4 gap-4 px-6 py-3 text-xs font-bold text-muted-text uppercase tracking-wider border-b border-gray-200">
              <div>Provider</div>
              <div>Purpose</div>
              <div>Data Handled</div>
              <div>Location</div>
            </div>

            {subprocessors.map((sp) => (
              <div
                key={sp.name}
                className="grid sm:grid-cols-4 gap-4 px-6 py-5 border-b border-gray-100 items-start"
              >
                <div className="font-semibold text-navy text-sm">
                  {sp.name}
                </div>
                <div className="text-sm text-body-text">{sp.purpose}</div>
                <div className="text-sm text-muted-text">{sp.dataHandled}</div>
                <div className="text-sm text-muted-text">{sp.location}</div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-text">
            Air-Gapped deployments eliminate all external subprocessors. Contact
            us for the full subprocessor list and change notification policy.
          </p>
        </div>
      </section>

      {/* ── Downloadable Resources ─────────────────────────────── */}
      <section
        id="resources"
        className="relative py-24 bg-dark-bg bg-grid-pattern overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Security Resources
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Download the documents your security team needs for vendor review.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {downloadableResources.map((resource) => (
              <div
                key={resource.title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/20 text-accent-blue">
                  <resource.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {resource.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed flex-1">
                  {resource.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {resource.format}
                  </span>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className={`rounded-full border-white/20 text-white hover:bg-white/10 ${
                      resource.restricted ? "opacity-80" : ""
                    }`}
                  >
                    <Link href={resource.href}>
                      {resource.restricted ? (
                        <>
                          Request Access{" "}
                          <Lock className="ml-1.5 h-3.5 w-3.5" />
                        </>
                      ) : (
                        <>
                          Download{" "}
                          <Download className="ml-1.5 h-3.5 w-3.5" />
                        </>
                      )}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">
              Have a question for our security team?
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-8 text-base h-12"
            >
              <Link href="/enterprise#demo-form">
                Contact Security Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
