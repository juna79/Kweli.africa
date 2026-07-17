import { Image as ImageIcon, type LucideIcon } from "lucide-react";

// Reserved slot for a Kweli Art Book frame. No source image exists in the
// repo yet — pass `src` once the individual export lands (see
// public/artwork/{industry}/MANIFEST.md for the exact frame each slot maps
// to) and this renders the real photograph with no layout change. The
// empty state is a deliberate design, not a debug box: a centred glyph on
// a soft dot-grid, a short truncated source tag, and a hover response —
// built to disappear the moment a real photograph lands.
export function ArtFrame({
  src,
  alt,
  source,
  icon: Icon,
  aspect = "aspect-[4/5]",
  className = "",
}: {
  src?: string;
  alt: string;
  source: string;
  icon?: LucideIcon;
  aspect?: string;
  className?: string;
}) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={`w-full rounded-[var(--radius-lg)] border border-white/10 object-cover ${aspect} ${className}`}
      />
    );
  }

  const FrameIcon = Icon ?? ImageIcon;

  return (
    <div
      className={`group relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] transition-colors duration-150 hover:border-[var(--color-gold)]/30 ${aspect} ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(201,162,39,0.1),transparent_70%)]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/25 transition-all duration-200 group-hover:scale-105 group-hover:border-[var(--color-gold)]/30 group-hover:text-[var(--color-gold-bright)]/60">
          <FrameIcon aria-hidden size={20} strokeWidth={1.5} />
        </span>
      </div>
      <span
        title={source}
        className="absolute bottom-3 left-3 right-3 truncate text-[9px] font-medium uppercase tracking-[0.1em] text-[var(--color-gold-bright)]/50"
      >
        {source}
      </span>
    </div>
  );
}
