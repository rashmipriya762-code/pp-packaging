"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CollectionFilterSidebar,
  type SortKey,
} from "./CollectionFilterSidebar";

export interface CollectionItem {
  name: string;
  desc: string;
  href: string;
  image: string;
  /** Numeric price used for sorting; derived from the product price string. */
  price?: number;
}

const bgColors = [
  "bg-[#E4D5C7]", // Light rose/beige
  "bg-teal-900", // Dark teal
  "bg-cream", // Cream
  "bg-[#4A7B82]", // Muted teal
  "bg-[#D9A44F]", // Gold
  "bg-teal-800", // Darker teal
];

export function CollectionGrid({ items }: { items: CollectionItem[] }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = needle
      ? items.filter(
          (item) =>
            item.name.toLowerCase().includes(needle) ||
            item.desc.toLowerCase().includes(needle)
        )
      : items;

    const sorted = [...filtered];
    if (sort === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "price-asc") sorted.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    if (sort === "price-desc") sorted.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    return sorted;
  }, [items, query, sort]);

  const reset = () => {
    setQuery("");
    setSort("featured");
  };

  return (
    <section className="bg-cream py-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-[22%] flex-shrink-0">
            <CollectionFilterSidebar
              query={query}
              onQueryChange={setQuery}
              sort={sort}
              onSortChange={setSort}
              onReset={reset}
              resultCount={visible.length}
              totalCount={items.length}
            />
          </div>

          {/* Grid */}
          <div className="w-full lg:w-[78%]">
            {visible.length === 0 ? (
              <div className="bg-white border border-cream-dark rounded-2xl p-12 text-center">
                <h3 className="font-display text-2xl text-teal-900 mb-2">
                  Nothing matches “{query}”
                </h3>
                <p className="font-body text-sm text-teal-900/60 mb-6">
                  Try a different material or product name.
                </p>
                <button onClick={reset} className="btn-pill btn-outline-teal">
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {visible.map((item, idx) => {
                  const imgBg = bgColors[idx % bgColors.length];

                  return (
                    <Link
                      href={item.href}
                      key={item.href}
                      className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group border border-teal-900/5"
                    >
                      {/* Top Zone (Image Area) */}
                      <div
                        className={`relative aspect-[4/3] w-full overflow-hidden p-8 flex items-center justify-center ${imgBg}`}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                            className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                          />
                        </div>
                      </div>

                      {/* Bottom Zone (Content Area) */}
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

                          <div className="w-7 h-7 rounded-full flex items-center justify-center border border-teal-900/20 group-hover:bg-teal-900 transition-colors">
                            <ArrowRight
                              size={12}
                              strokeWidth={2}
                              aria-hidden="true"
                              className="text-teal-900 group-hover:text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
