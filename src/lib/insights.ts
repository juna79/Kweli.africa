import type { Industry } from "@/lib/industries";

// Shape matches the approved Supabase Articles schema exactly
// (Kweli_V3_Master_Kickoff.md §12) so wiring the real table later is a
// data-source swap in this file only — nothing above it should change.
//
// Content below is placeholder/mock, not approved editorial copy. Real
// article bodies come from Brain once the Articles module exists there;
// flag before publishing anything derived from this file verbatim.
export type ArticleStatus = "draft" | "published";

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string[];
  cover_image_url: string | null;
  industry: Industry["slug"] | null;
  status: ArticleStatus;
  is_featured: boolean;
  author_name: string;
  published_at: string;
  created_at: string;
  updated_at: string;
};

const articles: Article[] = [
  {
    id: "1",
    title: "Authenticity is not truth — and the difference matters",
    slug: "authenticity-is-not-truth",
    excerpt:
      "Kweli can tell you a document is exactly the one an issuer registered. It will never tell you the document is correct. Conflating the two is where trust infrastructure goes wrong.",
    body: [
      "Every verification system eventually faces the same question from a new user: \"So if it's verified, it's true?\" The honest answer is no, and the distinction is the whole point.",
      "Kweli verifies two things: that a document is unchanged since the moment it was issued, and that it genuinely came from the organisation it claims to. Neither of those is a judgement about whether the contents are correct. A hospital can issue a medical report with a genuine clerical error; Kweli still verifies it as authentic, because it authentically came from that hospital, unaltered.",
      "That boundary is deliberate, not a limitation to apologise for. The moment a verification layer starts making claims about factual correctness, it has taken on responsibility that belongs with the issuer — and it has made a promise it cannot keep at scale, across every industry, for every kind of document.",
      "Authenticity and integrity are the layer independent parties can build confidence on. Truth stays where it has always belonged: with the organisation that created the record.",
    ],
    cover_image_url: null,
    industry: null,
    status: "published",
    is_featured: true,
    author_name: "Kweli Team",
    published_at: "2026-06-02T09:00:00.000Z",
    created_at: "2026-06-01T14:00:00.000Z",
    updated_at: "2026-06-02T09:00:00.000Z",
  },
  {
    id: "2",
    title: "Why insurance claims are a document-trust problem in disguise",
    slug: "insurance-claims-document-trust-problem",
    excerpt:
      "A repair estimate, an assessor report, a medical report — every claim is really a chain of documents changing hands. Slow it down, and you can see exactly where confidence breaks.",
    body: [
      "Ask a claims handler what makes a file slow, and the answer is rarely the assessment itself. It's the second phone call to the garage to confirm the estimate hasn't changed. It's re-requesting a report because a scan looked slightly off. It's the manual confirmation work that exists only because there was no independent way to trust the document the first time.",
      "Every one of those documents — the repair estimate, the assessor report, the police abstract, the medical report — feeds directly into a payout decision. None of them are created by the insurer. All of them can be altered, intentionally or not, after they're issued.",
      "This is why claims handling is a useful place to start thinking about trust infrastructure: the workflow already exists, the documents already flow through recognisable steps, and the cost of an unverifiable document is easy to measure in hours, not abstractions.",
    ],
    cover_image_url: null,
    industry: "insurance",
    status: "published",
    is_featured: false,
    author_name: "Kweli Team",
    published_at: "2026-05-18T09:00:00.000Z",
    created_at: "2026-05-16T11:00:00.000Z",
    updated_at: "2026-05-18T09:00:00.000Z",
  },
  {
    id: "3",
    title: "The certificate problem every employer has and nobody talks about",
    slug: "certificate-problem-every-employer-has",
    excerpt:
      "Verifying a degree certificate today usually means calling a registrar's office and waiting. It should mean a few seconds and a fingerprint.",
    body: [
      "A degree certificate is one of the most consequential documents a person will ever hand to a stranger — and one of the least verifiable in practice. The standard process is to call the institution, wait for a records office to respond, and hope the response arrives before the hiring decision needs to be made.",
      "None of that friction exists because verification is hard. It exists because there has never been an independent way for the receiving party — an employer, another institution, a regulator — to confirm a certificate is unchanged since the day it was issued, without going back to the source every time.",
      "Registering a certificate's fingerprint at the moment of issuance flips that: the graduate can share the document freely, and anyone holding it can verify it in seconds, independent of whether the registrar's office is reachable that day.",
    ],
    cover_image_url: null,
    industry: "education",
    status: "published",
    is_featured: false,
    author_name: "Kweli Team",
    published_at: "2026-04-27T09:00:00.000Z",
    created_at: "2026-04-25T10:00:00.000Z",
    updated_at: "2026-04-27T09:00:00.000Z",
  },
  {
    id: "4",
    title: "Trust infrastructure is a category, not a feature",
    slug: "trust-infrastructure-category-not-feature",
    excerpt:
      "Payment infrastructure lets money move between organisations that don't fully trust each other. Trust infrastructure does the same for confidence in a document.",
    body: [
      "It's tempting to describe what Kweli does as a feature: hash a file, check it against a registry, show a badge. That description is accurate and also misses the point entirely.",
      "Payment rails didn't win because moving money was hard to code. They won because they became infrastructure every business could assume was simply there — a layer nobody has to build for themselves and everybody can rely on. Trust infrastructure aims at the same outcome for documents: a layer that sits underneath claims platforms, registries, and workflows that already exist, strengthening them rather than replacing them.",
      "Success looks less like a product launch and more like a shift in expectation — a point where receiving a document with no way to independently verify it feels as unusual as receiving a website with no encryption.",
    ],
    cover_image_url: null,
    industry: null,
    status: "published",
    is_featured: false,
    author_name: "Kweli Team",
    published_at: "2026-03-30T09:00:00.000Z",
    created_at: "2026-03-28T09:00:00.000Z",
    updated_at: "2026-03-30T09:00:00.000Z",
  },
  {
    id: "5",
    title: "What a shipment's paperwork has to survive before it's trusted",
    slug: "trade-documentation-trust-across-borders",
    excerpt:
      "A certificate of origin changes hands across exporters, carriers, and customs long before anyone downstream can confirm it's the document that was actually issued.",
    body: [
      "Trade documentation has a structural trust problem that's easy to miss because it's so normal: a certificate of origin or inspection report is created once, at the point of export, and then relied upon by a long chain of parties who had no part in creating it — freight forwarders, customs officials, buyers, banks issuing letters of credit.",
      "Every handoff in that chain is a place where a document could be altered, substituted, or simply misrepresented, and very few of those parties have a fast, independent way to check. The result is either accepted risk or extra verification cost passed down the chain.",
      "Registering the fingerprint of a certificate at the moment of export gives every downstream party the same independent check, without adding a step to the paperwork the exporter already produces.",
    ],
    cover_image_url: null,
    industry: "trade",
    status: "published",
    is_featured: false,
    author_name: "Kweli Team",
    published_at: "2026-03-09T09:00:00.000Z",
    created_at: "2026-03-07T09:00:00.000Z",
    updated_at: "2026-03-09T09:00:00.000Z",
  },
];

export function getPublishedArticles(): Article[] {
  return articles
    .filter((a) => a.status === "published")
    .sort((a, b) => (a.published_at < b.published_at ? 1 : -1));
}

export function getFeaturedArticle(): Article | undefined {
  const published = getPublishedArticles();
  return published.find((a) => a.is_featured) ?? published[0];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug && a.status === "published");
}
