// Generates minimal, valid single-page PDFs for the Verification Demo's
// sample document library, plus prints each file's SHA-256 so it can be
// pasted into src/lib/demoDocuments.ts. Fictional content only.
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "sample-documents");
mkdirSync(outDir, { recursive: true });

const docs = [
  { id: "degree-cert", title: "Degree Certificate", issuer: "Kweli University", docType: "Degree Certificate" },
  { id: "degree-cert-final", title: "Degree Certificate (Final)", issuer: "Kweli University", docType: "Degree Certificate" },
  { id: "degree-cert-scan", title: "Degree Certificate (Scanned Copy)", issuer: "Kweli University", docType: "Degree Certificate" },
  { id: "repair-estimate", title: "Repair Estimate", issuer: "Northline Motors", docType: "Repair Estimate" },
  { id: "repair-estimate-final", title: "Repair Estimate (Final)", issuer: "Northline Motors", docType: "Repair Estimate" },
  { id: "repair-estimate-copy", title: "Repair Estimate (Copy)", issuer: "Northline Motors", docType: "Repair Estimate" },
  { id: "insurance-claim", title: "Insurance Claim Form", issuer: "Turaco Underwriters", docType: "Insurance Claim Form" },
  { id: "lab-report", title: "Laboratory Report", issuer: "Verstlab Diagnostics", docType: "Laboratory Report" },
  { id: "lab-report-scan", title: "Laboratory Report (Scanned Copy)", issuer: "Verstlab Diagnostics", docType: "Laboratory Report" },
  { id: "organic-cert", title: "Organic Certificate", issuer: "Cropnuts Certification Body", docType: "Organic Certificate" },
  { id: "organic-cert-updated", title: "Organic Certificate (Updated)", issuer: "Cropnuts Certification Body", docType: "Organic Certificate" },
  { id: "shipping-manifest", title: "Shipping Manifest", issuer: "Meridian Freight Lines", docType: "Shipping Manifest" },
  { id: "building-permit", title: "Building Permit", issuer: "County Planning Authority", docType: "Building Permit" },
  { id: "bank-guarantee", title: "Bank Guarantee", issuer: "Zenith Commercial Bank", docType: "Bank Guarantee" },
];

function esc(s) {
  return s.replace(/([()\\])/g, "\\$1");
}

function buildContentStream({ title, issuer, docType }) {
  const lines = [
    "q 0.788 0.635 0.153 rg 72 745 468 3 re f Q",
    `BT /F1 20 Tf 72 700 Td (${esc(title)}) Tj ET`,
    `BT /F1 12 Tf 72 665 Td (Issuer: ${esc(issuer)}) Tj ET`,
    `BT /F1 12 Tf 72 645 Td (Document Type: ${esc(docType)}) Tj ET`,
    `BT /F1 10 Tf 72 90 Td (This is a fictional document created for demonstration purposes only.) Tj ET`,
    `BT /F1 10 Tf 72 76 Td (It does not represent a real organisation, person, or transaction.) Tj ET`,
  ];
  return lines.join("\n") + "\n";
}

function buildPdf(doc) {
  const parts = [];
  let offset = 0;
  const objOffsets = {};

  function push(str) {
    parts.push(str);
    offset += Buffer.byteLength(str, "latin1");
  }

  push("%PDF-1.4\n");

  objOffsets[1] = offset;
  push("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");

  objOffsets[2] = offset;
  push("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");

  objOffsets[3] = offset;
  push(
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 612 792] /Contents 5 0 R >>\nendobj\n"
  );

  objOffsets[4] = offset;
  push("4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n");

  const streamContent = buildContentStream(doc) + "\n";
  const streamLen = Buffer.byteLength(streamContent, "latin1");
  objOffsets[5] = offset;
  push(`5 0 obj\n<< /Length ${streamLen} >>\nstream\n${streamContent}endstream\nendobj\n`);

  const xrefOffset = offset;
  let xref = "xref\n0 6\n0000000000 65535 f \n";
  for (let i = 1; i <= 5; i++) {
    xref += String(objOffsets[i]).padStart(10, "0") + " 00000 n \n";
  }
  push(xref);
  push(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);

  return Buffer.from(parts.join(""), "latin1");
}

const results = [];
for (const doc of docs) {
  const buf = buildPdf(doc);
  const filePath = path.join(outDir, `${doc.id}.pdf`);
  writeFileSync(filePath, buf);
  const sha256 = createHash("sha256").update(buf).digest("hex");
  results.push({ id: doc.id, sha256, size: buf.length });
}

console.log(JSON.stringify(results, null, 2));
