export const verifyFaqs = [
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
    a: "Kweli is built as an independent trust layer that fits alongside the systems an organisation already uses, rather than replacing them. Integration specifics are worked out together, based on the systems and workflow involved.",
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
