"use client";

import { useEffect, useId, useRef, useState } from "react";

type Props = {
  slug: string;
  size?: number;
};

export function TracedGlyph({ slug, size = 150 }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [drawn, setDrawn] = useState(false);
  const uid = useId().replace(/:/g, "");

  useEffect(() => {
    let alive = true;
    fetch(`/logos/traced/opt-${slug}.svg`)
      .then((r) => r.text())
      .then((raw) => {
        if (!alive) return;
        const cleaned = raw
          .replace(/<svg([^>]*?)\s+width="[^"]*"/, "<svg$1")
          .replace(/<svg([^>]*?)\s+height="[^"]*"/, "<svg$1")
          .replace(
            /<svg /,
            '<svg width="100%" height="100%" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" '
          );
        setSvg(cleaned);
      });
    return () => {
      alive = false;
    };
  }, [slug]);

  useEffect(() => {
    if (!svg || !wrapRef.current) return;
    const wrap = wrapRef.current;
    const svgEl = wrap.querySelector("svg");
    if (!svgEl) return;

    const vbAttr = svgEl.getAttribute("viewBox");
    const vb = vbAttr ? vbAttr.split(/\s+/).map(Number) : [0, 0, 1000, 1000];
    const vbDim = Math.max(vb[2] || 1000, vb[3] || 1000);
    const strokeWidth = vbDim * 0.04;
    svgEl.setAttribute("stroke-width", String(strokeWidth));

    const paths = Array.from(svgEl.querySelectorAll("path")) as SVGPathElement[];
    paths.forEach((p, idx) => {
      const len = p.getTotalLength();
      p.style.setProperty("--len", String(len));
      p.style.setProperty("--delay", `${idx * 0.06}s`);
      const perPath = Math.min(2.4, Math.max(0.8, (len / 4000) * 1.8));
      p.style.setProperty("--dur", `${perPath}s`);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setDrawn(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "-40px" }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, [svg]);

  return (
    <>
      <style>{`
        .glyph-${uid} svg path {
          stroke-dasharray: var(--len, 1000);
          stroke-dashoffset: var(--len, 1000);
          transition: stroke-dashoffset var(--dur, 1.6s) cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: var(--delay, 0s);
        }
        .glyph-${uid}.drawn svg path {
          stroke-dashoffset: 0;
        }
      `}</style>
      <div
        ref={wrapRef}
        className={`glyph-${uid}${drawn ? " drawn" : ""}`}
        style={{ width: size, height: size, display: "inline-block" }}
        dangerouslySetInnerHTML={{ __html: svg }}
        aria-hidden
      />
    </>
  );
}
