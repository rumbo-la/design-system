#!/usr/bin/env node
/* Verifica que out/ sea autosuficiente: todo lo que el sitio pide en
   runtime tiene que existir dentro de out/, porque al publicarlo el resto
   del repositorio no viaja.

   Detecta la clase de fallo que solo aparece al desplegar: un fetch() a un
   archivo que quedó fuera del build y que en local funcionaba porque el
   servidor veía todo el repo.

   Uso: npm run check:site  (requiere haber corrido build:site) */

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, resolve, join, relative, posix } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = resolve(root, "out");

if (!existsSync(out)) {
  console.error("✗ out/ no existe — corre `npm run build:site`");
  process.exit(1);
}

const problems = [];
const seen = new Set();

/* Todos los archivos de texto donde puede haber referencias */
function collect(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) collect(p, acc);
    else if (/\.(html|js|css|json)$/.test(name)) acc.push(p);
  }
  return acc;
}

/* Referencias que el navegador va a pedir de verdad:
   - href/src de HTML
   - url() de CSS
   - fetch("…") de JS  ← donde estaba el bug de tokens.json */
const PATTERNS = [
  /(?:href|src)="([^"#:?]+\.(?:css|js|svg|png|jpe?g|otf|woff2?|json|html))(?:\?[^"]*)?"/g,
  /url\(["']?([^"')]+\.(?:otf|woff2?|png|svg))["']?\)/g,
  /fetch\(\s*["'`]([^"'`]+\.(?:json|svg|css|js))["'`]/g,
];

for (const file of collect(out)) {
  const text = readFileSync(file, "utf8");
  const fileDir = dirname(file);

  for (const re of PATTERNS) {
    for (const [, ref] of text.matchAll(re)) {
      if (/^(https?:)?\/\//.test(ref) || ref.startsWith("data:")) continue;

      // Relativa al documento; si no, relativa a la raíz del sitio.
      const asRelative = resolve(fileDir, ref);
      const asRoot = resolve(out, ref.replace(/^\//, ""));
      const found = existsSync(asRelative) || existsSync(asRoot);

      const key = `${relative(out, file)} → ${ref}`;
      if (!found && !seen.has(key)) {
        seen.add(key);
        problems.push(key);
      }
    }
  }
}

/* Entradas que el sitio necesita sí o sí */
for (const must of ["index.html", "design-system.html", "brand-manual.html", ".nojekyll"]) {
  if (!existsSync(resolve(out, must))) problems.push(`falta ${must} en out/`);
}

/* Nada de material de trabajo publicado por accidente */
for (const forbidden of ["scripts", "src", "docs", "PRD.md", "README.md", "CHANGELOG.md", "package.json"]) {
  if (existsSync(resolve(out, forbidden))) {
    problems.push(`out/${forbidden} no debería publicarse`);
  }
}

if (problems.length) {
  console.error(`✗ out/ no es autosuficiente — ${problems.length} problema(s):\n`);
  for (const p of problems) console.error(`  · ${p}`);
  console.error("\nRevisa ENTRIES en scripts/build-site.mjs");
  process.exit(1);
}

const files = collect(out).length;
console.log(`✓ out/ es autosuficiente — todas las referencias resuelven`);
