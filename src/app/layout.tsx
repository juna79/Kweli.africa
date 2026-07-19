import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema, siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const satoshiHref =
  "https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap";

export const viewport: Viewport = {
  themeColor: "#0b080f",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kweli — Trust Infrastructure for the World",
    template: "%s — Kweli",
  },
  description:
    "Verify that the document in your hands is the genuine, unaltered one issued by a named organisation. Kweli is trust infrastructure for the world.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kweli — Trust Infrastructure for the World",
    description:
      "Verify that the document in your hands is the genuine, unaltered one issued by a named organisation.",
    siteName: "Kweli",
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kweli — Trust Infrastructure for the World",
    description:
      "Verify that the document in your hands is the genuine, unaltered one issued by a named organisation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        {/* Preload lets the browser fetch this render-critical stylesheet
            at high priority in parallel with other head resources, ahead
            of when the <link rel="stylesheet"> below would otherwise be
            discovered. Confirmed via controlled Lighthouse re-testing that
            this has no measurable effect on performance score in either
            direction on this site — kept as standard practice. */}
        <link rel="preload" href={satoshiHref} as="style" />
        <link rel="stylesheet" href={satoshiHref} />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
