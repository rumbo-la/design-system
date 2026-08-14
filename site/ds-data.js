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

/* Icon helper — plain stroke icons used across UI examples.
   Keep lightweight; pages supply their own inline where useful. */
RB.ic = (name, size = 16) => {
  const m = {
    check:    '<polyline points="20 6 9 17 4 12"/>',
    x:        '<path d="M18 6 6 18M6 6l12 12"/>',
    chevR:    '<polyline points="9 6 15 12 9 18"/>',
    chevL:    '<polyline points="15 6 9 12 15 18"/>',
    chevD:    '<polyline points="6 9 12 15 18 9"/>',
    plus:     '<path d="M12 5v14M5 12h14"/>',
    arrowUR:  '<path d="M7 17 17 7M8 7h9v9"/>',
    info:     '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    alert:    '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    star:     '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    search:   '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    user:     '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    mail:     '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/>',
    lock:     '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    eye:      '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    gear:     '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    inbox:    '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    trend:    '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    bell:     '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${m[name] || ""}</svg>`;
};

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
