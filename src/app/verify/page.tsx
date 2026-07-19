import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo";
import { verifyFaqs } from "@/lib/verifyFaqs";
import { VerifyHero } from "@/components/verify/VerifyHero";
import { VerificationDemo } from "@/components/verify/VerificationDemo";
import { VerifyProcessSteps } from "@/components/verify/VerifyProcessSteps";
import { VerifyResultsExplainer } from "@/components/verify/VerifyResultsExplainer";
import { VerifyDocumentTypes } from "@/components/verify/VerifyDocumentTypes";
import { VerifyArchitecture } from "@/components/verify/VerifyArchitecture";
import { VerifyPrivacy } from "@/components/verify/VerifyPrivacy";
import { VerifyComparison } from "@/components/verify/VerifyComparison";
import { VerifyFaq } from "@/components/verify/VerifyFaq";
import { VerifyCta } from "@/components/verify/VerifyCta";

const description =
  "Upload an original document to verify whether it exactly matches the version registered by its issuer.";

export const metadata: Metadata = {
  title: "Verify a Document",
  description,
  alternates: {
    canonical: "/verify",
  },
  openGraph: {
    title: "Verify a Document — Kweli",
    description,
    siteName: "Kweli",
    type: "website",
  },
  twitter: { title: "Verify a Document — Kweli", description },
};

export default function VerifyPage() {
  return (
    <>
      <JsonLd
        data={faqSchema(verifyFaqs.map((f) => ({ question: f.q, answer: f.a })))}
      />
      <Header />
      <main className="flex-1">
        <VerifyHero />
        <VerificationDemo />
        <VerifyProcessSteps />
        <VerifyResultsExplainer />
        <VerifyDocumentTypes />
        <VerifyArchitecture />
        <VerifyPrivacy />
        <VerifyComparison />
        <VerifyFaq />
        <VerifyCta />
      </main>
      <Footer />
    </>
  );
}
