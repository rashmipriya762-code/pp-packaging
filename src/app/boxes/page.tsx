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

const category = getCategory("boxes")!;

export const metadata: Metadata = {
  title: "Packaging Boxes Collection",
  description: category.blurb,
  alternates: { canonical: "/boxes" },
};

export default function BoxesCollectionPage() {
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
          eyebrow="BOXES COLLECTION"
          title="Custom Boxes"
          subtitleEmphasis="Built To Protect."
          description="From sturdy corrugated shipping boxes to elegant retail packaging, explore our comprehensive range of box solutions tailored for every industry."
          image={PRODUCT_IMAGES.corrugatedBoxes}
        />

        <CollectionGrid items={toCollectionItems(category.items)} />

        <FeatureStrip />
        <CollectionCTA />
      </div>
    </>
  );
}
