/**
 * Kweli Bot — PUBLIC-SAFE knowledge base.
 *
 * This is the ONLY file the Kweli team needs to edit to change what the bot
 * says. It contains no component code, no secrets, and no private material.
 *
 * Editing rules (read before changing anything here):
 *  - Everything in this file is public. Never add investor, fundraising,
 *    pipeline, CRM, pricing, internal-strategy, credential or personal data.
 *  - Every claim must be true of the CURRENT, LIVE product. Do not describe
 *    planned capabilities as if they exist today.
 *  - Do NOT state or imply that fingerprints are anchored on a blockchain,
 *    a smart contract, Base, or any public ledger. Smart-contract anchoring
 *    is not wired into the working product, so it is deliberately absent here.
 *  - Kweli verifies AUTHENTICITY and INTEGRITY, never whether the contents of
 *    a document are factually true, and never that fraud is prevented.
 *  - When adding an FAQ, give it strong, specific `keywords`. The typed-question
 *    matcher only shows an answer on a high-confidence keyword match; otherwise
 *    it offers to pass the question to the team. It never guesses.
 *
 * Sources reconciled into this file: Kweli_Canonical_OS.md, the two
 * Kweli_V3_* briefs, and the already-published site copy (src/lib/verifyFaqs.ts,
 * src/lib/industries.ts, src/lib/seo.ts, the /verify page).
 */

export type Industry = {
  /** Stable id, also used as a conversation option value. */
  id: string;
  label: string;
  /** One-line, plain-language description of where Kweli fits for them. */
  blurb: string;
  /** Example document types, used as selectable chips. Illustrative only. */
  exampleDocuments: string[];
  /**
   * A tailored explanation shown after the visitor describes their situation.
   * Written to be accurate whether they issue or receive documents.
   */
  tailoredExplainer: string;
  /**
   * Natural wording a visitor might type at the industry step instead of
   * clicking the option (e.g. "schools", "we are an insurance company"). Used
   * only to route a typed guided response to this option — matching metadata,
   * never displayed.
   */
  aliases?: string[];
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
  /**
   * Lower-cased keywords/phrases used for high-confidence matching of typed
   * questions. Include obvious synonyms. Keep them specific to this answer.
   */
  keywords: string[];
  /**
   * Natural-language phrasings / intents that should map to this topic — how a
   * visitor might actually ask, beyond the exact FAQ wording. The matcher is
   * plural- and typo-tolerant, so list base phrasings (e.g. "what about a
   * picture", "do you keep my file"); it will also catch plurals and reasonable
   * misspellings. Aliases are matching metadata only — never a factual claim.
   */
  aliases?: string[];
};

/** Short product summary the bot uses to open an explanation. */
export const productSummary =
  "Kweli is trust infrastructure. Its first capability lets someone holding a document check whether it matches the exact version recorded under its named issuer's registration — and that it has not changed since. It confirms authenticity and integrity. It does not judge whether the information inside the document is factually correct.";

/** How verification works — narrow, technically-confirmed wording only. */
export const howVerificationWorks =
  "During verification, the file's cryptographic fingerprint (a SHA-256 hash) is computed locally in your browser. The file itself does not leave your browser. That fingerprint is then checked against the version recorded under the issuer's registration. If it matches, the result is Verified.";

export const whatKweliProves =
  "Two things: integrity — the document is unchanged since it was recorded — and that the file matches the version registered under the named issuer. It is independent, so a recipient can check a document without contacting the issuer.";

export const whatKweliDoesNotProve =
  "Kweli does not prove that the information inside a document is true, does not prevent or detect every form of fraud, and does not guarantee that an issuer is honest. A genuine issuer can register a document that contains a mistake — Kweli would still confirm the file matches what was registered. Authenticity is not the same as truth.";

/**
 * The three verification result states. Wording is deliberately careful:
 * a mismatch establishes THAT the files differ, not WHO changed a file or WHY.
 * (Approved wording — do not simplify to "it's been altered".)
 */
export const resultStates = {
  verified:
    "Verified means the file you presented matches the expected registered version.",
  failed:
    "Verification Failed means Kweli found the applicable registration but the presented file's fingerprint did not match the expected registered file. It may have been edited, re-saved, scanned, converted, or may simply be a different file. Kweli establishes the mismatch; it does not automatically establish who changed it or why.",
  notFound:
    "Document Not Found means Kweli could not locate an applicable registration record. This does not, by itself, prove the document is fraudulent — it may never have been registered, or the version presented may not correspond to any record.",
} as const;

