"use client";
import { PRODUCT_IMAGES } from "@/lib/product-images";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

interface CollectionHeroProps {
  eyebrow?: string;
  title?: string;
  subtitleEmphasis?: string;
  description?: string;
  image?: string;
  countText?: string;
  theme?: "original" | "blue";
}

export function CollectionHero({
  eyebrow = "OUR COLLECTION",
  title = "Packaging",
  subtitleEmphasis = "For Every Need.",
  description = "Explore our wide range of premium packaging solutions designed to protect, present, and promote your brand.",
  image = "/images/hero-products.jpg",
  countText = "Showing 1–12 of 24 Collections",
  theme = "original"
}: CollectionHeroProps) {
  const isBlue = theme === "blue";

  return (
    <>
      <section className="bg-[#FAF7F2] pt-6 pb-3 md:pt-8 md:pb-4 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className={`${isBlue ? 'bg-[#16323D]' : 'bg-[#F4ECE0]'} rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-bl-[2rem] md:rounded-bl-[3rem] rounded-tr-[1.5rem] md:rounded-tr-[2rem] rounded-br-[0.5rem] md:rounded-br-[1rem] flex flex-col lg:flex-row items-stretch overflow-hidden shadow-sm w-full`}>
            
            {/* Left Column (Text) */}
            <div className="w-full lg:w-[45%] flex flex-col items-start px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 shrink-0">
              <p className={`eyebrow ${isBlue ? 'text-gold-400' : 'text-gold-600'} mb-6 font-bold tracking-widest text-xs uppercase`}>
                {eyebrow}
              </p>
              
              <h1 className={`font-display text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight ${isBlue ? 'text-white' : 'text-[#16323D]'} mb-6`}>
                <span className="block font-normal">{title}</span>
                <span className={`block italic ${isBlue ? 'text-gold-400' : 'text-[#C1872E]'} mt-1`}>{subtitleEmphasis}</span>
              </h1>
              
              <p className={`font-body ${isBlue ? 'text-white/80' : 'text-[#5C6B72]'} text-base md:text-lg leading-relaxed mb-10 max-w-md`}>
                {description}
              </p>
              
              <button className={isBlue 
                ? "px-6 py-3 rounded-full bg-[#F4ECE0] text-[#16323D] hover:bg-white text-sm font-bold flex items-center transition-colors shadow-sm"
                : "px-6 py-3 rounded-full border border-[#16323D] bg-[#16323D] text-white hover:bg-[#1E4653] text-sm font-bold flex items-center transition-colors"
              }>
                Request a Custom Quote <ArrowRight size={16} strokeWidth={2} className="ml-2" />
              </button>
            </div>

            {/* Right Column (Image Area with Light Cream Box) */}
            <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-0">
               <div className="absolute inset-0 w-full h-full bg-[#F4ECE0] rounded-tl-[1.5rem] md:rounded-tl-[2rem] rounded-bl-[4rem] md:rounded-bl-[8rem] lg:rounded-bl-[14rem] overflow-hidden">
                 <Image 
                   src="/images/hero-products.jpg"
                   alt="Collection Showcase"
                   fill
                   className="object-cover object-right mix-blend-darken"
                   priority
                 />
               </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. UTILITY ROW */}
      <section className="bg-cream pb-8">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 border-b border-transparent">
            {/* Left: Count */}
            <p className="font-body text-[13px] text-teal-900/60 font-medium tracking-wide">
              {countText}
            </p>
            
            {/* Right: Sort Dropdown */}
            <div className="flex items-center gap-3">
              <span className="font-body text-[13px] text-teal-900/60 font-medium">Sort by:</span>
              <button className="flex items-center gap-6 bg-white border border-[#E5DCC9] rounded-full px-4 py-1.5 shadow-sm hover:border-teal-900/30 transition-colors">
                <span className="font-body text-[13px] font-semibold text-teal-900">Featured</span>
                <ChevronDown size={14} className="text-teal-900" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
