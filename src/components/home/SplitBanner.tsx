"use client";

import { MessageSquare, PenTool, Package, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

const BotanicalIllustration = () => (
  <svg 
    viewBox="0 0 200 300" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinejoin="round"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main curved stem */}
    <path d="M180 320 Q 150 150 20 20" strokeLinecap="round" />
    
    {/* Right-side leaves */}
    <path d="M130 200 Q 180 180 180 140 Q 150 160 130 200" />
    <path d="M80 120 Q 140 90 140 40 Q 100 70 80 120" />
    <path d="M35 50 Q 80 20 80 -10 Q 50 10 35 50" />
    
    {/* Left-side leaves */}
    <path d="M160 250 Q 110 240 100 280 Q 130 270 160 250" />
    <path d="M100 150 Q 40 130 20 180 Q 60 170 100 150" />
    <path d="M55 75 Q 0 50 -20 90 Q 20 80 55 75" />
    
    {/* Top leaf tip */}
    <path d="M20 20 Q 0 -10 10 -30 Q 30 -10 20 20" />
  </svg>
);

const steps = [
  { icon: MessageSquare, label: "Consult", desc: "We understand your needs." },
  { icon: PenTool, label: "Design", desc: "Creative solutions for your brand." },
  { icon: Package, label: "Manufacture", desc: "Precision in every step." },
  { icon: Truck, label: "Deliver", desc: "On-time delivery, every time." },
];

export function SplitBanner() {
  return (
    <section className="bg-cream pt-6 pb-12 md:pt-10 md:pb-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-stretch rounded-card overflow-hidden shadow-card">
          
          {/* LEFT CARD — Sustainable */}
          <div className="relative w-full lg:w-[42%] bg-teal-900 p-10 md:p-12 flex flex-col items-start justify-center">
            
            {/* Background Illustration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-80 text-gold-400 opacity-30 pointer-events-none transform rotate-12">
              <BotanicalIllustration />
            </div>

            <div className="relative z-10 w-full">
              {/* Eyebrow */}
              <div className="inline-block bg-gold-600/15 border border-gold-600/20 px-3 py-1.5 rounded-full mb-6">
                <p className="font-body text-gold-600 text-[10px] font-bold tracking-[0.15em] uppercase">
                  Sustainable by Choice
                </p>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl text-white leading-[1.1] mb-6">
                Better Packaging.<br />
                Better Planet.
              </h2>
              
              <p className="font-body text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-[280px]">
                We use responsibly sourced materials and sustainable practices to reduce our environmental impact.
              </p>
              
              <Link href="/about" className="btn-pill bg-white text-teal-900 hover:bg-cream-soft shadow-sm inline-flex items-center">
                Learn More <ArrowRight size={16} strokeWidth={1.5} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* RIGHT CARD — Process */}
          <div className="w-full lg:w-[58%] bg-cream-soft p-10 md:p-12 flex flex-col justify-center">
            
            <p className="eyebrow mb-3 font-bold tracking-widest text-xs text-teal-900/60 uppercase">OUR PROCESS</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-teal-900 leading-[1.1] mb-12">From Idea to Impact</h2>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-2 relative">
              
              {/* Mobile connecting vertical line */}
              <div className="absolute left-6 top-10 bottom-10 w-[1px] bg-teal-900/10 sm:hidden" />
              
              {/* Desktop connecting horizontal line */}
              <div className="hidden sm:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-teal-900/10" />

              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative z-10 flex flex-row sm:flex-col items-center sm:text-center gap-5 sm:gap-4 flex-1">
                    
                    {/* Circle Icon */}
                    <div className="w-14 h-14 bg-cream border border-[#E5DCC9] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <Icon size={22} className="text-teal-900" strokeWidth={1.25} />
                    </div>
                    
                    {/* Step Text */}
                    <div className="flex flex-col items-start sm:items-center">
                      <h3 className="font-body font-bold text-teal-900 text-sm mb-1.5">{step.label}</h3>
                      <p className="font-body text-xs text-text-muted leading-relaxed sm:max-w-[120px]">{step.desc}</p>
                    </div>
                    
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
