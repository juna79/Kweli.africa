# Homepage — Art Book asset manifest

Source: the three Kweli Art Book contact sheets (Volume 1 — Brand & Trust
Infrastructure, Volume 2 — Industries, Volume 3 — Product & Technology).

Every slot is rendered by `CinematicBand`
(`src/components/ui/CinematicBand.tsx`) as a labelled reserved placeholder
until a real image is supplied — a full-bleed dot-grid panel with a
caption naming the frame, not a substitute illustration.

## Band 1 — after Hero, before the Verification teaser ✅ fulfilled

| Field | Value |
|---|---|
| Placement | `CinematicBand` between `Hero` and `VerificationTeaser` in `src/app/page.tsx` |
| Source | Volume 1, frame 02/05/19 — "Africa / Earth at night, continent traced with a fine gold trust-network of connected points, cinematic lighting" |
| Caption | "Trust infrastructure, wherever a document travels." |
| File | `home-global-trust.jpg` |
| Why here | Extends the Hero's visual world (which is CSS/SVG only, no real photography) into one cinematic establishing shot before the product demo — sets global scale before the page gets specific. |

## Band 2 — between the Verification teaser and Why Kweli teaser ✅ fulfilled

| Field | Value |
|---|---|
| Placement | `CinematicBand` between `VerificationTeaser` and `WhyKweliTeaser` in `src/app/page.tsx` |
| Source | Volume 1, frame 17 — doctor, engineer, businessman, businesswoman with tablets around a glowing hexagon (cross-professional trust) |
| Caption | "Confidence built between organisations, not around them." |
| File | `home-cross-organisation-trust.jpg` |
| Why here | Replaces what was a plain divider line — this is the page's pivot from "here's the product" to "here's why it exists," and is the one moment on the homepage that benefits from showing people/organisations rather than product UI. |

## Format note

Supplied as JPEG rather than WebP — no WebP encoder was available in the
environment that processed these (macOS `sips` doesn't support WebP
output). JPEG at quality 84, no resize (source was already web-appropriate
at ~1536–1672px wide). Both images are clean cinematic photography with no
embedded text or UI — used exactly as supplied.
