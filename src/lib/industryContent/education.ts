import { Building2, GraduationCap, Briefcase, Award, IdCard } from "lucide-react";
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
        journey: {
          heading: "How a graduation record moves from list to confirmation.",
          steps: [
            { icon: "Building2", label: "Institution compiles graduation list" },
            { icon: "Fingerprint", label: "List registered" },
            { icon: "Share2", label: "Registrar shares confirmed list" },
            { icon: "ShieldCheck", label: "Receiving party verifies" },
            { icon: "BadgeCheck", label: "Qualification confirmed" },
          ],
          footnote: "Kweli does not assess whether the graduate met the academic requirements.",
        },
      },
      {
        key: "certificate",
        label: "Certificate",
        icon: "Award",
        art: "Vol. 2 · Education — Certificate",
        explanation: "Degree certificates move from institutions into every graduate's record.",
        documents: [{ name: "Degree Certificate", issuer: "Institution" }],
        journey: {
          heading: "How a degree certificate moves from institution to hire.",
          steps: [
            { icon: "GraduationCap", label: "Institution issues degree certificate" },
            { icon: "Fingerprint", label: "Certificate registered" },
            { icon: "Share2", label: "Graduate shares certificate" },
            { icon: "ShieldCheck", label: "Employer verifies" },
            { icon: "BadgeCheck", label: "Hiring decision proceeds" },
          ],
          footnote: "Kweli does not assess the graduate's suitability for a role.",
        },
      },
      {
        key: "transcript",
        label: "Transcript",
        icon: "BookOpen",
        art: "Vol. 2 · Education — Transcript",
        explanation: "Academic transcripts move from institutions into every admissions or hiring decision.",
        documents: [{ name: "Academic Transcript", issuer: "Institution" }],
        journey: {
          heading: "How a transcript moves from institution to decision.",
          steps: [
            { icon: "BookOpen", label: "Institution issues academic transcript" },
            { icon: "Fingerprint", label: "Transcript registered" },
            { icon: "Share2", label: "Graduate shares transcript" },
            { icon: "ShieldCheck", label: "Admissions or employer verifies" },
            { icon: "BadgeCheck", label: "Decision proceeds" },
          ],
          footnote: "Kweli does not assess the academic performance recorded in the transcript.",
        },
      },
      {
        key: "employer-verification",
        label: "Employer Verification",
        icon: "Briefcase",
        art: "Vol. 2 · Education — Employer Verification",
        explanation: "Employment verification letters move from employers into every reference check.",
        documents: [{ name: "Employment Verification Letter", issuer: "Employer" }],
        journey: {
          heading: "How an employer verification moves from letter to check.",
          steps: [
            { icon: "Briefcase", label: "Employer issues verification letter" },
            { icon: "Fingerprint", label: "Letter registered" },
            { icon: "Share2", label: "Candidate shares letter" },
            { icon: "ShieldCheck", label: "Receiving employer verifies" },
            { icon: "BadgeCheck", label: "Reference check completed" },
          ],
          footnote: "Kweli does not assess the content or accuracy of the employment history described.",
        },
      },
      {
        key: "qualification",
        label: "Qualification",
        icon: "FileCheck2",
        art: "Vol. 2 · Education — Professional Qualification",
        explanation: "Professional qualification certificates move from accrediting bodies into every credentialing decision.",
        documents: [{ name: "Professional Qualification Certificate", issuer: "Professional Body" }],
        journey: {
          heading: "How a professional qualification moves from body to credentialing.",
          steps: [
            { icon: "Award", label: "Professional body issues qualification certificate" },
            { icon: "Fingerprint", label: "Certificate registered" },
            { icon: "Share2", label: "Holder shares certificate" },
            { icon: "ShieldCheck", label: "Employer or regulator verifies" },
            { icon: "BadgeCheck", label: "Credentialing decision proceeds" },
          ],
          footnote: "Kweli does not assess whether the holder meets ongoing professional standards.",
        },
      },
      {
        key: "recommendation-letter",
        label: "Recommendation Letter",
        icon: "Mail",
        art: "Vol. 2 · Education — Recommendation Letter",
        explanation: "Recommendation letters move from institutions or employers into every application decision.",
        documents: [{ name: "Recommendation Letter", issuer: "Institution or Employer" }],
        journey: {
          heading: "How a recommendation letter moves from author to application.",
          steps: [
            { icon: "Mail", label: "Institution or employer issues recommendation letter" },
            { icon: "Fingerprint", label: "Letter registered" },
            { icon: "Share2", label: "Candidate shares letter" },
            { icon: "ShieldCheck", label: "Receiving institution verifies" },
            { icon: "BadgeCheck", label: "Application decision proceeds" },
          ],
          footnote: "Kweli does not assess the opinions expressed in the letter.",
        },
      },
      {
        key: "student-verification",
        label: "Student Verification",
        icon: "IdCard",
        art: "Vol. 2 · Education — Student Verification",
        explanation: "Enrolment confirmations move from institutions into every student status check.",
        documents: [{ name: "Student ID Confirmation", issuer: "Institution" }],
        journey: {
          heading: "How a student verification moves from institution to confirmation.",
          steps: [
            { icon: "IdCard", label: "Institution issues student ID confirmation" },
            { icon: "Fingerprint", label: "Confirmation registered" },
            { icon: "Share2", label: "Student shares confirmation" },
            { icon: "ShieldCheck", label: "Requesting party verifies" },
            { icon: "BadgeCheck", label: "Status confirmed" },
          ],
          footnote: "Kweli does not confirm a student's academic standing beyond enrolment status.",
        },
      },
      {
        key: "digital-credentials",
        label: "Digital Credentials",
        icon: "Monitor",
        art: "Vol. 2 · Education — Digital Credentials",
        explanation: "Digital credential records move from institutions into every online verification.",
        documents: [{ name: "Digital Credential Record", issuer: "Institution" }],
        journey: {
          heading: "How a digital credential moves from issue to verification.",
          steps: [
            { icon: "Monitor", label: "Institution issues digital credential record" },
            { icon: "Fingerprint", label: "Record registered" },
            { icon: "Share2", label: "Holder shares credential" },
            { icon: "ShieldCheck", label: "Verifier checks credential" },
            { icon: "BadgeCheck", label: "Verification confirmed" },
          ],
          footnote: "Kweli does not assess the content or issuing standards of the digital credential.",
        },
      },
    ],
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
    heading: "One credential type, proven in practice — not an institution-wide rollout.",
    steps: [
      { label: "Choose one credential type" },
      { label: "Onboard a manageable group of institutions" },
      { label: "Train one admissions or HR team" },
      { label: "Measure compliance, exceptions, handling time and cycle time" },
    ],
  },

  cta: {
    heading: "Ready to bring verification into your credentialing process?",
    supportingCopy: "Begin with degree certificates and expand across transcripts and qualifications.",
  },
};
