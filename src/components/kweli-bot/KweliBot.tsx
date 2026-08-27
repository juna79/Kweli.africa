"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import {
  MessageCircle,
  X,
  Minus,
  RotateCcw,
  ArrowLeft,
  Send,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  industries,
  faqs,
  followUpQuestionIds,
  openingMessage,
  launcherLabel,
  unknownAnswer,
  leadNotice,
  contact,
} from "@/lib/kweliBot/knowledge";
import {
  steps,
  matchFaqDetailed,
  getFollowUps,
  getInitialFollowUps,
  isLeadTopic,
  type ConversationContext,
  type Step,
  type Option,
  type Suggestion,
} from "@/lib/kweliBot/conversation";
import {
  submitLead,
  validateLead,
  type LeadInput,
  type LeadErrors,
} from "@/lib/kweliBot/leadSubmit";

type Sender = "bot" | "user";
type Message = { id: number; from: Sender; text: string };

type Stage = "guided" | "followups" | "lead" | "submitted";

const industryOptions: Option[] = industries.map((i) => ({
  label: i.label,
  value: i.id,
}));

const followUpFaqs = followUpQuestionIds
  .map((id) => faqs.find((f) => f.id === id))
  .filter((f): f is NonNullable<typeof f> => Boolean(f));

const emptyLead: LeadInput = { name: "", email: "", company: "", question: "" };

const DEFAULT_OPTIONS_PROMPT = "Would you like to explore anything else?";
const CLARIFY_PROMPT = "Just to check — which of these did you mean?";
const CLOSING_PROMPT =
  "That covers the main topics. If anything's still unclear, I can connect you with the Kweli team.";

