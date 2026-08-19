import { HeroSection } from "@/components/home/HeroSection";
import { FeatureStrip } from "@/components/home/FeatureStrip";
import { BestSellers } from "@/components/home/BestSellers";
import { SplitBanner } from "@/components/home/SplitBanner";
import { IndustriesRow } from "@/components/home/IndustriesRow";
import { FooterCTA } from "@/components/home/FooterCTA";

export default function Home() {
  return (
    <main className="bg-cream min-h-screen">
      <HeroSection />
      <FeatureStrip />
      
      {/* Container for the rest of the sections */}
      <div className="flex flex-col">
        <BestSellers />
        <SplitBanner />
        <IndustriesRow />
        <FooterCTA />
      </div>
    </main>
  );
}
