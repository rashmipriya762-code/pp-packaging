"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    title: "Corrugated Boxes",
    desc: "Durable & safe packaging for every delivery.",
    bgClass: "bg-teal-900 text-white",
    imgUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600&h=800",
    href: "/boxes",
  },
  {
    title: "Rigid Boxes",
    desc: "Premium packaging for luxury products.",
    bgClass: "bg-cream-soft text-teal-900",
    imgUrl: "https://images.unsplash.com/photo-1607344645866-eea01fb9cc2e?auto=format&fit=crop&q=80&w=600&h=800",
    href: "/boxes",
  },
  {
    title: "Flexible Packaging",
    desc: "Lightweight, versatile and cost-effective.",
    bgClass: "bg-teal-800 text-white",
    imgUrl: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=600&h=800",
    href: "/bags-by-material",
  },
  {
    title: "Protective Packaging",
    desc: "Engineered solutions that keep products safe.",
    bgClass: "bg-gold-600 text-white",
    imgUrl: "https://images.unsplash.com/photo-1605814513106-c89b33a5f4ce?auto=format&fit=crop&q=80&w=600&h=800",
    href: "/boxes",
  },
  {
    title: "Custom Packaging",
    desc: "Unique designs that make your brand stand out.",
    bgClass: "bg-cream-soft text-teal-900",
    imgUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600&h=800",
    href: "/boxes",
  },
];

export function BestSellers() {
  return (
    <section className="bg-cream pt-16 pb-16 md:pt-24 md:pb-20">
      <div className="container-custom">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3">BEST SELLERS</p>
            <h2 className="section-heading">Our Most Loved<br />Packaging Solutions</h2>
          </div>
          <Link href="/boxes" className="btn-pill btn-outline-teal shrink-0 inline-flex items-center">
            Shop Collection <ArrowRight size={16} strokeWidth={1.5} className="ml-2" />
          </Link>
        </div>

        {/* Cards Row */}
        <div className="relative">
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-6 snap-x snap-mandatory no-scrollbar pb-6 lg:pb-0">
            {products.map((product, idx) => (
              <Link 
                href={product.href}
                key={idx} 
                className="flex flex-col w-[280px] lg:w-auto shrink-0 snap-start rounded-card overflow-hidden shadow-card transition-transform hover:-translate-y-1 group"
              >
                {/* Image Top (65%) */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={product.imgUrl}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 280px, 20vw"
                  />
                </div>
                
                {/* Text Band Bottom (35%) */}
                <div className={`p-6 flex-grow flex flex-col justify-center ${product.bgClass}`}>
                  <h3 className="font-body font-bold text-lg mb-2">{product.title}</h3>
                  <p className="font-body text-sm leading-relaxed opacity-80">{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Carousel Arrows (Mobile/Tablet only or Decorative on Desktop) */}
          <div className="flex items-center justify-end gap-2 mt-6 lg:mt-8">
            <button className="w-10 h-10 bg-white rounded-full shadow-sm border border-teal-900/10 flex items-center justify-center text-teal-900 hover:text-gold-600 transition-colors">
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button className="w-10 h-10 bg-white rounded-full shadow-sm border border-teal-900/10 flex items-center justify-center text-teal-900 hover:text-gold-600 transition-colors">
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
