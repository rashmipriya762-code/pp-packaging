"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function BlogPagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-16 pt-10 border-t border-[#E5DCC9]">
      <button className="w-10 h-10 rounded-full border border-[#E5DCC9] flex items-center justify-center text-teal-900 hover:bg-cream-soft transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        <ChevronLeft size={16} strokeWidth={1.5} />
      </button>
      
      <Link href="#" className="w-10 h-10 rounded-full bg-teal-900 flex items-center justify-center text-white font-body font-bold text-sm shadow-sm">
        1
      </Link>
      
      <Link href="#" className="w-10 h-10 rounded-full border border-[#E5DCC9] flex items-center justify-center text-teal-900 font-body text-sm hover:bg-cream-soft transition-colors">
        2
      </Link>
      
      <Link href="#" className="w-10 h-10 rounded-full border border-[#E5DCC9] flex items-center justify-center text-teal-900 font-body text-sm hover:bg-cream-soft transition-colors">
        3
      </Link>
      
      <Link href="#" className="hidden sm:flex w-10 h-10 rounded-full border border-[#E5DCC9] items-center justify-center text-teal-900 font-body text-sm hover:bg-cream-soft transition-colors">
        4
      </Link>
      
      <span className="w-10 h-10 flex items-center justify-center text-teal-900/40">
        ...
      </span>
      
      <button className="w-10 h-10 rounded-full border border-[#E5DCC9] flex items-center justify-center text-teal-900 hover:bg-cream-soft transition-colors">
        <ChevronRight size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
}
