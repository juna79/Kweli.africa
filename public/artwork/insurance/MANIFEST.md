# Insurance page — Art Book asset manifest

Source: the three Kweli Art Book contact sheets (Volume 1 — Brand & Trust
Infrastructure, Volume 2 — Industries, Volume 3 — Product & Technology),
shared in chat. The individual frames below are **not yet exported as
files** — only the contact sheets exist. This manifest identifies exactly
which frame belongs in which slot on `/industries/insurance` so the design
team can export and drop them in with no layout change.

Every slot below is currently rendered by `ArtFrame`
(`src/components/ui/ArtFrame.tsx`) as a labelled reserved placeholder — a
bordered panel with a small caption naming the frame, not a substitute
illustration. Passing `src` to that component swaps in the real image with
no other code change.

Do not export or use full contact sheets as website imagery — every entry
below is a single cropped frame.

## Primary source: Volume 2 (Industries), frames 01–10

These ten frames are captioned directly on the Volume 2 contact sheet and
are the confirmed source for this page.

| # | Frame caption | Export as |
|---|---|---|
| 01 | Motor – Repair | `motor-repair.webp` |
| 02 | Motor – Assessment | `motor-assessment.webp` |
| 03 | Motor – Claims Office | `motor-claims-office.webp` |
| 04 | Medical – Hospital | `medical-hospital.webp` |
| 05 | Medical – Report | `medical-report.webp` |
| 06 | Fire – Inspection | `fire-inspection.webp` |
| 07 | Marine – Shipping | `marine-shipping.webp` |
| 08 | Marine – Survey | `marine-survey.webp` |
| 09 | Guarantees – Construction | `guarantees-construction.webp` |
| 10 | Life – Protection | `life-protection.webp` |

## Supporting frames

| Source | Frame | Export as | Use |
|---|---|---|---|
| Volume 1 | #17 — doctor, engineer, businessman, businesswoman with tablets around a glowing hexagon | `cross-professional.webp` | Explore Insurance Lines — section intro, multi-discipline framing |
| Volume 1 | #13 — family silhouette overlooking a city at sunset | `stakes.webp` | Optional — Business Impact section, human stakes |
| Volume 3 | #13 — document with a glowing fingerprint trail | `fingerprint-document.webp` | Claim in Motion — step 2 ("Garage registers its fingerprint") |

## Gaps — no confirmed frame yet

Four of the ten insurance lines in "Explore Insurance Lines" have no
dedicated Volume 2 frame today. Until new frames are commissioned, these
render as labelled reserved placeholders with no image assigned:

- **Engineering** — nearest adjacent frames are Fire – Inspection (06) or
  Guarantees – Construction (09); neither is Engineering-specific.
- **Liability** — no adjacent frame; Motor – Claims Office (03) is the
  closest office/assessment scene but is motor-specific.
- **Travel** — no adjacent frame; Life – Protection (10) is the closest
  emotional register but is not travel-specific.
- **Underwriting** — no adjacent frame; Marine – Survey (08) or Motor –
  Claims Office (03) are the closest paperwork/assessment scenes.

Flagging these now rather than forcing a mismatched frame onto a line it
doesn't depict.

## Page slot map

| Section | Component | Slot(s) |
|---|---|---|
| Hero | `Hero` in `InsuranceIndustry.tsx` | One large hero image, ~50% of hero width. No single Volume 2 frame alone communicates "several lines" — needs either art direction's pick of the strongest single frame or a new composite. Reserved as `hero-insurance.webp`. |
| Insurance Ecosystem | `Ecosystem` in `InsuranceIndustry.tsx` | 6-tile mosaic: `motor-repair`, `medical-hospital`, `marine-shipping`, `fire-inspection`, `guarantees-construction`, `motor-assessment`. |
| Explore Insurance Lines | `InsuranceLinesExplorer.tsx` | One large frame per line, swapped on selection. Motor → `motor-claims-office`; Medical → `medical-report`; Property and Fire → `fire-inspection`; Marine → `marine-survey`; Guarantees and Bonds → `guarantees-construction`; Life → `life-protection`. Engineering / Liability / Travel / Underwriting: no source yet (see Gaps above). |
| A Claim in Motion | `ClaimInMotion` in `InsuranceIndustry.tsx` | Documents render as the existing warm-paper document-card motif (code-drawn, matches the rest of the site), not a photographic frame — this section is a process animation, not a scene. |
