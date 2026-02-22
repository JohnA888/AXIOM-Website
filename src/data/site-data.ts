/* ------------------------------------------------------------------ */
/*  Centralized site data — single source of truth                     */
/*  All pricing, stats, and company info should be imported from here  */
/* ------------------------------------------------------------------ */

// ---- Company Info ---------------------------------------------------

export const COMPANY = {
  name: "TSC Texas",
  product: "AXIOM",
  tagline: "Autonomous eXecution & Intelligence Operations Manager",
  domain: "AxiomAssistant.ai",
  email: {
    hello: "hello@AxiomAssistant.ai",
    legal: "legal@AxiomAssistant.ai",
    privacy: "privacy@AxiomAssistant.ai",
    abuse: "abuse@AxiomAssistant.ai",
    press: "press@AxiomAssistant.ai",
    support: "support@AxiomAssistant.ai",
  },
  location: "Austin, TX",
} as const;

// ---- Key Metrics ----------------------------------------------------

export const METRICS = {
  skillsCount: 50,
  toolsReplaced: 9,
  savingsLow: "$837K",
  savingsHigh: "$1.53M",
  savingsRange: "$837K to $1.53M",
  orgSize: 500,
  avgSpendPerUser: "$1,650",
  adminHoursPerDay: 2.5,
  workdayLostPercent: 60,
  adminOverheadPerEmployee: "$15K",
  contextSwitchesPerHour: 9,
} as const;

// ---- Pricing --------------------------------------------------------

export const PRICING = {
  free: {
    name: "Free",
    price: "$0",
    period: "forever",
    priceMonthly: 0,
    maxUsers: 5,
    storage: "10 GB",
    description: "For individuals and small teams getting started.",
    features: [
      "Up to 5 users",
      `All ${50} skills included`,
      "Email intelligence",
      "Calendar optimization",
      "Meeting transcription",
      "Field recording (2 devices)",
      "Basic Policy Engine",
      "10 GB memory",
      "Community support",
      "BYO OpenRouter key",
    ],
  },
  pro: {
    name: "Pro",
    priceMonthly: 29,
    priceAnnual: 24,
    annualDiscount: 17,
    period: "/user/mo",
    description: "For teams that want the full AXIOM experience.",
    features: [
      "Unlimited users",
      "All modules included",
      "Advanced Policy Engine",
      "Unlimited devices",
      "CRM integration",
      "PM integration",
      "Exports",
      "100 GB memory",
      "Calendar analytics",
      "Priority support",
      "Custom skills",
      "API access",
    ],
  },
  enterprise: {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced security & scale needs.",
    features: [
      "Everything in Pro",
      "SSO / SAML",
      "Air-gapped deployment",
      "Custom data residency",
      "SOC-2 compliance",
      "Row-level security",
      "Unlimited storage",
      "Dedicated account manager",
      "SLA 99.9%",
      "Custom training",
      "Private SkillForge",
      "Audit logs",
      "Flexible LLM hosting",
    ],
  },
  openRouterEstimate: {
    typical: "$3–$8/user/month",
    heavy: "$10–$15/user/month",
    midRange: 5.5,
  },
} as const;

// ---- Replaced Tools (from marketing doc) ----------------------------

export interface ReplacedTool {
  name: string;
  slug: string;
  priceRange: string;
  priceMid: number;
  annualLow500: string;
  annualHigh500: string;
  replaces: string;
}

