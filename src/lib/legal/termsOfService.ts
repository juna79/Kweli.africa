import type { LegalPageContent } from "@/lib/legal/types";

export const termsOfService: LegalPageContent = {
  title: "Terms of Service",
  lastUpdated: "18 July 2026",
  intro: [
    "These Terms of Service (“Terms”) govern your access to and use of this website and the Kweli document verification service (together, the “Service”), provided by EAX Global Ltd (“EAX Global,” “we,” “us,” or “our”).",
    "By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.",
  ],
  sections: [
    {
      heading: "Description of service",
      paragraphs: [
        "Kweli is an independent trust layer that allows a document's authenticity to be verified against the version originally registered by its issuer. Kweli confirms whether a document matches the version registered at issuance; it does not verify, endorse, or make any determination about the truth, accuracy, or validity of the information contained within a document.",
      ],
    },
    {
      heading: "Website usage and eligibility",
      paragraphs: [
        "The Service is intended for business and professional use. By using the Service, you represent that you have the authority to do so, including on behalf of your organisation where applicable.",
      ],
    },
    {
      heading: "Acceptable use",
      paragraphs: ["When using the Service, you agree not to:"],
      list: [
        "Use the Service for any unlawful purpose or in violation of any applicable law or regulation",
        "Attempt to interfere with, disrupt, or gain unauthorised access to the Service or its underlying systems",
        "Reverse engineer, decompile, or attempt to extract the source code of the Service, except where permitted by law",
        "Use the Service to register fraudulent documents or to misrepresent the origin or authenticity of any document",
        "Use automated means to access the Service at a volume or frequency a human could not reasonably produce, without our prior written consent",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The Site, the Kweli name and logo, and all related content, features, and functionality are owned by EAX Global Ltd or its licensors and are protected by applicable intellectual property laws. Nothing in these Terms grants you any right to use the Kweli name, logo, or branding without our prior written consent.",
      ],
    },
    {
      heading: "Third-party links",
      paragraphs: [
        "The Site may contain links to third-party websites, including EAX Global's corporate site and our social media profiles. We are not responsible for the content or practices of third-party sites.",
      ],
    },
    {
      heading: "Demo requests",
      paragraphs: [
        "Submitting a demo request through the Site is an enquiry, not a contract. It doesn't commit you, or us, to anything — it simply lets our team follow up to arrange a conversation. Any commercial relationship that follows is subject to its own separate agreement.",
      ],
    },
    {
      heading: "Authenticity, integrity, and truthfulness — what verification does and doesn't mean",
      paragraphs: [
        "This distinction matters, and we want it to be unambiguous. Kweli speaks to two specific properties of a document, and does not speak to a third:",
      ],
      list: [
        "Authenticity — whether the document actually originates from the issuer it claims to. Kweli helps establish this by comparing a presented document against the fingerprint registered by that issuer at the time of issuance.",
        "Integrity — whether the document is unchanged since it was registered. A “Verified” result means the document presented today is byte-for-byte identical to the version originally registered; the smallest alteration would change its fingerprint and break the match.",
        "Truthfulness — whether the information written in the document is accurate. Kweli makes no assessment of this at all. A document can be perfectly authentic and unaltered while still containing information that is incomplete, mistaken, or false — Kweli verifies the document, not the facts inside it.",
      ],
    },
    {
      heading: "Verification service limitations",
      paragraphs: [
        "A “Verified” result means the presented document matches the version registered at issuance. It does not mean that the issuer is legitimate, that the document's content is accurate, or that any transaction or decision based on the document is sound.",
        "A “Document Not Found” result means no registered record exists for the document; it does not, by itself, mean that the document is fraudulent — it may simply predate registration or have been issued by an organisation not yet using Kweli.",
        "Decisions made on the basis of a Kweli verification result remain the sole responsibility of the party making them.",
      ],
    },
    {
      heading: "No warranties",
      paragraphs: [
        "The Service is provided “as is” and “as available,” without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or completely secure, and we do not warrant or guarantee the truthfulness of any document's contents.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by law, EAX Global Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, arising from or related to your use of the Service, even if advised of the possibility of such damages.",
      ],
    },
    {
      heading: "Availability of the service",
      paragraphs: [
        "We aim to keep the Service available and reliable, but we don't guarantee uninterrupted access. The Service may be unavailable from time to time for maintenance, updates, or reasons outside our control, and we may change, suspend, or discontinue any part of it without liability to you for doing so.",
      ],
    },
    {
      heading: "Termination",
      paragraphs: [
        "We may suspend or terminate access to the Service at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.",
      ],
    },
    {
      heading: "Changes to these terms",
      paragraphs: [
        "We may update these Terms from time to time. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These Terms are governed by the laws of the jurisdiction in which EAX Global Ltd is incorporated, without regard to its conflict of law principles.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [
        "Questions about these Terms can be directed to info@kweli.solutions.",
      ],
    },
  ],
};
