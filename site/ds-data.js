/* ============================================================
   Rumbo DS — token data, swatch lists, scale definitions
   Consumed by ds-pages-*.js and ds-app.js
   ============================================================ */

window.RB = window.RB || {};

/* ---------- Datos derivados de tokens/tokens.json (RF-13) ----------
   dist/tokens.js define window.RB_TOKENS y se carga antes que este archivo.
   Ningún valor se escribe a mano aquí: cambiar un token en tokens.json y
   correr `npm run build:tokens` actualiza la documentación. */
const T = window.RB_TOKENS || {};
const SEMANTIC_ROLES = _roles();

RB.colors = {
  brand:    (T.brand || []).map(c => ({ n: c.role ? c.role.split(" · ")[0] : c.n, t: c.t, v: c.v })),
  semantic: (T.semantic || []).map(c => ({ n: c.n, t: c.t, v: c.v, role: SEMANTIC_ROLES[c.n] })),
  status:   (T.functional || []).map(c => ({ n: c.n, t: c.t, v: c.v })),
};

/* Rol de uso de cada token semántico — descripción editorial, no valor */
function _roles() {
  return {
    "bg": "Base canvas",
    "bg-elev": "Topbar, sidebar",
    "bg-subtle": "Table headers",
    "surface": "Cards, inputs",
    "surface-2": "Hover, pressed",
    "border": "Default rules",
    "border-strong": "Focus, form",
    "text": "Body & headings",
    "text-muted": "Captions, body dim",
    "text-dim": "Meta, labels",
    "accent": "Acción primaria",
    "accent-fg": "Texto sobre accent",
    "accent-soft": "Fondo de acento",
    "highlight": "Detalle · un acento por pieza",
  };
}

RB.spacing = T.spacing || [];
RB.radii   = T.radii   || [];
RB.shadows = T.shadows || [];
RB.motion  = T.motion  || [];

/* Escala tipográfica: la muestra editorial vive aquí, los tamaños en tokens.json */
const _samples = {
  display: "Encontramos el rumbo.",
  h1: "tiempo, espacio, tribu",
  h2: "mood + context + attention",
  "body-l": "Rumbo conecta empresas con talento digital validado.",
  body: "Construimos y ampliamos equipos con velocidad.",
  caption: "Brand Manual · v1.0 · 2026",
};

RB.type = [
  ...(T.scaleMarketing || []).map(([k, size, lh]) => ({
    nm: k === "body-l" ? "Body L" : k[0].toUpperCase() + k.slice(1),
    ff: ["display", "h1", "h2"].includes(k) ? "Dx Grafik" : "Space Grotesk",
    fw: ["display", "h1", "h2"].includes(k) ? "900 italic" : (k === "caption" ? "500" : "400"),
    sz: parseInt(size, 10),
    lh: +(parseInt(lh, 10) / parseInt(size, 10)).toFixed(2),
    tk: ["display", "h1", "h2"].includes(k) ? "-.025em" : "0",
    sample: _samples[k] || "Aa Bb Cc",
    ctx: "marketing",
  })),
  { nm: "UI base", ff: "Space Grotesk", fw: "400", sz: 14, tk: "0", lh: 1.55,
    sample: "Texto por defecto del sistema; densidad estándar en UI de producto.", ctx: "producto" },
  { nm: "Mono", ff: "ui-monospace", fw: "500", sz: 11, tk: ".18em", lh: 1.4,
    sample: "01 · CÓDIGO · TOKEN · META · ETIQUETA", mono: true, upper: true, ctx: "producto" },
];

RB.brandRules = T.brandRules || {};

