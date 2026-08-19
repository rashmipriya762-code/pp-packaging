import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

// Inline social icons to bypass lucide-react version issues
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[14px] h-[14px]">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[14px] h-[14px]">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[14px] h-[14px]">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-teal-900 text-white w-full">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1 flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white text-teal-900 flex items-center justify-center font-display font-bold text-xl rounded-md flex-shrink-0">
                P&P
              </div>
              <div>
                <p className="font-display text-base font-bold text-white leading-none tracking-widest uppercase">
                  P&P Packaging
                </p>
              </div>
            </Link>
            <p className="font-body text-white/80 text-sm leading-relaxed mb-6 pr-4">
              Thoughtful packaging today for a better tomorrow.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-auto">
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-teal-900 transition-colors" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-teal-900 transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-teal-900 transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-body font-bold text-white tracking-wide text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Bags by Material', 'Bags by Industry', 'Boxes', 'Our Clients', 'Blogs'].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-body text-sm text-gold-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="font-body font-bold text-white tracking-wide text-sm mb-5">Solutions</h4>
            <ul className="space-y-3">
              {['Corrugated Boxes', 'Rigid Boxes', 'Flexible Packaging', 'Protective Packaging', 'Custom Packaging', 'Packaging Accessories'].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-body text-sm text-gold-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div>
            <h4 className="font-body font-bold text-white tracking-wide text-sm mb-5">Industries</h4>
            <ul className="space-y-3">
              {['E-commerce', 'Food & Beverage', 'Cosmetics', 'Pharmaceuticals', 'Electronics', 'Retail'].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-body text-sm text-gold-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div>
            <h4 className="font-body font-bold text-white tracking-wide text-sm mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 font-body text-sm text-gold-400 hover:text-white transition-colors group">
                  <Phone size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-white group-hover:text-gold-400 transition-colors" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@pppackaging.in" className="flex items-start gap-3 font-body text-sm text-gold-400 hover:text-white transition-colors group">
                  <Mail size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-white group-hover:text-gold-400 transition-colors" />
                  hello@pppackaging.in
                </a>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-gold-400">
                <MapPin size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-white" />
                <span className="leading-relaxed">123 Packaging Street,<br/>Andheri East, Mumbai,<br/>Maharashtra 400069</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/60">
            © 2026 P&P Packaging. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/60 font-body font-medium px-2">VISA</span>
            <span className="text-xs text-white/60 font-body font-medium px-2">MC</span>
            <span className="text-xs text-white/60 font-body font-medium px-2">UPI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
