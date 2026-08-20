import { PRODUCT_IMAGES } from "@/lib/product-images";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const milestones = [
  { year: "2014", title: "The Beginning", desc: "Started with a vision to redefine packaging." },
  { year: "2018", title: "Growing Together", desc: "Expanded our capabilities and client base." },
  { year: "2022", title: "Sustainable by Choice", desc: "Invested in eco-friendly materials and processes." },
  { year: "Today", title: "Building a Better Tomorrow", desc: "Continuing to innovate for our clients and the planet." }
];

export function AboutStory() {
  return (
    <section className="bg-cream pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT: Text */}
          <div className="w-full lg:w-[45%] flex flex-col items-start">
            <p className="eyebrow text-gold-600 mb-5">OUR STORY</p>
            <h2 className="font-display text-4xl md:text-5xl text-teal-900 leading-[1.15] mb-6">
              Thoughtful Packaging.<br />
              Stronger Future.
            </h2>
            
            <p className="font-body text-teal-900/80 text-base leading-relaxed mb-5 max-w-[440px]">
              P&P Packaging was founded with a simple idea — to create packaging that protects products while protecting our planet.
            </p>
            
            <p className="font-body text-teal-900/80 text-base leading-relaxed mb-8 max-w-[440px]">
              From a small beginning to becoming a trusted partner for businesses across industries, our journey has been driven by innovation, quality, and a commitment to sustainable growth.
            </p>
            
            <button className="btn-pill bg-teal-900 text-white hover:bg-teal-800 shadow-md">
              Read Our Journey <ArrowRight size={16} strokeWidth={1.5} className="ml-1" />
            </button>
          </div>

          {/* RIGHT: Image with Timeline Overlay */}
          <div className="w-full lg:w-[55%] relative">
            <div className="relative aspect-[4/3] md:aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-card">
              <Image 
                src={PRODUCT_IMAGES.customPackaging} 
                alt="Hands packing a kraft box"
                fill
                className="object-cover"
              />
              
              {/* Dark Overlay Gradient on the right side to ensure text legibility */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent w-full md:w-[60%] ml-auto" />

              {/* Timeline Overlay */}
              <div className="absolute top-0 right-0 bottom-0 w-full md:w-[50%] p-6 md:p-8 flex flex-col justify-center">
                <div className="relative border-l border-gold-600/30 pl-6 space-y-6 md:space-y-8">
                  {milestones.map((m, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-gold-600 ring-4 ring-black/20" />
                      
                      <p className="font-display font-bold text-white text-sm tracking-widest mb-1">{m.year}</p>
                      <h3 className="font-body font-bold text-white text-base mb-1">{m.title}</h3>
                      <p className="font-body text-white/70 text-xs md:text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
