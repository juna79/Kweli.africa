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
  {
    id: "degree-cert",
    filename: "Degree_Certificate.pdf",
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
    filename: "Degree_Certificate_Final.pdf",
    fileSize: "218 KB",
    outcome: "failed",
    failed: {
      issuer: "Kweli University",
      documentType: "Degree Certificate",
      reasons: ["Pages replaced", "Content modified"],
    },
  },
  {
    id: "repair-estimate",
    filename: "Repair_Estimate.pdf",
    fileSize: "96 KB",
    outcome: "failed",
    failed: {
      issuer: "Northline Motors (fictional)",
      documentType: "Repair Estimate",
      reasons: ["Edited", "Content modified"],
    },
  },
  {
    id: "repair-estimate-copy",
    filename: "Repair_Estimate_Copy.pdf",
    fileSize: "95 KB",
    outcome: "verified",
    verified: {
      issuer: "Northline Motors (fictional)",
      documentType: "Repair Estimate",
      issuedDate: "2 June 2026",
      registeredDate: "2 June 2026 • 14:12 EAT",
      registeredBy: "Claims Department",
    },
  },
  {
    id: "lab-report",
    filename: "Laboratory_Report.pdf",
    fileSize: "341 KB",
    outcome: "verified",
    verified: {
      issuer: "Verstlab Diagnostics (fictional)",
      documentType: "Laboratory Report",
      issuedDate: "28 April 2026",
      registeredDate: "28 April 2026 • 11:05 EAT",
      registeredBy: "Records Office",
    },
  },
  {
    id: "lab-report-scanned",
    filename: "Laboratory_Report_Scanned.pdf",
    fileSize: "1.2 MB",
    outcome: "not-found",
    notFound: {
      issuer: "Verstlab Diagnostics (fictional)",
      reasons: ["Never registered", "Incorrect document"],
    },
  },
  {
    id: "insurance-claim",
    filename: "Insurance_Claim_Form.pdf",
    fileSize: "128 KB",
    outcome: "verified",
    verified: {
      issuer: "Turaco Underwriters (fictional)",
      documentType: "Insurance Claim Form",
      issuedDate: "9 May 2026",
      registeredDate: "9 May 2026 • 16:30 EAT",
      registeredBy: "Claims Department",
    },
  },
  {
    id: "organic-cert",
    filename: "Organic_Certificate.pdf",
    fileSize: "180 KB",
    outcome: "verified",
    verified: {
      issuer: "Cropnuts Certification Body (fictional)",
      documentType: "Organic Certificate",
      issuedDate: "14 January 2026",
      registeredDate: "14 January 2026 • 08:52 EAT",
      registeredBy: "Certification Board",
    },
  },
  {
    id: "shipping-manifest",
    filename: "Shipping_Manifest.pdf",
    fileSize: "162 KB",
    outcome: "failed",
    failed: {
      issuer: "Meridian Freight Lines (fictional)",
      documentType: "Shipping Manifest",
      reasons: ["Edited", "Signature mismatch"],
    },
  },
  {
    id: "bank-guarantee",
    filename: "Bank_Guarantee.pdf",
    fileSize: "204 KB",
    outcome: "verified",
    verified: {
      issuer: "Zenith Commercial Bank (fictional)",
      documentType: "Bank Guarantee",
      issuedDate: "22 February 2026",
      registeredDate: "22 February 2026 • 10:18 EAT",
      registeredBy: "Branch Operations",
    },
  },
  {
    id: "building-permit",
    filename: "Building_Permit.pdf",
    fileSize: "233 KB",
    outcome: "not-found",
    notFound: {
      issuer: "Unknown",
      reasons: ["Unknown issuer", "Incorrect document"],
    },
  },
  {
    id: "medical-report",
    filename: "Medical_Report.pdf",
    fileSize: "276 KB",
    outcome: "verified",
    verified: {
      issuer: "St. Amara Hospital (fictional)",
      documentType: "Medical Report",
      issuedDate: "3 June 2026",
      registeredDate: "3 June 2026 • 13:47 EAT",
      registeredBy: "Health Records Office",
    },
  },
  {
    id: "transcript",
    filename: "Academic_Transcript_Official.pdf",
    fileSize: "189 KB",
    outcome: "verified",
    verified: {
      issuer: "Kweli University",
      documentType: "Academic Transcript",
      issuedDate: "17 March 2026",
      registeredDate: "17 March 2026 • 09:44 EAT",
      registeredBy: "Registrar Office",
    },
  },
  {
    id: "audit-report",
    filename: "Audit_Report_Draft.pdf",
    fileSize: "312 KB",
    outcome: "failed",
    failed: {
      issuer: "Chevron & Boyd Auditors (fictional)",
      documentType: "Audit Report",
      reasons: ["Edited", "Pages replaced"],
    },
  },
];
