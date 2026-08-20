import { PRODUCT_IMAGES } from "@/lib/product-images";
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
  { name: "Corporates", desc: "Professional gifting and event bags for corporate branding.", href: "/bags-by-industry/corporates", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Retail Stores & Brands", desc: "High-quality shopping bags that elevate the customer retail experience.", href: "/bags-by-industry/retail", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Sweet Industry", desc: "Festive and traditional bags perfectly sized for sweet boxes.", href: "/bags-by-industry/sweet-industry", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Cake Industry", desc: "Wide-base bags designed specifically to keep cake boxes flat and secure.", href: "/bags-by-industry/cake-industry", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Restaurants & Cafes", desc: "Reliable takeaway and delivery bags for the food and beverage sector.", href: "/bags-by-industry/restaurants", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Jewellers", desc: "Luxurious, compact, and highly finished bags for precious jewelry items.", href: "/bags-by-industry/jewellers", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Fashion Designers", desc: "Bespoke, trend-setting packaging that matches high-end fashion identities.", href: "/bags-by-industry/fashion", image: PRODUCT_IMAGES.flexiblePackaging },
  { name: "Events", desc: "Bulk, customizable goodie bags and welcome kits for large-scale events.", href: "/bags-by-industry/events", image: PRODUCT_IMAGES.flexiblePackaging },
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
        image={PRODUCT_IMAGES.flexiblePackaging}
      />
      
      <CollectionGrid items={industryCollection} />

      <FeatureStrip />
      <CollectionCTA />
    </main>
  );
}