export const REPLACED_TOOLS: ReplacedTool[] = [
  {
    name: "Fyxer",
    slug: "fyxer",
    priceRange: "$22–$38/mo",
    priceMid: 30,
    annualLow500: "$135K",
    annualHigh500: "$225K",
    replaces: "Email intelligence + meeting notes + CRM sync",
  },
  {
    name: "Reclaim",
    slug: "reclaim",
    priceRange: "$8–$12/mo",
    priceMid: 10,
    annualLow500: "$48K",
    annualHigh500: "$72K",
    replaces: "Smart time blocking + focus protection + habits",
  },
  {
    name: "Motion",
    slug: "motion",
    priceRange: "$29–$49/mo",
    priceMid: 39,
    annualLow500: "$174K",
    annualHigh500: "$294K",
    replaces: "Task auto-scheduling + calendar AI",
  },
  {
    name: "Superhuman",
    slug: "superhuman",
    priceRange: "$25–$40/mo",
    priceMid: 33,
    annualLow500: "$150K",
    annualHigh500: "$240K",
    replaces: "Split inbox + AI drafts + read tracking",
  },
  {
    name: "Fireflies",
    slug: "fireflies",
    priceRange: "$10–$39/mo",
    priceMid: 25,
    annualLow500: "$60K",
    annualHigh500: "$234K",
    replaces: "Meeting recording + transcription + CRM sync",
  },
  {
    name: "Otter",
    slug: "otter",
    priceRange: "$8–$20/mo",
    priceMid: 14,
    annualLow500: "$48K",
    annualHigh500: "$120K",
    replaces: "Meeting transcription + notes",
  },
  {
    name: "Calendly",
    slug: "calendly",
    priceRange: "$10–$16/mo",
    priceMid: 13,
    annualLow500: "$60K",
    annualHigh500: "$96K",
    replaces: "Scheduling links",
  },
  {
    name: "Tactiq",
    slug: "tactiq",
    priceRange: "$12/mo",
    priceMid: 12,
    annualLow500: "$72K",
    annualHigh500: "$72K",
    replaces: "Meeting transcription + summaries + exports",
  },
  {
    name: "Read.ai",
    slug: "readai",
    priceRange: "$20–$30/mo",
    priceMid: 25,
    annualLow500: "$120K",
    annualHigh500: "$180K",
    replaces: "Meeting analytics + engagement scoring",
  },
];

// ---- Trust Partners -------------------------------------------------

export const TRUST_PARTNERS = [
  "OpenRouter",
  "Anthropic",
  "Deepgram",
  "Twilio",
  "Google",
  "Microsoft",
] as const;

// ---- Blog Posts (shared between listing and [slug] pages) -----------

