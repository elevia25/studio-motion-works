"use client";

import { motion } from "framer-motion";
import { values } from "@/data/about";

export function ValuesGrid() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-body text-[10px] tracking-[0.4em] uppercase text-bronze"
        >
          How We Work
        </motion.span>

        <h2 className="mt-6 max-w-2xl font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-ink">
          Four principles that shape{" "}
          <span className="text-bronze">every commission.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden bg-surface p-8 transition-colors duration-500 hover:bg-gunmetal"
            >
              <span className="font-display text-4xl font-bold text-bronze/25 transition-colors duration-500 group-hover:text-bronze/50">
                {value.number}
              </span>

              <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-ink">
                {value.title}
              </h3>

              <p className="mt-4 font-body text-xs leading-[1.8] text-ink-muted">
                {value.description}
              </p>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px origin-left bg-bronze"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                style={{ width: "100%" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}