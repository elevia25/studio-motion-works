"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import type { ContentBlock } from "@/data/postContent";

const ease = [0.16, 1, 0.3, 1] as const;

function Paragraph({ text }: { text: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
      className="my-6 font-body text-base leading-[1.8] text-ink-muted md:text-[17px]"
    >
      {text}
    </motion.p>
  );
}

function Heading({
  level,
  text,
  id,
}: {
  level: 2 | 3;
  text: string;
  id: string;
}) {
  const size =
    level === 2
      ? "text-[clamp(1.4rem,3vw,2.2rem)]"
      : "text-[clamp(1.1rem,2vw,1.5rem)]";

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease }}
      className={level === 2 ? "mt-16 mb-6" : "mt-12 mb-4"}
      style={{ scrollMarginTop: "100px" }}
    >
      <h2
        className={`font-display ${size} font-bold leading-[1.15] tracking-tight text-ink`}
      >
        {text}
      </h2>
      {/* Self-drawing bronze underline */}
      <motion.div
        className="mt-4 h-px origin-left bg-gradient-to-r from-bronze/60 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.3, ease }}
      />
    </motion.div>
  );
}

function Quote({ text, attribution }: { text: string; attribution?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease }}
      whileHover={{ rotate: -0.4, scale: 1.01 }}
      className="relative my-14 border-l-2 border-bronze pl-8 md:pl-10"
    >
      <div className="absolute -left-3 -top-6 font-display text-6xl leading-none text-bronze/30 select-none">
        &ldquo;
      </div>
      <p className="font-display text-[clamp(1.1rem,2.2vw,1.6rem)] font-medium leading-[1.4] tracking-tight text-ink">
        {text}
      </p>
      {attribution && (
        <div className="mt-5 flex items-center gap-3">
          <span className="h-px w-8 bg-bronze/40" />
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-bronze">
            {attribution}
          </span>
        </div>
      )}
    </motion.div>
  );
}

function Image({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease }}
      className="my-14"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-border bg-gunmetal">
        {/* Placeholder — replace with next/image */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 40% 50%, #C5A06550, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-ink-subtle">
            {alt}
          </span>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 font-body text-[11px] tracking-[0.05em] text-ink-subtle">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

function List({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
      className="my-8"
    >
      <Tag className="space-y-3 pl-6">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className="relative font-body text-base leading-relaxed text-ink-muted marker:text-bronze"
          >
            <span className="absolute -left-5 top-[10px] h-1.5 w-1.5 rounded-full bg-bronze" />
            {item}
          </motion.li>
        ))}
      </Tag>
    </motion.div>
  );
}

function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="my-16 flex items-center justify-center gap-3"
    >
      <span className="h-px w-12 bg-border" />
      <span className="h-1 w-1 rotate-45 bg-bronze" />
      <span className="h-px w-12 bg-border" />
    </motion.div>
  );
}

function Code({ language, code }: { language: string; code: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
      className="my-10 overflow-hidden rounded-sm border border-border bg-gunmetal"
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-bronze/40" />
          <span className="h-2 w-2 rounded-full bg-bronze/25" />
          <span className="h-2 w-2 rounded-full bg-bronze/15" />
        </div>
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-ink-subtle">
          {language}
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-ink">
        <code>{code}</code>
      </pre>
    </motion.div>
  );
}

function Callout({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease }}
      className="relative my-12 overflow-hidden rounded-sm border border-bronze/25 bg-surface p-6 md:p-8"
    >
      {/* Corner accent */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-bronze/[0.06] blur-2xl" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rotate-45 bg-bronze" />
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-bronze">
            {title}
          </span>
        </div>
        <p className="mt-4 font-body text-sm leading-relaxed text-ink-muted">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

export function Prose({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <article className="prose-kinetic">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return <Paragraph key={i} text={block.text} />;
          case "heading":
            return (
              <Heading
                key={i}
                level={block.level}
                text={block.text}
                id={block.id}
              />
            );
          case "quote":
            return (
              <Quote
                key={i}
                text={block.text}
                attribution={block.attribution}
              />
            );
          case "image":
            return (
              <Image
                key={i}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
              />
            );
          case "list":
            return (
              <List key={i} items={block.items} ordered={block.ordered} />
            );
          case "divider":
            return <Divider key={i} />;
          case "code":
            return (
              <Code key={i} language={block.language} code={block.code} />
            );
          case "callout":
            return <Callout key={i} title={block.title} text={block.text} />;
          default:
            return null;
        }
      })}
    </article>
  );
}