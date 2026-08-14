#!/usr/bin/env node
/* Genera dist/rumbo.css y dist/tailwind.preset.js desde tokens/tokens.json.
   Los archivos de dist/ son generados: no editarlos a mano. */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(readFileSync(resolve(root, "tokens/tokens.json"), "utf8"));

/* ---------- Resolución de alias {a.b.c} ---------- */
const at = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), tokens);

function resolveValue(value, seen = new Set()) {
  if (typeof value !== "string") return value;
  return value.replace(/\{([^}]+)\}/g, (match, path) => {
    if (seen.has(path)) throw new Error(`Alias circular: ${path}`);
    const node = at(path);
    if (!node || node.$value === undefined) throw new Error(`Alias no resuelto: ${match}`);
    return resolveValue(node.$value, new Set([...seen, path]));
  });
}

/* Recorre un grupo y devuelve [nombre, valorResuelto, descripcion] de sus tokens hoja */
function entries(group) {
  const out = [];
  for (const [key, node] of Object.entries(group ?? {})) {
    if (key.startsWith("$") || node == null || typeof node !== "object") continue;
    if (node.$value !== undefined) out.push([key, resolveValue(node.$value), node.$description]);
  }
  return out;
}

const banner = (file) => `/* ============================================================
   ${file}
   GENERADO por scripts/build-tokens.mjs — no editar a mano.
   Fuente de verdad: tokens/tokens.json
   ============================================================ */\n`;

/* ---------- CSS custom properties ---------- */
function buildCss() {
  const L = [banner("Rumbo Design System · tokens")];
  const decl = (name, value, desc) => `  --${name}: ${value};${desc ? ` /* ${desc} */` : ""}`;

  const rootLines = [];
  rootLines.push("  /* Brand primitives */");
  for (const [k, v, d] of entries(tokens.color.brand)) rootLines.push(decl(`rb-${k}`, v, d));

  rootLines.push("", "  /* Functional */");
  for (const [k, v, d] of entries(tokens.color.functional)) {
    rootLines.push(decl(k === "orange" ? "rb-orange" : k, v, d));
  }

  rootLines.push("", "  /* Semantic — dark (tema primario) */");
  for (const [k, v] of entries(tokens.color.theme.dark)) rootLines.push(decl(k, v));

  rootLines.push("", "  /* Radii */");
  for (const [k, v, d] of entries(tokens.radius)) rootLines.push(decl(`radius-${k}`, v, d));

  rootLines.push("", "  /* Shadow — dark */");
  for (const [k, v] of entries(tokens.shadow.dark)) rootLines.push(decl(`shadow-${k}`, v));

  rootLines.push("", "  /* Spacing — base 4px */");
  for (const [k, v] of entries(tokens.spacing)) rootLines.push(decl(`sp-${k}`, v));

  rootLines.push("", "  /* Type — familias */");
  for (const [k, v] of entries(tokens.typography.fontFamily)) rootLines.push(decl(`ff-${k}`, v));

  rootLines.push("", "  /* Type — escala producto */");
  for (const [k, v] of entries(tokens.typography["scale-product"])) rootLines.push(decl(`fs-${k}`, v));

  rootLines.push("", "  /* Type — escala marketing (cap. 06 del manual) */");
  for (const [k, node] of Object.entries(tokens.typography["scale-marketing"])) {
    if (k.startsWith("$")) continue;
    rootLines.push(decl(`mk-${k}-size`, node.$value.fontSize));
    rootLines.push(decl(`mk-${k}-lh`, node.$value.lineHeight));
  }

  rootLines.push("", "  /* Motion */");
  for (const [k, v, d] of entries(tokens.motion.duration)) rootLines.push(decl(`dur-${k}`, v, d));
  for (const [k, v, d] of entries(tokens.motion.easing)) rootLines.push(decl(`ease-${k}`, v, d));

  L.push(`:root, [data-theme="dark"] {\n${rootLines.join("\n")}\n}\n`);

  /* Tema light: solo redefine la capa semántica */
  const lightLines = entries(tokens.color.theme.light).map(([k, v]) => decl(k, v));
  for (const [k, v] of entries(tokens.shadow.light)) lightLines.push(decl(`shadow-${k}`, v));

  L.push(`/* Tema light — redefine solo tokens semánticos (RF-03) */`);
  L.push(`[data-theme="light"] {\n${lightLines.join("\n")}\n}\n`);

  return L.join("\n");
}

