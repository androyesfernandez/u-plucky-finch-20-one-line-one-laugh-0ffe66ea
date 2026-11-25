import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "The dentist asked me to open wide and said we need to talk about your flossing the way priests talk about sin, and suddenly I was confessing things I hadn't even done yet, in vivid detail.";

// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be exactly one line");
}
for (const ch of LINE) {
  if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
    throw new Error("line must not contain control characters");
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Round-trip verification: read the file back and refuse to exit
// successfully unless its bytes are byte-identical to the line plus
// the single trailing newline.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE + "\n") {
  throw new Error("round-trip check failed: /output/entry.txt does not match the line");
}
