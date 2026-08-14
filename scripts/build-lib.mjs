#!/usr/bin/env node
/* Copia los archivos de la librería escritos a mano (src/) a dist/.
   Así dist/ contiene TODO lo que un consumidor necesita, pero sigue
   siendo enteramente generado: se edita src/, nunca dist/. */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = resolve(root, "src");
const outDir = resolve(root, "dist");

mkdirSync(outDir, { recursive: true });

const files = readdirSync(srcDir).filter((f) => /\.(css|js)$/.test(f)).sort();
for (const file of files) {
  // Copia byte a byte: check-consistency compara src/ y dist/ para
  // detectar ediciones hechas directamente sobre dist/.
  writeFileSync(resolve(outDir, file), readFileSync(resolve(srcDir, file)));
}

console.log(`✓ dist/ ← src/ — ${files.length} archivos (${files.join(", ")})`);
