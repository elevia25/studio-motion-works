"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { KineticText } from "@/components/ui/KineticText";

gsap.registerPlugin(ScrollTrigger);

export function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax effect instead of video scaling
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, y: -40 },
        {
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );

      gsap.fromTo(
        textRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative px-6 py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Replaced video with a still parallax image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gunmetal">
          <img
            ref={imageRef}
            src="/images/studio-still.jpg"
            alt="Studio Process"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-void/10" />

          <div className="absolute bottom-6 left-6">
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-bronze">
              Studio — Process
            </span>
          </div>
        </div>

        <div ref={textRef} className="flex flex-col gap-8">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-bronze/60">
            The Craft
          </span>

          <div>
            <KineticText
              text="EVERY PIECE"
              as="h2"
              className="font-display text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1] tracking-tight text-offwhite"
              staggerDelay={0.06}
            />
            <KineticText
              text="BEGINS WITH"
              as="h2"
              className="font-display text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1] tracking-tight text-offwhite"
              staggerDelay={0.06}
            />
            <KineticText
              text="STILLNESS."
              as="h2"
              className="font-display text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1] tracking-tight text-bronze"
              staggerDelay={0.06}
            />
          </div>

          <p className="max-w-md font-body text-sm leading-relaxed text-mist">
            From hand-drawn schematics to precision-machined bronze and
            titanium, every kinetic object we create is a study in controlled
            motion. We work with architects, galleries, and collectors who
            understand that the most powerful design is the one that changes
            with time.
          </p>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-bronze/40 to-transparent" />
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-mist/40">
              01 — 04
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
