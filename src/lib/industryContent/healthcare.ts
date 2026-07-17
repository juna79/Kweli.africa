import { Users, Stethoscope, Microscope, Building2, ShieldCheck, Pill, BadgeCheck } from "lucide-react";
import type { IndustryPageContent } from "@/lib/industryPageTypes";

export const healthcare: IndustryPageContent = {
  slug: "healthcare",
  name: "Healthcare",

  hero: {
    headline: "Healthcare decisions depend on records that must be trusted.",
    supportingCopy:
      "Medical reports, lab results, referral letters and discharge summaries move between hospitals, doctors, laboratories and insurers — and every one shapes a treatment or claims decision.",
    art: "Vol. 2 · Hero Composite (TBD)",
  },

  ecosystem: {
    heading: "From the ward to the pharmacy, the same trust layer applies.",
    tiles: [
      { icon: Users, label: "Patient", art: "Vol. 2 · Healthcare — Patient Registration" },
      { icon: Stethoscope, label: "Doctor", art: "Vol. 2 · Healthcare — Medical Records" },
      { icon: Building2, label: "Hospital", art: "Vol. 2 · Healthcare — Surgery" },
      { icon: Microscope, label: "Laboratory", art: "Vol. 2 · Healthcare — Lab Results" },
      { icon: ShieldCheck, label: "Insurer", art: "Vol. 2 · Healthcare — Insurance Claim" },
      { icon: Pill, label: "Pharmacy", art: "Vol. 2 · Healthcare — Pharmacy" },
    ],
  },

  explorer: {
    heading: "Kweli works across every healthcare workflow.",
    lines: [
      {
        key: "patient-registration",
        label: "Patient Registration",
        icon: "IdCard",
        art: "Vol. 2 · Healthcare — Patient Registration",
        explanation: "Identity documents move from patients into every hospital record.",
        documents: [
          { name: "Registration Form", issuer: "Patient" },
          { name: "National ID", issuer: "Patient" },
        ],
      },
      {
        key: "medical-records",
        label: "Medical Records",
        icon: "FileCheck2",
        art: "Vol. 2 · Healthcare — Medical Records",
        explanation: "Reports and summaries move from hospitals and doctors into every referral and claim.",
        documents: [
          { name: "Medical Report", issuer: "Hospital or Doctor" },
          { name: "Discharge Summary", issuer: "Hospital" },
        ],
      },
      {
        key: "lab-results",
        label: "Lab Results",
        icon: "Microscope",
        art: "Vol. 2 · Healthcare — Lab Results",
        explanation: "Diagnostic reports move from laboratories into every treatment decision.",
        documents: [
          { name: "Laboratory Report", issuer: "Laboratory" },
          { name: "Diagnostic Report", issuer: "Laboratory" },
        ],
      },
      {
        key: "prescription",
        label: "Prescription",
        icon: "Pill",
        art: "Vol. 2 · Healthcare — Prescription",
        explanation: "Prescriptions move from doctors into every dispensing decision.",
        documents: [{ name: "Prescription", issuer: "Doctor" }],
      },
      {
        key: "referral-letter",
        label: "Referral Letter",
        icon: "Mail",
        art: "Vol. 2 · Healthcare — Referral Letter",
        explanation: "Referral letters move between clinics and specialists into every continuity-of-care decision.",
        documents: [{ name: "Referral Letter", issuer: "Doctor or Clinic" }],
      },
      {
        key: "insurance-claim",
        label: "Insurance Claim",
        icon: "ShieldCheck",
        art: "Vol. 2 · Healthcare — Insurance Claim",
        explanation: "Claim and treatment documents move from hospitals into every insurer decision.",
        documents: [
          { name: "Insurance Claim Form", issuer: "Hospital or Patient" },
          { name: "Treatment Estimate", issuer: "Hospital" },
        ],
      },
      {
        key: "radiology",
        label: "Radiology",
        icon: "Monitor",
        art: "Vol. 2 · Healthcare — Radiology",
        explanation: "Imaging reports move from radiologists into every diagnosis.",
        documents: [{ name: "Radiology Report", issuer: "Radiologist" }],
      },
      {
        key: "surgery",
        label: "Surgery",
        icon: "Syringe",
        art: "Vol. 2 · Healthcare — Surgery",
        explanation: "Surgical records and consent forms move from hospitals into every procedure.",
        documents: [
          { name: "Surgical Report", issuer: "Hospital" },
          { name: "Consent Form", issuer: "Patient" },
        ],
      },
      {
        key: "pharmacy",
        label: "Pharmacy",
        icon: "Building2",
        art: "Vol. 2 · Healthcare — Pharmacy",
        explanation: "Dispensing records move from pharmacies into every prescription fulfilment.",
        documents: [{ name: "Dispensing Record", issuer: "Pharmacy" }],
      },
      {
        key: "telemedicine",
        label: "Telemedicine",
        icon: "Stethoscope",
        art: "Vol. 2 · Healthcare — Telemedicine",
        explanation: "Consultation records move from remote providers into every follow-up decision.",
        documents: [{ name: "Consultation Report", issuer: "Doctor" }],
      },
    ],
  },

  journey: {
    heading: "How a healthcare record moves from patient to verified.",
    steps: [
      { icon: Users, label: "Patient" },
      { icon: Stethoscope, label: "Doctor" },
      { icon: Microscope, label: "Laboratory" },
      { icon: Building2, label: "Hospital" },
      { icon: ShieldCheck, label: "Insurance" },
      { icon: BadgeCheck, label: "Verified" },
    ],
    footnote: "Kweli does not diagnose and does not assess whether a treatment decision was clinically correct.",
  },

  businessImpact: {
    heading: "From a records request to an instant check.",
    today: ["Manual record requests", "Phone calls to confirm reports", "Delays in claims processing", "Inconsistent record versions"],
    withKweli: [
      "Independent record verification",
      "Faster claims processing",
      "Stronger audit trail",
      "Detection of altered or unmatched documents",
    ],
  },

  pilot: {
    heading: "A focused pilot, not a hospital-wide rollout.",
    steps: [
      { label: "Choose one record type" },
      { label: "Onboard a manageable group of hospitals or labs" },
      { label: "Train one claims or records team" },
      { label: "Measure compliance, exceptions, handling time and cycle time" },
    ],
  },

  cta: {
    heading: "Ready to start with one record type?",
    supportingCopy: "Begin with medical reports and expand across labs, pharmacies and referrals.",
  },
};
