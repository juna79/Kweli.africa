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
    default: "Kweli — Verify the document its issuer sent",
    template: "%s — Kweli",
  },
  description:
    "Scan a Kweli QR to review its issuer's record, then check whether the exact digital file matches the final version registered at issuance.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kweli — Verify the document its issuer sent",
    description:
      "Scan a Kweli QR to review its issuer's record, then check whether the exact digital file matches the final version registered at issuance.",
    siteName: "Kweli",
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kweli — Verify the document its issuer sent",
    description:
      "Scan a Kweli QR to review its issuer's record, then check whether the exact digital file matches the final version registered at issuance.",
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
