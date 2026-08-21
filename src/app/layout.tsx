import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SmoothScrollProvider } from "@/lib/lenis";
import { siteConfig } from "@/lib/content";
import { organizationJsonLd } from "@/lib/seo";

// Self-hosted, preloaded, no render-blocking request to fonts.googleapis.com.
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Custom Bags & Boxes Manufacturer, Mumbai`,
    // Page titles must NOT repeat the brand name — the template appends it.
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "custom packaging India",
    "paper bags manufacturer Mumbai",
    "jute bags manufacturer",
    "cotton bags wholesale",
    "cardboard boxes manufacturer",
    "custom printed bags",
    "packaging solutions B2B",
    "sweet boxes manufacturer",
    "cake boxes manufacturer",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — India's Trusted Custom Packaging Manufacturer`,
    description: siteConfig.description,
    // The image comes from src/app/opengraph-image.tsx at the correct 1200x630.
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} overflow-x-hidden`}>
      <body className="font-body antialiased bg-cream overflow-x-hidden relative">
        <script
          type="application/ld+json"
          // Static, developer-authored JSON-LD. No user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <a href="#main-content" className="sr-only-focusable btn-pill btn-teal">
          Skip to content
        </a>
        <SmoothScrollProvider>
          <Navbar />
          {/* Offsets the fixed 76px header exactly once, for every page. */}
          <main id="main-content" className="min-h-screen pt-[76px]">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
