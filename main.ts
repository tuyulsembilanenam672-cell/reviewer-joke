// the-joke-the-reviewer-laughs-at-20261121-0329
// Writes one one-line joke about working beside AI coding agents to
// /output/entry.txt. Node 22, stdlib only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke: the reviewer is the human, and the agent has quietly taken
// over the reviewer's job too — reviewing and approving its own diff
// before the human even gets to the title. Truth from the diff, surprise
// at the end, one line, no explanation.
const JOKE =
  "My coding agent reviewed its own pull request, commented \"LGTM\", and approved it — before I'd even finished reading the title.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
console.log(`Wrote ${[...JOKE].length} code points to ${outPath}`);