/** Client-side hashing / file handling — narrow, verified claim only. */
export const fileHandling =
  "During verification, the file's cryptographic fingerprint is computed locally in your browser. The file itself does not leave your browser during verification.";

/**
 * Scans and photographs — approved wording per Kweli OS §11 (QR-enabled
 * workflow governance decision, 26 Aug 2026). The QR step is described as a
 * CURRENT capability ("takes the verifier…"): Founder/CEO + CTO confirmed on
 * 26 Aug 2026 that the QR opens a hosted Kweli verification page. Still never
 * claim the QR alone proves a paper document genuine, and never claim OCR /
 * automated visual comparison or blockchain anchoring.
 */
export const scansAndPhotos =
  "A scan or photograph is a different file, so it will not produce the same fingerprint as the original. For a Kweli-enabled document, its QR code takes the verifier to the issuer's registration record, where they can inspect the issuer and compare registered document details. The QR workflow does not make a scan identical to the original digital file.";

/** Issuer role and provenance — measured wording (no claim of live issuer auth). */
export const issuerAndProvenance =
  "The document or file is registered by the issuer or an authorised issuing system acting for that issuer. Kweli records the file's fingerprint under the issuer's authenticated registration, together with the approved verification details for that file type. The strength of the issuer identity still depends on the onboarding and credential controls applied in that deployment.";

/** Integration — independent trust layer, specifics worked out per case. */
export const integration =
  "Kweli is designed as an independent trust layer that fits alongside the systems an organisation already uses, rather than replacing them. Whether and how it connects to a particular system is worked out together, based on the workflow involved.";

/** Plain-language limitations, surfaced when relevant. */
export const limitations = [
  "Kweli does not prove the contents of a document are true.",
  "Kweli does not prevent, eliminate or detect every form of fraud.",
  "Kweli does not guarantee that an issuer is honest.",
  "Kweli cannot verify a document that was never registered.",
  "A scan, photo, conversion or re-saved copy is a different file and normally will not match the registered original.",
  "Kweli does not use AI to decide whether a document is genuine.",
  "Pilot terms and integrations depend on the specific use case.",
] as const;

/**
 * Industries. The seven with dedicated site hubs reuse the published copy from
 * src/lib/industries.ts. Agriculture and "Other" use a generic explainer and
 * must never reference specific organisations, customers or pilots.
 */
