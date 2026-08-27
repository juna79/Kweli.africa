/**
 * Kweli Bot lead submission — reuses the EXISTING Netlify Forms setup.
 *
 * No database, no paid API, no new service. This mirrors the mechanism proven
 * in src/components/demo/BookADemo.tsx exactly:
 *   - POST url-encoded data to /__forms.html (NOT to the current page — the
 *     Next.js runtime serves pages from its own cache and never reaches
 *     Netlify's forms processing).
 *   - Include a `form-name` matching a static definition in public/__forms.html.
 *   - Include the `bot-field` honeypot (empty for real visitors).
 *
 * The form name here ("kweli-bot-lead") is registered as a hidden static form
 * in public/__forms.html so Netlify's build-time scanner picks it up.
 */

import type { ConversationContext } from "./conversation";
import { summariseContext } from "./conversation";

export const KWELI_BOT_FORM_NAME = "kweli-bot-lead";

/** Minimum fields collected up-front to keep first contact low-friction. */
export type LeadInput = {
  name: string;
  email: string;
  company: string;
  /** The visitor's main question or use case. */
  question: string;
};

export type LeadResult = { ok: true } | { ok: false };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type LeadErrors = Partial<Record<keyof LeadInput, string>>;

/** Client-side validation. Only the four low-friction fields are required. */
export function validateLead(input: LeadInput): LeadErrors {
  const errors: LeadErrors = {};
  if (!input.name.trim()) errors.name = "Enter your name.";
  if (!input.email.trim()) errors.email = "Enter your work email.";
  else if (!EMAIL_RE.test(input.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!input.company.trim()) errors.company = "Enter your organisation.";
  if (!input.question.trim())
    errors.question = "Tell us your question or use case.";
  return errors;
}

/**
 * Submit a lead. Carries over any context already gathered in the conversation
 * (industry/role/documents/etc.) so the visitor never re-enters it, plus a
 * concise structured summary. Does NOT dump the full raw conversation.
 */
export async function submitLead(
  input: LeadInput,
  context: ConversationContext,
): Promise<LeadResult> {
  try {
    const body = new URLSearchParams();
    body.append("form-name", KWELI_BOT_FORM_NAME);
    body.append("bot-field", ""); // honeypot, empty for humans

    body.append("name", input.name.trim());
    body.append("email", input.email.trim());
    body.append("company", input.company.trim());
    body.append("question", input.question.trim());

    // Carried-over structured context (only what was actually gathered).
    if (context.industry) body.append("industry", context.industry);
    if (context.role) body.append("role", context.role);
    if (context.documents?.length)
      body.append("documentTypes", context.documents.join(", "));
    if (context.movement) body.append("movement", context.movement);
    if (context.checking) body.append("checking", context.checking);
    if (context.concern) body.append("concern", context.concern);
    if (context.volume) body.append("volume", context.volume);

    // Concise structured summary — not the raw conversation transcript.
    body.append("conversationSummary", summariseContext(context));

    const res = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });

    return res.ok ? { ok: true } : { ok: false };
  } catch {
    return { ok: false };
  }
}
