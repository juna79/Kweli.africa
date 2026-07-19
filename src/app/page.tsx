import type { Metadata } from "next";
import { Globe2, Handshake } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CinematicBand } from "@/components/ui/CinematicBand";
import { VerificationTeaser } from "@/components/home/VerificationTeaser";
import { WhyKweliTeaser } from "@/components/home/WhyKweliTeaser";

// No explicit title here: the root layout's default title
// ("Kweli — Trust Infrastructure for the World") already targets the
// homepage's primary keyword and reads brand-first, which the "%s — Kweli"
// template used by every other page would break out of order.
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

// Homepage is a concise overview + entry point — short teasers with CTAs
// into the dedicated pages, not the full content of any of them:
//   - full interactive verification tester lives at /verify
//   - full Why Kweli narrative lives at /why-kweli
//
// Two full-bleed Art Book Volume 1 bands break up the typography/whitespace
// rhythm — see public/artwork/home/MANIFEST.md for the exact frames.
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CinematicBand
          src="/artwork/home/home-global-trust.jpg"
          alt="Africa traced with a fine gold trust-network, cinematic, global scale — Kweli Art Book"
          source="Art Book Vol. 1 — frame 02/05/19 (global trust)"
          caption="Trust infrastructure, wherever a document travels."
          icon={Globe2}
        />
        <VerificationTeaser />
        <CinematicBand
          src="/artwork/home/home-cross-organisation-trust.jpg"
          alt="Two organisations exchanging a document, warm cinematic lighting — Kweli Art Book"
          source="Art Book Vol. 1 — frame 17 (cross-professional trust)"
          caption="Confidence built between organisations, not around them."
          icon={Handshake}
        />
        <WhyKweliTeaser />
      </main>
      <Footer />
    </>
  );
}
