import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCT_IMAGES } from "@/lib/product-images";

export function AboutHero() {
  return (
    <section className="bg-cream pt-11 pb-16 md:pt-[84px] md:pb-24 overflow-hidden relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT: Text */}
          <div className="w-full lg:w-[45%] flex flex-col items-start relative z-10">
            <p className="eyebrow text-gold-600 mb-6">ABOUT US</p>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] tracking-tight text-teal-900 mb-6">
              <span className="block font-normal">Packaging with</span>
              <span className="block font-normal mb-2">Purpose.</span>
              <span className="block italic text-gold-600">Built on Trust.</span>
              <span className="block italic text-gold-600">Driven by Impact.</span>
            </h1>
            
            <p className="font-body text-teal-900/70 text-base md:text-lg leading-relaxed mb-10 max-w-[420px]">
              At P&P Packaging, we believe great packaging does more than protect a product — it builds connections, delivers promises, and shapes a better tomorrow.
            </p>
            
            <Link href="#our-story" className="btn-pill btn-teal shadow-md">
              Our Journey
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>

          {/* RIGHT: Image */}
          <div className="w-full lg:w-[55%] relative">
            {/* Ambient circular backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#E8D9C5] rounded-full blur-[80px] z-0 pointer-events-none" />
            
            {/* Main Product Image (reused from homepage) */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card z-10">
              <Image 
                src={PRODUCT_IMAGES.corrugatedBoxes} 
                alt="Custom packaging produced by P&amp;P Packaging"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
