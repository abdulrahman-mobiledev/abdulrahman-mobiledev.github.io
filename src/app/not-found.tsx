"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { EASE } from "@/lib/motion";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-start justify-center overflow-hidden bg-ink px-5 py-16 sm:px-10 lg:px-16">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-8 sm:gap-10">
        <motion.span
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent sm:text-[11px]"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
        >
          ▣ Lost
        </motion.span>

        <motion.h1
          className="font-display text-paper"
          style={{
            fontSize: "clamp(72px, 14vw, 200px)",
            fontWeight: 900,
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        >
          404<span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          className="max-w-[60ch] font-display text-paper-2"
          style={{
            fontSize: "clamp(18px, 1.5vw, 24px)",
            lineHeight: 1.45,
            fontWeight: 400,
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.32 }}
        >
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.44 }}
        >
          <Link
            href="/"
            className="group inline-flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:text-accent sm:text-[12px]"
          >
            <span className="h-px w-10 bg-accent transition-all duration-200 group-hover:w-14" aria-hidden />
            Back to home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
