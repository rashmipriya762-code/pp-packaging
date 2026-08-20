"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    title: "Corrugated Boxes",
    desc: "Durable & safe packaging for every delivery.",
    bgClass: "bg-[#0F292E] text-white", // Deep dark teal
    imgUrl: "/images/bestsellers/img1.png",
    href: "/boxes",
  },
  {
    title: "Rigid Boxes",
    desc: "Premium packaging for luxury products.",
    bgClass: "bg-[#EFE8DD] text-[#0F292E]", // Warm cream, dark text
    imgUrl: "/images/bestsellers/img2.png",
    href: "/boxes",
  },
  {
    title: "Flexible Packaging",
    desc: "Lightweight, versatile and cost-effective.",
    bgClass: "bg-[#141C2A] text-white", // Deep navy/blue
    imgUrl: "/images/bestsellers/img3.png",
    href: "/bags-by-material",
  },
  {
    title: "Protective Packaging",
    desc: "Engineered solutions that keep products safe.",
    bgClass: "bg-[#C49340] text-white", // Warm gold/mustard
    imgUrl: "/images/bestsellers/img4.png",
    href: "/boxes",
  },
  {
    title: "Custom Packaging",
    desc: "Unique designs that make your brand stand out.",
    bgClass: "bg-[#EFE8DD] text-[#0F292E]", // Warm cream, dark text
    imgUrl: "/images/bestsellers/img5.png",
    href: "/boxes",
  },
];

export function BestSellers() {
  return (
    <section className="bg-[#FAF7F2] pt-12 pb-12 md:pt-16 md:pb-16">
      <div className="container-custom">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3 font-bold tracking-widest text-xs text-[#C49340] uppercase">BEST SELLERS</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F292E] leading-[1.1]">Our Most Loved<br />Packaging Solutions</h2>
          </div>
          <Link 
            href="/boxes" 
            className="px-6 py-2.5 rounded-full border border-[#0F292E] bg-[#FAF7F2] text-[#0F292E] hover:bg-[#0F292E] hover:text-white text-sm font-bold flex items-center transition-colors shrink-0"
          >
            Shop Collection <ArrowRight size={16} strokeWidth={2} className="ml-2" />
          </Link>
        </div>

        {/* Cards Row */}
        <div className="relative">
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-6 snap-x snap-mandatory no-scrollbar pb-6 lg:pb-0">
            {products.map((product, idx) => (
              <Link
                key={idx}
                href={product.href}
                className={`flex flex-col w-[260px] lg:w-auto shrink-0 snap-start rounded-2xl overflow-hidden shadow-sm transition-transform hover:-translate-y-1 group ${product.bgClass}`}
              >
                {/* Top Zone - Image Area */}
                <div className="relative aspect-[4/3] w-full pt-8 px-6 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-end justify-center">
                    <Image
                      src={product.imgUrl}
                      alt={product.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl object-bottom"
                      sizes="(max-width: 1024px) 260px, 20vw"
                    />
                  </div>
                </div>

                {/* Bottom Zone - Content Area (No CTA) */}
                <div className="px-6 pb-8 pt-4 flex flex-col flex-1">
                  <h3 className="font-display text-xl leading-tight mb-2 opacity-95 group-hover:opacity-100 transition-opacity">
                    {product.title}
                  </h3>
                  <p className="font-body text-sm opacity-80 leading-relaxed line-clamp-2">
                    {product.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Carousel Arrows (Mobile/Tablet only or Decorative on Desktop) */}
          <div className="flex items-center justify-end gap-2 mt-6 lg:mt-8">
            <button className="w-10 h-10 bg-white rounded-full shadow-sm border border-teal-900/10 flex items-center justify-center text-[#0F292E] hover:text-[#C49340] transition-colors">
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button className="w-10 h-10 bg-white rounded-full shadow-sm border border-teal-900/10 flex items-center justify-center text-[#0F292E] hover:text-[#C49340] transition-colors">
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
