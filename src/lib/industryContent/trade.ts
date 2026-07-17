import { Truck, Anchor, Building2, Ship, Warehouse, FileSearch, BadgeCheck } from "lucide-react";
import type { IndustryPageContent } from "@/lib/industryPageTypes";

export const trade: IndustryPageContent = {
  slug: "trade",
  name: "Trade",

  hero: {
    headline: "International trade depends on trusted paperwork.",
    supportingCopy:
      "Certificates of origin, inspection certificates, bills of lading and customs declarations move between exporters, inspectors, shipping lines and customs — and every one shapes a clearance decision.",
    art: "Vol. 2 · Hero Composite (TBD)",
  },

  ecosystem: {
    heading: "From the warehouse to the wharf, the same trust layer applies.",
    tiles: [
      { icon: Truck, label: "Exporter", art: "Vol. 2 · Trade — Exporter" },
      { icon: Anchor, label: "Importer", art: "Vol. 2 · Trade — Importer" },
      { icon: Building2, label: "Customs", art: "Vol. 2 · Trade — Customs Clearance" },
      { icon: Ship, label: "Shipping Line", art: "Vol. 2 · Trade — Export Shipment" },
      { icon: Warehouse, label: "Warehouse", art: "Vol. 2 · Trade — Warehouse" },
      { icon: FileSearch, label: "Inspector", art: "Vol. 2 · Trade — Inspection" },
    ],
  },

  explorer: {
    heading: "Kweli works across every trade workflow.",
    lines: [
      {
        key: "export-shipment",
        label: "Export Shipment",
        icon: "Ship",
        art: "Vol. 2 · Trade — Export Shipment",
        explanation: "Shipping instructions and packing lists move from exporters into every shipment.",
        documents: [
          { name: "Shipping Instruction", issuer: "Exporter" },
          { name: "Packing List", issuer: "Exporter" },
        ],
      },
      {
        key: "certificate-of-origin",
        label: "Certificate of Origin",
        icon: "Award",
        art: "Vol. 2 · Trade — Certificate of Origin",
        explanation: "Certificates of origin move from the chamber of commerce or exporter into every customs decision.",
        documents: [{ name: "Certificate of Origin", issuer: "Chamber of Commerce or Exporter" }],
      },
      {
        key: "customs",
        label: "Customs",
        icon: "Building2",
        art: "Vol. 2 · Trade — Customs Clearance",
        explanation: "Declarations and permits move between customs agents and authorities into every clearance decision.",
        documents: [
          { name: "Customs Declaration", issuer: "Customs Agent" },
          { name: "Import or Export Permit", issuer: "Customs Authority" },
        ],
      },
      {
        key: "inspection",
        label: "Inspection",
        icon: "FileSearch",
        art: "Vol. 2 · Trade — Inspection",
        explanation: "Inspection and quality certificates move from inspection companies into every shipment release.",
        documents: [
          { name: "Inspection Certificate", issuer: "Inspection Company" },
          { name: "Quality Certificate", issuer: "Inspection Company" },
        ],
      },
      {
        key: "warehouse",
        label: "Warehouse",
        icon: "Warehouse",
        art: "Vol. 2 · Trade — Warehouse",
        explanation: "Warehouse receipts move from operators into every storage or financing decision.",
        documents: [{ name: "Warehouse Receipt", issuer: "Warehouse Operator" }],
      },
      {
        key: "bill-of-lading",
        label: "Bill of Lading",
        icon: "FileCheck2",
        art: "Vol. 2 · Trade — Bill of Lading",
        explanation: "Bills of lading move from shipping lines into every cargo release.",
        documents: [{ name: "Bill of Lading", issuer: "Shipping Line" }],
      },
      {
        key: "cold-chain",
        label: "Cold Chain",
        icon: "Snowflake",
        art: "Vol. 2 · Trade — Cold Chain",
        explanation: "Temperature logs and certificates move from logistics providers into every cold-chain shipment.",
        documents: [
          { name: "Temperature Log", issuer: "Logistics Provider" },
          { name: "Cold Chain Certificate", issuer: "Inspection Company" },
        ],
      },
      {
        key: "importer",
        label: "Importer",
        icon: "Anchor",
        art: "Vol. 2 · Trade — Importer",
        explanation: "Permits and purchase orders move between customs and importers into every intake decision.",
        documents: [
          { name: "Import Permit", issuer: "Customs Authority" },
          { name: "Purchase Order", issuer: "Importer" },
        ],
      },
      {
        key: "exporter",
        label: "Exporter",
        icon: "Truck",
        art: "Vol. 2 · Trade — Exporter",
        explanation: "Invoices and licences move from exporters and government into every export decision.",
        documents: [
          { name: "Commercial Invoice", issuer: "Exporter" },
          { name: "Export Licence", issuer: "Government" },
        ],
      },
    ],
  },

  journey: {
    heading: "How a trade document moves from exporter to importer.",
    steps: [
      { icon: Truck, label: "Exporter" },
      { icon: FileSearch, label: "Inspection" },
      { icon: Anchor, label: "Origin" },
      { icon: Ship, label: "Shipping" },
      { icon: Building2, label: "Customs" },
      { icon: BadgeCheck, label: "Importer" },
    ],
    footnote: "Kweli does not clear a shipment and does not assess the quality of the goods described.",
  },

  businessImpact: {
    heading: "From a phone call to a cleared shipment.",
    today: [
      "Manual document checks at each border",
      "Phone or email confirmation with issuers",
      "Delays at customs",
      "Inconsistent document versions",
    ],
    withKweli: [
      "Independent document verification",
      "Faster customs clearance",
      "Stronger audit trail",
      "Detection of altered or unmatched documents",
    ],
  },

  pilot: {
    heading: "A focused pilot, not a customs-wide overhaul.",
    steps: [
      { label: "Choose one document type" },
      { label: "Onboard a manageable group of exporters" },
      { label: "Train one trade operations team" },
      { label: "Measure compliance, exceptions, handling time and cycle time" },
    ],
  },

  cta: {
    heading: "Ready to start with one document type?",
    supportingCopy: "Begin with certificates of origin and expand across shipping and customs.",
  },
};
