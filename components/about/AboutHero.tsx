"use client";

import { motion } from "framer-motion";
import { KineticText } from "@/components/ui/KineticText";

export function AboutHero() {
  return (
    <section className="relative px-6 pt-40 pb-16 md:pt-48 md:pb-24">
      <div className="kinetic-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-[10px] tracking-[0.5em] uppercase text-bronze/70"
        >
          Studio Motionworks — Ahmedabad, India
        </motion.span>

        <div className="mt-6">
          <KineticText
            text="THE ARCHITECTS"
            as="h1"
            className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-tight text-ink"
            staggerDelay={0.04}
          />
          <KineticText
            text="OF MOTION."
            as="h1"
            className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-tight text-bronze"
            staggerDelay={0.04}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-xl font-body text-sm leading-relaxed text-ink-muted md:text-base"
        >
          A multidisciplinary kinetic art studio. We take the imagination of an
          artist and translate it into movement — sculpture that turns, walls
          that breathe, spaces that shift with light and time.
        </motion.p>

        {/* Meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4"
        >
          {[
            { label: "Founded", value: "Ahmedabad" },
            { label: "Discipline", value: "Kinetic Art" },
            { label: "Founder", value: "Anuj Anjaria" },
            { label: "Teaching", value: "CEPT University" },
          ].map((item) => (
            <div key={item.label}>
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-ink-subtle">
                {item.label}
              </span>
              <p className="mt-2 font-display text-sm font-bold tracking-tight text-ink">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}