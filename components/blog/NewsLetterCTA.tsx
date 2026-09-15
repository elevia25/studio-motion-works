"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 2500);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative my-24 overflow-hidden rounded-sm border border-border bg-surface p-8 md:p-14"
    >
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/[0.08] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-bronze">
          The Journal
        </span>
        <h2 className="mt-5 font-display text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-ink">
          One essay a month.
          <br />
          <span className="text-bronze">No noise.</span>
        </h2>
        <p className="mt-4 font-body text-sm leading-relaxed text-ink-muted">
          Process notes, theory, and studio dispatches. Unsubscribe anytime.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="you@studio.com"
              className="w-full rounded-full border border-border bg-transparent px-6 py-4 font-body text-sm text-ink placeholder:text-ink-subtle focus:outline-none"
            />
            {/* Self-drawing focus border */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-full border border-bronze"
              initial={false}
              animate={{ opacity: focused ? 1 : 0, scale: focused ? 1 : 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <motion.button
            type="submit"
            data-magnetic
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden rounded-full bg-bronze px-7 py-4 font-body text-[10px] tracking-[0.3em] uppercase text-void"
          >
            <span className="relative z-10">
              {submitted ? "Subscribed ✓" : "Subscribe"}
            </span>
            <motion.span
              className="absolute inset-0 bg-copper"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}