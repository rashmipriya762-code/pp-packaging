import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/shared/PageHero";
import { whatWeOffer } from "@/lib/content";
import { Sparkles } from "lucide-react";

export function WhatWeOffer() {
  return (
    <section className="bg-cream section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <SectionHeader
              label="What We Offer"
              title="A Complete Packaging Partnership"
              subtitle="Everything you need to package your products beautifully and cost-effectively."
              align="left"
            />
          </AnimatedSection>
          <AnimatedContainer className="grid gap-4" staggerDelay={0.08}>
            {whatWeOffer.map((item, idx) => (
              <AnimatedItem key={idx}>
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <Sparkles className="text-accent group-hover:text-white transition-colors" size={15} />
                  </div>
                  <p className="font-body text-neutral-700 text-sm leading-relaxed pt-1">{item}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
