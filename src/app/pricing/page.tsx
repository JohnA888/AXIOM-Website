"use client";

import { useState, useMemo } from "react";
import { Check, ArrowRight, Zap, Shield, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const tiers = [
  {
    id: "free",
    name: "Starter",
    label: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    unit: "/month",
    userLimit: "Up to 5 users",
    description: "Everything you need to get started with AI-powered operations.",
    cta: "Get Started Free",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      "All 50 skills included",
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
  {
    id: "pro",
    name: "Professional",
    label: "Pro",
    monthlyPrice: 29,
    annualPrice: 24,
    unit: "/user/month",
    userLimit: "Unlimited users",
    description:
      "For growing teams that need advanced integrations and unlimited scale.",
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter, plus:",
      "Unlimited users",
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
  {
    id: "enterprise",
    name: "Enterprise",
    label: "Enterprise",
    monthlyPrice: -1, // custom
    annualPrice: -1,
    unit: "",
    userLimit: "Unlimited everything",
    description: "Dedicated infrastructure, compliance, and white-glove support.",
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      "Everything in Pro, plus:",
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
];

const toolCosts: Record<string, { label: string; annual: number }> = {
  gmail: { label: "Google Workspace / Outlook 365", annual: 144 },
  superhuman: { label: "Superhuman", annual: 360 },
  none_email: { label: "No paid email tool", annual: 0 },
  gcal: { label: "Google Calendar (free)", annual: 0 },
  calendly: { label: "Calendly", annual: 96 },
  reclaim: { label: "Reclaim.ai", annual: 96 },
  none_cal: { label: "No paid calendar tool", annual: 0 },
  zoom: { label: "Zoom", annual: 160 },
  otter: { label: "Otter.ai", annual: 200 },
  fireflies: { label: "Fireflies.ai", annual: 228 },
  none_meet: { label: "No paid meeting tool", annual: 0 },
  notion: { label: "Notion", annual: 96 },
  monday: { label: "Monday.com", annual: 108 },
  asana: { label: "Asana", annual: 132 },
  none_prod: { label: "No paid productivity tool", annual: 0 },
};

const faqItems = [
  {
    q: "What\u2019s included in the free Starter tier?",
    a: "The Starter tier gives you full access to all 50 AXIOM skills, including email intelligence, calendar optimization, meeting transcription, and field recording for up to 2 devices. You get 10 GB of memory, basic Policy Engine access, and community support \u2014 all completely free for up to 5 users. You just need to bring your own OpenRouter API key for the AI model costs.",
  },
  {
    q: "What is OpenRouter, and why do I need my own key?",
    a: "OpenRouter is a unified API gateway that gives you access to models from OpenAI, Anthropic, Google, and others. By using your own key, you control exactly which models AXIOM uses and you pay the model providers directly at their published rates \u2014 no markup. This keeps your costs transparent and lets you choose the best model for your needs.",
  },
  {
    q: "How much does OpenRouter typically cost per user?",
    a: "For typical business usage, expect to pay $3\u2013$8 per user per month in model costs through OpenRouter. Heavy power users who rely on AI throughout the day may see costs of $10\u2013$15 per user per month. These are estimates \u2014 actual costs depend on which models you choose and how frequently you use AI features.",
  },
  {
    q: "Can I switch between monthly and annual billing?",
    a: "Yes! You can switch from monthly to annual billing at any time to save 17%. When you upgrade to annual, we\u2019ll prorate your existing billing cycle. If you switch from annual to monthly, the change takes effect at your next renewal date.",
  },
  {
    q: "What happens as my team grows?",
    a: "On the Starter plan, you can have up to 5 users. When you\u2019re ready to grow, upgrade to Pro for unlimited users at $29/user/month (or $24/user/month with annual billing). Your data and configurations carry over seamlessly. Enterprise customers get volume discounts for large teams.",
  },
  {
    q: "When should I request a custom Enterprise quote?",
    a: "If you need SSO/SAML, air-gapped deployment, custom data residency, SOC-2 compliance, or a dedicated account manager, Enterprise is the right fit. We also recommend Enterprise for teams over 200 users, as we can offer volume pricing. Contact our sales team for a tailored quote.",
  },
  {
    q: "What integrations are included?",
    a: "All plans include email (Gmail, Outlook), calendar, and meeting transcription integrations. Pro and Enterprise add CRM integrations (Salesforce, HubSpot), project management tools (Jira, Asana, Monday.com), and API access for custom workflows. Enterprise also supports custom integrations through our professional services team.",
  },
  {
    q: "How does AXIOM compare to buying separate tools?",
    a: "Most teams spend $50\u2013$100+ per user per month on a combination of email, calendar, meeting, and productivity tools. AXIOM replaces or enhances all of these in a single platform starting at $29/user/month plus a few dollars in AI model costs. Our ROI calculator above can show you exactly how much your team would save.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  // ROI calculator state
  const [teamSize, setTeamSize] = useState(50);
  const [emailTool, setEmailTool] = useState("superhuman");
  const [calendarTool, setCalendarTool] = useState("calendly");
  const [meetingTool, setMeetingTool] = useState("otter");
  const [productivityTool, setProductivityTool] = useState("notion");

  const roi = useMemo(() => {
    const emailCost = toolCosts[emailTool]?.annual ?? 0;
    const calCost = toolCosts[calendarTool]?.annual ?? 0;
    const meetCost = toolCosts[meetingTool]?.annual ?? 0;
    const prodCost = toolCosts[productivityTool]?.annual ?? 0;

    const currentAnnualPerUser = emailCost + calCost + meetCost + prodCost;
    const currentTotal = currentAnnualPerUser * teamSize;

    const axiomPerUser = isAnnual ? 24 * 12 : 29 * 12;
    const openRouterPerUser = 5.5 * 12; // mid-range estimate
    const axiomTotal = (axiomPerUser + openRouterPerUser) * teamSize;

    const savings = currentTotal - axiomTotal;

    return { currentTotal, axiomTotal, savings };
  }, [teamSize, emailTool, calendarTool, meetingTool, productivityTool, isAnnual]);

  function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  }

  function getPrice(tier: (typeof tiers)[number]) {
    if (tier.monthlyPrice === -1) return null;
    return isAnnual ? tier.annualPrice : tier.monthlyPrice;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ------------------------------------------------------------------ */}
      {/*  Hero                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface px-6 pb-8 pt-24 text-center sm:px-8 lg:pb-12 lg:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-text sm:text-xl">
            AXIOM gives you one platform for AI-powered operations. You pay for
            the platform &mdash; and you control your own AI model costs through
            OpenRouter. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Billing Toggle                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface px-6 pb-16 sm:px-8">
        <div className="mx-auto flex max-w-md items-center justify-center gap-3">
          <span
            className={`text-sm font-medium ${
              !isAnnual ? "text-navy" : "text-muted-text"
            }`}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isAnnual}
            onClick={() => setIsAnnual((prev) => !prev)}
            className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 ${
              isAnnual ? "bg-accent-blue" : "bg-muted-text/30"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              isAnnual ? "text-navy" : "text-muted-text"
            }`}
          >
            Annual
          </span>
          {isAnnual && (
            <Badge className="bg-success/10 text-success border-success/20 border text-xs">
              Save 17%
            </Badge>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Pricing Cards                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {/* On mobile, reorder so Pro card appears first */}
          {[tiers[1], tiers[0], tiers[2]].map((tier) => {
            const price = getPrice(tier);
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "order-first border-accent-blue bg-white shadow-xl shadow-accent-blue/10 ring-2 ring-accent-blue md:order-none md:scale-105"
                    : "order-last border-surface bg-white shadow-sm md:order-none"
                } ${tier.id === "free" ? "md:order-first" : ""} ${
                  tier.id === "enterprise" ? "md:order-last" : ""
                }`}
              >
                {tier.highlighted && tier.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-blue text-white px-3 py-1">
                    {tier.badge}
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-navy">
                    {tier.label}
                    <span className="ml-2 text-sm font-normal text-muted-text">
                      {tier.name}
                    </span>
                  </h3>
                  <p className="mt-1 text-sm text-muted-text">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6">
                  {price !== null ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-navy">
                        ${price}
                      </span>
                      <span className="text-muted-text text-sm">
                        {tier.unit}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-navy">
                        Custom
                      </span>
                    </div>
                  )}
                  <p className="mt-1 text-xs text-muted-text">
                    {tier.userLimit}
                  </p>
                  {tier.id === "pro" && isAnnual && (
                    <p className="mt-1 text-xs text-success font-medium">
                      $24/user/month billed annually
                    </p>
                  )}
                  {tier.id === "pro" && !isAnnual && (
                    <p className="mt-1 text-xs text-muted-text">
                      $24/user/month if billed annually
                    </p>
                  )}
                </div>

                <Button
                  variant={tier.ctaVariant}
                  size="lg"
                  className={`w-full ${
                    tier.highlighted
                      ? "bg-accent-blue hover:bg-accent-blue/90 text-white"
                      : ""
                  }`}
                >
                  {tier.cta}
                  {tier.id !== "free" && (
                    <ArrowRight className="ml-1 size-4" />
                  )}
                </Button>

                <ul className="mt-8 space-y-3 text-sm text-body-text">
                  {tier.features.map((feature) => {
                    const isHeader = feature.endsWith(":");
                    return (
                      <li
                        key={feature}
                        className={`flex items-start gap-2 ${
                          isHeader ? "font-semibold text-navy pt-1" : ""
                        }`}
                      >
                        {!isHeader && (
                          <Check className="mt-0.5 size-4 shrink-0 text-success" />
                        )}
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  OpenRouter Explainer                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-navy px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-accent-blue/20 text-accent-blue border-accent-blue/30 border">
            <Zap className="mr-1 size-3" />
            BYO Model
          </Badge>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            You control your AI costs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Unlike other platforms that lock you into expensive, opaque AI
            pricing, AXIOM lets you bring your own models through OpenRouter.
            You pick the models. You see every token. You pay the providers
            directly.
          </p>

          {/* Diagram */}
          <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-0">
            <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 px-6 py-4">
              <Shield className="mb-2 size-8 text-accent-blue" />
              <span className="text-sm font-semibold text-white">AXIOM</span>
              <span className="text-xs text-white/50">Platform</span>
            </div>
            <ChevronRight className="hidden size-6 text-white/30 sm:block" />
            <div className="block h-6 w-px bg-white/20 sm:hidden" />
            <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 px-6 py-4">
              <Zap className="mb-2 size-8 text-warning" />
              <span className="text-sm font-semibold text-white">
                OpenRouter
              </span>
              <span className="text-xs text-white/50">API Gateway</span>
            </div>
            <ChevronRight className="hidden size-6 text-white/30 sm:block" />
            <div className="block h-6 w-px bg-white/20 sm:hidden" />
            <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 px-6 py-4">
              <Users className="mb-2 size-8 text-success" />
              <span className="text-sm font-semibold text-white">
                AI Models
              </span>
              <span className="text-xs text-white/50">
                OpenAI, Anthropic, etc.
              </span>
            </div>
          </div>

          {/* Cost boxes */}
          <div className="mx-auto mt-12 grid max-w-lg gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-left">
              <p className="text-sm font-medium text-white/50">
                Typical usage
              </p>
              <p className="mt-1 text-2xl font-bold text-white">
                $3&ndash;$8
                <span className="text-sm font-normal text-white/50">
                  /user/mo
                </span>
              </p>
              <p className="mt-2 text-xs text-white/40">
                Standard business workflows with email, calendar, and meeting
                intelligence.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-left">
              <p className="text-sm font-medium text-white/50">Heavy usage</p>
              <p className="mt-1 text-2xl font-bold text-white">
                $10&ndash;$15
                <span className="text-sm font-normal text-white/50">
                  /user/mo
                </span>
              </p>
              <p className="mt-2 text-xs text-white/40">
                Power users running AI throughout the day with large document
                processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  ROI Calculator                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              See how much you&apos;ll save
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-text">
              Compare your current tool spend to AXIOM&apos;s all-in-one platform.
              Adjust the inputs below to match your team.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-white bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Inputs */}
              <div className="space-y-8">
                {/* Team size slider */}
                <div>
                  <label className="mb-3 flex items-center justify-between text-sm font-medium text-navy">
                    <span>Team size</span>
                    <span className="tabular-nums text-accent-blue font-semibold">
                      {teamSize} users
                    </span>
                  </label>
                  <Slider
                    value={[teamSize]}
                    onValueChange={(val) => setTeamSize(val[0])}
                    min={5}
                    max={2000}
                    step={5}
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-text">
                    <span>5</span>
                    <span>2,000</span>
                  </div>
                </div>

                {/* Tool selects */}
                <div className="space-y-4">
                  <p className="text-sm font-medium text-navy">
                    Current tools (per user costs)
                  </p>

                  <div>
                    <label className="mb-1 block text-xs text-muted-text">
                      Email tool
                    </label>
                    <Select value={emailTool} onValueChange={setEmailTool}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gmail">
                          Google Workspace / Outlook 365
                        </SelectItem>
                        <SelectItem value="superhuman">Superhuman</SelectItem>
                        <SelectItem value="none_email">
                          No paid email tool
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs text-muted-text">
                      Calendar tool
                    </label>
                    <Select value={calendarTool} onValueChange={setCalendarTool}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gcal">
                          Google Calendar (free)
                        </SelectItem>
                        <SelectItem value="calendly">Calendly</SelectItem>
                        <SelectItem value="reclaim">Reclaim.ai</SelectItem>
                        <SelectItem value="none_cal">
                          No paid calendar tool
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs text-muted-text">
                      Meeting tool
                    </label>
                    <Select value={meetingTool} onValueChange={setMeetingTool}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zoom">Zoom</SelectItem>
                        <SelectItem value="otter">Otter.ai</SelectItem>
                        <SelectItem value="fireflies">Fireflies.ai</SelectItem>
                        <SelectItem value="none_meet">
                          No paid meeting tool
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs text-muted-text">
                      Productivity / PM tool
                    </label>
                    <Select
                      value={productivityTool}
                      onValueChange={setProductivityTool}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="notion">Notion</SelectItem>
                        <SelectItem value="monday">Monday.com</SelectItem>
                        <SelectItem value="asana">Asana</SelectItem>
                        <SelectItem value="none_prod">
                          No paid productivity tool
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-xl border border-surface bg-surface/50 p-6">
                  <p className="text-sm text-muted-text">
                    Your current annual spend
                  </p>
                  <p className="mt-1 text-3xl font-bold text-navy">
                    {formatCurrency(roi.currentTotal)}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-text">
                    {formatCurrency(roi.currentTotal / teamSize)}/user/year
                    across {teamSize} users
                  </p>
                </div>

                <div className="rounded-xl border border-surface bg-surface/50 p-6">
                  <p className="text-sm text-muted-text">
                    AXIOM {isAnnual ? "(annual)" : "(monthly)"} + est.
                    OpenRouter
                  </p>
                  <p className="mt-1 text-3xl font-bold text-accent-blue">
                    {formatCurrency(roi.axiomTotal)}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-text">
                    {formatCurrency(roi.axiomTotal / teamSize)}/user/year
                    all-in estimate
                  </p>
                </div>

                <div
                  className={`rounded-xl p-6 ${
                    roi.savings > 0
                      ? "border-2 border-success/20 bg-success/5"
                      : "border border-warning/20 bg-warning/5"
                  }`}
                >
                  <p className="text-sm text-muted-text">
                    {roi.savings > 0
                      ? "Estimated annual savings"
                      : "Estimated additional investment"}
                  </p>
                  <p
                    className={`mt-1 text-4xl font-bold ${
                      roi.savings > 0 ? "text-success" : "text-warning"
                    }`}
                  >
                    {roi.savings > 0
                      ? formatCurrency(roi.savings)
                      : formatCurrency(Math.abs(roi.savings))}
                  </p>
                  {roi.savings > 0 && (
                    <p className="mt-1 text-xs text-success/80">
                      That&apos;s{" "}
                      {Math.round((roi.savings / roi.currentTotal) * 100)}% less
                      than you&apos;re spending today.
                    </p>
                  )}
                </div>

                <Button
                  size="lg"
                  className="w-full bg-accent-blue text-white hover:bg-accent-blue/90"
                >
                  Start saving today
                  <ArrowRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  FAQ                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-text">
            Everything you need to know about AXIOM pricing, OpenRouter, and
            getting started.
          </p>

          <Accordion type="single" collapsible className="mt-12">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left text-navy hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-text leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Bottom CTA                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-navy px-6 py-20 text-center sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to unify your operations?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
            Start for free with up to 5 users. No credit card required. Upgrade
            when you&apos;re ready.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-accent-blue text-white hover:bg-accent-blue/90"
            >
              Get Started Free
              <ArrowRight className="ml-1 size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
