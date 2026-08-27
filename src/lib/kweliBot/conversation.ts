/**
 * Kweli Bot — conversation flow (data-driven decision tree) + typed-question
 * matcher. This is separate from the UI component so the flow can grow without
 * touching component code, and so a model API could later replace the matcher
 * without changing the interface.
 *
 * No AI is used here. Typed questions are matched to approved FAQ topics only
 * on a HIGH-CONFIDENCE keyword score; otherwise the bot offers to pass the
 * question to the team. It never invents answers.
 */

import { faqs, industries, type Faq } from "./knowledge";

/** A selectable option (chip) in the guided flow. */
export type Option = {
  label: string;
  /** Machine value stored in the conversation context. */
  value: string;
  /** Optional id of the next step to go to. Defaults to linear progression. */
  next?: StepId;
  /**
   * Natural wording a visitor might type instead of clicking this option
   * (e.g. "both" for "We do both"). Matching metadata only — never displayed.
   */
  aliases?: string[];
};

export type StepId =
  | "industry"
  | "role"
  | "documents"
  | "movement"
  | "checking"
  | "concern"
  | "volume"
  | "explainer"
  | "nextStep";

export type Step = {
  id: StepId;
  /** The bot's prompt for this step. */
  prompt: string;
  /**
   * Key under which the selected value is stored in the running context.
   * Steps that render dynamically (documents) or are terminal may omit it.
   */
  contextKey?: keyof ConversationContext;
  /** Static options. `documents` options are generated from the chosen industry. */
  options?: Option[];
  /** Allow selecting more than one option (documents). */
  multi?: boolean;
};

/** Everything the flow has learned, carried into lead capture (no re-asking). */
export type ConversationContext = {
  industry?: string;
  role?: string;
  documents?: string[];
  movement?: string;
  checking?: string;
  concern?: string;
  volume?: string;
};

export const roleOptions: Option[] = [
  { label: "We mainly issue documents", value: "issue", aliases: ["issue", "we issue", "mainly issue", "mostly issue", "issuer", "we create", "we produce", "we send"] },
  { label: "We mainly receive documents", value: "receive", aliases: ["receive", "we receive", "mainly receive", "mostly receive", "we get", "incoming", "we accept"] },
  { label: "We do both", value: "both", aliases: ["both", "we do both", "issue and receive", "send and receive", "either"] },
];

export const movementOptions: Option[] = [
  { label: "Email", value: "email", aliases: ["email", "emails", "by email", "over email", "e-mail"] },
  { label: "WhatsApp or messaging", value: "messaging", aliases: ["whatsapp", "messaging", "message", "sms", "text", "chat", "telegram"] },
  { label: "A portal or upload", value: "portal", aliases: ["portal", "upload", "uploads", "web portal", "online portal", "our system", "platform"] },
  { label: "Courier or paper", value: "paper", aliases: ["courier", "paper", "postal", "hand delivery", "printed", "hard copy", "physical", "by post"] },
  { label: "Through a broker or intermediary", value: "intermediary", aliases: ["broker", "brokers", "intermediary", "agent", "agents", "middleman", "third party"] },
  { label: "Other", value: "other", aliases: ["other", "something else", "none of these", "different"] },
];

export const checkingOptions: Option[] = [
  { label: "We phone or email the issuer", value: "contact-issuer", aliases: ["phone", "call", "we call", "ring", "email the issuer", "contact the issuer", "check with the issuer"] },
  { label: "Manual review by our team", value: "manual", aliases: ["manual", "manually", "by hand", "our team reviews", "we review", "review", "we check manually"] },
  { label: "We generally trust the sender", value: "trust", aliases: ["trust", "we trust", "take their word", "assume", "trust the sender"] },
  { label: "There's no reliable way today", value: "none", aliases: ["no reliable way", "no way", "we cant", "cannot verify", "nothing", "no method", "we dont"] },
  { label: "Other", value: "other", aliases: ["other", "something else", "different"] },
];

export const concernOptions: Option[] = [
  { label: "Documents being altered", value: "alteration", aliases: ["altered", "alteration", "tampering", "tampered", "forgery", "forged", "fraud", "fake", "edited", "changed"] },
  { label: "Slow approvals", value: "speed", aliases: ["slow", "speed", "slow approvals", "delays", "turnaround", "faster", "time"] },
  { label: "Cost of manual checking", value: "cost", aliases: ["cost", "costs", "expensive", "efficiency", "save money", "reduce cost", "manual cost"] },
  { label: "Audit and compliance", value: "compliance", aliases: ["audit", "compliance", "regulatory", "regulation", "auditability", "compliant"] },
  { label: "Trusting counterparties", value: "counterparty", aliases: ["counterparties", "counterparty", "third parties", "trusting others", "partners"] },
  { label: "Other", value: "other", aliases: ["other", "something else", "different"] },
];

