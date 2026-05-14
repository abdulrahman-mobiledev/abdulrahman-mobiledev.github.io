"use client";

import { useEffect, useId, useState } from "react";
import { motion } from "motion/react";
import { EASE } from "@/lib/motion";

type Mode = "stream" | "stamp" | "spin" | "pop";

type Props = {
  slug: string;
  size?: number;
  mode?: Mode;
  // When true, render the negative space — a filled background shape with the
  // trace paths cut out via SVG mask. Good for badge logos where the "ink" is
  // the background color in the source (e.g. fixa: yellow F on navy → fill the
  // yellow areas instead of the navy ones).
  invert?: boolean;
};

type Parsed = {
  viewBox: string;
  vbW: number;
  vbH: number;
  subpaths: { d: string; x: number }[];
  paths: string[];
};

// Loads /public/logos/traced/opt-${slug}.svg.
// - mode="stream": sub-paths slide in from the right with a left-to-right
//   stagger (good for horizontal/asymmetric logos like gayar)
// - mode="stamp": the whole logo scales + rotates into place from a slightly
//   smaller, tilted position (good for circular badges like fixa)
export function FilledGlyph({
  slug,
  size = 150,
  mode = "stream",
  invert = false,
}: Props) {
  const [parsed, setParsed] = useState<Parsed | null>(null);
  const rawId = useId().replace(/:/g, "");
  const maskId = `invmask-${rawId}`;

  useEffect(() => {
    let alive = true;
    fetch(`/logos/traced/opt-${slug}.svg`)
      .then((r) => r.text())
      .then((raw) => {
        if (!alive) return;
        const vbMatch = raw.match(/viewBox="([^"]+)"/);
        const viewBox = vbMatch?.[1] ?? "0 0 100 100";
        const parts = viewBox.trim().split(/\s+/).map(Number);
        const vbW = parts[2] || 100;
        const vbH = parts[3] || 100;
        // Strip <defs> so we don't match paths inside <clipPath>/<mask>
        // definitions (e.g. a clipPath's bounding rect path).
        const body = raw.replace(/<defs[\s\S]*?<\/defs>/g, "");
        const paths: string[] = [];
        const re = /<path[^>]*\sd="([^"]+)"/g;
        let m: RegExpExecArray | null;
        while ((m = re.exec(body)) !== null) paths.push(m[1]);
        const subpaths: { d: string; x: number }[] = [];
        for (const d of paths) {
          const subs = d.split(/(?=M)/).filter((s) => s.trim().length > 8);
          for (const s of subs) {
            const trimmed = s.trim();
            const match = trimmed.match(/M\s*([\d.\-]+)/);
            const x = match ? parseFloat(match[1]) : 0;
            subpaths.push({ d: trimmed, x });
          }
        }
        subpaths.sort((a, b) => a.x - b.x);
        setParsed({ viewBox, vbW, vbH, subpaths, paths });
      });
    return () => {
      alive = false;
    };
  }, [slug]);

  if (!parsed)
    return (
      <span
        style={{ width: size, height: size, display: "inline-block" }}
        aria-hidden
      />
    );

  // For inverted mode the visible content is just the inscribed circle, so
  // crop the viewBox tight to that circle — otherwise the logo renders small
  // inside a much larger SVG and looks under-sized next to the others.
  const invertedRadius =
    (Math.min(parsed.vbW, parsed.vbH) / 2) * 0.58;
  const invertedCx = parsed.vbW / 2;
  const invertedCy = parsed.vbH / 2;
  // Add ~12% padding around the inscribed circle so the badge doesn't kiss
  // the SVG edges — makes it sit a little smaller in its slot.
  const pad = invertedRadius * 0.28;
  const renderViewBox = invert
    ? `${invertedCx - invertedRadius - pad} ${invertedCy - invertedRadius - pad} ${(invertedRadius + pad) * 2} ${(invertedRadius + pad) * 2}`
    : parsed.viewBox;

  // Content node — either the trace paths directly, or a filled circle with
  // the paths cut out via mask when `invert` is set.
  const content = invert ? (
    <>
      <defs>
        <mask id={maskId}>
          <rect x="0" y="0" width={parsed.vbW} height={parsed.vbH} fill="white" />
          <g fill="black">
            {parsed.paths.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        </mask>
      </defs>
      <circle
        cx={invertedCx}
        cy={invertedCy}
        r={invertedRadius}
        mask={`url(#${maskId})`}
      />
    </>
  ) : (
    parsed.paths.map((d, i) => <path key={i} d={d} />)
  );

  if (mode === "stamp") {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox={renderViewBox}
        fill="currentColor" fillRule="evenodd"
        initial={{ scale: 0.55, rotate: -18, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          scale: { type: "spring", stiffness: 55, damping: 14 },
          rotate: { type: "spring", stiffness: 50, damping: 16 },
          opacity: { duration: 0.7, ease: EASE },
        }}
        style={{ transformOrigin: "center" }}
        aria-hidden
      >
        {content}
      </motion.svg>
    );
  }

  if (mode === "spin") {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox={renderViewBox}
        fill="currentColor" fillRule="evenodd"
        initial={{ scale: 0, rotate: -270, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          scale: { duration: 1.8, ease: EASE },
          rotate: { duration: 1.8, ease: EASE },
          opacity: { duration: 0.8, ease: EASE },
        }}
        style={{ transformOrigin: "center" }}
        aria-hidden
      >
        {content}
      </motion.svg>
    );
  }

  if (mode === "pop") {
    // Per-path scale-pop: each <path> springs in from scale 0 around its own
    // M-point origin, stagger by index.
    return (
      <svg
        width={size}
        height={size}
        viewBox={renderViewBox}
        fill="currentColor"
        fillRule="evenodd"
        aria-hidden
      >
        {parsed.paths.map((d, i) => {
          const match = d.match(/M\s*([\d.\-]+)[\s,]+([\d.\-]+)/);
          const x = match ? parseFloat(match[1]) : 0;
          const y = match ? parseFloat(match[2]) : 0;
          const delay = 0.1 + i * 0.11;
          return (
            <motion.path
              key={i}
              d={d}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                scale: {
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  delay,
                },
                opacity: { duration: 0.3, ease: EASE, delay },
              }}
              style={{
                transformOrigin: `${x}px ${y}px`,
                transformBox: "fill-box",
              }}
            />
          );
        })}
      </svg>
    );
  }

  // stream mode + invert: fall back to a simple slide-in of the whole masked
  // shape; the per-subpath stagger doesn't apply to the masked-circle render.
  if (invert) {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox={renderViewBox}
        fill="currentColor" fillRule="evenodd"
        initial={{ x: parsed.vbW * 0.35, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
        aria-hidden
      >
        {content}
      </motion.svg>
    );
  }

  const slideDist = parsed.vbW * 0.35;
  // Order paths left-to-right by their first M x-coordinate so the stream
  // reveal flows naturally regardless of source order. Paths sharing the same
  // M-x animate in the same frame — useful for grouping pieces that should
  // feel like one unit (e.g. fixa's ring + handle nubs, both prefixed with
  // `M 30.5 60`).
  const orderedPaths = parsed.paths
    .map((d) => {
      const match = d.match(/M\s*([\d.\-]+)/);
      return { d, x: match ? parseFloat(match[1]) : 0 };
    })
    .sort((a, b) => a.x - b.x);
  // Group paths sharing the same M-x so they animate as a single unit. We
  // render each group inside a <motion.g>, which composites all children to
  // one buffer before applying opacity — overlapping fills inside the group
  // don't double-darken during the fade-in.
  const groups = new Map<number, string[]>();
  for (const { d, x } of orderedPaths) {
    const list = groups.get(x) ?? [];
    list.push(d);
    groups.set(x, list);
  }
  const groupEntries = Array.from(groups.entries()).sort(
    ([a], [b]) => a - b,
  );
  return (
    <svg
      width={size}
      height={size}
      viewBox={renderViewBox}
      fill="currentColor" fillRule="evenodd"
      aria-hidden
    >
      {groupEntries.map(([x, ds], gi) => (
        <motion.g
          key={x}
          initial={{ x: slideDist, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 1.4,
            ease: EASE,
            delay: 0.1 + gi * 0.2,
          }}
        >
          {ds.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </motion.g>
      ))}
    </svg>
  );
}
