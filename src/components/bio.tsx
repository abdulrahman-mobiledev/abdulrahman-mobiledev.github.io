"use client";

import { motion } from "motion/react";
import { EASE } from "@/lib/motion";

export function Bio() {
  return (
    <section className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_240px] lg:gap-16">
          <div className="flex flex-col gap-4">
            <motion.span
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent sm:text-[11px]"
              initial={{ opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
            >
              ▣ About
            </motion.span>
            <motion.p
              className="max-w-[26ch] font-display text-paper sm:max-w-[34ch]"
              style={{
                fontSize: "clamp(24px, 2.6vw, 40px)",
                lineHeight: 1.25,
                fontWeight: 500,
                letterSpacing: "-0.015em",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            >
              Senior React Native and Expo developer based in Cairo. Five years
              building production iOS and Android apps, leading the mobile
              workstream on each project, first commit through App Store and
              Play Store launch, including the post-release crash work and
              rejection cycles that take longer than the original build.
            </motion.p>
            <motion.p
              className="mt-3 max-w-[60ch] font-display text-paper-2"
              style={{
                fontSize: "clamp(16px, 1.3vw, 22px)",
                lineHeight: 1.55,
                fontWeight: 400,
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.32 }}
            >
              Recent work: AI-integrated mobile, healthcare and telehealth, real
              estate, and marketplaces. Comfortable across Supabase, Firebase,
              and GraphQL.
            </motion.p>
          </div>

          <motion.aside
            className="flex flex-col gap-6 border-t border-rule pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.42 }}
          >
            <BioMeta label="Role" value="Senior mobile engineer" />
            <BioMeta label="Base" value="Cairo, Egypt · GMT+2" />
            <BioMeta label="Work mode" value="Remote, hybrid, or onsite" />
            <BioMeta label="Education" value="BEng · Cairo University" />
            <BioMeta label="Languages" value="Arabic, English" />
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:text-[11px]">
                Status
              </span>
              <span
                className="flex items-center gap-2 font-display text-paper"
                style={{ fontSize: "15px", fontWeight: 500 }}
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-signal"
                  animate={{ opacity: [1, 0.35, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
                Available
              </span>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function BioMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:text-[11px]">
        {label}
      </span>
      <span
        className="font-display text-paper"
        style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.35 }}
      >
        {value}
      </span>
    </div>
  );
}
