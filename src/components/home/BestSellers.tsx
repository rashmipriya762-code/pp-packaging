"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES, productHref } from "@/lib/content";

const bandStyles = [
  "bg-teal-900 text-white",
  "bg-cream-soft text-teal-900",
  "bg-teal-800 text-white",
  "bg-gold-600 text-white",
  "bg-cream-soft text-teal-900",
];

// Five real products, drawn from the catalogue so every card links to a page
// that exists. Reorder the catalogue to change what is featured here.
const featured = [
  ...(CATEGORIES.find((c) => c.slug === "boxes")?.items ?? []).slice(0, 3),
  ...(CATEGORIES.find((c) => c.slug === "bags-by-material")?.items ?? []).slice(0, 2),
];

export function BestSellers() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: direction * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="bg-cream pt-12 pb-12 md:pt-16 md:pb-16">
      <div className="container-custom">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3 text-teal-900/60">Best Sellers</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-teal-900 leading-[1.1]">
              Our Most Loved
              <br />
              Packaging Solutions
            </h2>
          </div>
          <Link href="/boxes" className="btn-pill btn-outline-teal shrink-0">
            Shop Collection
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        {/* Cards Row */}
        <div className="relative">
          <div
            id="best-sellers"
            ref={scroller}
            className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-6 snap-x snap-mandatory no-scrollbar pb-6 lg:pb-0"
          >
            {featured.map((product, idx) => (
              <Link
                href={productHref(product)}
                key={product.slug}
                className="flex flex-col w-[280px] lg:w-auto shrink-0 snap-start rounded-card overflow-hidden shadow-card transition-transform hover:-translate-y-1 group"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-soft">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 280px, 20vw"
                  />
                </div>

                {/* Text Band */}
                <div
                  className={`p-6 flex-grow flex flex-col justify-center ${
                    bandStyles[idx % bandStyles.length]
                  }`}
                >
                  <h3 className="font-body font-bold text-lg mb-2">{product.name}</h3>
                  <p className="font-body text-sm leading-relaxed opacity-80">
                    {product.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Carousel arrows — only meaningful while the row scrolls */}
          <div className="flex lg:hidden items-center justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll best sellers left"
              aria-controls="best-sellers"
              className="w-10 h-10 bg-white rounded-full shadow-sm border border-teal-900/10 flex items-center justify-center text-teal-900 hover:text-gold-600 transition-colors"
            >
              <ChevronLeft size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll best sellers right"
              aria-controls="best-sellers"
              className="w-10 h-10 bg-white rounded-full shadow-sm border border-teal-900/10 flex items-center justify-center text-teal-900 hover:text-gold-600 transition-colors"
            >
              <ChevronRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
