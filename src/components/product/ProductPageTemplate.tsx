import { notFound } from "next/navigation";
import { getProductBySlug, type CategorySlug } from "@/lib/content";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductDetails } from "@/components/product/ProductDetails";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { FeatureStrip } from "@/components/home/FeatureStrip";
import { FooterCTA } from "@/components/home/FooterCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo";

export function ProductPageTemplate({
  slug,
  category,
}: {
  slug: string;
  category: CategorySlug;
}) {
  // Scoped to the category, so /boxes/paper-bags 404s instead of rendering a
  // bag under a Boxes breadcrumb.
  const product = getProductBySlug(slug, category);
  if (!product) notFound();

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: product.parentLabel, href: `/${product.parentCategory}` },
    { label: product.name },
  ];

  // The gallery repeats the single product photo. Replace `product.image` with
  // a real per-product image set to make these distinct.
  const images = [product.image, product.image, product.image, product.image, product.image];

  return (
    <div className="bg-cream min-h-screen">
      <JsonLd data={productJsonLd(product)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />

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
        productName={product.name}
        description={product.description}
        features={product.features}
        specs={product.specs}
        imageUrl={product.image}
      />

      <RelatedProducts
        currentCategory={product.parentCategory}
        currentProductSlug={product.slug}
      />

      <FooterCTA />
    </div>
  );
}
