import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { CATEGORIES } from "@/lib/content";
import { CONTACT_HREF } from "@/lib/navigation";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <div className="bg-cream min-h-screen flex items-center">
      <div className="container-custom py-24">
        <p className="eyebrow text-gold-600 mb-5">Error 404</p>
        <h1 className="font-display text-5xl md:text-6xl text-teal-900 leading-[1.05] mb-6">
          We couldn&apos;t find that page.
        </h1>
        <p className="font-body text-text-muted text-lg max-w-xl mb-10">
          The link may be out of date, or the page may have moved. Here is where to go next.
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <Link href="/" className="btn-pill btn-teal">
            <Home size={16} strokeWidth={1.5} aria-hidden="true" />
            Back to Home
          </Link>
          <Link href={CONTACT_HREF} className="btn-pill btn-outline-teal">
            Contact Us
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        <nav aria-label="Product categories" className="border-t border-cream-dark pt-10">
          <h2 className="font-body font-bold text-sm text-teal-900 mb-5">Browse our range</h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/${category.slug}`}
                  className="block bg-white border border-cream-dark rounded-2xl p-6 hover:shadow-card-hover transition-shadow group"
                >
                  <span className="font-display text-xl text-teal-900 group-hover:text-gold-600 transition-colors">
                    {category.label}
                  </span>
                  <span className="mt-2 block font-body text-xs text-teal-900/60 leading-relaxed">
                    {category.blurb}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
