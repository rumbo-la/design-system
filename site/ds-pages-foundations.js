/* ============================================================
   Rumbo DS — Foundations pages
   Home, Tokens, Changelog, Color, Typography, Spacing, Radius,
   Shadow, Motion, Iconography, Logo
   ============================================================ */

window.RB = window.RB || {};
RB.pages = RB.pages || {};

/* ---------- Tokens export content ---------- */
RB.exports = {
  css: () => `Copy
<span class="tk-c">/* Rumbo Design System · v1 — CSS custom properties */</span>
<span class="tk-k">:root</span>, [data-theme=<span class="tk-s">"dark"</span>] {
  <span class="tk-c">/* Brand */</span>
  --rb-blue: <span class="tk-s">#382EDC</span>;
  --rb-blue-700: <span class="tk-s">#2A22A8</span>;
  --rb-blue-300: <span class="tk-s">#8078F0</span>;
  --rb-cyan: <span class="tk-s">#47EBEB</span>;
  --rb-cyan-600: <span class="tk-s">#19B8B8</span>;
  --rb-purple: <span class="tk-s">#8452FD</span>;
  --rb-orange: <span class="tk-s">#FF5A36</span>;
  --rb-ink: <span class="tk-s">#0A0A0B</span>;
  --rb-paper: <span class="tk-s">#F4F2ED</span>;

  <span class="tk-c">/* Semantic — dark */</span>
  --bg: <span class="tk-s">#0A0A0B</span>;
  --bg-elev: <span class="tk-s">#121214</span>;
  --surface: <span class="tk-s">#1B1B1F</span>;
  --border: <span class="tk-s">rgba(255,255,255,.08)</span>;
  --text: <span class="tk-s">#FAFAFA</span>;
  --text-muted: <span class="tk-s">rgba(255,255,255,.64)</span>;
  --accent: <span class="tk-k">var</span>(--rb-blue);

  <span class="tk-c">/* Status */</span>
  --success: <span class="tk-s">#3CCB7F</span>;
  --warning: <span class="tk-s">#FFB020</span>;
  --danger:  <span class="tk-s">#FF5A36</span>;

  <span class="tk-c">/* Radii */</span>
  --radius-1: <span class="tk-s">4px</span>;  --radius-2: <span class="tk-s">8px</span>;  --radius-3: <span class="tk-s">12px</span>;
  --radius-4: <span class="tk-s">16px</span>; --radius-full: <span class="tk-s">9999px</span>;

  <span class="tk-c">/* Spacing — 4px base */</span>
  --sp-1: <span class="tk-s">4px</span>;  --sp-2: <span class="tk-s">8px</span>;  --sp-3: <span class="tk-s">12px</span>;
  --sp-4: <span class="tk-s">16px</span>; --sp-6: <span class="tk-s">24px</span>; --sp-8: <span class="tk-s">32px</span>;

  <span class="tk-c">/* Type */</span>
  --fs-sm: <span class="tk-s">12px</span>; --fs-base: <span class="tk-s">14px</span>; --fs-md: <span class="tk-s">16px</span>;
  --fs-lg: <span class="tk-s">18px</span>; --fs-xl: <span class="tk-s">22px</span>; --fs-2xl: <span class="tk-s">28px</span>;

  <span class="tk-c">/* Motion */</span>
  --dur-1: <span class="tk-s">120ms</span>; --dur-2: <span class="tk-s">200ms</span>; --dur-3: <span class="tk-s">320ms</span>;
  --ease-out: <span class="tk-s">cubic-bezier(.2,.7,.2,1)</span>;
}

[<span class="tk-a">data-theme</span>=<span class="tk-s">"light"</span>] {
  --bg: <span class="tk-s">#F4F2ED</span>;
  --surface: <span class="tk-s">#FFFFFF</span>;
  --text: <span class="tk-s">#0A0A0B</span>;
  --text-muted: <span class="tk-s">rgba(10,10,11,.64)</span>;
  --border: <span class="tk-s">rgba(10,10,11,.08)</span>;
}`,

  tailwind: () => `Copy
<span class="tk-c">// tailwind.config.js — Rumbo preset</span>
<span class="tk-k">module</span>.<span class="tk-a">exports</span> = {
  <span class="tk-a">theme</span>: {
    <span class="tk-a">extend</span>: {
      <span class="tk-a">colors</span>: {
        <span class="tk-a">rumbo</span>: {
          <span class="tk-a">blue</span>:   <span class="tk-s">'#382EDC'</span>,
          <span class="tk-a">cyan</span>:   <span class="tk-s">'#47EBEB'</span>,
          <span class="tk-a">purple</span>: <span class="tk-s">'#8452FD'</span>,
          <span class="tk-a">orange</span>: <span class="tk-s">'#FF5A36'</span>,
          <span class="tk-a">ink</span>:    <span class="tk-s">'#0A0A0B'</span>,
          <span class="tk-a">paper</span>:  <span class="tk-s">'#F4F2ED'</span>,
        },
        <span class="tk-a">bg</span>:      <span class="tk-s">'var(--bg)'</span>,
        <span class="tk-a">surface</span>: <span class="tk-s">'var(--surface)'</span>,
        <span class="tk-a">border</span>:  <span class="tk-s">'var(--border)'</span>,
      },
      <span class="tk-a">borderRadius</span>: {
        <span class="tk-a">xs</span>: <span class="tk-s">'4px'</span>, <span class="tk-a">DEFAULT</span>: <span class="tk-s">'8px'</span>, <span class="tk-a">lg</span>: <span class="tk-s">'12px'</span>, <span class="tk-a">xl</span>: <span class="tk-s">'16px'</span>,
      },
      <span class="tk-a">fontFamily</span>: {
        <span class="tk-a">sans</span>: [<span class="tk-s">'"Space Grotesk"'</span>, <span class="tk-s">'system-ui'</span>],
        <span class="tk-a">display</span>: [<span class="tk-s">'"Dx Grafik"'</span>, <span class="tk-s">'serif'</span>],
      },
      <span class="tk-a">transitionTimingFunction</span>: {
        <span class="tk-a">out</span>: <span class="tk-s">'cubic-bezier(.2,.7,.2,1)'</span>,
        <span class="tk-a">spring</span>: <span class="tk-s">'cubic-bezier(.18,.89,.32,1.28)'</span>,
      },
    },
  },
};`,

  json: () => `Copy
{
  <span class="tk-a">"$schema"</span>: <span class="tk-s">"https://design-tokens.org/1.0.json"</span>,
  <span class="tk-a">"rumbo"</span>: {
    <span class="tk-a">"color"</span>: {
      <span class="tk-a">"brand"</span>: {
        <span class="tk-a">"blue"</span>:   { <span class="tk-a">"$value"</span>: <span class="tk-s">"#382EDC"</span>, <span class="tk-a">"$type"</span>: <span class="tk-s">"color"</span> },
        <span class="tk-a">"cyan"</span>:   { <span class="tk-a">"$value"</span>: <span class="tk-s">"#47EBEB"</span>, <span class="tk-a">"$type"</span>: <span class="tk-s">"color"</span> },
        <span class="tk-a">"purple"</span>: { <span class="tk-a">"$value"</span>: <span class="tk-s">"#8452FD"</span>, <span class="tk-a">"$type"</span>: <span class="tk-s">"color"</span> },
        <span class="tk-a">"orange"</span>: { <span class="tk-a">"$value"</span>: <span class="tk-s">"#FF5A36"</span>, <span class="tk-a">"$type"</span>: <span class="tk-s">"color"</span> },
        <span class="tk-a">"ink"</span>:    { <span class="tk-a">"$value"</span>: <span class="tk-s">"#0A0A0B"</span>, <span class="tk-a">"$type"</span>: <span class="tk-s">"color"</span> },
        <span class="tk-a">"paper"</span>:  { <span class="tk-a">"$value"</span>: <span class="tk-s">"#F4F2ED"</span>, <span class="tk-a">"$type"</span>: <span class="tk-s">"color"</span> }
      }
    },
    <span class="tk-a">"radius"</span>: {
      <span class="tk-a">"sm"</span>:  { <span class="tk-a">"$value"</span>: <span class="tk-s">"4px"</span>,  <span class="tk-a">"$type"</span>: <span class="tk-s">"dimension"</span> },
      <span class="tk-a">"md"</span>:  { <span class="tk-a">"$value"</span>: <span class="tk-s">"8px"</span>,  <span class="tk-a">"$type"</span>: <span class="tk-s">"dimension"</span> },
      <span class="tk-a">"lg"</span>:  { <span class="tk-a">"$value"</span>: <span class="tk-s">"12px"</span>, <span class="tk-a">"$type"</span>: <span class="tk-s">"dimension"</span> }
    },
    <span class="tk-a">"type"</span>: {
      <span class="tk-a">"fontFamily"</span>: {
        <span class="tk-a">"sans"</span>:    { <span class="tk-a">"$value"</span>: <span class="tk-s">"Space Grotesk, system-ui"</span> },
        <span class="tk-a">"display"</span>: { <span class="tk-a">"$value"</span>: <span class="tk-s">"Dx Grafik"</span> }
      }
    }
  }
}`,
};

