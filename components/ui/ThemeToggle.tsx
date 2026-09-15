"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch — render a static placeholder until mounted
  if (!mounted) {
    return (
      <div className="fixed bottom-8 right-8 z-[200] h-12 w-12 rounded-full border border-white/[0.06] bg-charcoal/80 backdrop-blur-xl" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      data-magnetic
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group fixed bottom-8 right-8 z-[200] flex h-12 w-12 items-center justify-center rounded-full border border-border bg-charcoal/80 backdrop-blur-xl transition-colors duration-500 hover:border-bronze/40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        boxShadow: "0 0 24px rgba(197,160,101,0.12)",
      }}
    >
      {/* Ambient bronze ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-bronze/20"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Icon container */}
      <div className="relative h-5 w-5">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.svg
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              viewBox="0 0 24 24"
              fill="none"
              className="absolute inset-0 h-full w-full text-bronze"
            >
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="currentColor"
                fillOpacity="0.15"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              viewBox="0 0 24 24"
              fill="none"
              className="absolute inset-0 h-full w-full text-bronze"
            >
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="currentColor"
                fillOpacity="0.15"
              />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line
                  key={angle}
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  transform={`rotate(${angle} 12 12)`}
                />
              ))}
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}