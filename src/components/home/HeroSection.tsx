"use client";

import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-[#FAF7F2] pt-6 pb-3 md:pt-8 md:pb-4 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#F4ECE0] rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-bl-[2rem] md:rounded-bl-[3rem] rounded-tr-[1.5rem] md:rounded-tr-[2rem] rounded-br-[0.5rem] md:rounded-br-[1rem] flex flex-col lg:flex-row items-stretch overflow-hidden shadow-sm w-full">
          
          {/* Left Column (Text) */}
          <div className="w-full lg:w-[45%] flex flex-col items-start px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 shrink-0">
            <h1 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] mb-6 tracking-tight text-[#16323D]">
              <span className="block font-normal">Packaging</span>
              <span className="block font-normal">That Protects.</span>
              <span className="block italic text-[#C1872E] mt-1">Impressions</span>
              <span className="block italic text-[#C1872E]">That Last.</span>
            </h1>
            
            <p className="font-body text-[#5C6B72] text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Custom packaging solutions crafted to protect your products, elevate your
              brand and care for our planet.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/boxes" className="px-6 py-3 rounded-full border border-[#16323D] bg-[#16323D] text-white hover:bg-[#1E4653] text-sm font-bold flex items-center transition-colors">
                Explore Solutions <ArrowRight size={16} strokeWidth={2} className="ml-2" />
              </Link>
              
              <button className="flex items-center gap-3 font-body font-medium text-[#16323D] hover:text-[#C1872E] transition-colors group">
                <span className="w-10 h-10 rounded-full border border-[#16323D]/20 group-hover:border-[#C1872E] flex items-center justify-center transition-colors">
                  <Play size={14} className="fill-current ml-1" />
                </span>
                Watch our story
              </button>
            </div>
          </div>

          {/* Right Column (Image Area) */}
          <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-0">
             {/* 
                Image touches right edge. 
                Outer card (overflow-hidden) clips the top-right and bottom-right to match card shape.
                mix-blend-darken makes the image's beige bg seamlessly blend into card's bg.
             */}
             <div className="absolute inset-0 w-full h-full">
               <Image 
                 src="/images/hero-products.jpg"
                 alt="Custom packaging boxes"
                 fill
                 className="object-cover rounded-tl-[1.5rem] md:rounded-tl-[2rem] rounded-bl-[4rem] md:rounded-bl-[8rem] lg:rounded-bl-[14rem] object-right mix-blend-darken"
                 priority
               />
               
               {/* Carousel Arrows */}
               <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 flex items-center gap-3 z-10">
                 <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#16323D] hover:text-[#C1872E] transition-colors shadow-md">
                   <ChevronLeft size={18} strokeWidth={2} />
                 </button>
                 <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#16323D] hover:text-[#C1872E] transition-colors shadow-md">
                   <ChevronRight size={18} strokeWidth={2} />
                 </button>
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
