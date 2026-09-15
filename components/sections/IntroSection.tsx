"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { KineticText } from "@/components/ui/KineticText";

gsap.registerPlugin(ScrollTrigger);

export function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video scales up as you scroll into section
      gsap.fromTo(
        videoRef.current,
        { scale: 0.85, opacity: 0.4 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1.5,
          },
        },
      );

      // Text slides in from right
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
        {/* Video loop */}
        <div
          ref={videoRef}
          className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gunmetal"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            poster="/images/studio-poster.jpg"
          >
            <source src="/videos/studio-loop.mp4" type="video/mp4" />
          </video>

          {/* Bronze overlay tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-void/20" />

          {/* Corner label */}
          <div className="absolute bottom-4 left-4">
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-bronze/80">
              Studio — Process
            </span>
          </div>
        </div>

        {/* Text block */}
        <div ref={textRef} className="flex flex-col gap-8">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-bronze/60">
            The Craft
          </span>

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
