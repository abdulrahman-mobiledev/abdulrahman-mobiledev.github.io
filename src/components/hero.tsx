"use client";

import { motion } from "motion/react";
import { Terminal } from "@/components/terminal";
import { EASE } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative grid grid-cols-1 overflow-hidden lg:min-h-[100svh] lg:grid-cols-[1.5fr_1fr]">
      <div className="relative flex min-h-[85svh] flex-col justify-between bg-ink px-5 py-8 sm:px-10 sm:py-14 lg:min-h-0 lg:px-16 lg:py-8">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />

        <motion.div
          className="relative z-10 flex items-baseline gap-3"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Senior / Mobile
          </span>
          <span className="h-px w-10 bg-accent sm:w-12" aria-hidden />
        </motion.div>

        <div className="relative z-10 flex flex-col gap-3 sm:gap-6">
          <motion.h1
            className="font-display text-paper"
            style={{
              fontSize: "clamp(38px, 8.5vw, 144px)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              lineHeight: 0.95,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
          >
            Abdulrahman<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            className="font-display text-paper-2"
            style={{
              fontSize: "clamp(16px, 2vw, 26px)",
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.32 }}
          >
            Five years shipping production mobile apps.
          </motion.p>
        </div>

        <motion.div
          className="relative z-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.44 }}
        >
          <div className="flex items-baseline gap-3">
            <span className="h-1.5 w-10 bg-accent sm:w-12" aria-hidden />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-2 sm:text-[11px]">
              React Native · Expo · TypeScript
            </span>
          </div>
          <span className="flex items-center gap-2 sm:ml-auto sm:gap-3">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-signal"
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:text-[11px]">
              Available
            </span>
          </span>
        </motion.div>
      </div>

      <div className="relative flex flex-col items-center justify-center gap-5 bg-accent px-6 py-14 text-ink sm:gap-6 sm:py-16 lg:py-0">
        <motion.div
          className="absolute left-5 right-5 top-5 flex items-baseline justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-ink/55 sm:left-8 sm:right-8 sm:top-8 sm:text-[10px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.56 }}
        >
          <span>abdulrahmandev</span>
          <span>v · 2026</span>
        </motion.div>

        <motion.div
          className="font-display"
          style={{
            fontSize: "clamp(96px, 14vw, 180px)",
            fontWeight: 900,
            letterSpacing: "-0.06em",
            lineHeight: 1,
          }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: [0.94, 0.76, 0.94], scale: 1 }}
          transition={{
            opacity: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            scale: { duration: 0.6, ease: EASE, delay: 0.56 },
          }}
        >
          A<span style={{ verticalAlign: "0.2em" }}>·</span>M
        </motion.div>

        <motion.div
          className="font-arabic text-ink"
          style={{
            fontSize: "clamp(26px, 3vw, 40px)",
            fontWeight: 700,
            direction: "rtl",
            lineHeight: 1.4,
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.88, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
          lang="ar"
        >
          عبد الرحمن محمد
        </motion.div>

        <motion.div
          className="mt-3 text-ink"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.82 }}
        >
          <Terminal />
        </motion.div>

        <motion.div
          className="absolute bottom-5 left-5 right-5 flex items-baseline justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-ink/55 sm:bottom-8 sm:left-8 sm:right-8 sm:text-[10px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.95 }}
        >
          <span>Cairo · Egypt</span>
          <span>GMT+2</span>
        </motion.div>
      </div>
    </section>
  );
}
