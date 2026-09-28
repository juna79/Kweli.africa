import { Button } from "@/components/ui/Button";
import { VerificationJourney } from "@/components/industries/shared/VerificationJourney";

export function LaboratoriesIndustry() {
  return (
    <>
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-gold-bright)]">For laboratories</p>
          <h1 className="mt-5 max-w-4xl text-[2.75rem] font-bold leading-tight text-[var(--color-warm-paper)] sm:text-6xl">Your results travel. Proof of what you issued should travel with them.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-warm-paper)]/80">A soil report sent to a farmer, exporter or buyer may be forwarded many times. Kweli gives the recipient a way to check that the report in hand is the same final file your lab registered.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/book-a-demo" variant="primary" withArrow>Discuss a lab pilot</Button>
            <Button href="/verify" variant="secondary">See how it works</Button>
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-[var(--color-warm-paper)]">From the lab report to the buyer&apos;s check.</h2>
          <VerificationJourney />
        </div>
      </section>
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-warm-paper)]">Start with the report you issue most often.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-warm-paper)]/75">A pilot can begin with one report type and one receiving group. Your team keeps its existing report process; Kweli adds a registration and verification step around the final file.</p>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-gold)]/25 p-7">
            <p className="font-semibold text-[var(--color-gold-bright)]">What a check establishes</p>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-relaxed text-[var(--color-warm-paper)]/80">
              <li>The QR resolves to a record from the named lab.</li>
              <li>The visible report details can be compared with registered fields.</li>
              <li>The selected digital file either matches the registered final file or it does not.</li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-[var(--color-warm-paper)]/65">Kweli does not judge whether the test method or result is scientifically correct.</p>
          </div>
        </div>
      </section>
    </>
  );
}