/* Routing map — page label + optional section title/number */
RB.routes = [
  { r: "home",         t: "Home",             g: "Overview",    n: "00.00" },
  { r: "tokens",       t: "Tokens & exports", g: "Overview",    n: "00.01" },
  { r: "changelog",    t: "Changelog",        g: "Overview",    n: "00.02" },

  { r: "color",        t: "Color",            g: "Foundations", n: "01.00" },
  { r: "typography",   t: "Typography",       g: "Foundations", n: "01.01" },
  { r: "spacing",      t: "Spacing",          g: "Foundations", n: "01.02" },
  { r: "radius",       t: "Radius",           g: "Foundations", n: "01.03" },
  { r: "shadow",       t: "Elevation",        g: "Foundations", n: "01.04" },
  { r: "motion",       t: "Motion",           g: "Foundations", n: "01.05" },
  { r: "iconography",  t: "Iconography",      g: "Foundations", n: "01.06" },
  { r: "logo",         t: "Logo",             g: "Foundations", n: "01.07" },

  { r: "button",       t: "Button",           g: "Components",  n: "02.00" },
  { r: "input",        t: "Input & Textarea", g: "Components",  n: "02.01" },
  { r: "select",       t: "Select",           g: "Components",  n: "02.02" },
  { r: "toggle",       t: "Toggles",          g: "Components",  n: "02.03" },
  { r: "card",         t: "Card",             g: "Components",  n: "02.04" },
  { r: "badge",        t: "Badge & Tag",      g: "Components",  n: "02.05" },
  { r: "tabs",         t: "Tabs & Segmented", g: "Components",  n: "02.06" },
  { r: "alert",        t: "Alert & Toast",    g: "Components",  n: "02.07" },
  { r: "modal",        t: "Modal & Dialog",   g: "Components",  n: "02.08" },
  { r: "table",        t: "Table",            g: "Components",  n: "02.09" },
  { r: "nav",          t: "Navigation",       g: "Components",  n: "02.10" },
  { r: "avatar",       t: "Avatar",           g: "Components",  n: "02.11" },
  { r: "pagination",   t: "Pagination",       g: "Components",  n: "02.12" },
  { r: "progress",     t: "Progress & Loader",g: "Components",  n: "02.13" },
  { r: "tooltip",      t: "Tooltip",          g: "Components",  n: "02.14" },
  { r: "empty",        t: "Empty state",      g: "Components",  n: "02.15" },
  { r: "menu",         t: "Menu & Popover",   g: "Components",  n: "02.16" },
  { r: "drawer",       t: "Drawer",           g: "Components",  n: "02.17" },

  { r: "hero",         t: "Hero sections",    g: "Patterns",    n: "03.00" },
  { r: "pricing",      t: "Pricing",          g: "Patterns",    n: "03.01" },
  { r: "forms",        t: "Auth & forms",     g: "Patterns",    n: "03.02" },

  { r: "screen-login", t: "Login",            g: "Screens",     n: "04.00" },
  { r: "screen-dashboard", t: "Dashboard",    g: "Screens",     n: "04.01" },
  { r: "screen-pricing", t: "Pricing page",   g: "Screens",     n: "04.02" },
];

/* Estadísticas derivadas — nada de números a mano (RF-13) */
RB.stats = {
  get tokens(){ 
    const t = window.RB_TOKENS || {};
    return (t.brand||[]).length + (t.functional||[]).length + (t.semantic||[]).length
         + (t.spacing||[]).length + (t.radii||[]).length + (t.shadows||[]).length + (t.motion||[]).length;
  },
  get components(){ return RB.routes.filter(r => r.g === "Components").length; },
};

/* Utility: simple HTML escaper for code reveal panels */
RB.esc = s => String(s).replace(/[&<>]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;" }[c]));

/* Íconos de UI — leen del sprite generado dist/icons-ui.svg.
   Las rutas ya no viven aquí: la fuente es assets/icons-ui/*.svg y el
   sprite lo produce `npm run build:icons`. Así los componentes y los
   consumidores del sistema usan exactamente el mismo set. */
RB.ic = (name, size = 16) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true"><use href="#rb-ui-${name}"/></svg>`;

/* Demo primitive — stage + code reveal */
RB.demo = ({ stage, code, controls = "", opts = {} }) => {
  const { dense, left } = opts;
  return `
    <div class="demo">
      <div class="stage ${dense ? "dense" : ""} ${left ? "left" : ""}">${stage}</div>
      <div class="controls">
        ${controls}
        <div class="grow"></div>
        <button class="code-toggle" onclick="this.closest('.demo').classList.toggle('is-code-open')">‹/› Code</button>
      </div>
      <div class="code"><button class="copy" onclick="RB.copy(this.nextSibling.textContent,'Code copied')">Copy</button><pre style="margin:0;white-space:pre-wrap">${code}</pre></div>
    </div>
  `;
};

/* Section-header helper */
RB.sectionHeader = (routeObj, lead) => `
  <header class="section-header">
    <div>
      <div class="eyebrow"><b>${routeObj.n}</b> · ${routeObj.g}</div>
      <h2 class="heading">${routeObj.t.toLowerCase()}</h2>
      ${lead ? `<p class="lead" style="margin:0">${lead}</p>` : ""}
    </div>
    <div class="sh-meta">
      <span>v<b>1.0</b></span>
      <span>estado <b style="color:var(--success)">stable</b></span>
    </div>
  </header>
`;
