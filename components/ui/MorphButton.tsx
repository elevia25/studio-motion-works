"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

export function MorphButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rotateX.set((e.clientY - centerY) * 0.08);
    rotateY.set((e.clientX - centerX) * 0.08);
  };

  return (
    <motion.button
      ref={ref}
      data-magnetic
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative overflow-hidden rounded-full border border-bronze/40 bg-transparent px-10 py-4 font-display text-sm tracking-[0.2em] uppercase text-bronze transition-colors duration-500 hover:border-bronze hover:text-void"
    >
      {/* Morphing background fill */}
      <motion.span
        className="absolute inset-0 origin-left bg-bronze"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <span className="relative z-10 flex items-center gap-3">
        {label}
        {/* Arrow that rotates on hover */}
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          animate={{ rotate: isHovered ? -90 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <path
            d="M3 13L13 3M13 3H5M13 3V11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </span>
    </motion.button>
  );
}