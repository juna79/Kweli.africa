import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookADemo } from "@/components/demo/BookADemo";

const description =
  "See how Kweli can fit into your existing workflow without changing the way your teams already work.";

export const metadata: Metadata = {
  title: "Book a Demo",
  description,
  alternates: {
    canonical: "/book-a-demo",
  },
  openGraph: {
    title: "Book a Demo — Kweli",
    description,
    siteName: "Kweli",
    type: "website",
  },
  twitter: { title: "Book a Demo — Kweli", description },
};

export default function BookADemoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <BookADemo />
      </main>
      <Footer />
    </>
  );
}
