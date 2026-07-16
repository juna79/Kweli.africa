import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChapterDivider } from "@/components/layout/ChapterDivider";
import { Hero } from "@/components/home/Hero";
import { VerificationTeaser } from "@/components/home/VerificationTeaser";
import { WhyKweliTeaser } from "@/components/home/WhyKweliTeaser";

// Homepage is a concise overview + entry point — short teasers with CTAs
// into the dedicated pages, not the full content of any of them:
//   - full interactive verification tester lives at /verify
//   - full Why Kweli narrative lives at /why-kweli
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <VerificationTeaser />
        <ChapterDivider />
        <WhyKweliTeaser />
      </main>
      <Footer />
    </>
  );
}
