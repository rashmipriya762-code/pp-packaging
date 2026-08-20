"use client";
import { PRODUCT_IMAGES } from "@/lib/product-images";

import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, BookOpen, Package, Layers, TrendingUp, Sparkles, Lightbulb, Briefcase, FileText } from "lucide-react";

export function BlogSidebar() {
  return (
    <aside className="w-full flex flex-col gap-10">
      
      {/* SEARCH */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search articles..." 
          className="w-full bg-cream-soft border border-[#E5DCC9] rounded-xl py-3.5 pl-5 pr-12 font-body text-sm text-teal-900 placeholder:text-teal-900/40 focus:outline-none focus:border-teal-900/30 shadow-sm"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-900/40 pointer-events-none">
          <Search size={18} strokeWidth={1.5} />
        </div>
      </div>

      {/* STAY UPDATED */}
      <div className="bg-teal-900 rounded-2xl p-8 relative overflow-hidden shadow-card">
        {/* Decorative leaf */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gold-400">
            <path d="M100 0C100 55.228 55.228 100 0 100C0 44.772 44.772 0 100 0Z" stroke="currentColor" strokeWidth="2" />
            <path d="M100 0C70 40 40 70 0 100" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="relative z-10">
          <h3 className="font-display text-2xl text-white mb-2">Stay Updated</h3>
          <p className="font-body text-sm text-white/70 mb-6 leading-relaxed max-w-[200px]">
            Subscribe to our newsletter and never miss an update.
          </p>
          
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-cream border border-transparent rounded-lg py-3 px-4 font-body text-sm text-teal-900 placeholder:text-teal-900/40 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <button className="btn-pill bg-gold-600 text-teal-900 hover:bg-gold-500 w-full justify-center shadow-sm">
              Subscribe <ArrowRight size={14} strokeWidth={2} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="bg-cream-soft rounded-2xl border border-[#E5DCC9] p-8 shadow-sm">
        <h3 className="font-display text-2xl text-teal-900 mb-6">Categories</h3>
        <ul className="flex flex-col gap-1">
          {[
            { icon: BookOpen, name: "Sustainability", count: 8 },
            { icon: Package, name: "Packaging Guide", count: 6 },
            { icon: Layers, name: "Materials", count: 5 },
            { icon: TrendingUp, name: "Industry Trends", count: 6 },
            { icon: Sparkles, name: "Branding", count: 4 },
            { icon: Lightbulb, name: "Packaging Tips", count: 4 },
            { icon: Briefcase, name: "Business", count: 2 },
            { icon: FileText, name: "Case Studies", count: 1 },
          ].map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <li key={idx}>
                <Link href="#" className="flex items-center justify-between py-2.5 font-body text-sm text-teal-900/80 hover:text-gold-600 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Icon size={16} strokeWidth={1.5} className="text-teal-900/40 group-hover:text-gold-600 transition-colors" />
                    <span>{cat.name}</span>
                  </div>
                  <span className="text-teal-900/40 group-hover:text-gold-600 transition-colors">({cat.count})</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* POPULAR POSTS */}
      <div className="bg-cream-soft rounded-2xl border border-[#E5DCC9] p-8 shadow-sm">
        <h3 className="font-display text-2xl text-teal-900 mb-6">Popular Posts</h3>
        <div className="flex flex-col gap-6 mb-8">
          {[
            { title: "Sustainable Packaging: Building a Greener Tomorrow", date: "May 10, 2024", image: PRODUCT_IMAGES.customPackaging },
            { title: "The Ultimate Guide to Custom Packaging", date: "Apr 28, 2024", image: PRODUCT_IMAGES.customPackaging },
            { title: "Top Packaging Trends Shaping 2024", date: "Apr 02, 2024", image: PRODUCT_IMAGES.customPackaging },
            { title: "How Great Packaging Elevates Your Brand", date: "Mar 20, 2024", image: PRODUCT_IMAGES.customPackaging },
          ].map((post, idx) => (
            <Link key={idx} href="#" className="flex items-start gap-4 group">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-sm font-bold text-teal-900 leading-snug mb-1 group-hover:text-gold-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="font-body text-[11px] text-teal-900/50">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <Link href="#" className="btn-pill btn-outline-teal w-full justify-center">
          View All Articles <ArrowRight size={14} strokeWidth={1.5} className="ml-1" />
        </Link>
      </div>

    </aside>
  );
}
