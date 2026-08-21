import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export const metadata: Metadata = {
  title: "Our Blog",
  description: "Explore expert insights, industry trends, and sustainable ideas shaping the future of packaging.",
};

export default function BlogPage() {
  return (
    <div className="bg-cream min-h-screen">
      <BlogHero />
      <BlogLayout />
      <BlogCTA />
    </div>
  );
}
