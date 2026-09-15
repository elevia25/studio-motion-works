"use client";

import { motion } from "framer-motion";
import { KineticText } from "@/components/ui/KineticText";
import { MorphButton } from "@/components/ui/MorphButton";
import { useRouter } from "next/navigation";

export function AboutCTA() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden px-6 py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <KineticText
          text="SEE THE WORK"
          as="h2"
          className="justify-center font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-ink"
          staggerDelay={0.04}
        />
        <KineticText
          text="IN MOTION."
          as="h2"
          className="mt-1 justify-center font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-bronze"
          staggerDelay={0.04}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-md font-body text-sm leading-relaxed text-ink-muted"
        >
          Explore selected projects, or get in touch to discuss a commission
          of your own.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <MorphButton
            label="View Projects"
            onClick={() => router.push("/projects")}
          />
          <MorphButton
            label="Start a Conversation"
            onClick={() => router.push("/contact")}
          />
        </motion.div>
      </div>
    </section>
  );
}