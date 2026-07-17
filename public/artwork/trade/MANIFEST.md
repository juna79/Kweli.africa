# Trade page — Art Book asset manifest

Source: Kweli Art Book Volume 2 (Industries), the eight-frame row captioned
for Trade (Export Shipment, Certificate of Origin, Customs Clearance,
Inspection, Warehouse, Bill of Lading, Cold Chain, Importer & Exporter).
Not yet exported — every slot renders as an `ArtFrame` placeholder.

## Explorer — one frame per workflow

| Workflow | Export as | Note |
|---|---|---|
| Export Shipment | `export-shipment.webp` | |
| Certificate of Origin | `certificate-of-origin.webp` | |
| Customs | `customs-clearance.webp` | |
| Inspection | `inspection.webp` | |
| Warehouse | `warehouse.webp` | |
| Bill of Lading | `bill-of-lading.webp` | |
| Cold Chain | `cold-chain.webp` | |
| Importer | `importer.webp` | Source frame is combined "Importer & Exporter" — may need splitting |
| Exporter | `exporter.webp` | Source frame is combined "Importer & Exporter" — may need splitting |

## Ecosystem tiles

Exporter → Exporter, Importer → Importer, Customs → Customs Clearance,
Shipping Line → Export Shipment, Warehouse → Warehouse, Inspector →
Inspection — all direct reuses of the Explorer frames above.

## Hero

No single frame communicates multiple trade workflows at once. Reserved as
`hero-trade.webp` pending art direction's pick or a new composite.
