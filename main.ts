// one-line-roast — "One-Line Roast: The Gadget You Use Every Day".
// One original line, at most 200 characters, roasting a gadget or app
// used every day. The program writes that line to /output/entry.txt.
//
// The roast targets the phone's cloud storage, a thing every daily phone
// user has fought: the phone runs out of space, so it deletes your photos
// to make room for the update whose only job is to tell you that your
// storage is full. The joke is a closed loop — the fix is the problem,
// and the phone keeps reporting the problem it just caused. One sentence,
// no setup beyond the premise, and the punchline lands on the last words.
//
// The line is a single string, written here in the program, so both runs
// write byte-identical output. No network, no files read, no randomness.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The roast, exactly as submitted. 117 characters, one line, no trailing
// newline in the output file.
const LINE =
  'My cloud storage is full, so my phone deletes my photos to make room ' +
  'for the update that tells me my storage is full.';

// The gate allows 1 to 200 characters, so fail loudly rather than write
// an invalid entry if the line ever grows past the limit.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