/* ============ HOME ============ */
RB.pages.home = () => `
  <section class="page is-visible">
    <div class="hero">
      <div class="wrap">
        <svg class="sprite" aria-hidden="true"><use href="#rb-sym"/></svg>
        <div class="tag"><span class="dot"></span> Rumbo DS · v1.0 · actualizado abril 2026</div>
        <h1 class="display">el <em>sistema</em> que<br/>no pierde el rumbo.</h1>
        <p class="lead">Tokens, componentes, patrones y pantallas construidos sobre el manual de marca de Rumbo. Un solo lenguaje visual para marketing y producto, en light &amp; dark, listo para usar en cualquier stack.</p>
        <div style="display:flex;gap:12px;margin-top:16px">
          <a class="btn" href="#/color">Empezar por color ${RB.ic("arrowUR", 14)}</a>
          <a class="btn secondary" href="#/tokens">Exportar tokens</a>
          <button class="btn ghost" onclick="openCmdk()">Buscar <span style="margin-left:8px;font-family:ui-monospace,monospace;font-size:11px;opacity:.6">⌘K</span></button>
        </div>
      </div>

      <div class="stat-grid">
        <div class="stat"><div class="n">${RB.stats.tokens}</div><div class="l">Tokens</div></div>
        <div class="stat"><div class="n">${RB.stats.components}</div><div class="l">Componentes</div></div>
        <div class="stat"><div class="n" id="stat-icons">—</div><div class="l">Íconos</div></div>
        <div class="stat"><div class="n">2</div><div class="l">Temas</div></div>
      </div>
    </div>

    <hr class="rule"/>

    <div class="eyebrow"><b>00</b> · Foundations</div>
    <div class="card-grid" style="margin-bottom:48px">
      ${[
        ["color","Color","Primitivos, tokens semánticos y pares de contraste"],
        ["typography","Typography","Dx Grafik para display, Space Grotesk para UI"],
        ["spacing","Spacing","Escala 4px, aplicada en cada superficie"],
        ["radius","Radius","De técnico (0px) a orgánico (full)"],
        ["shadow","Elevation","Sombras y capas para separar contenido"],
        ["motion","Motion","Duraciones y easings consistentes"],
        ["iconography","Iconography","Set outline ilustrativo, generado desde la hoja"],
        ["logo","Logo","Símbolo, wordmark y usos permitidos"],
      ].map(([r,t,d]) => `
        <a class="dsCard" href="#/${r}">
          <div class="arrow">${RB.ic("arrowUR", 16)}</div>
          ${iconFor(r)}
          <h4>${t}</h4>
          <p>${d}</p>
        </a>`).join("")}
    </div>

    <div class="eyebrow"><b>02</b> · Components</div>
    <div class="card-grid" style="margin-bottom:48px">
      ${[
        ["button","Button","5 variantes · 4 tamaños · 6 estados"],
        ["input","Input &amp; Textarea","Campos, validación y grupos"],
        ["card","Card","Base, media, con pin azul"],
        ["modal","Modal","Dialog accesible con foco atrapado"],
        ["table","Table","Densidad producto, hover y acciones"],
        ["alert","Alert &amp; Toast","Info, éxito, warning, error"],
      ].map(([r,t,d]) => `
        <a class="dsCard" href="#/${r}">
          <div class="arrow">${RB.ic("arrowUR", 16)}</div>
          ${iconFor(r)}
          <h4>${t}</h4>
          <p>${d}</p>
        </a>`).join("")}
    </div>

    <div class="eyebrow"><b>04</b> · Screens</div>
    <div class="card-grid">
      ${[
        ["screen-login","Login","Form + split visual"],
        ["screen-dashboard","Dashboard","Layout de app con sidebar"],
        ["screen-pricing","Pricing page","3 planes + FAQ"],
      ].map(([r,t,d]) => `
        <a class="dsCard" href="#/${r}">
          <div class="arrow">${RB.ic("arrowUR", 16)}</div>
          ${iconFor(r)}
          <h4>${t}</h4>
          <p>${d}</p>
        </a>`).join("")}
    </div>
  </section>
`;

