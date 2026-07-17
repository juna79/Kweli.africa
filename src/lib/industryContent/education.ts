import { Building2, GraduationCap, Briefcase, Award, IdCard, Fingerprint, Share2, ShieldCheck, BadgeCheck } from "lucide-react";
import type { IndustryPageContent } from "@/lib/industryPageTypes";

export const education: IndustryPageContent = {
  slug: "education",
  name: "Education",

  hero: {
    headline: "Credentials only create trust when they can be independently verified.",
    supportingCopy:
      "Degree certificates, transcripts and professional qualifications move from institutions to graduates to employers — and every one shapes a hiring decision.",
    art: "Vol. 2 · Hero Composite (TBD)",
  },

  ecosystem: {
    heading: "From the lecture hall to the hiring desk, the same trust layer applies.",
    tiles: [
      { icon: Building2, label: "Institution", art: "Vol. 2 · Education — Certificate" },
      { icon: GraduationCap, label: "Graduate", art: "Vol. 2 · Education — Graduation" },
      { icon: Briefcase, label: "Employer", art: "Vol. 2 · Education — Employer Verification" },
      { icon: Award, label: "Accreditation Body", art: "Vol. 2 · Education — Professional Qualification" },
      { icon: IdCard, label: "Registrar", art: "Vol. 2 · Education — Student Verification" },
    ],
  },

  explorer: {
    heading: "Kweli works across every credential type.",
    lines: [
      {
        key: "graduation",
        label: "Graduation",
        icon: "GraduationCap",
        art: "Vol. 2 · Education — Graduation",
        explanation: "Graduation lists move from institutions into every conferred qualification.",
        documents: [{ name: "Graduation List", issuer: "Institution" }],
      },
      {
        key: "certificate",
        label: "Certificate",
        icon: "Award",
        art: "Vol. 2 · Education — Certificate",
        explanation: "Degree certificates move from institutions into every graduate's record.",
        documents: [{ name: "Degree Certificate", issuer: "Institution" }],
      },
      {
        key: "transcript",
        label: "Transcript",
        icon: "BookOpen",
        art: "Vol. 2 · Education — Transcript",
        explanation: "Academic transcripts move from institutions into every admissions or hiring decision.",
        documents: [{ name: "Academic Transcript", issuer: "Institution" }],
      },
      {
        key: "employer-verification",
        label: "Employer Verification",
        icon: "Briefcase",
        art: "Vol. 2 · Education — Employer Verification",
        explanation: "Employment verification letters move from employers into every reference check.",
        documents: [{ name: "Employment Verification Letter", issuer: "Employer" }],
      },
      {
        key: "qualification",
        label: "Qualification",
        icon: "FileCheck2",
        art: "Vol. 2 · Education — Professional Qualification",
        explanation: "Professional qualification certificates move from accrediting bodies into every credentialing decision.",
        documents: [{ name: "Professional Qualification Certificate", issuer: "Professional Body" }],
      },
      {
        key: "recommendation-letter",
        label: "Recommendation Letter",
        icon: "Mail",
        art: "Vol. 2 · Education — Recommendation Letter",
        explanation: "Recommendation letters move from institutions or employers into every application decision.",
        documents: [{ name: "Recommendation Letter", issuer: "Institution or Employer" }],
      },
      {
        key: "student-verification",
        label: "Student Verification",
        icon: "IdCard",
        art: "Vol. 2 · Education — Student Verification",
        explanation: "Enrolment confirmations move from institutions into every student status check.",
        documents: [{ name: "Student ID Confirmation", issuer: "Institution" }],
      },
      {
        key: "digital-credentials",
        label: "Digital Credentials",
        icon: "Monitor",
        art: "Vol. 2 · Education — Digital Credentials",
        explanation: "Digital credential records move from institutions into every online verification.",
        documents: [{ name: "Digital Credential Record", issuer: "Institution" }],
      },
    ],
  },

  journey: {
    heading: "How a credential moves from institution to hire.",
    steps: [
      { icon: Building2, label: "Institution" },
      { icon: Award, label: "Issue Credential" },
      { icon: Fingerprint, label: "Fingerprint" },
      { icon: Share2, label: "Graduate Shares" },
      { icon: ShieldCheck, label: "Employer Verifies" },
      { icon: BadgeCheck, label: "Hire" },
    ],
    footnote: "Kweli does not assess a candidate's suitability for a role.",
  },

  businessImpact: {
    heading: "From a reference call to a verified credential.",
    today: [
      "Manual verification calls to institutions",
      "Delays in background checks",
      "Uncertainty about certificate authenticity",
      "Inconsistent verification records",
    ],
    withKweli: [
      "Independent credential verification",
      "Faster background checks",
      "Stronger audit trail",
      "Detection of altered or unmatched documents",
    ],
  },

  pilot: {
    heading: "A focused pilot, not an institution-wide rollout.",
    steps: [
      { label: "Choose one credential type" },
      { label: "Onboard a manageable group of institutions" },
      { label: "Train one admissions or HR team" },
      { label: "Measure compliance, exceptions, handling time and cycle time" },
    ],
  },

  cta: {
    heading: "Ready to start with one credential type?",
    supportingCopy: "Begin with degree certificates and expand across transcripts and qualifications.",
  },
};
