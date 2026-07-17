import {
  Wrench,
  Fingerprint,
  ClipboardCheck,
  Share2,
  ShieldCheck,
  BadgeCheck,
  Car,
  Stethoscope,
  Ship,
  Flame,
  Landmark,
} from "lucide-react";
import type { IndustryPageContent } from "@/lib/industryPageTypes";

export const insurance: IndustryPageContent = {
  slug: "insurance",
  name: "Insurance",

  hero: {
    headline: "Every claim runs on documents insurers didn't create.",
    supportingCopy:
      "Repair estimates, medical reports, marine surveys, engineering assessments, valuations and guarantees — third-party documents influence every insurance decision.",
    art: "Vol. 2 · Hero Composite (insurance)",
    src: "/artwork/insurance/hero-insurance.jpg",
  },

  ecosystem: {
    heading: "One trust layer, wherever the document originates.",
    tiles: [
      { icon: Car, label: "Garage", art: "Vol. 2 · 01 · Motor — Repair", src: "/artwork/insurance/motor-repair.jpg" },
      { icon: Stethoscope, label: "Hospital", art: "Vol. 2 · 04 · Medical — Hospital", src: "/artwork/insurance/medical-hospital.jpg" },
      { icon: Ship, label: "Marine Operation", art: "Vol. 2 · 07 · Marine — Shipping", src: "/artwork/insurance/marine-shipping.jpg" },
      { icon: Flame, label: "Engineering Inspection", art: "Engineering Inspection", src: "/artwork/insurance/engineering-inspection.jpg" },
      { icon: Landmark, label: "Construction Project", art: "Vol. 2 · 09 · Guarantees — Construction", src: "/artwork/insurance/guarantees-construction.jpg" },
      { icon: ClipboardCheck, label: "Professional Assessment", art: "Professional Assessment", src: "/artwork/insurance/professional-assessment.jpg" },
    ],
  },

  explorer: {
    heading: "Kweli works across every line of business.",
    lines: [
      {
        key: "motor",
        label: "Motor",
        icon: "Car",
        art: "Vol. 2 · 03 · Motor — Claims Office",
        src: "/artwork/insurance/motor-claims-office.jpg",
        explanation: "Repair and assessment documents move from garages and assessors into every motor claim.",
        documents: [
          { name: "Repair Estimate", issuer: "Garage" },
          { name: "Garage Invoice", issuer: "Garage" },
          { name: "Assessor Report", issuer: "Assessor" },
          { name: "Valuation Report", issuer: "Valuer" },
        ],
      },
      {
        key: "medical",
        label: "Medical",
        icon: "Stethoscope",
        art: "Vol. 2 · 05 · Medical Report",
        src: "/artwork/insurance/medical-report.jpg",
        explanation: "Medical and diagnostic documents move from hospitals, doctors and laboratories into every medical claim.",
        documents: [
          { name: "Medical Report", issuer: "Hospital or Doctor" },
          { name: "Treatment Estimate", issuer: "Hospital" },
          { name: "Discharge Summary", issuer: "Hospital" },
          { name: "Diagnostic / Laboratory Report", issuer: "Registered Healthcare Provider or Laboratory" },
        ],
      },
      {
        key: "property",
        label: "Property and Fire",
        icon: "Flame",
        art: "Vol. 2 · 06 · Fire — Inspection",
        src: "/artwork/insurance/fire-inspection.jpg",
        explanation: "Inspection, survey and valuation reports move from independent professionals into every property claim.",
        documents: [
          { name: "Inspection Report", issuer: "Inspector" },
          { name: "Survey Report", issuer: "Surveyor" },
          { name: "Valuation Report", issuer: "Valuer" },
        ],
      },
      {
        key: "marine",
        label: "Marine",
        icon: "Ship",
        art: "Vol. 2 · 08 · Marine — Survey",
        src: "/artwork/insurance/marine-survey.jpg",
        explanation: "Survey and inspection documents move from marine surveyors and inspection companies into every marine claim.",
        documents: [
          { name: "Marine Survey", issuer: "Marine Surveyor" },
          { name: "Inspection Certificate", issuer: "Inspection Company" },
          { name: "Damage Assessment", issuer: "Assessor or Surveyor" },
        ],
      },
      {
        key: "engineering",
        label: "Engineering",
        icon: "HardHat",
        art: "Vol. 2 · Engineering",
        src: "/artwork/insurance/engineering.jpg",
        explanation: "Engineering reports and structural assessments move from engineers and inspection firms into every engineering claim.",
        documents: [
          { name: "Engineering Report", issuer: "Engineer" },
          { name: "Structural Assessment", issuer: "Engineering Firm" },
          { name: "Inspection Certificate", issuer: "Inspector" },
        ],
      },
      {
        key: "liability",
        label: "Liability",
        icon: "Scale",
        art: "Vol. 2 · Liability",
        src: "/artwork/insurance/liability.jpg",
        explanation: "Liability claims depend on independent assessment before a decision is made.",
        documents: [],
      },
      {
        key: "guarantees",
        label: "Guarantees and Bonds",
        icon: "Landmark",
        art: "Guarantees & Bonds",
        src: "/artwork/insurance/guarantees-bonds.jpg",
        explanation: "Bonds and guarantees move from banks and underwriters into every guarantee claim.",
        documents: [
          { name: "Bank Guarantee", issuer: "Bank" },
          { name: "Performance Bond", issuer: "Bank or Underwriter" },
          { name: "Insurance Bond", issuer: "Insurer" },
        ],
      },
      {
        key: "travel",
        label: "Travel",
        icon: "Plane",
        art: "Vol. 2 · Travel",
        src: "/artwork/insurance/travel.jpg",
        explanation: "Medical and assessment documents move from clinics and authorised professionals into every travel claim.",
        documents: [
          { name: "Medical Certificate", issuer: "Doctor or Clinic" },
          { name: "Treatment Report", issuer: "Healthcare Provider" },
          { name: "Supporting Assessment", issuer: "Authorised Professional" },
        ],
      },
      {
        key: "life",
        label: "Life",
        icon: "Heart",
        art: "Vol. 2 · 10 · Life — Protection",
        src: "/artwork/insurance/life-protection.jpg",
        explanation: "Medical and assessment documents move from clinics and authorised professionals into every life claim.",
        documents: [
          { name: "Medical Certificate", issuer: "Doctor or Clinic" },
          { name: "Treatment Report", issuer: "Healthcare Provider" },
          { name: "Supporting Assessment", issuer: "Authorised Professional" },
        ],
      },
      {
        key: "underwriting",
        label: "Underwriting",
        icon: "ClipboardList",
        art: "Vol. 2 · Underwriting",
        src: "/artwork/insurance/underwriting.jpg",
        explanation: "Valuation and inspection documents move from valuers and engineers into every underwriting decision.",
        documents: [
          { name: "Valuation Report", issuer: "Valuer" },
          { name: "Risk Inspection", issuer: "Inspection Firm" },
          { name: "Engineering Assessment", issuer: "Engineer" },
        ],
      },
    ],
  },

  journey: {
    heading: "Motor is the first workflow — here's exactly how it moves.",
    steps: [
      { icon: Wrench, label: "Garage issues repair estimate" },
      { icon: Fingerprint, label: "Garage registers its fingerprint" },
      { icon: ClipboardCheck, label: "Assessor issues a report" },
      { icon: Share2, label: "Documents continue through the claims process" },
      { icon: ShieldCheck, label: "Claims handler verifies the received versions" },
      { icon: BadgeCheck, label: "Claim proceeds per the insurer's decision process" },
    ],
    footnote: "Kweli does not approve the claim and does not assess whether the repair cost is fair.",
  },

  businessImpact: {
    heading: "From a phone call to a fingerprint check.",
    today: ["Confirmation calls", "Email follow-ups", "Uncertainty about versions", "Manual exception handling"],
    withKweli: [
      "Independent document verification",
      "Clear exceptions",
      "Stronger audit trail",
      "Faster handling of compliant documents",
    ],
  },

  pilot: {
    heading: "A focused pilot, not a platform rollout.",
    steps: [
      { label: "Choose one document workflow" },
      { label: "Onboard a manageable group of issuers" },
      { label: "Train one claims team" },
      { label: "Measure compliance, exceptions, handling time and cycle time" },
    ],
  },

  cta: {
    heading: "Ready to start with one workflow?",
    supportingCopy: "Begin with motor repair estimates and expand as trust proves itself across every line of business.",
  },
};
