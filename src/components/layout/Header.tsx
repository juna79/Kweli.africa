"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { primaryNav, verifyNavItem, demoNavItem } from "@/lib/nav";
import { industries } from "@/lib/industries";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-150 ${
        scrolled
          ? "bg-[var(--color-background)]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Kweli home">
          <Image
            src="/brand/Kweli_Logo_Transparent.png"
            alt="Kweli — Trust Infrastructure"
            width={140}
            height={36}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {primaryNav.map((item) =>
            item.label === "Industries" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-[var(--color-warm-paper)]/90 hover:text-[var(--color-gold-bright)] transition-colors duration-150"
                  aria-expanded={industriesOpen}
                  aria-haspopup="true"
                  onClick={() => setIndustriesOpen((v) => !v)}
                >
                  Industries
                  <ChevronDown size={14} strokeWidth={2} aria-hidden />
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
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-warm-paper)]/90 hover:text-[var(--color-gold-bright)] transition-colors duration-150"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href={verifyNavItem.href}
            className="text-sm font-medium text-[var(--color-warm-paper)]/90 hover:text-[var(--color-gold-bright)] transition-colors duration-150"
          >
            {verifyNavItem.label}
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button href={demoNavItem.href} variant="primary">
            {demoNavItem.label}
          </Button>
        </div>

        <button
          className="lg:hidden text-[var(--color-warm-paper)]"
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
          <ul className="flex flex-col gap-4">
            {[...primaryNav, verifyNavItem].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-base font-medium text-[var(--color-warm-paper)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href={demoNavItem.href} variant="primary" className="w-full">
              {demoNavItem.label}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
