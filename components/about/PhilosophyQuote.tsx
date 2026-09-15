"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PhilosophyQuote() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden px-6 py-32 md:py-48"
    >
      {/* Ambient radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/[0.06] blur-[140px]" />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <span className="font-body text-[10px] tracking-[0.5em] uppercase text-bronze/70">
          Our Philosophy
        </span>

        <blockquote className="mt-10 font-display text-[clamp(1.5rem,4.5vw,3.5rem)] font-bold leading-[1.2] tracking-tight text-ink">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            We don&rsquo;t just design objects.
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block text-bronze"
          >
            We translate imagination into movement.
          </motion.span>
        </blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-bronze/40" />
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-ink-subtle">
            Studio Motionworks
          </span>
          <span className="h-px w-12 bg-bronze/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}