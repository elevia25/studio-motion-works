import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative mx-auto mt-32 max-w-7xl border-t border-white/6 pt-12">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex flex-col gap-2">
          <Image
            src="/logo.svg"
            alt="Studio Motion Works Logo"
            width={180}
            height={45}
            className="h-10 w-auto invert brightness-200 object-contain"
          />
        </div>

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
  );
};

export default Footer;
