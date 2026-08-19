import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, getCollectionBySlug, ALL_PRODUCTS } from "@/lib/content";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductDetails } from "@/components/product/ProductDetails";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { FeatureStrip } from "@/components/home/FeatureStrip";
import { FooterCTA } from "@/components/home/FooterCTA";

// Pre-generate all known product routes
export function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — P&P Packaging`,
    description: product.description.slice(0, 155),
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const parentCollection = getCollectionBySlug(product.collectionSlug);

  // Build dynamic breadcrumb with correct collection link
  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: product.parentCategory === "bags-by-material" ? "Bags by Material" : product.parentCategory === "bags-by-industry" ? "Bags by Industry" : "Boxes", href: `/${product.parentCategory}` },
    { label: parentCollection?.name ?? product.collectionName, href: `/collections/${product.collectionSlug}` },
    { label: product.name },
  ];

  // Use same image for all gallery positions (real images can be added later)
  const images = [product.image, product.image, product.image, product.image, product.image];

  return (
    <main className="bg-cream min-h-screen">
      <ProductHero
        breadcrumb={breadcrumb}
        images={images}
        title={product.name}
        tagline={product.tagline}
        description={product.description}
        sizes={product.sizes}
        materials={product.materials}
        priceInfo={product.priceInfo}
        minOrder={product.minOrder}
      />

      <FeatureStrip />

      <ProductDetails
        description={product.description}
        features={product.features}
        specs={product.specs}
        imageUrl={product.image}
      />

      <RelatedProducts currentCollection={product.collectionSlug} currentProductSlug={product.slug} />

      <FooterCTA />
    </main>
  );
}
