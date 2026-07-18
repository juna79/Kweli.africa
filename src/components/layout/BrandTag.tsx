// Subtle "Kweli by EAX Global" attribution under the logo. Deliberately
// tiny/tight-leading so it reads as a caption, not a second logo line —
// adding it shouldn't noticeably change header height.
export function BrandTag({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[10px] leading-none tracking-wide text-[var(--color-slate)] ${className}`}>
      Kweli by{" "}
      <a
        href="https://eaxglobal.io"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--color-slate)] transition-colors duration-150 hover:text-[var(--color-gold-bright)]"
      >
        EAX Global
      </a>
    </p>
  );
}
