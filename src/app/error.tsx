"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-cream min-h-screen flex items-center">
      <div className="container-custom py-24">
        <p className="eyebrow text-gold-600 mb-5">Something went wrong</p>
        <h1 className="font-display text-4xl md:text-5xl text-teal-900 leading-[1.05] mb-6">
          This page didn&apos;t load.
        </h1>
        <p className="font-body text-text-muted text-lg max-w-xl mb-10">
          Try again — if it keeps happening, please get in touch and we&apos;ll sort it out.
          {error.digest && (
            <span className="block mt-3 font-body text-xs text-teal-900/50">
              Reference: {error.digest}
            </span>
          )}
        </p>
        <div className="flex flex-wrap gap-4">
          <button onClick={reset} className="btn-pill btn-teal">
            <RotateCcw size={16} strokeWidth={1.5} aria-hidden="true" />
            Try again
          </button>
          <Link href="/" className="btn-pill btn-outline-teal">
            <Home size={16} strokeWidth={1.5} aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
