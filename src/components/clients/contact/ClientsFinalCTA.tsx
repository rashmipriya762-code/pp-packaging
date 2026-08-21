import { PRODUCT_IMAGES } from "@/lib/product-images";
import Image from "next/image";
import { EnquireNowButton } from "@/components/shared/EnquireNowButton";

export function ClientsFinalCTA() {
  return (
    <section className="bg-cream pb-16 lg:pb-24">
      <div className="container-custom">
        <div className="bg-teal-900 rounded-[2rem] overflow-hidden flex flex-col md:flex-row relative">
          
          {/* Left Decorative Element */}
          <div className="hidden lg:flex w-[20%] items-center justify-center p-8">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#D9A44F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 scale-125 translate-x-4">
              <path d="M50 100 C50 70 30 50 10 40 C30 45 45 60 50 80" />
              <path d="M50 80 C50 50 70 30 90 20 C70 25 55 40 50 60" />
              <path d="M50 60 C50 30 30 10 10 0 C30 5 45 20 50 40" />
              <path d="M50 40 C50 15 70 0 90 -10 C70 -5 55 10 50 25" />
            </svg>
          </div>

          {/* Center Text Area */}
          <div className="w-full md:w-[60%] lg:w-[45%] flex flex-col justify-center items-start lg:items-start p-10 lg:p-12 z-10">
            <h2 className="font-display text-white text-3xl lg:text-[2.5rem] leading-tight mb-4 text-center lg:text-left">
              Ready to <span className="text-gold-600">Elevate</span> Your Packaging?
            </h2>
            <p className="font-body text-white/80 text-base lg:text-lg max-w-md mb-8 text-center lg:text-left leading-relaxed">
              Get a custom quote today and take the first step toward packaging that represents your brand perfectly.
            </p>
            <div className="w-full flex justify-center lg:justify-start">
              <EnquireNowButton
                label="Get a Custom Quote"
                className="btn-pill bg-gold-600 text-teal-900 hover:bg-gold-500 font-bold border-none"
              />
            </div>
          </div>

          {/* Right Image Area */}
          <div className="w-full md:w-[40%] lg:w-[35%] relative min-h-[250px] md:min-h-full flex items-end justify-end overflow-hidden pt-8 md:pt-0">
            <div className="relative w-[120%] h-[120%] mr-[-10%] mb-[-10%] mix-blend-multiply opacity-90 drop-shadow-xl translate-y-4">
              <Image 
                src={PRODUCT_IMAGES.rigidBoxes} 
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-contain object-bottom right-0 bottom-0"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
