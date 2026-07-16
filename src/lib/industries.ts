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
export const industries = [
  {
    slug: "insurance",
    name: "Insurance",
    icon: Shield,
    tagline:
      "Reduce manual verification effort across motor, medical, fire, marine, guarantees and life workflows.",
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
    name: "Banking",
    icon: Landmark,
    tagline:
      "Verify financial documents, guarantees, statements, valuations and KYC records with confidence.",
    workflows: ["Valuations", "Guarantees", "Statements", "KYC Records"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    tagline:
      "Protect the integrity of medical reports, laboratory results, prescriptions and referrals.",
    workflows: [
      "Medical Reports",
      "Laboratory Results",
      "Prescriptions",
      "Referrals",
    ],
  },
  {
    slug: "government",
    name: "Government",
    icon: Building2,
    tagline: "Strengthen trust in permits, licences, certificates and public records.",
    workflows: ["Permits", "Licences", "Certificates", "Public Records"],
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    tagline:
      "Allow employers and institutions to instantly verify certificates and transcripts.",
    workflows: ["Certificates", "Transcripts"],
  },
  {
    slug: "trade",
    name: "Trade",
    icon: Ship,
    tagline:
      "Support trusted exports through certificates of origin, inspections and commercial documentation.",
    workflows: [
      "Certificates of Origin",
      "Inspection Reports",
      "Commercial Invoices",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: Briefcase,
    tagline:
      "Strengthen confidence in audit reports, board minutes, valuations and legal documents.",
    workflows: ["Audit Reports", "Board Minutes", "Valuations", "Legal Documents"],
  },
] as const;

export type Industry = (typeof industries)[number];
