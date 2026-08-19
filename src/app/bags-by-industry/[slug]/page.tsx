import type { Metadata } from "next";
import { getProductBySlug, bagsByIndustry } from "@/lib/content";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";

export function generateStaticParams() {
  return bagsByIndustry.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Bags by Industry | P&P Packaging`,
    description: product.description.slice(0, 155),
  };
}

export default async function BagsByIndustryProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductPageTemplate slug={slug} />;
}
