export const verifyFaqs = [
  {
    q: "How do you verify a document?",
    a: "Scan the Kweli QR to open the issuer's proof record and compare its key details with the document. To check an exact digital copy, select the file: Kweli computes its fingerprint locally and compares it with the final issued version. The file itself is not uploaded for this check.",
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
    a: "A recipient can open the QR proof record without contacting the issuer. An account may be needed for an exact-file check in the Kweli portal.",
  },
  {
    q: "What if a document changes?",
    a: "Any change to the final digital file changes its fingerprint. With a known proof ID, an exact-file check can show that the presented copy does not match the registered one.",
  },
  {
    q: "What happens if verification fails?",
    a: "The presented file does not exactly match the final file registered under that proof. It may have been edited, re-saved, corrupted or replaced. The result alone does not identify the cause.",
  },
  {
    q: "How is Kweli different from digital signatures?",
    a: "Digital signatures and Kweli can work together. Kweli records an approved issuer's proof details and the fingerprint of the final issued file, then offers a hosted record and exact-file check to recipients.",
  },
  {
    q: "Can blockchain prove authenticity?",
    a: "No. A ledger can help show that a recorded proof was not changed later. The issuer's identity and issuance process still matter. Kweli's QR record and exact-file check are useful even where chain anchoring is pending.",
  },
  {
    q: "Can Kweli integrate with existing systems?",
    a: "Kweli is built as an independent trust layer that fits alongside the systems an organisation already uses, rather than replacing them. Integration specifics are worked out together, based on the systems and workflow involved.",
  },
  {
    q: "What happens if no record exists?",
    a: "Kweli returns Document Not Found when it cannot locate an issued proof for the reference or file supplied. Check the proof ID and ask the claimed issuer if the record should exist.",
  },
  {
    q: "Why blockchain?",
    a: "Chain anchoring can provide an additional tamper-evident record. It is not required for the basic QR record and exact-file check, and it should only be described as completed when a transaction is confirmed.",
  },
] as const;
