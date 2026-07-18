import { socialLinks } from "@/lib/social";

// Shared between Footer and Header's mobile menu so both stay in sync off
// one source of truth. 44x44 tap target (h-11 w-11) regardless of the
// glyph's own size, per accessibility touch-target guidance.
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {socialLinks.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="group inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-slate)] transition-transform duration-200 ease-[var(--ease-trust)] hover:scale-110 hover:text-[var(--color-gold-bright)] focus-visible:scale-110 focus-visible:text-[var(--color-gold-bright)]"
        >
          <Icon
            aria-hidden="true"
            className="h-[18px] w-[18px] transition-[filter] duration-200 ease-[var(--ease-trust)] group-hover:drop-shadow-[0_0_8px_rgba(230,189,74,0.65)] group-focus-visible:drop-shadow-[0_0_8px_rgba(230,189,74,0.65)]"
          />
        </a>
      ))}
    </div>
  );
}
