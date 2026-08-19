"use client";

import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-cream pt-[120px] pb-16 md:pt-[160px] md:pb-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column (Text) */}
          <div className="w-full lg:w-[45%] flex flex-col items-start">
            <h1 className="font-display text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] mb-6 tracking-tight text-teal-900">
              <span className="block font-normal">Packaging</span>
              <span className="block heading-emphasis">That Protects.</span>
              <span className="block heading-emphasis">Impressions</span>
              <span className="block heading-emphasis">That Last.</span>
            </h1>
            
            <p className="font-body text-text-muted text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Custom packaging solutions crafted to protect your products, elevate your
              brand and care for our planet.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/boxes" className="btn-pill btn-teal inline-flex items-center">
                Explore Solutions <ArrowRight size={16} strokeWidth={1.5} className="ml-2" />
              </Link>
              
              <button className="flex items-center gap-3 font-body font-medium text-teal-900 hover:text-gold-600 transition-colors group">
                <span className="w-10 h-10 rounded-full border border-teal-900/20 group-hover:border-gold-600 flex items-center justify-center transition-colors">
                  <Play size={14} className="fill-current ml-1" />
                </span>
                Watch our story
              </button>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full lg:w-[55%] relative">
            {/* The Image Card */}
            <div className="relative aspect-[4/3] w-full rounded-card overflow-hidden shadow-card">
              <Image 
                src="https://images.unsplash.com/photo-1607344645866-eea01fb9cc2e?auto=format&fit=crop&q=80&w=1200" 
                alt="Custom kraft and cardboard packaging boxes"
                fill
                className="object-cover"
                priority
              />
              
              {/* Carousel Arrows */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-900 hover:text-gold-600 transition-colors shadow-sm">
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-900 hover:text-gold-600 transition-colors shadow-sm">
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
