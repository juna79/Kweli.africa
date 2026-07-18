import {
  Lock,
  EyeOff,
  ShieldCheck,
  IdCard,
  MousePointerClick,
  BarChart3,
  Cookie,
  CalendarClock,
  Fingerprint,
  Archive,
  Share2,
  Globe,
  Scale,
  Users,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection, LegalList } from "@/components/legal/LegalSection";
import { LegalCallout } from "@/components/legal/LegalCallout";
import { LegalContactCard } from "@/components/legal/LegalContactCard";

const MUTED = "text-[var(--color-slate)]";

const toc = [
  { id: "what-we-collect", label: "What we collect" },
  { id: "how-collected", label: "How it's collected" },
  { id: "analytics", label: "Website analytics" },
  { id: "cookies", label: "Cookies" },
  { id: "demo-requests", label: "Demo requests" },
  { id: "documents", label: "Uploaded documents" },
  { id: "security", label: "Security" },
  { id: "retention", label: "Data retention" },
  { id: "third-parties", label: "Third-party services" },
  { id: "transfers", label: "International transfers" },
  { id: "rights", label: "Your rights" },
  { id: "children", label: "Children's privacy" },
  { id: "updates", label: "Updates to this policy" },
];

function Philosophy() {
  const points = [
    { icon: Lock, label: "Processed locally, in your browser" },
    { icon: EyeOff, label: "The document itself is never uploaded" },
    { icon: ShieldCheck, label: "Only a fingerprint reaches our servers" },
  ];

  return (
    <section className="relative px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal className="space-y-6 text-center">
          <p className="text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-warm-paper)]">
            Kweli exists to verify documents without asking anyone to hand
            theirs over. That principle doesn&rsquo;t stop at the product —
            it&rsquo;s how we think about privacy across this entire
            website.
          </p>
          <p className={`text-[length:var(--text-body)] leading-[var(--text-body--line-height)] ${MUTED}`}>
            We collect what&rsquo;s reasonably needed to run a business
            website and respond to the people who visit it. We don&rsquo;t
            collect, and have no way to see, the contents of any document you
            verify.
          </p>
        </Reveal>

        <Reveal delayMs={100} className="mt-14 grid gap-4 sm:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.label}
              className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-6 text-center"
            >
              <point.icon size={20} strokeWidth={1.75} className="text-[var(--color-gold-bright)]" aria-hidden />
              <span className="text-sm leading-snug text-[var(--color-slate)]">{point.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function PrivacyPolicyPage() {
  return (
    <>
      <LegalHero
        eyebrow="Privacy Policy"
        title="Your documents belong to you."
        subtitle="Kweli verifies authenticity without taking ownership of your data."
        lastUpdated="18 July 2026"
      />
      <Philosophy />

      <LegalLayout toc={toc}>
        <LegalSection id="what-we-collect" icon={IdCard} title="What personal information we collect">
          <p>We collect only what we need to run this website and respond to the people who use it. Depending on how you interact with us, that can include:</p>
          <LegalList
            items={[
              "Contact details you give us — name, work email address, company name, and industry, typically when you request a demo or get in touch",
              "The content of any message you send us, for example what you write in a demo request or an email",
              "Standard technical information collected automatically when you visit the Site, such as IP address, browser and device type, and the pages you view",
            ]}
          />
        </LegalSection>

        <LegalSection id="how-collected" icon={MousePointerClick} title="How information is collected">
          <p>
            Most of what we hold about you, you gave us directly — by filling
            in the demo request form or emailing us. Technical information is
            collected automatically as a normal part of serving web pages and
            understanding how the Site is used.
          </p>
        </LegalSection>

        <LegalSection id="analytics" icon={BarChart3} title="Website analytics">
          <p>
            We may use analytics tools to understand, in aggregate, how
            visitors use the Site — for example, which pages are viewed and
            how people arrive at the Site. Analytics data is typically
            aggregated and isn&rsquo;t used to build individual profiles
            beyond what&rsquo;s needed to understand overall usage.
          </p>
        </LegalSection>

        <LegalSection id="cookies" icon={Cookie} title="Cookies">
          <p>
            The Site uses a small number of cookies for essential
            functionality and, where enabled, to understand aggregate usage.
            Full detail on what each cookie does and how to control them is
            in our{" "}
            <Link href="/cookies" className="text-[var(--color-gold-bright)] underline underline-offset-2">
              Cookie Policy
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection id="demo-requests" icon={CalendarClock} title="Demo request information">
          <p>
            When you request a demo through the Site, the details you submit
            — name, work email, company, industry, and any message — are
            sent to our team so we can follow up and schedule a conversation.
            We use this information only to respond to your request and, if
            it leads to an ongoing relationship, to communicate with you
            about it. We don&rsquo;t use it for anything else, and we
            don&rsquo;t sell it.
          </p>
        </LegalSection>

        <LegalSection id="documents" icon={Fingerprint} title="Uploaded documents and how verification works">
          <p>
            Kweli is built so that we never see the documents you verify.
            When you use Kweli to check a document, the document itself is
            processed locally in your browser and is never uploaded to our
            servers.
          </p>
          <p>
            Only a cryptographic fingerprint of the document — a one-way hash
            that cannot be reversed to reconstruct the document — together
            with limited metadata supplied at registration, such as the
            issuer&rsquo;s identity and a timestamp, is transmitted to and
            stored in the Kweli registry.
          </p>
          <LegalCallout icon={ShieldCheck} tone="gold">
            Because the underlying document never leaves your device during
            verification, we have no access to, and do not store, the
            content of any document you check. Unless a specific product
            feature says otherwise at the point you use it, Kweli does not
            retain a copy of any document you upload or verify — only its
            fingerprint.
          </LegalCallout>
        </LegalSection>

        <LegalSection id="security" icon={ShieldCheck} title="Security">
          <p>
            We use reasonable technical and organisational measures designed
            to protect information from unauthorised access, loss, or
            misuse. Fingerprint records registered with Kweli are anchored
            using tamper-evident cryptographic techniques, so that a
            registered record cannot be quietly altered after the fact.
          </p>
          <p>No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
        </LegalSection>

        <LegalSection id="retention" icon={Archive} title="Data retention">
          <p>
            We retain contact and business information for as long as
            reasonably necessary to respond to your enquiry and maintain our
            business relationship, or as required by law.
          </p>
          <p>
            Document fingerprints and associated metadata registered on
            Kweli are retained as part of the permanent verification record,
            since their purpose is to allow authenticity to be checked at
            any point in the future. No underlying document content is ever
            retained, because none is ever received.
          </p>
        </LegalSection>

        <LegalSection id="third-parties" icon={Share2} title="Third-party services">
          <p>
            We rely on a small number of service providers to run the Site
            and respond to enquiries — for example, providers of website
            hosting, form submission handling, analytics, and email
            delivery. Each is only given the information needed to perform
            its function, and each is bound by appropriate confidentiality
            obligations.
          </p>
          <p>
            We do not sell personal information. Beyond the service
            providers above, we may share information if required by law, to
            protect the rights, property, or safety of EAX Global, our
            users, or others, or as part of a merger, acquisition,
            financing, or sale of business assets.
          </p>
        </LegalSection>

        <LegalSection id="transfers" icon={Globe} title="International data transfers">
          <p>
            We may process and store information in countries other than
            your own. Where we do, we take steps intended to ensure that
            information receives an appropriate level of protection,
            wherever it is processed.
          </p>
        </LegalSection>

        <LegalSection id="rights" icon={Scale} title="Your rights">
          <p>
            Depending on where you are located, you may have rights to
            access, correct, delete, or restrict the use of your personal
            information, or to object to its processing. To exercise these
            rights, contact us at info@kweli.solutions.
          </p>
        </LegalSection>

        <LegalSection id="children" icon={Users} title="Children's privacy">
          <p>
            The Site and the Kweli service are intended for business use and
            are not directed to individuals under the age of 18. We do not
            knowingly collect personal information from children.
          </p>
        </LegalSection>

        <LegalSection id="updates" icon={RefreshCw} title="Updates to this policy">
          <p>
            We may update this Policy from time to time. We will post the
            updated version on this page with a revised &ldquo;Last
            updated&rdquo; date. If changes are significant, we&rsquo;ll make
            that clear on this page.
          </p>
        </LegalSection>

        <LegalContactCard copy="Questions about this Policy or how we handle information can be directed to our team." />
      </LegalLayout>
    </>
  );
}