function iconFor(r) {
  const map = {
    color:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16" stroke-dasharray="2 2"/></svg>',
    typography:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 20V6h12M9 6v14M15 13h4"/></svg>',
    spacing:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 5h18M3 19h18"/><path d="M8 9v6M16 9v6"/></svg>',
    radius:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 20V10a6 6 0 0 1 6-6h10"/></svg>',
    shadow:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M8 8h10v10" opacity=".35"/></svg>',
    motion:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18c4-10 14-10 18 0"/><circle cx="5" cy="17" r="1.5" fill="currentColor"/></svg>',
    iconography:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><circle cx="16.5" cy="16.5" r="3.5"/></svg>',
    logo:'<svg class="ic" viewBox="0 0 24 24"><use href="#rb-sym" x="0" y="0" width="24" height="24"/></svg>',
    button:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="8" width="18" height="8" rx="4"/></svg>',
    input:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M8 12h6"/></svg>',
    card:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>',
    modal:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="7" width="14" height="11" rx="1"/><path d="M5 10h14"/></svg>',
    table:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14"/><path d="M3 10h18M3 15h18M10 5v14"/></svg>',
    alert:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3 2 20h20Z"/><path d="M12 10v5M12 18v.5"/></svg>',
    "screen-login":'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M13 5v14"/><circle cx="8" cy="11" r="2"/><path d="M6 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/></svg>',
    "screen-dashboard":'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14"/><path d="M3 9h18M8 9v10"/></svg>',
    "screen-pricing":'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="5" height="14"/><rect x="9.5" y="5" width="5" height="14"/><rect x="16" y="5" width="5" height="14"/></svg>',
  };
  return map[r] || '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="6"/></svg>';
}

