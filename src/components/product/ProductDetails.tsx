"use client";

import { Check, ArrowRight, Download } from "lucide-react";
import Image from "next/image";

interface SpecItem {
  label: string;
  value: string;
}

interface ProductDetailsProps {
  description: string;
  features: string[];
  specs: SpecItem[];
  imageUrl: string;
}

export function ProductDetails({ description, features, specs, imageUrl }: ProductDetailsProps) {
  return (
    <section className="bg-cream section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          
          {/* LEFT: Description & Features */}
          <div className="flex flex-col">
            <h2 className="font-display text-3xl text-teal-900 mb-6">Product Description</h2>
            <p className="font-body text-text-muted leading-relaxed mb-8 text-sm lg:text-base">
              {description}
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check size={18} className="text-teal-900 shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="font-body text-sm text-teal-900">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="self-start btn-pill bg-teal-900 text-white hover:bg-teal-800 shadow-sm">
              Get Custom Quote <ArrowRight size={16} className="ml-1" />
            </button>
          </div>

          {/* CENTER: Visual Composition */}
          <div className="relative flex justify-center items-center py-10 lg:py-0 min-h-[400px]">
            {/* Dark teal circle/arch backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 md:w-80 md:h-96 bg-teal-900 rounded-t-full rounded-b-lg -z-10 overflow-hidden">
              {/* Decorative Gold Leaf Motif */}
              <svg className="absolute -right-10 bottom-10 w-48 h-48 text-gold-400 opacity-20 transform rotate-12" viewBox="0 0 200 300" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M180 320 Q 150 150 20 20" strokeLinecap="round" />
                <path d="M130 200 Q 180 180 180 140 Q 150 160 130 200" />
                <path d="M80 120 Q 140 90 140 40 Q 100 70 80 120" />
                <path d="M160 250 Q 110 240 100 280 Q 130 270 160 250" />
                <path d="M100 150 Q 40 130 20 180 Q 60 170 100 150" />
              </svg>
            </div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl">
              <Image src={imageUrl} alt="Product Spec Photo" fill className="object-contain" />
            </div>
          </div>

          {/* RIGHT: Specifications Card */}
          <div className="flex flex-col">
            <div className="bg-cream-soft rounded-2xl p-8 border border-teal-900/10 mb-6">
              <h3 className="font-display text-2xl text-teal-900 mb-6">Specifications</h3>
              <div className="space-y-4">
                {specs.map((spec, idx) => (
                  <div key={idx} className="grid grid-cols-5 gap-4 py-3 border-b border-teal-900/5 last:border-0">
                    <span className="col-span-2 font-body font-bold text-xs text-teal-900">{spec.label}</span>
                    <span className="col-span-3 font-body text-xs text-text-muted">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 px-2">
              <button className="flex items-center gap-3 text-sm text-teal-900 hover:text-gold-600 transition-colors">
                <Download size={18} strokeWidth={1.5} /> Download Datasheet
              </button>
              <button className="flex items-center gap-3 text-sm text-teal-900 hover:text-gold-600 transition-colors">
                <Download size={18} strokeWidth={1.5} /> Sustainability Guide
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