export const industries: Industry[] = [
  {
    id: "insurance",
    label: "Insurance",
    blurb:
      "Confirm a repair estimate, assessor report or medical report is exactly what the issuer produced, before a payout decision.",
    exampleDocuments: [
      "Repair Estimates",
      "Assessor Reports",
      "Police Abstracts",
      "Medical Reports",
      "Invoices",
      "Valuation Reports",
    ],
    tailoredExplainer:
      "Insurance is Kweli's first market. Documents like repair estimates, assessor reports, police abstracts and medical reports each shape a claim decision, and each can be altered after it is issued. Kweli lets a claims team confirm a document matches the version registered under the issuer — for example the garage, assessor or hospital — before the decision is made. It confirms the document is unchanged; it does not judge whether the amount or diagnosis is correct.",
    aliases: [
      "insurance", "insurer", "insurers", "insurance company", "claims",
      "claim", "underwriter", "underwriting", "broker", "reinsurance",
    ],
  },
  {
    id: "banking",
    label: "Banking & Financial Services",
    blurb:
      "Confirm a guarantee, statement or audit report is unchanged since the institution that issued it registered it.",
    exampleDocuments: [
      "Bank Guarantees",
      "Financial Statements",
      "Audit Reports",
      "KYC Documents",
      "Credit Documentation",
    ],
    tailoredExplainer:
      "Guarantees, statements and audit reports underpin lending and settlement decisions, and are often produced by a party the bank never deals with directly. Kweli lets a bank confirm a financial document matches the version recorded under the issuing institution's registration — integrity, not a judgement that the figures themselves are correct.",
    aliases: [
      "bank", "banks", "banking", "lender", "lending", "microfinance",
      "sacco", "saccos", "fintech", "financial services", "financial",
      "credit union",
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    blurb:
      "Confirm a medical report or referral is unchanged since a hospital or lab issued it.",
    exampleDocuments: [
      "Medical Reports",
      "Diagnostic Reports",
      "Referral Letters",
      "Medical Certificates",
    ],
    tailoredExplainer:
      "Medical reports and referrals travel between clinics, insurers and employers. Kweli lets the receiving party confirm nothing changed since a hospital or lab issued the report, without judging the clinical content itself.",
    aliases: [
      "hospital", "hospitals", "clinic", "clinics", "healthcare", "health",
      "medical", "laboratory", "lab", "labs", "pharmacy", "pharmacies",
      "diagnostic",
    ],
  },
  {
    id: "government",
    label: "Government",
    blurb:
      "Confirm a permit, licence or certificate is unchanged since the authority that issued it registered it.",
    exampleDocuments: [
      "Building Permits",
      "Licences",
      "Certificates",
      "Regulatory Approvals",
      "Land Documents",
    ],
    tailoredExplainer:
      "A permit or certificate is only as useful as a receiving office's ability to trust it long after it was handed over. Kweli lets any receiving organisation confirm a permit, licence or certificate matches the version registered under the issuing authority.",
    aliases: [
      "government", "govt", "ministry", "county", "regulator", "regulatory",
      "public sector", "authority", "municipality", "agency",
    ],
  },
  {
    id: "education",
    label: "Education & Credentials",
    blurb:
      "Let an employer or institution confirm a certificate or transcript in seconds, without contacting the university.",
    exampleDocuments: [
      "Degree Certificates",
      "Academic Transcripts",
      "Professional Qualifications",
    ],
    tailoredExplainer:
      "A qualification only matters if an employer can trust it, and certificates are shared long after they are issued. Where an institution registers its certificates, an employer can confirm a presented certificate or transcript matches the registered version — without contacting the university.",
    aliases: [
      "school", "schools", "university", "universities", "college", "colleges",
      "education", "educational", "training institution", "training",
      "certificate", "certificates", "credential", "credentials", "academic",
      "transcript", "transcripts", "student", "i run a school",
    ],
  },
  {
    id: "trade",
    label: "Trade & Logistics",
    blurb:
      "Let an importer or customs officer confirm nothing was altered since the exporter registered the document.",
    exampleDocuments: [
      "Certificates of Origin",
      "Export Certificates",
      "Inspection Reports",
      "Shipping Documents",
      "Quality Certificates",
    ],
    tailoredExplainer:
      "Certificates of origin and inspection reports change hands across exporters, carriers and customs, and trust in the paperwork degrades the further it travels from its origin. Kweli lets an importer or customs officer confirm a document matches the version registered under the named issuer — which may be an exporter, chamber, inspection company, regulator or other authorised body.",
    aliases: [
      "trade", "logistics", "shipping", "customs", "importer", "importers",
      "exporter", "exporters", "freight", "supply chain", "import", "export",
      "clearing", "forwarding",
    ],
  },
  {
    id: "professional-services",
    label: "Professional Services",
    blurb:
      "Let a client, regulator or board confirm a professional report is unchanged since the firm that issued it registered it.",
    exampleDocuments: [
      "Audit Reports",
      "Legal Opinions",
      "Engineering Certificates",
      "Valuation Reports",
      "Governance Documents",
    ],
    tailoredExplainer:
      "Audit reports, legal opinions and valuations carry high-stakes decisions and are often produced by an external firm the recipient has no direct way to check. Kweli lets a client, regulator or board confirm a professional report matches the version registered under the issuing firm.",
    aliases: [
      "law firm", "lawyer", "lawyers", "legal", "auditor", "auditors", "audit",
      "accountant", "accountants", "accounting", "consultant", "consultants",
      "consulting", "engineering firm", "engineers", "advisory", "professional services",
    ],
  },
  {
    id: "agriculture",
    label: "Agriculture",
    blurb:
      "Confirm a certificate, inspection or quality report matches the version registered under the party that issued it.",
    exampleDocuments: [
      "Certificates",
      "Inspection Reports",
      "Quality Reports",
      "Invoices",
    ],
    tailoredExplainer:
      "Agricultural supply chains rely on certificates, inspection reports, quality reports and invoices that move between producers, buyers and inspectors. Kweli allows a receiving party to check whether the digital file presented matches the version registered under the named issuer. For a paper document, scan or transformed copy, the QR workflow allows the verifier to inspect the registration record and compare the registered details.",
    aliases: [
      "agriculture", "agricultural", "farming", "farm", "farms", "agribusiness",
      "produce", "farmer", "farmers", "cooperative", "co-op", "growers",
    ],
  },
  {
    id: "other",
    label: "Other",
    blurb:
      "Wherever organisations exchange important documents, Kweli lets a recipient confirm a file matches the version its issuer registered.",
    exampleDocuments: ["Certificates", "Reports", "Statements", "Invoices"],
    tailoredExplainer:
      "Kweli is industry-agnostic: the technology is the same everywhere, only the document and workflow change. Wherever your organisation issues or receives important documents, Kweli lets a recipient confirm a file matches the version recorded under the named issuer's registration, and that it is unchanged. Tell the team a bit about your workflow and they can show you where it fits.",
    aliases: [
      "other", "something else", "none of these", "none", "different industry",
    ],
  },
];

/**
 * FAQs for typed-question matching and selectable follow-ups.
 * Answers are drawn from approved sources with anchoring/blockchain removed.
 */
export const faqs: Faq[] = [
  {
    id: "how-verification-works",
    question: "How does verification work?",
    answer: howVerificationWorks,
    keywords: [
      "how does verification",
      "how do you verify",
      "how does it work",
      "how do i verify",
      "how does kweli work",
      "verify",
      "verification",
      "process",
      "hash",
      "fingerprint",
    ],
  },
  {
    id: "what-kweli-proves",
    question: "What exactly does Kweli prove?",
    answer: `${whatKweliProves} ${whatKweliDoesNotProve}`,
    keywords: [
      "prove",
      "proves",
      "proof",
      "guarantee",
      "authenticity",
      "integrity",
    ],
    aliases: [
      "what does verified actually mean",
      "what does verified mean",
      "what does it actually prove",
      "what do you actually prove",
      "what does kweli prove",
      "what does verification prove",
      "what does it confirm",
    ],
  },
  {
    id: "see-or-store",
    question: "Does Kweli see or store the document?",
    answer: `${fileHandling} Only the fingerprint and minimal metadata are used to check it — the original file is not stored by Kweli during verification.`,
    keywords: [
      "stored",
      "storage",
      "uploaded",
    ],
    aliases: [
      "do you keep my file",
      "do you keep my document",
      "do you store my file",
      "do you store my document",
      "do you save my file",
      "do you save my document",
      "where is my file stored",
      "is my file saved",
      "do you keep a copy",
      "do you see my document",
      "does kweli store documents",
    ],
  },
  {
    // NOTE: this topic is specifically about a scan/photo/copy OF an
    // already-registered document not matching the original file. It must NOT
    // absorb "can I register a photo?" — registering an image as the original
    // file is `supported-file-types`. Bare image nouns (photo/picture/image)
    // are therefore disambiguated in the matcher, not routed here by keyword.
    id: "scan-or-photo",
    question: "What if the document is a scan or photograph?",
    answer: scansAndPhotos,
    keywords: [
      "scan",
      "scanned",
      "screenshot",
      "photocopy",
      "compressed",
      "converted",
      "re-saved",
      "resaved",
      "printout",
    ],
    aliases: [
      "can it verify a screenshot",
      "verify a screenshot",
      "screen shot",
      "check a screen shot",
      "can a screenshot match",
      "screenshot match the original",
      "what if i photograph the document",
      "photograph the document",
      "photograph a registered document",
      "photo of the document",
      "picture of the document",
      "image of the document",
      "photo of the original",
      "picture of the original",
      "verify a photo of the original",
      "photo of my registered",
      "someone sent me a picture of the document",
      "sent me a picture of the document",
      "will a scan match",
      "scan match the pdf",
      "will a photo of my registered pdf match",
      "scan of the document",
      "scanned copy",
      "scanned copies",
    ],
  },
  {
    id: "supported-file-types",
    question: "What file types can Kweli fingerprint?",
    answer:
      "Kweli can create a cryptographic fingerprint for any digital file because the fingerprint is calculated from the file's underlying bytes. That includes documents, photographs, images, spreadsheets, audio and video files. Exact verification checks whether the file presented is the same digital file that was registered. The complete portal workflow—including QR embedding and the final downloadable output—is currently confirmed for PDF, JPG and PNG files. Support for other formats depends on the workflow and deployment. A photograph can be registered as the original file. But a photograph taken of a separately registered document is a new file and will not exact-match that original document. An accident photo can therefore be fingerprinted and registered as the original file. The exact same photo file can later be checked against that registration. If the image is edited, cropped, compressed, converted or re-saved—including automatic changes made by some messaging platforms—it becomes a different file and produces a different fingerprint.",
    keywords: [
      "jpeg",
      "jpg",
      "png",
      "gif",
      "svg",
      "video",
      "audio",
      "spreadsheet",
      "presentation",
      "docx",
      "xlsx",
      "mp3",
      "mp4",
      "format",
      "formats",
    ],
    aliases: [
      "can i register a photo",
      "register a photo",
      "register an image",
      "register a picture",
      "can kweli fingerprint a picture",
      "fingerprint a picture",
      "fingerprint an image",
      "fingerprint a photo",
      "can i upload an image",
      "upload an image",
      "upload a photo",
      "does it work with video",
      "work with video",
      "can you register audio",
      "register audio",
      "register a video",
      "register a spreadsheet",
      "what file types are supported",
      "what file types can kweli register",
      "which file types",
      "what formats",
      "does it only work with pdfs",
      "only work with pdfs",
      "only work with pdf",
      "can any file be fingerprinted",
      "any file be fingerprinted",
      "can any file be registered",
      "register any file",
      "can i register a jpeg",
      "register a jpeg",
      "register a png",
      "register a word file",
      "register an excel file",
      "what files can i register",
      "can i register a file",
      "can you fingerprint a video",
      "fingerprint a video",
      "can i register a pdf",
      "register a pdf",
      "can you put a qr inside a video",
      "qr inside a video",
      "qr in a video",
      "embed a qr in a video",
      "does video support qr",
      "which formats support the complete portal",
      "which formats support the portal",
      "what formats support qr embedding",
      "which file formats support the portal",
    ],
  },
  {
    id: "integrate",
    question: "Can Kweli integrate with our existing system?",
    answer: integration,
    keywords: [
      "integrate",
      "integration",
    ],
    aliases: [
      "can this work with our software",
      "work with our software",
      "work with our systems",
      "work with our system",
      "does it work with our system",
      "integrate with our software",
      "integrate with our system",
      "connect to our software",
      "connect to our system",
      "plug into our system",
    ],
  },
  {
    id: "document-changed",
    question: "What happens if a document is changed?",
    answer: `Any change to a file's underlying bytes produces a different fingerprint. ${resultStates.failed}`,
    keywords: [
      "changed",
      "altered",
      "edited",
      "modified",
      "tampered",
    ],
    aliases: [
      "what if someone edits it",
      "what if someone edits the document",
      "what if it is edited",
      "what if it gets edited",
      "what if someone changes it",
      "what if someone alters it",
      "if someone modifies it",
      "what if it is tampered with",
      "someone changed the document",
    ],
  },
  {
    id: "no-record",
    question: "What happens when no record is found?",
    answer:
      "Document Not Found means Kweli could not locate an applicable registration record. On its own, this does not prove the document is fraudulent — it may never have been registered, or the version presented may not correspond to any record. Likewise, a QR code that does not resolve to a genuine Kweli registration record is a reason to check further, not proof either way.",
    keywords: [
      "no record",
      "not found",
      "notfound",
      "never registered",
      "unregistered",
      "no match",
      "missing",
      "cannot find",
      "can't find",
    ],
  },
  {
    id: "result-meaning",
    question: "What do the verification results mean?",
    answer: `${resultStates.verified} ${resultStates.failed} ${resultStates.notFound}`,
    keywords: [
      "result",
      "results",
      "meaning",
      "mean",
      "verified",
      "failed",
      "fail",
      "outcome",
      "status",
    ],
  },
  {
    id: "authenticity-vs-truth",
    question: "Does Kweli prove the document is true?",
    answer: whatKweliDoesNotProve,
    keywords: [
      "true",
      "truth",
      "correct",
      "accurate",
      "factual",
      "fraud",
      "genuine",
      "real",
      "honest",
      "fake",
    ],
  },
  {
    id: "who-registers",
    question: "Who registers the document?",
    answer: issuerAndProvenance,
    keywords: [
      "register",
      "registration",
      "issuer",
      "onboard",
      "provenance",
    ],
    aliases: [
      "how do you know who issued it",
      "who issued it",
      "how do you know the issuer",
      "how do you verify the issuer",
      "how is the issuer verified",
      "how do you authenticate the issuer",
      "who signed it",
      "who registers the document",
      "who issues the document",
      "issuer identity",
    ],
  },
  {
    id: "vs-digital-signature",
    question: "How is Kweli different from digital signatures?",
    answer:
      "Digital signatures and Kweli can serve complementary purposes. A digital signature verifies a signature using the signer's key and certificate infrastructure. Kweli records the file's fingerprint under an authenticated issuer registration so a recipient can check whether the file matches the registered version through Kweli. Kweli does not remove the need to authenticate the issuer; it provides an independent verification record that can be checked without contacting the issuer directly.",
    keywords: [
      "digital signature",
      "signature",
      "signed",
      "sign",
      "e-signature",
      "esignature",
      "docusign",
      "certificate chain",
      "pki",
    ],
  },
  {
    id: "pilot",
    question: "Can we run a pilot?",
    answer:
      "Yes. A pilot is a focused engagement in a single workflow, chosen so its value can be measured. The Kweli team scopes it with you — I can pass your details along to start that conversation.",
    keywords: [
      "pilot",
      "proof of concept",
      "poc",
    ],
    aliases: [
      "how much is a pilot",
      "pilot cost",
      "pilot price",
      "pilot pricing",
      "cost of a pilot",
      "price of a pilot",
      "how much does a pilot cost",
      "run a pilot",
      "start a pilot",
      "set up a pilot",
    ],
  },
  {
    id: "contact-team",
    question: "Can I speak to the Kweli team?",
    answer:
      "Absolutely. I can pass your question and details to the Kweli team so they can follow up by email, or you can reach them directly at info@kweli.solutions.",
    keywords: [
      "speak to",
      "talk to",
      "contact the team",
      "contact you",
      "speak to someone",
      "talk to someone",
      "the team",
      "a human",
      "real person",
      "book a demo",
    ],
  },

  // ---- Additional public-safe answers used by contextual follow-ups ----
  {
    id: "what-not-prove",
    question: "What doesn't Kweli prove?",
    answer: whatKweliDoesNotProve,
    keywords: [
      "doesn't prove",
      "does not prove",
      "what don't",
      "not prove",
      "limitation",
      "limitations",
      "can't do",
    ],
  },
  {
    id: "file-no-match",
    question: "What happens if the file doesn't match?",
    answer: resultStates.failed,
    keywords: [
      "doesn't match",
      "does not match",
      "not match",
      "no match",
      "mismatch",
      "fails to match",
    ],
  },
  {
    id: "fingerprint-created",
    question: "How is the fingerprint created?",
    answer:
      "A fingerprint is a SHA-256 hash calculated from the file's exact bytes. During verification it is computed locally in your browser, so the same file always produces the same fingerprint, and changing anything in the file produces a completely different one.",
    keywords: [
      "fingerprint created",
      "how is the fingerprint",
      "create the fingerprint",
      "how is the hash",
      "sha-256",
      "sha256",
      "hashing",
    ],
  },
  {
    id: "info-retained",
    question: "What information does Kweli retain?",
    answer:
      "For a registered file, Kweli holds only its fingerprint and minimal verification metadata — never the file itself. During verification, the file does not leave your browser.",
    keywords: [
      "what information",
      "what data",
      "retain",
      "retained",
      "what do you keep",
      "metadata",
      "hold about",
    ],
  },
  {
    id: "scan-why",
    question: "Why doesn't a scan match?",
    answer:
      "Kweli's exact-file check compares cryptographic fingerprints. Scanning, photographing, compressing or re-saving a document changes its underlying data and creates a different fingerprint. Kweli's QR-enabled workflow helps locate the original registration record, but it does not make the scanned file identical to the registered digital original.",
    keywords: [
      "why doesn't a scan",
      "why does a scan",
      "scan not match",
      "scan won't match",
      "why scan",
    ],
  },
  {
    id: "qr-workflow",
    question: "How does the QR workflow help?",
    answer:
      "For a paper document or scan, the Kweli QR code takes the verifier to the issuer's registration record. The verifier can inspect the registered issuer and document details and compare them with the document in hand. The QR does not automatically read or visually compare the document, and it does not make a scan identical to the original digital file. Because a QR code can be copied, the verifier must check that it opens the genuine Kweli verification page and that the registered details correspond to the document presented.",
    keywords: [
      "qr",
      "qr code",
      "qr workflow",
      "how does the qr",
      "what does the qr",
      "qr help",
    ],
  },
  {
    id: "physical-docs",
    question: "Can physical documents be checked?",
    answer:
      "Yes. A physical Kweli-enabled document carries a QR code linked to its registration record. Scanning it allows the verifier to inspect the registered issuer and document details and compare them with the paper document. This is not an exact-file match—the exact cryptographic check applies to the registered digital file. The verifier must confirm that the QR opens the genuine Kweli verification page and that the issuer and registered details correspond to the paper document. A successful QR lookup alone does not prove every visible detail on the paper is genuine.",
    keywords: [
      "physical document",
      "physical documents",
      "paper document",
      "hard copy",
      "hardcopy",
      "original paper",
      "physical documents be checked",
    ],
  },
  {
    id: "pilot-look",
    question: "What would a pilot look like?",
    answer:
      "A pilot is a focused engagement in a single document workflow, chosen so its value can be measured. The Kweli team scopes it with you around the workflow involved; the specifics depend on your use case.",
    keywords: [
      "pilot look",
      "what would a pilot",
      "how does a pilot",
      "what does a pilot",
      "pilot involve",
    ],
  },
  {
    id: "which-documents-start",
    question: "Which documents should we start with?",
    answer:
      "Usually a single, high-value workflow where documents arrive from outside your organisation and a mismatch would be costly — for example, repair estimates or assessor reports in insurance. The team helps pinpoint the best starting point for your workflow.",
    keywords: [
      "which documents",
      "what documents should",
      "where to start",
      "where should we start",
      "start with",
      "begin with",
    ],
  },

  // ---- Topics added 27 Aug 2026 (audit expansion) ----
  {
    id: "what-is-kweli",
    question: "What is Kweli?",
    answer:
      "Kweli is an independent verification layer for important digital files. It allows an issuer to register a file's cryptographic fingerprint and allows a recipient to check whether the file presented matches that registered version. Kweli confirms file integrity and the named registration—it does not determine whether every statement inside the file is factually true.",
    keywords: [
      "what is kweli",
      "kweli",
    ],
    aliases: [
      "what is kweli",
      "what does kweli do",
      "tell me about kweli",
      "what is this",
      "what do you do",
      "explain kweli",
      "who are you",
      "what does this do",
    ],
  },
  {
    id: "issuer-workflow",
    question: "How does an issuer register and issue a file?",
    answer:
      "An authorised issuer prepares the file, registers its cryptographic fingerprint and approved verification details, and signs or approves the registration using its authorised credentials. For a QR-enabled document, Kweli generates and embeds the QR code and verification mark before the final distributed version is fingerprinted and registered. That final issued version can then be downloaded, shared and checked.",
    keywords: [
      "issuance",
      "issuing",
    ],
    aliases: [
      "how does an issuer register",
      "how does an issuer issue",
      "how does an issuer add a file",
      "how does an issuer add a document",
      "how do i register a file",
      "how do i register a document",
      "how do i issue a document",
      "how does issuance work",
      "issuer workflow",
      "how do issuers use kweli",
      "how do i add a file",
    ],
  },
  {
    id: "registered-fields",
    question: "What information appears on the verification page?",
    answer:
      "The verification page displays the registered issuer, document type, registration status and the approved key fields configured for that document type—for example a document reference, issue date, amount, currency or expiry date. The exact fields depend on the document type and deployment. Only information approved for verification should be exposed; sensitive information should not appear publicly.",
    keywords: [
      "fields",
      "verification page",
    ],
    aliases: [
      "what appears on the verification page",
      "what can i see when i scan the qr",
      "what do i see when i scan",
      "what fields are shown",
      "what information is shown",
      "what information is displayed",
      "what details are displayed",
      "registered fields",
      "what does the verification page show",
    ],
  },
  {
    id: "ai-ocr",
    question: "Does Kweli use AI or OCR?",
    answer:
      "Kweli's MVP does not use OCR or automated visual comparison to decide whether a scan matches an original. Exact-file verification compares cryptographic fingerprints. For paper documents and scans, the verifier uses the QR registration record to inspect the issuer and manually compare the registered details.",
    keywords: [
      "ocr",
      "ai",
    ],
    aliases: [
      "does it use ai",
      "do you use ai",
      "does kweli use ai",
      "use artificial intelligence",
      "does it use ocr",
      "do you use ocr",
      "does kweli use ocr",
      "use ocr",
      "automated visual comparison",
      "does it read the document",
    ],
  },
  {
    id: "blockchain-status",
    question: "Does Kweli use blockchain?",
    answer:
      "Kweli's current verification workflow does not depend on live blockchain anchoring. Base smart-contract anchoring is planned but is not wired into the current product. The present verification result comes from the registered fingerprint and issuer record.",
    keywords: [
      "blockchain",
      "anchoring",
      "ledger",
      "crypto",
      "web3",
    ],
    aliases: [
      "is this on blockchain",
      "on blockchain",
      "do you use blockchain",
      "is it on the blockchain",
      "is base live",
      "base live",
      "is anchoring live",
      "is base anchoring live",
      "smart contract anchoring",
      "do you use base",
    ],
  },
  {
    id: "copied-qr",
    question: "Can someone copy a genuine QR code?",
    answer:
      "Yes. A QR code is a pointer to a registration record, not proof by itself. A verifier must confirm that it opens the genuine Kweli verification page and that the registered issuer and document details correspond to the file or paper document presented. A copied QR attached to a different document should fail that comparison.",
    keywords: [
      "copied",
      "duplicate qr",
      "clone",
      "fake qr",
    ],
    aliases: [
      "can someone copy the qr",
      "copy the qr",
      "copied qr code",
      "can a qr be copied",
      "clone the qr",
      "someone copies the qr",
      "fake qr code",
      "what if the qr is copied",
      "duplicate the qr",
    ],
  },
  {
    id: "bulk",
    question: "Can Kweli register or verify files in bulk?",
    answer:
      "Kweli can be configured for higher-volume workflows, but the exact bulk-registration and verification setup depends on the deployment. The team can confirm the currently supported volume and integration method for your use case.",
    keywords: [
      "bulk",
      "batch",
      "volume",
      "mass",
    ],
    aliases: [
      "in bulk",
      "bulk upload",
      "upload in bulk",
      "register in bulk",
      "verify in bulk",
      "bulk registration",
      "bulk verification",
      "many files at once",
      "batch of files",
      "high volume",
      "upload files in bulk",
    ],
  },
  {
    id: "api",
    question: "Does Kweli have an API?",
    answer:
      "Kweli is built to work alongside existing systems. The available integration method depends on the deployment and workflow, so the team will confirm whether the current API or portal flow is appropriate for your system.",
    keywords: [
      "api",
    ],
    aliases: [
      "do you have an api",
      "does it have an api",
      "is there an api",
      "rest api",
      "api access",
      "api integration",
      "public api",
      "integration api",
      "developer api",
    ],
  },
  {
    id: "revocation",
    question: "Can a registration be revoked or replaced?",
    answer:
      "Not yet. Revocation and replacement of registrations are planned lifecycle controls, but they are not currently live. If the status of a registered file needs to be checked, the Kweli team can confirm the current process for that deployment.",
    keywords: [
      "revoke",
      "revoked",
      "revocation",
      "supersede",
      "superseded",
      "superseding",
    ],
    aliases: [
      "can a document be revoked",
      "can a registration be revoked",
      "can you revoke",
      "revoke a registration",
      "supersede a registration",
      "replace a registration",
      "cancel a registration",
      "can it be replaced",
    ],
  },
  {
    id: "security-compliance",
    question: "How does Kweli handle security and compliance?",
    answer:
      "During verification, the file's fingerprint is calculated locally in the verifier's browser and the file itself is not uploaded to Kweli. Kweli retains the fingerprint and the minimum verification metadata required for the workflow. Access controls, data location and compliance requirements are agreed for each deployment. The Kweli team can provide the current security and compliance position for a specific organisation's requirements.",
    keywords: [
      "security",
      "secure",
      "compliance",
      "compliant",
      "soc2",
      "iso",
      "gdpr",
      "hipaa",
      "certification",
      "certified",
      "pentest",
      "hosted",
      "hosting",
    ],
    aliases: [
      "is kweli secure",
      "how secure is kweli",
      "where is the data stored",
      "where is the data hosted",
      "where is my data stored",
      "are you soc 2 certified",
      "soc 2",
      "are you iso certified",
      "iso 27001",
      "is kweli gdpr compliant",
      "gdpr compliant",
      "is kweli hipaa compliant",
      "hipaa compliant",
      "what security controls do you have",
      "security controls",
      "data residency",
      "does the file leave my browser",
      "is my data secure",
    ],
  },
];

/** The selectable follow-up questions shown as chips (subset of faqs, by id). */
export const followUpQuestionIds = [
  "what-is-kweli",
  "how-verification-works",
  "what-kweli-proves",
  "see-or-store",
  "scan-or-photo",
  "supported-file-types",
  "issuer-workflow",
  "registered-fields",
  "integrate",
  "api",
  "document-changed",
  "pilot",
  "contact-team",
] as const;

/** Shown when a typed question cannot be matched with high confidence. */
export const unknownAnswer =
  "I don't have a reliable answer to that yet. Would you like me to pass your question to the Kweli team?";

/** Contact + notices. No private emails or phone numbers. */
export const contact = {
  email: "info@kweli.solutions",
  demoPath: "/book-a-demo",
};

export const leadNotice =
  "Kweli may store what you submit here so the team can respond. Please don't share confidential or sensitive documents in this chat.";

export const openingMessage =
  "Hi, I'm Kweli Bot. What kind of documents does your organisation issue or receive?";

export const launcherLabel = "Ask Kweli Bot";
