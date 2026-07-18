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
      heading: "What personal information we collect",
      paragraphs: [
        "We collect only what we need to run this website and respond to the people who use it. Depending on how you interact with us, that can include:",
      ],
      list: [
        "Contact details you give us — name, work email address, company name, and industry, typically when you request a demo or get in touch",
        "The content of any message you send us, for example what you write in a demo request or an email",
        "Standard technical information collected automatically when you visit the Site, such as IP address, browser and device type, and the pages you view",
      ],
    },
    {
      heading: "How information is collected",
      paragraphs: [
        "Most of what we hold about you, you gave us directly — by filling in the demo request form or emailing us. Technical information is collected automatically as a normal part of serving web pages and understanding how the Site is used, described in more detail below.",
      ],
    },
    {
      heading: "Website analytics",
      paragraphs: [
        "We may use analytics tools to understand, in aggregate, how visitors use the Site — for example, which pages are viewed and how people arrive at the Site. This helps us improve it. Analytics data is typically aggregated and is not used to build individual profiles beyond what's needed to understand overall usage.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "The Site uses a small number of cookies for essential functionality and, where enabled, to understand aggregate usage. Full detail on what each cookie does and how to control them is in our Cookie Policy.",
      ],
    },
    {
      heading: "Demo request information",
      paragraphs: [
        "When you request a demo through the Site, the details you submit — name, work email, company, industry, and any message — are sent to our team so we can follow up and schedule a conversation. We use this information only to respond to your request and, if it leads to an ongoing relationship, to communicate with you about it. We don't use it for anything else, and we don't sell it.",
      ],
    },
    {
      heading: "Uploaded documents and how verification works",
      paragraphs: [
        "Kweli is built so that we never see the documents you verify. When you use Kweli to check a document, the document itself is processed locally in your browser and is never uploaded to our servers.",
        "Only a cryptographic fingerprint of the document — a one-way hash that cannot be reversed to reconstruct the document — together with limited metadata supplied at registration, such as the issuer's identity and a timestamp, is transmitted to and stored in the Kweli registry.",
        "Because the underlying document never leaves your device during verification, we have no access to, and do not store, the content of any document you check. Unless a specific product feature says otherwise at the point you use it, Kweli does not retain a copy of any document you upload or verify — only its fingerprint.",
      ],
    },
    {
      heading: "Security",
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
      heading: "Third-party services",
      paragraphs: [
        "We rely on a small number of service providers to run the Site and respond to enquiries — for example, providers of website hosting, form submission handling, analytics, and email delivery. Each is only given the information needed to perform its function, and each is bound by appropriate confidentiality obligations.",
        "We do not sell personal information. Beyond the service providers above, we may share information if required by law, to protect the rights, property, or safety of EAX Global, our users, or others, or as part of a merger, acquisition, financing, or sale of business assets.",
      ],
    },
    {
      heading: "International data transfers",
      paragraphs: [
        "We may process and store information in countries other than your own. Where we do, we take steps intended to ensure that information receives an appropriate level of protection, wherever it is processed.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "Depending on where you are located, you may have rights to access, correct, delete, or restrict the use of your personal information, or to object to its processing. To exercise these rights, contact us at info@kweli.solutions.",
      ],
    },
    {
      heading: "Children's privacy",
      paragraphs: [
        "The Site and the Kweli service are intended for business use and are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.",
      ],
    },
    {
      heading: "Updates to this policy",
      paragraphs: [
        "We may update this Policy from time to time. We will post the updated version on this page with a revised “Last updated” date. If changes are significant, we'll make that clear on this page.",
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
