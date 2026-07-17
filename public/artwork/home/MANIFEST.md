# Homepage — Art Book asset manifest

Source: the three Kweli Art Book contact sheets (Volume 1 — Brand & Trust
Infrastructure, Volume 2 — Industries, Volume 3 — Product & Technology).
Only the contact sheets exist today — the individual frames below are not
yet exported as files. This manifest identifies exactly which frame belongs
in which homepage slot.

Every slot is rendered by `CinematicBand`
(`src/components/home/CinematicBand.tsx`) as a labelled reserved placeholder
— a full-bleed dot-grid panel with a caption naming the frame, not a
substitute illustration. Passing `src` swaps in the real image with no
other code change.

Do not use visibly degraded thumbnail crops as full-screen art — every
entry below is a single cropped frame, not the contact sheet itself.

## Band 1 — after Hero, before the Verification teaser

| Field | Value |
|---|---|
| Placement | `CinematicBand` between `Hero` and `VerificationTeaser` in `src/app/page.tsx` |
| Source | Volume 1, frame 02, 05, or 19 (art direction's pick) — "Africa / Earth at night, continent traced with a fine gold trust-network of connected points, cinematic lighting" |
| Caption | "Trust infrastructure, wherever a document travels." |
| Export as | `home-global-trust.webp` |
| Crop | 21:9 desktop, 16:10 mobile, full-bleed, no embedded text |
| Why here | Extends the Hero's visual world (which is CSS/SVG only, no real photography) into one cinematic establishing shot before the product demo — sets global scale before the page gets specific. |

## Band 2 — between the Verification teaser and Why Kweli teaser

| Field | Value |
|---|---|
| Placement | `CinematicBand` between `VerificationTeaser` and `WhyKweliTeaser` in `src/app/page.tsx` |
| Source | Volume 1, frame 17 — doctor, engineer, businessman, businesswoman with tablets around a glowing hexagon (cross-professional trust) |
| Caption | "Confidence built between organisations, not around them." |
| Export as | `home-cross-organisation-trust.webp` |
| Crop | 21:9 desktop, 16:10 mobile, full-bleed, no embedded text |
| Why here | Replaces what was a plain divider line — this is the page's pivot from "here's the product" to "here's why it exists," and is the one moment on the homepage that benefits from showing people/organisations rather than product UI. |

## Gaps

Neither slot has a confirmed individual export yet — both need art
direction to select and crop the specific frame from the Volume 1 contact
sheet. Until then both render as labelled placeholders per the pattern
above.
