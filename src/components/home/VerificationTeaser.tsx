import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

// Condensed homepage version of /verify — a hook and a door into the
// full interactive tester, not the tester itself.
export function VerificationTeaser() {
  return (
    <section className="relative px-6 py-28 text-center lg:px-8 lg:py-36">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--color-slate)] uppercase">
            Product demonstration
          </span>
          <h2 className="mx-auto mt-6 max-w-xl text-[var(--text-h2)] leading-[var(--text-h2--line-height)] font-bold text-[var(--color-warm-paper)]">
            Watch verification happen.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-slate)]">
            Download a sample document, upload it back, and watch Kweli check
            its fingerprint in real time.
          </p>
          <div className="mt-10">
            <Button href="/verify" variant="primary" withArrow>
              Try the Verification Experience
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
