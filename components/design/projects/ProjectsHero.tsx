"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KineticText } from "@/components/ui/KineticText";
import { projectCategories } from "@/data/projects";

// Generate years from 2012 to current year (2026)
const YEARS = [
  "All",
  ...Array.from({ length: 2026 - 2012 + 1 }, (_, i) => String(2026 - i)),
];

export function ProjectsHero({
  activeCategory,
  onCategoryChange,
  activeYear,
  onYearChange,
  viewMode,
  onViewModeChange,
}: {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  activeYear: string;
  onYearChange: (year: string) => void;
  viewMode: "gallery" | "list";
  onViewModeChange: (mode: "gallery" | "list") => void;
}) {
  const [isYearOpen, setIsYearOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsYearOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          Selected Works — 2012–2026
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
          {/* Category filter & Year Dropdown */}
          <div className="flex flex-wrap items-center gap-3">
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

            {/* Year Dropdown Container */}
            <div className="relative" ref={dropdownRef}>
              <button
                data-magnetic
                onClick={() => setIsYearOpen((prev) => !prev)}
                className={`flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-body text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  activeYear !== "All"
                    ? "border-bronze text-bronze"
                    : "text-ink-muted hover:text-bronze"
                }`}
              >
                <span>Year: {activeYear}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`transition-transform duration-300 ${isYearOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* 3-Column Dropdown Grid */}
              <AnimatePresence>
                {isYearOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-border bg-void/95 p-4 backdrop-blur-md shadow-2xl"
                  >
                    <div className="mb-2 px-1 font-body text-[9px] tracking-[0.2em] uppercase text-ink-subtle">
                      Select Year (2012 - Present)
                    </div>
                    {/* 3 Buttons in a Row */}
                    <div className="grid grid-cols-3 gap-2">
                      {YEARS.map((yr) => (
                        <button
                          key={yr}
                          onClick={() => {
                            onYearChange(yr);
                            setIsYearOpen(false);
                          }}
                          className={`rounded-lg py-2 font-body text-[10px] tracking-[0.1em] transition-colors duration-200 ${
                            activeYear === yr
                              ? "bg-bronze text-void font-bold"
                              : "bg-surface/50 text-ink-muted hover:bg-bronze/20 hover:text-bronze"
                          }`}
                        >
                          {yr}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
