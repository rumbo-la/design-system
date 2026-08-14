#!/usr/bin/env node
/* Parte assets/icons/icons-sheet.svg en íconos individuales + sprite.
   Salida: dist/icons/<nombre>.svg y dist/icons/sprite.svg (trazo en currentColor).
   Los nombres vienen de scripts/icon-names.json (mapa índice → nombre). */

import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sheet = readFileSync(resolve(root, "assets/icons/icons-sheet.svg"), "utf8");
const names = JSON.parse(readFileSync(resolve(root, "scripts/icon-names.json"), "utf8"));

/* ---------- 1. Extraer grupos de nivel superior ---------- */
function topLevelGroups(svg) {
  const body = svg.slice(svg.indexOf(">", svg.indexOf("<svg")) + 1, svg.lastIndexOf("</svg>"));
  const groups = [];
  let depth = 0, start = -1;
  const re = /<(\/?)g\b[^>]*?(\/?)>/g;
  let m;
  while ((m = re.exec(body))) {
    const closing = m[1] === "/", selfClosing = m[2] === "/";
    if (selfClosing) continue;
    if (!closing) {
      if (depth === 0) start = m.index;
      depth++;
    } else {
      depth--;
      if (depth === 0 && start >= 0) {
        groups.push(body.slice(start, m.index + m[0].length));
        start = -1;
      }
    }
  }
  return groups;
}

/* ---------- 2. Bounding box aproximado (envolvente de puntos de control) ---------- */
function bbox(fragment) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const add = (x, y) => {
    if (Number.isFinite(x) && Number.isFinite(y)) {
      x0 = Math.min(x0, x); y0 = Math.min(y0, y);
      x1 = Math.max(x1, x); y1 = Math.max(y1, y);
    }
  };

  for (const [, d] of fragment.matchAll(/\sd="([^"]+)"/g)) {
    // Tokeniza comandos y sus números; soporta absolutos y relativos.
    let cx = 0, cy = 0, sx = 0, sy = 0;
    for (const [, cmd, argStr] of d.matchAll(/([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)/g)) {
      const n = (argStr.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi) || []).map(Number);
      const rel = cmd === cmd.toLowerCase();
      const up = cmd.toUpperCase();
      const px = () => (rel ? cx : 0);
      const py = () => (rel ? cy : 0);

      if (up === "Z") { cx = sx; cy = sy; continue; }
      if (up === "H") { for (const v of n) { cx = px() + v; add(cx, cy); } continue; }
      if (up === "V") { for (const v of n) { cy = py() + v; add(cx, cy); } continue; }

      const step = { M: 2, L: 2, T: 2, S: 4, Q: 4, C: 6, A: 7 }[up];
      for (let i = 0; i + step <= n.length; i += step) {
        const seg = n.slice(i, i + step);
        if (up === "A") {
          cx = px() + seg[5]; cy = py() + seg[6]; add(cx, cy);
        } else {
          for (let k = 0; k + 1 < step; k += 2) add(px() + seg[k], py() + seg[k + 1]);
          cx = px() + seg[step - 2];
          cy = py() + seg[step - 1];
        }
        if (up === "M" && i === 0) { sx = cx; sy = cy; }
      }
    }
  }

  for (const [, cxs, cys, rs] of fragment.matchAll(/<circle[^>]*cx="([^"]+)"[^>]*cy="([^"]+)"[^>]*r="([^"]+)"/g)) {
    const c = Number(cxs), y = Number(cys), r = Number(rs);
    add(c - r, y - r); add(c + r, y + r);
  }
  return { x0, y0, x1, y1, cx: (x0 + x1) / 2, cy: (y0 + y1) / 2 };
}

/* ---------- 3. Clusterizar grupos que forman un mismo ícono ---------- */
const groups = topLevelGroups(sheet).map((frag) => ({ frag, box: bbox(frag) }));
const clusters = [];
for (const g of groups) {
  if (!Number.isFinite(g.box.cx)) continue;
  const hit = clusters.find(
    (c) => Math.abs(c.cx - g.box.cx) < 110 && Math.abs(c.cy - g.box.cy) < 95
  );
  const target = hit ?? { parts: [], x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
  if (!hit) clusters.push(target);
  target.parts.push(g.frag);
  target.x0 = Math.min(target.x0, g.box.x0); target.y0 = Math.min(target.y0, g.box.y0);
  target.x1 = Math.max(target.x1, g.box.x1); target.y1 = Math.max(target.y1, g.box.y1);
  target.cx = (target.x0 + target.x1) / 2;
  target.cy = (target.y0 + target.y1) / 2;
}

/* Orden de lectura: por fila (banda de ~150px), luego por columna */
clusters.sort((a, b) => Math.round(a.cy / 150) - Math.round(b.cy / 150) || a.cx - b.cx);

/* ---------- 4. Emitir SVGs individuales + sprite ----------
   Todos los íconos se normalizan a una caja cuadrada de 24×24 con
   padding: así son intercambiables y `<use>` no aplica una doble
   transformación (el símbolo y el <svg> host comparten viewBox). */
const BOX = 24;   // caja de destino
const PAD = 1.5;  // aire dentro de la caja
const outDir = resolve(root, "dist/icons");
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const slug = (s, i) =>
  (names[String(i)] ?? `icono-${String(i + 1).padStart(2, "0")}`)
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/&/g, "y").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const symbols = [];
const index = [];

