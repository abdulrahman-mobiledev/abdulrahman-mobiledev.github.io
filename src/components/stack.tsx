"use client";

import { motion } from "motion/react";
import { stack } from "@/lib/projects";
import { EASE } from "@/lib/motion";

export function Stack() {
  return (
    <section className="px-5 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <header className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-2 sm:mb-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent sm:text-[11px]">
            ▣ Stack
          </span>
          <h2
            className="font-display text-paper"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 900,
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}
          >
            Toolkit<span className="text-accent">.</span>
          </h2>
        </header>

        <ul className="flex flex-col border-t border-rule">
          {stack.map((row, i) => (
            <motion.li
              key={row.key}
              className="flex flex-col gap-3 border-b border-rule py-5 md:flex-row md:items-center md:gap-6"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.04 * i }}
            >
              <span className="inline-flex w-fit items-center bg-accent px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink">
                {row.key}
              </span>
              <span
                className="font-display text-paper"
                style={{ fontSize: "clamp(15px, 1.1vw, 18px)", lineHeight: 1.6 }}
              >
                {row.items}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
