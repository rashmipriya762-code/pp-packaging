"use client";

import { Leaf, Package, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "We choose eco-friendly materials and processes for a better tomorrow.",
  },
  {
    icon: Package,
    title: "Quality",
    desc: "We never compromise on quality. Every box reflects our promise.",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "We believe in honest relationships built on trust and transparency.",
  },
  {
    icon: Users,
    title: "Customer First",
    desc: "Our customers' success is our success. We grow together.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-[#F4ECE0] rounded-[2rem] md:rounded-[3rem] py-12 md:py-16 w-full">
      <div className="px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="eyebrow text-gold-600 mb-4">OUR VALUES</p>
          <h2 className="font-display text-4xl md:text-5xl text-teal-900 leading-tight">
            The Principles That Guide Us
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx} 
                className="bg-cream-soft rounded-2xl border border-teal-900/10 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Badge */}
                <div className="w-14 h-14 rounded-full bg-teal-900 flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="text-gold-400" size={24} strokeWidth={1.5} />
                </div>
                
                {/* Text */}
                <h3 className="font-body font-bold text-lg text-teal-900 mb-3">
                  {val.title}
                </h3>
                <p className="font-body text-sm text-teal-900/70 leading-relaxed max-w-[200px]">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
