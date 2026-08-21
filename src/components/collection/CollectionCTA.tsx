import Image from "next/image";
import { PRODUCT_IMAGES } from "@/lib/product-images";
import { EnquireNowButton } from "@/components/shared/EnquireNowButton";

export function CollectionCTA() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-custom">
        <div className="relative bg-[#E8D9C5] rounded-card overflow-hidden flex flex-col md:flex-row items-stretch min-h-[320px] shadow-sm">
          
          {/* LEFT ZONE: Text */}
          <div className="w-full md:w-[55%] p-10 md:p-16 lg:py-20 lg:pr-20 flex flex-col justify-center items-start z-10">
            <h2 className="font-display text-4xl md:text-5xl text-teal-900 leading-tight mb-6">
              Can&apos;t Find<br className="hidden sm:block" /> What You Need?
            </h2>
            
            <p className="font-body text-teal-900/70 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              We create custom packaging solutions tailored to your product, brand and industry.
            </p>
            
            <EnquireNowButton
              label="Get a Custom Quote"
              className="btn-pill btn-teal shadow-sm mt-2"
            />
          </div>

          {/* RIGHT ZONE: Image (flush left and bottom inside its column) */}
          <div className="w-full md:w-[45%] relative min-h-[300px] md:min-h-[400px]">
             
            {/* Gold Leaf Motif */}
            <svg 
              className="absolute -left-16 bottom-0 w-80 h-96 text-gold-600 opacity-[0.15] transform -rotate-12 z-0 pointer-events-none" 
              viewBox="0 0 200 300" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path d="M180 320 Q 150 150 20 20" strokeLinecap="round" />
              <path d="M130 200 Q 180 180 180 140 Q 150 160 130 200" />
              <path d="M80 120 Q 140 90 140 40 Q 100 70 80 120" />
              <path d="M160 250 Q 110 240 100 280 Q 130 270 160 250" />
              <path d="M100 150 Q 40 130 20 180 Q 60 170 100 150" />
            </svg>

            {/* Unsplash Image bleeding to the right */}
            <div className="absolute inset-0 top-0 bottom-0 right-0 left-0 md:left-auto md:w-[120%] z-10">
              <Image 
                src={PRODUCT_IMAGES.corrugatedBoxes} 
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 54vw"
                className="object-cover md:object-right-bottom"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
