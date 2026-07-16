# Kweli — Website V3

Public website for **kweli.africa** — Trust Infrastructure for the World.

Built with Next.js (App Router, TypeScript, Tailwind CSS v4). Design tokens,
copy, and component specs are sourced from the Website V3 document pack and
`Kweli_Canonical_OS.md`; see those for the source of truth on product
positioning, copy, and visual design.

The previous static site is preserved for reference in [`legacy-v2/`](./legacy-v2).

## Scope

This repo (`Kweli.africa`) is the public marketing site only. **Kweli-Brain**
is a separate, independent internal application connected to the same
Supabase project — it is not modified here. The only planned integration is
a future read-only connection from the public Insights page to
Brain-published articles, not yet implemented.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (CSS-first config in `src/app/globals.css`)
- Satoshi (primary) / Inter (fallback) typefaces
