// Fictional demonstration documents only (per Kweli_V3_Master_Kickoff.md section 11 / 13).
// Deliberately spans multiple industries and includes near-duplicate filenames
// with different outcomes — the point is that a filename or file itself never
// proves authenticity, only the registered fingerprint does.

export type Outcome = "verified" | "failed" | "not-found";

export type VerifiedDetails = {
  issuer: string;
  documentType: string;
  issuedDate: string;
  registeredDate: string;
  registeredBy: string;
};

export type FailedDetails = {
  issuer: string;
  documentType: string;
  reasons: string[];
};

export type NotFoundDetails = {
  issuer: string;
  reasons: string[];
};

export type DemoDocument = {
  id: string;
  filename: string;
  fileSize: string;
  outcome: Outcome;
  verified?: VerifiedDetails;
  failed?: FailedDetails;
  notFound?: NotFoundDetails;
};

export const demoDocuments: DemoDocument[] = [
  // Education
  {
    id: "degree-cert",
    filename: "Degree Certificate.pdf",
    fileSize: "214 KB",
    outcome: "verified",
    verified: {
      issuer: "Kweli University",
      documentType: "Degree Certificate",
      issuedDate: "17 March 2026",
      registeredDate: "17 March 2026 • 09:41 EAT",
      registeredBy: "Registrar Office",
    },
  },
  {
    id: "degree-cert-final",
    filename: "Degree Certificate Final.pdf",
    fileSize: "218 KB",
    outcome: "failed",
    failed: {
      issuer: "Kweli University",
      documentType: "Degree Certificate",
      reasons: ["Pages replaced", "Content modified"],
    },
  },
  {
    id: "degree-cert-scan",
    filename: "Degree Certificate Scan.pdf",
    fileSize: "1.4 MB",
    outcome: "not-found",
    notFound: {
      issuer: "Kweli University",
      reasons: ["Never registered", "Incorrect document"],
    },
  },
  // Insurance
  {
    id: "repair-estimate",
    filename: "Repair Estimate.pdf",
    fileSize: "96 KB",
    outcome: "failed",
    failed: {
      issuer: "Northline Motors",
      documentType: "Repair Estimate",
      reasons: ["Edited", "Content modified"],
    },
  },
  {
    id: "repair-estimate-final",
    filename: "Repair Estimate Final.pdf",
    fileSize: "98 KB",
    outcome: "verified",
    verified: {
      issuer: "Northline Motors",
      documentType: "Repair Estimate",
      issuedDate: "2 June 2026",
      registeredDate: "2 June 2026 • 14:12 EAT",
      registeredBy: "Claims Department",
    },
  },
  {
    id: "repair-estimate-copy",
    filename: "Repair Estimate Copy.pdf",
    fileSize: "97 KB",
    outcome: "not-found",
    notFound: {
      issuer: "Northline Motors",
      reasons: ["Never registered", "Incorrect document"],
    },
  },
  {
    id: "insurance-claim",
    filename: "Insurance Claim Form.pdf",
    fileSize: "128 KB",
    outcome: "verified",
    verified: {
      issuer: "Turaco Underwriters",
      documentType: "Insurance Claim Form",
      issuedDate: "9 May 2026",
      registeredDate: "9 May 2026 • 16:30 EAT",
      registeredBy: "Claims Department",
    },
  },
  // Healthcare
  {
    id: "lab-report",
    filename: "Laboratory Report.pdf",
    fileSize: "341 KB",
    outcome: "verified",
    verified: {
      issuer: "Verstlab Diagnostics",
      documentType: "Laboratory Report",
      issuedDate: "28 April 2026",
      registeredDate: "28 April 2026 • 11:05 EAT",
      registeredBy: "Records Office",
    },
  },
  {
    id: "lab-report-scan",
    filename: "Laboratory Report Scan.pdf",
    fileSize: "1.2 MB",
    outcome: "not-found",
    notFound: {
      issuer: "Verstlab Diagnostics",
      reasons: ["Never registered", "Incorrect document"],
    },
  },
  // Trade
  {
    id: "organic-cert",
    filename: "Organic Certificate.pdf",
    fileSize: "180 KB",
    outcome: "verified",
    verified: {
      issuer: "Cropnuts Certification Body",
      documentType: "Organic Certificate",
      issuedDate: "14 January 2026",
      registeredDate: "14 January 2026 • 08:52 EAT",
      registeredBy: "Certification Board",
    },
  },
  {
    id: "organic-cert-updated",
    filename: "Organic Certificate Updated.pdf",
    fileSize: "183 KB",
    outcome: "failed",
    failed: {
      issuer: "Cropnuts Certification Body",
      documentType: "Organic Certificate",
      reasons: ["Edited", "Content modified"],
    },
  },
  {
    id: "shipping-manifest",
    filename: "Shipping Manifest.pdf",
    fileSize: "162 KB",
    outcome: "failed",
    failed: {
      issuer: "Meridian Freight Lines",
      documentType: "Shipping Manifest",
      reasons: ["Edited", "Signature mismatch"],
    },
  },
  // Government
  {
    id: "building-permit",
    filename: "Building Permit.pdf",
    fileSize: "233 KB",
    outcome: "not-found",
    notFound: {
      issuer: "Unknown",
      reasons: ["Unknown issuer", "Incorrect document"],
    },
  },
  // Banking
  {
    id: "bank-guarantee",
    filename: "Bank Guarantee.pdf",
    fileSize: "204 KB",
    outcome: "verified",
    verified: {
      issuer: "Zenith Commercial Bank",
      documentType: "Bank Guarantee",
      issuedDate: "22 February 2026",
      registeredDate: "22 February 2026 • 10:18 EAT",
      registeredBy: "Branch Operations",
    },
  },
];
