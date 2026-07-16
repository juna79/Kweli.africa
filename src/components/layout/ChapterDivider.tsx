// Marks the seam between homepage chapters. Deliberately minimal — a
// fading rule, not a redesign of either neighbouring section.
export function ChapterDivider() {
  return (
    <div className="relative py-10 lg:py-14" aria-hidden>
      <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />
    </div>
  );
}
