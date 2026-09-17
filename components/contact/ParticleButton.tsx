"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

interface Particle {
  id: number;
  angle: number;
  distance: number;
  size: number;
  duration: number;
}

export function ParticleButton({
  label,
  successLabel = "Message sent",
  onSubmit,
}: {
  label: string;
  successLabel?: string;
  onSubmit: () => Promise<void> | void;
}) {
  const [state, setState] = useState<"idle" | "firing" | "success">("idle");
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const fire = useCallback(() => {
    // Generate particles
    const newParticles: Particle[] = Array.from({ length: 24 }, (_, i) => ({
      id: Date.now() + i,
      angle: (i / 24) * Math.PI * 2 + (Math.random() - 0.5) * 0.5,
      distance: 60 + Math.random() * 80,
      size: 3 + Math.random() * 4,
      duration: 0.8 + Math.random() * 0.4,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1400);
  }, []);

  const handleClick = async () => {
    if (state !== "idle") return;
    setState("firing");
    fire();
    try {
      await onSubmit();
      setTimeout(() => setState("success"), 500);
      setTimeout(() => setState("idle"), 3500);
    } catch {
      setState("idle");
    }
  };

  return (
    <div className="relative inline-block">
      {/* Particle layer */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <AnimatePresence>
          {particles.map((p) => {
            const dx = Math.cos(p.angle) * p.distance;
            const dy = Math.sin(p.angle) * p.distance - 30; // upward bias
            return (
              <motion.span
                key={p.id}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                animate={{
                  x: dx,
                  y: [0, dy, dy + 40],
                  opacity: [1, 1, 0],
                  scale: [1, 1.4, 0.4],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: p.duration,
                  ease: [0.16, 1, 0.3, 1],
                  times: [0, 0.5, 1],
                }}
                className="absolute rounded-full bg-bronze"
                style={{
                  width: p.size,
                  height: p.size,
                  boxShadow: "0 0 12px rgba(197,160,101,0.6)",
                }}
              />
            );
          })}
        </AnimatePresence>
      </div>

      {/* The button */}
      <motion.button
        type="button"
        data-magnetic
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={state !== "idle"}
        animate={
          state === "firing"
            ? { scale: [1, 0.92, 1.04, 1] }
            : { scale: 1 }
        }
        transition={
          state === "firing"
            ? { duration: 0.5, times: [0, 0.2, 0.6, 1] }
            : { duration: 0.3 }
        }
        whileHover={state === "idle" ? { scale: 1.02 } : {}}
        whileTap={state === "idle" ? { scale: 0.97 } : {}}
        className="group relative overflow-hidden rounded-full border border-bronze/40 bg-transparent px-12 py-5 font-body text-[11px] tracking-[0.3em] uppercase text-bronze transition-colors duration-500 hover:border-bronze disabled:cursor-not-allowed"
      >
        {/* Fill on hover */}
        <motion.span
          className="absolute inset-0 origin-left bg-bronze"
          initial={false}
          animate={{
            scaleX:
              isHovered && state === "idle" ? 1 : state === "success" ? 1 : 0,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Label / success state */}
        <span className="relative z-10 flex items-center gap-3">
          <AnimatePresence mode="wait" initial={false}>
            {state === "success" ? (
              <motion.span
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-void"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-void"
                >
                  <motion.path
                    d="M2 7L6 11L12 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  />
                </svg>
                {successLabel}
              </motion.span>
            ) : (
              <motion.span
                key="label"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className={`transition-colors duration-500 ${
                  isHovered ? "text-void" : "text-bronze"
                }`}
              >
                {state === "firing" ? "Sending..." : label}
              </motion.span>
            )}
          </AnimatePresence>
        </span>

        {/* Corner flare on fire */}
        {state === "firing" && (
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-full"
            initial={{ boxShadow: "0 0 0px rgba(197,160,101,0)" }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(197,160,101,0)",
                "0 0 40px rgba(197,160,101,0.5)",
                "0 0 0px rgba(197,160,101,0)",
              ],
            }}
            transition={{ duration: 0.9 }}
          />
        )}
      </motion.button>
    </div>
  );
}