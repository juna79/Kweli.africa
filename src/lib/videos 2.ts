// Kweli Solutions YouTube channel (youtube.com/@KweliSolutions). Thumbnails are
// self-hosted in public/videos/<id>.jpg so no third-party request is made until
// a visitor presses play.
export type KweliVideo = {
  id: string;
  title: string;
  caption: string;
  duration: string;
};

export const videos = {
  walkthrough: {
    id: "PTi8fCYCeU8",
    title: "Kweli Product Walkthrough",
    caption: "See how a document is registered at source and checked by the person who receives it.",
    duration: "1:01",
  },
  motor: {
    id: "EkWnzsZ8zuw",
    title: "Motor Insurance Claims",
    caption: "A garage estimate is checked against what the garage actually issued, before the claim is paid.",
    duration: "1:51",
  },
  hospitalInsurer: {
    id: "Bx9U4S3APG0",
    title: "Hospital to Insurer",
    caption: "Medical claim documents verified at source before an insurer decides.",
    duration: "1:15",
  },
  beforeAi: {
    id: "5ZDPEc1EIoQ",
    title: "Check the Document Before AI Uses It",
    caption: "Confirm a document is genuine first, so AI-assisted claims decisions start from trusted evidence.",
    duration: "1:15",
  },
  moneyMoves: {
    id: "jZikgVkgZdM",
    title: "Before the Money Moves",
    caption: "Why a bank should check the document before it releases funds.",
    duration: "0:59",
  },
  hospitalBank: {
    id: "ZWv2ZzVoE8U",
    title: "Hospital Invoice to Bank",
    caption: "Receivable financing where the bank relies on a confirmed invoice, not a forwarded PDF.",
    duration: "1:15",
  },
  lab: {
    id: "Q6t3c0J6yvs",
    title: "Can You Trust a Lab Report?",
    caption: "A lab result is checked against the version the laboratory registered.",
    duration: "1:10",
  },
  visa: {
    id: "SuC3MMg13hs",
    title: "The Visa Application Journey",
    caption: "Supporting documents from several issuers, checked at source for an embassy.",
    duration: "1:41",
  },
  certificate: {
    id: "B2IT8CMaydk",
    title: "Is This Certificate Genuine?",
    caption: "How an employer or institution can check a certificate with the school that issued it.",
    duration: "1:13",
  },
  flowers: {
    id: "6KV3pmqFnAM",
    title: "From Flower Exporter to Buyer",
    caption: "A forwarded invoice with changed bank details is caught before payment.",
    duration: "1:16",
  },
  assets: {
    id: "egE-3mveUx0",
    title: "The Documents Behind the Assets",
    caption: "Checking issuer documents behind a commodity lot before it is financed.",
    duration: "1:03",
  },
  building: {
    id: "LRI9elYBsYI",
    title: "The Documents Behind a Building",
    caption: "A forwarded rent roll fails the check; the issued version verifies.",
    duration: "1:15",
  },
  receipt: {
    id: "L33RTmn3kHs",
    title: "Check the Receipt",
    caption: "A PDF receipt arriving over WhatsApp, verified at source.",
    duration: "1:08",
  },
} satisfies Record<string, KweliVideo>;

export const industryVideos: Record<string, KweliVideo[]> = {
  insurance: [videos.motor, videos.hospitalInsurer, videos.beforeAi],
  banking: [videos.moneyMoves, videos.hospitalBank],
  healthcare: [videos.lab, videos.hospitalInsurer],
  government: [videos.visa],
  education: [videos.certificate],
  trade: [videos.flowers, videos.assets],
  "professional-services": [videos.building, videos.receipt],
};
