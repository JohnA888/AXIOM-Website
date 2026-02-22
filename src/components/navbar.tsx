"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Menu,
  X,
  Mail,
  Calendar,
  Mic,
  Shield,
  Brain,
  Puzzle,
  Users,
  Code,
  Briefcase,
  BookOpen,
  FileText,
  MessageSquare,
  Rss,
  Globe,
  Zap,
} from "lucide-react";

const productLinks = [
  { label: "Features", href: "/features", icon: Zap },
  { label: "How It Works", href: "/features#how-it-works", icon: Globe },
  { label: "Integrations", href: "/features#export", icon: Puzzle },
];

const solutionsLinks = [
  { label: "For IT Directors", href: "/enterprise", icon: Shield },
  { label: "For Developers", href: "/docs", icon: Code },
  { label: "For Executives", href: "/compare", icon: Briefcase },
  { label: "Email Intelligence", href: "/features#email", icon: Mail },
  { label: "Calendar & Scheduling", href: "/features#calendar", icon: Calendar },
  { label: "Meeting Intelligence", href: "/features#meetings", icon: Mic },
];

const resourcesLinks = [
  { label: "Documentation", href: "/docs", icon: BookOpen },
  { label: "Blog", href: "/blog", icon: Rss },
  { label: "API Reference", href: "/docs#api", icon: Code },
  { label: "Case Studies", href: "/blog#case-studies", icon: FileText },
  { label: "Community", href: "/community", icon: MessageSquare },
];

function DropdownMenu({
  label,
  links,
  isOpen,
  onToggle,
}: {
  label: string;
  links: { label: string; href: string; icon: React.ElementType }[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm font-medium text-body-text hover:text-accent-blue transition-colors"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-white shadow-xl border border-gray-100 p-2 z-50">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-body-text hover:bg-accent-light hover:text-accent-blue transition-colors"
            >
              <link.icon className="h-4 w-4 text-muted-text" />
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white font-bold text-sm">
            A
          </div>
          <span className="text-xl font-bold text-navy">AXIOM</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <DropdownMenu
            label="Product"
            links={productLinks}
            isOpen={openDropdown === "product"}
            onToggle={() => toggleDropdown("product")}
          />
          <DropdownMenu
            label="Solutions"
            links={solutionsLinks}
            isOpen={openDropdown === "solutions"}
            onToggle={() => toggleDropdown("solutions")}
          />
          <Link
            href="/pricing"
            className="text-sm font-medium text-body-text hover:text-accent-blue transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/compare"
            className="text-sm font-medium text-body-text hover:text-accent-blue transition-colors"
          >
            Compare
          </Link>
          <DropdownMenu
            label="Resources"
            links={resourcesLinks}
            isOpen={openDropdown === "resources"}
            onToggle={() => toggleDropdown("resources")}
          />
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button
            asChild
            className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-6"
          >
            <Link href="/signup">Start Free →</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto">
          <div className="px-6 py-8 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-text uppercase tracking-wider">
                Product
              </p>
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 py-2 text-body-text"
                  onClick={() => setMobileOpen(false)}
                >
                  <link.icon className="h-4 w-4 text-muted-text" />
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-text uppercase tracking-wider">
                Solutions
              </p>
              {solutionsLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 py-2 text-body-text"
                  onClick={() => setMobileOpen(false)}
                >
                  <link.icon className="h-4 w-4 text-muted-text" />
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/pricing"
              className="block py-2 text-lg font-semibold text-body-text"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/compare"
              className="block py-2 text-lg font-semibold text-body-text"
              onClick={() => setMobileOpen(false)}
            >
              Compare
            </Link>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-text uppercase tracking-wider">
                Resources
              </p>
              {resourcesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 py-2 text-body-text"
                  onClick={() => setMobileOpen(false)}
                >
                  <link.icon className="h-4 w-4 text-muted-text" />
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 space-y-3 border-t">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white" asChild>
                <Link href="/signup">Start Free →</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
