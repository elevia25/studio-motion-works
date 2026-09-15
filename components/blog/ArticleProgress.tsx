"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ArticleProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const percent = useTransform(scrollYProgress, (v) =>
    Math.round(v * 100).toString().padStart(2, "0")
  );

  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <>
      {/* Top bar */}
      <div className="fixed left-0 top-0 z-[150] h-[2px] w-full bg-border">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-bronze to-copper"
          style={{ scaleX }}
        />
      </div>

      {/* Percentage indicator — bottom left */}
      <motion.div
        style={{ opacity }}
        className="fixed bottom-8 left-8 z-[150] hidden items-center gap-3 lg:flex"
      >
        <div className="h-px w-8 bg-bronze/40" />
        <span className="font-body text-[10px] tracking-[0.3em] tabular-nums text-bronze">
          <motion.span>{percent}</motion.span>
          <span className="text-ink-subtle">/100</span>
        </span>
      </motion.div>
    </>
  );
}