"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

interface KineticTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  staggerDelay?: number;
  rotateOnHover?: boolean;
}

export function KineticText({
  text,
  as: Tag = "h1",
  className = "",
  staggerDelay = 0.04,
  rotateOnHover = true,
}: KineticTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const chars = text.split("");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 40, rotateX: -60 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-wrap ${className}`}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={child}
          animate={
            isHovered && rotateOnHover
              ? {
                  y: Math.sin(i * 0.5) * -8,
                  rotate: Math.cos(i * 0.3) * 4,
                }
              : {}
          }
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
