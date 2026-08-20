import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ALL_PRODUCTS } from "@/lib/content";
import { ProductCard } from "@/components/shared/ProductCard";

interface RelatedProductsProps {
  currentCategory?: string;
  currentProductSlug?: string;
}

export function RelatedProducts({ currentCategory, currentProductSlug }: RelatedProductsProps) {
  // Show products from the same category, or a fallback sample from all products
  let related = currentCategory
    ? ALL_PRODUCTS.filter(
        (p) => p.parentCategory === currentCategory && p.slug !== currentProductSlug
      )
    : [];

  // If fewer than 4, pad with other products
  if (related.length < 4) {
    const others = ALL_PRODUCTS.filter(
      (p) => p.slug !== currentProductSlug && !related.find((r) => r.slug === p.slug)
    );
    related = [...related, ...others].slice(0, 5);
  } else {
    related = related.slice(0, 5);
  }

  return (
    <section className="bg-cream-soft section-padding">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl text-teal-900">You May Also Like</h2>
          
          <div className="hidden sm:flex items-center gap-2">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-900 border border-teal-900/10 shadow-sm hover:text-gold-600 transition-colors">
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-900 border border-teal-900/10 shadow-sm hover:text-gold-600 transition-colors">
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-6 snap-x snap-mandatory no-scrollbar pb-6 lg:pb-0">
          {related.map((product) => (
            <ProductCard
              key={product.slug}
              href={`/${product.parentCategory}/${product.slug}`}
              image={product.image}
              title={product.name}
              description={product.tagline}
              bgClass="bg-white text-teal-900 border border-teal-900/5"
              price={product.priceInfo.amount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
