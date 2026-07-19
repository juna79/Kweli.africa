// Single source of truth for the production domain, consumed by
// layout.tsx (metadataBase), sitemap.ts, robots.ts, and every schema
// builder below — one place to change if the domain ever moves.
export const siteUrl = "https://kweli.solutions";
export const siteName = "Kweli";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kweli",
    url: siteUrl,
    logo: `${siteUrl}/brand/Kweli_Logo_Transparent.png`,
    description:
      "Kweli is trust infrastructure that lets anyone verify a document is the genuine, unaltered version issued by its named organisation — without storing the document itself.",
    email: "info@kweli.solutions",
    parentOrganization: {
      "@type": "Organization",
      name: "EAX Global",
      url: "https://eaxglobal.io",
    },
    sameAs: [
      "https://www.instagram.com/kwelibyeax/",
      "https://x.com/EAXGlobal",
      "https://www.linkedin.com/company/eaxglobal/",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kweli",
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: "Kweli",
      url: siteUrl,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function articleSchema({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  authorName,
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteUrl}/insights/${slug}`,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Kweli",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/brand/Kweli_Logo_Transparent.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/insights/${slug}`,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
