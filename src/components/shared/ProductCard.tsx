import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ProductCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
  bgClass: string;
  price?: string;
  ctaText?: string;
}

export function ProductCard({
  href,
  image,
  title,
  description,
  bgClass,
  price,
  ctaText = "Explore Collection"
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={`flex flex-col w-[280px] lg:w-auto shrink-0 snap-start rounded-card overflow-hidden shadow-card transition-transform hover:-translate-y-1 group ${bgClass}`}
    >
      {/* Top Zone - Image Area (No separate background) */}
      <div className="relative aspect-[4/3] w-full pt-8 px-8 flex items-center justify-center">
        <div className="relative w-full h-full flex items-end justify-center">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl object-bottom"
            sizes="(max-width: 1024px) 280px, 33vw"
          />
        </div>
      </div>

      {/* Bottom Zone - Content Area (No separate background, no divider) */}
      <div className="px-8 pb-8 pt-4 flex flex-col flex-1">
        <h3 className="font-display text-xl leading-tight mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
          {title}
        </h3>
        <p className="font-body text-sm mb-6 flex-1 opacity-70 leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          {price ? (
            <span className="font-body font-bold text-sm">
              From {price}
            </span>
          ) : (
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider opacity-90 group-hover:opacity-100 transition-opacity">
              {ctaText}
            </span>
          )}

          {/* Circular Arrow Button (matching the single card aesthetic) */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
            <ArrowRight size={14} strokeWidth={2} />
          </div>
        </div>
      </div>
    </Link>
  );
}
