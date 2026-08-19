import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SmoothScrollProvider } from "@/lib/lenis";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://pppackaging.in"),
  title: {
    default: `${siteConfig.name} — Custom Bags & Boxes Manufacturer, Mumbai`,
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
  authors: [{ name: "P&P Packaging" }],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — India's Trusted Custom Packaging Manufacturer`,
    description: siteConfig.description,
    images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className="font-body antialiased bg-oyster">
        <SmoothScrollProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
