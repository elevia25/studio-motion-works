"use client";

import { ContactForm } from "./ContactForm";
import { FloatingInfo } from "./FloatingInfo";
export function ContactGrid() {
  return (
    <section className="relative px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_1fr]">
          {/* Form column */}
          <div>
            <ContactForm />
          </div>

          {/* Info column */}
          <div className="flex flex-col gap-12">
            <FloatingInfo />
            {/* <StudioMap /> */}
          </div>
        </div>
      </div>
    </section>
  );
}