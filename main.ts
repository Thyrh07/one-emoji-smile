// One Emoji, One Smile — make.fun bounty u-0xkianno-one-emoji-one-smile-5470751f
// Writes exactly one emoji to /output/entry.txt: nothing else, no trailing newline.
// Chosen emoji: U+1F970 Smiling Face with Hearts — a smile plus hearts, the warmest
// single emoji a stranger reads at a glance: kind, friendly, universal, and picked
// for the moment rather than the first smiley that comes to mind.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🥰";
const OUTPUT = "/output/entry.txt";

// Gate: the entry must be exactly one emoji — 1 to 8 UTF-8 characters, one
// grapheme cluster, not only white space — and nothing else, no trailing newline.
const graphemes = [...EMOJI];
if (graphemes.length !== 1 || EMOJI.length > 8 || EMOJI.trim() === "") {
  throw new Error("entry must be exactly one emoji");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, EMOJI, "utf8");
console.log(`wrote ${OUTPUT}`);
