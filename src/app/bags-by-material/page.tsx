import { PRODUCT_IMAGES } from "@/lib/product-images";
import type { Metadata } from "next";
import { CollectionHero } from "@/components/collection/CollectionHero";
import { CollectionGrid } from "@/components/collection/CollectionGrid";
import { CollectionCTA } from "@/components/collection/CollectionCTA";
import { FeatureStrip } from "@/components/home/FeatureStrip";

export const metadata: Metadata = {
  title: "Bags by Material — P&P Packaging",
  description: "Explore our collection of packaging bags categorized by material, including Paper, Jute, Cotton, and more.",
};

const materialCollection = [
  { name: "Paper Bags", desc: "Classic, versatile, and eco-friendly paper bags for retail and food.", href: "/bags-by-material/paper-bags", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Jute Bags", desc: "Durable and rustic jute bags, perfect for heavy items and sustainable branding.", href: "/bags-by-material/jute-bags", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Cotton Bags", desc: "Premium, reusable cotton bags that offer a soft touch and high-quality print surface.", href: "/bags-by-material/cotton-bags", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Canvas Bags", desc: "Heavy-duty canvas bags for maximum durability and long-term reuse.", href: "/bags-by-material/canvas-bags", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Non-Woven Bags", desc: "Cost-effective, lightweight, and vibrant non-woven bags for promotions.", href: "/bags-by-material/non-woven-bags", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Organic & Eco-Friendly Bags", desc: "100% certified organic materials for the environmentally conscious brand.", href: "/bags-by-material/eco-friendly-bags", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Synthetic Bags", desc: "Water-resistant and high-strength synthetic options for specific industrial needs.", href: "/bags-by-material/synthetic-bags", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Tote Bags", desc: "Fashionable and functional everyday tote bags for retail and corporate gifting.", href: "/bags-by-material/tote-bags", image: PRODUCT_IMAGES.flexiblePackaging },
];

export default function BagsByMaterialPage() {
  return (
    <main className="bg-cream min-h-screen">
      <CollectionHero 
        eyebrow="MATERIAL COLLECTION"
        title="Bags By Material"
        subtitleEmphasis="Crafted With Care."
        description="Discover our extensive range of packaging bags categorized by material. From sustainable jute to premium cotton, find the perfect fabric for your brand."
        countText={`Showing 1–${materialCollection.length} of ${materialCollection.length} Collections`}
        theme="original"
      />
      
      <CollectionGrid items={materialCollection} />

      <FeatureStrip />
      <CollectionCTA />
    </main>
  );
}
