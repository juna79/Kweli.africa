import type { LucideIcon } from "lucide-react";

// Shared content shapes for the locked seven-section industry page template
// (Hero, Ecosystem, Explorer, Journey, Business Impact, Pilot, CTA). One
// industry's page = one object of this shape, rendered by the shared
// components in src/components/industries/shared/.

export type EcosystemTile = {
  icon: LucideIcon;
  label: string;
  art: string;
  src?: string;
};

export type ExplorerDocument = {
  name: string;
  issuer: string;
};

// IndustryExplorer is a client component; a server component can't pass a
// function (a Lucide icon component) across that boundary as a prop, so
// explorer lines reference icons by name and IndustryExplorer resolves
// them client-side via the ICONS registry.
export type ExplorerLine = {
  key: string;
  label: string;
  icon: IconName;
  art: string | null;
  src?: string;
  explanation: string;
  documents: ExplorerDocument[];
};

export type IconName =
  | "Car"
  | "Stethoscope"
  | "Flame"
  | "Ship"
  | "HardHat"
  | "Scale"
  | "Landmark"
  | "Plane"
  | "Heart"
  | "ClipboardList"
  | "Users"
  | "Briefcase"
  | "Building2"
  | "FileCheck2"
  | "Banknote"
  | "GraduationCap"
  | "Gavel"
  | "Vote"
  | "FileSearch"
  | "Truck"
  | "Anchor"
  | "Warehouse"
  | "Snowflake"
  | "Handshake"
  | "ShieldCheck"
  | "Award"
  | "BookOpen"
  | "IdCard"
  | "Pill"
  | "Microscope"
  | "HeartPulse"
  | "Syringe"
  | "Monitor"
  | "Mail";

export type JourneyStep = {
  icon: LucideIcon;
  label: string;
};

export type PilotStep = {
  label: string;
};

export type IndustryPageContent = {
  slug: string;
  name: string;

  hero: {
    headline: string;
    supportingCopy: string;
    art: string;
    src?: string;
  };

  ecosystem: {
    heading: string;
    tiles: EcosystemTile[];
  };

  explorer: {
    heading: string;
    lines: ExplorerLine[];
  };

  journey: {
    heading: string;
    steps: JourneyStep[];
    footnote?: string;
  };

  businessImpact: {
    heading: string;
    today: string[];
    withKweli: string[];
  };

  pilot: {
    heading: string;
    steps: PilotStep[];
  };

  cta: {
    heading: string;
    supportingCopy: string;
  };
};
