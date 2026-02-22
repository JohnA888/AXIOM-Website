"use client";

import { useEffect, useState, useRef, forwardRef } from "react";
import Link from "next/link";
import {
  Mail,
  Calendar,
  Mic,
  Radio,
  Shield,
  Brain,
  Zap,
  Users,
  ClipboardList,
  Share2,
  Phone,
  Store,
  ArrowRight,
  Tag,
  Inbox,
  PenLine,
  Bell,
  Clock,
  Focus,
  Repeat,
  Link2,
  FileText,
  ListChecks,
  Search as SearchIcon,
  MessageSquare,
  Upload,
  Wifi,
  Fingerprint,
  Lock,
  FileCheck,
  AlertTriangle,
  Network,
  Lightbulb,
  GitBranch,
  Workflow,
  Webhook,
  RefreshCw,
  BarChart3,
  Database,
  Kanban,
  Ticket,
  FolderSync,
  FileOutput,
  Send,
  Hash,
  PhoneIncoming,
  PhoneOutgoing,
  MessageCircle,
  Headphones,
  Package,
  Code,
  Share,
  Globe,
  ChevronRight,
  Activity,
  Settings,
  Play,
  Eye,
  ShieldCheck,
  Server,
  CheckCircle2,
  ExternalLink,
  Layers,
  DollarSign,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Capability {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeatureSection {
  id: string;
  label: string;
  icon: React.ElementType;
  headline: string;
  description: string;
  whyItMatters: string;
  mockupLabel: string;
  capabilities: Capability[];
  integrations: string[];
  docsLink?: string;
}

/* ------------------------------------------------------------------ */
/*  Feature data                                                       */
/* ------------------------------------------------------------------ */

const FEATURES: FeatureSection[] = [
  {
    id: "email",
    label: "Email Intelligence",
    icon: Mail,
    headline: "Email Intelligence",
    description:
      "Let AI handle the flood. AXIOM triages your inbox, drafts context-aware replies, and ensures nothing falls through the cracks. Spend less time managing email and more time on work that matters.",
    whyItMatters:
      "For IT and RevOps teams managing hundreds of daily messages, email is the biggest source of context-switching and dropped balls. AXIOM's Heartbeat engine continuously monitors your inbox overnight and between meetings, proactively surfacing urgent items, drafting follow-ups, and escalating messages that match your policy rules -- so your team starts every morning at inbox zero, not inbox chaos.",
    mockupLabel: "Email Intelligence Dashboard",
    capabilities: [
      {
        icon: Tag,
        title: "AI Triage & Labeling",
        description: "Automatically categorize and prioritize incoming messages by urgency, topic, and policy rules.",
      },
      {
        icon: PenLine,
        title: "Smart Drafts",
        description: "Generate context-aware reply suggestions that match your tone, pulling from AXIOM's shared memory.",
      },
      {
        icon: Bell,
        title: "Follow-up Tracking",
        description: "Heartbeat monitors pending replies and triggers escalation alerts before deadlines slip.",
      },
      {
        icon: Inbox,
        title: "Inbox Zero Automation",
        description: "Batch-process low-priority emails overnight and surface only what needs your attention.",
      },
    ],
    integrations: ["Gmail", "Outlook"],
    docsLink: "/docs",
  },
  {
    id: "calendar",
    label: "Calendar & Scheduling",
    icon: Calendar,
    headline: "Calendar & Scheduling",
    description:
      "Reclaim your calendar. AXIOM intelligently blocks focus time, schedules habits, and auto-fits tasks around your meetings so every hour counts. Share scheduling links without the back-and-forth.",
    whyItMatters:
      "Services and consulting teams lose 5-8 hours per week to scheduling overhead and fragmented time blocks. Unlike standalone tools like Reclaim or Calendly, AXIOM's scheduling engine shares context with your email, meetings, and task board -- so it knows when to protect focus time based on upcoming deadlines, not just calendar gaps.",
    mockupLabel: "Smart Calendar View",
    capabilities: [
      {
        icon: Clock,
        title: "Smart Time Blocking",
        description: "AI analyzes your workload and protects deep-work windows automatically.",
      },
      {
        icon: Focus,
        title: "Focus Time Protection",
        description: "Defend uninterrupted blocks from meeting creep with configurable policy rules.",
      },
      {
        icon: Repeat,
        title: "Habit Scheduling",
        description: "Build recurring routines that adapt to your changing calendar.",
      },
      {
        icon: Link2,
        title: "Scheduling Links",
        description: "Share personalized booking pages that respect your availability and policy preferences.",
      },
    ],
    integrations: ["Google Calendar", "Outlook Calendar"],
    docsLink: "/docs",
  },
  {
    id: "meetings",
    label: "Meeting Intelligence",
    icon: Mic,
    headline: "Meeting Intelligence",
    description:
      "Turn every meeting into structured output. AXIOM records, transcribes, and summarizes conversations in real time, then extracts action items and distributes them to the right people and tools.",
    whyItMatters:
      "Organizations spend 31 hours per month in unproductive meetings. Unlike Fireflies, Otter, or Tactiq, AXIOM doesn't just transcribe -- it routes action items to your project board, updates your CRM, and stores decisions in shared memory so every future interaction benefits from what was discussed. The Heartbeat engine follows up on unresolved action items automatically.",
    mockupLabel: "Meeting Summary & Action Items",
    capabilities: [
      {
        icon: Mic,
        title: "Record & Transcribe",
        description: "Capture high-fidelity audio and produce speaker-attributed transcripts via Deepgram or Whisper.",
      },
      {
        icon: FileText,
        title: "AI Summaries",
        description: "Get concise meeting summaries organized by topic, decision, and next steps.",
      },
      {
        icon: ListChecks,
        title: "Action Item Extraction",
        description: "Automatically identify tasks, owners, and deadlines -- then push them to Jira, Linear, or Asana.",
      },
      {
        icon: Send,
        title: "Auto-Distribution",
        description: "Route summaries and action items to Slack, email, or project tools instantly.",
      },
    ],
    integrations: ["Zoom", "Microsoft Teams", "Google Meet"],
    docsLink: "/docs",
  },
  {
    id: "recordings",
    label: "Field Recording",
    icon: Radio,
    headline: "Field Recording",
    description:
      "Capture insights beyond the screen. AXIOM syncs with hardware recorders like Bee and Plaud, uploads audio to the cloud, and matches recordings to calendar events for seamless context.",
    whyItMatters:
      "Field teams, consultants, and researchers need to capture conversations outside of video calls. AXIOM treats hardware recordings as first-class data -- syncing, transcribing, and indexing them into your shared memory so insights from client sites and in-person meetings are never lost.",
    mockupLabel: "Field Recording Sync",
    capabilities: [
      {
        icon: Headphones,
        title: "Hardware Recorder Support",
        description: "Native integration with Bee, Plaud, and other wearable audio devices.",
      },
      {
        icon: Upload,
        title: "Cloud Sync",
        description: "Recordings automatically upload, transcribe, and index in your knowledge base.",
      },
      {
        icon: Wifi,
        title: "Context Matching",
        description: "Link recordings to calendar events, contacts, and projects automatically.",
      },
      {
        icon: Fingerprint,
        title: "Speaker Identification",
        description: "Recognize voices across recordings for consistent speaker attribution.",
      },
    ],
    integrations: ["Bee", "Plaud", "Custom Devices via API"],
    docsLink: "/docs",
  },
  {
    id: "policy",
    label: "Policy Engine",
    icon: Shield,
    headline: "Policy Engine",
    description:
      "Govern AI with confidence. The Policy Engine enforces pre-execution checks on every AI action -- from spend limits and approval workflows to data-classification rules -- with a complete, exportable audit trail.",
    whyItMatters:
      "Enterprise AI adoption stalls without governance. AXIOM's Policy Engine is the control plane for every action the platform takes: every email draft, every calendar change, every CRM update passes through policy checks (Allowed / Denied / Needs Approval) before execution. This isn't a bolt-on compliance layer -- it's the architectural foundation that makes autonomous AI safe for regulated industries.",
    mockupLabel: "Policy Rules & Audit Log",
    capabilities: [
      {
        icon: Lock,
        title: "Pre-Execution Policy Checks",
        description: "Every AI action is evaluated against your policy rules before it executes. Nothing runs unchecked.",
      },
      {
        icon: FileCheck,
        title: "Approval Workflows",
        description: "Route high-impact actions (Needs Approval) to designated approvers with full context.",
      },
      {
        icon: AlertTriangle,
        title: "Spend & Data Classification",
        description: "Set budgets, rate limits, and data-sensitivity rules per user, team, or skill.",
      },
      {
        icon: Eye,
        title: "Full Exportable Audit Trail",
        description: "Every AI action logged with who, what, when, why, and policy outcome -- exportable for compliance.",
      },
    ],
    integrations: ["SSO Providers", "SIEM Tools", "Compliance Platforms", "OPA-Compatible"],
    docsLink: "/docs",
  },
  {
    id: "memory",
    label: "Memory System",
    icon: Brain,
    headline: "Memory System",
    description:
      "AXIOM remembers so you don't have to. Its cross-context memory connects information across emails, meetings, and documents -- building transparent, human-readable organizational knowledge.",
    whyItMatters:
      "Every other AI tool starts from scratch. AXIOM's Memory System is the shared context layer that makes the entire platform smarter over time. Memories are stored as human-readable Markdown files -- not opaque embeddings -- so your team can inspect, edit, and export organizational knowledge at any time. Full memory transparency means you always know what AXIOM knows.",
    mockupLabel: "Memory & Knowledge Explorer",
    capabilities: [
      {
        icon: SearchIcon,
        title: "Cross-Context Search",
        description: "Find anything across emails, meetings, recordings, and documents instantly.",
      },
      {
        icon: Network,
        title: "Entity Relationships",
        description: "Automatically map connections between people, companies, topics, and decisions.",
      },
      {
        icon: FileText,
        title: "Human-Readable Memories",
        description: "All memories stored as Markdown files you can read, edit, and export. Full transparency, always.",
      },
      {
        icon: GitBranch,
        title: "Contextual Recall",
        description: "Surface relevant past context automatically in meetings, emails, and chats.",
      },
    ],
    integrations: ["All AXIOM Modules", "Custom Data Sources", "Export to Notion/Docs"],
    docsLink: "/docs",
  },
  {
    id: "skills",
    label: "Skills & Workflows",
    icon: Zap,
    headline: "Skills & Workflows",
    description:
      "Automate anything. AXIOM ships with 50 built-in skills and a visual workflow builder. Built on the Model Context Protocol (MCP), skills are policy-wrapped and auditable by design.",
    whyItMatters:
      "Unlike isolated automation tools, every AXIOM skill runs through the Policy Engine and logs to the audit trail. Skills are built on MCP, so you can import plugins from other ecosystems (Copilot, Cowork, CQ), wrap them with AXIOM's governance layer, and run them with full organizational context from the Memory System.",
    mockupLabel: "Workflow Builder Canvas",
    capabilities: [
      {
        icon: Zap,
        title: "50 Built-in Skills",
        description: "Pre-built automations for common tasks -- from data extraction to report generation.",
      },
      {
        icon: Workflow,
        title: "Custom Workflow Builder",
        description: "Visually chain skills into multi-step automations with conditional logic.",
      },
      {
        icon: Code,
        title: "MCP-Based & Interoperable",
        description: "Built on MCP. Reuse plugins from other ecosystems and wrap them with AXIOM's policy engine and audit trail.",
      },
      {
        icon: Webhook,
        title: "Webhooks & Triggers",
        description: "Fire workflows from external events or on schedules with zero code.",
      },
    ],
    integrations: ["MCP Ecosystem", "Zapier", "Make", "Custom Webhooks"],
    docsLink: "/docs",
  },
  {
    id: "crm",
    label: "CRM Integration",
    icon: Users,
    headline: "CRM Integration",
    description:
      "Keep your CRM current without the data entry. AXIOM syncs contacts bi-directionally, logs interactions from meetings and emails, and updates deal stages -- so your pipeline is always accurate.",
    whyItMatters:
      "RevOps teams waste hours on manual CRM hygiene. AXIOM's bi-directional sync means contact updates, interaction logs, and deal-stage changes flow both ways between AXIOM and your CRM in real time. Combined with meeting intelligence, every client call automatically updates the right record.",
    mockupLabel: "CRM Sync Dashboard",
    capabilities: [
      {
        icon: RefreshCw,
        title: "Bi-Directional Sync",
        description: "Contacts, deals, and activities flow both ways between AXIOM and your CRM in real time.",
      },
      {
        icon: BarChart3,
        title: "Interaction Logging",
        description: "Automatically log emails, calls, and meetings to the right CRM records.",
      },
      {
        icon: Database,
        title: "Contact Enrichment",
        description: "Augment CRM records with data gathered from meetings and communications.",
      },
      {
        icon: Zap,
        title: "Pipeline Automation",
        description: "Move deals through stages based on meeting outcomes and email signals.",
      },
    ],
    integrations: ["Salesforce (bi-directional)", "HubSpot (bi-directional)", "Pipedrive (bi-directional)"],
    docsLink: "/docs",
  },
  {
    id: "pm",
    label: "Project Management",
    icon: ClipboardList,
    headline: "Project Management",
    description:
      "Bridge the gap between conversations and execution. AXIOM creates tickets from meeting action items, syncs boards bi-directionally, and keeps your team aligned without manual overhead.",
    whyItMatters:
      "The gap between 'we discussed it' and 'it's in the backlog' is where work gets lost. AXIOM bridges that gap by pushing action items directly to your project boards and pulling status changes back -- so standups are informed by real progress, not stale updates.",
    mockupLabel: "Task Board Integration",
    capabilities: [
      {
        icon: Ticket,
        title: "Auto Ticket Creation",
        description: "Convert meeting action items into project tickets with one click or automatically.",
      },
      {
        icon: Kanban,
        title: "Bi-Directional Board Sync",
        description: "Keep AXIOM tasks and external project boards in sync -- changes flow both ways.",
      },
      {
        icon: FolderSync,
        title: "Status Updates",
        description: "Pull status changes from project tools back into AXIOM for unified tracking.",
      },
      {
        icon: ListChecks,
        title: "Sprint Planning Support",
        description: "Surface unresolved action items and blockers to inform planning sessions.",
      },
    ],
    integrations: ["Jira (bi-directional)", "Linear (bi-directional)", "Asana (bi-directional)"],
    docsLink: "/docs",
  },
  {
    id: "export",
    label: "Export & Integrations",
    icon: Share2,
    headline: "Export & Integrations",
    description:
      "Your data, where you need it. AXIOM pushes summaries, notes, and structured data to the tools your team already lives in -- no copy-pasting required.",
    whyItMatters:
      "Output is only valuable if it reaches the right people in the right place. AXIOM exports to your team's existing tools so meeting notes land in Confluence, project updates post to Slack, and knowledge articles sync to Notion -- all governed by the same policy rules.",
    mockupLabel: "Export Destinations",
    capabilities: [
      {
        icon: FileOutput,
        title: "Structured Export",
        description: "Send meeting notes, summaries, and data in clean formats to any destination.",
      },
      {
        icon: Send,
        title: "Slack Integration",
        description: "Post summaries and updates to channels and threads automatically.",
      },
      {
        icon: Hash,
        title: "Notion & Docs Sync",
        description: "Push structured content directly into Notion databases or Google Docs.",
      },
      {
        icon: Globe,
        title: "Confluence Publishing",
        description: "Publish meeting notes and knowledge base articles to Confluence spaces.",
      },
    ],
    integrations: ["Notion (exports to)", "Google Docs (exports to)", "Slack (bi-directional)", "Confluence (exports to)"],
    docsLink: "/docs",
  },
  {
    id: "voice",
    label: "Voice & Telephony",
    icon: Phone,
    headline: "Voice & Telephony",
    description:
      "Extend AXIOM to the phone. Voice and telephony are skills on the same platform -- not a bolt-on PBX. Handle calls with the same AI, policy engine, and memory that powers everything else.",
    whyItMatters:
      "Phone calls shouldn't be a separate data silo. AXIOM treats voice as another channel on the same governed platform -- calls are transcribed by Deepgram or Whisper (LLM-agnostic, your choice), logged to your CRM, and stored in shared memory alongside every email and meeting.",
    mockupLabel: "Call Management Interface",
    capabilities: [
      {
        icon: PhoneIncoming,
        title: "Inbound Call Handling",
        description: "AI-powered call routing, transcription, and summary for incoming calls.",
      },
      {
        icon: PhoneOutgoing,
        title: "Outbound Calls",
        description: "Initiate calls with AI assistance for follow-ups, reminders, and outreach.",
      },
      {
        icon: MessageCircle,
        title: "SMS Messaging",
        description: "Send and receive text messages with smart templates and auto-replies.",
      },
      {
        icon: Headphones,
        title: "Live Call Assist",
        description: "Get real-time context and suggested responses during active calls.",
      },
    ],
    integrations: ["Twilio", "VoIP Providers", "Deepgram", "Whisper"],
    docsLink: "/docs",
  },
  {
    id: "skillforge",
    label: "SkillForge Marketplace",
    icon: Store,
    headline: "SkillForge Marketplace",
    description:
      "Build, share, and discover AI skills. SkillForge is AXIOM's marketplace where teams publish custom skills, organizations share internal automations, and developers extend the platform with the SDK.",
    whyItMatters:
      "A platform is only as powerful as its ecosystem. SkillForge lets your team build once and share across the organization -- with every skill automatically wrapped in Policy Engine governance and full audit logging, regardless of who built it.",
    mockupLabel: "SkillForge Marketplace Browse",
    capabilities: [
      {
        icon: Package,
        title: "Community Skills",
        description: "Browse and install verified skills built by the AXIOM community.",
      },
      {
        icon: Share,
        title: "Org Skill Sharing",
        description: "Publish internal skills across your organization with role-based access.",
      },
      {
        icon: Code,
        title: "Developer SDK",
        description: "Build custom skills with the AXIOM SDK using TypeScript or Python.",
      },
      {
        icon: Globe,
        title: "Marketplace Publishing",
        description: "Share your skills publicly and contribute to the growing AXIOM ecosystem.",
      },
    ],
    integrations: ["AXIOM SDK", "npm / PyPI", "GitHub", "MCP Ecosystem"],
    docsLink: "/docs",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function FeaturesContent() {
  const [activeSection, setActiveSection] = useState(FEATURES[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* ---- scroll-spy ---- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    const currentRefs = sectionRefs.current;
    for (const id of Object.keys(currentRefs)) {
      const el = currentRefs[id];
      if (el) observer.observe(el);
    }

    return () => {
      for (const id of Object.keys(currentRefs)) {
        const el = currentRefs[id];
        if (el) observer.unobserve(el);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative bg-dark-bg bg-grid-pattern overflow-hidden">
        {/* decorative glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent-blue/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 text-center lg:pt-44 lg:pb-28">
          <p className="mb-4 inline-block rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-blue animate-fade-in">
            AI Operations Platform
          </p>
          <h1 className="mx-auto max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-up">
            One governed AI ops layer.{" "}
            <span className="text-gradient">Nine tools replaced.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-accent-blue/80 font-medium animate-fade-up delay-100">
            $837K&ndash;$1.53M saved per year for a 500-person organization.{" "}
            <Link href="/compare" className="underline underline-offset-2 hover:text-accent-blue transition-colors">
              See the full comparison &rarr;
            </Link>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-400 animate-fade-up delay-200">
            For IT, RevOps, and services teams who are drowning in point
            solutions. AXIOM centralizes email, calendar, meetings, policy,
            and memory into one governed platform.
          </p>

          {/* Top 3 Outcomes Strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-300">
            {[
              { icon: DollarSign, label: "Cut SaaS spend" },
              { icon: Shield, label: "Centralize policy" },
              { icon: Layers, label: "Eliminate context-switching" },
            ].map((outcome) => (
              <div
                key={outcome.label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5"
              >
                <outcome.icon className="h-4 w-4 text-accent-blue" />
                <span className="text-sm font-medium text-gray-300">
                  {outcome.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-400">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent-blue px-8 text-white hover:bg-accent-blue/90"
            >
              <Link href="/signup">
                Start Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-gray-600 text-gray-300 hover:border-accent-blue hover:text-white"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ENTERPRISE BANNER (persistent)                              */}
      {/* ============================================================ */}
      <div className="bg-navy border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-accent-blue" />
            <span className="text-sm font-medium text-gray-300">
              Enterprise-grade by design &mdash; SOC-2, RLS, OPA policies, air-gap deployment, BYO LLM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/enterprise"
              className="text-sm font-medium text-accent-blue hover:text-white transition-colors"
            >
              Enterprise &rarr;
            </Link>
            <Link
              href="/security"
              className="text-sm font-medium text-accent-blue hover:text-white transition-colors"
            >
              Security &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  HOW AXIOM WORKS — Platform Story                            */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-20 bg-surface border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="mb-4 inline-block rounded-full bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-blue uppercase tracking-wide">
              How It Works
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy leading-tight">
              How AXIOM works as an AI operations layer
            </h2>
            <p className="mt-4 text-base text-muted-text max-w-2xl mx-auto">
              Not 11 disconnected products. One governed platform with shared
              memory, a unified policy engine, and a proactive Heartbeat engine
              that works around the clock.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: 1,
                icon: Link2,
                title: "Connect",
                description:
                  "Link your email, calendar, CRM, and collaboration tools. Add your OpenRouter API key for LLM-agnostic model access.",
              },
              {
                step: 2,
                icon: Settings,
                title: "Configure",
                description:
                  "Set organizational policies (Allowed / Denied / Needs Approval), approval workflows, role-based permissions, and data-classification rules.",
              },
              {
                step: 3,
                icon: Activity,
                title: "Let Heartbeat Run",
                description:
                  "AXIOM's Heartbeat engine operates 24/7 -- triaging email, tracking deadlines, processing overnight updates, and proactively surfacing what needs attention.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue text-white text-sm font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="mt-4 mb-5 inline-flex items-center justify-center rounded-xl bg-accent-light p-3 text-accent-blue">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key differentiators strip */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Activity,
                title: "Heartbeat Engine",
                desc: "Proactive triage, deadline alerts, and overnight processing -- not just reactive responses.",
              },
              {
                icon: Shield,
                title: "Policy Engine Gate",
                desc: "Every action passes through Allowed / Denied / Needs Approval checks before execution.",
              },
              {
                icon: Brain,
                title: "Shared Memory",
                desc: "Human-readable Markdown memories that every module shares. Transparent and exportable.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-accent-blue/20 bg-accent-blue/5 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{item.title}</p>
                  <p className="text-xs text-muted-text leading-relaxed mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SIDEBAR + FEATURE SECTIONS                                  */}
      {/* ============================================================ */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
          {/* -- Mobile horizontal nav -- */}
          <nav
            className="mb-10 -mx-6 overflow-x-auto border-b border-gray-200 bg-white px-6 lg:hidden"
            aria-label="Feature navigation"
          >
            <ul className="flex min-w-max gap-1 pb-px">
              {FEATURES.map((f) => {
                const Icon = f.icon;
                const isActive = activeSection === f.id;
                return (
                  <li key={f.id}>
                    <button
                      onClick={() => scrollToSection(f.id)}
                      className={`flex items-center gap-1.5 whitespace-nowrap rounded-t-lg px-3 py-3 text-xs font-medium transition-colors ${
                        isActive
                          ? "border-b-2 border-accent-blue text-accent-blue"
                          : "text-muted-text hover:text-body-text"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {f.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* -- Desktop sticky sidebar -- */}
          <aside className="hidden lg:block">
            <nav
              className="sticky top-28"
              aria-label="Feature navigation"
            >
              <ul className="space-y-1">
                {FEATURES.map((f) => {
                  const Icon = f.icon;
                  const isActive = activeSection === f.id;
                  return (
                    <li key={f.id}>
                      <button
                        onClick={() => scrollToSection(f.id)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                          isActive
                            ? "bg-accent-light text-accent-blue shadow-sm"
                            : "text-muted-text hover:bg-surface hover:text-body-text"
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 flex-shrink-0 ${
                            isActive ? "text-accent-blue" : "text-muted-text"
                          }`}
                        />
                        {f.label}
                        {isActive && (
                          <ChevronRight className="ml-auto h-4 w-4 text-accent-blue" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Sidebar enterprise CTA */}
              <div className="mt-8 rounded-xl border border-accent-blue/20 bg-accent-blue/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-4 w-4 text-accent-blue" />
                  <span className="text-xs font-bold text-navy uppercase tracking-wide">Enterprise</span>
                </div>
                <p className="text-xs text-muted-text leading-relaxed mb-3">
                  Air-gap deployment, SSO, OPA policies, and dedicated support.
                </p>
                <Link
                  href="/enterprise"
                  className="text-xs font-semibold text-accent-blue hover:underline"
                >
                  Learn more &rarr;
                </Link>
              </div>
            </nav>
          </aside>

          {/* -- Main content area -- */}
          <div className="space-y-28 lg:space-y-36">
            {FEATURES.map((feature) => (
              <FeatureSectionBlock
                key={feature.id}
                feature={feature}
                ref={(el) => {
                  sectionRefs.current[feature.id] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  COMPARISON TEASER                                           */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-20 bg-surface border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <span className="mb-4 inline-block rounded-full bg-success/10 px-4 py-1.5 text-xs font-semibold text-success uppercase tracking-wide">
              Platform Comparison
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
              One platform replaces nine tools
            </h2>
            <p className="mt-3 text-base text-muted-text max-w-xl mx-auto">
              See how AXIOM consolidates your entire AI tool stack -- and what that means for your budget.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-surface">
                  <th className="px-6 py-4 font-semibold text-navy">Capability</th>
                  <th className="px-6 py-4 font-semibold text-navy">Typical Tools</th>
                  <th className="px-6 py-4 font-semibold text-navy text-center">Approx. Cost</th>
                  <th className="px-6 py-4 font-semibold text-accent-blue text-center">AXIOM</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { capability: "Email Intelligence", tools: "Fyxer, Superhuman", cost: "$49/user/mo", axiom: true },
                  { capability: "Calendar & Scheduling", tools: "Reclaim, Motion, Calendly", cost: "$58/user/mo", axiom: true },
                  { capability: "Meeting Transcription", tools: "Tactiq, Fireflies, Otter", cost: "$48/user/mo", axiom: true },
                  { capability: "Policy & Governance", tools: "Custom / none", cost: "Engineering time", axiom: true },
                  { capability: "Shared Memory", tools: "None available", cost: "N/A", axiom: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-6 py-3.5 font-medium text-navy">{row.capability}</td>
                    <td className="px-6 py-3.5 text-muted-text">{row.tools}</td>
                    <td className="px-6 py-3.5 text-muted-text text-center">{row.cost}</td>
                    <td className="px-6 py-3.5 text-center">
                      <CheckCircle2 className="h-5 w-5 text-success mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-accent-blue/5 border-t border-accent-blue/20">
                  <td className="px-6 py-4 font-bold text-navy" colSpan={2}>
                    Total for 500 users
                  </td>
                  <td className="px-6 py-4 font-bold text-center line-through text-muted-text">
                    ~$175/user/mo
                  </td>
                  <td className="px-6 py-4 font-bold text-center text-accent-blue">
                    $29/user/mo
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="rounded-xl bg-success/10 border border-success/20 px-6 py-3">
              <p className="text-sm font-semibold text-success flex items-center gap-2">
                <TrendingDown className="h-4 w-4" />
                Estimated savings: $837K&ndash;$1.53M/year for a 500-person organization
              </p>
            </div>
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:underline"
            >
              See the full replacement and ROI breakdown <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BOTTOM CTA                                                  */}
      {/* ============================================================ */}
      <section className="bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to consolidate your stack?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Start with a free account. No credit card required. Deploy
            across your organization when you are ready.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent-blue px-8 text-white hover:bg-accent-blue/90"
            >
              <Link href="/signup">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-gray-500 text-gray-300 hover:border-white hover:text-white"
            >
              <Link href="/compare">Compare Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature section block                                              */
/* ------------------------------------------------------------------ */

const FeatureSectionBlock = forwardRef<HTMLElement, { feature: FeatureSection }>(
  function FeatureSectionBlock({ feature }, ref) {
    const Icon = feature.icon;

    return (
      <section
        id={feature.id}
        ref={ref}
        className="scroll-mt-28"
      >
        {/* Headline */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
            <Icon className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            {feature.headline}
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-base leading-relaxed text-muted-text mb-4">
          {feature.description}
        </p>

        {/* Why this matters — enterprise framing paragraph */}
        <div className="max-w-2xl rounded-xl border-l-4 border-accent-blue/30 bg-accent-blue/5 px-5 py-4 mb-8">
          <p className="text-sm font-semibold text-navy mb-1">Why this matters</p>
          <p className="text-sm leading-relaxed text-muted-text">
            {feature.whyItMatters}
          </p>
        </div>

        {/* Mockup placeholder — improved */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-surface">
          <div className="flex items-center gap-2 border-b border-gray-200 bg-white px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs text-muted-text">
              {feature.mockupLabel}
            </span>
          </div>
          <div className="flex h-64 items-center justify-center sm:h-80">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-blue/10">
                <Icon className="h-8 w-8 text-accent-blue/40" />
              </div>
              <p className="text-sm font-medium text-muted-text">
                {feature.mockupLabel}
              </p>
              <p className="mt-1 text-xs text-muted-text/60">
                Interactive product preview coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Capability cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {feature.capabilities.map((cap) => {
            const CapIcon = cap.icon;
            return (
              <div
                key={cap.title}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-accent-blue/30 hover:shadow-md"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue transition-colors group-hover:bg-accent-blue group-hover:text-white">
                  <CapIcon className="h-4.5 w-4.5" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-navy">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-text">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Integrations row + See it in action link */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-text">
              Integrates with:
            </span>
            {feature.integrations.map((name) => (
              <span
                key={name}
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-body-text"
              >
                {name}
              </span>
            ))}
          </div>
          {feature.docsLink && (
            <Link
              href={feature.docsLink}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue hover:underline"
            >
              See it in action <ExternalLink className="h-3 w-3" />
            </Link>
          )}
        </div>
      </section>
    );
  }
);
