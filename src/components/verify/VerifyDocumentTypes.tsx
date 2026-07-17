import Link from "next/link";
import {
  Shield,
  Stethoscope,
  Award,
  BookOpen,
  Truck,
  Users,
  Landmark,
  FileCheck2,
  Microscope,
  Scale,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

const categories = [
  { label: "Insurance Reports", icon: Shield, href: "/industries/insurance" },
  { label: "Medical Reports", icon: Stethoscope, href: "/industries/healthcare" },
  { label: "Certificates", icon: Award, href: "/industries/education" },
  { label: "Contracts", icon: BookOpen, href: "/industries/professional-services" },
  { label: "Invoices", icon: Truck, href: "/industries/trade" },
  { label: "Board Minutes", icon: Users, href: "/industries/professional-services" },
  { label: "Guarantees", icon: Landmark, href: "/industries/banking" },
  { label: "Audit Reports", icon: FileCheck2, href: "/industries/professional-services" },
  { label: "Laboratory Results", icon: Microscope, href: "/industries/healthcare" },
  { label: "Valuation Reports", icon: Scale, href: "/industries/insurance" },
] as const;

export function VerifyDocumentTypes() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className={EYEBROW}>What Kweli Verifies</p>
          <h2 className="mx-auto mt-6 max-w-lg text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Any document, from any issuer.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group relative flex flex-col items-start gap-3 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-gold)]/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[var(--color-gold-bright)]">
                <cat.icon size={16} strokeWidth={1.75} aria-hidden />
              </span>
              <span className="text-sm font-medium leading-snug text-[var(--color-warm-paper)]">
                {cat.label}
              </span>
              <ArrowRight
                aria-hidden
                size={14}
                strokeWidth={2}
                className="mt-auto text-[var(--color-slate)] opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-[var(--color-gold-bright)] group-hover:opacity-100"
              />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
