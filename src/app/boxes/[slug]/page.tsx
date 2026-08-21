import type { Metadata } from "next";
import { getCategory, getProductBySlug } from "@/lib/content";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";

const CATEGORY = "boxes" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return (getCategory(CATEGORY)?.items ?? []).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug, CATEGORY);
  if (!product) return {};
  return {
    // The root layout template appends the brand name — do not repeat it here.
    title: `${product.name} — Boxes`,
    description: product.description.slice(0, 155),
    alternates: { canonical: `/${CATEGORY}/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 155),
      images: [{ url: product.image }],
    },
  };
}

export default async function BoxesProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductPageTemplate slug={slug} category={CATEGORY} />;
}
