import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function IndustryBanner() {
  return (
    <section className="bg-cream section-padding-sm">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection direction="left">
            <Link href="/bags-by-industry" className="group block">
              <div className="relative overflow-hidden bg-primary rounded-3xl p-10 h-64 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300">
                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/30 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <p className="text-label text-accent mb-3">Browse by Industry</p>
                  <h3 className="font-heading text-3xl font-bold text-white">Bags by Industry</h3>
                  <p className="font-body text-white/60 text-sm mt-2">Corporates · Retail · Food · Events · Jewellers</p>
                </div>
                <div className="relative z-10 flex items-center gap-2 text-accent font-body text-sm font-semibold group-hover:gap-4 transition-all">
                  Explore Industries <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.15}>
            <Link href="/bags-by-material" className="group block">
              <div className="relative overflow-hidden bg-secondary rounded-3xl p-10 h-64 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <p className="text-label text-accent mb-3">Browse by Material</p>
                  <h3 className="font-heading text-3xl font-bold text-white">Bags by Material</h3>
                  <p className="font-body text-white/60 text-sm mt-2">Paper · Jute · Cotton · Canvas · Non-Woven · Tote</p>
                </div>
                <div className="relative z-10 flex items-center gap-2 text-accent font-body text-sm font-semibold group-hover:gap-4 transition-all">
                  Explore Materials <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
