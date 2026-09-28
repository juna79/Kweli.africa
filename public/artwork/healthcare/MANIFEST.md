# Healthcare page — Art Book asset manifest

Source: Kweli Art Book Volume 2 (Industries), the ten-frame Healthcare row
plus a Hero Composite. All ten workflows and the Hero were supplied — this
is the one page with a fully complete image set.

## Fulfilled slots

| Slot | File | Component |
|---|---|---|
| Hero | `hero-healthcare.webp` | `IndustryHero` |
| Ecosystem — Patient | `patient-registration.webp` | `IndustryEcosystem` |
| Ecosystem — Doctor | `medical-records.webp` | `IndustryEcosystem` |
| Ecosystem — Hospital | `surgery.webp` | `IndustryEcosystem` |
| Ecosystem — Laboratory | `lab-results.webp` | `IndustryEcosystem` |
| Ecosystem — Insurer | `insurance-claim.webp` | `IndustryEcosystem` |
| Ecosystem — Pharmacy | `pharmacy.webp` | `IndustryEcosystem` |
| Explorer — Patient Registration | `patient-registration.webp` (reused) | `IndustryExplorer` |
| Explorer — Medical Records | `medical-records.webp` (reused) | `IndustryExplorer` |
| Explorer — Lab Results | `lab-results.webp` (reused) | `IndustryExplorer` |
| Explorer — Prescription | `prescription.webp` | `IndustryExplorer` |
| Explorer — Referral Letter | `referral-letter.webp` | `IndustryExplorer` |
| Explorer — Insurance Claim | `insurance-claim.webp` (reused) | `IndustryExplorer` |
| Explorer — Radiology | `radiology.webp` | `IndustryExplorer` |
| Explorer — Surgery | `surgery.webp` (reused) | `IndustryExplorer` |
| Explorer — Pharmacy | `pharmacy.webp` (reused) | `IndustryExplorer` |
| Explorer — Telemedicine | `telemedicine.webp` | `IndustryExplorer` |

## Known issue, accepted as-is

Every image above has significant text/UI baked into the pixels — status
badges, timestamps, patient-record callouts, and (on the Hero and Patient
Registration images specifically) a fictional "HEAL+ Medical Centre"
brand rendered as building signage and a desk placard, plus one line of
copy on the Patient Registration image ("No personal data on
blockchain") that runs counter to this project's own brand guidance
(blockchain is meant to stay implementation plumbing, never the pitch).
This was flagged explicitly before wiring; design review chose to accept
the images as supplied rather than hold for clean replacements. Not
something a future pass should silently "fix" — it was a deliberate,
informed call, but the underlying tension (baked-in marketing copy
competing with the site's real typography and messaging) is still real
and worth resolving with a text-free asset pass eventually.

## Format note

The original JPEG artwork was encoded as WebP for direct delivery without resizing.
