// Regression tests for the deterministic Kweli Bot question matcher.
//
// The matcher is deliberately dependency-free, so this compiles the two source
// modules (knowledge.ts + conversation.ts) to CommonJS with the project's own
// TypeScript and asserts the committed `matcherRegressionCases` plus a few extra
// natural-wording / typo / ambiguity cases. No paid AI, no network.
//
//   node scripts/matcher-regression.mjs
//
// Exits non-zero if any case fails.

import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const require = createRequire(import.meta.url);
const outDir = mkdtempSync(join(tmpdir(), "kweli-matcher-"));

execFileSync(
  "npx",
  [
    "tsc",
    "src/lib/kweliBot/knowledge.ts",
    "src/lib/kweliBot/conversation.ts",
    "--outDir", outDir,
    "--module", "commonjs",
    "--target", "es2020",
    "--skipLibCheck",
    "--moduleResolution", "node",
  ],
  { cwd: root, stdio: "inherit" },
);

const {
  matchFaqDetailed,
  matcherRegressionCases,
  matchGuidedStep,
  guidedOptionRegressionCases,
} = require(join(outDir, "conversation.js"));

// Extra coverage on top of the committed cases: brief wording, typos, and both
// sides of the register-a-file vs photo-of-a-document distinction.
const extraCases = [
  { input: "screenshto", expect: "scan-or-photo" }, // screenshot typo (scan context)
  { input: "register a jpeg", expect: "supported-file-types" },
  { input: "can I register a png file", expect: "supported-file-types" },
  { input: "what formats do you support", expect: "supported-file-types" },
  { input: "can i fingerprint an image", expect: "supported-file-types" },
  { input: "picture of my registered invoice", expect: "scan-or-photo" },
  { input: "and photos?", expect: "clarify" }, // bare image noun → ambiguous
  { input: "do you store documents", expect: "see-or-store" },
  { input: "what if it is edited", expect: "document-changed" },
  { input: "asdfghjkl qwerty", expect: null }, // gibberish → unknown
];

const cases = [...matcherRegressionCases, ...extraCases];
const failures = [];

for (const c of cases) {
  const r = matchFaqDetailed(c.input, []);
  const got = r === null ? null : r.kind === "clarify" ? "clarify" : r.faq.id;
  if (got !== c.expect) failures.push({ suite: "faq", input: c.input, expect: c.expect, got });
}

// Guided typed-input routing (current-step-first).
for (const c of guidedOptionRegressionCases) {
  const r = matchGuidedStep(c.step, c.input);
  const got = r === null ? null : r.kind === "clarify" ? "clarify" : r.option.value;
  if (got !== c.expect)
    failures.push({ suite: "guided", step: c.step, input: c.input, expect: c.expect, got });
}

const total = cases.length + guidedOptionRegressionCases.length;
console.log(
  `matcher regression: ${total - failures.length}/${total} passed ` +
    `(faq ${cases.length}, guided ${guidedOptionRegressionCases.length})`,
);
if (failures.length) {
  console.error("FAILURES:", JSON.stringify(failures, null, 2));
  process.exit(1);
}
