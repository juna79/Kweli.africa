import { Download, FileUp, QrCode, ScanLine, ShieldCheck } from "lucide-react";

const stages = [
  {
    icon: FileUp,
    title: "Register the document",
    body: "The approved issuer selects its source file. Kweli records its fingerprint and the details a recipient should check.",
  },
  {
    icon: QrCode,
    title: "Place the QR code",
    body: "Kweli creates a proof ID and QR code. The issuer places the QR on the document.",
  },
  {
    icon: Download,
    title: "Download the issued file",
    body: "Kweli records the fingerprint of the final file with its QR. The issuer downloads and shares that version.",
  },
  {
    icon: ScanLine,
    title: "Scan the QR code",
    body: "The recipient opens the proof record and compares its issuer and details with the document received.",
  },
  {
    icon: ShieldCheck,
    title: "Verify the exact file",
    body: "The recipient selects the digital file. Kweli checks its fingerprint against the final issued version.",
  },
] as const;

export function VerificationJourney({ example }: { example?: { name: string; issuer: string } }) {
  return (
    <>
      <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-[var(--color-slate)]">
        The issuer creates the QR-bearing file first. The recipient then checks the QR record and the file itself.
      </p>
      {example && (
        <p className="mx-auto mt-5 w-fit rounded-full border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/[0.05] px-4 py-2 text-center text-sm text-[var(--color-warm-paper)]/80">
          Example: {example.name} <span aria-hidden className="mx-1 text-[var(--color-gold-bright)]">·</span> Issuer: {example.issuer}
        </p>
      )}
      <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <li key={stage.title} className="relative rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.025] p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-gold)]/10 text-[var(--color-gold-bright)]">
                  <Icon size={23} strokeWidth={1.7} aria-hidden />
                </span>
                <span className="text-xs font-semibold tracking-widest text-[var(--color-gold-bright)]/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-gold-bright)]">
                {index < 3 ? "Issuer" : "Recipient"}
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-[var(--color-warm-paper)]">{stage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-slate)]">{stage.body}</p>
            </li>
          );
        })}
      </ol>
      <p className="mx-auto mt-7 max-w-2xl text-center text-sm leading-relaxed text-[var(--color-slate)]">
        A QR scan shows the issuer&apos;s record. The file check establishes whether this digital copy matches the issued version.
      </p>
    </>
  );
}
