import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "tertiary";

const base =
  "inline-flex items-center justify-center gap-2 text-[1.0625rem] font-medium transition-all duration-150 ease-[var(--ease-trust)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)] disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-gold)] text-[#0b080f] rounded-[var(--radius-md)] px-7 py-3.5 hover:bg-[var(--color-gold-bright)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-8px_rgba(230,189,74,0.55)] active:translate-y-0 active:duration-[120ms]",
  secondary:
    "border border-[var(--color-gold)]/50 text-[var(--color-warm-paper)] rounded-[var(--radius-md)] px-7 py-3.5 hover:border-[var(--color-gold-bright)] hover:bg-white/[0.03]",
  tertiary:
    "text-[var(--color-gold-bright)] px-0 py-1 underline-offset-4 hover:underline",
};

type CommonProps = {
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type PlainButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = LinkButtonProps | PlainButtonProps;

export function Button({
  variant = "primary",
  withArrow,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
        {withArrow && <ArrowRight size={16} strokeWidth={2} aria-hidden />}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as PlainButtonProps)}>
      {children}
      {withArrow && <ArrowRight size={16} strokeWidth={2} aria-hidden />}
    </button>
  );
}
