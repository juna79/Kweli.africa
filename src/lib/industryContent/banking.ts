import { Users, Briefcase, Gavel, FileCheck2, Banknote, Landmark, Fingerprint, Share2, ShieldCheck, BadgeCheck } from "lucide-react";
import type { IndustryPageContent } from "@/lib/industryPageTypes";

export const banking: IndustryPageContent = {
  slug: "banking",
  name: "Banking",

  hero: {
    headline: "Every banking decision runs on documents your bank didn't issue.",
    supportingCopy:
      "KYC documents, financial statements, guarantees, valuations and trade finance paperwork all come from outside your institution — and every one of them shapes a lending, onboarding or compliance decision.",
    art: "Vol. 2 · Hero Composite (TBD)",
  },

  ecosystem: {
    heading: "From the branch to the boardroom, the same trust layer applies.",
    tiles: [
      { icon: Users, label: "Customer", art: "Vol. 2 · Banking — Account Opening" },
      { icon: Briefcase, label: "Employer", art: "Vol. 2 · Banking — Corporate Banking" },
      { icon: Gavel, label: "Lawyer", art: "Vol. 2 · Banking — Loan Application" },
      { icon: FileCheck2, label: "Auditor", art: "Vol. 2 · Banking — Credit Assessment" },
      { icon: Banknote, label: "Accountant", art: "Vol. 2 · Banking — Financial Statements" },
      { icon: Landmark, label: "Valuer", art: "Vol. 2 · Banking — Valuation Report" },
    ],
  },

  explorer: {
    heading: "Kweli works across every banking workflow.",
    lines: [
      {
        key: "kyc",
        label: "KYC",
        icon: "IdCard",
        art: "Vol. 2 · Banking — KYC Verification",
        explanation: "Identity and address documents move from customers into every onboarding decision.",
        documents: [
          { name: "ID Verification", issuer: "Customer" },
          { name: "Proof of Address", issuer: "Customer" },
          { name: "Company Registration", issuer: "Government" },
        ],
      },
      {
        key: "account-opening",
        label: "Account Opening",
        icon: "Users",
        art: "Vol. 2 · Banking — Account Opening",
        explanation: "Identification and mandate documents move from customers into every new account.",
        documents: [
          { name: "Identification Document", issuer: "Customer" },
          { name: "Board Resolution", issuer: "Company Secretary" },
        ],
      },
      {
        key: "lending",
        label: "Lending",
        icon: "Banknote",
        art: "Vol. 2 · Banking — Loan Application",
        explanation: "Income and credit documents move from customers and employers into every lending decision.",
        documents: [
          { name: "Loan Application", issuer: "Customer" },
          { name: "Payslip or Income Statement", issuer: "Employer" },
          { name: "Credit Report", issuer: "Credit Bureau" },
        ],
      },
      {
        key: "trade-finance",
        label: "Trade Finance",
        icon: "FileSearch",
        art: "Vol. 2 · Banking — Trade Finance",
        explanation: "Shipping and payment documents move from exporters and shipping lines into every trade finance decision.",
        documents: [
          { name: "Bill of Lading", issuer: "Shipping Line" },
          { name: "Letter of Credit", issuer: "Issuing Bank" },
          { name: "Commercial Invoice", issuer: "Exporter" },
        ],
      },
      {
        key: "corporate-banking",
        label: "Corporate Banking",
        icon: "Building2",
        art: "Vol. 2 · Banking — Corporate Banking",
        explanation: "Governance and financial documents move from companies and auditors into every corporate banking decision.",
        documents: [
          { name: "Board Resolution", issuer: "Company" },
          { name: "Audited Financial Statements", issuer: "Auditor" },
        ],
      },
      {
        key: "guarantees",
        label: "Bank Guarantees",
        icon: "Landmark",
        art: "Vol. 2 · Banking — Bank Guarantees",
        explanation: "Guarantees and bonds move between banks and underwriters into every guarantee decision.",
        documents: [
          { name: "Bank Guarantee", issuer: "Bank" },
          { name: "Performance Bond", issuer: "Bank or Underwriter" },
        ],
      },
      {
        key: "financial-statements",
        label: "Financial Statements",
        icon: "FileCheck2",
        art: "Vol. 2 · Banking — Financial Statements",
        explanation: "Audited statements move from auditors and accountants into every credit and compliance decision.",
        documents: [
          { name: "Audited Financial Statements", issuer: "Auditor" },
          { name: "Management Accounts", issuer: "Accountant" },
        ],
      },
      {
        key: "valuation",
        label: "Valuation",
        icon: "Scale",
        art: "Vol. 2 · Banking — Valuation Report",
        explanation: "Independent valuation reports move from valuers into every secured lending decision.",
        documents: [
          { name: "Property Valuation Report", issuer: "Valuer" },
          { name: "Asset Valuation Report", issuer: "Valuer" },
        ],
      },
      {
        key: "branch-operations",
        label: "Branch Operations",
        icon: "Briefcase",
        art: "Vol. 2 · Banking — Branch Operations",
        explanation: "Signed forms and mandates move from customers into every branch transaction.",
        documents: [
          { name: "Account Opening Form", issuer: "Customer" },
          { name: "Signature Mandate", issuer: "Customer" },
        ],
      },
    ],
  },

  journey: {
    heading: "How a banking document moves from issuance to decision.",
    steps: [
      { icon: Users, label: "Customer submits" },
      { icon: FileCheck2, label: "Documents issued externally" },
      { icon: Fingerprint, label: "Fingerprint registered" },
      { icon: Share2, label: "Documents shared" },
      { icon: ShieldCheck, label: "Bank verifies" },
      { icon: BadgeCheck, label: "Decision" },
    ],
    footnote: "Kweli does not approve the loan or account and does not assess creditworthiness.",
  },

  businessImpact: {
    heading: "From a confirmation call to a fingerprint check.",
    today: ["Manual document checks", "Phone calls to confirm documents", "Delays in onboarding", "Inconsistent audit records"],
    withKweli: [
      "Faster onboarding",
      "Detection of altered or unmatched documents",
      "Stronger compliance",
      "Better audit trail",
    ],
  },

  pilot: {
    heading: "A focused pilot, not a compliance overhaul.",
    steps: [
      { label: "Choose one document workflow" },
      { label: "Onboard a manageable group of issuers" },
      { label: "Train one branch or team" },
      { label: "Measure compliance, exceptions, handling time and cycle time" },
    ],
  },

  cta: {
    heading: "Ready to start with one workflow?",
    supportingCopy: "Begin with KYC verification and expand across lending, trade finance and guarantees.",
  },
};
