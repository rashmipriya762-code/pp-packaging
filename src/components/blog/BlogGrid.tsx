"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "SUSTAINABILITY",
    date: "May 10, 2024",
    readTime: "5 min read",
    title: "Sustainable Packaging: Building a Greener Tomorrow",
    desc: "Discover how eco-friendly packaging solutions can reduce environmental impact and create a better future.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "PACKAGING GUIDE",
    date: "Apr 28, 2024",
    readTime: "6 min read",
    title: "The Ultimate Guide to Custom Packaging",
    desc: "A complete guide to creating custom packaging that reflects your brand and delights your customers.",
    image: "https://images.unsplash.com/photo-1607344645866-eea01fb9cc2e?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "MATERIALS",
    date: "Apr 15, 2024",
    readTime: "4 min read",
    title: "Understanding Corrugated Packaging: Strong. Reliable. Versatile.",
    desc: "Learn why corrugated boxes remain a trusted choice for businesses across industries.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "INDUSTRY TRENDS",
    date: "Apr 02, 2024",
    readTime: "5 min read",
    title: "Top Packaging Trends Shaping 2024",
    desc: "Stay ahead with the latest packaging trends driving innovation, sustainability, and customer experience.",
    image: "https://images.unsplash.com/photo-1620021305602-0e86b2451f28?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "BRANDING",
    date: "Mar 20, 2024",
    readTime: "4 min read",
    title: "How Great Packaging Elevates Your Brand",
    desc: "The power of packaging in building brand identity, trust, and customer loyalty.",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "PACKAGING TIPS",
    date: "Mar 05, 2024",
    readTime: "3 min read",
    title: "7 Tips for Choosing the Right Packaging for Your Product",
    desc: "Make the right choice for your product with these expert tips on packaging selection.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "BUSINESS",
    date: "Feb 18, 2024",
    readTime: "5 min read",
    title: "Bulk Packaging: Benefits for Growing Businesses",
    desc: "Why ordering in bulk can save costs, ensure consistency, and support business growth.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "PRINTING",
    date: "Feb 05, 2024",
    readTime: "4 min read",
    title: "Printing & Finishing Options That Make an Impact",
    desc: "Explore different printing and finishing techniques to make your packaging stand out.",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "CASE STUDIES",
    date: "Jan 22, 2024",
    readTime: "6 min read",
    title: "How We Helped Brands Create Packaging That Sells",
    desc: "Real stories of brands that improved their customer experience with custom packaging.",
    image: "https://images.unsplash.com/photo-1605814513106-c89b33a5f4ce?auto=format&fit=crop&q=80&w=600"
  }
];

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, idx) => (
        <article 
          key={idx} 
          className="bg-cream-soft rounded-2xl border border-[#E5DCC9] overflow-hidden flex flex-col group hover:shadow-card-hover transition-all duration-300"
        >
          {/* Image & Badge */}
          <div className="relative aspect-[4/3] w-full bg-white overflow-hidden">
            <Image 
              src={article.image}
              alt={article.title}
              fill
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
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-teal-900/30" />
              <span>{article.readTime}</span>
            </div>
            
            <h3 className="font-display text-xl text-teal-900 leading-snug mb-3 group-hover:text-gold-600 transition-colors">
              {article.title}
            </h3>
            
            <p className="font-body text-sm text-teal-900/70 leading-relaxed mb-6 flex-grow">
              {article.desc}
            </p>
            
            <Link href="#" className="inline-flex items-center text-sm font-medium text-teal-900 group-hover:text-gold-600 transition-colors mt-auto">
              Read More <ArrowRight size={14} strokeWidth={1.5} className="ml-1" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
