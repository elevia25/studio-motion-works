"use client";

import { motion } from "framer-motion";
import { LogoAssembly } from "./LogoAssembly";
import { KineticText } from "@/components/ui/KineticText";

export function OriginSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Text side */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="font-body text-[10px] tracking-[0.4em] uppercase text-bronze"
          >
            The Origin
          </motion.span>

          <div className="mt-6">
            <KineticText
              text="IMAGINATION,"
              as="h2"
              className="font-display text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1] tracking-tight text-ink"
              staggerDelay={0.05}
            />
            <KineticText
              text="SET IN MOTION."
              as="h2"
              className="font-display text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1] tracking-tight text-bronze"
              staggerDelay={0.05}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-lg font-body text-base leading-[1.8] text-ink-muted"
          >
            Studio Motionworks is a multidisciplinary art practice based in
            Ahmedabad, India. We specialize in kinetic art — work in which
            movement is not an effect applied to a finished object, but the
            very subject of the piece.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 max-w-lg font-body text-base leading-[1.8] text-ink-muted"
          >
            Our work sits at the intersection of sculpture, architecture,
            engineering, and music — because the questions that matter in
            kinetic art are rarely answered by a single discipline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-bronze/40" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-ink-subtle">
              Est. Ahmedabad
            </span>
          </motion.div>
        </div>

        {/* 3D Logo Assembly side */}
        <div className="relative">
          <LogoAssembly />
        </div>
      </div>
    </section>
  );
}