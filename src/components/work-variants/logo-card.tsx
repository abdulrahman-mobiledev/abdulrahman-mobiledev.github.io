"use client";

import { motion } from "motion/react";
import { EASE } from "@/lib/motion";

const LOGOS: Record<
  string,
  { src: string; bg: "paper" | "ink" | "accent"; pad: string; tilt: number }
> = {
  fitra360: { src: "/logos/fitra360.png", bg: "paper", pad: "p-4", tilt: -2 },
  fixa: { src: "/logos/fixa.png", bg: "paper", pad: "p-3", tilt: 2 },
  gayar: { src: "/logos/gayar.webp", bg: "paper", pad: "p-0", tilt: -1.5 },
  wzgate: { src: "/logos/wzgate.png", bg: "paper", pad: "p-0", tilt: 1.5 },
  "thought-craft": { src: "/logos/thought-craft.png", bg: "paper", pad: "p-0", tilt: -2 },
  valueplus: { src: "/logos/valueplus-dark.svg", bg: "paper", pad: "p-5", tilt: 2 },
};

const BG = {
  paper: "bg-paper",
  ink: "bg-ink",
  accent: "bg-accent",
} as const;

type Props = {
  slug: string;
  name: string;
  index: number;
};

export function LogoCard({ slug, name, index }: Props) {
  const cfg = LOGOS[slug];
  if (!cfg) return null;

  return (
    <motion.div
      className="group/card relative w-[150px] md:w-[160px]"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 + index * 0.04 }}
    >
      {/* offset accent shadow rectangle */}
      <div
        className="absolute inset-0 bg-accent transition-transform duration-300 group-hover/card:translate-x-[10px] group-hover/card:translate-y-[10px]"
        style={{ transform: "translate(6px, 6px)" }}
        aria-hidden
      />

      {/* logo frame */}
      <div
        className={`relative aspect-square ${BG[cfg.bg]} ${cfg.pad} flex items-center justify-center border border-rule transition-transform duration-300 will-change-transform`}
        style={{ transform: `rotate(${cfg.tilt}deg)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cfg.src}
          alt={`${name} logo`}
          className="h-full w-full object-contain"
        />
      </div>

      {/* mono label */}
      <div
        className="mt-3 flex items-baseline gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted"
        style={{ transform: `rotate(${cfg.tilt}deg)`, transformOrigin: "left top" }}
      >
        <span className="text-accent">▣</span>
        <span>{slug}</span>
      </div>
    </motion.div>
  );
}
