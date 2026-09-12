"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { KineticHero } from "@/components/canvas/KineticHero";
import { KineticText } from "@/components/ui/KineticText";
import { MorphButton } from "@/components/ui/MorphButton";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-driven parallax: headline moves up faster than scroll
      gsap.to(headlineRef.current, {
        yPercent: -40,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(subRef.current, {
        yPercent: -20,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "40% top",
          scrub: 1,
        },
      });

      gsap.to(ctaRef.current, {
        yPercent: -10,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "30% top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient radial gradient that follows mouse */}
      <div className="kinetic-glow pointer-events-none absolute inset-0 z-[1]" />

      {/* 3D Sculpture canvas */}
      <KineticHero />

      {/* Text overlay */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="font-body text-[10px] tracking-[0.5em] uppercase text-bronze/70">
            Est. 2022 — Studion Motion 
          </span>
        </motion.div>

        <div ref={headlineRef}>
          <KineticText
            text="WHERE MOVEMENT"
            as="h1"
            className="font-display text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight text-offwhite"
            staggerDelay={0.05}
          />
          <KineticText
            text="BECOMES FORM"
            as="h1"
            className="font-display text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight text-bronze"
            staggerDelay={0.05}
          />
        </div>

        <motion.p
          ref={subRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 max-w-lg font-body text-sm leading-relaxed text-mist md:text-base"
        >
         {`Bespoke kinetic sculptures, moving furnishings, and interactive
          installations. We don't just design objects; we design time.`}
        </motion.p>

        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-12"
        >
          <MorphButton
            label="Explore the Collection"
            onClick={() => {
              document
                .getElementById("intro")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-mist/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-bronze/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
