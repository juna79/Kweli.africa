import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { satoshi } from "@/fonts/satoshi";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema, siteUrl } from "@/lib/seo";
import { KweliBotMount } from "@/components/kweli-bot/KweliBotMount";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
    "Kweli lets you check whether a document matches the version its issuer registered — fingerprinted on your device, never uploaded. Insurance is where Kweli starts.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kweli — Trust Infrastructure for the World",
    description:
      "Check whether a document matches the version its issuer registered — fingerprinted on your device, never uploaded. Insurance is where Kweli starts.",
    siteName: "Kweli",
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kweli — Trust Infrastructure for the World",
    description:
      "Check whether a document matches the version its issuer registered — fingerprinted on your device, never uploaded. Insurance is where Kweli starts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${satoshi.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        {/* Feature-flagged, isolated overlay widget. Renders nothing when
            NEXT_PUBLIC_KWELI_BOT_ENABLED !== "true", and is wrapped in an
            error boundary so it can never break the rest of the site. */}
        <KweliBotMount />
      </body>
    </html>
  );
}
