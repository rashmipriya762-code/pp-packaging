import { PRODUCT_IMAGES } from "@/lib/product-images";
import Image from "next/image";
import { Clock, MessageSquareText } from "lucide-react";

export function ClientsContactHero() {
  return (
    <section className="bg-cream pt-10 pb-16">
      <div className="container-custom">
        <div className="bg-teal-900 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row relative shadow-xl">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] p-10 lg:p-20 relative z-10 flex flex-col justify-center">
            <span className="text-gold-600 font-bold tracking-widest text-xs uppercase mb-6 block">
              CONTACT US
            </span>
            <h1 className="font-display font-medium text-white text-5xl lg:text-[4.5rem] leading-[1.05] mb-6">
              <span className="block">Let&apos;s Build</span>
              <span className="block text-gold-600">Something Great</span>
              <span className="block">Together.</span>
            </h1>
            <p className="font-body text-white/80 text-lg max-w-md mb-12 leading-relaxed">
              Have a question, need a quote, or want to discuss your packaging needs? We&apos;re here to help.
            </p>

            {/* Info Items */}
            <div className="flex flex-col sm:flex-row gap-10">
              <div className="flex items-start gap-4">
                <Clock className="text-gold-600 mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <p className="font-bold text-white text-base mb-1">Mon - Sat</p>
                  <p className="text-white/70 text-sm">9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageSquareText className="text-gold-600 mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <p className="font-bold text-white text-base mb-1">Quick Response</p>
                  <p className="text-white/70 text-sm">Within 24 Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content / Image */}
          <div className="w-full lg:w-[45%] relative min-h-[400px] lg:min-h-full flex items-center justify-center p-8 lg:p-0">
            {/* The cream background behind the image */}
            <div className="absolute inset-0 bg-cream/90 lg:rounded-l-[8rem] ml-0 lg:-ml-12 overflow-hidden">
               {/* Circle treatment inside */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-[#E4D5C7] rounded-full blur-[60px] opacity-70" />
            </div>
            <div className="relative w-full h-full min-h-[400px] z-10 p-10 lg:p-12 overflow-hidden">
              <Image 
                src={PRODUCT_IMAGES.corrugatedBoxes} 
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-center scale-110 drop-shadow-2xl mix-blend-multiply"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
