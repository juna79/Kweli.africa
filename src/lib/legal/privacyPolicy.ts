import type { LegalPageContent } from "@/lib/legal/types";

export const privacyPolicy: LegalPageContent = {
  title: "Privacy Policy",
  lastUpdated: "18 July 2026",
  intro: [
    "This Privacy Policy explains how EAX Global Ltd (“EAX Global,” “we,” “us,” or “our”) collects, uses, and protects information in connection with Kweli, our independent document verification platform, and this website (the “Site”).",
    "By using the Site or the Kweli service, you agree to the practices described in this Policy.",
  ],
  sections: [
    {
      heading: "Information we collect",
      paragraphs: [
        "We collect information in the following ways:",
      ],
      list: [
        "Information you provide directly — for example, your name, work email address, company name, industry, and any message you include when you request a demo or contact us.",
        "Information collected automatically — standard technical information such as IP address, browser type, device type, pages viewed, and referring pages, typically gathered through analytics tools when you visit the Site.",
      ],
    },
    {
      heading: "How document verification works",
      paragraphs: [
        "Kweli is built so that we never see the documents you verify. When you use Kweli to check a document, the document itself is processed locally in your browser and is never uploaded to our servers.",
        "Only a cryptographic fingerprint of the document — together with limited metadata supplied at registration, such as the issuer's identity and a timestamp — is transmitted to and stored in the Kweli registry.",
        "Because the underlying document never leaves your device during verification, we have no access to, and do not store, the content of any document you check.",
      ],
    },
    {
      heading: "How we use information",
      paragraphs: ["We use the information we collect to:"],
      list: [
        "Respond to demo requests and business enquiries",
        "Operate, maintain, and improve the Site and the Kweli service",
        "Communicate with you about updates, security notices, and administrative matters",
        "Understand how visitors use the Site so that we can improve it",
        "Comply with our legal obligations",
      ],
    },
    {
      heading: "Cookies and analytics",
      paragraphs: [
        "The Site may use cookies and similar technologies for essential functionality and to understand aggregate usage patterns. You can control cookies through your browser settings; disabling them may affect some Site functionality.",
      ],
    },
    {
      heading: "How we share information",
      paragraphs: [
        "We do not sell personal information. We may share information in the following circumstances:",
      ],
      list: [
        "With service providers who help us operate the Site — for example, hosting, analytics, and email delivery — each bound by appropriate confidentiality obligations",
        "If required by law, or to protect the rights, property, or safety of EAX Global, our users, or others",
        "As part of a merger, acquisition, financing, or sale of business assets, in which case information may be transferred as part of that transaction",
      ],
    },
    {
      heading: "Data security",
      paragraphs: [
        "We use reasonable technical and organisational measures designed to protect information from unauthorised access, loss, or misuse. Fingerprint records registered with Kweli are anchored using tamper-evident cryptographic techniques, so that a registered record cannot be quietly altered after the fact.",
        "No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      heading: "Data retention",
      paragraphs: [
        "We retain contact and business information for as long as reasonably necessary to respond to your enquiry and maintain our business relationship, or as required by law.",
        "Document fingerprints and associated metadata registered on Kweli are retained as part of the permanent verification record, since their purpose is to allow authenticity to be checked at any point in the future. No underlying document content is ever retained, because none is ever received.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "Depending on where you are located, you may have rights to access, correct, delete, or restrict the use of your personal information, or to object to its processing. To exercise these rights, contact us at info@kweli.solutions.",
      ],
    },
    {
      heading: "International data transfers",
      paragraphs: [
        "We may process and store information in countries other than your own. Where we do, we take steps intended to ensure that information receives an appropriate level of protection.",
      ],
    },
    {
      heading: "Children's privacy",
      paragraphs: [
        "The Site and the Kweli service are intended for business use and are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this Policy from time to time. We will post the updated version on this page with a revised “Last updated” date.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [
        "Questions about this Policy or how we handle information can be directed to info@kweli.solutions.",
      ],
    },
  ],
};