export default function KweliBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [ctx, setCtx] = useState<ConversationContext>({});
  const [stage, setStage] = useState<Stage>("guided");
  const [stepIndex, setStepIndex] = useState(0);
  const [docSelection, setDocSelection] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [pendingQuestion, setPendingQuestion] = useState("");
  // Only ONE set of follow-up options is live at a time (below the transcript),
  // so previously-shown options disappear once a choice is made.
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showAllTopics, setShowAllTopics] = useState(false);
  // Prompt shown above the live suggestion buttons (overridden for a
  // clarification when two topics are similarly likely).
  const [optionsPrompt, setOptionsPrompt] = useState(DEFAULT_OPTIONS_PROMPT);
  // Message id to bring to the top of the transcript after an update, so the
  // selected question and the start of its answer stay visible (rather than
  // always jumping to the very bottom, which could hide a long answer).
  const [anchorId, setAnchorId] = useState<number | null>(null);
  // Topic IDs already answered this conversation (append order). Used to drop
  // answered topics from every later suggestion list and "See all topics".
  // Lead topics are never recorded here, so "Speak to the team" always stays.
  const [answered, setAnswered] = useState<string[]>([]);
  const [lead, setLead] = useState<LeadInput>(emptyLead);
  const [leadErrors, setLeadErrors] = useState<LeadErrors>({});
  const [leadStatus, setLeadStatus] = useState<
    "idle" | "submitting" | "error"
  >("idle");

  const nextId = useRef(1);
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const say = useCallback((from: Sender, text: string): number => {
    const id = nextId.current++;
    setMessages((prev) => [...prev, { id, from, text }]);
    return id;
  }, []);

  const resetConversation = useCallback(() => {
    nextId.current = 1;
    setMessages([{ id: nextId.current++, from: "bot", text: openingMessage }]);
    setCtx({});
    setStage("guided");
    setStepIndex(0);
    setDocSelection([]);
    setInput("");
    setPendingQuestion("");
    setSuggestions([]);
    setShowAllTopics(false);
    setOptionsPrompt(DEFAULT_OPTIONS_PROMPT);
    setAnchorId(null);
    setAnswered([]);
    setLead(emptyLead);
    setLeadErrors({});
    setLeadStatus("idle");
  }, []);

  // Seed the opening message the first time the panel is opened.
  useEffect(() => {
    if (open && messages.length === 0) resetConversation();
  }, [open, messages.length, resetConversation]);

  // Scroll after each update. When an anchor message is set (the visitor's
  // selected question, or a long answer's start), bring it to the top of the
  // transcript so the question and the start of the answer stay visible;
  // otherwise fall back to the bottom. Done synchronously via scrollTop so it
  // works reliably in every engine and even when the tab is backgrounded
  // (animation-frame- and smooth-scroll-based approaches can be paused there).
  // Reduced motion is respected inherently since there is no animation. Only
  // the transcript container scrolls. getBoundingClientRect forces layout, so
  // the freshly-committed messages are measured correctly.
  useEffect(() => {
    const c = scrollRef.current;
    if (!c) return;
    let top = c.scrollHeight;
    if (anchorId != null) {
      const el = c.querySelector<HTMLElement>(`[data-mid="${anchorId}"]`);
      if (el) {
        const cRect = c.getBoundingClientRect();
        const eRect = el.getBoundingClientRect();
        top = Math.max(0, c.scrollTop + (eRect.top - cRect.top) - 8);
      }
    }
    c.scrollTop = top;
  }, [messages, stage, stepIndex, suggestions, showAllTopics, pendingQuestion, anchorId]);

  // Focus the input when the panel opens; return focus to launcher on close.
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
    launcherRef.current?.focus();
  }, [open]);

  const currentStep: Step | undefined = steps[stepIndex];

  // Advance the guided flow after a selection has been recorded.
  const advanceGuided = useCallback(
    (fromIndex: number, updated: ConversationContext) => {
      const next = fromIndex + 1;
      if (next < steps.length) {
        setStepIndex(next);
        say("bot", steps[next].prompt);
        setAnchorId(null); // short prompt → bottom is fine
        return;
      }
      // Guided flow complete → tailored explainer, then contextual follow-ups
      // (excluding any topic already answered by a typed question during guiding).
      const industry = industries.find((i) => i.id === updated.industry);
      const explainerId = industry
        ? say("bot", industry.tailoredExplainer)
        : say("bot", "Here's where Kweli fits.");
      setStage("followups");
      setSuggestions(getInitialFollowUps(new Set(answered)));
      setOptionsPrompt(DEFAULT_OPTIONS_PROMPT);
      setShowAllTopics(false);
      setPendingQuestion("");
      setAnchorId(explainerId); // keep the start of the explainer in view
    },
    [say, answered],
  );

  function handleOption(step: Step, option: Option) {
    say("user", option.label);
    const updated: ConversationContext = { ...ctx };
    if (step.contextKey && step.contextKey !== "documents") {
      // Single-value keys.
      (updated as Record<string, unknown>)[step.contextKey] = option.value;
    }
    setCtx(updated);
    advanceGuided(stepIndex, updated);
  }

  function toggleDoc(value: string) {
    setDocSelection((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  }

  function confirmDocuments() {
    const labels = docSelection.length ? docSelection : ["(skipped)"];
    say("user", labels.join(", "));
    const updated: ConversationContext = {
      ...ctx,
      documents: docSelection.length ? docSelection : undefined,
    };
    setCtx(updated);
    setDocSelection([]);
    advanceGuided(stepIndex, updated);
  }

  function goBack() {
    if (stage !== "guided" || stepIndex === 0) return;
    const prev = stepIndex - 1;
    // Drop the last bot prompt + the user's answer from the transcript.
    setMessages((m) => m.slice(0, Math.max(1, m.length - 2)));
    setStepIndex(prev);
    setDocSelection([]);
    setAnchorId(null);
  }

  // Record a topic as answered and return the updated answered set (so callers
  // can compute the next suggestions without waiting for a re-render).
  function recordAnswered(id: string): Set<string> {
    const next = new Set(answered);
    if (!isLeadTopic(id)) next.add(id);
    setAnswered(Array.from(next));
    return next;
  }

  // Answer an approved topic by id: show its answer, mark it answered, and show
  // the next unanswered contextual follow-ups. Shared by suggestion clicks,
  // "See all topics" and typed matches so the answered rule applies everywhere.
  function answerTopic(id: string, userText: string, anchorToUser = true) {
    const faq = faqs.find((f) => f.id === id);
    if (!faq) return;
    const qid = say("user", userText);
    if (isLeadTopic(id)) {
      startLead("");
      setAnchorId(qid);
      return;
    }
    say("bot", faq.answer);
    const nextAnswered = recordAnswered(id);
    setSuggestions(getFollowUps(id, nextAnswered));
    setOptionsPrompt(DEFAULT_OPTIONS_PROMPT);
    setShowAllTopics(false);
    setPendingQuestion("");
    if (anchorToUser) setAnchorId(qid);
  }

  // A visitor picked one of the live contextual follow-ups.
  function answerSuggestion(sug: Suggestion) {
    answerTopic(sug.answerId, sug.label);
  }

  // A visitor picked from the full "See all topics" list.
  function answerAllTopic(id: string) {
    const faq = faqs.find((f) => f.id === id);
    answerTopic(id, faq ? faq.question : id);
  }

  function startLead(prefillQuestion: string) {
    setPendingQuestion(prefillQuestion);
    setLead({ ...emptyLead, question: prefillQuestion });
    setLeadErrors({});
    setLeadStatus("idle");
    setStage("lead");
    say(
      "bot",
      "Happy to connect you. I just need a few details — only what's needed. Please don't share confidential documents here.",
    );
  }

  function handleTyped() {
    const text = input.trim();
    if (!text) return;
    const qid = say("user", text);
    setInput("");

    // Recent conversation context (most-recent topic first) helps the matcher
    // resolve short/ambiguous questions.
    const contextIds = [...answered].reverse();
    const result = matchFaqDetailed(text, contextIds);

    // Ambiguous between two topics → ask one short clarification, offering only
    // the still-unanswered candidates.
    if (result && result.kind === "clarify") {
      const options = result.options.filter((f) => !answered.includes(f.id));
      if (options.length >= 2) {
        // The clarifying question is posted as the bot's message; the options
        // block below shows the candidate topics without a duplicate prompt.
        say("bot", result.prompt ?? CLARIFY_PROMPT);
        setStage("followups");
        setSuggestions(options.map((f) => ({ label: f.question, answerId: f.id })));
        setOptionsPrompt("");
        setShowAllTopics(false);
        setPendingQuestion("");
        setAnchorId(qid);
        return;
      }
      // Only one credible option remains → answer it directly.
      if (options.length === 1) {
        answerFromTyped(options[0].id, qid);
        return;
      }
    }

    if (result && result.kind === "match") {
      answerFromTyped(result.faq.id, qid);
      return;
    }

    // No confident match → never invent. Offer the team.
    say("bot", unknownAnswer);
    setPendingQuestion(text);
    setSuggestions([]);
    setShowAllTopics(false);
    setStage("followups");
    setAnchorId(qid);
  }

  // A typed question resolved to an approved topic id.
  function answerFromTyped(id: string, qid: number) {
    const faq = faqs.find((f) => f.id === id);
    if (!faq) return;
    say("bot", faq.answer);
    if (isLeadTopic(id)) {
      startLead("");
      setAnchorId(qid);
      return;
    }
    const nextAnswered = recordAnswered(id);
    if (stage === "guided" && currentStep) {
      // Stay in the guided flow: answered is recorded, then re-anchor the step.
      say("bot", currentStep.prompt);
      setAnchorId(qid);
      return;
    }
    setSuggestions(getFollowUps(id, nextAnswered));
    setOptionsPrompt(DEFAULT_OPTIONS_PROMPT);
    setShowAllTopics(false);
    setPendingQuestion("");
    setStage("followups");
    setAnchorId(qid);
  }

  async function handleLeadSubmit(e: FormEvent) {
    e.preventDefault();
    if (leadStatus === "submitting") return;
    const errors = validateLead(lead);
    setLeadErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setLeadStatus("submitting");
    const result = await submitLead(lead, ctx);
    if (result.ok) {
      setStage("submitted");
      say("user", `${lead.name} — ${lead.email}`);
      say(
        "bot",
        "Thank you — I've passed your details to the Kweli team. Someone will follow up by email.",
      );
      setLeadStatus("idle");
    } else {
      setLeadStatus("error");
    }
  }

  // Escape closes; basic focus containment inside the panel.
  function onPanelKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") {
      e.stopPropagation();
      setOpen(false);
      return;
    }
    if (e.key !== "Tab" || !panelRef.current) return;
    const focusables = panelRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  const activeIndustry = useMemo(
    () => industries.find((i) => i.id === ctx.industry),
    [ctx.industry],
  );

  const showTypedInput = stage === "guided" || stage === "followups";
  const showBack = stage === "guided" && stepIndex > 0;

  // Answered-aware derived values for the live options block.
  const answeredSet = useMemo(() => new Set(answered), [answered]);
  const remainingAllTopics = useMemo(
    () => followUpFaqs.filter((f) => !answeredSet.has(f.id)),
    [answeredSet],
  );
  const contentSuggestions = suggestions.filter((s) => !isLeadTopic(s.answerId));
  const hasMoreContentTopics = remainingAllTopics.some((f) => !isLeadTopic(f.id));
  // When every content topic is answered, show a closing prompt + team option
  // instead of an empty list.
  const isClosing =
    stage === "followups" &&
    !pendingQuestion &&
    !showAllTopics &&
    contentSuggestions.length === 0;

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-dark-slate)] px-5 py-3 text-sm font-medium text-[var(--color-warm-paper)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--color-gold-bright)] hover:bg-[var(--color-stone)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
          aria-haspopup="dialog"
        >
          <MessageCircle size={18} strokeWidth={2} aria-hidden />
          {launcherLabel}
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          onKeyDown={onPanelKeyDown}
          className="fixed inset-x-3 bottom-3 z-[70] flex max-h-[85vh] flex-col overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-[var(--color-dark-slate)] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] sm:inset-x-auto sm:right-5 sm:bottom-5 sm:h-[600px] sm:max-h-[85vh] sm:w-[400px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-[var(--color-background)]/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-gold)]/40 text-[var(--color-gold-bright)]">
                <ShieldCheck size={16} strokeWidth={2} aria-hidden />
              </span>
              <span
                id={titleId}
                className="text-sm font-semibold text-[var(--color-warm-paper)]"
              >
                Kweli Bot
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetConversation}
                aria-label="Restart conversation"
                title="Restart"
                className="rounded-[var(--radius-sm)] p-1.5 text-[var(--color-slate)] transition-colors hover:bg-white/5 hover:text-[var(--color-warm-paper)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
              >
                <RotateCcw size={16} strokeWidth={2} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Minimise Kweli Bot"
                title="Minimise"
                className="rounded-[var(--radius-sm)] p-1.5 text-[var(--color-slate)] transition-colors hover:bg-white/5 hover:text-[var(--color-warm-paper)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
              >
                <Minus size={16} strokeWidth={2} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close Kweli Bot"
                title="Close"
                className="rounded-[var(--radius-sm)] p-1.5 text-[var(--color-slate)] transition-colors hover:bg-white/5 hover:text-[var(--color-warm-paper)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
              >
                <X size={16} strokeWidth={2} aria-hidden />
              </button>
            </div>
          </div>

          {/* Transcript */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            aria-live="polite"
            aria-atomic="false"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                data-mid={m.id}
                className={m.from === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <p
                  className={`max-w-[85%] rounded-[var(--radius-lg)] px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-[var(--color-gold)] text-[#0b080f]"
                      : "bg-white/[0.04] text-[var(--color-warm-paper)]"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}

            {/* Guided options */}
            {stage === "guided" && currentStep && (
              <GuidedControls
                step={currentStep}
                industryOptions={industryOptions}
                activeIndustryDocs={activeIndustry?.exampleDocuments ?? []}
                docSelection={docSelection}
                onToggleDoc={toggleDoc}
                onConfirmDocs={confirmDocuments}
                onSelect={(opt) => handleOption(currentStep, opt)}
              />
            )}

            {/* Live options: exactly one set at a time, below the transcript.
                Unknown → offer the team; clarify → the two candidate topics;
                "See all topics" → unanswered topics only; closing → prompt +
                team when everything relevant has been answered; otherwise →
                2–3 unanswered contextual follow-ups + a quiet "See all topics".
                Answered topics never reappear in any of these lists. */}
            {stage === "followups" && (
              <div className="space-y-2 pt-1">
                {pendingQuestion ? (
                  <>
                    <button
                      type="button"
                      onClick={() => startLead(pendingQuestion)}
                      className="w-full rounded-[var(--radius-md)] bg-[var(--color-gold)] px-3.5 py-2.5 text-left text-sm font-medium text-[#0b080f] transition-colors hover:bg-[var(--color-gold-bright)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
                    >
                      Yes, pass my question to the team
                    </button>
                    {hasMoreContentTopics && (
                      <SeeAllTopicsButton
                        onClick={() => {
                          setPendingQuestion("");
                          setShowAllTopics(true);
                        }}
                      />
                    )}
                  </>
                ) : isClosing ? (
                  <>
                    <p className="pt-1 text-xs text-[var(--color-slate)]">{CLOSING_PROMPT}</p>
                    {suggestions.map((s, i) => (
                      <OptionButton
                        key={`${s.answerId}-${i}`}
                        label={s.label}
                        onClick={() => answerSuggestion(s)}
                      />
                    ))}
                  </>
                ) : showAllTopics ? (
                  <>
                    <p className="pt-1 text-xs text-[var(--color-slate)]">All topics</p>
                    {remainingAllTopics.map((f) => (
                      <OptionButton
                        key={f.id}
                        label={f.question}
                        onClick={() => answerAllTopic(f.id)}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    {optionsPrompt && (
                      <p className="pt-1 text-xs text-[var(--color-slate)]">{optionsPrompt}</p>
                    )}
                    {suggestions.map((s, i) => (
                      <OptionButton
                        key={`${s.answerId}-${i}`}
                        label={s.label}
                        onClick={() => answerSuggestion(s)}
                      />
                    ))}
                    {hasMoreContentTopics && (
                      <SeeAllTopicsButton onClick={() => setShowAllTopics(true)} />
                    )}
                  </>
                )}
              </div>
            )}

            {/* Lead capture */}
            {stage === "lead" && (
              <form onSubmit={handleLeadSubmit} className="space-y-3 pt-1" noValidate>
                <LeadField
                  label="Name"
                  name="name"
                  value={lead.name}
                  error={leadErrors.name}
                  onChange={(v) => setLead((l) => ({ ...l, name: v }))}
                  autoComplete="name"
                />
                <LeadField
                  label="Work email"
                  name="email"
                  type="email"
                  value={lead.email}
                  error={leadErrors.email}
                  onChange={(v) => setLead((l) => ({ ...l, email: v }))}
                  autoComplete="email"
                />
                <LeadField
                  label="Company"
                  name="company"
                  value={lead.company}
                  error={leadErrors.company}
                  onChange={(v) => setLead((l) => ({ ...l, company: v }))}
                  autoComplete="organization"
                />
                <LeadField
                  label="Your question or use case"
                  name="question"
                  value={lead.question}
                  error={leadErrors.question}
                  onChange={(v) => setLead((l) => ({ ...l, question: v }))}
                  textarea
                />
                <p className="text-[11px] leading-snug text-[var(--color-slate)]">
                  {leadNotice}
                </p>
                {leadStatus === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-2 rounded-[var(--radius-md)] border border-[var(--color-failed)]/40 bg-[var(--color-failed)]/10 px-3 py-2 text-xs text-[var(--color-warm-paper)]"
                  >
                    <AlertCircle
                      size={14}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-[var(--color-failed)]"
                      aria-hidden
                    />
                    <span>
                      Something went wrong sending this. You can{" "}
                      <a
                        href={contact.demoPath}
                        className="underline hover:text-[var(--color-gold-bright)]"
                      >
                        open our contact form
                      </a>{" "}
                      or email{" "}
                      <a
                        href={`mailto:${contact.email}`}
                        className="underline hover:text-[var(--color-gold-bright)]"
                      >
                        {contact.email}
                      </a>
                      .
                    </span>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={leadStatus === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-gold)] px-4 py-2.5 text-sm font-medium text-[#0b080f] transition-colors hover:bg-[var(--color-gold-bright)] disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
                >
                  {leadStatus === "submitting" && (
                    <Loader2 size={15} strokeWidth={2} className="animate-spin" aria-hidden />
                  )}
                  {leadStatus === "submitting" ? "Sending…" : "Send to the Kweli team"}
                </button>
              </form>
            )}

            {stage === "submitted" && (
              <div className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-verified)]/30 bg-[var(--color-verified)]/10 px-3 py-2.5 text-sm text-[var(--color-warm-paper)]">
                <CheckCircle2
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 text-[var(--color-verified)]"
                  aria-hidden
                />
                Request received.
              </div>
            )}
          </div>

          {/* Footer: back + typed input */}
          {showTypedInput && (
            <div className="border-t border-white/10 px-3 py-3">
              {showBack && (
                <button
                  type="button"
                  onClick={goBack}
                  className="mb-2 inline-flex items-center gap-1 text-xs text-[var(--color-slate)] transition-colors hover:text-[var(--color-warm-paper)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
                >
                  <ArrowLeft size={13} strokeWidth={2} aria-hidden />
                  Back
                </button>
              )}
              <div className="flex items-end gap-2">
                <label htmlFor={`${titleId}-input`} className="sr-only">
                  Type a question for Kweli Bot
                </label>
                <input
                  id={`${titleId}-input`}
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleTyped();
                    }
                  }}
                  placeholder="Type a question…"
                  maxLength={500}
                  className="flex-1 rounded-[var(--radius-md)] border border-white/15 bg-white/[0.02] px-3 py-2 text-sm text-[var(--color-warm-paper)] placeholder:text-[var(--color-slate)]/70 transition-colors focus:border-[var(--color-gold-bright)] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleTyped}
                  aria-label="Send question"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-gold)] text-[#0b080f] transition-colors hover:bg-[var(--color-gold-bright)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
                >
                  <Send size={15} strokeWidth={2} aria-hidden />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

function OptionButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full rounded-[var(--radius-md)] border border-white/10 px-3.5 py-2 text-left text-sm text-[var(--color-warm-paper)] transition-colors hover:border-[var(--color-gold)]/50 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
    >
      {label}
    </button>
  );
}

function SeeAllTopicsButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-1 text-xs text-[var(--color-slate)] underline-offset-2 transition-colors hover:text-[var(--color-warm-paper)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
    >
      See all topics
    </button>
  );
}

function GuidedControls({
  step,
  industryOptions,
  activeIndustryDocs,
  docSelection,
  onToggleDoc,
  onConfirmDocs,
  onSelect,
}: {
  step: Step;
  industryOptions: Option[];
  activeIndustryDocs: string[];
  docSelection: string[];
  onToggleDoc: (value: string) => void;
  onConfirmDocs: () => void;
  onSelect: (option: Option) => void;
}) {
  if (step.id === "documents") {
    return (
      <div className="space-y-2 pt-1">
        <div className="flex flex-wrap gap-2">
          {activeIndustryDocs.map((doc) => {
            const selected = docSelection.includes(doc);
            return (
              <button
                key={doc}
                type="button"
                aria-pressed={selected}
                onClick={() => onToggleDoc(doc)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)] ${
                  selected
                    ? "border-[var(--color-gold)] bg-[var(--color-gold)]/15 text-[var(--color-warm-paper)]"
                    : "border-white/15 text-[var(--color-warm-paper)] hover:border-[var(--color-gold)]/50 hover:bg-white/5"
                }`}
              >
                {doc}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={onConfirmDocs}
          className="mt-1 inline-flex items-center gap-1.5 rounded-[var(--radius-md)] bg-[var(--color-gold)] px-4 py-2 text-sm font-medium text-[#0b080f] transition-colors hover:bg-[var(--color-gold-bright)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
        >
          Continue
        </button>
      </div>
    );
  }

  const options = step.id === "industry" ? industryOptions : step.options ?? [];
  return (
    <div className="flex flex-col gap-2 pt-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onSelect(opt)}
          className="block w-full rounded-[var(--radius-md)] border border-white/10 px-3.5 py-2 text-left text-sm text-[var(--color-warm-paper)] transition-colors hover:border-[var(--color-gold)]/50 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function LeadField({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
  textarea = false,
}: {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  textarea?: boolean;
}) {
  const id = `kweli-bot-${name}`;
  const common = `w-full rounded-[var(--radius-md)] border ${
    error ? "border-[var(--color-failed)]/60" : "border-white/15"
  } bg-white/[0.02] px-3 py-2 text-sm text-[var(--color-warm-paper)] placeholder:text-[var(--color-slate)]/70 transition-colors focus:border-[var(--color-gold-bright)] focus:outline-none`;
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-medium text-[var(--color-warm-paper)]">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={3}
          value={value}
          maxLength={2000}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`resize-none ${common}`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={common}
        />
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-[11px] text-[var(--color-failed)]">
          {error}
        </p>
      )}
    </div>
  );
}
