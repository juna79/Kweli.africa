"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const EYEBROW = "text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

const faqs = [
  {
    q: "Does Kweli store documents?",
    a: "No. Kweli never stores the original document. Only its cryptographic fingerprint and minimal metadata are registered — the file itself never leaves your browser during verification.",
  },
  {
    q: "Can anyone verify?",
    a: "Yes. Anyone holding a document can verify it independently, without contacting the issuer.",
  },
  {
    q: "What if a document changes?",
    a: "Any change to a document — even a single character — produces a completely different fingerprint. Kweli returns Verification Failed rather than accepting the altered version.",
  },
  {
    q: "Can Kweli integrate with existing systems?",
    a: "Kweli is built as an independent trust layer that fits alongside the systems an organisation already uses, rather than replacing them. Integration specifics are worked out as part of every pilot.",
  },
  {
    q: "What happens if no record exists?",
    a: "Kweli returns Document Not Found. That means the document was never registered, or the version presented doesn't match anything on record.",
  },
  {
    q: "Why blockchain?",
    a: "Each fingerprint is anchored as a tamper-evident cryptographic proof, so a registered record can't be quietly altered later. The technology is an implementation detail — what matters is that the proof can't be tampered with after the fact.",
  },
] as const;

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-medium text-[var(--color-warm-paper)]">{q}</span>
        <ChevronDown
          size={18}
          strokeWidth={2}
          aria-hidden
          className={`shrink-0 text-[var(--color-gold-bright)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300 ease-[var(--ease-trust)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-[var(--color-slate)]">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function VerifyFaq() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <p className={EYEBROW}>Frequently Asked Questions</p>
          <h2 className="mx-auto mt-6 text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Questions we hear most.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-14 border-t border-white/10">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
