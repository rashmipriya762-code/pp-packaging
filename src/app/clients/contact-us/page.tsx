import type { Metadata } from "next";
import { ClientsContactHero } from "@/components/clients/contact/ClientsContactHero";
import { ClientsContactForm } from "@/components/clients/contact/ClientsContactForm";
import { ClientsOfficeMap } from "@/components/clients/contact/ClientsOfficeMap";
import { ClientsTrustStrip } from "@/components/clients/contact/ClientsTrustStrip";
import { ClientsFAQ } from "@/components/clients/contact/ClientsFAQ";
import { ClientsFinalCTA } from "@/components/clients/contact/ClientsFinalCTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with P&P Packaging for custom packaging solutions, quotes, and expert advice.",
};

export default function ClientsContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      <ClientsContactHero />
      <ClientsContactForm />
      <ClientsOfficeMap />
      <ClientsTrustStrip />
      <ClientsFAQ />
      <ClientsFinalCTA />
    </div>
  );
}
