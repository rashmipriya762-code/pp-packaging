"use client";

import { Package, Users, Building2, Globe } from "lucide-react";

const stats = [
  { icon: Package, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Building2, value: "1M+", label: "Boxes Manufactured" },
  { icon: Globe, value: "20+", label: "Industries Served" },
];

export function AboutStats() {
  return (
    <section className="bg-teal-900 py-12 md:py-16 w-full border-b border-teal-900">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-12 lg:divide-x divide-white/10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? 'lg:pl-12' : ''}`}>
                <div className="mb-4 text-gold-400">
                  <Icon size={36} strokeWidth={1} />
                </div>
                <h3 className="font-display text-4xl md:text-5xl text-white mb-2">
                  {stat.value}
                </h3>
                <p className="font-body text-sm text-white/70">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
