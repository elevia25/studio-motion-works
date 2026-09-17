"use client";

import { motion } from "framer-motion";
import { KineticText } from "@/components/ui/KineticText";

export function ContactClosing() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <KineticText
          text="EVERY PROJECT BEGINS"
          as="h2"
          className="justify-center font-display text-[clamp(1.5rem,4vw,2.8rem)] font-bold leading-[1.15] tracking-tight text-ink"
          staggerDelay={0.03}
        />
        <KineticText
          text="WITH A CONVERSATION."
          as="h2"
          className="mt-1 justify-center font-display text-[clamp(1.5rem,4vw,2.8rem)] font-bold leading-[1.15] tracking-tight text-bronze"
          staggerDelay={0.03}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-8 max-w-md font-body text-sm leading-relaxed text-ink-muted"
        >
          The best kinetic work starts with a good question. Tell us what you
          see when you close your eyes — we'll help you make it move.
        </motion.p>

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
      </div>
    </section>
  );
}