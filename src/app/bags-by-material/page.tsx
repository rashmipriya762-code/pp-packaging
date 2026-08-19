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
  { name: "Paper Bags", desc: "Classic, versatile, and eco-friendly paper bags for retail and food.", href: "/collections/paper-bags", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600" },
  { name: "Jute Bags", desc: "Durable and rustic jute bags, perfect for heavy items and sustainable branding.", href: "/collections/jute-bags", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" },
  { name: "Cotton Bags", desc: "Premium, reusable cotton bags that offer a soft touch and high-quality print surface.", href: "/collections/cotton-bags", image: "https://images.unsplash.com/photo-1597464016147-fc7c88b695e9?auto=format&fit=crop&q=80&w=600" },
  { name: "Canvas Bags", desc: "Heavy-duty canvas bags for maximum durability and long-term reuse.", href: "/collections/canvas-bags", image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=600" },
  { name: "Non-Woven Bags", desc: "Cost-effective, lightweight, and vibrant non-woven bags for promotions.", href: "/collections/non-woven-bags", image: "https://images.unsplash.com/photo-1605814513106-c89b33a5f4ce?auto=format&fit=crop&q=80&w=600" },
  { name: "Organic & Eco-Friendly Bags", desc: "100% certified organic materials for the environmentally conscious brand.", href: "/collections/eco-friendly-bags", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600" },
  { name: "Synthetic Bags", desc: "Water-resistant and high-strength synthetic options for specific industrial needs.", href: "/collections/synthetic-bags", image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600" },
  { name: "Tote Bags", desc: "Fashionable and functional everyday tote bags for retail and corporate gifting.", href: "/collections/tote-bags", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=600" },
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
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200"
      />
      
      <CollectionGrid items={materialCollection} />

      <FeatureStrip />
      <CollectionCTA />
    </main>
  );
}
