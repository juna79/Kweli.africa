// Generates premium-looking, single-page fictional demonstration PDFs for
// the Verification Demo's sample document library - letterhead, reference
// numbers, tables, signature lines, a seal, and a small pseudo-QR mark, all
// drawn with plain PDF vector/text primitives (no external assets/fonts).
// Every document carries a "Fictional demonstration document" footer.
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "sample-documents");
mkdirSync(outDir, { recursive: true });

// ---------- low-level PDF drawing helpers ----------

// Approximate Helvetica/Times widths (per 1000 em units). Good enough for
// centering/right-aligning text in a generated demo document.
const CHAR_W = {
  default: 556,
  space: 278,
  narrow: "iIl.,:;'!|".split(""),
  wide: "MWmw".split(""),
};
function charWidth(ch, bold) {
  if (ch === " ") return CHAR_W.space;
  if (CHAR_W.narrow.includes(ch)) return 260;
  if (CHAR_W.wide.includes(ch)) return 900;
  if (/[A-Z]/.test(ch)) return bold ? 700 : 667;
  if (/[0-9]/.test(ch)) return 556;
  return bold ? 600 : 500;
}
function measure(str, size, bold = false) {
  let w = 0;
  for (const ch of str) w += charWidth(ch, bold);
  return (w / 1000) * size;
}
function esc(s) {
  return String(s).replace(/([()\\])/g, "\\$1");
}

function makePage() {
  const ops = [];
  return {
    ops,
    setFill(r, g, b) {
      ops.push(`${r} ${g} ${b} rg`);
    },
    setStroke(r, g, b) {
      ops.push(`${r} ${g} ${b} RG`);
    },
    rect(x, y, w, h, { mode = "S", lineWidth = 1 } = {}) {
      ops.push(`${lineWidth} w`);
      ops.push(`${x} ${y} ${w} ${h} re ${mode}`);
    },
    line(x1, y1, x2, y2, { lineWidth = 1 } = {}) {
      ops.push(`${lineWidth} w`);
      ops.push(`${x1} ${y1} m ${x2} ${y2} l S`);
    },
    circle(cx, cy, r, { mode = "S", lineWidth = 1 } = {}) {
      const k = 0.5523 * r;
      ops.push(`${lineWidth} w`);
      ops.push(
        `${cx + r} ${cy} m ` +
          `${cx + r} ${cy + k} ${cx + k} ${cy + r} ${cx} ${cy + r} c ` +
          `${cx - k} ${cy + r} ${cx - r} ${cy + k} ${cx - r} ${cy} c ` +
          `${cx - r} ${cy - k} ${cx - k} ${cy - r} ${cx} ${cy - r} c ` +
          `${cx + k} ${cy - r} ${cx + r} ${cy - k} ${cx + r} ${cy} c ${mode}`
      );
    },
    text(x, y, size, str, { font = "F1", align = "left", bold = false } = {}) {
      let tx = x;
      if (align === "center") tx = x - measure(str, size, bold) / 2;
      if (align === "right") tx = x - measure(str, size, bold);
      ops.push(`BT /${font} ${size} Tf 1 0 0 1 ${tx.toFixed(2)} ${y} Tm (${esc(str)}) Tj ET`);
    },
    qr(x, y, size, seed) {
      const n = 6;
      const cell = size / n;
      let seedNum = 0;
      for (const ch of seed) seedNum = (seedNum * 31 + ch.charCodeAt(0)) >>> 0;
      for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
          let v = (seedNum ^ Math.imul(row + 1, 73856093) ^ Math.imul(col + 1, 19349663)) >>> 0;
          v = Math.imul(v ^ (v >>> 16), 0x45d9f3b);
          v = Math.imul(v ^ (v >>> 16), 0x45d9f3b);
          v = (v ^ (v >>> 16)) >>> 0;
          if (v & 1) {
            this.rect(x + col * cell, y + row * cell, cell, cell, { mode: "f" });
          }
        }
      }
    },
  };
}

