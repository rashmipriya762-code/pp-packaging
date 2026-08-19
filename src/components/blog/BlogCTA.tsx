"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BlogCTA() {
  return (
    <section className="bg-cream pt-8 pb-16 md:pb-24">
      <div className="container-custom">
        <div className="relative bg-teal-900 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch min-h-[320px] shadow-xl">
          
          {/* COLUMN 1: text (LEFT side) */}
          <div className="w-full md:w-[58%] flex flex-col justify-center px-10 py-12 md:px-16 lg:px-20 gap-6 relative">
            
            {/* Subtle gold line-art leaf decoration */}
            <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none -translate-y-1/3 -translate-x-1/4">
              <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gold-400">
                <path d="M180 320 Q 150 150 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M130 200 Q 180 180 180 140 Q 150 160 130 200" stroke="currentColor" strokeWidth="1.5" />
                <path d="M80 120 Q 140 90 140 40 Q 100 70 80 120" stroke="currentColor" strokeWidth="1.5" />
                <path d="M160 250 Q 110 240 100 280 Q 130 270 160 250" stroke="currentColor" strokeWidth="1.5" />
                <path d="M100 150 Q 40 130 20 180 Q 60 170 100 150" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
                Have a <span className="text-gold-600 italic">Packaging Project</span> in Mind?
              </h2>
              
              <p className="font-body text-white/70 text-base md:text-lg max-w-md mb-8">
                Let's create packaging that protects your products and elevates your brand.
              </p>
              
              <Link href="/contact" className="self-start btn-pill bg-gold-600 text-teal-900 hover:bg-gold-500 shadow-sm inline-flex items-center">
                Get a Quote <ArrowRight size={16} strokeWidth={1.5} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* COLUMN 2: image (RIGHT side) */}
          <div className="w-full md:w-[42%] relative overflow-hidden bg-teal-900 h-64 md:h-auto rounded-bl-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1607344645866-eea01fb9cc2e?auto=format&fit=crop&q=80&w=1200" 
              alt="Packaging Project"
              fill
              className="object-cover object-left-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
