"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const shareItems = [
  { label: "Twitter", icon: "X" },
  { label: "LinkedIn", icon: "in" },
  { label: "Copy Link", icon: "↗" },
];

export function ShareRow({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="my-16 flex flex-col items-start gap-5 border-y border-border py-8 md:flex-row md:items-center md:justify-between">
      <div>
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-ink-subtle">
          Share this essay
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {shareItems.map((item) => (
          <motion.button
            key={item.label}
            data-magnetic
            onClick={item.label === "Copy Link" ? handleCopy : undefined}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-border px-5 py-2.5 font-body text-[10px] tracking-[0.2em] uppercase text-ink-muted transition-colors duration-300 hover:border-bronze/40 hover:text-bronze"
          >
            <span className="text-xs">{item.icon}</span>
            <span className="relative">
              <AnimatePresence mode="wait" initial={false}>
                {copied && item.label === "Copy Link" ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-bronze"
                  >
                    Copied
                  </motion.span>
                ) : (
                  <motion.span
                    key="label"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}