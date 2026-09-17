import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Instagram from "../icons/Instagram";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery of Motions", href: "/gallery-motions" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/studiomotionworks",
    icon: Instagram,
  },
  // {
  //   name: "LinkedIn",
  //   href: "https://linkedin.com/company/studiomotionworks",
  //   icon: Linkedin,
  // },
  // {
  //   name: "Facebook",
  //   href: "https://facebook.com/studiomotionworks",
  //   icon: Facebook,
  // },
];

const Footer = () => {
  return (
    <footer className="relative mx-auto max-w-7xl border-t border-white/6 px-6 pt-16 pb-10">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        {/* Logo + studio address */}
        <div className="flex flex-col gap-6">
          <div className="flex w-40 flex-col gap-2 text-black dark:text-white">
            <Logo width={160} height={40}/>
          </div>

          <div className="font-body text-sm leading-relaxed text-mist/70">
            <p>Studio Motionworks</p>
            <p>MW Workshop, Besides IDP School,</p>
            <p>VIP Road, Shela,</p>
            <p>Ahmedabad 380058</p>
          </div>

          <a
            href="https://maps.app.goo.gl/mbZtAHBLEnkVYuPx9?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="font-body text-[10px] tracking-[0.2em] uppercase text-bronze/80 transition-colors hover:text-bronze"
          >
            Visit the Studio →
          </a>
        </div>

        {/* Page links */}
        <div className="flex flex-col gap-4">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-offwhite/40">
            Explore
          </span>
          <nav className="flex flex-col gap-3">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-magnetic
                className="font-body text-sm text-mist/70 transition-colors hover:text-bronze"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-offwhite/40">
            Contact
          </span>
          <a
            href="mailto:studio@motionworks.in"
            data-magnetic
            className="font-body text-sm text-mist/70 transition-colors hover:text-bronze"
          >
            studio@motionworks.in
          </a>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-offwhite/40">
            Connect
          </span>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnetic
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist/60 transition-colors hover:border-bronze/50 hover:text-bronze"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-8 md:flex-row">
        <span className="font-body text-[10px] tracking-[0.2em] text-mist/30">
          © 2026 Studio Motionworks
        </span>
        <span className="font-body text-[10px] tracking-[0.2em] text-mist/30">
          Ahmedabad, India
        </span>
      </div>
    </footer>
  );
};

export default Footer;
