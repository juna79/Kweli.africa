import localFont from "next/font/local";

// Self-hosted copy of the same Satoshi files previously loaded from
// api.fontshare.com/cdn.fontshare.com — eliminates a cross-origin,
// render-blocking stylesheet request. next/font/local also generates a
// metrics-matched fallback automatically, so there's nothing to hand-tune.
//
// Only the three weights actually referenced anywhere in this codebase
// (font-medium/500, font-semibold/600 which resolves to the nearest
// available weight — 700, and font-bold/700, plus the unstyled body
// default of 400) are included. The original Fontshare request pulled
// 300 (Light) and 900 (Black) too, but grepping every className and
// inline style in src/ turns up zero uses of either — they were dead
// weight being downloaded on every single page load.
export const satoshi = localFont({
  src: [
    { path: "./Satoshi-Regular-400.woff2", weight: "400", style: "normal" },
    { path: "./Satoshi-Medium-500.woff2", weight: "500", style: "normal" },
    { path: "./Satoshi-Bold-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
