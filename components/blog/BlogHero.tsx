"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KineticText } from "@/components/ui/KineticText";
import { categories } from "@/data/posts";

export function BlogHero({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}) {
  return (
    <section className="relative px-6 pt-40 pb-16 md:pt-48 md:pb-24">
      {/* Ambient glow */}
      <div className="kinetic-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-[10px] tracking-[0.5em] uppercase text-bronze/70"
        >
          The Journal
        </motion.span>

        <div className="mt-6">
          <KineticText
            text="NOTES ON"
            as="h1"
            className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-tight text-ink"
            staggerDelay={0.05}
          />
          <KineticText
            text="MOTION."
            as="h1"
            className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-tight text-bronze"
            staggerDelay={0.05}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-lg font-body text-sm leading-relaxed text-ink-muted"
        >
          Essays, process notes, and theory from the studio floor. On
          sculpture, typography, and the architecture of movement.
        </motion.p>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              data-magnetic
              onClick={() => onCategoryChange(cat)}
              className="relative overflow-hidden rounded-full border border-border px-5 py-2.5 font-body text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
            >
              {/* Animated fill for active state */}
              <AnimatePresence>
                {activeCategory === cat && (
                  <motion.span
                    layoutId="category-fill"
                    className="absolute inset-0 bg-bronze"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </AnimatePresence>

              <span
                className={`relative z-10 transition-colors duration-300 ${
                  activeCategory === cat
                    ? "text-void"
                    : "text-ink-muted hover:text-bronze"
                }`}
              >
                {cat}
              </span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}