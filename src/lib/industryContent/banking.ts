import { Users, Briefcase, Gavel, FileCheck2, Banknote, Landmark } from "lucide-react";
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
        journey: {
          heading: "How a KYC file moves from submission to onboarding.",
          steps: [
            { icon: "IdCard", label: "Customer submits identity documents" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Bank receives KYC documents" },
            { icon: "ShieldCheck", label: "Compliance team verifies" },
            { icon: "BadgeCheck", label: "Onboarding proceeds" },
          ],
          footnote: "Kweli does not perform sanctions or background screening and does not make onboarding decisions.",
        },
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
        journey: {
          heading: "How an account opening moves from application to activation.",
          steps: [
            { icon: "Users", label: "Customer submits identification and mandate" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Bank receives account documents" },
            { icon: "ShieldCheck", label: "Branch verifies" },
            { icon: "BadgeCheck", label: "Account opened" },
          ],
          footnote: "Kweli does not assess a customer's eligibility for an account.",
        },
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
        journey: {
          heading: "How a lending file moves from application to decision.",
          steps: [
            { icon: "Banknote", label: "Customer submits loan application" },
            { icon: "Fingerprint", label: "Income documents registered" },
            { icon: "FileCheck2", label: "Credit bureau issues credit report" },
            { icon: "Share2", label: "Bank receives lending documents" },
            { icon: "ShieldCheck", label: "Credit team verifies" },
            { icon: "BadgeCheck", label: "Lending decision proceeds" },
          ],
          footnote: "Kweli does not assess creditworthiness and does not approve the loan.",
        },
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
        journey: {
          heading: "How a trade finance file moves from shipment to settlement.",
          steps: [
            { icon: "Ship", label: "Shipping line issues bill of lading" },
            { icon: "Fingerprint", label: "Trade documents registered" },
            { icon: "Share2", label: "Bank receives trade finance documents" },
            { icon: "ShieldCheck", label: "Trade finance team verifies" },
            { icon: "BadgeCheck", label: "Payment or credit released" },
          ],
          footnote: "Kweli does not assess the underlying trade transaction or the condition of the goods.",
        },
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
        journey: {
          heading: "How a corporate banking file moves from resolution to decision.",
          steps: [
            { icon: "Building2", label: "Company issues board resolution" },
            { icon: "FileCheck2", label: "Auditor issues financial statements" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Bank receives corporate documents" },
            { icon: "ShieldCheck", label: "Relationship team verifies" },
            { icon: "BadgeCheck", label: "Corporate decision proceeds" },
          ],
          footnote: "Kweli does not assess the company's financial position.",
        },
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
        journey: {
          heading: "How a bank guarantee moves from issue to acceptance.",
          steps: [
            { icon: "Landmark", label: "Bank or underwriter issues guarantee" },
            { icon: "Fingerprint", label: "Guarantee registered" },
            { icon: "Share2", label: "Beneficiary receives guarantee" },
            { icon: "ShieldCheck", label: "Beneficiary verifies" },
            { icon: "BadgeCheck", label: "Guarantee accepted" },
          ],
          footnote: "Kweli does not guarantee payment and does not assess the underlying contract.",
        },
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
        journey: {
          heading: "How financial statements move from audit to decision.",
          steps: [
            { icon: "FileCheck2", label: "Auditor issues financial statements" },
            { icon: "Fingerprint", label: "Statements registered" },
            { icon: "Share2", label: "Bank receives financial statements" },
            { icon: "ShieldCheck", label: "Credit team verifies" },
            { icon: "BadgeCheck", label: "Credit or compliance decision proceeds" },
          ],
          footnote: "Kweli does not audit the figures and does not assess financial performance.",
        },
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
        journey: {
          heading: "How a valuation report moves from assessment to lending.",
          steps: [
            { icon: "Scale", label: "Valuer completes assessment" },
            { icon: "FileCheck2", label: "Valuation report issued" },
            { icon: "Fingerprint", label: "Report registered" },
            { icon: "Share2", label: "Bank receives valuation report" },
            { icon: "ShieldCheck", label: "Credit team verifies" },
            { icon: "BadgeCheck", label: "Secured lending decision proceeds" },
          ],
          footnote: "Kweli does not assess the accuracy of the valuation.",
        },
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
        journey: {
          heading: "How a branch transaction moves from form to processing.",
          steps: [
            { icon: "Briefcase", label: "Customer submits form and mandate" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Branch receives signed documents" },
            { icon: "ShieldCheck", label: "Branch verifies" },
            { icon: "BadgeCheck", label: "Transaction processed" },
          ],
          footnote: "Kweli does not authorise the transaction and does not assess account activity.",
        },
      },
    ],
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
    heading: "One workflow, proven in practice — not a compliance overhaul.",
    steps: [
      { label: "Choose one document workflow" },
      { label: "Onboard a manageable group of issuers" },
      { label: "Train one branch or team" },
      { label: "Measure compliance, exceptions, handling time and cycle time" },
    ],
  },

  cta: {
    heading: "Ready to bring verification into your compliance process?",
    supportingCopy: "Begin with KYC verification and expand across lending, trade finance and guarantees.",
  },
};
