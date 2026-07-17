# Insurance page — Art Book asset manifest

Source: Kweli Art Book Volume 2 (Industries). **Every slot on this page
is now fulfilled** — the last gap (Explorer — Medical) was filled by a
supplied "Medical Report" frame, and two mismatched reuses (Ecosystem —
Engineering Inspection, Ecosystem — Professional Assessment, Explorer —
Guarantees and Bonds) were replaced with their correct dedicated frames.

## Fulfilled slots

| Slot | File | Component |
|---|---|---|
| Hero | `hero-insurance.jpg` | `IndustryHero` — supplied as a composite (multiple insurance lines + Kweli badge). Contains baked-in text ("VERIFIED. TRUSTED. EVERYWHERE." + Kweli wordmark) — used as supplied per explicit sign-off, not edited. |
| Ecosystem — Garage | `motor-repair.jpg` | `IndustryEcosystem` |
| Ecosystem — Hospital | `medical-hospital.jpg` | `IndustryEcosystem` |
| Ecosystem — Marine Operation | `marine-shipping.jpg` | `IndustryEcosystem` |
| Ecosystem — Engineering Inspection | `engineering-inspection.jpg` | `IndustryEcosystem` — dedicated frame, replaces the earlier `fire-inspection.jpg` reuse |
| Ecosystem — Construction Project | `guarantees-construction.jpg` | `IndustryEcosystem` |
| Ecosystem — Professional Assessment | `professional-assessment.jpg` | `IndustryEcosystem` — dedicated frame, replaces the earlier `motor-assessment.jpg` reuse |
| Explorer — Motor | `motor-claims-office.jpg` | `IndustryExplorer` |
| Explorer — Medical | `medical-report.jpg` | `IndustryExplorer` — previously the one confirmed gap, now filled |
| Explorer — Property and Fire | `fire-inspection.jpg` (reused) | `IndustryExplorer` |
| Explorer — Marine | `marine-survey.jpg` | `IndustryExplorer` |
| Explorer — Engineering | `engineering.jpg` | `IndustryExplorer` — distinct from the Ecosystem "Engineering Inspection" tile above; different frame, correctly not touched by the Engineering Inspection update |
| Explorer — Liability | `liability.jpg` | `IndustryExplorer` |
| Explorer — Guarantees and Bonds | `guarantees-bonds.jpg` | `IndustryExplorer` — dedicated frame, replaces the earlier `guarantees-construction.jpg` reuse |
| Explorer — Travel | `travel.jpg` | `IndustryExplorer` |
| Explorer — Life | `life-protection.jpg` | `IndustryExplorer` |
| Explorer — Underwriting | `underwriting.jpg` | `IndustryExplorer` |

## Unused asset

- `motor-assessment.jpg` is no longer referenced by any slot (the
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

Supplied as JPEG rather than WebP (no WebP encoder in the processing
environment), quality 84, no resize — source was already ~1536×1024.