/* ============ TOKENS ============ */
RB.pages.tokens = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Todos los tokens del sistema, exportables a CSS custom properties, preset de Tailwind o formato JSON (design-tokens.org). Click en cualquier swatch para copiar el valor.")}

    <div class="export">
      <div class="export-tabs">
        <button data-export-tab="css" aria-selected="true">CSS variables</button>
        <button data-export-tab="tailwind" aria-selected="false">Tailwind preset</button>
        <button data-export-tab="json" aria-selected="false">Design tokens (JSON)</button>
      </div>
      <div class="export-panel"><button class="copy-top" onclick="RB.copy(this.parentElement.textContent.replace(/^Copy/,'').trim(),'CSS copiado')">Copy</button><pre style="margin:0;white-space:pre-wrap">${RB.exports.css()}</pre></div>
    </div>

    <h3 class="sub" style="margin-top:48px">Brand primitives</h3>
    <p>Los 9 colores primitivos de Rumbo. No uses estos directamente en componentes — usa los semánticos.</p>
    ${renderSwatches(RB.colors.brand)}

    <h3 class="sub" style="margin-top:48px">Semantic — superficies y texto</h3>
    <p>Tokens que <em>cambian</em> entre light y dark. Son los que debes referenciar en componentes.</p>
    ${renderSwatches(RB.colors.semantic, true)}

    <h3 class="sub" style="margin-top:48px">Estado</h3>
    ${renderSwatches(RB.colors.status)}
  </section>
