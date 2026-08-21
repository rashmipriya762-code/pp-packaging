import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/content";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Renders the real posts from content.ts. This grid used to hold nine
 * hardcoded articles whose "Read More" links all pointed at "#", while the
 * posts that actually had routes appeared nowhere.
 */
export function BlogGrid({
  posts,
  onReset,
}: {
  posts: BlogPost[];
  onReset?: () => void;
}) {
  if (posts.length === 0) {
    return (
      <div className="bg-white border border-cream-dark rounded-2xl p-12 text-center">
        <h3 className="font-display text-2xl text-teal-900 mb-2">No articles found</h3>
        <p className="font-body text-sm text-teal-900/60 mb-6">
          Try a different search term or category.
        </p>
        {onReset && (
          <button onClick={onReset} className="btn-pill btn-outline-teal">
            Clear filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map((article) => (
        <article
          key={article.slug}
          className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-cream-dark shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
        >
          {/* Image & Badge */}
          <div className="relative aspect-[4/3] w-full bg-white overflow-hidden">
            <Image
              src={article.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 36vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Category Badge */}
            <div className="absolute bottom-4 left-4 bg-teal-900 px-3 py-1 rounded-md shadow-sm">
              <span className="font-body text-[10px] font-bold text-cream uppercase tracking-wider">
                {article.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <div className="flex items-center gap-3 text-xs font-body text-teal-900/60 mb-4">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span className="w-1 h-1 rounded-full bg-teal-900/30" aria-hidden="true" />
              <span>{article.readTime}</span>
            </div>

            <h3 className="font-display text-xl text-teal-900 leading-snug mb-3 group-hover:text-gold-600 transition-colors">
              <Link href={`/blogs/${article.slug}`} className="after:absolute after:inset-0">
                {article.title}
              </Link>
            </h3>

            <p className="font-body text-sm text-teal-900/70 leading-relaxed mb-6 flex-grow">
              {article.excerpt}
            </p>

            <span className="inline-flex items-center gap-1 text-sm font-medium text-teal-900 group-hover:text-gold-600 transition-colors mt-auto">
              Read More
              <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
