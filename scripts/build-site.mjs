#!/usr/bin/env node
/* Arma out/ con el sitio estático listo para servir (GitHub Pages, Netlify,
   S3, o cualquier host de archivos). Solo entra lo que hace falta en runtime
   más los entregables de marca descargables: nada de fuentes de build.

   Uso: npm run build:site
   Flags:
     --no-fonts   omite las tipografías (Dx Grafik es comercial: ver PRD)
     --public     además, quita del manual el capítulo de firma digital,
                  que contiene teléfonos personales de los fundadores
*/

import {
  readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync, readdirSync, statSync,
} from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = resolve(root, "out");
const flags = new Set(process.argv.slice(2));
const noFonts = flags.has("--no-fonts");
const isPublic = flags.has("--public");

/* Lo que se sirve. Todo lo demás (scripts/, src/, tokens/, docs/, *.md,
   package.json, assets/icons-ui/, assets/icons/icons-labeled.svg) es
   material de trabajo y no se publica. */
const ENTRIES = [
  "index.html",
  "design-system.html",
  "brand-manual.html",
  "examples/kitchen-sink.html",
  "dist",                        // tokens, librería, íconos generados
  "site",                        // app del sitio de docs
  "assets/icons/icons-sheet.svg", // el manual la muestra como imagen
  "assets/posts",                // referencias del manual
  "assets/logo",                 // entregable descargable (RF-07)
  "tokens/tokens.json",          // formato de intercambio; la portada lo lee
];
if (!noFonts) ENTRIES.push("assets/fonts");

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const entry of ENTRIES) {
  const from = resolve(root, entry);
  if (!existsSync(from)) {
    console.warn(`  ⚠ no existe, se omite: ${entry}`);
    continue;
  }
  const to = resolve(out, entry);
  mkdirSync(dirname(to), { recursive: true });
  cpSync(from, to, { recursive: true });
}

/* GitHub Pages corre Jekyll por defecto y se salta lo que empieza con "_".
   .nojekyll lo desactiva y sirve los archivos tal cual. */
writeFileSync(resolve(out, ".nojekyll"), "");

/* Modo --public: el capítulo 14 del manual lleva teléfonos personales. */
if (isPublic) {
  const p = resolve(out, "brand-manual.html");
  let html = readFileSync(p, "utf8");
  const before = html.length;
  html = html.replace(/<section[^>]*id="signature"[\s\S]*?<\/section>/, "");
  html = html.replace(/<[^>]*href="#signature"[^>]*>[\s\S]*?<\/a>/g, "");
  writeFileSync(p, html);
  console.log(`  · manual: capítulo de firma eliminado (-${before - html.length} bytes)`);
}

/* Si se omiten las fuentes, nada puede seguir pidiéndolas: ni dist/fonts.css
   ni los @font-face que el manual declara inline en su propio <style>. */
if (noFonts) {
  writeFileSync(resolve(out, "dist/fonts.css"),
`/* Tipografías omitidas en esta build (--no-fonts).
   Dx Grafik es comercial: confirma la licencia web antes de publicarla.
   El sistema degrada a la pila del sistema operativo. */\n`);

  // El manual no usa dist/fonts.css: trae sus propios @font-face.
  const manual = resolve(out, "brand-manual.html");
  if (existsSync(manual)) {
    let html = readFileSync(manual, "utf8");
    const antes = (html.match(/@font-face/g) || []).length;
    html = html.replace(/@font-face\s*\{[^}]*\}/g, "");
    writeFileSync(manual, html);
    console.log(`  · manual: ${antes} @font-face inline eliminados`);
  }
  console.log("  · fuentes omitidas — el sitio usa la pila del sistema");
}

/* Resumen */
function walk(dir) {
  let n = 0, bytes = 0;
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const st = statSync(p);
    if (st.isDirectory()) { const r = walk(p); n += r.n; bytes += r.bytes; }
    else { n++; bytes += st.size; }
  }
  return { n, bytes };
}
const { n, bytes } = walk(out);
console.log(`✓ out/ — ${n} archivos, ${(bytes / 1024 / 1024).toFixed(1)} MB${noFonts ? " (sin fuentes)" : ""}${isPublic ? " (modo público)" : ""}`);
console.log(`  probar: npx serve out    ·    publicar: ver README`);
