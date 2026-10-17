import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoShowcase } from "@/components/ui/VideoShowcase";
import { videos } from "@/lib/videos";
import { Technology } from "@/components/technology/Technology";

const description =
  "How Kweli's document verification technology fingerprints, registers and verifies documents without storing them — client-side privacy, independent verification.";

export const metadata: Metadata = {
  title: "Document Verification Technology",
  description,
  alternates: {
    canonical: "/technology",
  },
  openGraph: {
    title: "Document Verification Technology — Kweli",
    description,
    siteName: "Kweli",
    type: "website",
  },
  twitter: { title: "Document Verification Technology — Kweli", description },
};

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Technology />
        <VideoShowcase
          eyebrow="Watch"
          heading="Verification inside the software you already use"
          videos={[videos.integration]}
        />
      </main>
      <Footer />
    </>
  );
}
