import { Users, Building2, FileCheck2, Gavel, Landmark, Award } from "lucide-react";
import type { IndustryPageContent } from "@/lib/industryPageTypes";

export const government: IndustryPageContent = {
  slug: "government",
  name: "Government",

  hero: {
    headline: "Public trust starts with trusted documents.",
    supportingCopy:
      "Permits, licences, land records and certificates move between citizens, businesses and government offices — and every one shapes a decision about who receives a service.",
    art: "Vol. 2 · Hero Composite (TBD)",
  },

  ecosystem: {
    heading: "From the counter to the courtroom, the same trust layer applies.",
    tiles: [
      { icon: Users, label: "Citizen", art: "Vol. 2 · Government — Citizen ID" },
      { icon: Building2, label: "Ministry or Department", art: "Vol. 2 · Government — Public Services" },
      { icon: FileCheck2, label: "Registrar", art: "Vol. 2 · Government — Land Registry" },
      { icon: Gavel, label: "Court", art: "Vol. 2 · Government — Court Documents" },
      { icon: Landmark, label: "Land Office", art: "Vol. 2 · Government — Land Registry" },
      { icon: Award, label: "Licensing Authority", art: "Vol. 2 · Government — Business Licences" },
    ],
  },

  explorer: {
    heading: "Kweli works across every government workflow.",
    lines: [
      {
        key: "permits",
        label: "Permits",
        icon: "FileCheck2",
        art: "Vol. 2 · Government — Permits",
        explanation: "Permit applications and approvals move between citizens or businesses and government offices.",
        documents: [
          { name: "Building Permit", issuer: "Government" },
          { name: "Permit Application", issuer: "Citizen or Business" },
        ],
        journey: {
          heading: "How a permit moves from application to confirmation.",
          steps: [
            { icon: "Users", label: "Citizen or business submits application" },
            { icon: "Building2", label: "Government issues permit" },
            { icon: "Fingerprint", label: "Permit registered" },
            { icon: "Share2", label: "Holder shares permit" },
            { icon: "ShieldCheck", label: "Receiving party verifies" },
            { icon: "BadgeCheck", label: "Permit confirmed" },
          ],
          footnote: "Kweli does not assess whether the permit was correctly granted.",
        },
      },
      {
        key: "business-licences",
        label: "Business Licences",
        icon: "Award",
        art: "Vol. 2 · Government — Business Licences",
        explanation: "Licences and renewals move from licensing authorities into every business's compliance record.",
        documents: [
          { name: "Business Licence", issuer: "Government" },
          { name: "Licence Renewal", issuer: "Government" },
        ],
        journey: {
          heading: "How a business licence moves from issue to compliance check.",
          steps: [
            { icon: "Award", label: "Government issues business licence" },
            { icon: "Fingerprint", label: "Licence registered" },
            { icon: "Share2", label: "Business shares licence" },
            { icon: "ShieldCheck", label: "Requesting party verifies" },
            { icon: "BadgeCheck", label: "Compliance confirmed" },
          ],
          footnote: "Kweli does not assess whether the business meets licensing requirements.",
        },
      },
      {
        key: "land-registry",
        label: "Land Registry",
        icon: "Landmark",
        art: "Vol. 2 · Government — Land Registry",
        explanation: "Title deeds and search certificates move from the land registry into every property transaction.",
        documents: [
          { name: "Title Deed", issuer: "Land Registry" },
          { name: "Land Search Certificate", issuer: "Land Registry" },
        ],
        journey: {
          heading: "How a title deed moves from registry to transaction.",
          steps: [
            { icon: "Landmark", label: "Land registry issues title deed" },
            { icon: "Fingerprint", label: "Deed registered" },
            { icon: "Share2", label: "Owner shares deed" },
            { icon: "ShieldCheck", label: "Buyer or lender verifies" },
            { icon: "BadgeCheck", label: "Property transaction proceeds" },
          ],
          footnote: "Kweli does not resolve competing ownership claims and does not confirm the title is free of encumbrances.",
        },
      },
      {
        key: "citizen-id",
        label: "Citizen ID",
        icon: "IdCard",
        art: "Vol. 2 · Government — Citizen ID",
        explanation: "Identity documents move from government registrars into every citizen-facing service.",
        documents: [
          { name: "National ID", issuer: "Government" },
          { name: "Birth Certificate", issuer: "Registrar" },
        ],
        journey: {
          heading: "How a citizen ID moves from registration to service.",
          steps: [
            { icon: "Users", label: "Registrar issues birth certificate" },
            { icon: "IdCard", label: "Government issues national ID" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Citizen shares ID" },
            { icon: "ShieldCheck", label: "Service provider verifies" },
            { icon: "BadgeCheck", label: "Service accessed" },
          ],
          footnote: "Kweli does not confirm a person's identity beyond the document presented.",
        },
      },
      {
        key: "tax",
        label: "Tax",
        icon: "Banknote",
        art: "Vol. 2 · Government — Tax Compliance",
        explanation: "Compliance certificates and returns move between taxpayers and the revenue authority.",
        documents: [
          { name: "Tax Compliance Certificate", issuer: "Revenue Authority" },
          { name: "Tax Return", issuer: "Citizen or Business" },
        ],
        journey: {
          heading: "How a tax compliance certificate moves from filing to confirmation.",
          steps: [
            { icon: "Banknote", label: "Citizen or business files tax return" },
            { icon: "Building2", label: "Revenue authority issues compliance certificate" },
            { icon: "Fingerprint", label: "Certificate registered" },
            { icon: "Share2", label: "Requesting party receives certificate" },
            { icon: "ShieldCheck", label: "Authority verifies" },
            { icon: "BadgeCheck", label: "Compliance confirmed" },
          ],
          footnote: "Kweli does not assess whether taxes owed have been correctly calculated or paid.",
        },
      },
      {
        key: "procurement",
        label: "Procurement",
        icon: "Briefcase",
        art: "Vol. 2 · Government — Procurement",
        explanation: "Tender documents and awards move between government and suppliers into every procurement decision.",
        documents: [
          { name: "Tender Document", issuer: "Government" },
          { name: "Contract Award Letter", issuer: "Government" },
        ],
        journey: {
          heading: "How a procurement award moves from tender to contract.",
          steps: [
            { icon: "Building2", label: "Government issues tender document" },
            { icon: "Briefcase", label: "Government issues contract award letter" },
            { icon: "Fingerprint", label: "Award registered" },
            { icon: "Share2", label: "Supplier receives award documents" },
            { icon: "ShieldCheck", label: "Supplier verifies" },
            { icon: "BadgeCheck", label: "Contract proceeds" },
          ],
          footnote: "Kweli does not assess whether the procurement process was fair or compliant.",
        },
      },
      {
        key: "elections",
        label: "Elections",
        icon: "Vote",
        art: "Vol. 2 · Government — Election Integrity",
        explanation: "Certified results move from the electoral commission into every declared outcome.",
        documents: [{ name: "Certified Results Form", issuer: "Electoral Commission" }],
        journey: {
          heading: "How certified results move from commission to declaration.",
          steps: [
            { icon: "Vote", label: "Electoral commission certifies results" },
            { icon: "Fingerprint", label: "Results registered" },
            { icon: "Share2", label: "Results shared with stakeholders" },
            { icon: "ShieldCheck", label: "Observers or parties verify" },
            { icon: "BadgeCheck", label: "Outcome declared" },
          ],
          footnote: "Kweli does not conduct the election and does not determine whether the count is accurate — only whether the certified results document matches what was originally registered.",
        },
      },
      {
        key: "court",
        label: "Court",
        icon: "Gavel",
        art: "Vol. 2 · Government — Court Documents",
        explanation: "Orders and judgments move from the court into every enforcement action.",
        documents: [
          { name: "Court Order", issuer: "Court" },
          { name: "Judgment", issuer: "Court" },
        ],
        journey: {
          heading: "How a court order moves from ruling to enforcement.",
          steps: [
            { icon: "Gavel", label: "Court issues order or judgment" },
            { icon: "Fingerprint", label: "Document registered" },
            { icon: "Share2", label: "Parties receive order" },
            { icon: "ShieldCheck", label: "Enforcement agency verifies" },
            { icon: "BadgeCheck", label: "Enforcement proceeds" },
          ],
          footnote: "Kweli does not interpret the ruling and does not assess whether it was correctly decided.",
        },
      },
      {
        key: "public-services",
        label: "Public Services",
        icon: "Building2",
        art: "Vol. 2 · Government — Public Services",
        explanation: "Applications and approvals move between citizens and government offices into every service request.",
        documents: [
          { name: "Service Application", issuer: "Citizen" },
          { name: "Approval Letter", issuer: "Government" },
        ],
        journey: {
          heading: "How a public service request moves from application to delivery.",
          steps: [
            { icon: "Users", label: "Citizen submits service application" },
            { icon: "Building2", label: "Government issues approval letter" },
            { icon: "Fingerprint", label: "Letter registered" },
            { icon: "Share2", label: "Citizen shares approval" },
            { icon: "ShieldCheck", label: "Service desk verifies" },
            { icon: "BadgeCheck", label: "Service delivered" },
          ],
          footnote: "Kweli does not decide whether a citizen qualifies for the service.",
        },
      },
      {
        key: "voter-registration",
        label: "Voter Registration",
        icon: "Vote",
        art: "Vol. 2 · Government — Voter Registration",
        explanation: "Registration records move from the electoral commission into every voter roll.",
        documents: [{ name: "Voter Registration Card", issuer: "Electoral Commission" }],
        journey: {
          heading: "How a voter registration moves from card to polling day.",
          steps: [
            { icon: "Vote", label: "Electoral commission issues registration card" },
            { icon: "Fingerprint", label: "Registration registered" },
            { icon: "Share2", label: "Polling station receives voter roll" },
            { icon: "ShieldCheck", label: "Officials verify" },
            { icon: "BadgeCheck", label: "Voter admitted" },
          ],
          footnote: "Kweli does not determine voter eligibility beyond matching the registered document.",
        },
      },
    ],
  },

  businessImpact: {
    heading: "From a service queue to a verified decision.",
    today: ["Manual verification queues", "In-person confirmation visits", "Delays in service delivery", "Inconsistent record versions"],
    withKweli: [
      "Independent document verification",
      "Faster service delivery",
      "Stronger audit trail",
      "Detection of altered or unmatched documents",
    ],
  },

  pilot: {
    heading: "One workflow, proven in practice — not a digital transformation programme.",
    steps: [
      { label: "Choose one document type" },
      { label: "Onboard a manageable group of departments" },
      { label: "Train one service desk team" },
      { label: "Measure compliance, exceptions, handling time and cycle time" },
    ],
  },

  cta: {
    heading: "Ready to bring verification into your service delivery?",
    supportingCopy: "Begin with a single permit or licence type and expand across departments.",
  },
};
