import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revised for punch: dropped the filler so the scope gag lands faster.
const line =
  "I would've finished, but my subagent spawned a subagent to ask whether finishing was in scope.";

if (line.length < 1 || line.length > 140) {
  throw new Error(`line length ${line.length} out of range 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
