import { Truck, Anchor, Building2, Ship, Warehouse, FileSearch } from "lucide-react";
import type { IndustryPageContent } from "@/lib/industryPageTypes";

export const trade: IndustryPageContent = {
  slug: "trade",
  name: "Trade",

  hero: {
    headline: "International trade depends on trusted paperwork.",
    supportingCopy:
      "Certificates of origin, inspection certificates, bills of lading and customs declarations move between exporters, inspectors, shipping lines and customs — and every one shapes a clearance decision.",
    art: "Vol. 2 · Hero Composite (Trade and Supply Chain)",
    src: "/artwork/trade/hero-trade.jpg",
  },

  ecosystem: {
    heading: "From the warehouse to the wharf, the same trust layer applies.",
    tiles: [
      { icon: Truck, label: "Exporter", art: "Vol. 2 · Trade — Exporter", src: "/artwork/trade/exporter.jpg" },
      { icon: Anchor, label: "Importer", art: "Vol. 2 · Trade — Importer", src: "/artwork/trade/importer.jpg" },
      { icon: Building2, label: "Customs", art: "Vol. 2 · Trade — Customs Clearance", src: "/artwork/trade/customs.jpg" },
      { icon: Ship, label: "Shipping Line", art: "Vol. 2 · Trade — Export Shipment", src: "/artwork/trade/export-shipment.jpg" },
      { icon: Warehouse, label: "Warehouse", art: "Vol. 2 · Trade — Warehouse", src: "/artwork/trade/warehouse.jpg" },
      { icon: FileSearch, label: "Inspector", art: "Vol. 2 · Trade — Inspection", src: "/artwork/trade/inspection.jpg" },
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
        src: "/artwork/trade/export-shipment.jpg",
        explanation: "Shipping instructions and packing lists move from exporters into every shipment.",
        documents: [
          { name: "Shipping Instruction", issuer: "Exporter" },
          { name: "Packing List", issuer: "Exporter" },
        ],
        journey: {
          heading: "How an export shipment moves from instruction to departure.",
          steps: [
            { icon: "Truck", label: "Exporter issues shipping instruction and packing list" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Shipping line receives documents" },
            { icon: "ShieldCheck", label: "Freight forwarder verifies" },
            { icon: "BadgeCheck", label: "Shipment proceeds" },
          ],
          footnote: "Kweli does not assess the condition or quantity of the goods described.",
        },
      },
      {
        key: "certificate-of-origin",
        label: "Certificate of Origin",
        icon: "Award",
        art: "Vol. 2 · Trade — Certificate of Origin",
        src: "/artwork/trade/certificate-of-origin.jpg",
        explanation: "Certificates of origin move from the chamber of commerce or exporter into every customs decision.",
        documents: [{ name: "Certificate of Origin", issuer: "Chamber of Commerce or Exporter" }],
        journey: {
          heading: "How a certificate of origin moves from issue to clearance.",
          steps: [
            { icon: "Award", label: "Chamber of commerce or exporter issues certificate" },
            { icon: "Fingerprint", label: "Certificate registered" },
            { icon: "Share2", label: "Importer or customs receives certificate" },
            { icon: "ShieldCheck", label: "Customs verifies" },
            { icon: "BadgeCheck", label: "Clearance proceeds" },
          ],
          footnote: "Kweli does not confirm the true country of origin, only that the certificate matches what was registered.",
        },
      },
      {
        key: "customs",
        label: "Customs",
        icon: "Building2",
        art: "Vol. 2 · Trade — Customs Clearance",
        src: "/artwork/trade/customs.jpg",
        explanation: "Declarations and permits move between customs agents and authorities into every clearance decision.",
        documents: [
          { name: "Customs Declaration", issuer: "Customs Agent" },
          { name: "Import or Export Permit", issuer: "Customs Authority" },
        ],
        journey: {
          heading: "How a customs declaration moves from filing to release.",
          steps: [
            { icon: "Briefcase", label: "Customs agent files declaration" },
            { icon: "Building2", label: "Customs authority issues permit" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Customs office receives documents" },
            { icon: "ShieldCheck", label: "Officer verifies" },
            { icon: "BadgeCheck", label: "Goods released" },
          ],
          footnote: "Kweli does not assess whether duties owed have been correctly calculated.",
        },
      },
      {
        key: "inspection",
        label: "Inspection",
        icon: "FileSearch",
        art: "Vol. 2 · Trade — Inspection",
        src: "/artwork/trade/inspection.jpg",
        explanation: "Inspection and quality certificates move from inspection companies into every shipment release.",
        documents: [
          { name: "Inspection Certificate", issuer: "Inspection Company" },
          { name: "Quality Certificate", issuer: "Inspection Company" },
        ],
        journey: {
          heading: "How an inspection certificate moves from testing to release.",
          steps: [
            { icon: "FileSearch", label: "Inspection company completes inspection" },
            { icon: "FileCheck2", label: "Inspection and quality certificates issued" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Buyer or customs receives certificates" },
            { icon: "ShieldCheck", label: "Authenticity verified" },
            { icon: "BadgeCheck", label: "Shipment released" },
          ],
          footnote: "Kweli does not assess the quality of the goods, only whether the certificate matches what was registered.",
        },
      },
      {
        key: "warehouse",
        label: "Warehouse",
        icon: "Warehouse",
        art: "Vol. 2 · Trade — Warehouse",
        src: "/artwork/trade/warehouse.jpg",
        explanation: "Warehouse receipts move from operators into every storage or financing decision.",
        documents: [{ name: "Warehouse Receipt", issuer: "Warehouse Operator" }],
        journey: {
          heading: "How a warehouse receipt moves from storage to financing.",
          steps: [
            { icon: "Warehouse", label: "Warehouse operator issues receipt" },
            { icon: "Fingerprint", label: "Receipt registered" },
            { icon: "Share2", label: "Holder shares receipt" },
            { icon: "ShieldCheck", label: "Financier or buyer verifies" },
            { icon: "BadgeCheck", label: "Storage or financing decision proceeds" },
          ],
          footnote: "Kweli does not confirm the condition or quantity of goods held in storage.",
        },
      },
      {
        key: "bill-of-lading",
        label: "Bill of Lading",
        icon: "FileCheck2",
        art: "Vol. 2 · Trade — Bill of Lading",
        src: "/artwork/trade/bill-of-lading.jpg",
        explanation: "Bills of lading move from shipping lines into every cargo release.",
        documents: [{ name: "Bill of Lading", issuer: "Shipping Line" }],
        journey: {
          heading: "How a bill of lading moves from issue to cargo release.",
          steps: [
            { icon: "Ship", label: "Shipping line issues bill of lading" },
            { icon: "Fingerprint", label: "Document registered" },
            { icon: "Share2", label: "Consignee receives bill" },
            { icon: "ShieldCheck", label: "Carrier or customs verifies" },
            { icon: "BadgeCheck", label: "Cargo released" },
          ],
          footnote: "Kweli does not assess the condition of the cargo described.",
        },
      },
      {
        key: "cold-chain",
        label: "Cold Chain",
        icon: "Snowflake",
        art: "Vol. 2 · Trade — Cold Chain",
        src: "/artwork/trade/cold-chain.jpg",
        explanation: "Temperature logs and certificates move from logistics providers into every cold-chain shipment.",
        documents: [
          { name: "Temperature Log", issuer: "Logistics Provider" },
          { name: "Cold Chain Certificate", issuer: "Inspection Company" },
        ],
        journey: {
          heading: "How a cold chain record moves from log to acceptance.",
          steps: [
            { icon: "Snowflake", label: "Logistics provider records temperature log" },
            { icon: "FileCheck2", label: "Inspection company issues cold chain certificate" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Buyer receives documents" },
            { icon: "ShieldCheck", label: "Authenticity verified" },
            { icon: "BadgeCheck", label: "Shipment accepted" },
          ],
          footnote: "Kweli does not confirm the actual temperature the goods experienced, only that the recorded log matches what was registered.",
        },
      },
      {
        key: "importer",
        label: "Importer",
        icon: "Anchor",
        art: "Vol. 2 · Trade — Importer",
        src: "/artwork/trade/importer.jpg",
        explanation: "Permits and purchase orders move between customs and importers into every intake decision.",
        documents: [
          { name: "Import Permit", issuer: "Customs Authority" },
          { name: "Purchase Order", issuer: "Importer" },
        ],
        journey: {
          heading: "How an import moves from permit to intake.",
          steps: [
            { icon: "Anchor", label: "Customs authority issues import permit" },
            { icon: "FileCheck2", label: "Importer issues purchase order" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Supplier receives documents" },
            { icon: "ShieldCheck", label: "Customs verifies" },
            { icon: "BadgeCheck", label: "Intake proceeds" },
          ],
          footnote: "Kweli does not assess whether the import complies with regulatory requirements.",
        },
      },
      {
        key: "exporter",
        label: "Exporter",
        icon: "Truck",
        art: "Vol. 2 · Trade — Exporter",
        src: "/artwork/trade/exporter.jpg",
        explanation: "Invoices and licences move from exporters and government into every export decision.",
        documents: [
          { name: "Commercial Invoice", issuer: "Exporter" },
          { name: "Export Licence", issuer: "Government" },
        ],
        journey: {
          heading: "How an export moves from invoice to departure.",
          steps: [
            { icon: "Truck", label: "Exporter issues commercial invoice" },
            { icon: "Building2", label: "Government issues export licence" },
            { icon: "Fingerprint", label: "Documents registered" },
            { icon: "Share2", label: "Buyer or customs receives documents" },
            { icon: "ShieldCheck", label: "Authenticity verified" },
            { icon: "BadgeCheck", label: "Export proceeds" },
          ],
          footnote: "Kweli does not assess whether the export complies with regulatory requirements.",
        },
      },
    ],
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
    heading: "One workflow, proven in practice — not a customs-wide overhaul.",
    steps: [
      { label: "Start with one document type, such as certificates of origin" },
      { label: "Bring on a defined group of exporters" },
      { label: "Train the trade operations team who process it" },
      { label: "Track clearance time and exceptions at the border" },
    ],
  },

  cta: {
    heading: "Ready to bring verification into your trade documentation?",
    supportingCopy: "Begin with certificates of origin and expand across shipping and customs.",
  },
};
