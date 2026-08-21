import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  /** Must be a class that exists — `bg-primary` silently emitted nothing. */
  backgroundClass?: string;
  children?: React.ReactNode;
}

export function PageHero({
  label,
  title,
  subtitle,
  backgroundClass = "bg-teal-900",
  children,
}: PageHeroProps) {
  return (
    <section className={`${backgroundClass} relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-600/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,151,10,0.08),transparent_60%)] pointer-events-none" />

      <div className="container-custom py-20 md:py-28 relative z-10">
        <AnimatedSection direction="up">
          {label && <p className="eyebrow text-gold-400 mb-4">{label}</p>}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-white/70 text-lg mt-4 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </AnimatedSection>
      </div>
    </section>
  );
}
