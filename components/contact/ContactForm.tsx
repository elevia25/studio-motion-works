"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SelfDrawingField } from "./SelfDrawingField";
import { ParticleButton } from "./ParticleButton";
import { inquiryTypes } from "@/data/contact";

interface FormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

export function ContactForm() {
  const [inquiry, setInquiry] = useState("commission");
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [messageFocused, setMessageFocused] = useState(false);

  const update = (key: keyof FormData) => (value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async () => {
    // Replace with real submission logic
    await new Promise((resolve) => setTimeout(resolve, 800));
    setData({ name: "", email: "", organization: "", message: "" });
  };

  const isValid =
    data.name.length > 0 &&
    data.email.includes("@") &&
    data.message.length > 0;

  return (
    <div className="rounded-sm border border-border bg-surface p-8 md:p-12">
      {/* Form header */}
      <div className="mb-10 flex items-start justify-between">
        <div>
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-bronze">
            Send a Message
          </span>
          <p className="mt-2 font-body text-xs text-ink-muted">
            We typically respond within one business day.
          </p>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-bronze"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-ink-subtle">
            Studio Available
          </span>
        </div>
      </div>

      {/* Inquiry type selector */}
      <div className="mb-10">
        <label className="mb-4 block font-body text-[10px] tracking-[0.3em] uppercase text-ink-subtle">
          I'm reaching out about
        </label>
        <div className="flex flex-wrap gap-2">
          {inquiryTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              data-magnetic
              onClick={() => setInquiry(type.id)}
              className="relative overflow-hidden rounded-full border border-border px-4 py-2.5 font-body text-[10px] tracking-[0.15em] uppercase transition-colors duration-300"
            >
              {inquiry === type.id && (
                <motion.span
                  layoutId="inquiry-fill"
                  className="absolute inset-0 bg-bronze"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  inquiry === type.id
                    ? "text-void"
                    : "text-ink-muted hover:text-bronze"
                }`}
              >
                {type.label}
              </span>
            </button>
          ))}
        </div>

        {/* Active type description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={inquiry}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="mt-4 font-body text-[11px] italic tracking-[0.05em] text-ink-subtle"
          >
            {inquiryTypes.find((t) => t.id === inquiry)?.description}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Fields grid */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
        <SelfDrawingField
          label="Your Name"
          name="name"
          value={data.name}
          onChange={update("name")}
          required
          placeholder="Ananya Sharma"
        />
        <SelfDrawingField
          label="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={update("email")}
          required
          placeholder="you@studio.com"
        />
        <div className="md:col-span-2">
          <SelfDrawingField
            label="Organization (optional)"
            name="organization"
            value={data.organization}
            onChange={update("organization")}
            placeholder="Studio, gallery, or institution"
          />
        </div>
      </div>

      {/* Message textarea */}
      <div className="mt-8">
        <div className="relative pt-6">
          <motion.label
            htmlFor="message"
            initial={false}
            animate={{
              y: messageFocused || data.message ? -22 : 0,
              scale: messageFocused || data.message ? 0.85 : 1,
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute left-0 top-6 origin-left font-body text-[11px] tracking-[0.2em] uppercase"
            style={{
              color: messageFocused
                ? "var(--color-bronze)"
                : "var(--color-ink-subtle)",
            }}
          >
            Project Details <span className="text-bronze">*</span>
          </motion.label>

          <textarea
            id="message"
            rows={5}
            value={data.message}
            onChange={(e) => update("message")(e.target.value)}
            onFocus={() => setMessageFocused(true)}
            onBlur={() => setMessageFocused(false)}
            placeholder={
              messageFocused
                ? "Tell us about the space, the scale, the movement you're imagining..."
                : ""
            }
            className="w-full resize-none bg-transparent py-3 font-body text-base text-ink outline-none placeholder:text-ink-subtle/60"
          />

          <div className="absolute bottom-0 left-0 h-px w-full bg-border" />
          <motion.div
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-bronze to-copper"
            initial={false}
            animate={{ scaleX: messageFocused ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Character counter */}
        <div className="mt-3 flex items-center justify-between">
          <span className="font-body text-[9px] tracking-[0.2em] uppercase text-ink-subtle">
            {data.message.length} / 2000 characters
          </span>
          {data.message.length > 1800 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-body text-[9px] tracking-[0.2em] uppercase text-bronze"
            >
              Almost at limit
            </motion.span>
          )}
        </div>
      </div>

      {/* Submit row */}
      <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
        <div className="max-w-xs">
          <p className="font-body text-[10px] leading-relaxed tracking-[0.05em] text-ink-subtle">
            By sending, you agree to our studio's privacy practices. We never
            share your details.
          </p>
        </div>

        <ParticleButton
          label={isValid ? "Send Message" : "Complete the form"}
          successLabel="Sent — we'll be in touch"
          onSubmit={async () => {
            if (!isValid) {
              throw new Error("incomplete");
            }
            await handleSubmit();
          }}
        />
      </div>
    </div>
  );
}