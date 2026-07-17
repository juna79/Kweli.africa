import {
  Shield,
  Landmark,
  HeartPulse,
  Building2,
  GraduationCap,
  Ship,
  Briefcase,
} from "lucide-react";

// Copy per 02_Copy_Bible_Kweli_V3.pdf. Sub-workflows per Kweli_Canonical_OS.md
// (insurance list is canonical/approved; others per Kweli_V3_Master_Kickoff.md Product Flows).
//
// Seven industries per the approved Kweli taxonomy. Header/Footer/mega-menu/
// dynamic industry routing all derive from this array.
export const industries = [
  {
    slug: "insurance",
    name: "Insurance",
    icon: Shield,
    tagline:
      "Reduce manual verification effort across motor, medical, fire, marine, guarantees and life workflows.",
    problem:
      "Repair estimates, assessor reports, police abstracts, medical reports, invoices and valuation reports each shape a payout decision — and each one can be altered after it's issued.",
    solution:
      "Kweli lets claims teams confirm a document is exactly what the garage, assessor or hospital issued, before a decision is made.",
    documents: [
      "Repair Estimates",
      "Assessor Reports",
      "Police Abstracts",
      "Medical Reports",
      "Invoices",
      "Valuation Reports",
    ],
    workflows: [
      "Motor",
      "Medical",
      "Fire",
      "Marine",
      "Guarantees & Bonds",
      "Engineering",
      "Liability",
      "Agriculture",
      "Travel",
      "Life",
    ],
  },
  {
    slug: "banking",
    name: "Banking & Financial Services",
    icon: Landmark,
    tagline:
      "Verify guarantees, statements, audit reports, KYC and credit documentation with confidence.",
    problem:
      "Guarantees, statements and audit reports underpin lending and settlement decisions, often produced by parties the bank never deals with directly.",
    solution:
      "Kweli lets a bank confirm a financial document is unchanged since the institution that issued it registered it.",
    documents: [
      "Bank Guarantees",
      "Financial Statements",
      "Audit Reports",
      "KYC Documents",
      "Credit Documentation",
    ],
    workflows: ["Valuations", "Guarantees", "Statements", "KYC Records"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    tagline:
      "Protect the integrity of medical reports, diagnostic results and referrals.",
    problem:
      "A diagnosis travels further than the patient who received it — medical reports and referrals move between clinics, insurers and employers.",
    solution:
      "Kweli lets the receiving party confirm nothing changed since a hospital or lab issued the report.",
    documents: [
      "Medical Reports",
      "Diagnostic Reports",
      "Referral Letters",
      "Medical Certificates",
    ],
    workflows: ["Medical Reports", "Diagnostic Reports", "Referrals"],
  },
  {
    slug: "government",
    name: "Government",
    icon: Building2,
    tagline:
      "Strengthen trust in permits, licences, certificates and public records.",
    problem:
      "A permit or certificate is only as useful as the receiving office's ability to trust it's genuine — long after the issuing authority handed it over.",
    solution:
      "Kweli lets any receiving organisation confirm a permit, licence or certificate is unchanged since the authority that issued it registered it.",
    documents: [
      "Building Permits",
      "Licences",
      "Certificates",
      "Regulatory Approvals",
      "Land Documents",
    ],
    workflows: ["Permits", "Licences", "Certificates", "Land Documents"],
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    tagline:
      "Allow employers and institutions to instantly verify certificates and transcripts.",
    problem:
      "A qualification only matters if an employer can trust it — and degree certificates are shared long after the institution that issued them.",
    solution:
      "Kweli lets an employer verify the certificate or transcript in seconds, without contacting the university.",
    documents: [
      "Degree Certificates",
      "Academic Transcripts",
      "Professional Qualifications",
    ],
    workflows: ["Degree Certificates", "Transcripts", "Professional Qualifications"],
  },
  {
    slug: "trade",
    name: "Trade & Supply Chain",
    icon: Ship,
    tagline:
      "Support trusted exports through certificates of origin, inspections and shipping documentation.",
    problem:
      "A shipment crosses borders faster than trust in its paperwork — certificates of origin and inspection reports change hands across exporters, carriers and customs.",
    solution:
      "Kweli lets an importer or customs officer confirm nothing was altered since the exporter registered the document.",
    documents: [
      "Certificates of Origin",
      "Export Certificates",
      "Inspection Reports",
      "Shipping Documents",
      "Quality Certificates",
    ],
    workflows: ["Certificates of Origin", "Inspection Reports", "Commercial Invoices"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: Briefcase,
    tagline:
      "Strengthen confidence in audit reports, legal opinions, engineering certificates and valuation reports.",
    problem:
      "Audit reports, legal opinions and valuation reports carry decisions worth millions — often produced by an external firm the recipient has no direct way to verify.",
    solution:
      "Kweli lets a client, regulator or board confirm a professional report is unchanged since the firm that issued it registered it.",
    documents: [
      "Audit Reports",
      "Legal Opinions",
      "Engineering Certificates",
      "Valuation Reports",
      "Due-Diligence Materials",
      "Board & Governance Documents",
      "Professional Qualifications",
    ],
    workflows: [
      "Audit Reports",
      "Legal Opinions",
      "Engineering Reports",
      "Valuations",
      "Governance Documents",
    ],
  },
] as const;

export type Industry = (typeof industries)[number];
