import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF where the client supports it, falling back to WebP —
    // both are visually equivalent to the source JPEGs/PNGs at Next's
    // default quality, just smaller in bytes. Purely a delivery-format
    // change; no image files or their appearance are touched. Confirmed
    // via controlled Lighthouse re-testing that this has no measurable
    // effect on performance score in either direction.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
