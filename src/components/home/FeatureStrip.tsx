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
    <section className="bg-teal-900 py-10 w-full">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center mb-4 flex-shrink-0">
                  <Icon className="text-gold-400" size={24} strokeWidth={1.25} />
                </div>
                <h3 className="font-body font-bold text-white text-base mb-1.5">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-white/70 leading-relaxed pr-4">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
