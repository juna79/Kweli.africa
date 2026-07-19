import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/about/About";

const description =
  "Independent trust has become a missing layer of modern infrastructure. Kweli exists to close that gap.";

export const metadata: Metadata = {
  title: "About Kweli",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Kweli",
    description,
    siteName: "Kweli",
    type: "website",
  },
  twitter: { title: "About Kweli", description },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </>
  );
}
