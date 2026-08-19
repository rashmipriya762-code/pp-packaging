import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/content";

export function AboutSnippet() {
  return (
    <section className="bg-oyster section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image / Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <div className="relative w-14 h-14">
                      <Image src="/images/logo.png" alt="P&P Packaging" fill className="object-contain" sizes="56px" />
                    </div>
                  </div>
                  <p className="text-label text-accent mb-3">About P&P Packaging</p>
                  <h3 className="font-heading text-3xl font-bold text-white mb-4">Mumbai's Premier Packaging Partner</h3>
                  <p className="font-body text-white/70 text-sm leading-relaxed">Founded in {siteConfig.established}, we've grown from a small packaging workshop to one of India's most trusted custom packaging manufacturers, serving industries from food & beverage to luxury retail.</p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {[['15+', 'Years of Excellence'], ['500+', 'Satisfied Clients'], ['50+', 'Cities Covered'], ['1M+', 'Units Delivered']].map(([num, label]) => (
                      <div key={label} className="bg-white/10 rounded-xl p-4">
                        <p className="font-heading text-2xl font-bold text-accent">{num}</p>
                        <p className="font-body text-white/60 text-xs mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Text */}
          <AnimatedSection direction="right" delay={0.2}>
            <p className="text-label mb-4">Our Story</p>
            <h2 className="font-heading text-section-title font-bold text-primary mb-4">
              Crafting Packaging That Tells Your Brand Story
            </h2>
            <div className="divider-gold mb-6" />
            <p className="font-body text-neutral-600 leading-relaxed mb-4">
              At P&P Packaging, we believe that great packaging does more than protect a product — it communicates your brand's values, quality, and personality. Since {siteConfig.established}, we've been partnering with businesses of all sizes to create packaging that makes a lasting impression.
            </p>
            <p className="font-body text-neutral-600 leading-relaxed mb-8">
              From eco-conscious jute bags for sustainability-focused brands to premium velvet pouches for luxury jewellers, our expertise spans the full spectrum of packaging materials and industries.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                'ISO-certified manufacturing facility in Mumbai',
                'In-house design team for custom artwork',
                'Sustainable and eco-friendly material options',
                'PAN India delivery with reliable logistics',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={18} />
                  <span className="font-body text-sm text-neutral-700">{point}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-primary">
              Read Our Full Story <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
