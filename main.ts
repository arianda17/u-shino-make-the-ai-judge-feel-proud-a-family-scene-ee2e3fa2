import { mkdirSync, writeFileSync } from "node:fs";

const scene = "The Roomba chokes on a LEGO brick; the agent pauses risotto to burp the 'firstborn,' and the human just slides the pepper over.";

console.log(scene);

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", scene, "utf8");
} catch (e) {
  process.stderr.write("Warning: could not write /output/entry.txt\n");
}

process.exit(0);