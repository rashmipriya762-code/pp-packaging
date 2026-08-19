"use client";

import { Package, Globe, Building2, Handshake } from "lucide-react";

const stats = [
  { icon: Package, value: "500+", label: "Happy Clients" },
  { icon: Globe, value: "20+", label: "Industries Served" },
  { icon: Building2, value: "1M+", label: "Boxes Delivered" },
  { icon: Handshake, value: "98%", label: "Client Retention" },
];

export function ClientsStats() {
  return (
    <section className="bg-cream pt-4 pb-12 w-full">
      <div className="container-custom">
        <div className="bg-teal-900 rounded-2xl py-10 md:py-14 px-8 shadow-card">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:divide-x divide-white/10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`flex flex-col items-center lg:items-start lg:flex-row gap-5 lg:gap-4 ${idx !== 0 ? 'lg:pl-10 xl:pl-12' : ''}`}>
                  <div className="text-gold-400 flex-shrink-0">
                    <Icon size={38} strokeWidth={1} />
                  </div>
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h3 className="font-display text-4xl text-white mb-1">
                      {stat.value}
                    </h3>
                    <p className="font-body text-sm text-white/70">
                      {stat.label}
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
