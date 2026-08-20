"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="bg-cream pt-8 pb-12 md:pb-16">
      <div className="container-custom">
        <div className="relative bg-teal-900 rounded-card overflow-hidden flex flex-col md:flex-row items-stretch min-h-[320px] shadow-xl">
          
          {/* COLUMN 1: image — its own box, fixed width, own overflow-hidden */}
          <div className="w-full md:w-[42%] relative overflow-hidden bg-teal-900 h-64 md:h-auto">
            <Image 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200" 
              alt="Packaging boxes flat lay"
              fill
              className="object-cover"
            />
          </div>

          {/* COLUMN 2: text — its own box, remaining width, never touched by column 1 */}
          <div className="w-full md:w-[58%] flex flex-col justify-center px-10 py-12 md:px-16 lg:px-20 gap-6">
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              Ready to Elevate<br className="hidden sm:block" /> Your Packaging?
            </h2>
            
            <p className="font-body text-white/70 text-lg max-w-md">
              Let's create packaging that protects your products and promotes your brand.
            </p>
            
            <button className="self-start btn-pill bg-white text-teal-900 hover:bg-cream-soft shadow-sm mt-2">
              Get a Quote <ArrowRight size={16} strokeWidth={1.5} className="ml-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
