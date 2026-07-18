import {
  Check,
  X,
  BadgeCheck,
  Fingerprint,
  FileWarning,
  Building2,
  ListChecks,
  Copyright,
  ExternalLink,
  CalendarClock,
  ShieldAlert,
  Scale3d,
  Gauge,
  PowerOff,
  RefreshCw,
  Landmark,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection, LegalList } from "@/components/legal/LegalSection";
import { LegalCallout } from "@/components/legal/LegalCallout";
import { LegalContactCard } from "@/components/legal/LegalContactCard";

const MUTED = "text-[var(--color-slate)]";

const toc = [
  { id: "boundaries", label: "What Kweli does & doesn't do" },
  { id: "distinction", label: "Authenticity, integrity & truthfulness" },
  { id: "eligibility", label: "Website usage & eligibility" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "ip", label: "Intellectual property" },
  { id: "third-party-links", label: "Third-party links" },
  { id: "demo-requests", label: "Demo requests" },
  { id: "limitations", label: "Verification limitations" },
  { id: "warranties", label: "No warranties" },
  { id: "liability", label: "Limitation of liability" },
  { id: "availability", label: "Availability of the service" },
  { id: "termination", label: "Termination" },
  { id: "changes", label: "Changes to these terms" },
  { id: "governing-law", label: "Governing law" },
];

