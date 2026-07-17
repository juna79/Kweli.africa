import { Image as ImageIcon, type LucideIcon } from "lucide-react";

// Full-bleed Art Book placeholder band — the homepage-specific counterpart
// to ArtFrame's contained card treatment. No rounded corners/border: this
// is meant to read as cinematic full-width artwork breaking the page
// rhythm, not another bordered panel. Swap `src` in once the named Volume 1
// frame is exported (see public/artwork/home/MANIFEST.md); no other change
// needed.
export function CinematicBand({
  src,
  alt,
  source,
  caption,
  icon: Icon = ImageIcon,
}: {
  src?: string;
  alt: string;
  source: string;
  caption: string;
  icon?: LucideIcon;
}) {
  return (
    <section className="relative">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="aspect-[16/10] w-full object-cover sm:aspect-[21/9]"
        />
      ) : (
        <div className="group relative aspect-[16/10] w-full overflow-hidden border-y border-white/5 bg-white/[0.015] sm:aspect-[21/9]">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_45%,rgba(201,162,39,0.12),transparent_70%)]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-white/25 transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--color-gold)]/30 group-hover:text-[var(--color-gold-bright)]/60">
              <Icon aria-hidden size={24} strokeWidth={1.5} />
            </span>
          </div>
          <span
            title={source}
            className="absolute bottom-4 left-6 right-6 truncate text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--color-gold-bright)]/50"
          >
            {source}
          </span>
        </div>
      )}
      <p className="px-6 py-4 text-center text-sm italic text-[var(--color-slate)]/80 lg:px-8">
        {caption}
      </p>
    </section>
  );
}
