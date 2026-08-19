import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/content";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductDetails } from "@/components/product/ProductDetails";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { FeatureStrip } from "@/components/home/FeatureStrip";
import { FooterCTA } from "@/components/home/FooterCTA";

export async function ProductPageTemplate({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);
  if (!product) notFound();

  // Build dynamic breadcrumb
  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: product.parentLabel, href: `/${product.parentCategory}` },
    { label: product.name },
  ];

  // Use same image for all gallery positions
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

      <RelatedProducts currentCategory={product.parentCategory} currentProductSlug={product.slug} />

      <FooterCTA />
    </main>
  );
}
