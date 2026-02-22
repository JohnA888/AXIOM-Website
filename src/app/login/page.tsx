import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Log In",
  description:
    "Log in to your AXIOM account — the governed AI operations platform that manages your email, calendar, meetings, and tasks in one place.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side — Branding */}
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
              Welcome back to{" "}
              <span className="text-gradient">AXIOM</span>
            </h1>

            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              Your AI operations platform is running 24/7 — managing email,
              scheduling, meetings, and tasks while you were away.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="text-gray-300 font-medium">
                  Enterprise-grade security with SOC-2 compliance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                  <Zap className="h-4 w-4" />
                </div>
                <span className="text-gray-300 font-medium">
                  All actions governed by your organization&apos;s policy engine
                </span>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-4">
              {[
                { value: "1,284", label: "Emails handled" },
                { value: "47.2h", label: "Hours saved" },
                { value: "38", label: "Meetings managed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side — Login Form */}
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
              Log in to AXIOM
            </h2>
            <p className="mt-2 text-muted-text">
              Enter your credentials to access your dashboard.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-body-text mb-1.5"
                >
                  Email
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
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-body-text"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-medium text-accent-blue hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  className="block w-full rounded-xl border border-gray-200 bg-surface px-4 py-3 text-sm text-body-text placeholder:text-muted-text focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-accent-blue py-3 text-white font-semibold hover:bg-accent-blue/90 h-12"
              >
                Log In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-4 text-muted-text">
                  or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-body-text hover:bg-surface transition-colors"
              >
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-body-text hover:bg-surface transition-colors"
              >
                Microsoft
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-muted-text">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-accent-blue hover:underline"
              >
                Start free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
