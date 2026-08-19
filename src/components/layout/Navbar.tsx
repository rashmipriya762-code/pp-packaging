"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { EnquiryModal } from "@/components/ui/EnquiryModal";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

// All subcategory links now resolve to /collections/[slug]
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Bags by Material",
    href: "/bags-by-material",
    dropdown: [
      { label: "Paper Bags", href: "/bags-by-material/" },
      { label: "Jute Bags", href: "/bags-by-material/" },
      { label: "Cotton Bags", href: "/bags-by-material/" },
      { label: "Canvas Bags", href: "/bags-by-material/" },
      { label: "Non-Woven Bags", href: "/bags-by-material/" },
      { label: "Organic & Eco-Friendly Bags", href: "/bags-by-material/" },
      { label: "Synthetic Bags", href: "/bags-by-material/" },
      { label: "Tote Bags", href: "/bags-by-material/" },
    ],
  },
  {
    label: "Bags by Industry",
    href: "/bags-by-industry",
    dropdown: [
      { label: "Corporates", href: "/bags-by-industry/" },
      { label: "Retail Stores & Brands", href: "/bags-by-industry/" },
      { label: "Sweet Industry", href: "/bags-by-industry/" },
      { label: "Cake Industry", href: "/bags-by-industry/" },
      { label: "Restaurants & Cafes", href: "/bags-by-industry/" },
      { label: "Jewellers", href: "/bags-by-industry/" },
      { label: "Fashion Designers", href: "/bags-by-industry/" },
      { label: "Events", href: "/bags-by-industry/" },
    ],
  },
  {
    label: "Boxes",
    href: "/boxes",
    dropdown: [
      { label: "Cardboard Boxes – 2 Layer", href: "/boxes/" },
      { label: "Cardboard Boxes – 3 Layer", href: "/boxes/" },
      { label: "Thermacol Boxes", href: "/boxes/" },
      { label: "Cake Boxes", href: "/boxes/" },
      { label: "Sweet Boxes", href: "/boxes/" },
    ],
  },
  { label: "Our Clients", href: "/clients" },
  { label: "Blogs", href: "/blogs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream h-[76px] flex items-center border-b ${
          scrolled ? "border-transparent shadow-sm" : "border-[#E5DCC9]"
        }`}
      >
        <div className="container-custom w-full h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 bg-teal-900 text-white flex items-center justify-center font-display font-bold text-xl rounded-md flex-shrink-0">
                P&P
              </div>
              <div className="hidden lg:block">
                <p className="font-display text-base font-bold text-teal-900 leading-none tracking-widest uppercase">
                  P&P Packaging
                </p>
              </div>
            </Link>

            {/* Center/Right: Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-6 ml-auto mr-8 h-full">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.label} className="relative group cursor-pointer h-full flex items-center">
                      <Link href={link.href} className="font-body text-sm font-medium text-teal-900 hover:text-gold-600 transition-colors flex items-center gap-1">
                        {link.label}
                      </Link>
                      <ChevronDown size={14} className="text-teal-900 group-hover:-rotate-180 group-hover:text-gold-600 transition-all duration-300 ml-1" />
                      {/* Dropdown Menu */}
                      <div className="absolute top-[76px] left-0 bg-white border border-[#E5DCC9] shadow-lg rounded-b-xl rounded-tr-xl py-3 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-5 py-2.5 font-body text-sm text-teal-900 hover:bg-cream-soft hover:text-gold-600 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`font-body text-sm transition-colors text-teal-900 h-full flex items-center ${
                      isActive ? "font-bold" : "font-medium hover:text-gold-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Far Right: CTA + Mobile */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="btn-pill btn-teal hidden sm:inline-flex px-6 py-3"
              >
                Get a Quote <ArrowRight size={16} strokeWidth={1.5} className="ml-1" />
              </button>
              
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden text-teal-900 p-1"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden absolute top-[76px] left-0 right-0 bg-cream border-b border-[#E5DCC9] shadow-xl py-4 px-4 flex flex-col gap-2 max-h-[calc(100vh-76px)] overflow-y-auto">
            {navLinks.map((link) => {
              if (link.dropdown) {
                const isExpanded = mobileExpanded[link.label];
                return (
                  <div key={link.label} className="flex flex-col rounded-lg bg-white/40">
                    <div className="flex items-center justify-between px-4 py-3">
                      <Link href={link.href} className="font-body text-sm font-medium text-teal-900">
                        {link.label}
                      </Link>
                      <button onClick={() => toggleMobileExpanded(link.label)} className="p-1 text-teal-900">
                        <ChevronDown size={16} className={`transition-transform duration-300 ${isExpanded ? "-rotate-180" : ""}`} />
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="flex flex-col gap-1 pb-3 px-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2 rounded-md font-body text-sm text-teal-900/80 hover:text-teal-900 hover:bg-[#E5DCC9]/50 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg font-body text-sm text-teal-900 ${
                    isActive ? "font-bold bg-[#E5DCC9]/50" : "font-medium hover:bg-[#E5DCC9]/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => { setEnquiryOpen(true); setMobileOpen(false); }}
              className="btn-pill btn-teal w-full justify-center mt-4 sm:hidden"
            >
              Get a Quote <ArrowRight size={16} strokeWidth={1.5} className="ml-1" />
            </button>
          </div>
        )}
      </header>

      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
}
