import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { ALL_PRODUCTS } from "@/lib/content";

interface RelatedProductsProps {
  currentCollection?: string;
  currentProductSlug?: string;
}

export function RelatedProducts({ currentCollection, currentProductSlug }: RelatedProductsProps) {
  // Show products from the same collection, or a fallback sample from all products
  let related = currentCollection
    ? ALL_PRODUCTS.filter(
        (p) => p.collectionSlug === currentCollection && p.slug !== currentProductSlug
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
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="flex flex-col w-[260px] lg:w-auto shrink-0 snap-start bg-white rounded-2xl overflow-hidden shadow-sm border border-teal-900/5 group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full bg-cream-soft overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-body font-bold text-sm text-teal-900 mb-1 group-hover:text-gold-600 transition-colors">
                  {product.name}
                </h3>
                <p className="font-body text-xs text-teal-900/60 mb-4 line-clamp-2 leading-relaxed">
                  {product.tagline}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-teal-900/5 pt-4">
                  <span className="font-body font-bold text-sm text-teal-900">
                    From {product.priceInfo.amount}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-teal-900/20 flex items-center justify-center text-teal-900 group-hover:bg-teal-900 group-hover:text-white transition-colors">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
