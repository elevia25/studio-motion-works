"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const works = [
  {
    id: "helix",
    title: "Helix Table",
    category: "Kinetic Furnishing",
    year: "2025",
    color: "#C5A065",
  },
  {
    id: "orbit",
    title: "Orbital Chandelier",
    category: "Sculpture",
    year: "2024",
    color: "#B87333",
  },
  {
    id: "tide",
    title: "Tidal Wall",
    category: "Interactive Installation",
    year: "2025",
    color: "#C0C0C0",
  },
  {
    id: "pulse",
    title: "Pulse Bench",
    category: "Kinetic Seating",
    year: "2023",
    color: "#C5A065",
  },
];

function TiltCard({ work }: { work: (typeof works)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rotateX.set((e.clientY - centerY) * -0.06);
    rotateY.set((e.clientX - centerX) * 0.06);
  };

  return (
    <motion.div
      ref={ref}
      data-magnetic
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-gunmetal"
    >
      {/* Placeholder visual — replace with video/image */}
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-700 group-hover:opacity-50"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${work.color}40, transparent 70%)`,
        }}
      />

      {/* Hover ring */}
      <div
        className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-bronze/20 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:border-bronze/40"
        style={{
          boxShadow: `0 0 60px ${work.color}30`,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-bronze/70">
          {work.category}
        </span>
        <h3 className="mt-2 font-display text-xl font-bold text-offwhite md:text-2xl">
          {work.title}
        </h3>
        <span className="mt-1 font-body text-[10px] tracking-[0.2em] text-mist/50">
          {work.year}
        </span>
      </div>
    </motion.div>
  );
}

export function FeaturedWorks() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-bronze/60">
              Selected Works
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-tight text-offwhite">
              Gallery of Motion
            </h2>
          </div>
          <Link
            href="/projects"
            data-magnetic
            className="hidden font-body text-xs tracking-[0.2em] uppercase text-mist transition-colors hover:text-bronze md:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((work) => (
            <TiltCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
