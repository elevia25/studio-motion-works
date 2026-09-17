"use client";

import { motion } from "framer-motion";
import { useId, useState } from "react";

interface SelfDrawingFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "url";
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}

export function SelfDrawingField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}: SelfDrawingFieldProps) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative pt-6">
      {/* Floating label */}
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isActive ? -22 : 0,
          scale: isActive ? 0.85 : 1,
          color: focused
            ? "var(--color-bronze)"
            : "var(--color-ink-subtle)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-0 top-6 origin-left font-body text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "var(--color-ink-subtle)" }}
      >
        {label}
        {required && <span className="ml-1 text-bronze">*</span>}
      </motion.label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        required={required}
        placeholder={focused ? placeholder : ""}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent py-3 font-body text-base text-ink outline-none placeholder:text-ink-subtle/60"
      />

      {/* Base border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-border" />

      {/* Self-drawing bronze border */}
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-bronze to-copper"
        initial={false}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Corner accents appear when focused */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-2 w-2 border-b border-l border-bronze"
        initial={false}
        animate={{ opacity: focused ? 1 : 0 }}
        transition={{ duration: 0.3, delay: focused ? 0.4 : 0 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b border-r border-bronze"
        initial={false}
        animate={{ opacity: focused ? 1 : 0 }}
        transition={{ duration: 0.3, delay: focused ? 0.5 : 0 }}
      />
    </div>
  );
}