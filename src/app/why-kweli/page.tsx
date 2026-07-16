import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhyKweli } from "@/components/home/WhyKweli";

export const metadata: Metadata = {
  title: "Why Kweli",
  description:
    "Every important decision starts with a document. Here's why that's a trust problem, and the one promise Kweli makes about it.",
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
