"use client";
import { PRODUCT_IMAGES } from "@/lib/product-images";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutTeamCTA() {
  return (
    <section className="bg-cream pt-8 pb-16 md:pb-24">
      <div className="container-custom">
        <div className="relative bg-teal-900 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch min-h-[320px] shadow-xl">
          
          {/* COLUMN 1: text (LEFT side for this mirrored variant) */}
          <div className="w-full md:w-[58%] flex flex-col justify-center px-10 py-12 md:px-16 lg:px-20 gap-6">
            <p className="font-body text-gold-600 text-[10px] font-bold tracking-[0.15em] uppercase">
              OUR TEAM
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              People Behind<br className="hidden sm:block" /> Every Package
            </h2>
            
            <p className="font-body text-white/70 text-lg max-w-md">
              A team of passionate professionals working together to deliver packaging solutions that make a difference.
            </p>
            
            <Link href="/contact" className="self-start btn-pill bg-gold-600 text-white hover:bg-gold-500 shadow-sm mt-2 inline-flex items-center">
              Meet Our Team <ArrowRight size={16} strokeWidth={1.5} className="ml-1" />
            </Link>
          </div>

          {/* COLUMN 2: image (RIGHT side for this mirrored variant) */}
          <div className="w-full md:w-[42%] relative overflow-hidden bg-teal-900 h-64 md:h-auto">
            <Image 
              src={PRODUCT_IMAGES.customPackaging} 
              alt="P&P Packaging Team and Products"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
