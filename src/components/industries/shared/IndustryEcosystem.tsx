import { Reveal } from "@/components/ui/Reveal";
import { ArtFrame } from "@/components/ui/ArtFrame";
import type { EcosystemTile } from "@/lib/industryPageTypes";

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

export function IndustryEcosystem({
  eyebrow,
  heading,
  tiles,
}: {
  eyebrow: string;
  heading: string;
  tiles: EcosystemTile[];
}) {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className={EYEBROW}>{eyebrow}</p>
          <h2 className="mx-auto mt-6 max-w-xl text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            {heading}
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {tiles.map((tile) => (
            <div key={tile.label} className="group">
              <ArtFrame alt={tile.label} source={tile.art} icon={tile.icon} aspect="aspect-square" />
              <p className="mt-3 text-center text-xs font-medium text-[var(--color-slate)] transition-colors duration-150 group-hover:text-[var(--color-warm-paper)]">
                {tile.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
