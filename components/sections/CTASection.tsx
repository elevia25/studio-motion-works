"use client";

import { KineticText } from "@/components/ui/KineticText";
import { MorphButton } from "@/components/ui/MorphButton";

export function CTASection() {
  return (
    <section className="relative overflow-hidden px-6 py-32 md:py-48">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/4 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <KineticText
          text="LET'S BUILD"
          as="h2"
          className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-offwhite"
          staggerDelay={0.05}
        />
        <KineticText
          text="SOMETHING THAT MOVES."
          as="h2"
          className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-bronze"
          staggerDelay={0.05}
        />

        <p className="mt-8 max-w-md font-body text-sm leading-relaxed text-mist">
          {`Whether you're an architect seeking a statement piece or a gallery
          planning an immersive exhibition — let's create something that
          breathes.`}
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <MorphButton label="Start a Project" />
          <MorphButton label="View Services" />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mx-auto mt-32 max-w-7xl border-t border-white/6 pt-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <span className="font-display text-sm tracking-[0.3em] text-offwhite/40">
            STUDIO MOTION WORKS
          </span>

          <div className="flex flex-wrap gap-8">
            {["Instagram", "Behance", "LinkedIn", "Vimeo"].map((social) => (
              <a
                key={social}
                href="#"
                data-magnetic
                className="font-body text-[10px] tracking-[0.2em] uppercase text-mist/50 transition-colors hover:text-bronze"
              >
                {social}
              </a>
            ))}
          </div>

          <span className="font-body text-[10px] tracking-[0.2em] text-mist/30">
            © 2026 Studio Motion Works
          </span>
        </div>
      </footer>
    </section>
  );
}