export type BlogCategory =
  | "Product Updates"
  | "Use Cases"
  | "Engineering"
  | "Industry"
  | "Comparisons";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  slug: string;
  body: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Introducing AXIOM 2.0: Unified AI Operations for the Enterprise",
    excerpt:
      "Today we are launching AXIOM 2.0 with a redesigned policy engine, expanded memory systems, and native air-gap deployment support. Here is what is new and why it matters.",
    category: "Product Updates",
    date: "Feb 18, 2026",
    readTime: "5 min read",
    slug: "introducing-axiom-2-0",
    body: "AXIOM 2.0 represents a fundamental evolution of our AI operations platform. The redesigned Policy Engine now evaluates every action against organizational rules using Rego (Open Policy Agent), returning Allowed, Denied, or Needs Approval verdicts in real time. Our expanded memory system stores context in human-readable Markdown files that employees can inspect, edit, and version-control with Git. And with native air-gap deployment, organizations handling classified or regulated data can now run AXIOM entirely on local hardware with zero external network access.\n\nThe 2.0 release also introduces SkillForge, our internal marketplace for custom skills. Organizations can build, share, and install automation workflows that chain AXIOM's modules together. Every skill is code-scanned for security, sandboxed at runtime, and subject to Policy Engine governance. We ship with 50 built-in skills covering email, calendar, tasks, voice, memory, and document analysis — and the community can extend from there.",
  },
  {
    id: "2",
    title: "How a 500-Person Law Firm Replaced 9 Tools with AXIOM",
    excerpt:
      "Goldstein & Associates was spending $1.2M annually on disconnected AI tools. Within 90 days of deploying AXIOM, they consolidated to a single platform and cut costs by 68%.",
    category: "Use Cases",
    date: "Feb 12, 2026",
    readTime: "8 min read",
    slug: "law-firm-case-study",
    body: "When Goldstein & Associates audited their AI tool spending, the numbers were staggering: $1.2 million per year across 9 separate subscriptions. Each tool had its own login, its own data silo, and its own security posture. Their IT team spent more time managing integrations than the tools saved in productivity. The firm needed a single platform that could handle email triage, calendar coordination, meeting transcription, and document preparation — all under one governance framework that met their compliance requirements for attorney-client privilege.\n\nAXIOM's deployment took 12 days. The Policy Engine was configured with firm-specific rules: attorney-client privileged calls are never transcribed, external emails over 500 words require partner review, and all AI actions are logged to an immutable audit trail exportable for regulatory review. Within 90 days, the firm had consolidated all 9 tool subscriptions into AXIOM, reduced their annual AI spend by 68%, and — most importantly — given every attorney a proactive AI operations partner that prepared meeting briefs, tracked deadlines, and drafted follow-up emails automatically.",
  },
  {
    id: "3",
    title: "Building a Multi-Tenant Policy Engine: Lessons from Production",
    excerpt:
      "A deep dive into how we architected AXIOM's policy governance layer to handle thousands of concurrent organizations, each with their own rules, permissions, and compliance requirements.",
    category: "Engineering",
    date: "Feb 5, 2026",
    readTime: "12 min read",
    slug: "multi-tenant-policy-engine",
    body: "The Policy Engine is the core of what makes AXIOM an enterprise platform rather than a personal tool. Every action the AI takes — sending an email, scheduling a meeting, creating a task, making a phone call — passes through the Policy Engine before execution. The engine evaluates the action against organizational rules written in Rego (Open Policy Agent) and returns one of three verdicts: Allowed, Denied, or Needs Approval.\n\nThe engineering challenge was scale. Each organization has its own policy set, and policies can be hierarchical: global organizational rules, department-level overrides, and individual employee customizations within organizational boundaries. We needed sub-10ms evaluation times for the common case while supporting complex policy chains that might involve multiple approval workflows. The solution uses a tiered caching strategy with PostgreSQL row-level security ensuring complete data isolation between tenants — even if there is a bug in application code, the database enforces the boundary.",
  },
  {
    id: "4",
    title: "The Hidden Cost of AI Tool Sprawl in Enterprise Organizations",
    excerpt:
      "The average enterprise now uses 9.4 separate AI tools across departments. We break down the real costs — licensing, integration, security, and the hidden tax of context switching.",
    category: "Industry",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    slug: "hidden-cost-ai-tool-sprawl",
    body: "Knowledge workers spend an average of 2.5 hours per day managing email alone. Add calendar coordination, meeting preparation, task tracking, and phone management, and operational overhead can consume 60% or more of a productive workday. Across a 1,000-person organization, that represents thousands of hours of lost capacity every week. The average enterprise now deploys 9.4 separate AI point-solutions across departments — each with its own login, billing, data silo, and security posture.\n\nThe visible cost is licensing: $1,650 per user per year on average across fragmented tools. But the hidden costs are larger. Integration overhead consumes IT resources. Security review multiplies with each new vendor. Context switching between disconnected tools costs an estimated 23 minutes of recovery time per switch. And the biggest cost of all: none of these tools share memory. Your email AI doesn't know what happened in your meeting. Your calendar AI doesn't know about the task that's due Friday. Every tool starts from scratch, every time.",
  },
  {
    id: "5",
    title: "AXIOM vs. Building Your Own: A Total Cost of Ownership Analysis",
    excerpt:
      "We often hear 'we will build it ourselves.' Here is an honest breakdown of what it takes to build, maintain, and govern an AI operations platform versus using AXIOM off the shelf.",
    category: "Comparisons",
    date: "Jan 20, 2026",
    readTime: "10 min read",
    slug: "axiom-vs-build-your-own",
    body: "The build-vs-buy question comes up in every enterprise evaluation. Engineering leaders rightfully ask whether they could build something equivalent internally. The honest answer: yes, you could — but the total cost of ownership is typically 5-10x higher than deploying AXIOM, and the timeline extends from weeks to years.\n\nConsider the components: you need email integration (IMAP/SMTP/Graph API), calendar sync (CalDAV/Exchange), meeting recording and transcription (WebSocket audio pipelines, speech-to-text), a policy engine with Rego evaluation, a multi-tenant database with row-level security, an LLM routing layer with provider abstraction, a persistent memory system, voice telephony integration, and a web dashboard. Each of these is a significant engineering effort. Then multiply by ongoing maintenance: API changes, security patches, model updates, and compliance requirements. AXIOM's 8-phase, 22-week build plan represents thousands of engineering hours — and that is with a team that has already solved these problems.",
  },
  {
    id: "6",
    title: "New: Smart Meeting Summaries with Action Item Extraction",
    excerpt:
      "AXIOM's meeting intelligence now automatically extracts action items, assigns owners, and creates follow-up tasks — all governed by your organization's policies.",
    category: "Product Updates",
    date: "Jan 14, 2026",
    readTime: "4 min read",
    slug: "smart-meeting-summaries",
    body: "Meeting intelligence is one of AXIOM's most impactful modules. The latest update adds automatic action item extraction with owner assignment and deadline detection. When a meeting ends, AXIOM processes the transcript, identifies every commitment made during the conversation, determines who is responsible, and creates tasks in your project management tool — Jira, Linear, or Asana — with the appropriate context and deadlines.\n\nThe key differentiator is cross-context awareness. Because AXIOM has access to your email threads, calendar, and task list through its unified memory system, it can connect a meeting action item to the email thread that initiated the discussion, the calendar event that scheduled it, and the project board where the work will be tracked. The follow-up email to attendees includes not just a summary, but links to the specific tasks created and the relevant email context.",
  },
  {
    id: "7",
    title: "How Financial Services Teams Use AXIOM for Compliant AI Operations",
    excerpt:
      "Regulated industries face unique challenges with AI adoption. Learn how banks and financial institutions deploy AXIOM with full audit trails and compliance-first governance.",
    category: "Use Cases",
    date: "Jan 7, 2026",
    readTime: "7 min read",
    slug: "financial-services-compliant-ai",
    body: "Financial services organizations operate under some of the strictest regulatory requirements in any industry. SOX compliance, SEC record-keeping rules, FINRA supervision requirements, and data residency mandates create a complex governance landscape that most AI tools simply cannot navigate. AXIOM was designed for exactly this environment.\n\nThe Policy Engine enforces compliance rules at every action, before execution. For a financial services deployment, typical policies include: all client communications must be logged and retained for 7 years, AI-drafted emails to clients require advisor review before sending, meeting transcripts involving material non-public information are auto-classified and access-restricted, and all AI actions are captured in an immutable audit trail exportable for regulatory examination. The air-gapped deployment option means sensitive data never leaves the organization's infrastructure — a requirement for many firms handling proprietary trading strategies or merger discussions.",
  },
  {
    id: "8",
    title: "Real-Time Memory Systems: How AXIOM Learns Without Forgetting",
    excerpt:
      "An engineering deep dive into AXIOM's contextual memory architecture — how we give the AI long-term recall while maintaining data isolation between tenants and respecting retention policies.",
    category: "Engineering",
    date: "Dec 30, 2025",
    readTime: "14 min read",
    slug: "real-time-memory-systems",
    body: "Most AI assistants have no memory. Each conversation starts from scratch. The ones that do have memory typically store it in opaque vector databases that users cannot inspect, edit, or delete. AXIOM takes a fundamentally different approach: memory is stored in human-readable Markdown files that employees can open, read, modify, and version-control with Git.\n\nThe architecture maintains a semantic understanding of each employee's relationships, projects, decisions, and preferences. When AXIOM triages an email from a contact, it knows the history: previous meetings, shared projects, communication preferences, and outstanding commitments. When it prepares a meeting brief, it pulls context from email threads, task lists, and previous meeting notes — all connected through entity relationships in the memory graph. The key engineering challenge is multi-tenant isolation: in server mode, PostgreSQL row-level security ensures that one user's memories are completely invisible to another user, even if there is a bug in application code.",
  },
];

// ---- Enterprise Competitor Data -------------------------------------

export const ENTERPRISE_COMPETITORS = {
  openclaw: {
    name: "OpenClaw",
    slug: "openclaw",
    tagline: "Open source AI agent",
    priceRange: "Free + infrastructure",
  },
  copilot: {
    name: "Microsoft Copilot",
    slug: "copilot",
    tagline: "Microsoft's AI assistant",
    priceRange: "$30/mo + M365",
  },
  cowork: {
    name: "Anthropic Cowork",
    slug: "cowork",
    tagline: "Anthropic's agentic AI mode",
    priceRange: "$20–$200/mo",
  },
} as const;