`;

function renderSwatches(list, withRole = false) {
  return `
    <div class="swatch-grid">
      ${list.map(c => `
        <div class="sw" data-copy="var(${c.t})">
          <div class="chip" style="background:${c.v}">
            <div class="check">✓ copiado</div>
          </div>
          <div class="meta">
            <div class="n">${c.n}</div>
            <div class="t">${c.t}</div>
            <div class="v">${c.v}</div>
            ${withRole && c.role ? `<div class="v" style="margin-top:4px;color:var(--text-muted)">${c.role}</div>` : ""}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

/* ============ COLOR ============ */
RB.pages.color = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Rumbo nace con una paleta compacta: azul eléctrico como voz principal, cyan como acento, tierra cálida (paper) como alivio. El dark mode es primario — todo el sistema está calibrado para vivir sobre ink.")}

    <h3 class="sub">Brand</h3>
    ${renderSwatches(RB.colors.brand)}

    <h3 class="sub" style="margin-top:48px">Semantic</h3>
    ${renderSwatches(RB.colors.semantic, true)}

    <h3 class="sub" style="margin-top:48px">Status</h3>
    ${renderSwatches(RB.colors.status)}

    <h3 class="sub" style="margin-top:48px">Contraste &amp; accesibilidad</h3>
    <p>Pares verificados contra WCAG AA (4.5:1 para texto normal, 3:1 para texto grande).</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-top:16px">
      ${[
        ["#FAFAFA","#0A0A0B","Text on bg","19.5:1","AAA"],
        ["#FAFAFA","#382EDC","Text on blue","8.1:1","AAA"],
        ["#0A0A0B","#47EBEB","Ink on cyan","13.4:1","AAA"],
        ["rgba(255,255,255,.64)","#0A0A0B","Muted on bg","9.2:1","AAA"],
        ["#FFFFFF","#FF5A36","White on orange","3.8:1","AA large"],
        ["#0A0A0B","#F4F2ED","Ink on paper","19.1:1","AAA"],
      ].map(([fg,bg,lab,ratio,grade]) => `
        <div style="background:${bg};color:${fg};padding:20px;border-radius:var(--radius-3);border:1px solid var(--border)">
          <div style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:24px">Aa</div>
          <div style="font-size:12px;margin-top:8px;opacity:.8">${lab}</div>
          <div style="font-family:ui-monospace,monospace;font-size:11px;margin-top:4px;opacity:.7">${ratio} · ${grade}</div>
        </div>
      `).join("")}
    </div>
  </section>
`;

/* ============ TYPOGRAPHY ============ */
RB.pages.typography = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Dos voces tipográficas. Dx Grafik — italic, pesada — para el gesto editorial y los displays. Space Grotesk — neutral, técnica — para todo el resto: UI, body, forms, data.")}

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:48px">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3);padding:32px;display:flex;flex-direction:column;gap:16px">
        <div class="eyebrow" style="margin:0"><b>Display</b> · Dx Grafik</div>
        <div style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:88px;letter-spacing:-.03em;line-height:.9">Rumbo<span style="color:var(--accent)">.</span></div>
        <div style="font-family:ui-monospace,monospace;font-size:11px;color:var(--text-muted);letter-spacing:.1em">Black Italic · display only · never < 28px</div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3);padding:32px;display:flex;flex-direction:column;gap:16px">
        <div class="eyebrow" style="margin:0"><b>UI</b> · Space Grotesk</div>
        <div style="font-family:'Space Grotesk';font-weight:400;font-size:18px;line-height:1.5;color:var(--text)">
          <span style="font-weight:300">Light</span> ·
          <span style="font-weight:400">Regular</span> ·
          <span style="font-weight:500">Medium</span> ·
          <span style="font-weight:600">SemiBold</span> ·
          <span style="font-weight:700">Bold</span>
        </div>
        <div style="font-family:'Space Grotesk';font-size:14px;color:var(--text-muted)">The quick brown fox jumps over the lazy dog — 1234567890</div>
        <div style="font-family:ui-monospace,monospace;font-size:11px;color:var(--text-muted);letter-spacing:.1em">5 weights · body, ui, all labels</div>
      </div>
    </div>

    <h3 class="sub" style="margin-top:32px">Escala</h3>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3);padding:0 24px">
      ${RB.type.map(t => `
        <div class="type-row">
          <div class="tm">
            ${t.nm} · ${t.sz}/${t.lh}<br/>
            <span style="color:var(--text-dim);font-size:10px">${t.ff} ${t.fw}</span>
          </div>
          <div class="ts" style="font-family:${t.mono ? 'ui-monospace,monospace' : (t.ff.includes('Grotesk') ? `'Space Grotesk'` : (t.ff.includes('Grafik') ? `'Dx Grafik'` : t.ff))};font-weight:${t.fw.split(' ')[0]};font-style:${t.fw.includes('italic')?'italic':'normal'};font-size:${Math.min(t.sz,64)}px;line-height:${t.lh};letter-spacing:${t.tk};${t.upper?'text-transform:uppercase':''}">${t.sample}</div>
        </div>
      `).join("")}
    </div>
  </section>
