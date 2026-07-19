import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhyKweli } from "@/components/home/WhyKweli";

const description =
  "Every important decision starts with a document. Here's why that's a trust problem, and the one promise Kweli's enterprise trust infrastructure makes about it.";

export const metadata: Metadata = {
  title: "Enterprise Trust Infrastructure",
  description,
  alternates: {
    canonical: "/why-kweli",
  },
  openGraph: {
    title: "Enterprise Trust Infrastructure — Kweli",
    description,
    siteName: "Kweli",
    type: "website",
  },
  twitter: { title: "Enterprise Trust Infrastructure — Kweli", description },
};

export default function WhyKweliPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <WhyKweli />
      </main>
      <Footer />
    </>
  );
}
