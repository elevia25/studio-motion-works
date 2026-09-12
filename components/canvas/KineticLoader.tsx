"use client";

import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

export function KineticLoader() {
  const { active, progress, item } = useProgress();

  if (!active) return null;

  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center">
      {/* Progress ring */}
      <svg width="64" height="64" viewBox="0 0 48 48" className="rotate-[-90deg]">
        {/* Track */}
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="rgba(197,160,101,0.15)"
          strokeWidth="2"
        />
        {/* Progress arc */}
        <motion.circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="#C5A065"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </svg>

      {/* Percentage + status */}
      <div className="mt-4 flex flex-col items-center gap-1">
        <span className="font-display text-xs tracking-[0.3em] text-bronze">
          {Math.round(progress)}%
        </span>
        <span className="font-body text-[9px] tracking-[0.2em] uppercase text-mist/40">
          {item ? "Assembling" : "Loading"} Motion
        </span>
      </div>
    </div>
  );
}