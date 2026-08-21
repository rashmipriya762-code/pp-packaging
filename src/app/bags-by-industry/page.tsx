import type { Metadata } from "next";
import { CollectionHero } from "@/components/collection/CollectionHero";
import { CollectionGrid } from "@/components/collection/CollectionGrid";
import { CollectionCTA } from "@/components/collection/CollectionCTA";
import { FeatureStrip } from "@/components/home/FeatureStrip";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { getCategory } from "@/lib/content";
import { toCollectionItems } from "@/lib/collection";
import { PRODUCT_IMAGES } from "@/lib/product-images";

const category = getCategory("bags-by-industry")!;

export const metadata: Metadata = {
  title: "Bags by Industry",
  description: category.blurb,
  alternates: { canonical: "/bags-by-industry" },
};

export default function BagsByIndustryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: category.label, href: `/${category.slug}` },
        ])}
      />
      <div className="bg-cream min-h-screen">
        <CollectionHero
          eyebrow="INDUSTRY COLLECTION"
          title="Bags By Industry"
          subtitleEmphasis="Tailored For You."
          description="Every industry has unique packaging requirements. Explore our specialized solutions designed to meet the exact demands of your sector."
          image={PRODUCT_IMAGES.flexiblePackaging}
        />

        <CollectionGrid items={toCollectionItems(category.items)} />

        <FeatureStrip />
        <CollectionCTA />
      </div>
    </>
  );
}
