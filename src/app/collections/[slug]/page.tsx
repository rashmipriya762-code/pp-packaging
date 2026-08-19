import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { getCollectionBySlug, ALL_COLLECTIONS } from "@/lib/content";
import { FeatureStrip } from "@/components/home/FeatureStrip";
import { CollectionCTA } from "@/components/collection/CollectionCTA";

// Pre-generate all known collection routes
export function generateStaticParams() {
  return ALL_COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return {};
  return {
    title: `${collection.name} — P&P Packaging`,
    description: collection.description.slice(0, 155),
  };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const { products } = collection;

  return (
    <main className="bg-cream min-h-screen">
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="bg-teal-900 overflow-hidden relative min-h-[460px] flex items-center">
        {/* Ambient backdrop */}
        <div className="absolute top-1/2 right-[25%] -translate-y-1/2 w-[350px] h-[350px] bg-cream/15 rounded-full blur-[80px] pointer-events-none" />

        {/* RIGHT: Hero Image */}
        <div className="absolute top-0 right-0 bottom-0 w-full md:w-[55%] z-0">
          <Image
            src={collection.image}
            alt={collection.name}
            fill
            className="object-cover object-right-bottom opacity-50 md:opacity-80"
            priority
          />
          {/* Gradient overlay so text is readable on mobile */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 md:via-transparent to-transparent" />
        </div>

        {/* LEFT: Text */}
        <div className="container-custom relative z-10 w-full py-16 md:py-28">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-body text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href={`/${collection.parentCategory}`} className="hover:text-white transition-colors">{collection.parentLabel}</Link>
            <ChevronRight size={12} />
            <span className="text-white/90">{collection.name}</span>
          </div>

          <div className="w-full md:w-[50%] flex flex-col justify-center items-start">
            <p className="font-body text-gold-400 text-[10px] font-bold tracking-[0.15em] uppercase mb-5">
              {collection.parentLabel.toUpperCase()}
            </p>

            <h1 className="font-display text-5xl lg:text-6xl text-white leading-[1.05] mb-4">
              {collection.name}
            </h1>
            <p className="font-display text-2xl text-gold-400 italic mb-6">{collection.tagline}</p>

            <p className="font-body text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-[420px]">
              {collection.description}
            </p>

            <button className="btn-pill bg-white text-teal-900 hover:bg-cream-soft shadow-lg">
              Request a Custom Quote <ArrowRight size={16} strokeWidth={1.5} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ── TOOLBAR ─────────────────────────────────────────────── */}
      <section className="bg-cream py-5 border-b border-[#E5DCC9]">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-teal-900/60">
              Showing 1–{products.length} of {products.length} Products
            </p>
            <div className="flex items-center gap-3">
              <span className="font-body text-sm text-teal-900 font-medium">Sort by:</span>
              <div className="flex items-center gap-8 bg-white border border-teal-900/10 rounded-full px-5 py-2.5 shadow-sm">
                <span className="font-body text-sm font-medium text-teal-900">Featured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ────────────────────────────────────────── */}
      <section className="bg-cream py-16">
        <div className="container-custom">
          {products.length === 0 ? (
            <div className="text-center py-24 text-teal-900/60 font-body">
              No products found in this collection yet. Check back soon!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, idx) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-[#E5DCC9] bg-cream-soft hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square w-full overflow-hidden bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="px-6 pb-8 pt-5 flex flex-col flex-1">
                    <h3 className="font-display text-xl text-teal-900 mb-2 group-hover:text-gold-600 transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-teal-900/70 leading-relaxed mb-5 flex-1">
                      {product.tagline}
                    </p>
                    <div className="flex items-center justify-between border-t border-black/5 pt-4 mt-auto">
                      <span className="inline-flex items-center text-sm font-medium text-teal-900 group-hover:text-gold-600 transition-colors">
                        View Product
                        <ArrowRight size={15} strokeWidth={1.5} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="font-body text-xs text-teal-900/50">
                        From {product.priceInfo.amount}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── FEATURES + CTA ──────────────────────────────────────── */}
      <FeatureStrip />
      <CollectionCTA />
    </main>
  );
}
