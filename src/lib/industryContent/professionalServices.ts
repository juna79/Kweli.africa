import { Users, FileCheck2, Gavel, Building2, Briefcase, Award } from "lucide-react";
import type { IndustryPageContent } from "@/lib/industryPageTypes";

export const professionalServices: IndustryPageContent = {
  slug: "professional-services",
  name: "Professional Services",

  hero: {
    headline: "Professional advice is only as trustworthy as the documents behind it.",
    supportingCopy:
      "Audit reports, legal opinions, valuations and due-diligence materials move between firms, clients and regulators — and every one shapes a decision worth relying on.",
    art: "Vol. 2 · Hero Composite (Professional Services)",
    src: "/artwork/professional-services/hero-professional-services.jpg",
  },

  ecosystem: {
    heading: "From the engagement letter to the boardroom, the same trust layer applies.",
    tiles: [
      { icon: Users, label: "Client", art: "Vol. 2 · Professional Services — Advisory", src: "/artwork/professional-services/advisory.jpg" },
      { icon: FileCheck2, label: "Auditor", art: "Vol. 2 · Professional Services — Audit", src: "/artwork/professional-services/audit.jpg" },
      { icon: Gavel, label: "Law Firm", art: "Vol. 2 · Professional Services — Legal", src: "/artwork/professional-services/legal.jpg" },
      { icon: Building2, label: "Regulator", art: "Vol. 2 · Corporate Governance", src: "/artwork/professional-services/governance.jpg" },
      { icon: Briefcase, label: "Board", art: "Vol. 2 · Professional Services — Board Meeting", src: "/artwork/professional-services/board-minutes.jpg" },
      { icon: Award, label: "Advisory Firm", art: "Vol. 2 · Professional Services — Due Diligence", src: "/artwork/professional-services/due-diligence.jpg" },
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
        src: "/artwork/professional-services/audit.jpg",
        explanation: "Audit reports and management letters move from audit firms into every client's financial record.",
        documents: [
          { name: "Audit Report", issuer: "Audit Firm" },
          { name: "Management Letter", issuer: "Audit Firm" },
        ],
        journey: {
          heading: "How an audit report moves from fieldwork to sign-off.",
          steps: [
            { icon: "FileCheck2", label: "Audit firm completes audit" },
            { icon: "Fingerprint", label: "Report and management letter registered" },
            { icon: "Share2", label: "Client receives audit report" },
            { icon: "ShieldCheck", label: "Board or regulator verifies" },
            { icon: "BadgeCheck", label: "Sign-off proceeds" },
          ],
          footnote: "Kweli does not form the audit opinion and does not assess whether the accounts are accurate.",
        },
      },
      {
        key: "board-minutes",
        label: "Board Minutes",
        icon: "Users",
        art: "Vol. 2 · Professional Services — Board Meeting",
        src: "/artwork/professional-services/board-minutes.jpg",
        explanation: "Minutes and resolutions move from the company secretary into every governance decision.",
        documents: [
          { name: "Board Minutes", issuer: "Company Secretary" },
          { name: "Board Resolution", issuer: "Company Secretary" },
        ],
        journey: {
          heading: "How board minutes move from record to governance decision.",
          steps: [
            { icon: "Users", label: "Company secretary records minutes and resolution" },
            { icon: "Fingerprint", label: "Minutes registered" },
            { icon: "Share2", label: "Board shares minutes" },
            { icon: "ShieldCheck", label: "Regulator or auditor verifies" },
            { icon: "BadgeCheck", label: "Governance record confirmed" },
          ],
          footnote: "Kweli does not assess whether the resolution was validly passed.",
        },
      },
      {
        key: "contracts",
        label: "Contracts",
        icon: "BookOpen",
        art: "Vol. 2 · Professional Services — Contracts",
        src: "/artwork/professional-services/contracts.jpg",
        explanation: "Signed contracts and amendments move between law firms and clients into every agreement.",
        documents: [
          { name: "Signed Contract", issuer: "Law Firm or Client" },
          { name: "Contract Amendment", issuer: "Law Firm" },
        ],
        journey: {
          heading: "How a signed contract moves from execution to agreement.",
          steps: [
            { icon: "Gavel", label: "Law firm or client signs contract" },
            { icon: "Fingerprint", label: "Contract registered" },
            { icon: "Share2", label: "Counterparty receives contract" },
            { icon: "ShieldCheck", label: "Legal team verifies" },
            { icon: "BadgeCheck", label: "Agreement proceeds" },
          ],
          footnote: "Kweli does not assess the enforceability or terms of the contract.",
        },
      },
      {
        key: "due-diligence",
        label: "Due Diligence",
        icon: "FileSearch",
        art: "Vol. 2 · Professional Services — Due Diligence",
        src: "/artwork/professional-services/due-diligence.jpg",
        explanation: "Due-diligence reports move from advisory firms into every transaction decision.",
        documents: [
          { name: "Due Diligence Report", issuer: "Advisory Firm" },
          { name: "Data Room Index", issuer: "Advisory Firm" },
        ],
        journey: {
          heading: "How a due diligence report moves from review to decision.",
          steps: [
            { icon: "FileSearch", label: "Advisory firm completes due diligence" },
            { icon: "FileCheck2", label: "Report and data room index issued" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Client or acquirer receives report" },
            { icon: "ShieldCheck", label: "Transaction team verifies" },
            { icon: "BadgeCheck", label: "Transaction decision proceeds" },
          ],
          footnote: "Kweli does not form the findings in the report and does not assess the underlying transaction.",
        },
      },
      {
        key: "valuation",
        label: "Valuation",
        icon: "Landmark",
        art: "Vol. 2 · Professional Services — Valuation",
        src: "/artwork/professional-services/valuation.jpg",
        explanation: "Independent valuation reports move from valuers into every transaction or financing decision.",
        documents: [{ name: "Valuation Report", issuer: "Valuer" }],
        journey: {
          heading: "How a valuation report moves from assessment to decision.",
          steps: [
            { icon: "Landmark", label: "Valuer completes assessment" },
            { icon: "FileCheck2", label: "Valuation report issued" },
            { icon: "Fingerprint", label: "Report registered" },
            { icon: "Share2", label: "Client or lender receives report" },
            { icon: "ShieldCheck", label: "Recipient verifies" },
            { icon: "BadgeCheck", label: "Financing or transaction decision proceeds" },
          ],
          footnote: "Kweli does not assess the accuracy of the valuation.",
        },
      },
      {
        key: "advisory",
        label: "Advisory",
        icon: "Briefcase",
        art: "Vol. 2 · Professional Services — Advisory",
        src: "/artwork/professional-services/advisory.jpg",
        explanation: "Advisory opinions move from advisory firms into every strategic decision.",
        documents: [{ name: "Advisory Opinion", issuer: "Advisory Firm" }],
        journey: {
          heading: "How an advisory opinion moves from firm to decision.",
          steps: [
            { icon: "Briefcase", label: "Advisory firm issues opinion" },
            { icon: "Fingerprint", label: "Opinion registered" },
            { icon: "Share2", label: "Client receives opinion" },
            { icon: "ShieldCheck", label: "Client verifies" },
            { icon: "BadgeCheck", label: "Strategic decision proceeds" },
          ],
          footnote: "Kweli does not form the opinion and does not assess whether the advice given was sound.",
        },
      },
      {
        key: "governance",
        label: "Governance",
        icon: "Building2",
        art: "Vol. 2 · Corporate Governance",
        src: "/artwork/professional-services/governance.jpg",
        explanation: "Governance reviews and compliance certificates move between advisors and regulators into every governance decision.",
        documents: [
          { name: "Governance Review", issuer: "Advisory Firm" },
          { name: "Compliance Certificate", issuer: "Regulator" },
        ],
        journey: {
          heading: "How a governance review moves from assessment to decision.",
          steps: [
            { icon: "Building2", label: "Advisory firm completes governance review" },
            { icon: "FileCheck2", label: "Regulator issues compliance certificate" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Board receives documents" },
            { icon: "ShieldCheck", label: "Regulator verifies" },
            { icon: "BadgeCheck", label: "Governance decision proceeds" },
          ],
          footnote: "Kweli does not assess whether governance practices meet regulatory standards.",
        },
      },
      {
        key: "legal",
        label: "Legal",
        icon: "Gavel",
        art: "Vol. 2 · Professional Services — Legal",
        src: "/artwork/professional-services/legal.jpg",
        explanation: "Legal opinions move from law firms into every decision that depends on them.",
        documents: [{ name: "Legal Opinion", issuer: "Law Firm" }],
        journey: {
          heading: "How a legal opinion moves from firm to decision.",
          steps: [
            { icon: "Gavel", label: "Law firm issues legal opinion" },
            { icon: "Fingerprint", label: "Opinion registered" },
            { icon: "Share2", label: "Client receives opinion" },
            { icon: "ShieldCheck", label: "Client or regulator verifies" },
            { icon: "BadgeCheck", label: "Decision proceeds" },
          ],
          footnote: "Kweli does not form the legal opinion and does not assess whether the advice given was sound.",
        },
      },
    ],
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
    heading: "One workflow, proven in practice — not a firm-wide rollout.",
    steps: [
      { label: "Start with one report type, such as audit reports" },
      { label: "Bring on a defined group of client engagements" },
      { label: "Train the engagement team who handle them" },
      { label: "Track sign-off time and exceptions across engagements" },
    ],
  },

  cta: {
    heading: "Ready to bring verification into your engagements?",
    supportingCopy: "Begin with audit reports and expand across legal opinions and valuations.",
  },
};
