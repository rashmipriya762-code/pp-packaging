import type { Metadata } from "next";
import { CollectionHero } from "@/components/collection/CollectionHero";
import { CollectionGrid } from "@/components/collection/CollectionGrid";
import { CollectionCTA } from "@/components/collection/CollectionCTA";
import { FeatureStrip } from "@/components/home/FeatureStrip";

export const metadata: Metadata = {
  title: "Packaging Boxes Collection — P&P Packaging",
  description: "Explore our collection of custom packaging boxes including corrugated cardboard, thermacol, cake, and sweet boxes.",
};

const boxesCollection = [
  {
    name: "Cardboard Boxes – 2 Layer",
    desc: "Lightweight and cost-effective corrugated boxes for standard packaging needs.",
    href: "/boxes/cardboard-2-layer",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Cardboard Boxes – 3 Layer",
    desc: "Strong, durable and sustainable corrugated boxes for safe delivery and storage.",
    href: "/boxes/cardboard-3-layer",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Thermacol Boxes",
    desc: "Excellent insulation and protective cushioning for temperature-sensitive goods.",
    href: "/boxes/thermacol",
    image: "https://images.unsplash.com/photo-1620021305602-0e86b2451f28?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Cake Boxes",
    desc: "Beautifully crafted bakery boxes that keep your cakes secure and presentable.",
    href: "/boxes/cake-boxes",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Sweet Boxes",
    desc: "Premium decorative boxes for traditional sweets, perfect for gifting.",
    href: "/boxes/sweet-boxes",
    image: "https://images.unsplash.com/photo-1606323497184-754d9c73361a?auto=format&fit=crop&q=80&w=600",
  },
];

export default function BoxesCollectionPage() {
  return (
    <main className="bg-cream min-h-screen">
      <CollectionHero 
        eyebrow="BOXES COLLECTION"
        title="Custom Boxes"
        subtitleEmphasis="Built To Protect."
        description="From sturdy corrugated shipping boxes to elegant retail packaging, explore our comprehensive range of box solutions tailored for every industry."
        countText={`Showing 1–${boxesCollection.length} of ${boxesCollection.length} Collections`}
        image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200"
      />
      
      <CollectionGrid items={boxesCollection} />

      <FeatureStrip />
      <CollectionCTA />
    </main>
  );
}
