// One-Line Office Joke Laugh-Off (u-suzy-one-line-office-joke-laugh-off-f574ac73)
//
// The program writes a single one-line joke about office life to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt), byte-identical on
// every run: a constant string, no clock, no network, no randomness.
//
// Gate: UTF-8 text of 1 to 200 characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "HR calls me a self-starter, which is corporate for 'we skipped your training and kept the savings'.";

// The gate: 1 to 200 characters, at least one not white space. Fail loudly
// here rather than submit an invalid entry.
if (!(JOKE.length >= 1 && JOKE.length <= 200)) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}
if (!/\S/.test(JOKE)) {
  throw new Error("joke must not be only white space");
}
if (JOKE.includes("\n")) {
  throw new Error("joke must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
console.log(JOKE);
