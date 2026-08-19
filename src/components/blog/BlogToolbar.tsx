"use client";

import { ChevronDown } from "lucide-react";

export function BlogToolbar() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E5DCC9]">
      <p className="font-body text-sm text-teal-900/60">
        Showing 1–9 of 36 Articles
      </p>
      
      <div className="flex items-center gap-3">
        <span className="font-body text-sm text-teal-900/60">Sort by:</span>
        <div className="relative">
          <select className="appearance-none bg-white border border-[#E5DCC9] rounded-lg py-2 pl-4 pr-10 font-body text-sm text-teal-900 focus:outline-none focus:border-teal-900/30 cursor-pointer shadow-sm">
            <option>Latest</option>
            <option>Oldest</option>
            <option>Most Popular</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-teal-900/60">
            <ChevronDown size={14} strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
