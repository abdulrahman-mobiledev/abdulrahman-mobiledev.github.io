"use client";

import { useEffect, useState } from "react";

const COMMANDS = [
  "yarn ios",
  "yarn start",
  "cd android && ./gradlew clean",
  "pod install",
  "yarn android",
  "eas build --platform ios",
];

export function Terminal({ size = "md" }: { size?: "sm" | "md" }) {
  const [cmdIdx, setCmdIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "deleting">("typing");

  useEffect(() => {
    const target = COMMANDS[cmdIdx];
    if (phase === "typing") {
      if (text.length < target.length) {
        const t = setTimeout(() => setText(target.slice(0, text.length + 1)), 65);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("hold"), 1600);
      return () => clearTimeout(t);
    }
    if (phase === "hold") {
      const t = setTimeout(() => setPhase("deleting"), 900);
      return () => clearTimeout(t);
    }
    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 30);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setCmdIdx((v) => (v + 1) % COMMANDS.length);
        setPhase("typing");
      }, 350);
      return () => clearTimeout(t);
    }
  }, [text, phase, cmdIdx]);

  const dims = size === "sm"
    ? { font: 14, caretW: 7, caretH: 14 }
    : { font: 17, caretW: 9, caretH: 17 };

  return (
    <div
      className="terminal inline-flex items-baseline gap-2 whitespace-nowrap"
      style={{
        fontFamily: "var(--font-jetbrains), 'JetBrains Mono', 'SF Mono', Menlo, monospace",
        fontWeight: 500,
        fontSize: dims.font,
        lineHeight: 1.4,
        letterSpacing: "0.01em",
      }}
      aria-hidden
    >
      <span style={{ fontWeight: 700, opacity: 0.7 }}>$</span>
      <span style={{ whiteSpace: "pre" }}>{text}</span>
      <span
        className="terminal-caret"
        style={{
          display: "inline-block",
          width: dims.caretW,
          height: dims.caretH,
          background: "currentColor",
          marginLeft: 2,
          verticalAlign: "-2px",
        }}
      />
      <style>{`
        @keyframes terminal-blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
        .terminal-caret { animation: terminal-blink 1.05s steps(2, end) infinite; }
      `}</style>
    </div>
  );
}
