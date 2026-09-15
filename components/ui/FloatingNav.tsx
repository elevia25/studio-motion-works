"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const navWidth = useTransform(scrollY, [0, 200], ["auto", "auto"]);
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 0.85]);

  return (
    <>
      <motion.nav
        style={{ opacity: navOpacity, width: navWidth }}
        className="fixed top-6 left-1/2 z-[100] -translate-x-1/2"
      >
        <div className="flex items-center gap-6 rounded-full border border-white/[0.06] bg-charcoal/80 px-6 py-3 backdrop-blur-xl">
          <Link
            href="/"
            className="font-display text-sm tracking-[0.3em] text-offwhite"
          >
            STUDIO MOTION WORKS
          </Link>

          <button
            data-magnetic
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
              className="block h-px w-5 bg-bronze"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="block h-px w-5 bg-bronze"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
              className="block h-px w-5 bg-bronze"
            />
          </button>
        </div>
      </motion.nav>

      {/* Full-screen menu overlay */}
      <motion.div
        initial={{ clipPath: "circle(0% at 50% 0%)" }}
        animate={{
          clipPath: isOpen ? "circle(150% at 50% 0%)" : "circle(0% at 50% 0%)",
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-void/98 backdrop-blur-2xl"
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: isOpen ? i * 0.08 + 0.3 : 0 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-4xl tracking-wider text-offwhite/60 transition-colors duration-300 hover:text-bronze md:text-6xl"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
