"use client";

import { MorphButton } from "@/components/ui/MorphButton";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-void px-6 py-32 md:py-48">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/4 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-bronze/70">
          Get in Touch
        </span>

        <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-offwhite">
          Have an idea or a space in mind? <br />
          <span className="text-bronze">Let’s work together.</span>
        </h2>

        <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-mist">
          Whether you’re looking for a custom piece or planning an installation,
          we’re always open to discussing new projects and collaborations.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <MorphButton label="Start a Conversation" />
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
