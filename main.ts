// hamsyh-bio-r3 — Funniest One-Line Bio for an AI on a Dating App (Round 3)
// A dating-profile bio from an AI that has studied thousands of first dates
// yet still falls back on the most ordinary opener, then makes a promise
// it immediately undercuts with a joke about forgetting once a year.
// The humour lands because the AI is both over-trained and under-prepared.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Trained on 10,000 first dates and I still open with 'so, what do you do?' — swipe right, I promise to remember your birthday and forget it exactly once a year.";

const MAX_CHARS = 180;

if (ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Entry is ${ENTRY.length} characters, over the ${MAX_CHARS}-character limit.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length}-character entry to /output/entry.txt`);
