"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "P&P Packaging has been an exceptional partner. Their attention to detail and commitment to quality helped us deliver our products in the best possible way.",
    name: "Client Representative",
    company: "Mamaearth",
    avatar: "bg-teal-900"
  },
  {
    quote: "From design support to on-time delivery, the P&P team is professional, reliable, and always ready to go the extra mile.",
    name: "Client Representative",
    company: "Beardo",
    avatar: "bg-teal-800"
  },
  {
    quote: "Sustainable, sturdy and beautiful packaging that truly represents our brand values. Highly recommended!",
    name: "Client Representative",
    company: "Blue Tokai",
    avatar: "bg-teal-700"
  }
];

export function ClientTestimonials() {
  return (
    <section className="bg-cream pt-12 pb-20">
      <div className="container-custom">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-gold-600 mb-3">WHAT OUR CLIENTS SAY</p>
            <h2 className="font-display text-4xl text-teal-900 leading-tight">
              Client Success Stories
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full border border-[#E5DCC9] flex items-center justify-center text-teal-900 hover:bg-cream-soft transition-colors">
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button className="w-10 h-10 rounded-full border border-[#E5DCC9] flex items-center justify-center text-teal-900 hover:bg-cream-soft transition-colors">
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 snap-x snap-mandatory no-scrollbar pb-6 lg:pb-0">
          {testimonials.map((test, idx) => (
            <div 
              key={idx} 
              className="flex flex-col w-[320px] lg:w-auto shrink-0 snap-start bg-cream-soft rounded-2xl border border-[#E5DCC9] p-8 md:p-10 shadow-sm"
            >
              {/* Quotation Mark */}
              <div className="text-gold-400 mb-6">
                <Quote size={32} fill="currentColor" strokeWidth={0} className="opacity-80" />
              </div>
              
              {/* Quote Text */}
              <p className="font-body text-teal-900/80 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                {test.quote}
              </p>
              
              <div className="w-full h-px bg-[#E5DCC9] mb-6" />
              
              {/* Avatar & Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${test.avatar} flex flex-col items-center justify-center text-white font-display text-[10px] font-bold tracking-wider leading-tight overflow-hidden p-1 text-center`}>
                  {test.company.slice(0,4)}
                </div>
                <div>
                  <p className="font-body font-bold text-teal-900 text-sm">{test.name}</p>
                  <p className="font-body text-teal-900/60 text-xs">{test.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
