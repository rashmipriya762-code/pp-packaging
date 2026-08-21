import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PRODUCT_IMAGES } from "@/lib/product-images";
import { EnquireNowButton } from "@/components/shared/EnquireNowButton";

export function ClientsHero() {
  return (
    <section className="bg-cream pt-9 pb-16 md:pt-[68px] md:pb-20 overflow-hidden relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT: Text */}
          <div className="w-full lg:w-[45%] flex flex-col items-start relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 font-body text-xs text-teal-900/60 mb-8">
              <Link href="/" className="hover:text-teal-900 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-teal-900 font-medium">Our Clients</span>
            </div>

            <p className="eyebrow text-gold-600 mb-6">OUR CLIENTS</p>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-6">
              <span className="block font-normal text-teal-900">Our Clients.</span>
              <span className="block font-normal text-gold-600">Our Pride.</span>
            </h1>
            
            <p className="font-body text-teal-900/70 text-base md:text-lg leading-relaxed mb-10 max-w-[440px]">
              We&apos;re honored to partner with amazing brands across industries. Together, we create packaging that protects, promotes, and makes an impact.
            </p>
            
            <EnquireNowButton
              label="Partner With Us"
              className="btn-pill btn-teal shadow-md"
            />
          </div>

          {/* RIGHT: Image */}
          <div className="w-full lg:w-[55%] relative">
            {/* Ambient circular backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#E8D9C5] rounded-full blur-[80px] z-0 pointer-events-none" />
            
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card z-10 bg-white">
              <Image 
                src={PRODUCT_IMAGES.rigidBoxes} 
                alt="Rigid packaging boxes"
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