`;

/* ============ SPACING ============ */
RB.pages.spacing = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Escala basada en 4px. Cada paso duplica visualmente para mantener ritmo sin decidir por tamaño arbitrario. Úsalos para padding, margin, gap.")}
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3);padding:8px 24px">
      ${RB.spacing.map(([t,v]) => `
        <div class="scale-row" data-copy="var(${t})">
          <div class="nm">${t}</div>
          <div class="vis" style="width:${v}px"></div>
          <div class="vl">${v}px</div>
        </div>
      `).join("")}
    </div>
    <p style="margin-top:24px;color:var(--text-muted);font-size:13px">Click en cualquier fila para copiar el token.</p>
  </section>
`;

/* ============ RADIUS ============ */
RB.pages.radius = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Los radios comunican tono. 0px se siente industrial, 12px conversacional, full humano. Rumbo vive entre 4 y 12 para la mayoría de componentes.")}
    <div class="radius-row">
      ${RB.radii.map(([t,v,use]) => `
        <div class="rc" style="border-radius:${v===9999?'16px':'0'}" data-copy="var(${t})">
          <div class="box" style="border-radius:${v===9999?'50%':v+'px'}"></div>
          <div class="nm">${t}</div>
          <div class="nm" style="color:var(--text-dim)">${v===9999?'full':v+'px'}</div>
        </div>
      `).join("")}
    </div>
    <div style="margin-top:32px;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px">
      ${RB.radii.map(([t,v,use]) => `
        <div style="padding:14px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3)">
          <div style="font-family:ui-monospace,monospace;font-size:11px;color:var(--text);margin-bottom:4px">${t}</div>
          <div style="font-size:12px;color:var(--text-muted)">${use}</div>
        </div>
      `).join("")}
    </div>
  </section>
`;

/* ============ SHADOW ============ */
RB.pages.shadow = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Cuatro niveles de elevación. En dark mode las sombras son más sutiles — la separación visual viene del borde y el contraste de fondo.")}
    <div class="shadow-row">
      ${RB.shadows.map(([t,v,use]) => `
        <div class="sc" style="box-shadow:${v}" data-copy="var(${t})">
          <div>
            <div style="color:var(--text);font-family:'Space Grotesk';font-weight:500;font-size:13px;margin-bottom:6px">${t}</div>
            <div>${use}</div>
          </div>
        </div>
      `).join("")}
    </div>
    <p style="margin-top:24px;color:var(--text-muted);font-size:13px">Click para copiar.</p>
  </section>
`;

/* ============ MOTION ============ */
RB.pages.motion = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Movimiento con intención. Duraciones cortas (120–200ms) para feedback inmediato; 320ms para transformaciones visibles; 500ms solo para cambios de página o modales.")}

    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3);padding:24px">
      ${RB.motion.map(([t,v,use]) => `
        <div style="display:grid;grid-template-columns:140px 1fr 200px;gap:16px;align-items:center;padding:14px 0;border-bottom:1px solid var(--border)" data-copy="var(${t})">
          <div style="font-family:ui-monospace,monospace;font-size:12px">${t}</div>
          <div style="font-family:ui-monospace,monospace;font-size:11px;color:var(--text-muted)">${v}</div>
          <div style="font-size:12px;color:var(--text-dim);text-align:right">${use}</div>
        </div>
      `).join("")}
    </div>

    <h3 class="sub" style="margin-top:48px">Demos</h3>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
      ${[["120ms","fast"],["200ms","normal"],["320ms","slow"]].map(([d,lab]) => `
        <div style="padding:24px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3);overflow:hidden" onmouseenter="this.querySelector('.dot').style.transform='translateX(200px)'" onmouseleave="this.querySelector('.dot').style.transform='translateX(0)'">
          <div style="font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.15em;color:var(--text-dim);text-transform:uppercase;margin-bottom:12px">${d} · ${lab}</div>
          <div class="dot" style="width:24px;height:24px;border-radius:50%;background:var(--accent);transition:transform ${d} cubic-bezier(.2,.7,.2,1)"></div>
          <div style="margin-top:16px;font-size:11px;color:var(--text-muted)">Hover →</div>
        </div>
      `).join("")}
    </div>
  </section>
