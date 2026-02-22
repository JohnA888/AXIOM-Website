import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Shield, Zap, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Start free with AXIOM — the governed AI operations platform that replaces 9 tools with one. No credit card required. All 50 skills included.",
};

const benefits = [
  { icon: Users, text: "Free for teams under 5" },
  { icon: Shield, text: "No credit card required" },
  { icon: Zap, text: "All 50 skills included" },
  { icon: Clock, text: "Setup in under 5 minutes" },
];

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side — Branding & Benefits */}
        <div className="relative hidden lg:flex flex-col justify-center bg-dark-bg bg-grid-pattern px-12 xl:px-20">
          {/* Radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(74,144,217,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-lg">
            <Link
              href="/"
              className="mb-12 inline-flex items-center gap-2 text-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue text-white text-lg font-extrabold">
                A
              </div>
              <span className="text-xl font-bold tracking-tight">AXIOM</span>
            </Link>

            <h1 className="text-4xl font-extrabold text-white leading-tight">
              One AI platform.{" "}
              <span className="text-gradient">Nine tools replaced.</span>
            </h1>

            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              Join teams that have consolidated their AI stack into a single
              governed platform — saving time, money, and sanity.
            </p>

            <div className="mt-10 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                    <benefit.icon className="h-4 w-4" />
                  </div>
                  <span className="text-gray-300 font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-gray-400 leading-relaxed">
                &ldquo;AXIOM replaced our entire stack of AI point solutions.
                Setup took 15 minutes and our team was productive on day
                one.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-light text-accent-blue text-sm font-bold">
                  S
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Sarah Chen
                  </p>
                  <p className="text-xs text-gray-500">
                    VP of Operations, TechCorp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side — Sign Up Form */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 xl:px-20">
          {/* Mobile logo */}
          <div className="mb-8 lg:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-navy"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue text-white text-lg font-extrabold">
                A
              </div>
              <span className="text-xl font-bold tracking-tight">AXIOM</span>
            </Link>
          </div>

          <div className="mx-auto w-full max-w-md">
            <h2 className="text-3xl font-extrabold text-navy">
              Create your account
            </h2>
            <p className="mt-2 text-muted-text">
              Start free. No credit card required.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-body-text mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Jane Smith"
                  className="block w-full rounded-xl border border-gray-200 bg-surface px-4 py-3 text-sm text-body-text placeholder:text-muted-text focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-body-text mb-1.5"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="jane@company.com"
                  className="block w-full rounded-xl border border-gray-200 bg-surface px-4 py-3 text-sm text-body-text placeholder:text-muted-text focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-body-text mb-1.5"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="Minimum 8 characters"
                  className="block w-full rounded-xl border border-gray-200 bg-surface px-4 py-3 text-sm text-body-text placeholder:text-muted-text focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-body-text mb-1.5"
                >
                  Company Name{" "}
                  <span className="text-muted-text font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Acme Inc."
                  className="block w-full rounded-xl border border-gray-200 bg-surface px-4 py-3 text-sm text-body-text placeholder:text-muted-text focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-accent-blue py-3 text-white font-semibold hover:bg-accent-blue/90 h-12"
              >
                Create Free Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <p className="mt-4 text-center text-xs text-muted-text">
              By signing up, you agree to our{" "}
              <Link
                href="/legal/terms"
                className="text-accent-blue hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/legal/privacy"
                className="text-accent-blue hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>

            {/* Mobile benefits */}
            <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-2 rounded-lg bg-surface p-3"
                >
                  <Check className="h-4 w-4 text-success shrink-0" />
                  <span className="text-xs text-body-text font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-text">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-accent-blue hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
