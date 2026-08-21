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

const category = getCategory("bags-by-material")!;

export const metadata: Metadata = {
  title: "Bags by Material",
  description: category.blurb,
  alternates: { canonical: "/bags-by-material" },
};

export default function BagsByMaterialPage() {
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
          eyebrow="MATERIAL COLLECTION"
          title="Bags By Material"
          subtitleEmphasis="Crafted With Care."
          description="Discover our extensive range of packaging bags categorized by material. From sustainable jute to premium cotton, find the perfect fabric for your brand."
          image={PRODUCT_IMAGES.flexiblePackaging}
        />

        <CollectionGrid items={toCollectionItems(category.items)} />

        <FeatureStrip />
        <CollectionCTA />
      </div>
    </>
  );
}
