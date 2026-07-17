import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

// Condensed homepage version of /why-kweli — a hook and a door into the
// full narrative, not the full chapter itself.
export function WhyKweliTeaser() {
  return (
    <section className="relative px-6 py-28 text-center lg:px-8 lg:py-36">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            Why Kweli
          </p>
          <h2 className="mx-auto mt-6 max-w-xl text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] font-bold text-[var(--color-warm-paper)]">
            Every important decision starts with a document.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-slate)]">
            The document travels. The trust should not.
          </p>
          <div className="mt-10">
            <Button href="/why-kweli" variant="secondary" withArrow>
              Why Kweli exists
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
