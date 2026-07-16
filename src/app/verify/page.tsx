import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Verify a Document" };

export default function VerifyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PagePlaceholder
          title="Verify a Document"
          description="Real client-side verification against the Kweli registry. This connects to real infrastructure, so it isn't simulated here — build pending registry access."
        />
      </main>
      <Footer />
    </>
  );
}
