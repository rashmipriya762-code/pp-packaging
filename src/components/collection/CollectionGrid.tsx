import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface CollectionItem {
  name: string;
  desc: string;
  href: string;
  image: string;
  bgColor?: string;
  textColor?: string;
  btnColor?: string;
}

const colorPatterns = [
  { bg: "bg-teal-900", text: "text-white", desc: "text-white/70", btn: "text-white group-hover:text-gold-400", hover: "group-hover:text-gold-400" },
  { bg: "bg-white", text: "text-teal-900", desc: "text-text-muted", btn: "text-teal-900", hover: "group-hover:text-gold-600" },
  { bg: "bg-white", text: "text-teal-900", desc: "text-text-muted", btn: "text-teal-900", hover: "group-hover:text-gold-600" },
  { bg: "bg-[#E2BA71]", text: "text-teal-900", desc: "text-teal-900/80", btn: "text-teal-900", hover: "group-hover:text-white" },
  { bg: "bg-[#E8D9C5]", text: "text-teal-900", desc: "text-teal-900/80", btn: "text-teal-900", hover: "group-hover:text-teal-700" },
];

export function CollectionGrid({ items }: { items: CollectionItem[] }) {
  return (
    <section className="bg-cream py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const pattern = colorPatterns[idx % colorPatterns.length];
            
            return (
              <div key={idx} className={`flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group ${pattern.bg}`}>
                <div className="relative aspect-square w-full overflow-hidden p-6 bg-transparent flex items-center justify-center">
                   <div className="relative w-full h-full">
                    <Image src={item.image} alt={item.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" />
                   </div>
                </div>
                <div className="px-6 pb-8 pt-2 flex flex-col flex-1">
                  <h3 className={`font-display text-2xl mb-2 transition-colors ${pattern.text} ${pattern.hover}`}>{item.name}</h3>
                  <p className={`font-body text-sm mb-6 flex-1 leading-relaxed ${pattern.desc}`}>{item.desc}</p>
                  
                  <div className="flex items-center justify-between border-t border-black/5 pt-4 mt-auto">
                    <Link href={item.href} className={`inline-flex items-center text-sm font-medium transition-colors ${pattern.btn}`}>
                      Explore Collection 
                      <ArrowRight size={16} strokeWidth={1.5} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
