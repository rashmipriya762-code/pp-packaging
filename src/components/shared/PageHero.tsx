import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  backgroundClass?: string;
  children?: React.ReactNode;
}

export function PageHero({
  label,
  title,
  subtitle,
  backgroundClass = "bg-primary",
  children,
}: PageHeroProps) {
  return (
    <section className={`${backgroundClass} relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,151,10,0.08),transparent_60%)] pointer-events-none" />

      <div className="container-custom py-24 md:py-32 relative z-10">
        <AnimatedSection direction="up">
          {label && (
            <p className="text-label text-accent mb-4">{label}</p>
          )}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
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

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const itemsAlign = align === "center" ? "items-center" : "items-start";

  return (
    <AnimatedSection className={`flex flex-col ${itemsAlign} ${textAlign}`}>
      {label && (
        <p className={`text-label mb-3 ${light ? "text-accent" : "text-accent"}`}>
          {label}
        </p>
      )}
      <h2
        className={`font-heading text-section-title font-bold ${light ? "text-white" : "text-primary"}`}
      >
        {title}
      </h2>
      {align === "center" && (
        <div className="divider-gold mt-4 mx-auto" />
      )}
      {align === "left" && (
        <div className="divider-gold mt-4" />
      )}
      {subtitle && (
        <p
          className={`font-body text-base md:text-lg mt-4 max-w-2xl leading-relaxed ${
            light ? "text-white/70" : "text-neutral-600"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