clusters.forEach((c, i) => {
  const name = slug(name0(i), i);
  const w = c.x1 - c.x0, h = c.y1 - c.y0;

  // Escala uniforme para encajar el lado mayor en BOX - 2*PAD, y centrado.
  const scale = (BOX - PAD * 2) / Math.max(w, h);
  const tx = +(PAD + (BOX - PAD * 2 - w * scale) / 2 - c.x0 * scale).toFixed(4);
  const ty = +(PAD + (BOX - PAD * 2 - h * scale) / 2 - c.y0 * scale).toFixed(4);
  const vb = `0 0 ${BOX} ${BOX}`;

  // El trazo original viene con fill="#FFFFFF" → currentColor para que herede el contexto.
  const inner = c.parts.join("\n    ").replace(/fill="#FFFFFF"/g, 'fill="currentColor"');
  const body = `<g transform="translate(${tx} ${ty}) scale(${scale.toFixed(5)})">\n    ${inner}\n  </g>`;

  writeFileSync(
    resolve(outDir, `${name}.svg`),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" fill="currentColor" role="img" aria-label="${name0(i)}">\n  ${body}\n</svg>\n`
  );
  symbols.push(`  <symbol id="rb-icon-${name}" viewBox="${vb}">\n    ${body}\n  </symbol>`);
  index.push({ name, label: name0(i), viewBox: vb });
});

function name0(i) {
  return names[String(i)] ?? `Icono ${i + 1}`;
}

writeFileSync(
  resolve(outDir, "sprite.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">\n${symbols.join("\n")}\n</svg>\n`
);
writeFileSync(resolve(outDir, "index.json"), JSON.stringify(index, null, 2) + "\n");

console.log(`✓ dist/icons/ — ${clusters.length} íconos de marca`);
console.log(`  ${index.filter((i) => !i.name.startsWith("icono-")).length} con nombre · ${index.filter((i) => i.name.startsWith("icono-")).length} sin nombrar`);
console.log(`✓ dist/icons/sprite.svg · dist/icons/index.json`);

/* ---------- 5. Set de UI (trazo) ----------
   Segundo set, con propósito distinto al ilustrativo de marca: son los
   íconos funcionales que usan los componentes (check, chevron, gear…).
   Fuente: assets/icons-ui/*.svg — un archivo por ícono, editable a mano. */
const uiSrc = resolve(root, "assets/icons-ui");
const uiFiles = readdirSync(uiSrc).filter((f) => f.endsWith(".svg")).sort();
const uiSymbols = [];
const uiIndex = [];

for (const file of uiFiles) {
  const name = file.replace(/\.svg$/, "");
  const svg = readFileSync(resolve(uiSrc, file), "utf8");
  const open = svg.slice(svg.indexOf("<svg"), svg.indexOf(">", svg.indexOf("<svg")) + 1);
  const inner = svg.slice(svg.indexOf(">", svg.indexOf("<svg")) + 1, svg.lastIndexOf("</svg>")).trim();

  // Los atributos de trazo viajan en el <symbol> para que <use> los herede.
  const strokeAttrs = [...open.matchAll(/\s(fill|stroke|stroke-width|stroke-linecap|stroke-linejoin)="([^"]*)"/g)]
    .map(([, k, v]) => `${k}="${v}"`)
    .join(" ");
  const viewBox = open.match(/viewBox="([^"]+)"/)?.[1] || "0 0 24 24";

  uiSymbols.push(`  <symbol id="rb-ui-${name}" viewBox="${viewBox}" ${strokeAttrs}>\n    ${inner}\n  </symbol>`);
  uiIndex.push({ name, viewBox });
}

writeFileSync(
  resolve(root, "dist/icons-ui.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">\n${uiSymbols.join("\n")}\n</svg>\n`
);
writeFileSync(resolve(root, "dist/icons-ui.json"), JSON.stringify(uiIndex, null, 2) + "\n");

console.log(`✓ dist/icons-ui.svg — ${uiIndex.length} íconos de UI`);
