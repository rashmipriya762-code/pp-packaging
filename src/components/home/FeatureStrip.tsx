"use client";

import { Leaf, Package, ShieldCheck, Clock } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Sustainable Materials",
    desc: "Eco-friendly materials for a better tomorrow.",
  },
  {
    icon: Package,
    title: "Custom Solutions",
    desc: "Tailored packaging that fits your brand.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Strong, reliable and built to protect.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Reliable timelines for your business needs.",
  },
];

export function FeatureStrip() {
  return (
    <section className="bg-cream pb-3 md:pb-4 px-4 md:px-6 lg:px-8">
      <div className="w-full">
        <div className="bg-teal-900 rounded-card py-12 px-10 w-full shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 relative z-10">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className={`flex flex-row items-start gap-4 px-4 lg:px-8 ${idx !== 0 ? 'lg:border-l border-white/10' : ''}`}>
                  <div className="flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="text-gold-400" size={28} strokeWidth={1} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-body font-semibold text-white text-sm mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="font-body text-xs text-white/70 leading-relaxed pr-2">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
