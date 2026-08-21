import Link from "next/link";
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
    <section className="bg-cream pt-12 pb-8 md:pt-16 md:pb-10">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <p className="eyebrow mb-3 text-teal-900/60 text-center">Industries We Serve</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-teal-900 leading-[1.1] text-center mb-16">Trusted by Diverse Industries</h2>
          
          <div className="flex flex-wrap justify-center items-end gap-10 md:gap-16 lg:gap-24 w-full">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={idx}
                  href="/bags-by-industry"
                  className="flex flex-col items-center group"
                >
                  <Icon 
                    size={36} 
                    className="text-teal-900 group-hover:-translate-y-1 transition-transform duration-300" 
                    strokeWidth={1.25} 
                  />
                  <span className="font-body font-medium text-teal-900 text-sm mt-4 text-center group-hover:text-gold-600 transition-colors">
                    {industry.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
