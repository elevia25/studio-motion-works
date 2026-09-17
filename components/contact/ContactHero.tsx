"use client";

import { motion } from "framer-motion";
import { KineticText } from "@/components/ui/KineticText";

export function ContactHero() {
  return (
    <section className="relative px-6 pt-40 pb-16 md:pt-48 md:pb-20">
      <div className="kinetic-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-[10px] tracking-[0.5em] uppercase text-bronze/70"
        >
          Ahmedabad, India — Studio Motionworks
        </motion.span>

        <div className="mt-6">
          <KineticText
            text="INITIATE"
            as="h1"
            className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-tight text-ink"
            staggerDelay={0.04}
          />
          <KineticText
            text="CONNECTION."
            as="h1"
            className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-tight text-bronze"
            staggerDelay={0.04}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-lg font-body text-sm leading-relaxed text-ink-muted md:text-base"
        >
          Have a space that should move? A commission, a collaboration, or a
          question about kinetic art — we'd love to hear from you.
        </motion.p>
      </div>
    </section>
  );
}