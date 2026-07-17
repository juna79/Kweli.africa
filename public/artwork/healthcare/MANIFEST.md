# Healthcare page — Art Book asset manifest

Source: Kweli Art Book Volume 2 (Industries), the ten-frame Healthcare row
plus a Hero Composite. All ten workflows and the Hero were supplied — this
is the one page with a fully complete image set.

## Fulfilled slots

| Slot | File | Component |
|---|---|---|
| Hero | `hero-healthcare.jpg` | `IndustryHero` |
| Ecosystem — Patient | `patient-registration.jpg` | `IndustryEcosystem` |
| Ecosystem — Doctor | `medical-records.jpg` | `IndustryEcosystem` |
| Ecosystem — Hospital | `surgery.jpg` | `IndustryEcosystem` |
| Ecosystem — Laboratory | `lab-results.jpg` | `IndustryEcosystem` |
| Ecosystem — Insurer | `insurance-claim.jpg` | `IndustryEcosystem` |
| Ecosystem — Pharmacy | `pharmacy.jpg` | `IndustryEcosystem` |
| Explorer — Patient Registration | `patient-registration.jpg` (reused) | `IndustryExplorer` |
| Explorer — Medical Records | `medical-records.jpg` (reused) | `IndustryExplorer` |
| Explorer — Lab Results | `lab-results.jpg` (reused) | `IndustryExplorer` |
| Explorer — Prescription | `prescription.jpg` | `IndustryExplorer` |
| Explorer — Referral Letter | `referral-letter.jpg` | `IndustryExplorer` |
| Explorer — Insurance Claim | `insurance-claim.jpg` (reused) | `IndustryExplorer` |
| Explorer — Radiology | `radiology.jpg` | `IndustryExplorer` |
| Explorer — Surgery | `surgery.jpg` (reused) | `IndustryExplorer` |
| Explorer — Pharmacy | `pharmacy.jpg` (reused) | `IndustryExplorer` |
| Explorer — Telemedicine | `telemedicine.jpg` | `IndustryExplorer` |

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

Supplied as JPEG rather than WebP (no WebP encoder in the processing
environment), quality 84, no resize — source was already ~1536×1024.
