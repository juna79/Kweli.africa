import type { NextConfig } from "next";

// Every font, script, and image on this site is now same-origin (the
// Satoshi webfont is self-hosted as of this pass — see src/fonts/satoshi.ts
// — and Inter is self-hosted automatically by next/font/google). That
// makes a same-origin-only CSP straightforward: nothing here needs a
// third-party allowance. 'unsafe-inline' stays on script-src and
// style-src because Next's hydration payload and several components'
// inline style={{}} usage rely on it — removing it would need per-request
// nonces via Middleware, a larger change with its own risk that isn't
// justified here since Best Practices is already 100 and this is a
// security hardening pass, not a performance one.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "base-uri 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF where the client supports it, falling back to WebP —
    // both are visually equivalent to the source JPEGs/PNGs at Next's
    // default quality, just smaller in bytes. Purely a delivery-format
    // change; no image files or their appearance are touched. Confirmed
    // via controlled Lighthouse re-testing that this has no measurable
    // effect on performance score in either direction.
    formats: ["image/avif", "image/webp"],
    // Default is 4 hours. These are static marketing/product photography
    // that only changes on a deliberate redeploy with a new source file —
    // a year-long cache is appropriate. If an image is ever replaced at
    // the same path, bust it by renaming the file (as every other asset
    // on this site already does via content-based paths).
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
