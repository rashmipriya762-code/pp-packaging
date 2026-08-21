import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCT_IMAGES } from "@/lib/product-images";
import { EnquireNowButton } from "@/components/shared/EnquireNowButton";

export function HeroSection() {
  return (
    // Top padding is 120px total: 76px navbar offset lives on <main>.
    <section className="bg-cream pt-11 pb-12 md:pt-16 md:pb-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column (Text) */}
          <div className="w-full lg:w-[45%] flex flex-col items-start">
            <h1 className="font-display text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] mb-6 tracking-tight text-teal-900">
              <span className="block font-normal">Packaging</span>
              <span className="block heading-emphasis">That Protects.</span>
              <span className="block heading-emphasis">Impressions</span>
              <span className="block heading-emphasis">That Last.</span>
            </h1>

            <p className="font-body text-text-muted text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Custom packaging solutions crafted to protect your products, elevate your brand
              and care for our planet.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/boxes" className="btn-pill btn-teal">
                Explore Solutions
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
              <EnquireNowButton label="Get a Quote" className="btn-pill btn-outline-teal" />
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full lg:w-[55%] relative">
            <div className="relative aspect-[4/3] w-full rounded-card overflow-hidden shadow-card">
              <Image
                src={PRODUCT_IMAGES.protectivePackaging}
                alt="Custom kraft and cardboard packaging boxes"
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
