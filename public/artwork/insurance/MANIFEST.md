# Insurance page — Art Book asset manifest

Source: Kweli Art Book Volume 2 (Industries). All Motor/Medical/Fire/
Marine/Guarantees/Life frames plus a Hero Composite were supplied and are
wired in. `Vol. 2 · 05 · Medical — Report` was never supplied — the
Explorer's "Medical" line still renders the ArtFrame placeholder.

## Fulfilled slots

| Slot | File | Component |
|---|---|---|
| Hero | `hero-insurance.jpg` | `IndustryHero` — supplied as a composite (multiple insurance lines + Kweli badge), per this manifest's original note that no single frame covers "several lines" and a composite was an accepted option. Contains baked-in text ("VERIFIED. TRUSTED. EVERYWHERE." + Kweli wordmark) — used as supplied per explicit sign-off, not edited. |
| Ecosystem — Garage | `motor-repair.jpg` | `IndustryEcosystem` |
| Ecosystem — Hospital | `medical-hospital.jpg` | `IndustryEcosystem` |
| Ecosystem — Marine Operation | `marine-shipping.jpg` | `IndustryEcosystem` |
| Ecosystem — Engineering Inspection | `fire-inspection.jpg` | `IndustryEcosystem` |
| Ecosystem — Construction Project | `guarantees-construction.jpg` | `IndustryEcosystem` |
| Ecosystem — Professional Assessment | `motor-assessment.jpg` | `IndustryEcosystem` |
| Explorer — Motor | `motor-claims-office.jpg` | `IndustryExplorer` |
| Explorer — Property and Fire | `fire-inspection.jpg` (reused) | `IndustryExplorer` |
| Explorer — Marine | `marine-survey.jpg` | `IndustryExplorer` |
| Explorer — Engineering | `engineering.jpg` | `IndustryExplorer` — previously a gap, now filled |
| Explorer — Liability | `liability.jpg` | `IndustryExplorer` — previously a gap, now filled |
| Explorer — Guarantees and Bonds | `guarantees-construction.jpg` (reused) | `IndustryExplorer` |
| Explorer — Travel | `travel.jpg` | `IndustryExplorer` — previously a gap, now filled |
| Explorer — Life | `life-protection.jpg` | `IndustryExplorer` |
| Explorer — Underwriting | `underwriting.jpg` | `IndustryExplorer` — previously a gap, now filled |

## Remaining gap

- **Explorer — Medical** (`Vol. 2 · 05 · Medical — Report`) — no matching
  file supplied. `medical-hospital.jpg` covers the Ecosystem tile for
  Hospital, but was deliberately not reused here since "Hospital" and
  "Report" are different framings and forcing a mismatch was flagged
  against in this manifest's original scope. Still renders as an ArtFrame
  placeholder pending the specific frame.

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
