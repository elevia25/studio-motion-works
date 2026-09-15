"use client";

import { motion } from "framer-motion";

export function EmptyState({ category }: { category: string }) {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-8 flex h-32 w-32 items-center justify-center"
      >
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-bronze/20"
            style={{
              width: `${(i + 1) * 60}px`,
              height: `${(i + 1) * 60}px`,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 20 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        <span className="font-display text-lg font-bold text-bronze">Ø</span>
      </motion.div>

      <p className="font-display text-xl font-bold text-ink">
        No {category.toLowerCase()} projects yet
      </p>
      <p className="mt-3 max-w-sm text-center font-body text-sm text-ink-muted">
        {`We're working on something. Check back soon, or explore another
        category.`}
      </p>
    </section>
  );
}