export const volumeOptions: Option[] = [
  { label: "Fewer than 100 / month", value: "<100", aliases: ["less than 100", "under 100", "fewer than 100", "a few", "handful", "dozens", "tens", "small", "low"] },
  { label: "100–1,000 / month", value: "100-1000", aliases: ["hundreds", "a few hundred", "several hundred", "few hundred", "100 to 1000"] },
  { label: "1,000–10,000 / month", value: "1000-10000", aliases: ["thousands", "a few thousand", "several thousand", "1000 to 10000", "few thousand"] },
  { label: "More than 10,000 / month", value: ">10000", aliases: ["tens of thousands", "many thousands", "over 10000", "more than 10000", "huge", "very high", "massive"] },
  { label: "Not sure", value: "unsure", aliases: ["not sure", "unsure", "dunno", "no idea", "dont know", "not certain", "hard to say"] },
];

/**
 * The guided steps in order. `industry` options are injected by the component
 * from the knowledge base; `documents` options are derived from the chosen
 * industry at runtime.
 */
export const steps: Step[] = [
  {
    id: "industry",
    prompt: "What kind of documents does your organisation issue or receive?",
    contextKey: "industry",
    // options injected from knowledge.industries by the component
  },
  {
    id: "role",
    prompt: "Do you mainly issue these documents, receive them, or both?",
    contextKey: "role",
    options: roleOptions,
  },
  {
    id: "documents",
    prompt: "Which of these documents are involved? Pick any that apply.",
    contextKey: "documents",
    multi: true,
    // options derived from the chosen industry's exampleDocuments
  },
  {
    id: "movement",
    prompt: "How do those documents usually move between parties today?",
    contextKey: "movement",
    options: movementOptions,
  },
  {
    id: "checking",
    prompt: "And how are they checked today?",
    contextKey: "checking",
    options: checkingOptions,
  },
  {
    id: "concern",
    prompt: "What's your main concern?",
    contextKey: "concern",
    options: concernOptions,
  },
  {
    id: "volume",
    prompt: "Roughly how many of these documents do you handle each month?",
    contextKey: "volume",
    options: volumeOptions,
  },
];

/**
 * Deterministic typed-question matcher (no AI, no generated answers).
 *
 * Pipeline: normalise → tokenise → singularise → fuzzy-match against each
 * approved topic's aliases (natural phrases/intents) and keywords, tolerating
 * plurals and reasonable spelling mistakes. It prefers a clearly-winning topic
 * over the unknown fallback, asks one short clarification when two topics are
 * similarly likely, uses recent conversation context to break ties, and returns
 * only approved topics — never invents an answer when confidence is genuinely
 * low. Answers themselves always come from the knowledge base.
 */

export type MatchResult =
  | { kind: "match"; faq: Faq }
  | { kind: "clarify"; options: Faq[]; prompt?: string }
  | null;

function faqById(id: string): Faq | undefined {
  return faqs.find((f) => f.id === id);
}

// Words that carry no topical signal — ignored when requiring token overlap.
const STOPWORDS = new Set([
  "a","an","the","is","are","do","does","did","can","could","would","will",
  "it","this","that","my","our","your","we","you","i","to","of","for","on",
  "in","with","and","or","if","what","how","when","where","who","about","be",
  "me","us","them","they","he","she","get","use","using","need","want","much",
  "some","any","have","has","there","then","so","as","at","by","from","into",
]);

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/['’`]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function singular(t: string): string {
  if (t.length > 4 && t.endsWith("ies")) return `${t.slice(0, -3)}y`;
  if (t.length > 4 && (t.endsWith("ses") || t.endsWith("xes") || t.endsWith("ches") || t.endsWith("shes")))
    return t.slice(0, -2);
  if (t.length > 3 && t.endsWith("s") && !t.endsWith("ss")) return t.slice(0, -1);
  return t;
}

function tokens(norm: string): string[] {
  return norm ? norm.split(" ").map(singular) : [];
}