/* ---------- Preset de Tailwind ---------- */
function buildTailwind() {
  const brand = Object.fromEntries(entries(tokens.color.brand).map(([k, v]) => [k, v]));
  const fn = Object.fromEntries(entries(tokens.color.functional).map(([k, v]) => [k, v]));
  const spacing = Object.fromEntries(entries(tokens.spacing).map(([k, v]) => [k, v]));
  const radius = Object.fromEntries(
    entries(tokens.radius).map(([k, v]) => [k === "full" ? "full" : k, v])
  );
  const fontSize = Object.fromEntries(
    entries(tokens.typography["scale-product"]).map(([k, v]) => [k, v])
  );
  const duration = Object.fromEntries(entries(tokens.motion.duration).map(([k, v]) => [k, v]));
  const easing = Object.fromEntries(entries(tokens.motion.easing).map(([k, v]) => [k, v]));
  const families = Object.fromEntries(
    entries(tokens.typography.fontFamily).map(([k, v]) => [k, v.split(",").map((s) => s.trim())])
  );

  const preset = {
    theme: {
      extend: {
        colors: {
          rumbo: brand,
          ...fn,
          /* Semánticos: se leen de las CSS vars para que el theming siga funcionando */
          bg: "var(--bg)",
          "bg-elev": "var(--bg-elev)",
          surface: "var(--surface)",
          "surface-2": "var(--surface-2)",
          border: "var(--border)",
          text: "var(--text)",
          "text-muted": "var(--text-muted)",
          accent: "var(--accent)",
        },
        spacing,
        borderRadius: radius,
        fontSize,
        fontFamily: families,
        transitionDuration: duration,
        transitionTimingFunction: easing,
      },
    },
  };

  return `${banner("Rumbo Design System · preset de Tailwind")}
module.exports = ${JSON.stringify(preset, null, 2)};
`;
}

/* ---------- JS para la documentación (RF-13) ----------
   El sitio de docs lee de aquí en lugar de duplicar valores. */
function buildDocsJs() {
  const data = {
    brand: entries(tokens.color.brand).map(([k, v, d]) => ({
      n: k, t: `--rb-${k}`, v, role: d,
    })),
    functional: entries(tokens.color.functional).map(([k, v, d]) => ({
      n: k, t: `--${k === "orange" ? "rb-orange" : k}`, v, role: d,
    })),
    semantic: entries(tokens.color.theme.dark).map(([k, v]) => ({ n: k, t: `--${k}`, v })),
    semanticLight: entries(tokens.color.theme.light).map(([k, v]) => ({ n: k, t: `--${k}`, v })),
    spacing: entries(tokens.spacing).map(([k, v]) => [`--sp-${k}`, parseInt(v, 10)]),
    radii: entries(tokens.radius).map(([k, v, d]) => [`--radius-${k}`, parseInt(v, 10), d]),
    shadows: entries(tokens.shadow.dark).map(([k, v, d]) => [`--shadow-${k}`, v, d]),
    motion: [
      ...entries(tokens.motion.duration).map(([k, v, d]) => [`--dur-${k}`, v, d]),
      ...entries(tokens.motion.easing).map(([k, v, d]) => [`--ease-${k}`, v, d]),
    ],
    scaleProduct: entries(tokens.typography["scale-product"]).map(([k, v]) => [k, v]),
    scaleMarketing: Object.entries(tokens.typography["scale-marketing"])
      .filter(([k]) => !k.startsWith("$"))
      .map(([k, node]) => [k, node.$value.fontSize, node.$value.lineHeight]),
    brandRules: Object.fromEntries(
      Object.entries(tokens["brand-rules"])
        .filter(([k]) => !k.startsWith("$"))
        .map(([k, node]) => [k, node.$value])
    ),
  };

  return `${banner("Rumbo Design System · tokens para la documentación")}
window.RB_TOKENS = ${JSON.stringify(data, null, 2)};
`;
}

/* ---------- Escritura ---------- */
mkdirSync(resolve(root, "dist"), { recursive: true });
writeFileSync(resolve(root, "dist/rumbo.css"), buildCss());
writeFileSync(resolve(root, "dist/tailwind.preset.js"), buildTailwind());
writeFileSync(resolve(root, "dist/tokens.js"), buildDocsJs());

const count = (o) =>
  Object.values(o ?? {}).reduce(
    (n, v) => (v && typeof v === "object" ? (v.$value !== undefined ? n + 1 : n + count(v)) : n),
    0
  );

console.log(`✓ dist/rumbo.css`);
console.log(`✓ dist/tailwind.preset.js`);
console.log(`✓ dist/tokens.js`);
console.log(`  ${count(tokens)} tokens desde tokens/tokens.json`);
