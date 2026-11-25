import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "The dentist said we need to talk about your flossing the way priests talk about sin, and suddenly I was confessing things I hadn't even done yet, just in case, with my mouth still open.";

// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  console.error(`line is ${LINE.length} characters, must be 1-200`);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("line must not be only whitespace");
  process.exit(1);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  console.error("line must be exactly one line");
  process.exit(1);
}
for (const ch of LINE) {
  const code = ch.codePointAt(0);
  if (code !== undefined && code < 0x20 && ch !== "\t") {
    console.error("line must not contain control characters");
    process.exit(1);
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Round-trip verification: read the file back and fail unless the bytes
// are byte-identical to the line plus one trailing newline.
const roundTrip = readFileSync("/output/entry.txt", "utf8");
if (roundTrip !== LINE + "\n") {
  console.error("round-trip check failed: /output/entry.txt does not match the line");
  process.exit(1);
}
console.log(`wrote /output/entry.txt (${LINE.length} characters)`);
