import { ArrowRight, FileText, QrCode, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stages = [
  { icon: FileText, label: "1. Issuer registers", detail: "A garage issues its final repair estimate." },
  { icon: QrCode, label: "2. QR opens the record", detail: "The recipient sees who issued it and checks the registered details." },
  { icon: ShieldCheck, label: "3. File is checked", detail: "The exact file is compared with the issuer's registered version." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_75%_90%_at_90%_35%,rgba(201,162,39,0.13),transparent_65%)] px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-gold-bright)]">Document verification at source</p>
          <h1 className="mt-6 max-w-3xl text-[2.75rem] font-bold leading-[1.08] tracking-tight text-[var(--color-warm-paper)] sm:text-[4.25rem]">
            Know whether this is the document its issuer actually sent.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-warm-paper)]/85">
            Kweli lets an organisation register a document when it is issued. The recipient can scan its QR to check the issuer&apos;s record, then check the file itself for an exact match. The file stays on their device.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/verify" variant="primary" withArrow>See how verification works</Button>
            <Button href="/book-a-demo" variant="secondary">Talk to us about your workflow</Button>
          </div>
          <p className="mt-6 text-sm text-[var(--color-warm-paper)]/70">Starting with insurance claims. Also working with labs, schools and trade documents.</p>
        </div>
        <div className="rounded-[var(--radius-xl)] border border-white/15 bg-[var(--color-background)]/80 p-5 shadow-2xl sm:p-8" aria-label="Illustrative Kweli document journey">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-gold-bright)]">An example: motor claim evidence</p>
          <ol className="space-y-3">
            {stages.map(({ icon: Icon, label, detail }) => (
              <li key={label} className="flex gap-4 rounded-[var(--radius-md)] border border-white/10 bg-white/[0.035] p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gold)]/15 text-[var(--color-gold-bright)]"><Icon size={22} aria-hidden /></span>
                <div><p className="font-semibold text-[var(--color-warm-paper)]">{label}</p><p className="mt-1 text-sm leading-relaxed text-[var(--color-warm-paper)]/75">{detail}</p></div>
              </li>
            ))}
          </ol>
          <p className="mt-6 flex items-center gap-2 text-sm text-[var(--color-warm-paper)]/75"><ArrowRight size={16} aria-hidden /> A QR record and an exact-file match answer different questions.</p>
        </div>
      </div>
    </section>
  );
}
