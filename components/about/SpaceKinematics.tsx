"use client";

import { motion } from "framer-motion";
import { KineticText } from "@/components/ui/KineticText";

export function SpaceKinematics() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr] md:items-center">
          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="font-body text-[10px] tracking-[0.4em] uppercase text-bronze"
            >
              Teaching & Research
            </motion.span>

            <div className="mt-6">
              <KineticText
                text="SPACE"
                as="h2"
                className="font-display text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1] tracking-tight text-ink"
                staggerDelay={0.05}
              />
              <KineticText
                text="KINEMATICS."
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
              className="mt-8 max-w-lg font-body text-base leading-[1.85] text-ink-muted"
            >
              Anuj Anjaria has introduced Space Kinematics as a distinct field
              of study — a discipline that treats movement not as decoration
              applied to architecture, but as a fundamental property of space
              itself.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 max-w-lg font-body text-base leading-[1.85] text-ink-muted"
            >
              He teaches it as Visiting Faculty at CEPT University, where a new
              generation of interior designers and architects is learning to
              think about how spaces move — how they respond, shift, breathe,
              and adapt to the people inside them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 inline-flex items-center gap-4 rounded-full border border-border px-6 py-3"
            >
              <span className="h-1.5 w-1.5 rotate-45 bg-bronze" />
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-ink-muted">
                Visiting Faculty · CEPT University
              </span>
            </motion.div>
          </div>

          {/* Visual — a grid of animated nodes representing the study of space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square overflow-hidden rounded-sm border border-border bg-gunmetal"
          >
            {/* Grid */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
              {Array.from({ length: 36 }, (_, i) => {
                const row = Math.floor(i / 6);
                const col = i % 6;
                const isActive =
                  (row + col) % 3 === 0 || (row * col) % 5 === 0;
                return (
                  <div
                    key={i}
                    className="relative flex items-center justify-center border border-white/[0.03]"
                  >
                    {isActive && (
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-bronze"
                        animate={{
                          scale: [0.6, 1.4, 0.6],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: (row + col) * 0.15,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Diagonal sweep */}
            <motion.div
              className="pointer-events-none absolute inset-y-0 w-32 -skew-x-12"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(197,160,101,0.08), transparent)",
              }}
              animate={{ x: ["-20%", "120%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Corner label */}
            <div className="absolute bottom-4 left-4">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-bronze/70">
                Study 02 — Motion Fields
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}