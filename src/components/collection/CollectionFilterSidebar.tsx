"use client";

import { useId } from "react";
import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";

export type SortKey = "featured" | "name-asc" | "price-asc" | "price-desc";

export const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "name-asc", label: "Name (A–Z)" },
  { value: "price-asc", label: "Price (low to high)" },
  { value: "price-desc", label: "Price (high to low)" },
];

interface CollectionFilterSidebarProps {
  query: string;
  onQueryChange: (value: string) => void;
  sort: SortKey;
  onSortChange: (value: SortKey) => void;
  onReset: () => void;
  resultCount: number;
  totalCount: number;
}

/**
 * A refine panel that actually refines. The previous version rendered three
 * accordion groups of checkboxes wired to local state the grid never read, so
 * every control was inert.
 */
export function CollectionFilterSidebar({
  query,
  onQueryChange,
  sort,
  onSortChange,
  onReset,
  resultCount,
  totalCount,
}: CollectionFilterSidebarProps) {
  const ids = useId();
  const isDirty = query.trim() !== "" || sort !== "featured";

  return (
    <aside
      aria-label="Refine collection"
      className="w-full bg-white rounded-2xl border border-cream-dark overflow-hidden shadow-sm"
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-cream-dark">
        <span className="font-body text-sm font-bold text-teal-900 tracking-tight">Refine</span>
        <SlidersHorizontal size={15} className="text-teal-900/50" strokeWidth={1.5} aria-hidden="true" />
      </div>

      <div className="px-5 py-5 flex flex-col gap-5">
        <div>
          <label
            htmlFor={`${ids}-search`}
            className="block font-body text-xs font-semibold text-teal-900 tracking-wide uppercase mb-2"
          >
            Search
          </label>
          <div className="relative">
            <input
              id={`${ids}-search`}
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Paper, jute, mailer…"
              className="w-full bg-cream-soft border border-cream-dark rounded-lg py-2.5 pl-4 pr-10 font-body text-sm text-teal-900 placeholder:text-teal-900/40 focus:outline-none focus:border-gold-600 transition-colors"
            />
            <Search
              size={16}
              strokeWidth={1.5}
              aria-hidden="true"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-900/40 pointer-events-none"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor={`${ids}-sort`}
            className="block font-body text-xs font-semibold text-teal-900 tracking-wide uppercase mb-2"
          >
            Sort by
          </label>
          <select
            id={`${ids}-sort`}
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortKey)}
            className="w-full bg-cream-soft border border-cream-dark rounded-lg py-2.5 px-4 font-body text-sm text-teal-900 focus:outline-none focus:border-gold-600 transition-colors"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <p aria-live="polite" className="font-body text-xs text-teal-900/60">
          Showing {resultCount} of {totalCount}{" "}
          {totalCount === 1 ? "collection" : "collections"}
        </p>
      </div>

      <div className="px-5 py-4 border-t border-cream-dark">
        <button
          type="button"
          onClick={onReset}
          disabled={!isDirty}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#C5B99A] text-teal-900/60 enabled:hover:text-teal-900 enabled:hover:border-teal-900/50 transition-all font-body text-[11px] font-medium disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <RotateCcw size={11} strokeWidth={1.5} aria-hidden="true" />
          Reset
        </button>
      </div>
    </aside>
  );
}
