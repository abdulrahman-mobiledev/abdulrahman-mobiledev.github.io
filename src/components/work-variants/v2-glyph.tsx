"use client";

import { motion } from "motion/react";
import { projects } from "@/lib/projects";
import { EASE } from "@/lib/motion";
import { LogoCard } from "./logo-card";
import { TracedGlyph } from "./traced-glyph";
import { HandGlyph } from "./hand-glyph";
import { FilledGlyph } from "./filled-glyph";

const HAND_SLUGS = new Set(["wzgate", "thought-craft"]);
const FILLED_SLUGS = new Set(["gayar", "fixa", "fitra360", "valueplus", "nile-university"]);
const TRACED_SLUGS = new Set<string>();

export function SelectedWorkV2() {
  return (
    <section className="px-5 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <header className="mb-10 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-rule pb-5 sm:mb-12 sm:pb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent sm:text-[11px]">
            ▣ Work
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
            Selected work<span className="text-accent">.</span>
          </h2>
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:text-[11px]">
            {String(projects.length).padStart(2, "0")} entries
          </span>
        </header>

        <ol className="flex flex-col">
          {projects.map((p, i) => (
            <motion.li
              key={p.slug}
              className="group grid grid-cols-1 gap-6 border-b border-rule py-12 md:grid-cols-[180px_1fr_200px] md:gap-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {String(i + 1).padStart(2, "0")} / {p.slug}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {p.year}
                </span>
                {p.context && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {p.context}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <h3
                  className="font-display text-paper transition-colors duration-200 group-hover:text-accent"
                  style={{
                    fontSize: "clamp(24px, 3.5vw, 44px)",
                    fontWeight: 800,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.05,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  className="max-w-[60ch] font-display text-paper-2"
                  style={{
                    fontSize: "clamp(15px, 1.1vw, 18px)",
                    lineHeight: 1.6,
                  }}
                >
                  {p.body}
                </p>
                {(p.status || p.metric || p.links) && (
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px]">
                    {p.status && (
                      <span className="inline-flex items-center gap-1.5 text-accent">
                        <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                        {p.status}
                      </span>
                    )}
                    {p.metric && (
                      <span className="text-paper-2">{p.metric}</span>
                    )}
                    {p.links?.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                      >
                        {l.label}
                        <span aria-hidden>↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-start justify-center">
                {HAND_SLUGS.has(p.slug) ? (
                  <div className="text-paper transition-colors duration-200 group-hover:text-accent">
                    <HandGlyph slug={p.slug} size={160} />
                  </div>
                ) : FILLED_SLUGS.has(p.slug) ? (
                  <div className="text-paper transition-colors duration-200 group-hover:text-accent">
                    <FilledGlyph
                      slug={p.slug}
                      size={p.slug === "nile-university" ? 120 : 160}
                      mode="stream"
                    />
                  </div>
                ) : TRACED_SLUGS.has(p.slug) ? (
                  <div className="text-paper transition-colors duration-200 group-hover:text-accent">
                    <TracedGlyph slug={p.slug} size={160} />
                  </div>
                ) : (
                  <LogoCard slug={p.slug} name={p.name} index={i} />
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
