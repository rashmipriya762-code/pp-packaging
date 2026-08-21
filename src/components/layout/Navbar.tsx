"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { EnquiryModal } from "@/components/ui/EnquiryModal";
import { Logo } from "@/components/shared/Logo";
import { navLinks } from "@/lib/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  // Closing on navigation is a click concern, not an effect — calling setState
  // synchronously in an effect keyed on pathname triggers a cascading render.
  const closeMobile = () => setMobileOpen(false);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream h-[76px] flex items-center border-b ${
          scrolled ? "border-transparent shadow-sm" : "border-cream-dark"
        }`}
      >
        <div className="container-custom w-full h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left: Logo */}
            <Logo />

            {/* Center/Right: Desktop Nav */}
            <nav
              aria-label="Main"
              className="hidden xl:flex items-center gap-6 ml-auto mr-8 h-full"
            >
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative group h-full flex items-center"
                    >
                      <Link
                        href={link.href}
                        aria-current={isCurrent(link.href) ? "page" : undefined}
                        className="font-body text-sm font-medium text-teal-900 hover:text-gold-600 transition-colors flex items-center gap-1"
                      >
                        {link.label}
                      </Link>
                      <ChevronDown
                        size={14}
                        aria-hidden="true"
                        className="text-teal-900 group-hover:-rotate-180 group-hover:text-gold-600 transition-all duration-300 ml-1"
                      />
                      {/* Dropdown Menu */}
                      <div className="absolute top-[76px] left-0 bg-white border border-cream-dark shadow-card rounded-b-xl rounded-tr-xl py-3 min-w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
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

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    className={`font-body text-sm transition-colors text-teal-900 h-full flex items-center ${
                      isCurrent(link.href) ? "font-bold" : "font-medium hover:text-gold-600"
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
                Get a Quote{" "}
                <ArrowRight size={16} strokeWidth={1.5} className="ml-1" aria-hidden="true" />
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden text-teal-900 p-1"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? (
                  <X size={24} strokeWidth={1.5} />
                ) : (
                  <Menu size={24} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="xl:hidden absolute top-[76px] left-0 right-0 bg-cream border-b border-cream-dark shadow-card-hover py-4 px-4 flex flex-col gap-2 max-h-[calc(100vh-76px)] overflow-y-auto"
          >
            {navLinks.map((link) => {
              if (link.dropdown) {
                const isExpanded = Boolean(mobileExpanded[link.label]);
                return (
                  <div key={link.label} className="flex flex-col rounded-lg bg-white/40">
                    <div className="flex items-center justify-between px-4 py-3">
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className="font-body text-sm font-medium text-teal-900"
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={() => toggleMobileExpanded(link.label)}
                        className="p-1 text-teal-900"
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${link.label}`}
                      >
                        <ChevronDown
                          size={16}
                          aria-hidden="true"
                          className={`transition-transform duration-300 ${
                            isExpanded ? "-rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="flex flex-col gap-1 pb-3 px-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMobile}
                            className="block px-4 py-2 rounded-md font-body text-sm text-teal-900/80 hover:text-teal-900 hover:bg-cream-dark/50 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobile}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className={`block px-4 py-3 rounded-lg font-body text-sm text-teal-900 ${
                    isCurrent(link.href)
                      ? "font-bold bg-cream-dark/50"
                      : "font-medium hover:bg-cream-dark/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setEnquiryOpen(true);
                setMobileOpen(false);
              }}
              className="btn-pill btn-teal w-full justify-center mt-4 sm:hidden"
            >
              Get a Quote{" "}
              <ArrowRight size={16} strokeWidth={1.5} className="ml-1" aria-hidden="true" />
            </button>
          </div>
        )}
      </header>

      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
}
