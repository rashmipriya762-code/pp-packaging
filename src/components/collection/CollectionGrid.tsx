import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CollectionFilterSidebar } from "./CollectionFilterSidebar";
import { ProductCard } from "@/components/shared/ProductCard";

export interface CollectionItem {
  name: string;
  desc: string;
  href: string;
  image: string;
  bgColor?: string;
  textColor?: string;
  btnColor?: string;
}

const bgColors = [
  "bg-[#E4D5C7]", // Light rose/beige
  "bg-teal-900",  // Dark teal
  "bg-cream",     // Cream
  "bg-[#4A7B82]", // Muted teal
  "bg-[#D9A44F]", // Gold
  "bg-teal-800",  // Darker teal
];

export function CollectionGrid({ items }: { items: CollectionItem[] }) {
  return (
    <section className="bg-cream py-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[22%] flex-shrink-0">
            <CollectionFilterSidebar />
          </div>

          {/* Grid */}
          <div className="w-full lg:w-[78%]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {items.map((item, idx) => {
                const imgBg = bgColors[idx % bgColors.length];
                
                return (
                  <ProductCard
                    key={idx}
                    href={item.href}
                    image={item.image}
                    title={item.name}
                    description={item.desc}
                    bgClass={`${imgBg} text-teal-900 border border-teal-900/5`}
                    ctaText="Explore Collection"
                  />
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
