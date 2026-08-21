"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Truck, Mail } from "lucide-react";
import { EnquireNowButton } from "@/components/shared/EnquireNowButton";

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
  const gallery = images.slice(0, 5);
  const [activeImage, setActiveImage] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [activeMaterial, setActiveMaterial] = useState(0);
  const [quantity, setQuantity] = useState(minOrder);

  const step = (delta: number) =>
    setActiveImage((current) => (current + delta + gallery.length) % gallery.length);

  // Carried into the enquiry modal so the selections above are not thrown away.
  const enquirySummary = [
    title,
    sizes[activeSize]?.name && `Size: ${sizes[activeSize].name}`,
    materials[activeMaterial]?.name && `Material: ${materials[activeMaterial].name}`,
    `Qty: ${quantity}`,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <section className="bg-cream pt-6 pb-16 md:pt-8 md:pb-24">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-body text-xs text-text-muted mb-8 md:mb-12"
        >
          {breadcrumb.map((item, idx) => {
            const isLast = idx === breadcrumb.length - 1;
            return (
              <div key={item.label} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link href={item.href} className="hover:text-teal-900 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={`text-teal-900 ${isLast ? "font-bold" : ""}`}
                  >
                    {item.label}
                  </span>
                )}
                {!isLast && <span aria-hidden="true">&gt;</span>}
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
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  aria-label={`Show image ${idx + 1} of ${gallery.length}`}
                  aria-pressed={activeImage === idx}
                  className={`relative w-[72px] h-[72px] rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === idx
                      ? "border-teal-900 shadow-sm"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill sizes="72px" className="object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative w-full aspect-square md:aspect-[4/5] bg-cream-soft rounded-2xl overflow-hidden shadow-card border border-teal-900/5">
              <Image
                src={gallery[activeImage]}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain"
                priority
              />

              {gallery.length > 1 && (
                <div className="absolute bottom-6 right-6 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous image"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-900 shadow-sm hover:text-gold-600 transition-colors"
                  >
                    <ChevronLeft size={18} strokeWidth={1.5} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next image"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-900 shadow-sm hover:text-gold-600 transition-colors"
                  >
                    <ChevronRight size={18} strokeWidth={1.5} aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Product Info Panel */}
          <div className="flex flex-col items-start pt-2">
            <h1 className="font-display text-4xl lg:text-[40px] text-teal-900 leading-tight mb-2">
              {title}
            </h1>
            <p className="font-display italic text-gold-600 text-xl lg:text-2xl mb-5">{tagline}</p>
            <p className="font-body text-text-muted text-base leading-relaxed mb-8">
              {description}
            </p>

            <hr className="w-full border-teal-900/10 mb-8" />

            {/* Size Options */}
            <div className="w-full mb-8">
              <p id="size-label" className="font-body font-bold text-sm text-teal-900 mb-3">
                Size
              </p>
              <div role="group" aria-labelledby="size-label" className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {sizes.map((size, idx) => (
                  <button
                    key={size.name}
                    type="button"
                    onClick={() => setActiveSize(idx)}
                    aria-pressed={activeSize === idx}
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
              <p id="material-label" className="font-body font-bold text-sm text-teal-900 mb-3">
                Material
              </p>
              <div
                role="group"
                aria-labelledby="material-label"
                className="grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                {materials.map((mat, idx) => (
                  <button
                    key={mat.name}
                    type="button"
                    onClick={() => setActiveMaterial(idx)}
                    aria-pressed={activeMaterial === idx}
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
              <p id="quantity-label" className="font-body font-bold text-sm text-teal-900 mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-teal-900/20 rounded-md bg-white overflow-hidden h-10 w-[140px]">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(minOrder, quantity - 100))}
                    disabled={quantity <= minOrder}
                    aria-label="Decrease quantity by 100"
                    className="w-10 h-full flex items-center justify-center text-teal-900 hover:bg-cream-soft transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    −
                  </button>
                  <output
                    aria-labelledby="quantity-label"
                    className="flex-1 text-center font-body font-semibold text-sm text-teal-900"
                  >
                    {quantity}
                  </output>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 100)}
                    aria-label="Increase quantity by 100"
                    className="w-10 h-full flex items-center justify-center text-teal-900 hover:bg-cream-soft transition-colors"
                  >
                    +
                  </button>
                </div>
                <p className="font-body text-xs text-text-muted">(Min. Order {minOrder} Pcs)</p>
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
              <EnquireNowButton
                product={title}
                label="Enquire Now"
                className="btn-pill btn-teal px-8"
              />
              <Link
                href="/clients/contact-us"
                className="btn-pill btn-outline-teal px-8"
                title={enquirySummary}
              >
                Request Sample
                <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>

            {/* Delivery Note */}
            <div className="flex items-center gap-2 text-teal-900">
              <Truck size={14} strokeWidth={1.5} aria-hidden="true" />
              <p className="font-body text-xs font-medium">
                Estimated Delivery: 5–7 Business Days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
