"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/shared/PageHero";
import { testimonials } from "@/lib/content";

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <section className="bg-primary section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeader label="Testimonials" title="What Our Clients Say" light />
        </AnimatedSection>
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-12 text-center"
              >
                <Quote className="text-accent mx-auto mb-6" size={36} />
                <p className="font-body text-white/80 text-lg leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={16} />
                  ))}
                </div>
                <p className="font-heading text-xl font-bold text-white">{testimonials[current].author}</p>
                <p className="font-body text-accent text-sm mt-1">{testimonials[current].company}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => paginate(-1)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-all">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => { setDirection(idx > current ? 1 : -1); setCurrent(idx); }} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? 'bg-accent w-6' : 'bg-white/30'}`} />
              ))}
            </div>
            <button onClick={() => paginate(1)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
