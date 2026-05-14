"use client";

import { motion } from "motion/react";
import { contacts } from "@/lib/projects";
import { EASE } from "@/lib/motion";

export function Contact() {
  return (
    <section className="px-5 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid grid-cols-1 overflow-hidden border border-rule lg:grid-cols-[1fr_1fr]">
          <motion.div
            className="relative flex flex-col gap-5 bg-ink p-6 sm:gap-6 sm:p-10 lg:p-14"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
            <div className="relative z-10 flex items-baseline gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent sm:text-[11px]">
                ▣ Contact
              </span>
              <span className="h-px w-8 bg-accent sm:w-10" aria-hidden />
            </div>

            <h2
              className="relative z-10 font-display text-paper"
              style={{
                fontSize: "clamp(34px, 6vw, 84px)",
                fontWeight: 900,
                letterSpacing: "-0.025em",
                lineHeight: 1,
              }}
            >
              Contact<span className="text-accent">.</span>
            </h2>

            <p
              className="relative z-10 max-w-md font-display text-paper"
              style={{
                fontSize: "clamp(16px, 1.4vw, 22px)",
                lineHeight: 1.4,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Mobile development. Building, shipping, scaling, and rescuing.
            </p>

          </motion.div>

          <motion.ul
            className="flex flex-col bg-accent"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            {contacts.map((c, i) => (
              <li
                key={c.key}
                className={`flex flex-1 ${i > 0 ? "border-t border-accent-2" : ""}`}
              >
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="group flex flex-1 flex-col justify-center gap-2 px-6 py-6 transition-colors duration-200 hover:bg-accent-2 sm:px-10 sm:py-7 lg:px-12 lg:py-8"
                >
                  <span className="flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink sm:text-[11px]">
                    {c.key}
                    <span
                      className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </span>
                  <span
                    className="font-display break-words text-ink transition-colors duration-200 group-hover:text-paper"
                    style={{ fontSize: "clamp(15px, 1.4vw, 22px)", fontWeight: 600 }}
                  >
                    {c.label}
                  </span>
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
