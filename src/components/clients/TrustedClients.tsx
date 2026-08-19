"use client";

import { ArrowRight } from "lucide-react";

const clientLogos = [
  "Mamaearth", "Beardo", "The Body Shop", "boAt", "WOW Skin Science",
  "Himalaya", "SUGAR", "cult.fit", "Licious", "JOCKEY",
  "Pernod Ricard", "Tata 1mg", "PharmEasy", "Blue Tokai", "kapiva",
  "TRENT", "INATUR", "AGARO", "minimalist_", "vaaree"
];

export function TrustedClients() {
  return (
    <section className="bg-cream pt-12 pb-20">
      <div className="container-custom">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-gold-600 mb-3">BRANDS THAT TRUST US</p>
            <h2 className="font-display text-4xl text-teal-900 leading-tight">
              Our Valued Clients
            </h2>
          </div>
          <button className="btn-pill btn-outline-teal shrink-0">
            View All Clients <ArrowRight size={16} strokeWidth={1.5} className="ml-1" />
          </button>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clientLogos.map((client, idx) => (
            <div 
              key={idx} 
              className="bg-cream-soft rounded-xl border border-[#E5DCC9] p-6 h-24 flex items-center justify-center transition-all duration-300 hover:shadow-card-hover hover:border-teal-900/20 group"
            >
              {/* Placeholder for actual logos, using text for now */}
              <span className="font-display font-semibold text-teal-900/80 text-center text-lg md:text-xl group-hover:text-teal-900 transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
