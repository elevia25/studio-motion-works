"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { founder } from "@/data/about";

export function FounderSection() {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateX.set((e.clientY - cy) * -0.015);
    rotateY.set((e.clientX - cx) * 0.015);
  };

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
          The Founder
        </motion.span>

        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            rotateX.set(0);
            rotateY.set(0);
          }}
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: "preserve-3d",
            perspective: 1200,
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-10 overflow-hidden rounded-sm border border-border bg-surface"
        >
          {/* Ambient bronze glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-bronze/[0.06] blur-[120px]" />

          <div className="grid gap-12 p-8 md:grid-cols-[1fr_1.4fr] md:p-14">
            {/* Portrait side */}
            <div className="flex flex-col">
              {/* Portrait frame with orbiting bronze rings */}
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px]">
                <div className="absolute inset-0 overflow-hidden rounded-sm border border-border bg-gunmetal">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background:
                        "radial-gradient(circle at 40% 30%, #C5A06550, transparent 70%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-ink/80">
                      AA
                    </span>
                  </div>
                </div>

                {/* Orbiting bronze ring 1 */}
                <motion.div
                  className="pointer-events-none absolute -inset-4 rounded-sm border border-bronze/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                {/* Orbiting bronze ring 2 */}
                <motion.div
                  className="pointer-events-none absolute -inset-8 rounded-sm border border-bronze/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div className="mt-8 text-center">
                <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                  {founder.name}
                </h3>
                <p className="mt-1 font-body text-[10px] tracking-[0.3em] uppercase text-bronze">
                  {founder.role}
                </p>
              </div>
            </div>

            {/* Bio side */}
            <div className="flex flex-col justify-center">
              {founder.bio.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`font-body text-sm leading-[1.85] text-ink-muted md:text-base ${
                    i > 0 ? "mt-5" : ""
                  }`}
                >
                  {para}
                </motion.p>
              ))}

              {/* Fact grid */}
              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-8 sm:grid-cols-3">
                {founder.facts.map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <span className="font-body text-[9px] tracking-[0.3em] uppercase text-ink-subtle">
                      {fact.label}
                    </span>
                    <p className="mt-1.5 font-body text-xs tracking-[0.05em] text-ink">
                      {fact.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}