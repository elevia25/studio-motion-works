"use client";

import { motion } from "framer-motion";
import { channels, socialLinks } from "@/data/contact";

function ChannelIcon({ type }: { type: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
    default:
      return null;
  }
}

export function FloatingInfo() {
  return (
    <div className="flex flex-col gap-6">
      <span className="font-body text-[10px] tracking-[0.4em] uppercase text-bronze">
        Direct Channels
      </span>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {channels.map((channel, i) => (
          <motion.a
            key={channel.label}
            href={channel.href}
            data-magnetic
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-sm border border-border bg-surface p-6 transition-colors duration-500 hover:border-bronze/30"
          >
            {/* Ambient glow on hover */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-bronze/[0.06] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

            {/* Floating drift */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-bronze/30 text-bronze">
                  <ChannelIcon type={channel.icon} />
                </div>
                <div className="flex-1">
                  <span className="block font-body text-[9px] tracking-[0.3em] uppercase text-ink-subtle">
                    {channel.label}
                  </span>
                  <p className="mt-1.5 font-body text-sm text-ink transition-colors duration-300 group-hover:text-bronze">
                    {channel.value}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.a>
        ))}
      </div>

      {/* Social links */}
      <div className="mt-6 border-t border-border pt-8">
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-bronze">
          Follow the Work
        </span>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              data-magnetic
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-sm border border-border px-4 py-3 transition-colors duration-500 hover:border-bronze/40"
            >
              <span className="block font-body text-[10px] tracking-[0.2em] uppercase text-ink-muted transition-colors duration-300 group-hover:text-bronze">
                {social.label}
              </span>
              <span className="mt-1 block font-body text-[10px] tracking-[0.1em] text-ink-subtle">
                {social.handle}
              </span>

              {/* Bottom draw line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px origin-left bg-bronze"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: "100%" }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}