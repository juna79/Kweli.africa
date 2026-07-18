// Mount-based counterpart to Reveal, for above-the-fold hero content only.
// Reveal is IntersectionObserver-driven and meant for sections the visitor
// scrolls to; a hero is visible immediately, so it must animate on mount
// instead — otherwise it sits invisible until React hydrates and the
// observer fires, which reads as a slow or broken page on first load.
// Pure CSS (the fade-up keyframe in globals.css), so this needs no client
// JS and animates from the very first paint.
export function HeroReveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  return (
    <div className={`animate-fade-up ${className}`} style={{ animationDelay: `${delayMs}ms` }}>
      {children}
    </div>
  );
}
