"use client";

import { motion } from "framer-motion";
import { KineticText } from "@/components/ui/KineticText";

const STRINGS = 24;

export function SantoorResonance() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="block text-center font-body text-[10px] tracking-[0.4em] uppercase text-bronze"
        >
          A Philosophy of Strings
        </motion.span>

        {/* Animated string visualization */}
        <div className="relative mt-16 h-48 md:h-56">
          {/* Two converging string arrays */}
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: STRINGS }, (_, i) => {
              const side = i < STRINGS / 2 ? "left" : "right";
              const localIndex = i < STRINGS / 2 ? i : i - STRINGS / 2;
              const count = STRINGS / 2;
              const offset = (localIndex - count / 2 + 0.5) * 16;

              // Left side = santoor strings (musical wave)
              // Right side = kinetic strings (mechanical wave)
              const isSantoor = side === "left";

              return (
                <motion.div
                  key={i}
                  className="absolute h-20 w-px origin-center"
                  style={{
                    left: `calc(50% + ${isSantoor ? offset - 4 : offset + 4}px)`,
                    background: isSantoor
                      ? "linear-gradient(to bottom, transparent, #C5A065, transparent)"
                      : "linear-gradient(to bottom, transparent, #B87333, transparent)",
                  }}
                  animate={{
                    scaleY: [0.4, 1, 0.4],
                    opacity: [0.3, 0.9, 0.3],
                  }}
                  transition={{
                    duration: isSantoor ? 2.4 : 1.8,
                    repeat: Infinity,
                    delay: localIndex * (isSantoor ? 0.12 : 0.08),
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </div>

          {/* Center fulcrum — the meeting point */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-bronze"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* The quote */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <KineticText
            text="A HUNDRED STRINGS."
            as="h2"
            className="justify-center font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-ink"
            staggerDelay={0.03}
          />
          <KineticText
            text="TWO SMALL MALLETS."
            as="h2"
            className="mt-1 justify-center font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-ink"
            staggerDelay={0.03}
          />
          <KineticText
            text="INVISIBLE FORCE, VISIBLE MOTION."
            as="h2"
            className="mt-1 justify-center font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-bronze"
            staggerDelay={0.03}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-10 max-w-xl font-body text-sm leading-[1.85] text-ink-muted md:text-base"
          >
            Anuj Anjaria plays the Santoor — the hammered dulcimer whose hundred
            strings are struck with two small wooden mallets. It is a practice
            of precision, resonance, and invisible force producing visible
            movement. It is the same principle that governs every kinetic work
            that leaves the studio.
          </motion.p>
        </div>
      </div>
    </section>
  );
}