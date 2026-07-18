export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalPageContent = {
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};
