import Image from "next/image";
import { EnquireNowButton } from "@/components/shared/EnquireNowButton";

export function FooterCTA() {
  return (
    <section className="bg-cream pt-8 pb-12 md:pb-16">
      <div className="container-custom">
        <div className="relative bg-teal-900 rounded-card overflow-hidden flex flex-col md:flex-row items-stretch min-h-[320px] shadow-xl">
          
          {/* COLUMN 1: image — its own box, fixed width, own overflow-hidden */}
          <div className="w-full md:w-[42%] relative overflow-hidden bg-teal-900 h-64 md:h-auto">
            <Image 
              src="/images/home-cta-packaging.png" 
              alt="Packaging boxes flat lay"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover object-center"
            />
          </div>

          {/* COLUMN 2: text — its own box, remaining width, never touched by column 1 */}
          <div className="w-full md:w-[58%] flex flex-col justify-center px-10 py-12 md:px-16 lg:px-20 gap-6">
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              Ready to Elevate<br className="hidden sm:block" /> Your Packaging?
            </h2>
            
            <p className="font-body text-white/70 text-lg max-w-md">
              Let&apos;s create packaging that protects your products and promotes your brand.
            </p>
            
            <EnquireNowButton
              label="Get a Quote"
              className="self-start btn-pill btn-white shadow-sm mt-2"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
