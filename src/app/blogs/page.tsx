import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export const metadata: Metadata = {
  title: "Our Blog — P&P Packaging",
  description: "Explore expert insights, industry trends, and sustainable ideas shaping the future of packaging.",
};

export default function BlogPage() {
  return (
    <main className="bg-cream min-h-screen">
      <BlogHero />
      <BlogLayout />
      <BlogCTA />
    </main>
  );
}
