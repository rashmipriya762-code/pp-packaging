import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/shared/PageHero";

const clientNames = [
  'Reliance Retail', 'Taj Hotels', 'Malabar Gold', 'Haldirams', 'Fabindia', 'Bikanervala', 
  'Raymond', 'Tanishq', 'D-Mart', 'Monginis', 'Future Group', 'Shoppers Stop',
];

export function ClientLogos() {
  return (
    <section className="bg-oyster section-padding-sm">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeader
            label="Trusted By"
            title="Brands That Trust Us"
            subtitle="Proudly packaging for India's leading retail, food, jewellery, and corporate brands."
          />
        </AnimatedSection>
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {clientNames.map((name, idx) => (
            <AnimatedSection key={name} delay={idx * 0.05}>
              <div className="bg-white border border-cream-dark/30 rounded-xl p-4 flex items-center justify-center h-16 hover:border-accent/30 hover:shadow-card transition-all duration-300">
                <span className="font-body text-xs font-semibold text-neutral-600 text-center leading-tight">{name}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
