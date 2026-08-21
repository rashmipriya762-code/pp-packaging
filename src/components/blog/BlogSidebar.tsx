"use client";

import { useId, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "@/lib/content";
import { submitEnquiry } from "@/lib/submit-enquiry";

interface BlogSidebarProps {
  query: string;
  onQueryChange: (value: string) => void;
  activeCategory: string | null;
  onCategoryChange: (value: string | null) => void;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogSidebar({
  query,
  onQueryChange,
  activeCategory,
  onCategoryChange,
}: BlogSidebarProps) {
  const ids = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  // Categories and counts are derived from the posts, not hardcoded numbers.
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of blogPosts) {
      counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const recent = useMemo(
    () => [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4),
    []
  );

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const result = await submitEnquiry({ kind: "newsletter", email });
    setStatus(result.ok ? "done" : "error");
    setMessage(result.message);
    if (result.ok) setEmail("");
  };

  return (
    <aside className="w-full flex flex-col gap-10">
      {/* SEARCH */}
      <div>
        <label htmlFor={`${ids}-search`} className="sr-only">
          Search articles
        </label>
        <div className="relative">
          <input
            id={`${ids}-search`}
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search articles…"
            className="w-full bg-cream-soft border border-cream-dark rounded-xl py-3.5 pl-5 pr-12 font-body text-sm text-teal-900 placeholder:text-teal-900/40 focus:outline-none focus:border-teal-900/30 shadow-sm"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-900/40 pointer-events-none">
            <Search size={18} strokeWidth={1.5} aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* STAY UPDATED */}
      <div className="bg-teal-900 rounded-2xl p-8 relative overflow-hidden shadow-card">
        {/* Decorative leaf */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none" aria-hidden="true">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-gold-400"
          >
            <path
              d="M100 0C100 55.228 55.228 100 0 100C0 44.772 44.772 0 100 0Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M100 0C70 40 40 70 0 100" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10">
          <h3 className="font-display text-2xl text-white mb-2">Stay Updated</h3>
          <p className="font-body text-sm text-white/70 mb-6 leading-relaxed max-w-[200px]">
            Subscribe to our newsletter and never miss an update.
          </p>

          {status === "done" ? (
            <p role="status" className="font-body text-sm text-gold-400">
              Thanks — you&apos;re on the list.
            </p>
          ) : (
            <form onSubmit={subscribe} className="flex flex-col gap-3">
              <label htmlFor={`${ids}-email`} className="sr-only">
                Email address
              </label>
              <input
                id={`${ids}-email`}
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-cream border border-transparent rounded-lg py-3 px-4 font-body text-sm text-teal-900 placeholder:text-teal-900/40 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-pill bg-gold-600 text-teal-900 hover:bg-gold-500 w-full justify-center shadow-sm"
              >
                {status === "sending" ? "Subscribing…" : "Subscribe"}
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </button>
              {status === "error" && (
                <p role="alert" className="font-body text-xs text-gold-400">
                  {message}
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="bg-cream-soft rounded-2xl border border-cream-dark p-8 shadow-sm">
        <h3 className="font-display text-2xl text-teal-900 mb-6">Categories</h3>
        <ul className="flex flex-col gap-1">
          {categories.map(([name, count]) => {
            const isActive = activeCategory === name;
            return (
              <li key={name}>
                <button
                  type="button"
                  onClick={() => onCategoryChange(isActive ? null : name)}
                  aria-pressed={isActive}
                  className={`flex w-full items-center justify-between py-2.5 font-body text-sm transition-colors group ${
                    isActive ? "text-gold-600 font-semibold" : "text-teal-900/80 hover:text-gold-600"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Tag
                      size={16}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className={
                        isActive
                          ? "text-gold-600"
                          : "text-teal-900/40 group-hover:text-gold-600 transition-colors"
                      }
                    />
                    {name}
                  </span>
                  <span className="text-teal-900/40 group-hover:text-gold-600 transition-colors">
                    ({count})
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* RECENT POSTS */}
      <div className="bg-cream-soft rounded-2xl border border-cream-dark p-8 shadow-sm">
        <h3 className="font-display text-2xl text-teal-900 mb-6">Recent Posts</h3>
        <div className="flex flex-col gap-6 mb-8">
          {recent.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="flex items-start gap-4 group"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-sm font-bold text-teal-900 leading-snug mb-1 group-hover:text-gold-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="font-body text-[11px] text-teal-900/50">
                  {formatDate(post.date)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/blogs" className="btn-pill btn-outline-teal w-full justify-center">
          View All Articles
          <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
