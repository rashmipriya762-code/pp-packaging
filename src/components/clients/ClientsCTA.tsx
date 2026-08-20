"use client";
import { PRODUCT_IMAGES } from "@/lib/product-images";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ClientsCTA() {
  return (
    <section className="bg-cream pt-8 pb-16 md:pb-24">
      <div className="container-custom">
        <div className="relative bg-teal-900 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch min-h-[320px] shadow-xl">
          
          {/* COLUMN 1: image (LEFT side for this CTA) */}
          <div className="w-full md:w-[42%] relative overflow-hidden bg-teal-900 h-64 md:h-auto rounded-bl-2xl">
            <Image 
              src={PRODUCT_IMAGES.protectivePackaging} 
              alt="Packaging Boxes and Materials"
              fill
              className="object-cover"
            />
          </div>

          {/* COLUMN 2: text (RIGHT side for this CTA) */}
          <div className="w-full md:w-[58%] flex flex-col justify-center px-10 py-12 md:px-16 lg:px-20 gap-6">
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              <span className="text-white block">Let's Build Something</span>
              <span className="text-gold-600 block">Great Together.</span>
            </h2>
            
            <p className="font-body text-white/70 text-lg max-w-md">
              Join hundreds of brands who trust P&P Packaging to deliver packaging that makes an impact.
            </p>
            
            <Link href="/contact" className="self-start btn-pill bg-gold-600 text-teal-900 hover:bg-gold-500 shadow-sm mt-2 inline-flex items-center">
              Become Our Client <ArrowRight size={16} strokeWidth={1.5} className="ml-2" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