`;

/* ============ ICONOGRAPHY ============ */
RB.pages.iconography = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Dos sets con propósitos distintos: los <strong>ilustrativos</strong> nombran servicios y valores de marca; los de <strong>UI</strong> son funcionales y los usan los componentes. Ambos se generan con <code>npm run build:icons</code>, viven en una caja de 24×24 y heredan <code>currentColor</code>.")}

    <h3 class="sub">UI · funcionales</h3>
    <p>Los que usan botones, alertas, tablas y menús. Fuente: <code>assets/icons-ui/*.svg</code> → <code>dist/icons-ui.svg</code>.</p>
    <div id="icon-gallery-ui" class="swatch-grid" style="grid-template-columns:repeat(auto-fill,minmax(120px,1fr))"></div>

    <h3 class="sub" style="margin-top:48px">Ilustrativos · marca</h3>
    <p>Los de servicios y pilares del manual. Fuente: <code>assets/icons/icons-sheet.svg</code> → <code>dist/icons/</code>.</p>

    <div id="icon-gallery-live" class="swatch-grid" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">
      <p class="lead">Cargando íconos…</p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;margin-top:32px">
      <div style="padding:16px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3)">
        <div style="font-weight:600;font-size:14px;margin-bottom:4px">Estilo</div>
        <div style="font-size:12px;color:var(--text-muted)">Outline · caja normalizada de 24×24</div>
      </div>
      <div style="padding:16px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3)">
        <div style="font-weight:600;font-size:14px;margin-bottom:4px">Uso</div>
        <div style="font-size:12px;color:var(--text-muted)"><code>#rb-ui-NOMBRE</code> para UI · <code>#rb-icon-NOMBRE</code> para marca</div>
      </div>
      <div style="padding:16px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3)">
        <div style="font-weight:600;font-size:14px;margin-bottom:4px">Color</div>
        <div style="font-size:12px;color:var(--text-muted)">currentColor — hereda del contexto</div>
      </div>
    </div>
  </section>
`;

/* Carga diferida del sprite + índice generados (RF-06 · RF-13) */
RB.mountIconGallery = async () => {
  const host = document.getElementById("icon-gallery-live");
  if (!host) return;
  try {
    if (!document.getElementById("rb-icon-sprite")) {
      const sprite = await fetch("dist/icons/sprite.svg").then(r => r.text());
      const holder = document.createElement("div");
      holder.id = "rb-icon-sprite";
      holder.style.display = "none";
      holder.innerHTML = sprite;
      document.body.appendChild(holder);
    }
    // Set de UI (el sprite ya lo inyectó ds-app.js al arrancar)
    const uiHost = document.getElementById("icon-gallery-ui");
    if (uiHost) {
      const ui = await fetch("dist/icons-ui.json").then(r => r.json());
      uiHost.innerHTML = ui.map(i => `
        <div class="sw" data-copy="${i.name}" title="Click para copiar el nombre">
          <div style="display:grid;place-items:center;padding:20px 0;background:var(--bg-subtle)">
            <svg viewBox="0 0 24 24" style="width:26px;height:26px;color:var(--highlight)"><use href="#rb-ui-${i.name}"/></svg>
          </div>
          <div class="meta"><div class="t">${i.name}</div></div>
        </div>
      `).join("");
    }

    const icons = await fetch("dist/icons/index.json").then(r => r.json());
    host.innerHTML = icons.map(i => `
      <div class="sw" data-copy="${i.name}" title="Click para copiar el nombre">
        <div style="display:grid;place-items:center;padding:24px 0;background:var(--bg-subtle)">
          <svg viewBox="0 0 24 24" style="width:34px;height:34px;color:var(--accent)"><use href="#rb-icon-${i.name}"/></svg>
        </div>
        <div class="meta">
          <div class="n" style="font-size:12px">${i.label}</div>
          <div class="t">${i.name}</div>
        </div>
      </div>
    `).join("");
  } catch (e) {
    host.innerHTML = `<p class="lead">Sirve el proyecto por HTTP (<code>npm run dev</code>) para ver los íconos generados.</p>`;
  }
};

