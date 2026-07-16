import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://kweli.africa";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kweli — Trust Infrastructure for the World",
    template: "%s — Kweli",
  },
  description:
    "Verify that the document in your hands is the genuine, unaltered one issued by a named organisation. Kweli is trust infrastructure for the world.",
  openGraph: {
    title: "Kweli — Trust Infrastructure for the World",
    description:
      "Verify that the document in your hands is the genuine, unaltered one issued by a named organisation.",
    url: siteUrl,
    siteName: "Kweli",
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
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
