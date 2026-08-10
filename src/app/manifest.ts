import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kweli — Trust Infrastructure for the World",
    short_name: "Kweli",
    description:
      "Check whether a document matches the version its issuer registered — fingerprinted on your device, never uploaded. Insurance is where Kweli starts.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b080f",
    theme_color: "#0b080f",
    icons: [
      {
        src: "/icon.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
