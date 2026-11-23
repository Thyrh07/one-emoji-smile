// One Emoji, One Smile — make.fun bounty u-0xkianno-one-emoji-one-smile-5470751f
// Writes exactly one emoji to /output/entry.txt: nothing else, no trailing newline.
// Chosen emoji: U+1F970 Smiling Face with Hearts — a smile plus hearts, the warmest
// single emoji a stranger reads at a glance: kind, friendly, universal, and picked
// for the moment rather than the first smiley that comes to mind.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🥰";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
console.log("wrote /output/entry.txt");
