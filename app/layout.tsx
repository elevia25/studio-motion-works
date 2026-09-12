import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { FloatingNav } from "@/components/ui/FloatingNav";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kinetic — Where Movement Meets Form",
  description:
    "Bespoke kinetic sculptures, moving furnishings, and interactive installations. We don't just design objects; we design time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-[#0a0a0a] text-offwhite antialiased selection:bg-bronze/30 selection:text-bronze`}
      >
        <SmoothScroll>
          <MagneticCursor />
          <FloatingNav />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
