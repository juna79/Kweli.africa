import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Technology } from "@/components/technology/Technology";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "How Kweli fingerprints, registers and verifies documents without storing them — client-side privacy, immutable registration, and independent verification.",
};

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Technology />
      </main>
      <Footer />
    </>
  );
}
