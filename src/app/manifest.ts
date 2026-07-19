import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kweli — Trust Infrastructure for the World",
    short_name: "Kweli",
    description:
      "Verify that the document in your hands is the genuine, unaltered one issued by a named organisation.",
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
