#!/usr/bin/env node
/* Audita que nada contradiga tokens/tokens.json (PRD · métrica 4).
   Corre en cada release: `npm run check`.
   Sale con código 1 si encuentra conflictos. */

import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => (existsSync(resolve(root, p)) ? readFileSync(resolve(root, p), "utf8") : null);

const tokens = JSON.parse(read("tokens/tokens.json"));
const problems = [];
const notes = [];

/* ---------- 1. dist/ está sincronizado con tokens.json ---------- */
const css = read("dist/rumbo.css");
if (!css) {
  problems.push("dist/rumbo.css no existe — corre `npm run build:tokens`");
} else {
  for (const [key, node] of Object.entries(tokens.color.brand)) {
    if (key.startsWith("$")) continue;
    const expected = node.$value;
    const re = new RegExp(`--rb-${key}:\\s*([^;]+);`);
    const found = css.match(re)?.[1]?.trim();
    if (found && found.toLowerCase() !== expected.toLowerCase()) {
      problems.push(`dist/rumbo.css desincronizado: --rb-${key} = ${found}, tokens.json dice ${expected}`);
    }
  }
}

/* ---------- 2. El manual no contradice los valores canónicos ---------- */
const manual = read("Rumbo Brand Manual.html");
if (manual) {
  const canon = {
    ink: tokens.color.brand.ink.$value,
    paper: tokens.color.brand.paper.$value,
    blue: tokens.color.brand.blue.$value,
    cyan: tokens.color.brand.cyan.$value,
    purple: tokens.color.brand.purple.$value,
  };
  // Los hex declarados como "HEX #xxxxxx" en las fichas de color del manual
  const declared = [...manual.matchAll(/HEX<\/[^>]+>\s*<[^>]*>(#[0-9A-Fa-f]{6})/g)].map((m) => m[1].toUpperCase());
  const canonSet = new Set(Object.values(canon).map((v) => v.toUpperCase()));

  for (const hex of new Set(declared)) {
    if (!canonSet.has(hex)) {
      const near = hex === "#000000" ? ` (¿debería ser ${canon.ink}? — acta #1)`
        : hex === "#FFFFFF" ? ` (¿debería ser ${canon.paper}? — acta #2)` : "";
      problems.push(`Manual declara ${hex} que no está en la paleta canónica${near}`);
    }
  }

  // RGB del purple (errata conocida — acta #3)
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(canon.purple.slice(i, i + 2), 16));
  if (/137\s*·\s*82\s*·\s*253/.test(manual)) {
    problems.push(`Manual declara RGB 137·82·253 para purple; ${canon.purple} es ${r}·${g}·${b} (acta #3)`);
  }
}

/* ---------- 3. El sitio de docs no redefine tokens del sistema ---------- */
const ds = read("Rumbo Design System.html");
if (ds) {
  const localVars = [...ds.matchAll(/^\s*(--[a-z0-9-]+):/gim)].map((m) => m[1]);
  const allowed = new Set(["--sidebar-w", "--max-w"]); // layout propio del sitio
  const redefined = localVars.filter((v) => !allowed.has(v));
  if (redefined.length) {
    problems.push(`El sitio de docs redefine tokens del sistema: ${[...new Set(redefined)].join(", ")}`);
  }
  for (const dep of ["dist/rumbo.css", "dist/rumbo-ui.css", "dist/tokens.js"]) {
    if (!ds.includes(dep)) problems.push(`El sitio de docs no carga ${dep} (RF-13)`);
  }
  // Los scripts del sitio viven en site/ — detecta rutas rotas tras un movimiento
  for (const dep of ["site/ds-data.js", "site/ds-app.js"]) {
    if (!ds.includes(dep)) problems.push(`El sitio de docs no carga ${dep}`);
  }
}

/* ---------- 4. dist/ no fue editado a mano ----------
   Los archivos de la librería se escriben en src/ y build-lib.mjs los
   copia. Si difieren, alguien editó dist/ y ese cambio se perderá. */
for (const file of ["fonts.css", "rumbo-ui.css", "rumbo-ui.js"]) {
  const a = read(`src/${file}`);
  const b = read(`dist/${file}`);
  if (a === null) problems.push(`Falta src/${file}`);
  else if (b === null) problems.push(`Falta dist/${file} — corre \`npm run build:lib\``);
  else if (a !== b) {
    problems.push(`dist/${file} difiere de src/${file} — edita src/ y corre \`npm run build:lib\` (los cambios en dist/ se pierden)`);
  }
}

/* ---------- 5. Íconos generados ---------- */
const iconIndex = read("dist/icons/index.json");
if (!iconIndex) {
  problems.push("dist/icons/index.json no existe — corre `npm run build:icons`");
} else {
  const icons = JSON.parse(iconIndex);
  const unnamed = icons.filter((i) => /^icono-\d+$/.test(i.name));
  if (unnamed.length) notes.push(`${unnamed.length} íconos sin nombre semántico en scripts/icon-names.json`);
  notes.push(`${icons.length} íconos generados`);
  if (ds && /28\s+íconos/.test(ds)) {
    problems.push(`El sitio de docs dice "28 íconos" pero se generan ${icons.length}`);
  }
}

/* ---------- Reporte ---------- */
if (notes.length) {
  console.log("Notas:");
  for (const n of notes) console.log(`  · ${n}`);
  console.log("");
}

if (problems.length) {
  console.error(`✗ ${problems.length} conflicto(s) de consistencia:\n`);
  for (const p of problems) console.error(`  · ${p}`);
  console.error("\nVer docs/decisions/2026-08-13-valores-canonicos.md");
  process.exit(1);
}

console.log("✓ Sin conflictos: manual, docs y dist/ coinciden con tokens.json");
