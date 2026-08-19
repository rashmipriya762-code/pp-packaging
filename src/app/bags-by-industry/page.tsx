import type { Metadata } from "next";
import { CollectionHero } from "@/components/collection/CollectionHero";
import { CollectionGrid } from "@/components/collection/CollectionGrid";
import { CollectionCTA } from "@/components/collection/CollectionCTA";
import { FeatureStrip } from "@/components/home/FeatureStrip";

export const metadata: Metadata = {
  title: "Bags by Industry — P&P Packaging",
  description: "Explore our collection of packaging bags tailored for specific industries, including Corporates, Retail, Sweet, and more.",
};

const industryCollection = [
  { name: "Corporates", desc: "Professional gifting and event bags for corporate branding.", href: "/collections/corporates", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" },
  { name: "Retail Stores & Brands", desc: "High-quality shopping bags that elevate the customer retail experience.", href: "/collections/retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" },
  { name: "Sweet Industry", desc: "Festive and traditional bags perfectly sized for sweet boxes.", href: "/collections/sweet-industry", image: "https://images.unsplash.com/photo-1606323497184-754d9c73361a?auto=format&fit=crop&q=80&w=600" },
  { name: "Cake Industry", desc: "Wide-base bags designed specifically to keep cake boxes flat and secure.", href: "/collections/cake-industry", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=600" },
  { name: "Restaurants & Cafes", desc: "Reliable takeaway and delivery bags for the food and beverage sector.", href: "/collections/restaurants", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600" },
  { name: "Jewellers", desc: "Luxurious, compact, and highly finished bags for precious jewelry items.", href: "/collections/jewellers", image: "https://images.unsplash.com/photo-1599643478514-4a4208006eb4?auto=format&fit=crop&q=80&w=600" },
  { name: "Fashion Designers", desc: "Bespoke, trend-setting packaging that matches high-end fashion identities.", href: "/collections/fashion", image: "https://images.unsplash.com/photo-1550614000-4b95dd2458bf?auto=format&fit=crop&q=80&w=600" },
  { name: "Events", desc: "Bulk, customizable goodie bags and welcome kits for large-scale events.", href: "/collections/events", image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=600" },
];

export default function BagsByIndustryPage() {
  return (
    <main className="bg-cream min-h-screen">
      <CollectionHero 
        eyebrow="INDUSTRY COLLECTION"
        title="Bags By Industry"
        subtitleEmphasis="Tailored For You."
        description="Every industry has unique packaging requirements. Explore our specialized solutions designed to meet the exact demands of your sector."
        countText={`Showing 1–${industryCollection.length} of ${industryCollection.length} Collections`}
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
      />
      
      <CollectionGrid items={industryCollection} />

      <FeatureStrip />
      <CollectionCTA />
    </main>
  );
}
