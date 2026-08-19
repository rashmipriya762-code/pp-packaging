"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronUp, ChevronDown, RotateCcw } from "lucide-react";

interface FilterOption {
  label: string;
  checked: boolean;
}

interface FilterGroup {
  label: string;
  isOpen: boolean;
  options: FilterOption[];
}

const defaultGroups: FilterGroup[] = [
  {
    label: "Category",
    isOpen: true,
    options: [
      { label: "All Collections", checked: true },
      { label: "Paper & Kraft", checked: false },
      { label: "Fabric & Textile", checked: false },
      { label: "Eco-Friendly", checked: false },
      { label: "Luxury Packaging", checked: false },
      { label: "Custom", checked: false },
      { label: "Promotional", checked: false },
    ],
  },
  {
    label: "Industry",
    isOpen: false,
    options: [
      { label: "E-commerce", checked: false },
      { label: "Food & Beverage", checked: false },
      { label: "Cosmetics", checked: false },
      { label: "Pharmaceuticals", checked: false },
      { label: "Electronics", checked: false },
      { label: "Retail", checked: false },
      { label: "Industrial", checked: false },
    ],
  },
  {
    label: "Sustainability",
    isOpen: false,
    options: [
      { label: "Eco-Friendly", checked: false },
      { label: "Recyclable", checked: false },
      { label: "Biodegradable", checked: false },
      { label: "Reusable", checked: false },
    ],
  },
];

export function CollectionFilterSidebar() {
  const [groups, setGroups] = useState<FilterGroup[]>(defaultGroups);

  const toggleGroup = (idx: number) => {
    setGroups((prev) =>
      prev.map((g, i) => (i === idx ? { ...g, isOpen: !g.isOpen } : g))
    );
  };

  const toggleOption = (groupIdx: number, optIdx: number) => {
    setGroups((prev) =>
      prev.map((g, gi) =>
        gi !== groupIdx
          ? g
          : {
              ...g,
              options: g.options.map((opt, oi) =>
                oi !== optIdx ? opt : { ...opt, checked: !opt.checked }
              ),
            }
      )
    );
  };

  const clearAll = () => {
    setGroups(
      defaultGroups.map((g) => ({
        ...g,
        options: g.options.map((opt, oi) => ({
          ...opt,
          checked: g.label === "Category" && oi === 0,
        })),
      }))
    );
  };

  return (
    <aside className="w-full bg-white rounded-2xl border border-[#E5DCC9] overflow-hidden shadow-sm">
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5DCC9]">
        <span className="font-body text-sm font-bold text-teal-900 tracking-tight">Filter By</span>
        <SlidersHorizontal size={15} className="text-teal-900/50" strokeWidth={1.5} />
      </div>

      {/* ── Accordion Groups ── */}
      <div className="divide-y divide-[#E5DCC9]">
        {groups.map((group, gi) => (
          <div key={group.label} className="px-5 py-4">
            {/* Group header */}
            <button
              onClick={() => toggleGroup(gi)}
              className="flex items-center justify-between w-full"
            >
              <span className="font-body text-xs font-semibold text-teal-900 tracking-wide uppercase">
                {group.label}
              </span>
              {group.isOpen ? (
                <ChevronUp size={13} className="text-teal-900/50" strokeWidth={1.5} />
              ) : (
                <ChevronDown size={13} className="text-teal-900/50" strokeWidth={1.5} />
              )}
            </button>

            {/* Options */}
            {group.isOpen && (
              <ul className="mt-3.5 space-y-2.5">
                {group.options.map((opt, oi) => (
                  <li key={opt.label}>
                    <label className="flex items-center gap-2.5 cursor-pointer group">
                      {/* Custom checkbox */}
                      <button
                        type="button"
                        onClick={() => toggleOption(gi, oi)}
                        className={`w-[15px] h-[15px] rounded-[3px] flex items-center justify-center border transition-all flex-shrink-0 ${
                          opt.checked
                            ? "bg-teal-900 border-teal-900"
                            : "bg-white border-[#BFAE96] group-hover:border-teal-900/60"
                        }`}
                        aria-checked={opt.checked}
                      >
                        {opt.checked && (
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path
                              d="M1 3L3 5L7 1"
                              stroke="white"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                      <span
                        className={`font-body text-[11.5px] leading-none transition-colors ${
                          opt.checked
                            ? "text-teal-900 font-medium"
                            : "text-teal-900/60 group-hover:text-teal-900/90"
                        }`}
                      >
                        {opt.label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* ── Clear Filters ── */}
      <div className="px-5 py-4 border-t border-[#E5DCC9]">
        <button
          onClick={clearAll}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#C5B99A] text-teal-900/60 hover:text-teal-900 hover:border-teal-900/50 transition-all font-body text-[11px] font-medium"
        >
          <RotateCcw size={11} strokeWidth={1.5} />
          Clear Filters
        </button>
      </div>
    </aside>
  );
}
