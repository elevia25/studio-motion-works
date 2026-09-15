"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed left-6 top-1/2 z-80 hidden h-48 w-px -translate-y-1/2 bg-border lg:block">
      <motion.div
        className="absolute left-0 top-0 w-full origin-top bg-bronze"
        style={{ scaleY, height: "100%" }}
      />
      <motion.div
        className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-bronze"
        style={{
          top: useTransform(scaleY, [0, 1], ["0%", "100%"]),
        }}
      />
    </div>
  );
}

