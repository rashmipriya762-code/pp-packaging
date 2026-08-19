"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BlogHero() {
  return (
    <section className="bg-cream pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 bg-teal-900 rounded-[2.5rem] p-10 md:p-16 relative shadow-xl overflow-hidden">
          
          {/* Ambient background glow inside the teal container */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8D9C5]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3" />

          {/* LEFT: Text */}
          <div className="w-full lg:w-[45%] flex flex-col items-start relative z-10">
            <p className="font-body text-gold-400 text-[10px] font-bold tracking-[0.15em] uppercase mb-6">
              OUR BLOG
            </p>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
              <span className="block font-normal text-white mb-1">Insights That</span>
              <span className="block italic text-gold-400">Inspire Better</span>
              <span className="block italic text-gold-400">Packaging.</span>
            </h1>
            
            <p className="font-body text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-[400px]">
              Explore expert insights, industry trends, and sustainable ideas shaping the future of packaging.
            </p>
            
            <button className="btn-pill bg-cream text-teal-900 hover:bg-white shadow-sm inline-flex items-center">
              Explore Articles 
              <span className="ml-3 w-6 h-6 rounded-full bg-teal-900/10 flex items-center justify-center">
                <ArrowRight size={14} strokeWidth={1.5} className="text-teal-900" />
              </span>
            </button>
          </div>

          {/* RIGHT: Image */}
          <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end z-10">
            {/* Soft cream/tan backdrop */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#E8D9C5]/90 rounded-full blur-2xl z-0" />
            
            <div className="relative aspect-[5/4] w-full max-w-[600px] rounded-2xl overflow-hidden shadow-card z-10 bg-transparent">
              <Image 
                src="https://images.unsplash.com/photo-1607344645866-eea01fb9cc2e?auto=format&fit=crop&q=80&w=1200" 
                alt="P&P Packaging"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