// Bounded Optimal String Alignment distance (Levenshtein + adjacent
// transposition counted as one edit, so "imaeg" ↔ "image" costs 1).
function editDistance(a: string, b: string): number {
  const la = a.length;
  const lb = b.length;
  if (Math.abs(la - lb) > 2) return 3;
  const d: number[][] = Array.from({ length: la + 1 }, () =>
    new Array(lb + 1).fill(0),
  );
  for (let i = 0; i <= la; i++) d[i][0] = i;
  for (let j = 0; j <= lb; j++) d[0][j] = j;
  for (let i = 1; i <= la; i++) {
    for (let j = 1; j <= lb; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[la][lb];
}

// Fuzzy equality tolerant to length-scaled typos (both already singularised).
function fuzzyEqual(a: string, b: string): boolean {
  if (a === b) return true;
  const maxLen = Math.max(a.length, b.length);
  if (maxLen <= 3) return false; // too short to fuzz safely
  const d = editDistance(a, b);
  if (maxLen <= 6) return d <= 1;
  return d <= 2;
}

function tokenInList(token: string, list: string[]): boolean {
  for (const t of list) if (fuzzyEqual(token, t)) return true;
  return false;
}

// All keyword tokens present (fuzzily) in the input → phrase/alias hit.
function allTokensPresent(needleTokens: string[], hayTokens: string[]): boolean {
  for (const nt of needleTokens) if (!tokenInList(nt, hayTokens)) return false;
  return needleTokens.length > 0;
}

type Scored = { faq: Faq; score: number };

// `contentTokens` are the input tokens minus stopwords. Single-word keywords are
// matched only against these, so a stopword like "can" can't fuzzy-match a short
// content word such as "scan". Multi-word phrases still use all tokens, so their
// stopwords (do/you/my…) match exactly.
function scoreFaq(faq: Faq, inputTokens: string[], contentTokens: string[]): number {
  let score = 0;
  const aliases = faq.aliases ?? [];
  for (const alias of aliases) {
    const at = tokens(normalize(alias));
    if (at.length && allTokensPresent(at, inputTokens)) {
      // Longer alias phrases are stronger, single-word aliases still count.
      score += at.length >= 2 ? 5 : 2.5;
    }
  }
  for (const keyword of faq.keywords) {
    const kt = tokens(normalize(keyword));
    if (kt.length >= 2) {
      if (allTokensPresent(kt, inputTokens)) score += 3;
    } else if (kt.length === 1) {
      // A single distinctive topical noun (e.g. "photograph", "screenshot",
      // "integration") is a strong signal on its own — even misspelled, via the
      // fuzzy match. Shorter/more generic words need a second signal.
      const w = kt[0];
      if (tokenInList(w, contentTokens)) {
        score += w.length >= 5 ? 3 : w.length >= 4 ? 1.5 : 1;
      }
    }
  }
  return score;
}

const MATCH_THRESHOLD = 3; // a phrase/alias hit, or a strong keyword combo
const CLARIFY_MARGIN = 1.5; // within this, two topics count as "similarly likely"

// Image-noun disambiguation (supported-file-types vs scan-or-photo).
const IMAGE_NOUNS = ["photo", "photograph", "picture", "image", "pic"];
// Registering the image/file itself → supported-file-types.
const REGISTER_TOKENS = [
  "register", "registering", "registers", "fingerprint", "fingerprinting",
  "upload", "uploading", "support", "supported", "format", "formats", "jpeg",
  "jpg", "png", "gif", "svg", "video", "audio", "spreadsheet", "presentation",
  "docx", "xlsx", "mp3", "mp4", "wav", "word", "excel", "doc",
];
const REGISTER_PHRASES = [
  "file type", "file types", "which file", "what files", "any file",
  "other file", "other files", "only work with", "work with", "register a",
  "register an", "register my", "fingerprint a", "upload a", "upload an",
  // A photo clearly described as a standalone file / evidence being registered
  // and verified → supported-file-types, not the register-vs-scan clarification.
  "accident photo", "accident photos", "vehicle photo", "vehicle photos",
  "damage photo", "damage photos", "claim photo", "claim photos",
  "evidence photo", "evidence photos", "evidence picture", "evidence pictures",
  "evidence image", "site photo", "inspection photo",
  "can it be verified", "can they be verified", "verify the photo itself",
  "register the photo itself", "photo as the original", "image as evidence",
];
// A photo/scan OF an already-registered document, or a genuinely changed copy →
// scan-or-photo. Bare "match" is deliberately excluded (an "exact same photo
// match?" question is about verifying the same file, not a changed copy);
// a real change is signalled by compressed/converted/cropped/re-saved etc. or
// the "match the …" phrases below.
const SCAN_TOKENS = [
  "scan", "scanned", "scanning", "screenshot", "photocopy", "printout",
  "paper", "copy", "copies", "compressed", "converted", "cropped",
  "re-saved", "resaved", "edited", "whatsapp",
];
const SCAN_PHRASES = [
  "photo of", "picture of", "photograph of", "image of", "screenshot of",
  "scan of", "photograph the", "photograph a", "photo of the", "picture of the",
  "of the document", "of the original", "of a document", "of my document",
  "of my registered", "of the pdf", "of my pdf", "registered document",
  "match the", "will match", "same file", "sent me a picture", "match the pdf",
  "match the original",
];
const IMAGE_CLARIFY_PROMPT =
  "Do you mean registering the photograph itself, or using a photograph of a document that was registered in another format?";

function phraseIn(norm: string, phrases: string[]): boolean {
  const padded = ` ${norm} `;
  return phrases.some((p) => padded.includes(` ${p} `) || norm.includes(p));
}

/**
 * @param contextIds most-recent topic ids first — used only to break ties.
 */
export function matchFaqDetailed(
  rawInput: string,
  contextIds: string[] = [],
): MatchResult {
  const norm = normalize(rawInput);
  if (norm.length < 2) return null;
  const inputTokens = tokens(norm);
  // Content tokens = non-stopwords. Single-token/intent matching uses these so
  // a stopword ("can") can't fuzzy-match a short content word ("scan").
  const contentTokens = inputTokens.filter((t) => !STOPWORDS.has(t));
  if (contentTokens.length === 0) return null;

  // --- Image-noun disambiguation -------------------------------------------
  // "photo/picture/image" can mean: registering the image itself as a file
  // (supported-file-types) vs a photo/scan/changed copy OF an already-registered
  // document (scan-or-photo). A genuine scan/changed-file signal is decisive; a
  // photo clearly described as a standalone file/evidence favours registration;
  // only genuinely context-free wording ("what about pictures?") clarifies.
  const hasImageNoun = contentTokens.some((t) =>
    IMAGE_NOUNS.some((n) => fuzzyEqual(t, n)),
  );
  if (hasImageNoun) {
    const registerIntent =
      contentTokens.some(
        (t) => t !== "registered" && REGISTER_TOKENS.some((k) => fuzzyEqual(t, k)),
      ) || phraseIn(norm, REGISTER_PHRASES);
    const scanIntent =
      contentTokens.some((t) => SCAN_TOKENS.some((k) => fuzzyEqual(t, k))) ||
      phraseIn(norm, SCAN_PHRASES);

    const ft = faqById("supported-file-types");
    const sp = faqById("scan-or-photo");
    if (ft && sp) {
      // A genuine scan/changed-file signal wins even if a register-favouring
      // descriptor is also present (e.g. "WhatsApp-compressed accident photo").
      if (scanIntent) return { kind: "match", faq: sp };
      if (registerIntent) return { kind: "match", faq: ft };
      // Neither → genuinely context-free image noun → clarify.
      return { kind: "clarify", options: [ft, sp], prompt: IMAGE_CLARIFY_PROMPT };
    }
  }

  const scored: Scored[] = faqs
    .map((faq) => ({ faq, score: scoreFaq(faq, inputTokens, contentTokens) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0 || scored[0].score < MATCH_THRESHOLD) return null;

  const best = scored[0];
  const second = scored[1];

  if (second && second.score >= MATCH_THRESHOLD && best.score - second.score < CLARIFY_MARGIN) {
    // Two similarly-likely topics. Try to resolve with recent context first.
    const near = [best.faq.id, second.faq.id];
    for (const ctx of contextIds) {
      const chained = (followUpMap[ctx] ?? []).map((s) => s.answerId);
      const preferred = near.find((id) => id === ctx || chained.includes(id));
      if (preferred) {
        return { kind: "match", faq: preferred === best.faq.id ? best.faq : second.faq };
      }
    }
    // Otherwise ask one short clarification rather than guessing.
    return { kind: "clarify", options: [best.faq, second.faq] };
  }

  return { kind: "match", faq: best.faq };
}

/** Back-compat convenience: returns the matched FAQ, or null (no clarify). */
export function matchFaq(rawInput: string, contextIds: string[] = []): Faq | null {
  const r = matchFaqDetailed(rawInput, contextIds);
  return r && r.kind === "match" ? r.faq : null;
}

// ---------------------------------------------------------------------------
// Guided-step typed-input matching
//
// When a visitor types while a guided step is active, the input is first
// interpreted as a natural response to the current question (e.g. "schools" →
// Education & Credentials) and only falls through to the FAQ matcher / unknown
// fallback if it matches no current option. Never silently guesses between two
// genuinely-plausible options.
// ---------------------------------------------------------------------------

export type GuidedMatch =
  | { kind: "match"; option: Option }
  | { kind: "clarify"; options: Option[] }
  | null;

const OPTION_THRESHOLD = 3;
const OPTION_MARGIN = 2;

/** The selectable options for a guided step (industry pulls from knowledge). */
export function guidedOptions(stepId: string): Option[] {
  switch (stepId) {
    case "industry":
      return industries.map((i) => ({ label: i.label, value: i.id, aliases: i.aliases }));
    case "role":
      return roleOptions;
    case "movement":
      return movementOptions;
    case "checking":
      return checkingOptions;
    case "concern":
      return concernOptions;
    case "volume":
      return volumeOptions;
    default:
      return []; // documents (multi-select) is handled by the component
  }
}

/** Free-text / numeric volume → bucket value, or null. */
function volumeToOptionValue(norm: string): string | null {
  if (/\b(not sure|unsure|dunno|no idea|do ?n'?t know|not certain|hard to say)\b/.test(norm))
    return "unsure";
  const m = norm.match(/(\d[\d,]*)\s*(k|thousand|thousands|m|million|mil)?/);
  if (!m) {
    if (/tens of thousands|many thousands/.test(norm)) return ">10000";
    if (/hundreds|few hundred/.test(norm)) return "100-1000";
    if (/thousands|few thousand/.test(norm)) return "1000-10000";
    if (/\b(a few|handful|dozens|dozen|tens|couple)\b/.test(norm)) return "<100";
    return null;
  }
  let n = parseInt(m[1].replace(/,/g, ""), 10);
  if (Number.isNaN(n)) return null;
  const unit = m[2] || "";
  if (/k|thousand/.test(unit)) n *= 1000;
  else if (/m|million|mil/.test(unit)) n *= 1000000;
  if (n < 100) return "<100";
  if (n < 1000) return "100-1000";
  if (n < 10000) return "1000-10000";
  return ">10000";
}

function scoreOption(
  opt: Option,
  inputTokens: string[],
  contentTokens: string[],
): number {
  let score = 0;
  const lt = tokens(normalize(opt.label));
  // A fully-present multi-word label is a strong phrase hit.
  if (lt.length >= 2 && allTokensPresent(lt, inputTokens)) score += 4;
  // Single-word signals — distinctive label words + single-word aliases —
  // deduped so a word that is both (e.g. "email") is counted once. This keeps
  // two distinctly-mentioned options ("email and whatsapp") tied → clarify.
  const singleSignals = new Set<string>();
  for (const w of lt) if (w.length >= 3 && !STOPWORDS.has(w)) singleSignals.add(w);
  for (const alias of opt.aliases ?? []) {
    const at = tokens(normalize(alias));
    if (at.length >= 2) {
      if (allTokensPresent(at, inputTokens)) score += 5;
    } else if (at.length === 1 && at[0].length >= 3) {
      singleSignals.add(at[0]);
    }
  }
  for (const w of singleSignals) if (tokenInList(w, contentTokens)) score += 3;
  return score;
}

/**
 * Interpret a typed response as a selection among the given step's options.
 * Returns a single option when it clearly wins, a two-way clarify when genuinely
 * close, or null (caller then tries the FAQ matcher, then the unknown fallback).
 */
export function matchGuidedOption(
  options: Option[],
  rawInput: string,
  stepId?: string,
): GuidedMatch {
  const norm = normalize(rawInput);
  if (!norm) return null;
  const inputTokens = tokens(norm);
  const contentTokens = inputTokens.filter((t) => !STOPWORDS.has(t));

  if (stepId === "volume") {
    const v = volumeToOptionValue(norm);
    if (v) {
      const opt = options.find((o) => o.value === v);
      if (opt) return { kind: "match", option: opt };
    }
  }

  const scored = options
    .map((o) => ({ o, s: scoreOption(o, inputTokens, contentTokens) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);
  if (!scored.length || scored[0].s < OPTION_THRESHOLD) return null;

  const best = scored[0];
  const second = scored[1];
  if (second && second.s >= OPTION_THRESHOLD && best.s - second.s < OPTION_MARGIN) {
    return { kind: "clarify", options: [best.o, second.o] };
  }
  return { kind: "match", option: best.o };
}

/** Convenience: match a typed response against a guided step by its id. */
export function matchGuidedStep(stepId: string, rawInput: string): GuidedMatch {
  return matchGuidedOption(guidedOptions(stepId), rawInput, stepId);
}

/**
 * Documents step is multi-select — return every document chip the typed input
 * mentions (e.g. "repair estimates and invoices" → both), so the caller can
 * toggle them on and let the visitor add more or Continue.
 */
export function matchGuidedDocuments(docs: string[], rawInput: string): string[] {
  const norm = normalize(rawInput);
  if (!norm) return [];
  const inputTokens = tokens(norm);
  const contentTokens = inputTokens.filter((t) => !STOPWORDS.has(t));
  return docs.filter(
    (d) => scoreOption({ label: d, value: d }, inputTokens, contentTokens) >= OPTION_THRESHOLD,
  );
}

/**
 * Regression cases for guided typed-input routing. `expect` is an option value,
 * `"clarify"`, or `null` (no option → caller tries FAQ / unknown). Includes the
 * exact live failure: "schools" at the industry step → Education & Credentials.
 */
export const guidedOptionRegressionCases: {
  step: string;
  input: string;
  expect: string | "clarify" | null;
}[] = [
  { step: "industry", input: "schools", expect: "education" },
  { step: "industry", input: "I run a school", expect: "education" },
  { step: "industry", input: "we are an insurance company", expect: "insurance" },
  { step: "industry", input: "hospital", expect: "healthcare" },
  { step: "industry", input: "we work with banks", expect: "banking" },
  { step: "industry", input: "a law firm", expect: "professional-services" },
  { step: "industry", input: "logistics business", expect: "trade" },
  { step: "industry", input: "government ministry", expect: "government" },
  { step: "industry", input: "farming", expect: "agriculture" },
  { step: "industry", input: "something else", expect: "other" },
  { step: "industry", input: "how does verification work", expect: null },
  { step: "role", input: "both", expect: "both" },
  { step: "role", input: "mostly receive", expect: "receive" },
  { step: "role", input: "we issue", expect: "issue" },
  { step: "movement", input: "email", expect: "email" },
  { step: "movement", input: "whatsapp", expect: "messaging" },
  { step: "movement", input: "email and whatsapp", expect: "clarify" },
  { step: "checking", input: "manually", expect: "manual" },
  { step: "concern", input: "fraud", expect: "alteration" },
  { step: "concern", input: "cost", expect: "cost" },
  { step: "volume", input: "about 500 per month", expect: "100-1000" },
  { step: "volume", input: "50000", expect: ">10000" },
  { step: "volume", input: "not sure", expect: "unsure" },
  { step: "volume", input: "a few", expect: "<100" },
];

/**
 * Regression cases for the deterministic matcher (durable documentation +
 * exercised by the browser harness against the real build). `expect` is a topic
 * id, `"clarify"`, or `null` (unknown → team). Kept next to the matcher so new
 * intents ship with their coverage.
 */
export const matcherRegressionCases: { input: string; expect: string | "clarify" | null }[] = [
  // Registering a file/image itself → supported-file-types.
  { input: "Can I register a photo?", expect: "supported-file-types" }, // the reported bug
  { input: "Can Kweli fingerprint a picture?", expect: "supported-file-types" },
  { input: "Can I upload an image?", expect: "supported-file-types" },
  { input: "Does it work with video?", expect: "supported-file-types" },
  { input: "Can you register audio?", expect: "supported-file-types" },
  { input: "What file types are supported?", expect: "supported-file-types" },
  { input: "Does it only work with PDFs?", expect: "supported-file-types" },
  { input: "Can any file be fingerprinted?", expect: "supported-file-types" },
  { input: "Can I register a JPEG file?", expect: "supported-file-types" },
  // A photo/scan OF an already-registered document → scan-or-photo.
  { input: "What if I photograph a registered document?", expect: "scan-or-photo" },
  { input: "Can I verify a photo of the original?", expect: "scan-or-photo" },
  { input: "Will a scan match the PDF?", expect: "scan-or-photo" },
  { input: "Someone sent me a picture of the document.", expect: "scan-or-photo" },
  { input: "Can a screenshot match the original?", expect: "scan-or-photo" },
  { input: "Will a photo of my registered PDF match?", expect: "scan-or-photo" },
  { input: "What if I photograph the document?", expect: "scan-or-photo" },
  { input: "Can it verify a screenshot?", expect: "scan-or-photo" },
  { input: "What about scanned copies?", expect: "scan-or-photo" },
  { input: "can you check a scren shot", expect: "scan-or-photo" }, // typo
  // Bare image noun with no register/scan context → clarify, never auto-scan.
  { input: "What about pictures", expect: "clarify" },
  { input: "What about photos?", expect: "clarify" },
  { input: "Can it check an image?", expect: "clarify" },
  { input: "what about an imaeg", expect: "clarify" }, // typo, still ambiguous
  // Other topics unaffected.
  { input: "Do you keep my file?", expect: "see-or-store" },
  { input: "What if someone edits it?", expect: "document-changed" },
  { input: "How do you know who issued it?", expect: "who-registers" },
  { input: "Can this work with our software?", expect: "integrate" },
  { input: "How much is a pilot?", expect: "pilot" },
  { input: "What does verified actually mean?", expect: "what-kweli-proves" },
  // Topics added 27 Aug 2026.
  { input: "What is Kweli?", expect: "what-is-kweli" },
  { input: "How does an issuer add a file?", expect: "issuer-workflow" },
  { input: "What can I see when I scan the QR?", expect: "registered-fields" },
  { input: "Does it use AI?", expect: "ai-ocr" },
  { input: "Do you use OCR?", expect: "ai-ocr" },
  { input: "Is this on blockchain?", expect: "blockchain-status" },
  { input: "Is Base live?", expect: "blockchain-status" },
  { input: "Can someone copy the QR?", expect: "copied-qr" },
  { input: "Can we upload files in bulk?", expect: "bulk" },
  { input: "Do you have an API?", expect: "api" },
  { input: "Can a document be revoked?", expect: "revocation" },
  // Fingerprint vs. QR-embedding format scope + security/compliance (27 Aug 2026 corrections).
  { input: "Can you fingerprint a video?", expect: "supported-file-types" },
  { input: "Can I register a PDF?", expect: "supported-file-types" },
  { input: "Can you put a QR inside a video?", expect: "supported-file-types" },
  { input: "Which formats support the complete portal?", expect: "supported-file-types" },
  { input: "Is Kweli secure?", expect: "security-compliance" },
  { input: "Where is the data stored?", expect: "security-compliance" },
  { input: "Are you SOC 2 certified?", expect: "security-compliance" },
  { input: "Is Kweli GDPR compliant?", expect: "security-compliance" },
  { input: "Does the file leave my browser?", expect: "security-compliance" },
  // Photo-as-a-standalone-file (evidence) → supported-file-types, not clarify.
  { input: "What about other files, can they be verified, accident photos etc?", expect: "supported-file-types" },
  { input: "Can accident photos be verified?", expect: "supported-file-types" },
  { input: "Can I register vehicle damage photos?", expect: "supported-file-types" },
  { input: "Can Kweli fingerprint evidence pictures?", expect: "supported-file-types" },
  { input: "Will the exact same accident photo match?", expect: "supported-file-types" },
  { input: "Will a WhatsApp-compressed accident photo match the original?", expect: "scan-or-photo" },
  { input: "Can I photograph a registered PDF?", expect: "scan-or-photo" },
  { input: "what is your quarterly revenue", expect: null }, // genuinely unknown
];

/**
 * Contextual follow-up suggestions.
 *
 * After the bot answers a question, it offers only 2–3 relevant next questions
 * (plus a quiet "See all topics"), so the experience reads like a conversation
 * rather than a persistent FAQ menu. `label` is what the visitor sees and what
 * becomes their gold message; `answerId` is the approved FAQ whose answer is
 * shown. `lead: true` routes to the lead form instead of an answer.
 */
export type Suggestion = { label: string; answerId: string; lead?: boolean };

const SPEAK_TO_TEAM: Suggestion = {
  label: "Speak to the Kweli team",
  answerId: "contact-team",
  lead: true,
};

/** Shown once the guided flow completes, before any follow-up is chosen. */
export const initialSuggestions: Suggestion[] = [
  { label: "How does verification work?", answerId: "how-verification-works" },
  { label: "What exactly does Kweli prove?", answerId: "what-kweli-proves" },
  SPEAK_TO_TEAM,
];

/** Used when an answered question has no specific mapping below. */
export const defaultSuggestions: Suggestion[] = [
  { label: "How does verification work?", answerId: "how-verification-works" },
  { label: "What exactly does Kweli prove?", answerId: "what-kweli-proves" },
  SPEAK_TO_TEAM,
];

/**
 * Maps the just-answered FAQ id → the next 2–3 contextual follow-ups.
 * Every answerId referenced here has an approved answer in knowledge.ts.
 */
export const followUpMap: Record<string, Suggestion[]> = {
  "how-verification-works": [
    { label: "What exactly does Kweli prove?", answerId: "what-kweli-proves" },
    { label: "Does Kweli store the document?", answerId: "see-or-store" },
    { label: "What if the document has changed?", answerId: "document-changed" },
  ],
  "what-kweli-proves": [
    { label: "What doesn't Kweli prove?", answerId: "what-not-prove" },
    { label: "What happens if the file doesn't match?", answerId: "file-no-match" },
    { label: "Who registers the document?", answerId: "who-registers" },
  ],
  "see-or-store": [
    { label: "How is the fingerprint created?", answerId: "fingerprint-created" },
    { label: "How does Kweli handle security and compliance?", answerId: "security-compliance" },
    { label: "What information does Kweli retain?", answerId: "info-retained" },
  ],
  "scan-or-photo": [
    { label: "How does the QR workflow help?", answerId: "qr-workflow" },
    { label: "What file types can Kweli register?", answerId: "supported-file-types" },
    { label: "What happens when no record is found?", answerId: "no-record" },
  ],
  "supported-file-types": [
    { label: "What if the document is a scan or photograph?", answerId: "scan-or-photo" },
    { label: "How does verification work?", answerId: "how-verification-works" },
    SPEAK_TO_TEAM,
  ],
  "qr-workflow": [
    { label: "Can someone copy a genuine QR code?", answerId: "copied-qr" },
    { label: "What information appears on the verification page?", answerId: "registered-fields" },
    { label: "Can physical documents be checked?", answerId: "physical-docs" },
  ],
  integrate: [
    { label: "Does Kweli have an API?", answerId: "api" },
    { label: "What would a pilot look like?", answerId: "pilot-look" },
    { label: "Which documents should we start with?", answerId: "which-documents-start" },
  ],
  // Sensible chains for other answers so the conversation keeps flowing.
  "document-changed": [
    { label: "What happens when no record is found?", answerId: "no-record" },
    { label: "What exactly does Kweli prove?", answerId: "what-kweli-proves" },
    SPEAK_TO_TEAM,
  ],
  "what-not-prove": [
    { label: "What exactly does Kweli prove?", answerId: "what-kweli-proves" },
    { label: "Who registers the document?", answerId: "who-registers" },
    SPEAK_TO_TEAM,
  ],
  "file-no-match": [
    { label: "What if the document is a scan or photograph?", answerId: "scan-or-photo" },
    { label: "What happens when no record is found?", answerId: "no-record" },
    SPEAK_TO_TEAM,
  ],
  "who-registers": [
    { label: "How does an issuer register and issue a file?", answerId: "issuer-workflow" },
    { label: "What information does Kweli retain?", answerId: "info-retained" },
    { label: "Can Kweli integrate with our system?", answerId: "integrate" },
  ],
  "fingerprint-created": [
    { label: "What information does Kweli retain?", answerId: "info-retained" },
    { label: "What if the document is a scan or photograph?", answerId: "scan-or-photo" },
    SPEAK_TO_TEAM,
  ],
  "info-retained": [
    { label: "How does Kweli handle security and compliance?", answerId: "security-compliance" },
    { label: "How is the fingerprint created?", answerId: "fingerprint-created" },
    { label: "Can Kweli integrate with our system?", answerId: "integrate" },
  ],
  "security-compliance": [
    { label: "Does Kweli see or store the document?", answerId: "see-or-store" },
    { label: "What information does Kweli retain?", answerId: "info-retained" },
    SPEAK_TO_TEAM,
  ],
  "scan-why": [
    { label: "How does the QR workflow help?", answerId: "qr-workflow" },
    { label: "Does Kweli use AI or OCR?", answerId: "ai-ocr" },
    { label: "What happens when no record is found?", answerId: "no-record" },
  ],
  "physical-docs": [
    { label: "Can someone copy a genuine QR code?", answerId: "copied-qr" },
    { label: "How does the QR workflow help?", answerId: "qr-workflow" },
    { label: "Why doesn't a scan match?", answerId: "scan-why" },
  ],
  "no-record": [
    { label: "How does the QR workflow help?", answerId: "qr-workflow" },
    { label: "What exactly does Kweli prove?", answerId: "what-kweli-proves" },
    SPEAK_TO_TEAM,
  ],
  "pilot-look": [
    { label: "Which documents should we start with?", answerId: "which-documents-start" },
    { label: "Can Kweli integrate with our system?", answerId: "integrate" },
    SPEAK_TO_TEAM,
  ],
  "which-documents-start": [
    { label: "What would a pilot look like?", answerId: "pilot-look" },
    { label: "How does verification work?", answerId: "how-verification-works" },
    SPEAK_TO_TEAM,
  ],
  "vs-digital-signature": [
    { label: "How does verification work?", answerId: "how-verification-works" },
    { label: "What exactly does Kweli prove?", answerId: "what-kweli-proves" },
    SPEAK_TO_TEAM,
  ],
  // ---- Chains for topics added 27 Aug 2026 ----
  "what-is-kweli": [
    { label: "How does verification work?", answerId: "how-verification-works" },
    { label: "What exactly does Kweli prove?", answerId: "what-kweli-proves" },
    { label: "What file types can Kweli register?", answerId: "supported-file-types" },
  ],
  "issuer-workflow": [
    { label: "What information appears on the verification page?", answerId: "registered-fields" },
    { label: "How does the QR workflow help?", answerId: "qr-workflow" },
    { label: "Who registers the document?", answerId: "who-registers" },
  ],
  "registered-fields": [
    { label: "How does the QR workflow help?", answerId: "qr-workflow" },
    { label: "How does an issuer register and issue a file?", answerId: "issuer-workflow" },
    { label: "Can someone copy a genuine QR code?", answerId: "copied-qr" },
  ],
  "ai-ocr": [
    { label: "Why doesn't a scan match?", answerId: "scan-why" },
    { label: "How does the QR workflow help?", answerId: "qr-workflow" },
    { label: "How does verification work?", answerId: "how-verification-works" },
  ],
  "blockchain-status": [
    { label: "How does verification work?", answerId: "how-verification-works" },
    { label: "What exactly does Kweli prove?", answerId: "what-kweli-proves" },
    SPEAK_TO_TEAM,
  ],
  "copied-qr": [
    { label: "How does the QR workflow help?", answerId: "qr-workflow" },
    { label: "Can physical documents be checked?", answerId: "physical-docs" },
    { label: "What information appears on the verification page?", answerId: "registered-fields" },
  ],
  bulk: [
    { label: "Does Kweli have an API?", answerId: "api" },
    { label: "Can Kweli integrate with our system?", answerId: "integrate" },
    SPEAK_TO_TEAM,
  ],
  api: [
    { label: "Can Kweli integrate with our system?", answerId: "integrate" },
    { label: "Can Kweli register or verify files in bulk?", answerId: "bulk" },
    SPEAK_TO_TEAM,
  ],
  revocation: [
    { label: "What exactly does Kweli prove?", answerId: "what-kweli-proves" },
    SPEAK_TO_TEAM,
  ],
};

/**
 * Lead topics are the conversation's escape hatch: they are never tracked as
 * "answered" and are never filtered out of suggestions, so "Speak to the Kweli
 * team" (and a pilot enquiry) always stays reachable.
 */
export const LEAD_ANSWER_IDS = new Set(["contact-team", "pilot"]);
export function isLeadTopic(id: string): boolean {
  return LEAD_ANSWER_IDS.has(id);
}

/**
 * Full pool of suggestible content topics (every non-lead FAQ), used to fill a
 * follow-up list when the mapped set has fewer than two unanswered topics.
 * Labels come from each FAQ's own question.
 */
const contentPool: Suggestion[] = faqs
  .filter((f) => !LEAD_ANSWER_IDS.has(f.id))
  .map((f) => ({ label: f.question, answerId: f.id }));

/**
 * Build a suggestion list from a seed, excluding already-answered topics and the
 * topic currently being answered, filling from the wider pool when the seed
 * yields fewer than two unanswered content topics, capping content at three, and
 * always ending with "Speak to the Kweli team". When every content topic has
 * been answered the returned list is just the lead option, which the UI renders
 * as a closing prompt rather than an empty list.
 */
function buildSuggestions(
  seed: Suggestion[],
  answered: ReadonlySet<string>,
  currentId?: string,
): Suggestion[] {
  const exclude = new Set(answered);
  if (currentId) exclude.add(currentId);

  const picked: Suggestion[] = [];
  const used = new Set<string>();
  const consider = (list: Suggestion[]) => {
    for (const s of list) {
      if (picked.length >= 3) break;
      if (s.lead || isLeadTopic(s.answerId)) continue;
      if (exclude.has(s.answerId) || used.has(s.answerId)) continue;
      picked.push({ label: s.label, answerId: s.answerId });
      used.add(s.answerId);
    }
  };

  consider(seed);
  if (picked.length < 2) consider(contentPool); // fill with other unanswered topics

  return [...picked, SPEAK_TO_TEAM];
}

/** Contextual follow-ups for a just-answered topic (answered-aware). */
export function getFollowUps(
  answerId: string,
  answered: ReadonlySet<string>,
): Suggestion[] {
  return buildSuggestions(followUpMap[answerId] ?? [], answered, answerId);
}

/** Initial follow-ups shown once the guided flow completes (answered-aware). */
export function getInitialFollowUps(answered: ReadonlySet<string>): Suggestion[] {
  return buildSuggestions(initialSuggestions, answered);
}

/** Build a concise, structured summary of the conversation for lead capture. */
export function summariseContext(ctx: ConversationContext): string {
  const parts: string[] = [];
  if (ctx.industry) parts.push(`Industry: ${ctx.industry}`);
  if (ctx.role) parts.push(`Role: ${ctx.role}`);
  if (ctx.documents?.length) parts.push(`Documents: ${ctx.documents.join(", ")}`);
  if (ctx.movement) parts.push(`Movement: ${ctx.movement}`);
  if (ctx.checking) parts.push(`Checking today: ${ctx.checking}`);
  if (ctx.concern) parts.push(`Primary concern: ${ctx.concern}`);
  if (ctx.volume) parts.push(`Monthly volume: ${ctx.volume}`);
  return parts.join(" | ");
}
