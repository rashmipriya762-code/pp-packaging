import { AnimatedContainer, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/shared/PageHero";
import { whyChooseUs } from "@/lib/content";
import { Truck, Star, Headphones, Paintbrush } from "lucide-react";

const icons = [Truck, Star, Headphones, Paintbrush];

export function WhyChooseUs() {
  return (
    <section className="bg-primary section-padding-sm">
      <div className="container-custom">
        <SectionHeader
          label="Why Choose Us"
          title="What Sets Us Apart"
          subtitle="Delivering excellence across every step of your packaging journey."
          align="center"
          light
        />
        <AnimatedContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14" staggerDelay={0.1}>
          {whyChooseUs.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <AnimatedItem key={item.title}>
                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-accent/30 transition-all duration-300 cursor-default">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>
      </div>
    </section>
  );
}
