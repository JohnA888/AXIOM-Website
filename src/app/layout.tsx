import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "AXIOM | AI Operations Platform — Replace 9 Tools with One",
    template: "%s | AXIOM — AI Operations Platform",
  },
  description:
    "AXIOM manages your email, calendar, meetings, tasks, and recordings — governed by enterprise policy, powered by AI you control. Replace 9+ tools and save $837K-$1.53M/year.",
  keywords: [
    "AI operations platform",
    "enterprise AI assistant",
    "AI productivity platform",
    "email AI",
    "smart calendar",
    "meeting transcription",
    "AI tool consolidation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AXIOM",
    title: "AXIOM | One AI Platform. Nine Tools Replaced.",
    description:
      "AXIOM manages your email, calendar, meetings, tasks, and recordings — governed by enterprise policy, powered by AI you control.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AXIOM | One AI Platform. Nine Tools Replaced.",
    description:
      "Replace 9+ AI tools with one platform. Save $837K-$1.53M/year.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-accent-blue focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