/* ============ LOGO ============ */
RB.pages.logo = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "El símbolo de Rumbo es una flecha que nace en el origen (cuadrado) y se expande (semicírculo) hacia el horizonte. El wordmark usa Dx Grafik Black Italic para el gesto editorial.")}

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">
      <div style="background:var(--rb-ink);border:1px solid var(--border);border-radius:var(--radius-3);padding:64px;display:grid;place-items:center;aspect-ratio:16/10">
        <svg width="160" height="160" viewBox="0 0 800 800" style="color:#fff"><use href="#rb-sym"/></svg>
      </div>
      <div style="background:var(--rb-paper);color:var(--rb-ink);border-radius:var(--radius-3);padding:64px;display:grid;place-items:center;aspect-ratio:16/10">
        <svg width="160" height="160" viewBox="0 0 800 800" style="color:#0A0A0B"><use href="#rb-sym"/></svg>
      </div>
      <div style="background:var(--rb-blue);border-radius:var(--radius-3);padding:64px;display:grid;place-items:center;aspect-ratio:16/10">
        <svg width="160" height="160" viewBox="0 0 800 800" style="color:#fff"><use href="#rb-sym"/></svg>
      </div>
      <div style="background:var(--rb-cyan);color:var(--rb-ink);border-radius:var(--radius-3);padding:64px;display:grid;place-items:center;aspect-ratio:16/10">
        <svg width="160" height="160" viewBox="0 0 800 800" style="color:#0A0A0B"><use href="#rb-sym"/></svg>
      </div>
    </div>

    <h3 class="sub" style="margin-top:48px">Área de reserva</h3>
    <p>El espacio libre alrededor del símbolo equivale a la altura del contador superior (C). No lo rompas.</p>
    <div style="background:var(--rb-ink);border-radius:var(--radius-3);padding:64px;display:grid;place-items:center;margin-top:16px">
      <div style="position:relative;padding:48px">
        <div style="position:absolute;inset:0;border:1px dashed rgba(255,255,255,.3);border-radius:4px"></div>
        <svg width="120" height="120" viewBox="0 0 800 800" style="color:#fff;display:block"><use href="#rb-sym"/></svg>
        <div style="position:absolute;top:-32px;left:0;right:0;text-align:center;font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.15em;color:rgba(255,255,255,.4)">↑ C ↑</div>
      </div>
    </div>

    <p style="margin-top:16px;color:var(--text-muted);font-size:13px">Para construcción detallada y usos prohibidos, consulta el <a href="brand-manual.html" style="color:var(--accent)">manual de marca</a>.</p>
  </section>
`;

/* ============ CHANGELOG ============ */
RB.pages.changelog = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Historial de versiones. Sigue semver: MAJOR para breaking changes visuales, MINOR para componentes nuevos, PATCH para fixes.")}
    <div style="max-width:720px">
      ${[
        ["v1.0.0", "abril 2026", "stable", [
          "Primer release público del Design System de Rumbo",
          "Foundations completos: color, type, spacing, radius, shadow, motion",
          "20 componentes con playground y código",
          "Patterns: hero, pricing, auth forms",
          "3 pantallas de ejemplo: login, dashboard, pricing"
        ]],
        ["v0.9.0", "marzo 2026", "rc", [
          "Migración a CSS custom properties para theming",
          "Nuevo sistema de motion tokens",
          "Agregados íconos 21–28"
        ]],
        ["v0.5.0", "febrero 2026", "beta", [
          "Primera paleta y escala tipográfica",
          "Componentes core: button, input, card"
        ]],
      ].map(([v, date, tag, items]) => `
        <div style="padding:24px 0;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
            <span style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:24px;letter-spacing:-.02em">${v}</span>
            <span style="font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dim)">${date}</span>
            <span class="badge ${tag==='stable'?'success':tag==='rc'?'accent':'warn'}">${tag}</span>
          </div>
          <ul style="margin:0;padding-left:20px;color:var(--text-muted);font-size:13px;line-height:1.8">
            ${items.map(i => `<li>${i}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    </div>
  </section>
`;
