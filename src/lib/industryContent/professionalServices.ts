import { Users, FileCheck2, Gavel, Building2, Briefcase, Award, Fingerprint, Share2, ShieldCheck, BadgeCheck } from "lucide-react";
import type { IndustryPageContent } from "@/lib/industryPageTypes";

export const professionalServices: IndustryPageContent = {
  slug: "professional-services",
  name: "Professional Services",

  hero: {
    headline: "Professional advice is only as trustworthy as the documents behind it.",
    supportingCopy:
      "Audit reports, legal opinions, valuations and due-diligence materials move between firms, clients and regulators — and every one shapes a decision worth relying on.",
    art: "Vol. 2 · Hero Composite (TBD)",
  },

  ecosystem: {
    heading: "From the engagement letter to the boardroom, the same trust layer applies.",
    tiles: [
      { icon: Users, label: "Client", art: "Vol. 2 · Professional Services — Advisory" },
      { icon: FileCheck2, label: "Auditor", art: "Vol. 2 · Professional Services — Audit" },
      { icon: Gavel, label: "Law Firm", art: "Vol. 2 · Professional Services — Legal" },
      { icon: Building2, label: "Regulator", art: "Vol. 2 · Corporate Governance" },
      { icon: Briefcase, label: "Board", art: "Vol. 2 · Professional Services — Board Meeting" },
      { icon: Award, label: "Advisory Firm", art: "Vol. 2 · Professional Services — Due Diligence" },
    ],
  },

  explorer: {
    heading: "Kweli works across every professional services engagement.",
    lines: [
      {
        key: "audit",
        label: "Audit",
        icon: "FileCheck2",
        art: "Vol. 2 · Professional Services — Audit",
        explanation: "Audit reports and management letters move from audit firms into every client's financial record.",
        documents: [
          { name: "Audit Report", issuer: "Audit Firm" },
          { name: "Management Letter", issuer: "Audit Firm" },
        ],
      },
      {
        key: "board-minutes",
        label: "Board Minutes",
        icon: "Users",
        art: "Vol. 2 · Professional Services — Board Meeting",
        explanation: "Minutes and resolutions move from the company secretary into every governance decision.",
        documents: [
          { name: "Board Minutes", issuer: "Company Secretary" },
          { name: "Board Resolution", issuer: "Company Secretary" },
        ],
      },
      {
        key: "contracts",
        label: "Contracts",
        icon: "BookOpen",
        art: "Vol. 2 · Professional Services — Contracts",
        explanation: "Signed contracts and amendments move between law firms and clients into every agreement.",
        documents: [
          { name: "Signed Contract", issuer: "Law Firm or Client" },
          { name: "Contract Amendment", issuer: "Law Firm" },
        ],
      },
      {
        key: "due-diligence",
        label: "Due Diligence",
        icon: "FileSearch",
        art: "Vol. 2 · Professional Services — Due Diligence",
        explanation: "Due-diligence reports move from advisory firms into every transaction decision.",
        documents: [
          { name: "Due Diligence Report", issuer: "Advisory Firm" },
          { name: "Data Room Index", issuer: "Advisory Firm" },
        ],
      },
      {
        key: "valuation",
        label: "Valuation",
        icon: "Landmark",
        art: "Vol. 2 · Professional Services — Valuation",
        explanation: "Independent valuation reports move from valuers into every transaction or financing decision.",
        documents: [{ name: "Valuation Report", issuer: "Valuer" }],
      },
      {
        key: "advisory",
        label: "Advisory",
        icon: "Briefcase",
        art: "Vol. 2 · Professional Services — Advisory",
        explanation: "Advisory opinions move from advisory firms into every strategic decision.",
        documents: [{ name: "Advisory Opinion", issuer: "Advisory Firm" }],
      },
      {
        key: "governance",
        label: "Governance",
        icon: "Building2",
        art: "Vol. 2 · Corporate Governance",
        explanation: "Governance reviews and compliance certificates move between advisors and regulators into every governance decision.",
        documents: [
          { name: "Governance Review", issuer: "Advisory Firm" },
          { name: "Compliance Certificate", issuer: "Regulator" },
        ],
      },
      {
        key: "legal",
        label: "Legal",
        icon: "Gavel",
        art: "Vol. 2 · Professional Services — Legal",
        explanation: "Legal opinions move from law firms into every decision that depends on them.",
        documents: [{ name: "Legal Opinion", issuer: "Law Firm" }],
      },
    ],
  },

  journey: {
    heading: "How a professional report moves from firm to decision.",
    steps: [
      { icon: Briefcase, label: "Firm issues report" },
      { icon: Fingerprint, label: "Firm registers its fingerprint" },
      { icon: Share2, label: "Report shared with client" },
      { icon: ShieldCheck, label: "Client or regulator verifies" },
      { icon: BadgeCheck, label: "Decision proceeds" },
    ],
    footnote: "Kweli does not form the opinion in the report and does not assess whether the advice given was sound.",
  },

  businessImpact: {
    heading: "From a follow-up call to a signed-off report.",
    today: [
      "Manual confirmation calls",
      "Uncertainty about report versions",
      "Delays in client or regulator sign-off",
      "Inconsistent audit records",
    ],
    withKweli: [
      "Independent document verification",
      "Faster sign-off",
      "Stronger audit trail",
      "Detection of altered or unmatched documents",
    ],
  },

  pilot: {
    heading: "A focused pilot, not a firm-wide rollout.",
    steps: [
      { label: "Choose one report type" },
      { label: "Onboard a manageable group of client engagements" },
      { label: "Train one engagement team" },
      { label: "Measure compliance, exceptions, handling time and cycle time" },
    ],
  },

  cta: {
    heading: "Ready to start with one report type?",
    supportingCopy: "Begin with audit reports and expand across legal opinions and valuations.",
  },
};
