import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutTeamCTA } from "@/components/about/AboutTeamCTA";

export const metadata: Metadata = {
  title: "About Us — P&P Packaging",
  description: "Learn about P&P Packaging — Mumbai's premier custom bags and boxes manufacturer since 2008. Our story, mission, and quality commitment.",
};

export default function AboutPage() {
  return (
    <main className="bg-cream min-h-screen">
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutValues />
      <AboutTeamCTA />
    </main>
  );
}
