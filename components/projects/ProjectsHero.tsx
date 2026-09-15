"use client";

import { motion } from "framer-motion";
import { KineticText } from "@/components/ui/KineticText";
import { projectCategories } from "@/data/projects";

export function ProjectsHero({
  activeCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
}: {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  viewMode: "gallery" | "list";
  onViewModeChange: (mode: "gallery" | "list") => void;
}) {
  return (
    <section className="relative px-6 pt-40 pb-12 md:pt-48 md:pb-16">
      <div className="kinetic-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-[10px] tracking-[0.5em] uppercase text-bronze/70"
        >
          Selected Works — 2018–2026
        </motion.span>

        <div className="mt-6">
          <KineticText
            text="THE GALLERY"
            as="h1"
            className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-tight text-ink"
            staggerDelay={0.04}
          />
          <KineticText
            text="OF MOTION."
            as="h1"
            className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-tight text-bronze"
            staggerDelay={0.04}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-lg font-body text-sm leading-relaxed text-ink-muted"
        >
          Kinetic sculptures, moving furnishings, and interactive installations.
          Each piece is a study in controlled motion.
        </motion.p>

        {/* Controls row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-6"
        >
          {/* Category filter */}
          <div className="flex flex-wrap gap-3">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                data-magnetic
                onClick={() => onCategoryChange(cat)}
                className="relative overflow-hidden rounded-full border border-border px-5 py-2.5 font-body text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
              >
                <motion.span
                  layoutId="project-category-fill"
                  className={`absolute inset-0 bg-bronze ${
                    activeCategory === cat ? "opacity-100" : "opacity-0"
                  }`}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeCategory === cat
                      ? "text-void"
                      : "text-ink-muted hover:text-bronze"
                  }`}
                >
                  {cat}
                </span>
              </button>
            ))}
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-2 rounded-full border border-border p-1">
            <button
              data-magnetic
              onClick={() => onViewModeChange("gallery")}
              className={`rounded-full px-4 py-2 font-body text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                viewMode === "gallery"
                  ? "bg-bronze text-void"
                  : "text-ink-muted hover:text-bronze"
              }`}
            >
              Gallery
            </button>
            <button
              data-magnetic
              onClick={() => onViewModeChange("list")}
              className={`rounded-full px-4 py-2 font-body text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                viewMode === "list"
                  ? "bg-bronze text-void"
                  : "text-ink-muted hover:text-bronze"
              }`}
            >
              List
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}