import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Server,
  Shield,
  Lock,
  Users,
  Workflow,
  Database,
  Check,
  ArrowRight,
  Mail,
  Calendar,
  BarChart3,
  Layout,
  Share2,
  Phone,
  Mic,
  Brain,
  FileText,
  Eye,
  DollarSign,
  Tag,
  ClipboardList,
  ScrollText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise",
  description:
    "AXIOM for enterprise: air-gapped deployments, SOC-2 Type II compliance, policy-governed AI operations, and dedicated customer success. Built for IT directors, CISOs, and the C-suite.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const deploymentOptions = [
  {
    icon: Cloud,
    title: "Cloud",
    subtitle: "Fully Managed",
    description:
      "Zero infrastructure to maintain. AXIOM hosts, patches, and scales your instance on SOC-2 certified infrastructure with automatic updates and 99.9% uptime SLA.",
    features: [
      "Automatic updates & patches",
      "99.9% uptime SLA",
      "Multi-region availability",
      "Managed backups & DR",
    ],
  },
  {
    icon: Server,
    title: "Hybrid",
    subtitle: "Your Infrastructure",
    description:
      "Run AXIOM on your own cloud or data center. Retain full control over your compute and storage while AXIOM manages orchestration and model routing.",
    features: [
      "Deploy in your VPC",
      "Customer-managed keys",
      "Private model endpoints",
      "SSO / SCIM provisioning",
    ],
  },
  {
    icon: Shield,
    title: "Air-Gapped",
    subtitle: "On-Premise with Ollama",
    description:
      "Complete network isolation. AXIOM runs entirely within your perimeter using Ollama for local LLM inference. Zero data egress, zero external API calls.",
    features: [
      "Zero data egress",
      "Local LLM via Ollama",
      "No internet dependency",
      "FIPS 140-2 compatible",
    ],
    highlighted: true,
  },
];

const securityItems = [
  { icon: Shield, label: "SOC-2 Type II Certified" },
  { icon: Lock, label: "AES-256 Encryption at Rest" },
  { icon: Lock, label: "TLS 1.3 In Transit" },
  { icon: Database, label: "Row-Level Security" },
  { icon: Users, label: "Tenant Isolation" },
  { icon: FileText, label: "GDPR & CCPA Compliant" },
];

const policyFeatures = [
  {
    icon: Workflow,
    title: "Approval Workflows",
    description:
      "Define multi-step approval chains for sensitive actions. Route requests to the right stakeholders automatically based on action type and risk level.",
  },
  {
    icon: DollarSign,
    title: "Spend Limits",
    description:
      "Set per-user, per-team, and organization-wide budgets for LLM token usage. Receive alerts at configurable thresholds and hard-stop at limits.",
  },
  {
    icon: Tag,
    title: "Data Classification",
    description:
      "Tag data as Public, Internal, Confidential, or Restricted. AXIOM enforces classification rules automatically across every skill and integration.",
  },
  {
    icon: ClipboardList,
    title: "Skill Permissions",
    description:
      "Grant or revoke access to individual AXIOM skills per user, role, or department. Prevent unauthorized use of email send, calendar modify, or CRM write actions.",
  },
  {
    icon: ScrollText,
    title: "Immutable Audit Logs",
    description:
      "Every action, approval, and data access is logged with timestamps, actor identity, and context. Export logs to your SIEM or compliance tooling.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description:
      "Dashboard visibility into active sessions, pending approvals, policy violations, and token consumption. Configurable alerts via email or webhook.",
  },
];

const integrationCategories = [
  {
    category: "Email",
    icon: Mail,
    tools: ["Gmail", "Outlook", "Exchange"],
  },
  {
    category: "Calendar",
    icon: Calendar,
    tools: ["Google Calendar", "Outlook Calendar", "CalDAV"],
  },
  {
    category: "CRM",
    icon: BarChart3,
    tools: ["Salesforce", "HubSpot", "Pipedrive"],
  },
  {
    category: "Project Management",
    icon: Layout,
    tools: ["Jira", "Linear", "Asana"],
  },
  {
    category: "Export & Collaboration",
    icon: Share2,
    tools: ["Notion", "Slack", "Google Docs"],
  },
  {
    category: "Telephony",
    icon: Phone,
    tools: ["Twilio"],
  },
  {
    category: "Recorders",
    icon: Mic,
    tools: ["Bee", "Plaud"],
  },
  {
    category: "LLM Providers",
    icon: Brain,
    tools: ["OpenRouter", "Ollama", "Groq", "Together", "Anthropic"],
  },
];

const customerSuccessItems = [
  {
    title: "Dedicated Success Manager",
    description:
      "A named point of contact who knows your organization, your goals, and your deployment inside and out.",
  },
  {
    title: "Custom Onboarding",
    description:
      "Tailored implementation plan, data migration support, and integration configuration by our solutions engineering team.",
  },
  {
    title: "Team Training",
    description:
      "Live training sessions for admins, power users, and end users. Recorded sessions and self-serve academy access included.",
  },
  {
    title: "Quarterly Business Reviews",
    description:
      "Scheduled QBRs to review adoption metrics, ROI, feature roadmap alignment, and expansion opportunities.",
  },
];

