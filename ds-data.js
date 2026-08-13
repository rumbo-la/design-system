/* ============================================================
   Rumbo DS — token data, swatch lists, scale definitions
   Consumed by ds-pages-*.js and ds-app.js
   ============================================================ */

window.RB = window.RB || {};

RB.colors = {
  brand: [
    { n: "Rumbo blue",   t: "--rb-blue",     v: "#382EDC" },
    { n: "Blue 700",     t: "--rb-blue-700", v: "#2A22A8" },
    { n: "Blue 300",     t: "--rb-blue-300", v: "#8078F0" },
    { n: "Rumbo cyan",   t: "--rb-cyan",     v: "#47EBEB" },
    { n: "Cyan 600",     t: "--rb-cyan-600", v: "#19B8B8" },
    { n: "Purple",       t: "--rb-purple",   v: "#8452FD" },
    { n: "Orange",       t: "--rb-orange",   v: "#FF5A36" },
    { n: "Ink",          t: "--rb-ink",      v: "#0A0A0B" },
    { n: "Paper",        t: "--rb-paper",    v: "#F4F2ED" },
  ],
  semantic: [
    { n: "bg",           t: "--bg",          v: "#0A0A0B", role: "Base canvas" },
    { n: "bg / elevated", t: "--bg-elev",    v: "#121214", role: "Topbar, sidebar" },
    { n: "bg / subtle",  t: "--bg-subtle",   v: "#17171A", role: "Table headers" },
    { n: "surface",      t: "--surface",     v: "#1B1B1F", role: "Cards, inputs" },
    { n: "surface 2",    t: "--surface-2",   v: "#242428", role: "Hover, pressed" },
    { n: "border",       t: "--border",      v: "rgba(255,255,255,.08)", role: "Default rules" },
    { n: "border strong",t: "--border-strong", v: "rgba(255,255,255,.16)", role: "Focus, form" },
    { n: "text",         t: "--text",        v: "#FAFAFA", role: "Body & headings" },
    { n: "text muted",   t: "--text-muted",  v: "rgba(255,255,255,.64)", role: "Captions, body dim" },
    { n: "text dim",     t: "--text-dim",    v: "rgba(255,255,255,.44)", role: "Meta, labels" },
  ],
  status: [
    { n: "Success",      t: "--success",     v: "#3CCB7F" },
    { n: "Warning",      t: "--warning",     v: "#FFB020" },
    { n: "Danger",       t: "--danger",      v: "#FF5A36" },
    { n: "Accent",       t: "--accent",      v: "#382EDC" },
    { n: "Highlight",    t: "--highlight",   v: "#47EBEB" },
  ],
};

RB.spacing = [
  ["--sp-1", 4], ["--sp-2", 8], ["--sp-3", 12], ["--sp-4", 16],
  ["--sp-5", 20], ["--sp-6", 24], ["--sp-8", 32], ["--sp-10", 40],
  ["--sp-12", 48], ["--sp-16", 64], ["--sp-20", 80], ["--sp-24", 96],
];

RB.radii = [
  ["--radius-0", 0, "Campos técnicos, tags"],
  ["--radius-1", 4, "Botones sm, inputs técnicos"],
  ["--radius-2", 8, "Default — inputs, botones"],
  ["--radius-3", 12, "Cards, modales, stages"],
  ["--radius-4", 16, "Hero, secciones grandes"],
  ["--radius-full", 9999, "Pills, avatars"],
];

RB.shadows = [
  ["--shadow-1", "0 1px 2px rgba(0,0,0,.4)", "Edge lift (inputs hover)"],
  ["--shadow-2", "0 4px 12px rgba(0,0,0,.5)", "Dropdowns, popovers"],
  ["--shadow-3", "0 12px 32px rgba(0,0,0,.55), 0 2px 6px rgba(0,0,0,.4)", "Modales, toasts"],
  ["--shadow-glow", "0 0 0 1px rgba(56,46,220,.5), 0 8px 24px rgba(56,46,220,.35)", "Accent lift (featured)"],
];

RB.type = [
  { nm: "Display",  ff: "Dx Grafik", fw: "900 italic", sz: 88, tk: "-.03em", lh: .95, sample: "Encontramos el rumbo." },
  { nm: "H1",       ff: "Dx Grafik", fw: "900 italic", sz: 56, tk: "-.025em", lh: 1,   sample: "tiempo, espacio, tribu" },
  { nm: "H2",       ff: "Dx Grafik", fw: "900 italic", sz: 36, tk: "-.02em",  lh: 1,   sample: "mood + context + attention" },
  { nm: "H3",       ff: "Space Grotesk", fw: "600", sz: 22, tk: "-.015em", lh: 1.2, sample: "Secciones y títulos medios" },
  { nm: "H4",       ff: "Space Grotesk", fw: "600", sz: 18, tk: "-.01em",  lh: 1.3, sample: "Subtítulos de bloque" },
  { nm: "Body",     ff: "Space Grotesk", fw: "400", sz: 16, tk: "0",       lh: 1.55, sample: "Los ríos no avanzan en línea recta: serpentean, eligen su cauce, encuentran el mar." },
  { nm: "Body sm",  ff: "Space Grotesk", fw: "400", sz: 14, tk: "0",       lh: 1.55, sample: "Texto por defecto del sistema; densidad estándar en UI de producto." },
  { nm: "Caption",  ff: "Space Grotesk", fw: "500", sz: 12, tk: ".005em",  lh: 1.4, sample: "Captions, labels en formularios, metadatos" },
  { nm: "Mono",     ff: "ui-monospace", fw: "500", sz: 11, tk: ".18em",   lh: 1.4, sample: "01 · CÓDIGO · TOKEN · META · ETIQUETA", mono: true, upper: true },
];

RB.motion = [
  ["--dur-1", "120ms", "Micro — hover, focus"],
  ["--dur-2", "200ms", "Default — fades, color"],
  ["--dur-3", "320ms", "Transforms, entradas"],
  ["--dur-4", "500ms", "Modales, page change"],
  ["--ease-out", "cubic-bezier(.2,.7,.2,1)", "Default easing"],
  ["--ease-spring", "cubic-bezier(.18,.89,.32,1.28)", "Entradas juguetonas"],
];

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

  { r: "hero",         t: "Hero sections",    g: "Patterns",    n: "03.00" },
  { r: "pricing",      t: "Pricing",          g: "Patterns",    n: "03.01" },
  { r: "forms",        t: "Auth & forms",     g: "Patterns",    n: "03.02" },

  { r: "screen-login", t: "Login",            g: "Screens",     n: "04.00" },
  { r: "screen-dashboard", t: "Dashboard",    g: "Screens",     n: "04.01" },
  { r: "screen-pricing", t: "Pricing page",   g: "Screens",     n: "04.02" },
];

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
