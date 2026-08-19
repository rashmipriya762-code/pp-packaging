import { Award, Package, Truck, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    icon: <Award size={32} strokeWidth={1.5} />,
    title: "Expert Support",
    desc: "Get expert advice from our packaging specialists.",
  },
  {
    icon: <Package size={32} strokeWidth={1.5} />,
    title: "Custom Solutions",
    desc: "Tailored packaging solutions for your unique needs.",
  },
  {
    icon: <Truck size={32} strokeWidth={1.5} />,
    title: "Fast Turnaround",
    desc: "Quick quotes and on-time delivery, every time.",
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: "Quality Assured",
    desc: "Premium quality materials with strict quality checks.",
  },
];

export function ClientsTrustStrip() {
  return (
    <section className="bg-cream pb-16 lg:pb-24">
      <div className="container-custom">
        <div className="bg-teal-900 rounded-3xl p-8 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex gap-5 items-start lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <div className="text-gold-600 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-body font-bold text-white text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body text-white/70 text-sm leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
