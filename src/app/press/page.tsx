import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  MapPin,
  Package,
  Signal,
  Mail,
  Download,
  Palette,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Press",
  description:
    "AXIOM press kit, company overview, key facts, and media contact information. For press inquiries, reach out to press@AxiomAssistant.ai.",
};

const keyFacts = [
  {
    icon: CalendarDays,
    label: "Founded",
    value: "2025",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Austin, TX",
  },
  {
    icon: Package,
    label: "Product",
    value: "AXIOM",
  },
  {
    icon: Signal,
    label: "Status",
    value: "In Development",
  },
];

export default function PressPage() {
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
              Media
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Press &{" "}
              <span className="text-gradient">Media</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Company information, key facts, and resources for journalists and
              media professionals covering AI operations and enterprise
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-blue uppercase tracking-wide">
              Company Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-6">
              About AXIOM
            </h2>
            <div className="space-y-4 text-muted-text leading-relaxed">
              <p>
                AXIOM is the governed AI operations platform built for
                enterprises. It unifies email intelligence, smart scheduling,
                meeting transcription, task management, voice telephony, and
                field recording into a single platform — governed by a
                centralized Policy Engine and powered by persistent shared
                memory.
              </p>
              <p>
                Built by TSC Texas, AXIOM replaces nine or more fragmented AI
                point solutions with one cohesive system. Organizations running
                AXIOM save an estimated $837K to $1.53M annually for a
                500-person company, while gaining centralized governance, full
                audit trails, and complete data sovereignty.
              </p>
              <p>
                AXIOM supports cloud, on-premise, and air-gapped deployment
                models. The platform integrates with OpenRouter for flexible LLM
                access and ships with 50 built-in skills that cover the full
                spectrum of operational workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block rounded-full bg-warning/10 px-4 py-1.5 text-xs font-semibold text-warning uppercase tracking-wide">
              At a Glance
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Key Facts
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {keyFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-accent-light p-3 text-accent-blue">
                  <fact.icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-text mb-1">
                  {fact.label}
                </p>
                <p className="text-xl font-extrabold text-navy">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-3xl font-extrabold text-navy">50</p>
              <p className="text-sm text-muted-text mt-1">Built-in Skills</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-3xl font-extrabold text-navy">9+</p>
              <p className="text-sm text-muted-text mt-1">Tools Replaced</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-3xl font-extrabold text-navy">$837K+</p>
              <p className="text-sm text-muted-text mt-1">Annual Savings (500 users)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Contact & Brand Guidelines */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Press Contact */}
            <div className="rounded-2xl border border-gray-200 bg-surface p-8 md:p-10">
              <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-accent-blue/10 p-3 text-accent-blue">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Press Contact
              </h3>
              <p className="text-sm text-muted-text leading-relaxed mb-6">
                For media inquiries, interview requests, or press-related
                questions, contact our communications team.
              </p>
              <a
                href="mailto:press@AxiomAssistant.ai"
                className="inline-flex items-center text-accent-blue font-semibold hover:underline"
              >
                press@AxiomAssistant.ai
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </div>

            {/* Brand Guidelines */}
            <div className="rounded-2xl border border-gray-200 bg-surface p-8 md:p-10">
              <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-accent-blue/10 p-3 text-accent-blue">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Brand Guidelines
              </h3>
              <p className="text-sm text-muted-text leading-relaxed mb-6">
                For logo files, brand colors, and usage guidelines, contact our
                press team. We will provide a complete media kit with approved
                assets for your publication.
              </p>
              <a
                href="mailto:press@AxiomAssistant.ai"
                className="inline-flex items-center text-accent-blue font-semibold hover:underline"
              >
                Request Brand Kit
                <Download className="ml-1.5 h-4 w-4" />
              </a>
            </div>
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
            Want to learn more about AXIOM?
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Schedule a briefing with our team or explore the product in depth.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-navy hover:bg-gray-100 transition-colors"
            >
              Schedule a Briefing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 hover:bg-white/10 transition-colors"
            >
              About AXIOM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