function buildPdf(pageBuilderFn) {
  const page = makePage();
  page.setFill(0, 0, 0);
  page.setStroke(0, 0, 0);
  pageBuilderFn(page);
  const content = page.ops.join("\n") + "\n";

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
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R /F4 7 0 R /F5 8 0 R >> >> /MediaBox [0 0 612 792] /Contents 9 0 R >>\nendobj\n"
  );
  objOffsets[4] = offset;
  push("4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n");
  objOffsets[5] = offset;
  push("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n");
  objOffsets[6] = offset;
  push("6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman >>\nendobj\n");
  objOffsets[7] = offset;
  push("7 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Times-Bold >>\nendobj\n");
  objOffsets[8] = offset;
  push("8 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>\nendobj\n");

  const streamContent = content;
  const streamLen = Buffer.byteLength(streamContent, "latin1");
  objOffsets[9] = offset;
  push(`9 0 obj\n<< /Length ${streamLen} >>\nstream\n${streamContent}endstream\nendobj\n`);

  const xrefOffset = offset;
  let xref = "xref\n0 10\n0000000000 65535 f \n";
  for (let i = 1; i <= 9; i++) {
    xref += String(objOffsets[i]).padStart(10, "0") + " 00000 n \n";
  }
  push(xref);
  push(`trailer\n<< /Size 10 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);

  return Buffer.from(parts.join(""), "latin1");
}

// ---------- shared chrome: letterhead, footer, seal, signatures ----------

const PAPER = [0.965, 0.958, 0.933];
const INK = [0.11, 0.11, 0.13];
const MUTED = [0.42, 0.42, 0.46];

function drawLetterhead(p, { orgName, tagline, accent, monogram, title, refNumber, date }) {
  p.setFill(...PAPER);
  p.rect(0, 0, 612, 792, { mode: "f" });

  p.setStroke(...accent);
  p.setFill(...accent);
  p.circle(56, 730, 20, { mode: "S", lineWidth: 1.5 });
  p.setFill(...accent);
  p.text(56, 724, 16, monogram, { font: "F2", align: "center", bold: true });

  p.setFill(...INK);
  p.text(86, 736, 15, orgName, { font: "F2", bold: true });
  p.setFill(...MUTED);
  p.text(86, 722, 9, tagline, { font: "F5" });

  p.setFill(...INK);
  p.text(542, 736, 11, title, { font: "F2", align: "right", bold: true });
  p.setFill(...MUTED);
  p.text(542, 722, 9, `Ref: ${refNumber}`, { font: "F1", align: "right" });
  p.text(542, 710, 9, date, { font: "F1", align: "right" });

  p.setStroke(...accent);
  p.line(56, 698, 556, 698, { lineWidth: 1.5 });
}

function drawFooter(p, { accent, refNumber }) {
  p.setStroke(...accent);
  p.line(56, 70, 556, 70, { lineWidth: 0.75 });
  p.setFill(...MUTED);
  p.text(56, 56, 8, "Fictional demonstration document - created for Kweli Website V3.", {
    font: "F5",
  });
  p.text(56, 45, 8, "It does not represent a real organisation, person, or transaction.", {
    font: "F5",
  });
  p.qr(532, 34, 22, refNumber);
}

function drawSeal(p, { x, y, accent, code }) {
  const r = 32;
  p.setStroke(...accent);
  p.circle(x, y, r, { mode: "S", lineWidth: 1.5 });
  p.circle(x, y, r - 5, { mode: "S", lineWidth: 0.75 });
  p.setFill(...accent);
  const maxWidth = (r - 5) * 1.6;
  let codeSize = 9;
  while (measure(code, codeSize, true) > maxWidth && codeSize > 5) codeSize -= 1;
  p.text(x, y + 7, codeSize, code, { font: "F2", align: "center", bold: true });
  p.text(x, y - 6, 6, "AUTHENTIC", { font: "F1", align: "center" });
}

function drawSignatures(p, y, accent, labels) {
  p.setStroke(...MUTED);
  p.line(56, y, 226, y, { lineWidth: 0.75 });
  p.line(300, y, 470, y, { lineWidth: 0.75 });
  p.setFill(...MUTED);
  p.text(56, y - 12, 8, labels[0], { font: "F1" });
  p.text(300, y - 12, 8, labels[1], { font: "F1" });
  drawSeal(p, { x: 500, y: y + 36, accent, code: labels[2] ?? "SEAL" });
}

function drawFieldGroup(p, x, y, heading, fields, accent) {
  p.setFill(...accent);
  p.text(x, y, 9, heading.toUpperCase(), { font: "F2", bold: true });
  let cy = y - 16;
  for (const [label, value] of fields) {
    p.setFill(...MUTED);
    p.text(x, cy, 8, label, { font: "F1" });
    p.setFill(...INK);
    p.text(x, cy - 11, 10, value, { font: "F1" });
    cy -= 28;
  }
  return cy;
}

function drawTable(p, x, y, w, headers, rows, totals, accent) {
  const colW = headers.map((h) => h.w);
  p.setFill(...accent);
  p.rect(x, y - 18, w, 18, { mode: "f" });
  p.setFill(1, 1, 1);
  let cx = x + 6;
  headers.forEach((h, i) => {
    p.text(cx, y - 12, 8, h.label, { font: "F2", bold: true, align: h.align ?? "left" });
    cx += colW[i];
  });

  let ry = y - 18;
  p.setStroke(0.8, 0.8, 0.78);
  rows.forEach((row) => {
    ry -= 20;
    p.line(x, ry, x + w, ry, { lineWidth: 0.5 });
    let cx2 = x + 6;
    row.forEach((cell, i) => {
      p.setFill(...INK);
      const alignRight = headers[i].align === "right";
      p.text(alignRight ? cx2 + colW[i] - 12 : cx2, ry + 6, 9, String(cell), {
        font: "F1",
        align: headers[i].align ?? "left",
      });
      cx2 += colW[i];
    });
  });

  ry -= 10;
  p.setStroke(...accent);
  p.line(x, ry, x + w, ry, { lineWidth: 1 });
  totals.forEach(([label, value], i) => {
    ry -= 16;
    p.setFill(...MUTED);
    p.text(x + w - 160, ry, 9, label, { font: "F1" });
    p.setFill(i === totals.length - 1 ? accent : INK);
    p.text(x + w - 12, ry, 10, value, {
      font: i === totals.length - 1 ? "F2" : "F1",
      bold: i === totals.length - 1,
      align: "right",
    });
  });
  return ry - 20;
}

// ---------- template: business letterhead document ----------

function buildBusinessDoc(doc) {
  return (p) => {
    drawLetterhead(p, doc);
    let groupsBottom = 664;
    const colX = [56, 320];
    doc.fieldGroups.forEach((group, i) => {
      const bottom = drawFieldGroup(p, colX[i % 2], groupsBottom, group.heading, group.fields, doc.accent);
      if (i % 2 === 1) groupsBottom = Math.min(groupsBottom, bottom);
    });

    let cursorY = 792 - 300;
    if (doc.table) {
      cursorY = drawTable(p, 56, cursorY, 500, doc.table.headers, doc.table.rows, doc.table.totals, doc.accent);
    }
    if (doc.notes) {
      p.setFill(...MUTED);
      p.text(56, cursorY - 10, 8, "NOTES", { font: "F2", bold: true });
      p.setFill(...INK);
      p.text(56, cursorY - 24, 9, doc.notes, { font: "F1" });
    }

    drawSignatures(p, 130, doc.accent, doc.signatureLabels);
    drawFooter(p, doc);
  };
}

// ---------- template: formal certificate ----------

function buildCertificateDoc(doc) {
  return (p) => {
    p.setFill(...PAPER);
    p.rect(0, 0, 612, 792, { mode: "f" });
    p.setStroke(...doc.accent);
    p.rect(30, 30, 552, 732, { mode: "S", lineWidth: 2 });
    p.rect(38, 38, 536, 716, { mode: "S", lineWidth: 0.5 });

    p.setStroke(...doc.accent);
    p.circle(306, 700, 24, { mode: "S", lineWidth: 1.5 });
    p.setFill(...doc.accent);
    p.text(306, 694, 18, doc.monogram, { font: "F4", align: "center", bold: true });

    p.setFill(...INK);
    p.text(306, 650, 22, doc.orgName, { font: "F4", align: "center", bold: true });
    p.setFill(...MUTED);
    p.text(306, 634, 10, doc.tagline, { font: "F3", align: "center" });

    p.setFill(...doc.accent);
    p.text(306, 590, 15, doc.title.toUpperCase(), { font: "F4", align: "center", bold: true });

    p.setFill(...INK);
    p.text(306, 550, 11, doc.certifyLine, { font: "F3", align: "center" });
    p.setFill(...doc.accent);
    p.text(306, 512, 24, doc.recipient, { font: "F4", align: "center", bold: true });
    p.setFill(...INK);
    p.text(306, 480, 11, doc.awardLine, { font: "F3", align: "center" });
    if (doc.awardLine2) {
      p.text(306, 460, 11, doc.awardLine2, { font: "F3", align: "center" });
    }

    p.setFill(...MUTED);
    p.text(306, 420, 9, doc.date, { font: "F1", align: "center" });
    p.text(306, 406, 9, `Ref: ${doc.refNumber}`, { font: "F1", align: "center" });

    drawSignatures(p, 150, doc.accent, doc.signatureLabels);
    drawFooter(p, doc);
  };
}

// ---------- document data ----------

const NAVY = [0.11, 0.16, 0.32];
const FOREST = [0.13, 0.32, 0.22];
const BURGUNDY = [0.42, 0.13, 0.16];
const TEAL = [0.09, 0.32, 0.34];
const SLATE_BLUE = [0.16, 0.22, 0.4];
const GOLD = [0.6, 0.46, 0.09];

const businessDocs = [
  {
    id: "repair-estimate",
    orgName: "Northline Motors",
    tagline: "Auto Body & Repair Specialists",
    accent: NAVY,
    monogram: "NM",
    title: "REPAIR ESTIMATE",
    refNumber: "NLM-2026-04471",
    date: "2 April 2026",
    fieldGroups: [
      {
        heading: "Customer Details",
        fields: [
          ["Name", "David Kiprotich"],
          ["Phone", "+254 712 004 471"],
          ["Vehicle", "Toyota Hilux 2019"],
        ],
      },
      {
        heading: "Claim Details",
        fields: [
          ["Policy No.", "PL-88213"],
          ["Odometer", "64,210 km"],
          ["Assessor", "B. Wanjiru"],
        ],
      },
    ],
    table: {
      headers: [
        { label: "Description", w: 260 },
        { label: "Parts", w: 90, align: "right" },
        { label: "Labour", w: 80, align: "right" },
        { label: "Total", w: 70, align: "right" },
      ],
      rows: [
        ["Front bumper replacement", "28,500", "4,000", "32,500"],
        ["Headlamp assembly (L)", "18,200", "1,500", "19,700"],
        ["Panel respray", "9,000", "6,500", "15,500"],
      ],
      totals: [
        ["Subtotal", "67,700"],
        ["VAT (16%)", "10,832"],
        ["Total (KES)", "78,532"],
      ],
    },
    signatureLabels: ["Authorised Signature", "Date", "NLM"],
  },
  {
    id: "repair-estimate-final",
    orgName: "Northline Motors",
    tagline: "Auto Body & Repair Specialists",
    accent: NAVY,
    monogram: "NM",
    title: "REPAIR ESTIMATE (FINAL)",
    refNumber: "NLM-2026-04471-F",
    date: "9 April 2026",
    fieldGroups: [
      {
        heading: "Customer Details",
        fields: [
          ["Name", "David Kiprotich"],
          ["Phone", "+254 712 004 471"],
          ["Vehicle", "Toyota Hilux 2019"],
        ],
      },
      {
        heading: "Claim Details",
        fields: [
          ["Policy No.", "PL-88213"],
          ["Odometer", "64,210 km"],
          ["Assessor", "B. Wanjiru"],
        ],
      },
    ],
    table: {
      headers: [
        { label: "Description", w: 260 },
        { label: "Parts", w: 90, align: "right" },
        { label: "Labour", w: 80, align: "right" },
        { label: "Total", w: 70, align: "right" },
      ],
      rows: [
        ["Front bumper replacement", "28,500", "4,000", "32,500"],
        ["Headlamp assembly (L)", "18,200", "1,500", "19,700"],
        ["Panel respray + clear coat", "12,400", "8,200", "20,600"],
      ],
      totals: [
        ["Subtotal", "72,800"],
        ["VAT (16%)", "11,648"],
        ["Total (KES)", "84,448"],
      ],
    },
    signatureLabels: ["Authorised Signature", "Date", "NLM"],
  },
  {
    id: "repair-estimate-copy",
    orgName: "Northline Motors",
    tagline: "Auto Body & Repair Specialists",
    accent: NAVY,
    monogram: "NM",
    title: "REPAIR ESTIMATE (COPY)",
    refNumber: "NLM-2026-04471-C",
    date: "2 April 2026",
    fieldGroups: [
      {
        heading: "Customer Details",
        fields: [
          ["Name", "David Kiprotich"],
          ["Phone", "+254 712 004 471"],
          ["Vehicle", "Toyota Hilux 2019"],
        ],
      },
      {
        heading: "Claim Details",
        fields: [
          ["Policy No.", "PL-88213"],
          ["Odometer", "64,210 km"],
          ["Assessor", "B. Wanjiru"],
        ],
      },
    ],
    table: {
      headers: [
        { label: "Description", w: 260 },
        { label: "Parts", w: 90, align: "right" },
        { label: "Labour", w: 80, align: "right" },
        { label: "Total", w: 70, align: "right" },
      ],
      rows: [
        ["Front bumper replacement", "28,500", "4,000", "32,500"],
        ["Headlamp assembly (L)", "18,200", "1,500", "19,700"],
        ["Panel respray", "9,000", "6,500", "15,500"],
      ],
      totals: [
        ["Subtotal", "67,700"],
        ["VAT (16%)", "10,832"],
        ["Total (KES)", "78,532"],
      ],
    },
    signatureLabels: ["Authorised Signature", "Date", "NLM"],
  },
  {
    id: "insurance-claim",
    orgName: "Turaco Underwriters",
    tagline: "General Insurance",
    accent: BURGUNDY,
    monogram: "TU",
    title: "INSURANCE CLAIM FORM",
    refNumber: "TU-CLM-2026-15588",
    date: "9 May 2026",
    fieldGroups: [
      {
        heading: "Policyholder",
        fields: [
          ["Name", "Grace Achieng"],
          ["Policy No.", "TU-88213-M"],
          ["Cover Type", "Comprehensive"],
        ],
      },
      {
        heading: "Incident",
        fields: [
          ["Date of Loss", "2 May 2026"],
          ["Location", "Mombasa Road, Nairobi"],
          ["Reported By", "G. Achieng"],
        ],
      },
    ],
    table: {
      headers: [
        { label: "Item", w: 300 },
        { label: "Est. Cost", w: 100, align: "right" },
        { label: "Approved", w: 100, align: "right" },
      ],
      rows: [
        ["Windscreen replacement", "22,000", "22,000"],
        ["Side mirror (R)", "6,500", "6,500"],
        ["Diagnostics & labour", "4,000", "4,000"],
      ],
      totals: [["Total Approved (KES)", "32,500"]],
    },
    signatureLabels: ["Claims Officer", "Date", "TU"],
  },
  {
    id: "lab-report",
    orgName: "Verstlab Diagnostics",
    tagline: "Clinical & Environmental Testing",
    accent: TEAL,
    monogram: "VD",
    title: "LABORATORY REPORT",
    refNumber: "VD-LAB-2026-30215",
    date: "28 April 2026",
    fieldGroups: [
      {
        heading: "Sample Information",
        fields: [
          ["Sample ID", "VD-30215"],
          ["Type", "Water - Borehole"],
          ["Collected", "26 April 2026"],
        ],
      },
      {
        heading: "Client",
        fields: [
          ["Requested By", "Amara Farms Ltd"],
          ["Location", "Naivasha"],
          ["Analyst", "Dr. J. Otieno"],
        ],
      },
    ],
    table: {
      headers: [
        { label: "Parameter", w: 240 },
        { label: "Result", w: 110, align: "right" },
        { label: "Limit", w: 100, align: "right" },
      ],
      rows: [
        ["pH", "7.2", "6.5-8.5"],
        ["Turbidity (NTU)", "1.4", "< 5.0"],
        ["Coliform (CFU/mL)", "0", "0"],
      ],
      totals: [["Overall Result", "PASS"]],
    },
    signatureLabels: ["Laboratory Manager", "Date", "VD"],
  },
  {
    id: "lab-report-scan",
    orgName: "Verstlab Diagnostics",
    tagline: "Clinical & Environmental Testing",
    accent: TEAL,
    monogram: "VD",
    title: "LABORATORY REPORT (SCAN)",
    refNumber: "VD-LAB-2026-30215-S",
    date: "28 April 2026",
    fieldGroups: [
      {
        heading: "Sample Information",
        fields: [
          ["Sample ID", "VD-30215"],
          ["Type", "Water - Borehole"],
          ["Collected", "26 April 2026"],
        ],
      },
      {
        heading: "Client",
        fields: [
          ["Requested By", "Amara Farms Ltd"],
          ["Location", "Naivasha"],
          ["Analyst", "Dr. J. Otieno"],
        ],
      },
    ],
    table: {
      headers: [
        { label: "Parameter", w: 240 },
        { label: "Result", w: 110, align: "right" },
        { label: "Limit", w: 100, align: "right" },
      ],
      rows: [
        ["pH", "7.2", "6.5-8.5"],
        ["Turbidity (NTU)", "1.4", "< 5.0"],
        ["Coliform (CFU/mL)", "0", "0"],
      ],
      totals: [["Overall Result", "PASS"]],
    },
    signatureLabels: ["Laboratory Manager", "Date", "VD"],
  },
  {
    id: "shipping-manifest",
    orgName: "Meridian Freight Lines",
    tagline: "International Freight & Logistics",
    accent: SLATE_BLUE,
    monogram: "MF",
    title: "SHIPPING MANIFEST",
    refNumber: "MFL-2026-77042",
    date: "1 June 2026",
    fieldGroups: [
      {
        heading: "Shipper",
        fields: [
          ["Company", "Cropnuts Exports Ltd"],
          ["Origin", "Mombasa, Kenya"],
          ["Vessel", "MV Kilimanjaro"],
        ],
      },
      {
        heading: "Consignee",
        fields: [
          ["Company", "Global Trade Partners"],
          ["Destination", "Rotterdam, NL"],
          ["ETA", "22 June 2026"],
        ],
      },
    ],
    table: {
      headers: [
        { label: "Cargo Description", w: 260 },
        { label: "Packages", w: 100, align: "right" },
        { label: "Weight (kg)", w: 100, align: "right" },
      ],
      rows: [
        ["Macadamia Nuts - Shelled", "420", "10,500"],
        ["Avocado (Hass)", "180", "4,320"],
      ],
      totals: [["Total Weight (kg)", "14,820"]],
    },
    signatureLabels: ["Shipping Agent", "Date", "MFL"],
  },
  {
    id: "building-permit",
    orgName: "County Planning Authority",
    tagline: "Department of Urban Development",
    accent: FOREST,
    monogram: "CP",
    title: "BUILDING PERMIT",
    refNumber: "CPA-PMT-2026-12290",
    date: "18 May 2026",
    fieldGroups: [
      {
        heading: "Applicant",
        fields: [
          ["Name", "Alpha Developers Ltd"],
          ["Plot No.", "LR 4562/18"],
          ["Location", "Ruaka, Kiambu"],
        ],
      },
      {
        heading: "Project",
        fields: [
          ["Type", "5-Storey Apartments"],
          ["Approved Plans", "CPA/PLN/2026/330"],
          ["Zoning", "Residential"],
        ],
      },
    ],
    notes:
      "Permission is granted to carry out the building works described above,\nsubject to the conditions set out in the approved plans on file.",
    signatureLabels: ["Authorised Officer", "Date", "CPA"],
  },
  {
    id: "bank-guarantee",
    orgName: "Zenith Commercial Bank",
    tagline: "Corporate & Trade Finance",
    accent: GOLD,
    monogram: "ZB",
    title: "BANK GUARANTEE",
    refNumber: "ZCB-BG-2026-99031",
    date: "22 February 2026",
    fieldGroups: [
      {
        heading: "Beneficiary",
        fields: [
          ["Name", "Kenya Ports Authority"],
          ["Amount", "KES 4,500,000"],
          ["Validity", "12 Months"],
        ],
      },
      {
        heading: "Applicant",
        fields: [
          ["Company", "Coastal Traders Ltd"],
          ["Account No.", "ZCB-661029"],
          ["Branch", "Mombasa CBD"],
        ],
      },
    ],
    notes:
      "This guarantee is issued unconditionally in favour of the beneficiary\nnamed above, subject to the bank's standard terms of issue.",
    signatureLabels: ["Branch Manager", "Date", "ZCB"],
  },
];

const certificateDocs = [
  {
    id: "degree-cert",
    orgName: "Kweli University",
    tagline: "Excellence - Integrity - Impact",
    accent: GOLD,
    monogram: "K",
    title: "Degree Certificate",
    refNumber: "KU/2026/BSCT/1147",
    date: "17 March 2026",
    certifyLine: "This is to certify that",
    recipient: "Amina N. Odhiambo",
    awardLine: "has been awarded the degree of",
    awardLine2: "Bachelor of Science in Information Technology",
    signatureLabels: ["Registrar", "Vice Chancellor", "KU"],
  },
  {
    id: "degree-cert-final",
    orgName: "Kweli University",
    tagline: "Excellence - Integrity - Impact",
    accent: GOLD,
    monogram: "K",
    title: "Degree Certificate (Final)",
    refNumber: "KU/2026/BSCT/1147-F",
    date: "24 March 2026",
    certifyLine: "This is to certify that",
    recipient: "Amina N. Odhiambo",
    awardLine: "has been awarded the degree of",
    awardLine2: "Bachelor of Science in Information Technology",
    signatureLabels: ["Registrar", "Vice Chancellor", "KU"],
  },
  {
    id: "degree-cert-scan",
    orgName: "Kweli University",
    tagline: "Excellence - Integrity - Impact",
    accent: GOLD,
    monogram: "K",
    title: "Degree Certificate (Scanned Copy)",
    refNumber: "KU/2026/BSCT/1147-S",
    date: "17 March 2026",
    certifyLine: "This is to certify that",
    recipient: "Amina N. Odhiambo",
    awardLine: "has been awarded the degree of",
    awardLine2: "Bachelor of Science in Information Technology",
    signatureLabels: ["Registrar", "Vice Chancellor", "KU"],
  },
  {
    id: "organic-cert",
    orgName: "Cropnuts Certification Body",
    tagline: "Organic & Sustainable Agriculture",
    accent: FOREST,
    monogram: "C",
    title: "Organic Certificate",
    refNumber: "CCB-ORG-2026-05541",
    date: "14 January 2026",
    certifyLine: "This certifies that the produce of",
    recipient: "Amara Farms Ltd",
    awardLine: "meets the requirements for",
    awardLine2: "Certified Organic Produce - Macadamia & Avocado",
    signatureLabels: ["Certification Officer", "Date", "CCB"],
  },
  {
    id: "organic-cert-updated",
    orgName: "Cropnuts Certification Body",
    tagline: "Organic & Sustainable Agriculture",
    accent: FOREST,
    monogram: "C",
    title: "Organic Certificate (Updated)",
    refNumber: "CCB-ORG-2026-05541-U",
    date: "3 February 2026",
    certifyLine: "This certifies that the produce of",
    recipient: "Amara Farms Ltd",
    awardLine: "meets the requirements for",
    awardLine2: "Certified Organic Produce - Macadamia & Avocado",
    signatureLabels: ["Certification Officer", "Date", "CCB"],
  },
];

const results = [];

for (const doc of businessDocs) {
  const buf = buildPdf(buildBusinessDoc(doc));
  writeFileSync(path.join(outDir, `${doc.id}.pdf`), buf);
  results.push({ id: doc.id, sha256: createHash("sha256").update(buf).digest("hex"), size: buf.length });
}

for (const doc of certificateDocs) {
  const buf = buildPdf(buildCertificateDoc(doc));
  writeFileSync(path.join(outDir, `${doc.id}.pdf`), buf);
  results.push({ id: doc.id, sha256: createHash("sha256").update(buf).digest("hex"), size: buf.length });
}

console.log(JSON.stringify(results, null, 2));
