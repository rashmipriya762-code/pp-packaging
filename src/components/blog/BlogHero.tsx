"use client";
import { PRODUCT_IMAGES } from "@/lib/product-images";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BlogHero() {
  return (
    <section className="bg-[#FAF7F2] pt-4 pb-3 md:pt-6 md:pb-4 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#16323D] rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-bl-[2rem] md:rounded-bl-[3rem] rounded-tr-[1.5rem] md:rounded-tr-[2rem] rounded-br-[0.5rem] md:rounded-br-[1rem] flex flex-col lg:flex-row items-stretch overflow-hidden shadow-sm w-full lg:max-h-[580px]">
          
          {/* Left Column (Text) */}
          <div className="w-full lg:w-[45%] flex flex-col items-start px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12 shrink-0 justify-center">
            <p className="eyebrow text-gold-400 mb-4 font-bold tracking-widest text-xs uppercase">OUR BLOG</p>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight text-white mb-4 lg:mb-6">
              <span className="block font-normal">Insights That</span>
              <span className="block italic text-gold-400 mt-1">Inspire Better</span>
              <span className="block italic text-gold-400">Packaging.</span>
            </h1>
            
            <p className="font-body text-white/80 text-sm md:text-base leading-relaxed mb-6 lg:mb-8 max-w-md">
              Explore expert insights, industry trends, and sustainable ideas shaping the future of packaging.
            </p>
            
            <button className="px-6 py-3 rounded-full bg-[#F4ECE0] text-[#16323D] hover:bg-white text-sm font-bold flex items-center transition-colors shadow-sm">
              Explore Articles <ArrowRight size={16} strokeWidth={2} className="ml-2" />
            </button>
          </div>

          {/* Right Column (Image Area with Light Cream Box) */}
          <div className="w-full lg:w-[55%] relative min-h-[300px] md:min-h-[360px] lg:min-h-0">
             <div className="absolute inset-0 w-full h-full bg-[#F4ECE0] rounded-tl-[1.5rem] md:rounded-tl-[2rem] rounded-bl-[4rem] md:rounded-bl-[8rem] lg:rounded-bl-[14rem] overflow-hidden p-4 md:p-6 lg:p-8 flex items-center justify-center">
               <Image 
                 src="/images/hero-products.jpg" 
                 alt="P&P Packaging Blog"
                 fill
                 className="object-contain object-center mix-blend-darken p-4 md:p-6 lg:p-8"
                 priority
               />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
