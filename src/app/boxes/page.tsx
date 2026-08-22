import { PRODUCT_IMAGES } from "@/lib/product-images";
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
    image: PRODUCT_IMAGES.corrugatedBoxes,
  },
  {
    name: "Cardboard Boxes – 3 Layer",
    desc: "Strong, durable and sustainable corrugated boxes for safe delivery and storage.",
    href: "/boxes/cardboard-3-layer",
    image: PRODUCT_IMAGES.corrugatedBoxes,
  },
  {
    name: "Thermacol Boxes",
    desc: "Excellent insulation and protective cushioning for temperature-sensitive goods.",
    href: "/boxes/thermacol",
    image: PRODUCT_IMAGES.corrugatedBoxes,
  },
  {
    name: "Cake Boxes",
    desc: "Beautifully crafted bakery boxes that keep your cakes secure and presentable.",
    href: "/boxes/cake-boxes",
    image: PRODUCT_IMAGES.corrugatedBoxes,
  },
  {
    name: "Sweet Boxes",
    desc: "Premium decorative boxes for traditional sweets, perfect for gifting.",
    href: "/boxes/sweet-boxes",
    image: PRODUCT_IMAGES.corrugatedBoxes,
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
        theme="original"
      />
      
      <CollectionGrid items={boxesCollection} />

      <FeatureStrip />
      <CollectionCTA />
    </main>
  );
}
