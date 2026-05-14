import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const INK = "#0f0a07";
const PAPER = "#f8f5ee";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: INK,
          borderRadius: "50%",
        }}
      >
        <span
          style={{
            display: "flex",
            color: PAPER,
            fontSize: 37,
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size },
  );
}
