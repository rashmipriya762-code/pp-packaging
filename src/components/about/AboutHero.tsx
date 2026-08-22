"use client";
import { PRODUCT_IMAGES } from "@/lib/product-images";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutHero() {
  return (
    <section className="bg-[#FAF7F2] pt-6 pb-3 md:pt-8 md:pb-4 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#16323D] rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-bl-[2rem] md:rounded-bl-[3rem] rounded-tr-[1.5rem] md:rounded-tr-[2rem] rounded-br-[0.5rem] md:rounded-br-[1rem] flex flex-col lg:flex-row items-stretch overflow-hidden shadow-sm w-full">
          
          {/* Left Column (Text) */}
          <div className="w-full lg:w-[45%] flex flex-col items-start px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 shrink-0">
            <p className="eyebrow text-gold-400 mb-6 font-bold tracking-widest text-xs uppercase">ABOUT US</p>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-white mb-6">
              <span className="block font-normal">Packaging with</span>
              <span className="block font-normal">Purpose.</span>
              <span className="block italic text-gold-400 mt-1">Built on Trust.</span>
              <span className="block italic text-gold-400">Driven by Impact.</span>
            </h1>
            
            <p className="font-body text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              At P&P Packaging, we believe great packaging does more than protect a product — it builds connections, delivers promises, and shapes a better tomorrow.
            </p>
            
            <button className="px-6 py-3 rounded-full bg-[#F4ECE0] text-[#16323D] hover:bg-white text-sm font-bold flex items-center transition-colors shadow-sm">
              Our Journey <ArrowRight size={16} strokeWidth={2} className="ml-2" />
            </button>
          </div>

          {/* Right Column (Image Area with Light Cream Box) */}
          <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-0">
             <div className="absolute inset-0 w-full h-full bg-[#F4ECE0] rounded-tl-[1.5rem] md:rounded-tl-[2rem] rounded-bl-[4rem] md:rounded-bl-[8rem] lg:rounded-bl-[14rem] overflow-hidden">
               <Image 
                 src="/images/hero-products.jpg"
                 alt="P&P Packaging Solutions"
                 fill
                 className="object-cover object-right mix-blend-darken"
                 priority
               />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
