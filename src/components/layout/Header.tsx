"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { primaryNav, verifyNavItem, demoNavItem } from "@/lib/nav";
import { industries } from "@/lib/industries";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { BrandTag } from "@/components/layout/BrandTag";
import { SocialLinks } from "@/components/layout/SocialLinks";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLinkBase =
  "relative text-base font-medium transition-colors duration-150 pb-1";
const navLinkInactive =
  "text-[var(--color-warm-paper)]/90 hover:text-[var(--color-gold-bright)]";
const navLinkActive = "font-semibold text-[var(--color-gold-bright)]";

function ActiveUnderline() {
  return (
    <span
      aria-hidden
      className="absolute bottom-0 left-0 right-0 h-px rounded-full bg-[var(--color-gold-bright)]"
    />
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const industriesActive = isActivePath(pathname, "/industries");

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-150 ${
        scrolled
          ? "bg-[var(--color-background)]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex flex-col gap-0.5">
          <Logo size="large" />
          <BrandTag />
        </div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            if (item.label === "Industries") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 ${navLinkBase} ${
                      industriesActive ? navLinkActive : navLinkInactive
                    }`}
                    aria-expanded={industriesOpen}
                    aria-haspopup="true"
                    aria-current={industriesActive ? "page" : undefined}
                    onClick={() => setIndustriesOpen((v) => !v)}
                  >
                    Industries
                    <ChevronDown size={14} strokeWidth={2} aria-hidden />
                    {industriesActive && <ActiveUnderline />}
                  </button>
                  {industriesOpen && (
                    <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3">
                      <div className="grid grid-cols-2 gap-1 rounded-[var(--radius-lg)] border border-white/10 bg-[var(--color-dark-slate)] p-3 shadow-2xl animate-fade-up">
                        {industries.map((industry) => (
                          <Link
                            key={industry.slug}
                            href={`/industries/${industry.slug}`}
                            className="flex items-start gap-3 rounded-[var(--radius-md)] p-3 hover:bg-white/5 transition-colors duration-150"
                          >
                            <industry.icon
                              size={20}
                              strokeWidth={2}
                              className="mt-0.5 shrink-0 text-[var(--color-gold-bright)]"
                              aria-hidden
                            />
                            <span>
                              <span className="block text-sm font-medium text-[var(--color-warm-paper)]">
                                {industry.name}
                              </span>
                              <span className="mt-0.5 block text-xs leading-snug text-[var(--color-slate)]">
                                {industry.tagline}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`${navLinkBase} ${active ? navLinkActive : navLinkInactive}`}
              >
                {item.label}
                {active && <ActiveUnderline />}
              </Link>
            );
          })}
          <Link
            href={verifyNavItem.href}
            aria-current={isActivePath(pathname, verifyNavItem.href) ? "page" : undefined}
            className={`${navLinkBase} ${
              isActivePath(pathname, verifyNavItem.href) ? navLinkActive : navLinkInactive
            }`}
          >
            {verifyNavItem.label}
            {isActivePath(pathname, verifyNavItem.href) && <ActiveUnderline />}
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button href={demoNavItem.href} variant="primary">
            {demoNavItem.label}
          </Button>
        </div>

        <button
          className="-mr-2.5 flex h-11 w-11 items-center justify-center text-[var(--color-warm-paper)] lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="lg:hidden border-t border-white/5 bg-[var(--color-background)] px-6 py-4"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {[...primaryNav, verifyNavItem].map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-2 rounded-[var(--radius-sm)] px-2 py-3 text-base font-medium transition-colors duration-150 active:bg-white/5 ${
                      active
                        ? "font-semibold text-[var(--color-gold-bright)]"
                        : "text-[var(--color-warm-paper)]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {active && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold-bright)]"
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6">
            <Button href={demoNavItem.href} variant="primary" className="w-full">
              {demoNavItem.label}
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center border-t border-white/5 pt-6">
            <SocialLinks />
          </div>
        </nav>
      )}
    </header>
  );
}
