import { FileText, QrCode, ScanSearch } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Set only after the public portal and its registry API are reachable.
const portalUrl = process.env.NEXT_PUBLIC_KWELI_PORTAL_URL;

export function QrJourney() {
  return (
    <section className="px-6 pb-16 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[var(--radius-xl)] border border-[var(--color-gold)]/25 bg-white/[0.025] p-6 sm:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-gold-bright)]">The Kweli QR journey</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-[var(--color-warm-paper)] sm:text-4xl">Scan the QR. Check the record. Then check the file.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { icon: FileText, title: "The issuer registers", body: "An approved issuer creates the final document, adds its Kweli QR and registers that final version." },
            { icon: QrCode, title: "The QR opens its record", body: "The recipient checks the issuer and registered fields. A valid QR record alone does not prove the copy is unchanged." },
            { icon: ScanSearch, title: "The file is matched", body: "Kweli fingerprints the file on the recipient's device and compares it with the issued version." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-[var(--radius-lg)] border border-white/10 bg-[var(--color-background)]/65 p-5">
              <Icon className="text-[var(--color-gold-bright)]" size={26} aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-warm-paper)]">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-warm-paper)]/75">{body}</p>
            </div>
          ))}
        </div>
        {portalUrl && (
          <div className="mt-8">
            <Button href={portalUrl} variant="primary" withArrow>Open live Kweli verification</Button>
          </div>
        )}
        <p className="mt-6 text-sm leading-relaxed text-[var(--color-warm-paper)]/70">The sample checker below demonstrates exact-file fingerprinting with a local sample list. It does not query the live Kweli registry.</p>
      </div>
    </section>
  );
}
