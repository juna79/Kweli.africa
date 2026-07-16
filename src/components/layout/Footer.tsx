import Link from "next/link";
import { industries } from "@/lib/industries";
import { Logo } from "@/components/layout/Logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Why Kweli", href: "/why-kweli" },
      { label: "Technology", href: "/technology" },
      { label: "Verify a Document", href: "/verify" },
    ],
  },
  {
    title: "Industries",
    links: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Book a Demo", href: "/book-a-demo" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-slate)]">
              Trust Infrastructure for the World.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-medium text-[var(--color-warm-paper)]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-slate)] hover:text-[var(--color-gold-bright)] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--color-slate)]">
            © {new Date().getFullYear()} Kweli. Kweli verifies authenticity and
            integrity — not factual correctness.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-[var(--color-slate)] hover:text-[var(--color-gold-bright)]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[var(--color-slate)] hover:text-[var(--color-gold-bright)]"
            >
              Terms of Service
            </Link>
            {/* TODO: point at the real Kweli-Brain login URL once confirmed */}
            <a
              href="#brain-login"
              className="text-xs font-medium text-[var(--color-slate)] hover:text-[var(--color-gold-bright)]"
            >
              Brain Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
