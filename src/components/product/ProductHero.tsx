"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2, ChevronLeft, ChevronRight, Truck, Mail, ArrowRight } from "lucide-react";

interface ProductHeroProps {
  breadcrumb: { label: string; href?: string }[];
  images: string[];
  title: string;
  tagline: string;
  description: string;
  sizes: { name: string; desc: string }[];
  materials: { name: string; desc: string }[];
  priceInfo: { amount: string; unit: string; subtext?: string };
  minOrder: number;
}

export function ProductHero({
  breadcrumb,
  images,
  title,
  tagline,
  description,
  sizes,
  materials,
  priceInfo,
  minOrder,
}: ProductHeroProps) {
  const [activeSize, setActiveSize] = useState(0);
  const [activeMaterial, setActiveMaterial] = useState(0);
  const [quantity, setQuantity] = useState(minOrder);

  return (
    <section className="bg-cream pt-6 pb-16 md:pt-8 md:pb-24">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-body text-xs text-text-muted mb-8 md:mb-12">
          {breadcrumb.map((item, idx) => {
            const isLast = idx === breadcrumb.length - 1;
            return (
              <div key={idx} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link href={item.href} className="hover:text-teal-900 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className={`text-teal-900 ${isLast ? "font-bold" : ""}`}>
                    {item.label}
                  </span>
                )}
                {!isLast && <span>&gt;</span>}
              </div>
            );
          })}
        </nav>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* LEFT: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4 h-full">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible shrink-0 pb-2 md:pb-0">
              {images.slice(0, 5).map((img, idx) => (
                <button
                  key={idx}
                  className={`relative w-[72px] h-[72px] rounded-lg overflow-hidden border-2 transition-all ${
                    idx === 0 ? "border-teal-900 shadow-sm" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative w-full aspect-square md:aspect-[4/5] bg-cream-soft rounded-2xl overflow-hidden shadow-card border border-teal-900/5">
              <Image src={images[0]} alt={title} fill className="object-cover" priority />
              
              <button className="absolute top-4 right-4 w-10 h-10 bg-teal-900/90 text-white rounded-full flex items-center justify-center hover:bg-teal-900 transition-colors">
                <Maximize2 size={16} strokeWidth={1.5} />
              </button>

              <div className="absolute bottom-6 right-6 flex items-center gap-2">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-900 shadow-sm hover:text-gold-600 transition-colors">
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-900 shadow-sm hover:text-gold-600 transition-colors">
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Product Info Panel */}
          <div className="flex flex-col items-start pt-2">
            <h1 className="font-display text-4xl lg:text-[40px] text-teal-900 leading-tight mb-2">
              {title}
            </h1>
            <p className="font-display italic text-gold-600 text-xl lg:text-2xl mb-5">
              {tagline}
            </p>
            <p className="font-body text-text-muted text-base leading-relaxed mb-8">
              {description}
            </p>

            <hr className="w-full border-teal-900/10 mb-8" />

            {/* Size Options */}
            <div className="w-full mb-8">
              <p className="font-body font-bold text-sm text-teal-900 mb-3">Size</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {sizes.map((size, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSize(idx)}
                    className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all ${
                      activeSize === idx
                        ? "border-teal-900 bg-teal-900/5 ring-1 ring-teal-900"
                        : "border-teal-900/20 hover:border-teal-900/50"
                    }`}
                  >
                    <span className="font-body font-bold text-xs text-teal-900">{size.name}</span>
                    <span className="font-body text-[10px] text-text-muted mt-1">{size.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Material Options */}
            <div className="w-full mb-8">
              <p className="font-body font-bold text-sm text-teal-900 mb-3">Material</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {materials.map((mat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMaterial(idx)}
                    className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all ${
                      activeMaterial === idx
                        ? "border-teal-900 bg-teal-900/5 ring-1 ring-teal-900"
                        : "border-teal-900/20 hover:border-teal-900/50"
                    }`}
                  >
                    <span className="font-body font-bold text-xs text-teal-900">{mat.name}</span>
                    <span className="font-body text-[10px] text-text-muted mt-1">{mat.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="w-full mb-10">
              <p className="font-body font-bold text-sm text-teal-900 mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-teal-900/20 rounded-md bg-white overflow-hidden h-10 w-[140px]">
                  <button 
                    onClick={() => setQuantity(Math.max(minOrder, quantity - 100))}
                    className="w-10 h-full flex items-center justify-center text-teal-900 hover:bg-cream-soft transition-colors"
                  >−</button>
                  <div className="flex-1 text-center font-body font-semibold text-sm text-teal-900">
                    {quantity}
                  </div>
                  <button 
                    onClick={() => setQuantity(quantity + 100)}
                    className="w-10 h-full flex items-center justify-center text-teal-900 hover:bg-cream-soft transition-colors"
                  >+</button>
                </div>
                <p className="font-body text-xs text-text-muted">
                  (Min. Order {minOrder} Pcs)
                </p>
              </div>
            </div>

            {/* Price Line */}
            <div className="mb-8">
              <p className="font-body">
                <span className="text-[28px] font-bold text-teal-900">{priceInfo.amount}</span>
                <span className="text-base text-teal-900"> / {priceInfo.unit}</span>
              </p>
              {priceInfo.subtext && (
                <p className="font-body text-[10px] text-text-muted uppercase mt-0.5">
                  {priceInfo.subtext}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a href="/clients" className="btn-pill btn-teal px-8">
                Enquire Now <ArrowRight size={16} strokeWidth={1.5} className="ml-1" />
              </a>
              <a href="/clients" className="btn-pill btn-outline-teal px-8 bg-transparent border border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-white transition-all">
                Request Sample <Mail size={16} strokeWidth={1.5} className="ml-1" />
              </a>
            </div>

            {/* Delivery Note */}
            <div className="flex items-center gap-2 text-teal-900">
              <Truck size={14} strokeWidth={1.5} />
              <p className="font-body text-xs font-medium">Estimated Delivery: 5–7 Business Days</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
