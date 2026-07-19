export const verifyFaqs = [
  {
    q: "How do you verify a document?",
    a: "Upload it in your browser. Kweli computes the document's cryptographic fingerprint locally and checks it against the registry — if it matches what was registered at issuance, the result is Verified. The document itself is never uploaded anywhere.",
  },
  {
    q: "What is document authenticity?",
    a: "Whether a document genuinely originates from the issuer it claims to. Kweli establishes this by comparing a presented document's fingerprint against the one its issuer registered at the time of issuance.",
  },
  {
    q: "What is document integrity?",
    a: "Whether a document is unchanged since it was issued. Even a single altered character produces a completely different fingerprint, so integrity is either fully intact or it isn't — there's no partial match.",
  },
  {
    q: "Does Kweli store documents?",
    a: "No. Kweli never stores the original document. Only its cryptographic fingerprint and minimal metadata are registered — the file itself never leaves your browser during verification.",
  },
  {
    q: "Can PDFs be altered?",
    a: "Yes, easily. Text, figures and images in a PDF can be edited with common software in minutes, and the result looks identical to the original to anyone viewing it. PDF format has no built-in way to prove it hasn't changed since it was issued — that's the specific gap Kweli closes.",
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
    q: "What happens if verification fails?",
    a: "You'll see a Verification Failed result: the presented document's fingerprint doesn't match what was registered at issuance. That means it has been altered in some way since then, even if the change isn't visible to the eye.",
  },
  {
    q: "How is Kweli different from digital signatures?",
    a: "A digital signature is applied by the signer at signing time, and verifying it later depends on the recipient trusting that signer's key infrastructure. Kweli instead registers a document's fingerprint independently at issuance, so anyone can verify it afterwards on their own, in their browser, with no key exchange, certificate chain, or prior relationship with the issuer.",
  },
  {
    q: "Can blockchain prove authenticity?",
    a: "Not by itself. A tamper-evident ledger can prove a record hasn't been altered since it was written — that's integrity. Authenticity is a separate claim: that the record genuinely came from the issuer it claims to. Kweli anchors the issuer's registration itself, not just a fingerprint, which is what ties the two together.",
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
