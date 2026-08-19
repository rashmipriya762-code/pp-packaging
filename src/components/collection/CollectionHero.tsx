"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

interface CollectionHeroProps {
  eyebrow?: string;
  title?: string;
  subtitleEmphasis?: string;
  description?: string;
  image?: string;
  countText?: string;
}

export function CollectionHero({
  eyebrow = "OUR COLLECTION",
  title = "Packaging",
  subtitleEmphasis = "For Every Need.",
  description = "Explore our wide range of premium packaging solutions designed to protect, present, and promote your brand.",
  image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200", // Fallback flat lay image
  countText = "Showing 1–12 of 24 Collections"
}: CollectionHeroProps) {
  return (
    <>
      {/* 1. HERO BANNER: Full-width, edge-to-edge teal-900 */}
      <section className="bg-teal-900 overflow-hidden relative min-h-[460px] flex items-center">
        
        {/* RIGHT: Image (Bleeds to bottom and right screen edges) */}
        <div className="absolute top-16 right-0 bottom-0 w-full md:w-[55%] lg:w-[50%] z-0 flex items-end justify-end">
          {/* Ambient cream circular backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cream/15 rounded-full blur-[80px] pointer-events-none" />
          
          {/* Product Image */}
          <div className="relative w-full h-[120%] -mb-4"> {/* Oversized and shifted down slightly to ensure bottom bleed */}
            <Image 
              src={image}
              alt="Collection Showcase"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>
        </div>

        {/* LEFT: Text Content (Constrained to container bounds) */}
        <div className="container-custom relative z-10 w-full py-16 md:py-28">
          <div className="w-full md:w-[50%] flex flex-col justify-center items-start">
            <p className="eyebrow text-gold-600 mb-5">
              {eyebrow}
            </p>
            
            <h1 className="font-display text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
              {title} <br className="hidden sm:block" />
              <span className="italic text-gold-600">{subtitleEmphasis}</span>
            </h1>
            
            <p className="font-body text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-[420px]">
              {description}
            </p>
            
            <button className="btn-pill bg-white text-teal-900 hover:bg-cream-soft shadow-lg">
              Request a Custom Quote <ArrowRight size={16} strokeWidth={1.5} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. UTILITY ROW */}
      <section className="bg-cream py-5 border-b border-[#E5DCC9]">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left: Count */}
            <p className="font-body text-sm text-text-muted">
              {countText}
            </p>
            
            {/* Right: Sort Dropdown */}
            <div className="flex items-center gap-3">
              <span className="font-body text-sm text-teal-900 font-medium">Sort by:</span>
              <button className="flex items-center gap-8 bg-white border border-teal-900/10 rounded-full px-5 py-2.5 shadow-sm hover:border-teal-900/30 transition-colors">
                <span className="font-body text-sm font-medium text-teal-900">Featured</span>
                <ChevronDown size={16} className="text-teal-900" strokeWidth={1.5} />
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
