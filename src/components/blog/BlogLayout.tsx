"use client";

import { useMemo, useState } from "react";
import { BlogToolbar, type BlogSort } from "./BlogToolbar";
import { BlogGrid } from "./BlogGrid";
import { BlogSidebar } from "./BlogSidebar";
import { blogPosts } from "@/lib/content";

export function BlogLayout() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<BlogSort>("latest");
  const [category, setCategory] = useState<string | null>(null);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    let posts = blogPosts.filter((post) => {
      const matchesQuery =
        !needle ||
        post.title.toLowerCase().includes(needle) ||
        post.excerpt.toLowerCase().includes(needle) ||
        post.category.toLowerCase().includes(needle);
      const matchesCategory = !category || post.category === category;
      return matchesQuery && matchesCategory;
    });

    posts = [...posts].sort((a, b) =>
      sort === "latest"
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date)
    );
    return posts;
  }, [query, sort, category]);

  const reset = () => {
    setQuery("");
    setCategory(null);
    setSort("latest");
  };

  return (
    <section id="articles" className="bg-cream pt-12 pb-20 scroll-mt-24">
      <div className="container-custom">
        <BlogToolbar
          sort={sort}
          onSortChange={setSort}
          shown={visible.length}
          total={blogPosts.length}
          activeCategory={category}
          onClearCategory={() => setCategory(null)}
        />

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Main Content */}
          <div className="w-full lg:w-[72%]">
            <BlogGrid posts={visible} onReset={reset} />
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[28%]">
            <BlogSidebar
              query={query}
              onQueryChange={setQuery}
              activeCategory={category}
              onCategoryChange={setCategory}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
