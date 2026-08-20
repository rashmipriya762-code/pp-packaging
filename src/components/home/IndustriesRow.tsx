"use client";

import { Fragment } from "react";
import { ShoppingCart, Coffee, Droplet, Pill, Monitor, ShoppingBag } from "lucide-react";

const industries = [
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Coffee, label: "Food & Beverage" },
  { icon: Droplet, label: "Cosmetics" },
  { icon: Pill, label: "Pharmaceuticals" },
  { icon: Monitor, label: "Electronics" },
  { icon: ShoppingBag, label: "Retail" },
];

export function IndustriesRow() {
  return (
    <section className="bg-cream pt-6 pb-4 md:pt-8 md:pb-6 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center">
          <p className="eyebrow mb-3 font-bold tracking-widest text-xs text-teal-900/60 uppercase text-center">INDUSTRIES WE SERVE</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-teal-900 leading-[1.1] text-center mb-10">Trusted by Diverse Industries</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12 w-full">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <Fragment key={idx}>
                  <div className="flex flex-col items-center group cursor-default">
                    <Icon 
                      size={36} 
                      className="text-teal-900 group-hover:-translate-y-1 transition-transform duration-300" 
                      strokeWidth={1.25} 
                    />
                    <span className="font-body font-medium text-teal-900 text-sm mt-4 text-center">
                      {industry.label}
                    </span>
                  </div>
                  {/* Vertical Divider */}
                  {idx < industries.length - 1 && (
                    <div className="hidden md:block w-px h-12 bg-teal-900/15" />
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
