# Insurance page — Art Book asset manifest

Source: Kweli Art Book Volume 2 (Industries). **Every slot on this page
is now fulfilled** — the last gap (Explorer — Medical) was filled by a
supplied "Medical Report" frame, and two mismatched reuses (Ecosystem —
Engineering Inspection, Ecosystem — Professional Assessment, Explorer —
Guarantees and Bonds) were replaced with their correct dedicated frames.

## Fulfilled slots

| Slot | File | Component |
|---|---|---|
| Hero | `hero-insurance.webp` | `IndustryHero` — supplied as a composite (multiple insurance lines + Kweli badge). Contains baked-in text ("VERIFIED. TRUSTED. EVERYWHERE." + Kweli wordmark) — used as supplied per explicit sign-off, not edited. |
| Ecosystem — Garage | `motor-repair.webp` | `IndustryEcosystem` |
| Ecosystem — Hospital | `medical-hospital.webp` | `IndustryEcosystem` |
| Ecosystem — Marine Operation | `marine-shipping.webp` | `IndustryEcosystem` |
| Ecosystem — Engineering Inspection | `engineering-inspection.webp` | `IndustryEcosystem` — dedicated frame, replaces the earlier `fire-inspection.webp` reuse |
| Ecosystem — Construction Project | `guarantees-construction.webp` | `IndustryEcosystem` |
| Ecosystem — Professional Assessment | `professional-assessment.webp` | `IndustryEcosystem` — dedicated frame, replaces the earlier `motor-assessment.webp` reuse |
| Explorer — Motor | `motor-claims-office.webp` | `IndustryExplorer` |
| Explorer — Medical | `medical-report.webp` | `IndustryExplorer` — previously the one confirmed gap, now filled |
| Explorer — Property and Fire | `fire-inspection.webp` (reused) | `IndustryExplorer` |
| Explorer — Marine | `marine-survey.webp` | `IndustryExplorer` |
| Explorer — Engineering | `engineering.webp` | `IndustryExplorer` — distinct from the Ecosystem "Engineering Inspection" tile above; different frame, correctly not touched by the Engineering Inspection update |
| Explorer — Liability | `liability.webp` | `IndustryExplorer` |
| Explorer — Guarantees and Bonds | `guarantees-bonds.webp` | `IndustryExplorer` — dedicated frame, replaces the earlier `guarantees-construction.webp` reuse |
| Explorer — Travel | `travel.webp` | `IndustryExplorer` |
| Explorer — Life | `life-protection.webp` | `IndustryExplorer` |
| Explorer — Underwriting | `underwriting.webp` | `IndustryExplorer` |

## Unused asset

- `motor-assessment.webp` is no longer referenced by any slot (the
  Ecosystem "Professional Assessment" tile now uses its own dedicated
  frame instead of reusing this one). Left in place rather than deleted
  — it's a real supplied asset, not scaffolding, and may suit a future
  slot.

## Known issue, accepted as-is

Every image above has text, UI callouts, or a card-style border baked
into the pixels — this doesn't match the plain-photography style used on
Home/Why Kweli, and in the Hero's case duplicates the Kweli wordmark
inside a raster image. Flagged to and explicitly accepted by design
review; not something a future pass should "fix" without a new
decision, since it was a deliberate call, not an oversight.

## Format note

The original JPEG artwork was encoded as WebP for direct delivery without resizing.
