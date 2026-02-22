import Link from "next/link";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Compare", href: "/compare" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "What's New", href: "/changelog" },
  { label: "Security", href: "/security" },
];

const resourceLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "API Reference", href: "/docs#api" },
  { label: "Community", href: "/community" },
  { label: "Status Page", href: "/status" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Press", href: "/press" },
  { label: "Partners", href: "/partners" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "DPA", href: "/legal/dpa" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Acceptable Use", href: "/legal/acceptable-use" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-navy mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-text hover:text-accent-blue transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white font-bold text-sm">
                A
              </div>
              <span className="text-xl font-bold text-navy">AXIOM</span>
            </Link>
            <p className="text-sm text-muted-text mb-6 max-w-xs">
              AI Operations Platform. Autonomous eXecution &amp; Intelligence
              Operations Manager. One governed platform replacing nine tools.
            </p>
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm font-medium text-navy mb-2">
                Stay updated
              </p>
              <p className="text-xs text-muted-text mb-2">Product updates, AI ops insights, and deployment guides. No spam.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-accent-blue px-4 py-2 text-sm font-medium text-white hover:bg-accent-blue/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-muted-text">
            &copy; {new Date().getFullYear()} TSC Texas. All rights reserved.
            AXIOM is the Autonomous eXecution & Intelligence Operations Manager.
          </p>
        </div>
      </div>
    </footer>
  );
}
