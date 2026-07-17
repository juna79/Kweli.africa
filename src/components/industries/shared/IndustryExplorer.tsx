"use client";

import { useState } from "react";
import {
  Car,
  Stethoscope,
  Flame,
  Ship,
  HardHat,
  Scale,
  Landmark,
  Plane,
  Heart,
  ClipboardList,
  Users,
  Briefcase,
  Building2,
  FileCheck2,
  Banknote,
  GraduationCap,
  Gavel,
  Vote,
  FileSearch,
  Truck,
  Anchor,
  Warehouse,
  Snowflake,
  Handshake,
  Award,
  BookOpen,
  IdCard,
  Pill,
  Microscope,
  HeartPulse,
  Syringe,
  Monitor,
  Mail,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ArtFrame } from "@/components/ui/ArtFrame";
import type { ExplorerLine, IconName } from "@/lib/industryPageTypes";

const EYEBROW = "text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

// ExplorerLine.icon travels from a server component's data prop into this
// client component, so it's a serializable string key, not a component
// reference — resolved to the real icon here.
const ICONS: Record<IconName, LucideIcon> = {
  Car,
  Stethoscope,
  Flame,
  Ship,
  HardHat,
  Scale,
  Landmark,
  Plane,
  Heart,
  ClipboardList,
  Users,
  Briefcase,
  Building2,
  FileCheck2,
  Banknote,
  GraduationCap,
  Gavel,
  Vote,
  FileSearch,
  Truck,
  Anchor,
  Warehouse,
  Snowflake,
  Handshake,
  Award,
  BookOpen,
  IdCard,
  Pill,
  Microscope,
  HeartPulse,
  Syringe,
  Monitor,
  Mail,
  ShieldCheck,
};

function ExplorerBody({ lines }: { lines: ExplorerLine[] }) {
  const [active, setActive] = useState(lines[0]?.key);
  const current = lines.find((l) => l.key === active) ?? lines[0];

  if (!current) return null;
  const CurrentIcon = ICONS[current.icon];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {lines.map((line) => {
          const isActive = line.key === active;
          const LineIcon = ICONS[line.icon];
          return (
            <button
              key={line.key}
              onClick={() => setActive(line.key)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-2 rounded-full border px-4.5 py-2.5 text-sm font-medium transition-all duration-200 ease-[var(--ease-trust)] ${
                isActive
                  ? "border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-[var(--color-gold-bright)] shadow-[0_4px_16px_-6px_rgba(201,162,39,0.5)]"
                  : "border-white/10 text-[var(--color-slate)] hover:-translate-y-0.5 hover:border-white/25 hover:text-[var(--color-warm-paper)]"
              }`}
            >
              <LineIcon size={14} strokeWidth={1.75} aria-hidden />
              {line.label}
            </button>
          );
        })}
      </div>

      <div
        key={current.key}
        className="animate-fade-up mt-10 grid gap-8 lg:grid-cols-2 lg:items-center"
        style={{ animationDuration: "350ms" }}
      >
        <ArtFrame
          src={current.src}
          alt={`${current.label} — Kweli Art Book`}
          source={current.art ?? "Not yet sourced — see MANIFEST.md"}
          icon={CurrentIcon}
          aspect="aspect-[4/3]"
        />

        <div>
          <p className={EYEBROW}>{current.label}</p>
          <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-[var(--color-warm-paper)]">
            {current.explanation}
          </p>

          {current.documents.length > 0 ? (
            <ul className="mt-6 divide-y divide-white/5 border-t border-white/5">
              {current.documents.map((doc) => (
                <li
                  key={doc.name}
                  className="flex items-center justify-between rounded-[var(--radius-sm)] px-2 py-3.5 transition-colors duration-150 hover:bg-white/[0.03]"
                >
                  <span className="text-base text-[var(--color-warm-paper)]">{doc.name}</span>
                  <span className="text-sm text-[var(--color-slate)]">{doc.issuer}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-base text-[var(--color-slate)]">
              Document types for this line are being finalised.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function IndustryExplorer({
  eyebrow,
  heading,
  lines,
}: {
  eyebrow: string;
  heading: string;
  lines: ExplorerLine[];
}) {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className={EYEBROW}>{eyebrow}</p>
          <h2 className="mx-auto mt-6 max-w-lg text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            {heading}
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-14">
          <ExplorerBody lines={lines} />
        </Reveal>
      </div>
    </section>
  );
}
