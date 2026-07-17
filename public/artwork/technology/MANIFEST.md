# Technology page — Art Book asset manifest

Source: the Kweli Art Book contact sheets, primarily Volume 3 (Product &
Technology). Only the contact sheets exist today — the frame below is not
yet exported as a file.

The rest of the page is intentionally left photograph-free. Every other
section (Verification Journey, Client-side Privacy, Registration,
Verification outcomes, Security) is already a functional diagram or
product illustration doing real explanatory work — Stripe-dashboard-style
UI, not decoration. Replacing those with photography would make the page
less clear, not more cinematic. The one band below exists to ground the
technical explanation that follows in something real before it gets
abstract, exactly like the equivalent band on Why Kweli — not to
illustrate every section.

## Band — after Hero, before the Verification Journey

| Field | Value |
|---|---|
| Placement | `CinematicBand` between `Hero` and `VerificationJourney` in `src/components/technology/Technology.tsx` |
| Source | Volume 3 — secure enterprise server environment / registry infrastructure frame |
| Caption | "Registered once. Verifiable anywhere, by anyone holding the document." |
| Export as | `technology-infrastructure.webp` |
| Crop | 21:9 desktop, 16:10 mobile, full-bleed, no embedded text |
| Why here | The hero states the promise ("technology you never have to think about"); this band gives it a physical anchor — real infrastructure — before the page walks through the mechanism step by step. |

## Considered and rejected

- **Inside Client-side Privacy, Registration, or Verification** — these
  already have purpose-built product illustrations (browser chrome,
  registration record, outcome badges) that explain the mechanism more
  precisely than a photograph could. Art here would compete with, not
  support, the explanation.
- **Inside Security** — same reasoning; the four capability cards are the
  clearest way to communicate this content.
