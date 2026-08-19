import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedContainer, AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/shared/PageHero";

const featured = [
  { name: 'Paper Bags', href: '/bags-by-material/paper-bags', bg: 'from-cream to-cream-light', label: 'Bags by Material', icon: '📦', desc: 'Elegant retail & gift packaging' },
  { name: 'Jute Bags', href: '/bags-by-material/jute-bags', bg: 'from-secondary/20 to-secondary/10', label: 'Eco-Friendly', icon: '🌿', desc: 'Natural & sustainable choice' },
  { name: 'Cotton Bags', href: '/bags-by-material/cotton-bags', bg: 'from-oyster to-cream', label: 'Premium Quality', icon: '✨', desc: 'Soft, washable & brandable' },
  { name: 'Cardboard Boxes', href: '/boxes/cardboard-2-layer', bg: 'from-primary/10 to-primary/5', label: 'Boxes', icon: '📫', desc: 'Reliable shipping & retail' },
  { name: 'Cake Boxes', href: '/boxes/cake-boxes', bg: 'from-accent/15 to-accent/5', label: 'Food Packaging', icon: '🎂', desc: 'Food-safe & beautiful' },
  { name: 'Sweet Boxes', href: '/boxes/sweet-boxes', bg: 'from-cream-dark/30 to-cream/10', label: 'Gift Packaging', icon: '🎁', desc: 'Perfect for festive gifting' },
];

export function FeaturedProducts() {
  return (
    <section className="bg-oyster section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeader
            label="Our Products"
            title="Packaging Solutions for Every Need"
            subtitle="From premium paper bags to sturdy corrugated boxes — we have the perfect packaging for your business."
          />
        </AnimatedSection>
        <AnimatedContainer className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-14" staggerDelay={0.08}>
          {featured.map((item) => (
            <AnimatedItem key={item.name}>
              <Link href={item.href} className="group block">
                <div className={`bg-gradient-to-br ${item.bg} rounded-2xl p-7 border border-white/60 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 h-full`}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="text-label text-accent mb-1.5">{item.label}</p>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">{item.name}</h3>
                  <p className="font-body text-sm text-neutral-600 mb-5">{item.desc}</p>
                  <div className="flex items-center gap-2 text-accent font-body text-sm font-semibold group-hover:gap-3 transition-all">
                    Enquire Now <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
