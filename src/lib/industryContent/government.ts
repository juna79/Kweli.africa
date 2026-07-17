import { Users, Building2, FileCheck2, Gavel, Landmark, Award, Fingerprint, Share2, ShieldCheck, BadgeCheck } from "lucide-react";
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
      },
      {
        key: "elections",
        label: "Elections",
        icon: "Vote",
        art: "Vol. 2 · Government — Election Integrity",
        explanation: "Certified results move from the electoral commission into every declared outcome.",
        documents: [{ name: "Certified Results Form", issuer: "Electoral Commission" }],
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
      },
      {
        key: "voter-registration",
        label: "Voter Registration",
        icon: "Vote",
        art: "Vol. 2 · Government — Voter Registration",
        explanation: "Registration records move from the electoral commission into every voter roll.",
        documents: [{ name: "Voter Registration Card", issuer: "Electoral Commission" }],
      },
    ],
  },

  journey: {
    heading: "How a government document moves from submission to service.",
    steps: [
      { icon: Users, label: "Citizen submits" },
      { icon: Building2, label: "Government issues" },
      { icon: Fingerprint, label: "Registered" },
      { icon: Share2, label: "Shared" },
      { icon: ShieldCheck, label: "Verified" },
      { icon: BadgeCheck, label: "Service delivered" },
    ],
    footnote: "Kweli does not decide whether a citizen or business qualifies for a service.",
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
    heading: "A focused pilot, not a digital transformation programme.",
    steps: [
      { label: "Choose one document type" },
      { label: "Onboard a manageable group of departments" },
      { label: "Train one service desk team" },
      { label: "Measure compliance, exceptions, handling time and cycle time" },
    ],
  },

  cta: {
    heading: "Ready to start with one workflow?",
    supportingCopy: "Begin with a single permit or licence type and expand across departments.",
  },
};
