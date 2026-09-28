import { Download, FileCheck2, FileUp, QrCode, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Point this at the public portal only when its API and registry are reachable.
const portalUrl = process.env.NEXT_PUBLIC_KWELI_PORTAL_URL;

const issuerSteps = [
  {
    number: "01",
    icon: FileUp,
    title: "Register the source document",
    body: "An approved issuer signs in, selects its document and confirms the fields it wants recipients to check. Kweli records the source file's fingerprint.",
  },
  {
    number: "02",
    icon: QrCode,
    title: "Add the Kweli QR",
    body: "The portal creates a unique proof ID and QR. The issuer places the QR on the document, linking it to its hosted proof record.",
  },
  {
    number: "03",
    icon: Download,
    title: "Issue and download the final file",
    body: "Kweli fingerprints the final QR-bearing version and the issuer issues it. That is the file to download and send onward.",
  },
];

const recipientSteps = [
  {
    number: "04",
    icon: ScanLine,
    title: "Scan the QR",
    body: "The recipient opens the Kweli proof page and compares the issuer and registered fields with the document in hand. Finding the record does not prove that this copy is unchanged.",
  },
  {
    number: "05",
    icon: FileCheck2,
    title: "Verify the document",
    body: "The recipient selects the final digital file. Kweli fingerprints it on their device and compares it with the issued final version: exact match, mismatch or no issued record found.",
  },
];

function StepList({ steps }: { steps: typeof issuerSteps }) {
  return (
    <ol className="mt-7 space-y-3">
      {steps.map(({ number, icon: Icon, title, body }) => (
        <li key={number} className="flex gap-4 rounded-[var(--radius-lg)] border border-white/10 bg-[var(--color-background)]/70 p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gold)]/15 text-[var(--color-gold-bright)]">
            <Icon size={22} aria-hidden />
          </span>
          <div>
            <p className="text-xs font-semibold tracking-widest text-[var(--color-gold-bright)]">STEP {number}</p>
            <h3 className="mt-1 text-lg font-semibold text-[var(--color-warm-paper)]">{title}</h3>
            <p className="mt-2 text-base leading-relaxed text-[var(--color-warm-paper)]/75">{body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function QrJourney() {
  return (
    <section className="px-6 pb-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-gold)]/25 bg-white/[0.025] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-gold-bright)]">For the issuer</p>
            <h2 className="mt-3 text-2xl font-bold text-[var(--color-warm-paper)] sm:text-3xl">Create the issued document</h2>
            <StepList steps={issuerSteps} />
          </div>
          <div className="rounded-[var(--radius-xl)] border border-white/15 bg-white/[0.025] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-gold-bright)]">For the recipient</p>
            <h2 className="mt-3 text-2xl font-bold text-[var(--color-warm-paper)] sm:text-3xl">Check what you received</h2>
            <StepList steps={recipientSteps} />
            <p className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-gold)]/25 p-4 text-sm leading-relaxed text-[var(--color-warm-paper)]/80">
              The QR proves a record exists under the issuer. The file check proves an exact match to its final issued version.
            </p>
          </div>
        </div>
        {portalUrl && (
          <div className="mt-8 text-center">
            <Button href={portalUrl} variant="primary" withArrow>Open the Kweli portal</Button>
          </div>
        )}
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-[var(--color-warm-paper)]/70">
          The sample checker below demonstrates the final file comparison using local sample PDFs. It does not register a document, generate a QR or query the live registry.
        </p>
      </div>
    </section>
  );
}