const companySizes = [
  "1-50",
  "51-200",
  "201-500",
  "501-1,000",
  "1,001-5,000",
  "5,001-10,000",
  "10,000+",
];

const industries = [
  "Technology",
  "Financial Services",
  "Healthcare",
  "Legal",
  "Manufacturing",
  "Government",
  "Education",
  "Retail & E-Commerce",
  "Other",
];

const deploymentPreferences = ["Cloud (Managed)", "Hybrid", "Air-Gapped (On-Premise)"];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function EnterprisePage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative bg-dark-bg bg-grid-pattern pt-32 pb-24 overflow-hidden">
        {/* Gradient orb decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-accent-blue uppercase mb-8">
            Enterprise
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI operations built for{" "}
            <span className="text-gradient">enterprise requirements.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Deploy on your terms. Govern every action. Integrate everything.
            AXIOM gives IT leadership the control they need and teams the
            productivity they want.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-8 text-base h-12"
            >
              <Link href="#demo-form">
                Talk to Sales <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Deployment Options ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Deployment Options
            </h2>
            <p className="mt-4 text-lg text-muted-text max-w-2xl mx-auto">
              Choose the deployment model that matches your security posture and
              operational requirements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {deploymentOptions.map((option) => (
              <div
                key={option.title}
                className={`relative rounded-2xl border p-8 transition-shadow hover:shadow-xl ${
                  option.highlighted
                    ? "border-accent-blue bg-accent-light/30 ring-2 ring-accent-blue/20"
                    : "border-gray-200 bg-white"
                }`}
              >
                {option.highlighted && (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent-blue px-3 py-1 text-xs font-semibold text-white">
                    Most Secure
                  </span>
                )}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy">
                  <option.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy">{option.title}</h3>
                <p className="text-sm font-medium text-accent-blue mt-1">
                  {option.subtitle}
                </p>
                <p className="mt-4 text-sm text-muted-text leading-relaxed">
                  {option.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {option.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-body-text"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security & Compliance ──────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Security & Compliance
            </h2>
            <p className="mt-4 text-lg text-muted-text max-w-2xl mx-auto">
              Enterprise-grade security is not a feature we bolt on. It is how
              AXIOM was architected from day one.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl bg-white p-6 border border-gray-100 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-navy">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" asChild className="rounded-full">
              <Link href="/security">
                Read our full security posture{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Policy Engine Deep Dive ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Policy Engine Deep Dive
            </h2>
            <p className="mt-4 text-lg text-muted-text max-w-2xl mx-auto">
              Fine-grained governance that enforces your rules without slowing
              down your teams. Every action passes through the policy engine
              before execution.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {policyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                  <feature.icon className="h-5 w-5" />
                </div>
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

      {/* ── Integration Matrix ─────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Integration Matrix
            </h2>
            <p className="mt-4 text-lg text-muted-text max-w-2xl mx-auto">
              AXIOM connects to the tools your organization already relies on.
              Every integration inherits your policy engine rules automatically.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {integrationCategories.map((cat) => (
              <div
                key={cat.category}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-navy">
                    {cat.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {cat.tools.map((tool) => (
                    <li
                      key={tool}
                      className="flex items-center gap-2 text-sm text-body-text"
                    >
                      <Check className="h-3.5 w-3.5 text-success" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Customer Success ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Customer Success
            </h2>
            <p className="mt-4 text-lg text-muted-text max-w-2xl mx-auto">
              Enterprise accounts receive white-glove support from onboarding
              through expansion.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {customerSuccessItems.map((item, idx) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-8"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-blue text-white font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo Request Form (CTA) ────────────────────────────── */}
      <section
        id="demo-form"
        className="relative py-24 bg-dark-bg bg-grid-pattern overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Request a Demo
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Tell us about your organization and a solutions engineer will
              reach out within one business day.
            </p>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-10 space-y-6">
            {/* Row 1 */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Company Name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Acme Corp"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
            </div>

            {/* Row 3 */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="size"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Company Size
                </label>
                <select
                  id="size"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent-blue appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-900">
                    Select size
                  </option>
                  {companySizes.map((size) => (
                    <option key={size} value={size} className="text-gray-900">
                      {size} employees
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Industry
                </label>
                <select
                  id="industry"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent-blue appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-900">
                    Select industry
                  </option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind} className="text-gray-900">
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4 */}
            <div>
              <label
                htmlFor="deployment"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Deployment Preference
              </label>
              <select
                id="deployment"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent-blue appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="text-gray-900">
                  Select preference
                </option>
                {deploymentPreferences.map((pref) => (
                  <option key={pref} value={pref} className="text-gray-900">
                    {pref}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 5 */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Anything else we should know?
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your use case, timeline, or any specific requirements..."
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full text-base h-12"
            >
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="text-center text-xs text-gray-500">
              By submitting, you agree to our{" "}
              <Link
                href="/legal/privacy"
                className="underline hover:text-gray-300"
              >
                Privacy Policy
              </Link>
              . We will never share your information.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
