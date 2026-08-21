"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
}

// Cubic bezier as a proper tuple type for Framer Motion
const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: !reduceMotion && direction === "up" ? 40 : 0,
      x: 0, // Disabled horizontal shifts to prevent layout overflow scrollbars
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.7, delay, ease: EASE_SMOOTH },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const EASE_ITEM: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: EASE_ITEM,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
