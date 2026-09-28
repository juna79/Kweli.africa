import { Users, Stethoscope, Microscope, Building2, ShieldCheck, Pill } from "lucide-react";
import type { IndustryPageContent } from "@/lib/industryPageTypes";

export const healthcare: IndustryPageContent = {
  slug: "healthcare",
  name: "Healthcare",

  hero: {
    headline: "Healthcare decisions depend on records that must be trusted.",
    supportingCopy:
      "Medical reports, lab results, referral letters and discharge summaries move between hospitals, doctors, laboratories and insurers — and every one shapes a treatment or claims decision.",
    art: "Vol. 2 · Hero Composite (Healthcare)",
    src: "/artwork/healthcare/hero-healthcare.webp",
  },

  ecosystem: {
    heading: "From the ward to the pharmacy, the same trust layer applies.",
    tiles: [
      { icon: Users, label: "Patient", art: "Vol. 2 · Healthcare — Patient Registration", src: "/artwork/healthcare/patient-registration.webp" },
      { icon: Stethoscope, label: "Doctor", art: "Vol. 2 · Healthcare — Medical Records", src: "/artwork/healthcare/medical-records.webp" },
      { icon: Building2, label: "Hospital", art: "Vol. 2 · Healthcare — Surgery", src: "/artwork/healthcare/surgery.webp" },
      { icon: Microscope, label: "Laboratory", art: "Vol. 2 · Healthcare — Lab Results", src: "/artwork/healthcare/lab-results.webp" },
      { icon: ShieldCheck, label: "Insurer", art: "Vol. 2 · Healthcare — Insurance Claim", src: "/artwork/healthcare/insurance-claim.webp" },
      { icon: Pill, label: "Pharmacy", art: "Vol. 2 · Healthcare — Pharmacy", src: "/artwork/healthcare/pharmacy.webp?v=20260929" },
    ],
  },

  explorer: {
    heading: "Built for healthcare, one workflow at a time.",
    lines: [
      {
        key: "patient-registration",
        label: "Patient Registration",
        icon: "IdCard",
        art: "Vol. 2 · Healthcare — Patient Registration",
        src: "/artwork/healthcare/patient-registration.webp",
        explanation: "Identity documents move from patients into every hospital record.",
        documents: [
          { name: "Registration Form", issuer: "Patient" },
          { name: "National ID", issuer: "Patient" },
        ],
        journey: {
          heading: "How a patient registration moves from form to admission.",
          steps: [
            { icon: "IdCard", label: "Patient submits registration form and ID" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Hospital receives registration record" },
            { icon: "ShieldCheck", label: "Reception verifies" },
            { icon: "BadgeCheck", label: "Patient admitted" },
          ],
          footnote: "Kweli does not verify a patient's identity beyond the document presented and does not make admission decisions.",
        },
      },
      {
        key: "medical-records",
        label: "Medical Records",
        icon: "FileCheck2",
        art: "Vol. 2 · Healthcare — Medical Records",
        src: "/artwork/healthcare/medical-records.webp",
        explanation: "Reports and summaries move from hospitals and doctors into every referral and claim.",
        documents: [
          { name: "Medical Report", issuer: "Hospital or Doctor" },
          { name: "Discharge Summary", issuer: "Hospital" },
        ],
        journey: {
          heading: "How a medical record moves from hospital to referral.",
          steps: [
            { icon: "Stethoscope", label: "Hospital or doctor issues medical report" },
            { icon: "Fingerprint", label: "Report and discharge summary registered" },
            { icon: "Share2", label: "Record shared with referring party" },
            { icon: "ShieldCheck", label: "Receiving clinician verifies" },
            { icon: "BadgeCheck", label: "Continuity of care proceeds" },
          ],
          footnote: "Kweli does not assess the clinical accuracy of the medical report.",
        },
      },
      {
        key: "lab-results",
        label: "Lab Results",
        icon: "Microscope",
        art: "Vol. 2 · Healthcare — Lab Results",
        src: "/artwork/healthcare/lab-results.webp",
        explanation: "Diagnostic reports move from laboratories into every treatment decision.",
        documents: [
          { name: "Laboratory Report", issuer: "Laboratory" },
          { name: "Diagnostic Report", issuer: "Laboratory" },
        ],
        journey: {
          heading: "How a lab result moves from testing to treatment.",
          steps: [
            { icon: "Microscope", label: "Laboratory completes testing" },
            { icon: "FileCheck2", label: "Laboratory report issued" },
            { icon: "Fingerprint", label: "Report registered" },
            { icon: "Share2", label: "Doctor or hospital receives results" },
            { icon: "ShieldCheck", label: "Results verified" },
            { icon: "BadgeCheck", label: "Treatment decision proceeds" },
          ],
          footnote: "Kweli does not interpret the results and does not make a diagnosis.",
        },
      },
      {
        key: "prescription",
        label: "Prescription",
        icon: "Pill",
        art: "Vol. 2 · Healthcare — Prescription",
        src: "/artwork/healthcare/prescription.webp",
        explanation: "Prescriptions move from doctors into every dispensing decision.",
        documents: [{ name: "Prescription", issuer: "Doctor" }],
        journey: {
          heading: "How a prescription moves from doctor to pharmacy.",
          steps: [
            { icon: "Stethoscope", label: "Doctor issues prescription" },
            { icon: "Fingerprint", label: "Prescription registered" },
            { icon: "Share2", label: "Pharmacy receives prescription" },
            { icon: "ShieldCheck", label: "Pharmacist verifies" },
            { icon: "BadgeCheck", label: "Medication dispensed" },
          ],
          footnote: "Kweli does not assess whether the prescribed medication or dosage is clinically appropriate.",
        },
      },
      {
        key: "referral-letter",
        label: "Referral Letter",
        icon: "Mail",
        art: "Vol. 2 · Healthcare — Referral Letter",
        src: "/artwork/healthcare/referral-letter.webp",
        explanation: "Referral letters move between clinics and specialists into every continuity-of-care decision.",
        documents: [{ name: "Referral Letter", issuer: "Doctor or Clinic" }],
        journey: {
          heading: "How a referral letter moves from clinic to specialist.",
          steps: [
            { icon: "Mail", label: "Doctor or clinic issues referral letter" },
            { icon: "Fingerprint", label: "Letter registered" },
            { icon: "Share2", label: "Specialist receives referral" },
            { icon: "ShieldCheck", label: "Specialist verifies" },
            { icon: "BadgeCheck", label: "Consultation proceeds" },
          ],
          footnote: "Kweli does not assess whether the referral was clinically necessary.",
        },
      },
      {
        key: "insurance-claim",
        label: "Insurance Claim",
        icon: "ShieldCheck",
        art: "Vol. 2 · Healthcare — Insurance Claim",
        src: "/artwork/healthcare/insurance-claim.webp",
        explanation: "Claim and treatment documents move from hospitals into every insurer decision.",
        documents: [
          { name: "Insurance Claim Form", issuer: "Hospital or Patient" },
          { name: "Treatment Estimate", issuer: "Hospital" },
        ],
        journey: {
          heading: "How a healthcare claim moves from hospital to decision.",
          steps: [
            { icon: "Building2", label: "Hospital issues claim form and treatment estimate" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Insurer receives claim documents" },
            { icon: "ShieldCheck", label: "Claims team verifies" },
            { icon: "BadgeCheck", label: "Claim proceeds" },
          ],
          footnote: "Kweli does not approve the claim and does not assess the medical necessity of treatment.",
        },
      },
      {
        key: "radiology",
        label: "Radiology",
        icon: "Monitor",
        art: "Vol. 2 · Healthcare — Radiology",
        src: "/artwork/healthcare/radiology.webp",
        explanation: "Imaging reports move from radiologists into every diagnosis.",
        documents: [{ name: "Radiology Report", issuer: "Radiologist" }],
        journey: {
          heading: "How a radiology report moves from imaging to diagnosis.",
          steps: [
            { icon: "Monitor", label: "Radiologist completes imaging" },
            { icon: "FileCheck2", label: "Radiology report issued" },
            { icon: "Fingerprint", label: "Report registered" },
            { icon: "Share2", label: "Referring doctor receives report" },
            { icon: "ShieldCheck", label: "Report verified" },
            { icon: "BadgeCheck", label: "Diagnosis proceeds" },
          ],
          footnote: "Kweli does not interpret the imaging and does not make a diagnosis.",
        },
      },
      {
        key: "surgery",
        label: "Surgery",
        icon: "Syringe",
        art: "Vol. 2 · Healthcare — Surgery",
        src: "/artwork/healthcare/surgery.webp",
        explanation: "Surgical records and consent forms move from hospitals into every procedure.",
        documents: [
          { name: "Surgical Report", issuer: "Hospital" },
          { name: "Consent Form", issuer: "Patient" },
        ],
        journey: {
          heading: "How a surgical record moves from consent to care.",
          steps: [
            { icon: "IdCard", label: "Patient signs consent form" },
            { icon: "Syringe", label: "Hospital completes procedure" },
            { icon: "Fingerprint", label: "Surgical report registered" },
            { icon: "Share2", label: "Record shared with care team" },
            { icon: "ShieldCheck", label: "Record verified" },
            { icon: "BadgeCheck", label: "Post-operative care proceeds" },
          ],
          footnote: "Kweli does not assess the clinical outcome of the procedure.",
        },
      },
      {
        key: "pharmacy",
        label: "Pharmacy",
        icon: "Building2",
        art: "Vol. 2 · Healthcare — Pharmacy",
        src: "/artwork/healthcare/pharmacy.webp?v=20260929",
        explanation: "Dispensing records move from pharmacies into every prescription fulfilment.",
        documents: [{ name: "Dispensing Record", issuer: "Pharmacy" }],
        journey: {
          heading: "How a dispensing record moves from pharmacy to fulfilment.",
          steps: [
            { icon: "Pill", label: "Pharmacy dispenses medication" },
            { icon: "Fingerprint", label: "Dispensing record registered" },
            { icon: "Share2", label: "Record shared with prescriber or insurer" },
            { icon: "ShieldCheck", label: "Record verified" },
            { icon: "BadgeCheck", label: "Fulfilment confirmed" },
          ],
          footnote: "Kweli does not assess whether the dispensed medication matches clinical need.",
        },
      },
      {
        key: "telemedicine",
        label: "Telemedicine",
        icon: "Stethoscope",
        art: "Vol. 2 · Healthcare — Telemedicine",
        src: "/artwork/healthcare/telemedicine.webp",
        explanation: "Consultation records move from remote providers into every follow-up decision.",
        documents: [{ name: "Consultation Report", issuer: "Doctor" }],
        journey: {
          heading: "How a telemedicine record moves from consultation to follow-up.",
          steps: [
            { icon: "Monitor", label: "Remote consultation completed" },
            { icon: "Stethoscope", label: "Doctor issues consultation report" },
            { icon: "Fingerprint", label: "Report registered" },
            { icon: "Share2", label: "Patient or referring party receives report" },
            { icon: "ShieldCheck", label: "Report verified" },
            { icon: "BadgeCheck", label: "Follow-up proceeds" },
          ],
          footnote: "Kweli does not assess the clinical quality of the remote consultation.",
        },
      },
    ],
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
    heading: "One record type, proven in practice — not a hospital-wide rollout.",
    steps: [
      { label: "Start with one record type, such as medical reports" },
      { label: "Bring on a defined group of hospitals or laboratories" },
      { label: "Train the records or claims team who handle them" },
      { label: "Track turnaround time and exceptions for that record type" },
    ],
  },

  cta: {
    heading: "Ready to bring verification into your records process?",
    supportingCopy: "Begin with medical reports and expand across labs, pharmacies and referrals.",
  },
};
