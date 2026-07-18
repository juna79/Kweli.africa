import Image from "next/image";
import { Image as ImageIcon, type LucideIcon } from "lucide-react";

// Reserved slot for a Kweli Art Book frame. Pass `src` once the frame
// lands (see public/artwork/{industry}/MANIFEST.md) and this renders the
// real photograph with no layout change. The empty state is a deliberate
// design, not a debug box: a centred glyph on a soft dot-grid, a short
// truncated source tag, and a hover response — built to disappear the
// moment a real photograph lands.
export function ArtFrame({
  src,
  alt,
  source,
  icon: Icon,
  aspect = "aspect-[4/5]",
  className = "",
  sizes = "(min-width: 1024px) 40vw, 90vw",
  priority = false,
}: {
  src?: string;
  alt: string;
  source: string;
  icon?: LucideIcon;
  aspect?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div
        className={`group relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 ${aspect} ${className}`}
      >
        {/* Motion Bible: images zoom 2-3% on hover — the one hover
           treatment every real Art Book photograph gets once it lands. */}
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[var(--duration-card)] ease-[var(--ease-trust)] group-hover:scale-[1.03]"
        />
      </div>
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
