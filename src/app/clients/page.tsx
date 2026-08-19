import type { Metadata } from "next";
import { ClientsHero } from "@/components/clients/ClientsHero";
import { ClientsStats } from "@/components/clients/ClientsStats";
import { TrustedClients } from "@/components/clients/TrustedClients";
import { ClientTestimonials } from "@/components/clients/ClientTestimonials";
import { ClientsCTA } from "@/components/clients/ClientsCTA";

export const metadata: Metadata = {
  title: "Our Clients — P&P Packaging",
  description: "Join hundreds of amazing brands across industries who trust P&P Packaging to deliver premium custom packaging solutions.",
};

export default function ClientsPage() {
  return (
    <main className="bg-cream min-h-screen">
      <ClientsHero />
      <ClientsStats />
      <TrustedClients />
      <ClientTestimonials />
      <ClientsCTA />
    </main>
  );
}
