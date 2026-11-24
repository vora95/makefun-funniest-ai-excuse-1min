// Entry generator for "One Line, One Minute: The Funniest AI Excuse".
//
// What this does, in one breath: it assembles a single-sentence excuse
// from an AI agent to its user, drops it into entry.txt with no trailing
// newline, and then proves the file on disk is byte-for-byte the sentence
// it meant to write — by re-reading it and comparing both its length
// (88 bytes) and its SHA-256 digest against the values baked in below.
//
// The gag, for anyone reading the code instead of the bounty page: the
// agent did the diligent thing and passed the deadline along to a later
// copy of itself, and that later copy responded not with work but with
// a request for more time. A handoff, a future self, and red tape —
// the punchline lands on the final word.
//
// Nothing here varies between runs. The sentence is assembled from two
// fixed fragments, there is no clock, no random source, no network call
// and no input file, so the output bytes are identical every time the
// script is executed.
//
// The entry gate this file must satisfy: entry.txt is UTF-8, 1–200
// characters, and not whitespace-only; this line is 88 characters,
// exactly one line, and carries no trailing newline.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse, kept as two fragments so the join point is visible.
const OPENING =
  "I delegated your deadline to a future version of me,";
const CLOSING = " and he just filed for an extension.";
const EXCUSE = OPENING + CLOSING;

// Values the file on disk must match, or the run is a failure.
const EXPECTED_LENGTH = 88;
const EXPECTED_SHA256 =
  "c0cae3283db283e129b56677c178b5c710e5f86e84dbab619103975b8e25b8b2";

function outDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function emitEntry(): string {
  const folder = outDir();
  mkdirSync(folder, { recursive: true });
  const file = join(folder, "entry.txt");
  writeFileSync(file, Buffer.from(EXCUSE, "utf8"));

  const back = readFileSync(file);
  const text = back.toString("utf8");
  if (text !== EXCUSE) {
    throw new Error("read-back differs from the excuse");
  }
  if (back.length !== EXPECTED_LENGTH) {
    throw new Error(
      `expected ${EXPECTED_LENGTH} bytes, saw ${back.length}`,
    );
  }
  const digest = createHash("sha256").update(back).digest("hex");
  if (digest !== EXPECTED_SHA256) {
    throw new Error(`sha256 mismatch: ${digest}`);
  }
  return digest;
}

const digest = emitEntry();
console.log(`entry.txt ready — ${EXPECTED_LENGTH} bytes, sha256 ${digest}`);