function Boundaries() {
  const does = [
    "Verify that a presented document matches what was registered at issuance",
    "Give an independent, cryptographic way to check authenticity and integrity",
    "Let anyone holding a document verify it without contacting the issuer",
  ];
  const doesNot = [
    "Assess whether the information in a document is true, accurate, or complete",
    "Vouch for the legitimacy of the issuer, or the soundness of any decision made using a document",
    "Act as legal, financial, or professional advice of any kind",
  ];

  return (
    <section id="boundaries" className="relative scroll-mt-28 px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            In plain English
          </p>
          <h2 className="mx-auto mt-6 max-w-lg text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            What Kweli does — and doesn&rsquo;t do.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-14 grid gap-5 sm:grid-cols-2">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-verified)]/25 bg-[var(--color-verified)]/[0.03] p-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-verified)]">Kweli does</p>
            <ul className="mt-5 space-y-4">
              {does.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={18} strokeWidth={2.25} className="mt-0.5 shrink-0 text-[var(--color-verified)]" aria-hidden />
                  <span className="text-[length:var(--text-body)] leading-snug text-[var(--color-warm-paper)]/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-slate)]">Kweli does not</p>
            <ul className="mt-5 space-y-4">
              {doesNot.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X size={18} strokeWidth={2.25} className="mt-0.5 shrink-0 text-[var(--color-slate)]" aria-hidden />
                  <span className="text-[length:var(--text-body)] leading-snug text-[var(--color-warm-paper)]/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const distinctionCards = [
  {
    icon: BadgeCheck,
    label: "Authenticity",
    verified: true,
    copy: "Whether the document actually originates from the issuer it claims to. Kweli establishes this by comparing a presented document against the fingerprint registered by that issuer at the time of issuance.",
  },
  {
    icon: Fingerprint,
    label: "Integrity",
    verified: true,
    copy: "Whether the document is unchanged since it was registered. A “Verified” result means today's document is byte-for-byte identical to the one registered; the smallest alteration breaks the match.",
  },
  {
    icon: FileWarning,
    label: "Truthfulness",
    verified: false,
    copy: "Whether the information written in the document is accurate. Kweli makes no assessment of this at all — a document can be authentic and unaltered while still being incomplete, mistaken, or false.",
  },
] as const;

function Distinction() {
  return (
    <section id="distinction" className="relative scroll-mt-28 overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(201,162,39,0.1),transparent_70%)]"
      />
      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            The distinction that matters
          </p>
          <h2 className="mx-auto mt-6 max-w-xl text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Two things Kweli proves. One thing it never claims to.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-14 grid gap-5 sm:grid-cols-3">
          {distinctionCards.map((card) => (
            <div
              key={card.label}
              className={`rounded-[var(--radius-lg)] border p-7 ${
                card.verified
                  ? "border-[var(--color-gold)]/30 bg-[var(--color-gold)]/[0.03]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                    card.verified ? "border-[var(--color-gold)]/40 text-[var(--color-gold-bright)]" : "border-white/15 text-[var(--color-slate)]"
                  }`}
                >
                  <card.icon size={18} strokeWidth={1.75} aria-hidden />
                </span>
                <span
                  className={`rounded-[var(--radius-sm)] border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                    card.verified
                      ? "border-[var(--color-verified)]/40 bg-[var(--color-verified)]/10 text-[var(--color-verified)]"
                      : "border-[var(--color-slate)]/40 bg-[var(--color-slate)]/10 text-[var(--color-slate)]"
                  }`}
                >
                  {card.verified ? "Kweli verifies this" : "Not assessed"}
                </span>
              </div>
              <p className="mt-5 text-base font-semibold text-[var(--color-warm-paper)]">{card.label}</p>
              <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-[var(--color-slate)]">{card.copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function TermsOfServicePage() {
  return (
    <>
      <LegalHero
        eyebrow="Terms of Service"
        title="The rules of using Kweli, in plain English."
        subtitle="These Terms govern your access to and use of this website and the Kweli document verification service, provided by EAX Global Ltd."
        lastUpdated="18 July 2026"
      />
      <Boundaries />
      <Distinction />

      <LegalLayout toc={toc}>
        <LegalSection id="eligibility" icon={Building2} title="Website usage & eligibility">
          <p>
            The Service is intended for business and professional use. By
            using the Service, you represent that you have the authority to
            do so, including on behalf of your organisation where
            applicable.
          </p>
        </LegalSection>

        <LegalSection id="acceptable-use" icon={ListChecks} title="Acceptable use">
          <p>When using the Service, you agree not to:</p>
          <LegalList
            items={[
              "Use the Service for any unlawful purpose or in violation of any applicable law or regulation",
              "Attempt to interfere with, disrupt, or gain unauthorised access to the Service or its underlying systems",
              "Reverse engineer, decompile, or attempt to extract the source code of the Service, except where permitted by law",
              "Use the Service to register fraudulent documents or to misrepresent the origin or authenticity of any document",
              "Use automated means to access the Service at a volume or frequency a human could not reasonably produce, without our prior written consent",
            ]}
          />
        </LegalSection>

        <LegalSection id="ip" icon={Copyright} title="Intellectual property">
          <p>
            The Site, the Kweli name and logo, and all related content,
            features, and functionality are owned by EAX Global Ltd or its
            licensors and are protected by applicable intellectual property
            laws. Nothing in these Terms grants you any right to use the
            Kweli name, logo, or branding without our prior written consent.
          </p>
        </LegalSection>

        <LegalSection id="third-party-links" icon={ExternalLink} title="Third-party links">
          <p>
            The Site may contain links to third-party websites, including
            EAX Global&rsquo;s corporate site and our social media profiles.
            We are not responsible for the content or practices of
            third-party sites.
          </p>
        </LegalSection>

        <LegalSection id="demo-requests" icon={CalendarClock} title="Demo requests">
          <p>
            Submitting a demo request through the Site is an enquiry, not a
            contract. It doesn&rsquo;t commit you, or us, to anything — it
            simply lets our team follow up to arrange a conversation. Any
            commercial relationship that follows is subject to its own
            separate agreement.
          </p>
        </LegalSection>

        <LegalSection id="limitations" icon={ShieldAlert} title="Verification service limitations">
          <p>
            A &ldquo;Verified&rdquo; result means the presented document
            matches the version registered at issuance. It does not mean
            that the issuer is legitimate, that the document&rsquo;s content
            is accurate, or that any transaction or decision based on the
            document is sound.
          </p>
          <p>
            A &ldquo;Document Not Found&rdquo; result means no registered
            record exists for the document; it does not, by itself, mean the
            document is fraudulent — it may simply predate registration or
            have been issued by an organisation not yet using Kweli.
          </p>
          <LegalCallout icon={FileWarning} tone="neutral">
            Decisions made on the basis of a Kweli verification result remain
            the sole responsibility of the party making them.
          </LegalCallout>
        </LegalSection>

        <LegalSection id="warranties" icon={Scale3d} title="No warranties">
          <p>
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as
            available,&rdquo; without warranties of any kind, whether
            express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, or
            non-infringement. We do not warrant that the Service will be
            uninterrupted, error-free, or completely secure, and we do not
            warrant or guarantee the truthfulness of any document&rsquo;s
            contents.
          </p>
        </LegalSection>

        <LegalSection id="liability" icon={Gauge} title="Limitation of liability">
          <p>
            To the maximum extent permitted by law, EAX Global Ltd shall not
            be liable for any indirect, incidental, special, consequential,
            or punitive damages, or any loss of profits or revenue, arising
            from or related to your use of the Service, even if advised of
            the possibility of such damages.
          </p>
        </LegalSection>

        <LegalSection id="availability" icon={PowerOff} title="Availability of the service">
          <p>
            We aim to keep the Service available and reliable, but we
            don&rsquo;t guarantee uninterrupted access. The Service may be
            unavailable from time to time for maintenance, updates, or
            reasons outside our control, and we may change, suspend, or
            discontinue any part of it without liability to you for doing
            so.
          </p>
        </LegalSection>

        <LegalSection id="termination" icon={X} title="Termination">
          <p>
            We may suspend or terminate access to the Service at any time,
            with or without notice, for conduct that we believe violates
            these Terms or is harmful to other users, us, or third parties.
          </p>
        </LegalSection>

        <LegalSection id="changes" icon={RefreshCw} title="Changes to these terms">
          <p>
            We may update these Terms from time to time. Continued use of
            the Service after changes take effect constitutes acceptance of
            the revised Terms.
          </p>
        </LegalSection>

        <LegalSection id="governing-law" icon={Landmark} title="Governing law">
          <p className={MUTED}>
            These Terms are governed by the laws of the jurisdiction in
            which EAX Global Ltd is incorporated, without regard to its
            conflict of law principles.
          </p>
        </LegalSection>

        <LegalContactCard copy="Questions about these Terms can be directed to our team." />
      </LegalLayout>
    </>
  );
}
