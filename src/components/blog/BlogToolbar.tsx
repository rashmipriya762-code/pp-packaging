"use client";

import { useId } from "react";
import { ChevronDown, X } from "lucide-react";

export type BlogSort = "latest" | "oldest";

interface BlogToolbarProps {
  sort: BlogSort;
  onSortChange: (value: BlogSort) => void;
  shown: number;
  total: number;
  activeCategory: string | null;
  onClearCategory: () => void;
}

export function BlogToolbar({
  sort,
  onSortChange,
  shown,
  total,
  activeCategory,
  onClearCategory,
}: BlogToolbarProps) {
  const ids = useId();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-cream-dark">
      <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
        {/* Counts are derived, never hardcoded. */}
        <p aria-live="polite" className="font-body text-sm text-teal-900/60">
          Showing {shown} of {total} {total === 1 ? "article" : "articles"}
        </p>
        {activeCategory && (
          <button
            type="button"
            onClick={onClearCategory}
            className="inline-flex items-center gap-1.5 rounded-full bg-teal-900 text-white px-3 py-1 font-body text-xs"
          >
            {activeCategory}
            <X size={12} aria-hidden="true" />
            <span className="sr-only">Clear category filter</span>
          </button>
        )}
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor={`${ids}-sort`} className="font-body text-sm text-teal-900/60">
          Sort by:
        </label>
        <div className="relative">
          <select
            id={`${ids}-sort`}
            value={sort}
            onChange={(e) => onSortChange(e.target.value as BlogSort)}
            className="appearance-none bg-white border border-cream-dark rounded-lg py-2 pl-4 pr-10 font-body text-sm text-teal-900 focus:outline-none focus:border-teal-900/30 cursor-pointer shadow-sm"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-teal-900/60">
            <ChevronDown size={14} strokeWidth={2} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
