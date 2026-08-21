import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { CATEGORIES, productHref, siteConfig } from "@/lib/content";
import { CONTACT_HREF } from "@/lib/navigation";

// Inline social icons to bypass lucide-react version issues
const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-[14px] h-[14px]"
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-[14px] h-[14px]"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-[14px] h-[14px]"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  ...CATEGORIES.map((c) => ({ label: c.label, href: `/${c.slug}` })),
  { label: "Our Clients", href: "/clients" },
  { label: "Contact Us", href: CONTACT_HREF },
  { label: "Blogs", href: "/blogs" },
];

// Both derived from the product taxonomy — no more hand-typed labels pointing
// at pages that were never generated.
const boxLinks = (CATEGORIES.find((c) => c.slug === "boxes")?.items ?? []).map((item) => ({
  label: item.name,
  href: productHref(item),
}));

const industryLinks = (
  CATEGORIES.find((c) => c.slug === "bags-by-industry")?.items ?? []
).map((item) => ({ label: item.name, href: productHref(item) }));

const socials = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-body font-bold text-white tracking-wide text-sm mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-body text-sm text-gold-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-900 text-white w-full">
      <div className="container-custom pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1 flex flex-col">
            <Logo isFooter className="mb-6" />
            <p className="font-body text-white/80 text-sm leading-relaxed mb-6 pr-4">
              Thoughtful packaging today for a better tomorrow.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-auto">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-teal-900 transition-colors"
                  aria-label={`${siteConfig.name} on ${label}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Quick Links" links={quickLinks} />
          <LinkColumn title="Boxes" links={boxLinks} />
          <LinkColumn title="Bags by Industry" links={industryLinks} />

          {/* Column 5: Contact Us */}
          <div>
            <h4 className="font-body font-bold text-white tracking-wide text-sm mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 font-body text-sm text-gold-400 hover:text-white transition-colors group"
                >
                  <Phone
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-0.5 flex-shrink-0 text-white group-hover:text-gold-400 transition-colors"
                  />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 font-body text-sm text-gold-400 hover:text-white transition-colors group"
                >
                  <Mail
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-0.5 flex-shrink-0 text-white group-hover:text-gold-400 transition-colors"
                  />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-gold-400">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="mt-0.5 flex-shrink-0 text-white"
                />
                <span className="leading-relaxed">{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/60">
            © {year} {siteConfig.name}. All rights reserved.
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
