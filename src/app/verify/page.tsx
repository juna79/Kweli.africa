import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VerificationDemo } from "@/components/verify/VerificationDemo";

export const metadata: Metadata = {
  title: "Verify a Document",
  description:
    "Download a sample document, upload it back, and watch Kweli check its fingerprint in real time.",
};

export default function VerifyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <VerificationDemo />
      </main>
      <Footer />
    </>
  );
}
