import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CollectionFilterSidebar } from "./CollectionFilterSidebar";

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
                  <Link href={item.href} key={idx} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group border border-teal-900/5">
                    {/* Top Zone - 65% (Image Area) */}
                    <div className={`relative aspect-[4/3] w-full overflow-hidden p-8 flex items-center justify-center ${imgBg}`}>
                       <div className="relative w-full h-full">
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          fill 
                          className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" 
                        />
                       </div>
                    </div>

                    {/* Bottom Zone - 35% (Content Area) */}
                    <div className="px-6 pb-6 pt-5 flex flex-col flex-1 bg-white">
                      <h3 className="font-display text-xl leading-tight mb-2 text-teal-900 group-hover:text-gold-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="font-body text-xs mb-6 flex-1 text-teal-900/60 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                      
                      <div className="flex items-center justify-between border-t border-teal-900/10 pt-4 mt-auto">
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-900 group-hover:text-gold-600 transition-colors">
                          Explore Collection
                        </span>
                        
                        {/* Circular Arrow Button */}
                        <div className="w-7 h-7 rounded-full flex items-center justify-center border border-teal-900/20 group-hover:bg-teal-900 transition-colors">
                          <ArrowRight size={12} strokeWidth={2} className="text-teal-900 group-hover:text-white" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
