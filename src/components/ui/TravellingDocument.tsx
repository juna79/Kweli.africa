// A small document card animating along the `travel-x` keyframe — the
// shared "a real document is moving through this step-by-step process"
// motif used on Industry Journey timelines and the Technology page's
// Verification Journey. Deliberately restrained: one shape, one path,
// no bounce.
export function TravellingDocument({ delay }: { delay: string }) {
  return (
    <div
      aria-hidden
      className="absolute top-1/2 h-8 w-6 -translate-y-1/2 rounded-[2px] border border-[var(--color-gold)]/40 bg-[var(--color-warm-paper)]/95 shadow-[0_0_18px_-2px_rgba(230,189,74,0.55),0_6px_16px_-4px_rgba(0,0,0,0.6)] [animation:travel-x_9s_linear_infinite]"
      style={{ animationDelay: delay }}
    >
      <div className="mx-auto mt-1.5 h-0.5 w-3.5 rounded-full bg-[var(--color-slate)]/40" />
      <div className="mx-auto mt-1 h-0.5 w-3 rounded-full bg-[var(--color-slate)]/25" />
    </div>
  );
}
