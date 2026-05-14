"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { EASE } from "@/lib/motion";

type Props = {
  slug: string;
  size?: number;
};

export function HandGlyph({ slug, size = 150 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit={4}
      strokeWidth={10}
      aria-hidden
    >
      {slug === "thought-craft" && <TelehealthWord />}
      {slug === "wzgate" && (
        <g>
          {/* Top arms: separate lines from center to NW and NE corners */}
          <motion.line
            x1="60"
            y1="60"
            x2="42"
            y2="42"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
          />
          <motion.line
            x1="60"
            y1="60"
            x2="78"
            y2="42"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
          />
          {/* Bottom legs: continuous polylines so the valley joins are clean miters */}
          <motion.polyline
            points="60,60 45,75 27,57"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.95, ease: EASE, delay: 0.15 }}
          />
          <motion.polyline
            points="60,60 75,75 93,57"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.95, ease: EASE, delay: 0.15 }}
          />
          {/* Diamonds spring in simultaneously */}
          <motion.polyline
            points="64,29 57,36"
            initial={{ pathLength: 0, opacity: 0, scale: 0.4 }}
            whileInView={{ pathLength: 1, opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              pathLength: { duration: 0.3, ease: EASE, delay: 1.15 },
              opacity: { duration: 0.2, ease: EASE, delay: 1.15 },
              scale: {
                type: "spring",
                stiffness: 360,
                damping: 16,
                delay: 1.15,
              },
            }}
            style={{ transformOrigin: "60px 32px" }}
          />
          <motion.polyline
            points="57,93 64,86"
            initial={{ pathLength: 0, opacity: 0, scale: 0.4 }}
            whileInView={{ pathLength: 1, opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              pathLength: { duration: 0.3, ease: EASE, delay: 1.15 },
              opacity: { duration: 0.2, ease: EASE, delay: 1.15 },
              scale: {
                type: "spring",
                stiffness: 360,
                damping: 16,
                delay: 1.15,
              },
            }}
            style={{ transformOrigin: "60px 90px" }}
          />
        </g>
      )}
    </svg>
  );
}

// TELEHEALTH — real text in Bricolage Grotesque, revealed left-to-right
// via an animated clipPath rectangle.

function TelehealthWord() {
  const rawId = useId().replace(/:/g, "");
  const clipId = `tele-clip-${rawId}`;
  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <motion.rect
            x="0"
            y="0"
            height="120"
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.1 }}
          />
        </clipPath>
      </defs>
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        clipPath={`url(#${clipId})`}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: 18,
          letterSpacing: "0.04em",
        }}
      >
        TELEHEALTH
      </text>
    </g>
  );
}
