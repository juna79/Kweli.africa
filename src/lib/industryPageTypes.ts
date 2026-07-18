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
  // Each workflow has its own Document Journey — selecting this line in
  // IndustryExplorer drives the IndustryJourney section too, via shared
  // state lifted to IndustryPage. See IndustryPage.tsx.
  journey: WorkflowJourney;
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
  | "Mail"
  | "Fingerprint"
  | "Share2"
  | "BadgeCheck"
  | "Search"
  | "ClipboardCheck"
  | "Stamp"
  | "PackageCheck";

// A journey step now references an icon by name (like ExplorerLine.icon),
// not a component reference — see the note above on why: it has to cross
// the server -> client boundary as serializable data.
export type JourneyStep = {
  icon: IconName;
  label: string;
};

export type WorkflowJourney = {
  heading: string;
  steps: JourneyStep[];
  footnote?: string;
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
