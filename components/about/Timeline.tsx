"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { milestones } from "@/data/about";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-body text-[10px] tracking-[0.4em] uppercase text-bronze"
        >
          The Journey
        </motion.span>

        <h2 className="mt-6 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-ink">
          From a drawing board to{" "}
          <span className="text-bronze">an airport terminal.</span>
        </h2>

        <div ref={containerRef} className="relative mt-20 pl-8 md:pl-0">
          {/* Central rail — hidden on mobile */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2">
            <motion.div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-bronze to-copper"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-20">
            {milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={milestone.phase}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 ${
                    isLeft ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  {/* Node marker */}
                  <div className="absolute -left-8 top-2 md:left-1/2 md:-translate-x-1/2">
                    <div className="relative">
                      <span className="block h-3 w-3 rotate-45 border border-bronze bg-void" />
                      <motion.span
                        className="absolute inset-0 rotate-45 border border-bronze/40"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}>
                    <div
                      className={`flex items-center gap-3 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="font-display text-2xl font-bold text-bronze/40">
                        {milestone.phase}
                      </span>
                      <span className="h-px w-8 bg-bronze/40" />
                      <span className="font-body text-[9px] tracking-[0.3em] uppercase text-ink-subtle">
                        {milestone.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink md:text-xl">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-[1.8] text-ink-muted">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Empty column on the other side */}
                  <div className="hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}