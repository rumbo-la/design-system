/* ============================================================
   Rumbo DS — Components pages
   Button, Input, Select, Toggles, Card, Badge, Tabs,
   Alert, Modal, Table, Nav, Avatar, Pagination, Progress,
   Tooltip, Empty state
   ============================================================ */

window.RB = window.RB || {};
RB.pages = RB.pages || {};

/* ============ BUTTON ============ */
RB.pages.button = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Acción primaria del sistema. 5 variantes (primary, secondary, ghost, outline, danger), 4 tamaños (sm → xl) y estados completos: hover, focus, active, disabled, loading.")}

    <h3 class="sub">Variantes</h3>
    ${RB.demo({
      stage: `
        <button class="btn">Primario</button>
        <button class="btn secondary">Secundario</button>
        <button class="btn ghost">Ghost</button>
        <button class="btn outline">Outline</button>
        <button class="btn cyan">Cyan</button>
        <button class="btn danger">Danger</button>
      `,
      code: `<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn"</span><span class="tk-k">&gt;</span>Primario<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn secondary"</span><span class="tk-k">&gt;</span>Secundario<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn ghost"</span><span class="tk-k">&gt;</span>Ghost<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn outline"</span><span class="tk-k">&gt;</span>Outline<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn cyan"</span><span class="tk-k">&gt;</span>Cyan<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn danger"</span><span class="tk-k">&gt;</span>Danger<span class="tk-k">&lt;/button&gt;</span>`,
    })}

    <h3 class="sub">Tamaños</h3>
    ${RB.demo({
      stage: `
        <button class="btn sm">Small</button>
        <button class="btn">Default</button>
        <button class="btn lg">Large</button>
        <button class="btn xl">Extra large</button>
      `,
      code: `<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn sm"</span><span class="tk-k">&gt;</span>Small<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn"</span><span class="tk-k">&gt;</span>Default<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn lg"</span><span class="tk-k">&gt;</span>Large<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn xl"</span><span class="tk-k">&gt;</span>Extra large<span class="tk-k">&lt;/button&gt;</span>`,
    })}

    <h3 class="sub">Con ícono</h3>
    ${RB.demo({
      stage: `
        <button class="btn">${RB.ic("plus", 14)} Nueva sesión</button>
        <button class="btn secondary">Descargar ${RB.ic("arrowUR", 14)}</button>
        <button class="btn ghost icon" aria-label="Settings">${RB.ic("gear", 16)}</button>
        <button class="btn outline">${RB.ic("search", 14)} Buscar</button>
      `,
      code: `<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;svg</span> <span class="tk-a">width</span>=<span class="tk-s">"14"</span> <span class="tk-a">height</span>=<span class="tk-s">"14"</span><span class="tk-k">&gt;</span>...<span class="tk-k">&lt;/svg&gt;</span>
  Nueva sesión
<span class="tk-k">&lt;/button&gt;</span>`,
    })}

    <h3 class="sub">Estados</h3>
    ${RB.demo({
      stage: `
        <button class="btn">Normal</button>
        <button class="btn" style="transform:translateY(-1px);box-shadow:0 0 0 3px color-mix(in oklab,var(--accent) 40%,transparent)">Focus</button>
        <button class="btn" disabled>Disabled</button>
        <button class="btn"><span class="spin"></span> Cargando…</button>
      `,
      code: `<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn"</span> <span class="tk-a">disabled</span><span class="tk-k">&gt;</span>Disabled<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"spin"</span><span class="tk-k">&gt;&lt;/span&gt;</span>
  Cargando…
<span class="tk-k">&lt;/button&gt;</span>`,
    })}
  </section>
`;

/* ============ INPUT ============ */
RB.pages.input = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Campos de formulario. Consistentes con buttons en radio y padding. Estados de focus claros, validación inline, soporte para hint y error.")}

    <h3 class="sub">Variantes</h3>
    ${RB.demo({
      stage: `
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;width:100%;max-width:680px">
          <div class="field">
            <label>Nombre</label>
            <input class="input" placeholder="Ana Rumbo" />
          </div>
          <div class="field">
            <label>Email</label>
            <input class="input" type="email" value="ana@rumbo.la" />
          </div>
          <div class="field">
            <label>Con hint</label>
            <input class="input" placeholder="Slug del proyecto" />
            <span class="hint">Solo a-z, guiones permitidos</span>
          </div>
          <div class="field invalid">
            <label>Con error</label>
            <input class="input" value="correo-invalido" />
            <span class="err">Formato de email inválido</span>
          </div>
          <div class="field">
            <label>Disabled</label>
            <input class="input" value="No editable" disabled />
          </div>
          <div class="field">
            <label>Textarea</label>
            <textarea class="input" rows="3" placeholder="Cuéntanos del proyecto…"></textarea>
          </div>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"field"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;label&gt;</span>Email<span class="tk-k">&lt;/label&gt;</span>
  <span class="tk-k">&lt;input</span> <span class="tk-a">class</span>=<span class="tk-s">"input"</span> <span class="tk-a">type</span>=<span class="tk-s">"email"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"hint"</span><span class="tk-k">&gt;</span>Usaremos esto para notificaciones.<span class="tk-k">&lt;/span&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>

<span class="tk-c">/* Estado invalid: añade .invalid al contenedor */</span>
<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"field invalid"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"err"</span><span class="tk-k">&gt;</span>Formato inválido<span class="tk-k">&lt;/span&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}

    <h3 class="sub">Grupos (prefix / suffix)</h3>
    ${RB.demo({
      stage: `
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;width:100%;max-width:680px">
          <div class="field">
            <label>URL</label>
            <div class="input-group">
              <span class="addon">rumbo.la/</span>
              <input class="input" placeholder="mi-proyecto" />
            </div>
          </div>
          <div class="field">
            <label>Presupuesto</label>
            <div class="input-group">
              <span class="addon">$</span>
              <input class="input" value="12000" />
              <span class="addon">USD</span>
            </div>
          </div>
          <div class="field">
            <label>Password</label>
            <div class="input-group">
              <input class="input" type="password" value="supersecret" />
              <span class="addon" style="cursor:pointer">${RB.ic("eye", 14)}</span>
            </div>
          </div>
          <div class="field">
            <label>Buscar</label>
            <div class="input-group">
              <span class="addon">${RB.ic("search", 14)}</span>
              <input class="input" placeholder="Proyectos, clientes, tags…" />
            </div>
          </div>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"input-group"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"addon"</span><span class="tk-k">&gt;</span>rumbo.la/<span class="tk-k">&lt;/span&gt;</span>
  <span class="tk-k">&lt;input</span> <span class="tk-a">class</span>=<span class="tk-s">"input"</span> <span class="tk-a">placeholder</span>=<span class="tk-s">"mi-proyecto"</span><span class="tk-k">&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}
  </section>
`;

/* ============ SELECT ============ */
RB.pages.select = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Select nativo con estilos de Rumbo. El chevron es un fondo SVG inline que hereda del color del texto para el theming.")}
    ${RB.demo({
      stage: `
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;width:100%;max-width:680px">
          <div class="field">
            <label>Tipo de proyecto</label>
            <select class="input select">
              <option>Brand identity</option>
              <option>Website</option>
              <option>Producto digital</option>
              <option>Estrategia</option>
            </select>
          </div>
          <div class="field">
            <label>Prioridad</label>
            <select class="input select">
              <option>Alta</option>
              <option>Media</option>
              <option>Baja</option>
            </select>
          </div>
          <div class="field">
            <label>Disabled</label>
            <select class="input select" disabled><option>Seleccionar…</option></select>
          </div>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-k">&lt;select</span> <span class="tk-a">class</span>=<span class="tk-s">"input select"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;option&gt;</span>Brand identity<span class="tk-k">&lt;/option&gt;</span>
  <span class="tk-k">&lt;option&gt;</span>Website<span class="tk-k">&lt;/option&gt;</span>
<span class="tk-k">&lt;/select&gt;</span>`,
    })}
  </section>
`;

/* ============ TOGGLES ============ */
RB.pages.toggle = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Checkbox, radio y switch comparten gestualidad. La caja se llena de accent cuando está activa; el check entra con un pequeño spring.")}

    <h3 class="sub">Checkbox</h3>
    ${RB.demo({
      stage: `
        <div style="display:flex;flex-direction:column;gap:12px">
          <label class="check">
            <input type="checkbox" checked>
            <span class="box">${RB.ic("check", 10)}</span>
            <span>Acepto términos y condiciones</span>
          </label>
          <label class="check">
            <input type="checkbox">
            <span class="box">${RB.ic("check", 10)}</span>
            <span>Suscribirme al newsletter</span>
          </label>
          <label class="check" style="opacity:.5">
            <input type="checkbox" disabled>
            <span class="box">${RB.ic("check", 10)}</span>
            <span>Deshabilitado</span>
          </label>
        </div>
      `,
      code: `<span class="tk-k">&lt;label</span> <span class="tk-a">class</span>=<span class="tk-s">"check"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;input</span> <span class="tk-a">type</span>=<span class="tk-s">"checkbox"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"box"</span><span class="tk-k">&gt;</span>
    <span class="tk-k">&lt;svg&gt;</span>...<span class="tk-k">&lt;/svg&gt;</span>
  <span class="tk-k">&lt;/span&gt;</span>
  <span class="tk-k">&lt;span&gt;</span>Acepto términos<span class="tk-k">&lt;/span&gt;</span>
<span class="tk-k">&lt;/label&gt;</span>`,
    })}

    <h3 class="sub">Radio</h3>
    ${RB.demo({
      stage: `
        <div style="display:flex;flex-direction:column;gap:12px">
          <label class="check radio"><input type="radio" name="r1" checked><span class="box"></span><span>Plan mensual</span></label>
          <label class="check radio"><input type="radio" name="r1"><span class="box"></span><span>Plan anual (ahorra 20%)</span></label>
          <label class="check radio"><input type="radio" name="r1"><span class="box"></span><span>Pago único</span></label>
        </div>
      `,
      code: `<span class="tk-k">&lt;label</span> <span class="tk-a">class</span>=<span class="tk-s">"check radio"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;input</span> <span class="tk-a">type</span>=<span class="tk-s">"radio"</span> <span class="tk-a">name</span>=<span class="tk-s">"plan"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"box"</span><span class="tk-k">&gt;&lt;/span&gt;</span>
  <span class="tk-k">&lt;span&gt;</span>Plan anual<span class="tk-k">&lt;/span&gt;</span>
<span class="tk-k">&lt;/label&gt;</span>`,
    })}

    <h3 class="sub">Switch</h3>
    ${RB.demo({
      stage: `
        <div style="display:flex;flex-direction:column;gap:12px">
          <label class="switch"><input type="checkbox" checked><span class="track"></span><span>Notificaciones push</span></label>
          <label class="switch"><input type="checkbox"><span class="track"></span><span>Modo oscuro automático</span></label>
          <label class="switch" style="opacity:.5"><input type="checkbox" disabled><span class="track"></span><span>Beta features</span></label>
        </div>
      `,
      code: `<span class="tk-k">&lt;label</span> <span class="tk-a">class</span>=<span class="tk-s">"switch"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;input</span> <span class="tk-a">type</span>=<span class="tk-s">"checkbox"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"track"</span><span class="tk-k">&gt;&lt;/span&gt;</span>
  <span class="tk-k">&lt;span&gt;</span>Notificaciones push<span class="tk-k">&lt;/span&gt;</span>
<span class="tk-k">&lt;/label&gt;</span>`,
    })}
  </section>
`;

/* ============ CARD ============ */
RB.pages.card = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Superficie base del sistema. 12px radius, 20px padding, borde sutil. Acepta media, acciones y variaciones con color sólido (pin-card).")}

    <h3 class="sub">Base</h3>
    ${RB.demo({
      stage: `
        <div class="card">
          <h4>Tarjeta base</h4>
          <p>Los ríos no avanzan en línea recta: serpentean, eligen su cauce, encuentran el mar. Este es el tono editorial del sistema.</p>
          <div class="card-actions">
            <button class="btn sm">Ver más</button>
            <button class="btn sm ghost">Cancelar</button>
          </div>
        </div>
        <div class="card">
          <span class="badge accent">Nuevo</span>
          <h4>Con badge + contenido</h4>
          <p>Perfecta para listados, featured items o contenedores de info densa.</p>
        </div>
      `,
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"card"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;h4&gt;</span>Tarjeta base<span class="tk-k">&lt;/h4&gt;</span>
  <span class="tk-k">&lt;p&gt;</span>...<span class="tk-k">&lt;/p&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"card-actions"</span><span class="tk-k">&gt;</span>
    <span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn sm"</span><span class="tk-k">&gt;</span>Ver más<span class="tk-k">&lt;/button&gt;</span>
  <span class="tk-k">&lt;/div&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}

    <h3 class="sub">Con media (pin azul)</h3>
    ${RB.demo({
      stage: `
        <div class="card">
          <div class="media">
            <span class="tag">01 · Caso</span>
            <svg class="pin" viewBox="0 0 800 800"><use href="#rb-sym"/></svg>
          </div>
          <h4>Proyecto Norte</h4>
          <p>Rebranding completo para una startup de agricultura regenerativa.</p>
          <div class="card-actions">
            <button class="btn sm secondary">Leer caso ${RB.ic("arrowUR", 12)}</button>
          </div>
        </div>
        <div class="card pin-card">
          <div style="display:flex;justify-content:space-between;align-items:start">
            <h4>Card promo</h4>
            <svg width="32" height="32" viewBox="0 0 800 800" style="color:rgba(255,255,255,.3)"><use href="#rb-sym"/></svg>
          </div>
          <p>Fondo azul Rumbo para destacar CTAs, ofertas o contenido featured.</p>
          <div class="card-actions">
            <button class="btn sm cyan">Empezar</button>
          </div>
        </div>
      `,
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"card"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"media"</span><span class="tk-k">&gt;</span>
    <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"tag"</span><span class="tk-k">&gt;</span>01 · Caso<span class="tk-k">&lt;/span&gt;</span>
  <span class="tk-k">&lt;/div&gt;</span>
  <span class="tk-k">&lt;h4&gt;</span>Proyecto Norte<span class="tk-k">&lt;/h4&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>

<span class="tk-c">/* Full-blue variant */</span>
<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"card pin-card"</span><span class="tk-k">&gt;...&lt;/div&gt;</span>`,
    })}
  </section>
`;

/* ============ BADGE ============ */
RB.pages.badge = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Tags, chips y badges — pequeños marcadores de estado. Tono sutil para no competir con el contenido principal.")}
    ${RB.demo({
      stage: `
        <span class="badge">Default</span>
        <span class="badge accent">Accent</span>
        <span class="badge cyan">Highlight</span>
        <span class="badge success">Activo</span>
        <span class="badge warn">Pendiente</span>
        <span class="badge danger">Error</span>
      `,
      code: `<span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"badge accent"</span><span class="tk-k">&gt;</span>Accent<span class="tk-k">&lt;/span&gt;</span>
<span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"badge success"</span><span class="tk-k">&gt;</span>Activo<span class="tk-k">&lt;/span&gt;</span>
<span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"badge warn"</span><span class="tk-k">&gt;</span>Pendiente<span class="tk-k">&lt;/span&gt;</span>`,
    })}

    <h3 class="sub">Con dot (status)</h3>
    ${RB.demo({
      stage: `
        <span class="badge dot success">Online</span>
        <span class="badge dot warn">Away</span>
        <span class="badge dot danger">Offline</span>
        <span class="badge dot accent">Enfocado</span>
      `,
      code: `<span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"badge dot success"</span><span class="tk-k">&gt;</span>Online<span class="tk-k">&lt;/span&gt;</span>`,
    })}
  </section>
`;

/* ============ TABS & SEGMENTED ============ */
RB.pages.tabs = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Tabs para navegación secundaria dentro de una vista. Segmented cuando las opciones son excluyentes y pocas (2–4).")}

    <h3 class="sub">Tabs</h3>
    ${RB.demo({
      stage: `
        <div style="width:100%;max-width:560px">
          <div class="tabs" id="tabs-demo">
            <button aria-selected="true" onclick="tabsDemo(this)">Resumen</button>
            <button aria-selected="false" onclick="tabsDemo(this)">Proyectos</button>
            <button aria-selected="false" onclick="tabsDemo(this)">Actividad</button>
            <button aria-selected="false" onclick="tabsDemo(this)">Configuración</button>
          </div>
          <div style="padding:24px 0;color:var(--text-muted);font-size:14px">Contenido del tab seleccionado.</div>
        </div>
        <script>function tabsDemo(el){el.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-selected',b===el));}</script>
      `,
      opts: { left: true },
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"tabs"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;button</span> <span class="tk-a">aria-selected</span>=<span class="tk-s">"true"</span><span class="tk-k">&gt;</span>Resumen<span class="tk-k">&lt;/button&gt;</span>
  <span class="tk-k">&lt;button</span> <span class="tk-a">aria-selected</span>=<span class="tk-s">"false"</span><span class="tk-k">&gt;</span>Proyectos<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}

    <h3 class="sub">Segmented</h3>
    ${RB.demo({
      stage: `
        <div class="segmented">
          <button aria-pressed="true" onclick="segDemo(this)">Light</button>
          <button aria-pressed="false" onclick="segDemo(this)">Dark</button>
          <button aria-pressed="false" onclick="segDemo(this)">Auto</button>
        </div>
        <div class="segmented">
          <button aria-pressed="true" onclick="segDemo(this)">Día</button>
          <button aria-pressed="false" onclick="segDemo(this)">Semana</button>
          <button aria-pressed="false" onclick="segDemo(this)">Mes</button>
          <button aria-pressed="false" onclick="segDemo(this)">Año</button>
        </div>
        <script>function segDemo(el){el.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===el));}</script>
      `,
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"segmented"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;button</span> <span class="tk-a">aria-pressed</span>=<span class="tk-s">"true"</span><span class="tk-k">&gt;</span>Light<span class="tk-k">&lt;/button&gt;</span>
  <span class="tk-k">&lt;button</span> <span class="tk-a">aria-pressed</span>=<span class="tk-s">"false"</span><span class="tk-k">&gt;</span>Dark<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}
  </section>
`;

/* ============ ALERT & TOAST ============ */
RB.pages.alert = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Alertas inline para contexto persistente. Toasts efímeros para feedback de acción. Ambos siguen la misma escala de color semántico.")}

    <h3 class="sub">Alert</h3>
    ${RB.demo({
      stage: `
        <div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:520px">
          <div class="alert">
            <div class="ic">${RB.ic("info", 18)}</div>
            <div class="body"><strong>Info</strong><span>Tu plan se renueva automáticamente el 15 de mayo.</span></div>
          </div>
          <div class="alert success">
            <div class="ic">${RB.ic("check", 18)}</div>
            <div class="body"><strong>Completado</strong><span>Los archivos fueron subidos correctamente.</span></div>
          </div>
          <div class="alert warn">
            <div class="ic">${RB.ic("alert", 18)}</div>
            <div class="body"><strong>Atención</strong><span>Te quedan 2 días para completar la configuración.</span></div>
          </div>
          <div class="alert danger">
            <div class="ic">${RB.ic("alert", 18)}</div>
            <div class="body"><strong>Error al guardar</strong><span>Verifica tu conexión e inténtalo de nuevo.</span></div>
          </div>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"alert success"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"ic"</span><span class="tk-k">&gt;</span>...<span class="tk-k">&lt;/div&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"body"</span><span class="tk-k">&gt;</span>
    <span class="tk-k">&lt;strong&gt;</span>Completado<span class="tk-k">&lt;/strong&gt;</span>
    <span class="tk-k">&lt;span&gt;</span>Archivos subidos.<span class="tk-k">&lt;/span&gt;</span>
  <span class="tk-k">&lt;/div&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}

    <h3 class="sub">Toast (tryout)</h3>
    ${RB.demo({
      stage: `
        <div style="display:flex;gap:8px">
          <button class="btn" onclick="RumboUI.toast('Sesión guardada')">Default</button>
          <button class="btn secondary" onclick="RumboUI.toast('Enlace copiado al portapapeles','info')">Con enlace</button>
          <button class="btn ghost" onclick="RumboUI.toast('No se pudo guardar','danger')">Error</button>
        </div>
      `,
      code: `<span class="tk-c">// En JS — variantes: success (default) | info | warn | danger</span>
RumboUI.<span class="tk-a">toast</span>(<span class="tk-s">'Sesión guardada'</span>);
RumboUI.<span class="tk-a">toast</span>(<span class="tk-s">'No se pudo guardar'</span>, <span class="tk-s">'danger'</span>);
RumboUI.<span class="tk-a">toast</span>(<span class="tk-s">'Subiendo…'</span>, { <span class="tk-a">variant</span>: <span class="tk-s">'info'</span>, <span class="tk-a">duration</span>: <span class="tk-s">0</span> }); <span class="tk-c">// persistente</span>

<span class="tk-c">/* Markup del toast (se inyecta al dock) */</span>
<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"toast"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;svg</span> <span class="tk-a">class</span>=<span class="tk-s">"ic"</span><span class="tk-k">&gt;</span>...<span class="tk-k">&lt;/svg&gt;</span>
  <span class="tk-k">&lt;span&gt;</span>Sesión guardada<span class="tk-k">&lt;/span&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}
  </section>
`;

/* ============ MODAL ============ */
RB.pages.modal = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Modales para decisiones puntuales. Máximo 420px, siempre con una acción primaria clara. Nunca uses modal para formularios largos — usa una página.")}

    <h3 class="sub">Modal funcional</h3>
    <p>Implementación real (RF-09): foco atrapado, cierre con Esc o click en el scrim, y el foco vuelve al disparador. Pruébalo sin usar el ratón.</p>
    ${RB.demo({
      stage: `<button class="btn" data-rb-open="#ds-modal-live">Abrir modal</button>
              <button class="btn secondary" onclick="RumboUI.openModal('#ds-modal-live')">Abrir por API</button>`,
      code: `<span class="tk-k">&lt;button</span> <span class="tk-a">data-rb-open</span>=<span class="tk-s">"#dlg"</span><span class="tk-k">&gt;</span>Abrir<span class="tk-k">&lt;/button&gt;</span>

<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"rb-modal"</span> <span class="tk-a">id</span>=<span class="tk-s">"dlg"</span> <span class="tk-a">aria-labelledby</span>=<span class="tk-s">"dlg-t"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"rb-modal-scrim"</span><span class="tk-k">&gt;&lt;/div&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"rb-modal-panel"</span><span class="tk-k">&gt;</span>
    <span class="tk-k">&lt;h5</span> <span class="tk-a">id</span>=<span class="tk-s">"dlg-t"</span><span class="tk-k">&gt;</span>Eliminar proyecto<span class="tk-k">&lt;/h5&gt;</span>
    <span class="tk-k">&lt;button</span> <span class="tk-a">data-rb-close</span><span class="tk-k">&gt;</span>Cancelar<span class="tk-k">&lt;/button&gt;</span>
  <span class="tk-k">&lt;/div&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>

<span class="tk-c">// API: RumboUI.openModal('#dlg') · RumboUI.closeModal('#dlg')</span>`,
    })}

    <div class="rb-modal" id="ds-modal-live" aria-labelledby="ds-modal-live-t">
      <div class="rb-modal-scrim"></div>
      <div class="rb-modal-panel">
        <div class="mhead">
          <div class="ic">${RB.ic("alert", 18)}</div>
          <div>
            <h5 id="ds-modal-live-t">Eliminar proyecto</h5>
            <p>Esta acción no se puede deshacer. Se eliminarán todos los archivos y versiones de <strong style="color:var(--text)">Norte · Brand</strong>.</p>
          </div>
        </div>
        <div class="mactions">
          <button class="btn ghost" data-rb-close>Cancelar</button>
          <button class="btn danger" data-rb-close onclick="RumboUI.toast('Proyecto eliminado','danger')">Eliminar</button>
        </div>
      </div>
    </div>

    <h3 class="sub">Confirmación (estático)</h3>
    ${RB.demo({
      stage: `
        <div class="modal-preview">
          <div class="mhead">
            <div class="ic">${RB.ic("alert", 18)}</div>
            <div>
              <h5>Eliminar proyecto</h5>
              <p>Esta acción no se puede deshacer. Se eliminarán todos los archivos, comentarios y versiones asociadas al proyecto <strong style="color:var(--text)">Norte · Brand</strong>.</p>
            </div>
          </div>
          <div class="mactions">
            <button class="btn ghost">Cancelar</button>
            <button class="btn danger">Eliminar proyecto</button>
          </div>
        </div>
      `,
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"modal-preview"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"mhead"</span><span class="tk-k">&gt;</span>
    <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"ic"</span><span class="tk-k">&gt;</span>...<span class="tk-k">&lt;/div&gt;</span>
    <span class="tk-k">&lt;div&gt;</span>
      <span class="tk-k">&lt;h5&gt;</span>Eliminar proyecto<span class="tk-k">&lt;/h5&gt;</span>
      <span class="tk-k">&lt;p&gt;</span>Esta acción no se puede deshacer.<span class="tk-k">&lt;/p&gt;</span>
    <span class="tk-k">&lt;/div&gt;</span>
  <span class="tk-k">&lt;/div&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"mactions"</span><span class="tk-k">&gt;</span>
    <span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn ghost"</span><span class="tk-k">&gt;</span>Cancelar<span class="tk-k">&lt;/button&gt;</span>
    <span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn danger"</span><span class="tk-k">&gt;</span>Eliminar<span class="tk-k">&lt;/button&gt;</span>
  <span class="tk-k">&lt;/div&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}

    <h3 class="sub">Éxito</h3>
    ${RB.demo({
      stage: `
        <div class="modal-preview">
          <div class="mhead">
            <div class="ic" style="background:rgba(60,203,127,.14);color:var(--success)">${RB.ic("check", 18)}</div>
            <div>
              <h5>¡Todo listo!</h5>
              <p>Tu cuenta está configurada y tu primer proyecto fue creado. Te enviamos un email con los siguientes pasos.</p>
            </div>
          </div>
          <div class="mactions">
            <button class="btn">Ir al dashboard</button>
          </div>
        </div>
      `,
      code: `<span class="tk-c">// El .ic cambia de color según la intención del modal.</span>`,
    })}
  </section>
`;

/* ============ TABLE ============ */
RB.pages.table = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Tabla de densidad producto. Headers en mono con tracking marcado, filas con hover suave. Siempre incluye al menos una columna con identidad (avatar + nombre).")}
    ${RB.demo({
      stage: `
        <table class="tbl">
          <thead>
            <tr><th>Cliente</th><th>Proyecto</th><th>Estado</th><th>Presupuesto</th><th style="width:60px"></th></tr>
          </thead>
          <tbody>
            <tr>
              <td><div class="user"><span class="avatar sm">AR</span> Ana Ruiz</div></td>
              <td>Rebranding Norte</td>
              <td><span class="badge dot success">Activo</span></td>
              <td>$12,400</td>
              <td>${RB.ic("chevR", 14)}</td>
            </tr>
            <tr>
              <td><div class="user"><span class="avatar sm" style="background:linear-gradient(135deg,var(--rb-cyan),var(--rb-blue))">JM</span> J. Mendoza</div></td>
              <td>Website Verso</td>
              <td><span class="badge dot warn">En revisión</span></td>
              <td>$8,200</td>
              <td>${RB.ic("chevR", 14)}</td>
            </tr>
            <tr>
              <td><div class="user"><span class="avatar sm" style="background:linear-gradient(135deg,var(--rb-orange),var(--rb-purple))">LC</span> Lu Castro</div></td>
              <td>App Ruta</td>
              <td><span class="badge dot accent">Scoping</span></td>
              <td>$24,000</td>
              <td>${RB.ic("chevR", 14)}</td>
            </tr>
            <tr>
              <td><div class="user"><span class="avatar sm" style="background:linear-gradient(135deg,var(--rb-purple),var(--rb-blue))">MS</span> Mar Silva</div></td>
              <td>Estrategia 2026</td>
              <td><span class="badge dot danger">Pausado</span></td>
              <td>$16,800</td>
              <td>${RB.ic("chevR", 14)}</td>
            </tr>
          </tbody>
        </table>
      `,
      opts: { left: true },
      code: `<span class="tk-k">&lt;table</span> <span class="tk-a">class</span>=<span class="tk-s">"tbl"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;thead&gt;&lt;tr&gt;&lt;th&gt;</span>Cliente<span class="tk-k">&lt;/th&gt;</span>...<span class="tk-k">&lt;/tr&gt;&lt;/thead&gt;</span>
  <span class="tk-k">&lt;tbody&gt;</span>
    <span class="tk-k">&lt;tr&gt;&lt;td&gt;</span>
      <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"user"</span><span class="tk-k">&gt;</span>
        <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"avatar sm"</span><span class="tk-k">&gt;</span>AR<span class="tk-k">&lt;/span&gt;</span>
        Ana Ruiz
      <span class="tk-k">&lt;/div&gt;</span>
    <span class="tk-k">&lt;/td&gt;</span>...<span class="tk-k">&lt;/tr&gt;</span>
  <span class="tk-k">&lt;/tbody&gt;&lt;/table&gt;</span>`,
    })}
  </section>
`;

/* ============ NAV ============ */
RB.pages.nav = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Patrones de navegación. Topbar para marketing y app shell; breadcrumbs para jerarquía; sidebar (ver este sitio mismo) para docs o dashboards densos.")}

    <h3 class="sub">Topbar</h3>
    ${RB.demo({
      stage: `
        <div class="nav-sample">
          <div class="logo">
            <svg width="20" height="20" viewBox="0 0 800 800" style="color:var(--accent)"><use href="#rb-sym"/></svg>
            rumbo<span style="color:var(--accent)">.</span>
          </div>
          <nav>
            <a class="active">Proyectos</a>
            <a>Clientes</a>
            <a>Bitácora</a>
            <a>Reportes</a>
          </nav>
          <div class="spacer"></div>
          <button class="btn sm ghost icon" aria-label="Notificaciones">${RB.ic("bell", 14)}</button>
          <span class="avatar sm">AR</span>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"nav-sample"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"logo"</span><span class="tk-k">&gt;</span>rumbo.<span class="tk-k">&lt;/div&gt;</span>
  <span class="tk-k">&lt;nav&gt;</span>
    <span class="tk-k">&lt;a</span> <span class="tk-a">class</span>=<span class="tk-s">"active"</span><span class="tk-k">&gt;</span>Proyectos<span class="tk-k">&lt;/a&gt;</span>
  <span class="tk-k">&lt;/nav&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}

    <h3 class="sub">Breadcrumbs</h3>
    ${RB.demo({
      stage: `
        <div class="breadcrumbs">
          <a>Proyectos</a>
          <span class="sep">/</span>
          <a>Norte · Brand</a>
          <span class="sep">/</span>
          <b>Logo construction</b>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"breadcrumbs"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;a&gt;</span>Proyectos<span class="tk-k">&lt;/a&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"sep"</span><span class="tk-k">&gt;</span>/<span class="tk-k">&lt;/span&gt;</span>
  <span class="tk-k">&lt;b&gt;</span>Logo construction<span class="tk-k">&lt;/b&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}
  </section>
`;

/* ============ AVATAR ============ */
RB.pages.avatar = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Avatar con iniciales sobre gradiente. 4 tamaños. El stacking (avatar-group) genera un patrón visual editorial, no compacto.")}

    <h3 class="sub">Tamaños</h3>
    ${RB.demo({
      stage: `
        <span class="avatar sm">AR</span>
        <span class="avatar">AR</span>
        <span class="avatar lg">AR</span>
        <span class="avatar xl">AR</span>
      `,
      code: `<span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"avatar sm"</span><span class="tk-k">&gt;</span>AR<span class="tk-k">&lt;/span&gt;</span>
<span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"avatar"</span><span class="tk-k">&gt;</span>AR<span class="tk-k">&lt;/span&gt;</span>
<span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"avatar lg"</span><span class="tk-k">&gt;</span>AR<span class="tk-k">&lt;/span&gt;</span>
<span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"avatar xl"</span><span class="tk-k">&gt;</span>AR<span class="tk-k">&lt;/span&gt;</span>`,
    })}

    <h3 class="sub">Grupo</h3>
    ${RB.demo({
      stage: `
        <div class="avatar-group">
          <span class="avatar">AR</span>
          <span class="avatar" style="background:linear-gradient(135deg,var(--rb-cyan),var(--rb-blue))">JM</span>
          <span class="avatar" style="background:linear-gradient(135deg,var(--rb-orange),var(--rb-purple))">LC</span>
          <span class="avatar" style="background:linear-gradient(135deg,var(--rb-purple),var(--rb-blue))">MS</span>
          <span class="avatar" style="background:var(--surface-2);color:var(--text-muted)">+3</span>
        </div>
      `,
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"avatar-group"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"avatar"</span><span class="tk-k">&gt;</span>AR<span class="tk-k">&lt;/span&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"avatar"</span><span class="tk-k">&gt;</span>JM<span class="tk-k">&lt;/span&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"avatar"</span><span class="tk-k">&gt;</span>+3<span class="tk-k">&lt;/span&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}
  </section>
`;

/* ============ PAGINATION ============ */
RB.pages.pagination = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Paginación numérica con ellipsis automáticas. Usa solo cuando hay > 20 items; para menos, muestra todo.")}
    ${RB.demo({
      stage: `
        <div class="pagination">
          <button>${RB.ic("chevL", 14)}</button>
          <button>1</button>
          <button aria-current="page">2</button>
          <button>3</button>
          <button>4</button>
          <span class="el">…</span>
          <button>12</button>
          <button>${RB.ic("chevR", 14)}</button>
        </div>
      `,
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"pagination"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;button&gt;</span>&lt;<span class="tk-k">&lt;/button&gt;</span>
  <span class="tk-k">&lt;button&gt;</span>1<span class="tk-k">&lt;/button&gt;</span>
  <span class="tk-k">&lt;button</span> <span class="tk-a">aria-current</span>=<span class="tk-s">"page"</span><span class="tk-k">&gt;</span>2<span class="tk-k">&lt;/button&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"el"</span><span class="tk-k">&gt;</span>…<span class="tk-k">&lt;/span&gt;</span>
  <span class="tk-k">&lt;button&gt;</span>12<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}
  </section>
`;

/* ============ PROGRESS ============ */
RB.pages.progress = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Barra determinada, spinner indeterminado y skeletons para estados de carga. Usa spinner sólo cuando no puedas estimar el progreso.")}

    <h3 class="sub">Progress bar</h3>
    ${RB.demo({
      stage: `
        <div style="display:flex;flex-direction:column;gap:16px;width:100%;max-width:360px">
          <div>
            <div style="display:flex;justify-content:space-between;font-family:ui-monospace,monospace;font-size:11px;color:var(--text-muted);margin-bottom:8px"><span>Uploading</span><span>32%</span></div>
            <div class="progress"><span style="width:32%"></span></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-family:ui-monospace,monospace;font-size:11px;color:var(--text-muted);margin-bottom:8px"><span>Processing</span><span>68%</span></div>
            <div class="progress"><span style="width:68%"></span></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-family:ui-monospace,monospace;font-size:11px;color:var(--text-muted);margin-bottom:8px"><span>Completado</span><span>100%</span></div>
            <div class="progress"><span style="width:100%;background:var(--success)"></span></div>
          </div>
        </div>
      `,
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"progress"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;span</span> <span class="tk-a">style</span>=<span class="tk-s">"width:32%"</span><span class="tk-k">&gt;&lt;/span&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}

    <h3 class="sub">Spinner</h3>
    ${RB.demo({
      stage: `
        <div class="ring"></div>
        <div class="ring" style="border-top-color:var(--rb-cyan)"></div>
        <div class="ring" style="width:24px;height:24px;border-width:2px"></div>
      `,
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"ring"</span><span class="tk-k">&gt;&lt;/div&gt;</span>`,
    })}

    <h3 class="sub">Skeleton</h3>
    ${RB.demo({
      stage: `
        <div style="width:100%;max-width:360px;display:flex;flex-direction:column;gap:12px">
          <div class="skeleton" style="width:30%;height:12px"></div>
          <div class="skeleton" style="width:90%"></div>
          <div class="skeleton" style="width:70%"></div>
          <div style="display:flex;gap:12px;margin-top:8px">
            <div class="skeleton" style="width:48px;height:48px;border-radius:50%"></div>
            <div style="flex:1;display:flex;flex-direction:column;gap:6px">
              <div class="skeleton" style="width:50%"></div>
              <div class="skeleton" style="width:80%;height:12px"></div>
            </div>
          </div>
        </div>
      `,
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"skeleton"</span> <span class="tk-a">style</span>=<span class="tk-s">"width:90%"</span><span class="tk-k">&gt;&lt;/div&gt;</span>`,
    })}
  </section>
`;

/* ============ TOOLTIP ============ */
RB.pages.tooltip = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Tooltip para info breve en hover. Nunca críticos — no deben contener acciones. Colocados arriba por defecto, 8px de offset.")}
    ${RB.demo({
      stage: `
        <span class="tip-wrap" data-tip="Proyecto activo">
          <span class="badge dot success">Activo</span>
        </span>
        <span class="tip-wrap" data-tip="Haz click para editar">
          <button class="btn ghost icon">${RB.ic("gear", 16)}</button>
        </span>
        <span class="tip-wrap" data-tip="Copiar al portapapeles · ⌘C">
          <button class="btn outline sm">Copiar link</button>
        </span>
        <span class="tip-wrap" data-tip="Subscríbete para acceder">
          <span class="badge warn">Pro</span>
        </span>
      `,
      code: `<span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"tip-wrap"</span> <span class="tk-a">data-tip</span>=<span class="tk-s">"Copiar · ⌘C"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn sm"</span><span class="tk-k">&gt;</span>Copiar<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;/span&gt;</span>`,
    })}
  </section>
`;

/* ============ EMPTY STATE ============ */
RB.pages.empty = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Comunica ausencia con intención. Siempre una acción primaria clara para sacar al usuario del vacío. Copy en tono Rumbo — ni corporativo ni infantil.")}
    ${RB.demo({
      stage: `
        <div class="empty">
          <div class="em-ic">${RB.ic("inbox", 48)}</div>
          <h5>Aún no hay proyectos</h5>
          <p>Crea tu primer proyecto para empezar a trackear sesiones, entregas y clientes.</p>
          <div style="display:flex;gap:8px">
            <button class="btn">${RB.ic("plus", 14)} Nuevo proyecto</button>
            <button class="btn ghost">Ver ejemplos</button>
          </div>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"empty"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"em-ic"</span><span class="tk-k">&gt;</span>...<span class="tk-k">&lt;/div&gt;</span>
  <span class="tk-k">&lt;h5&gt;</span>Aún no hay proyectos<span class="tk-k">&lt;/h5&gt;</span>
  <span class="tk-k">&lt;p&gt;</span>Crea tu primer proyecto…<span class="tk-k">&lt;/p&gt;</span>
  <span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn"</span><span class="tk-k">&gt;</span>Nuevo proyecto<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}
  </section>
`;

/* ============ MENU & POPOVER (RF-11) ============ */
RB.pages.menu = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Menú desplegable y popover. Ambos siguen el patrón de teclado de WAI-ARIA: se abren con Enter/Space/↓, se navegan con flechas y Home/End, se cierran con Esc devolviendo el foco al disparador. El comportamiento lo aporta <code>dist/rumbo-ui.js</code>.")}

    <h3 class="sub">Menu</h3>
    ${RB.demo({
      stage: `
        <span class="rb-menu-wrap">
          <button class="btn outline" data-rb-menu="#ds-menu-1">Acciones ▾</button>
          <div class="rb-menu" id="ds-menu-1">
            <div class="rb-menu-label">Proyecto</div>
            <button>Editar</button>
            <button>Duplicar</button>
            <button aria-disabled="true">Archivar</button>
            <hr />
            <button class="danger">Eliminar</button>
          </div>
        </span>
        <span class="rb-menu-wrap">
          <button class="btn ghost icon" data-rb-menu="#ds-menu-2" aria-label="Más opciones">⋯</button>
          <div class="rb-menu align-end" id="ds-menu-2">
            <button>Ver detalles</button>
            <button>Compartir enlace</button>
          </div>
        </span>
      `,
      code: `<span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"rb-menu-wrap"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn outline"</span> <span class="tk-a">data-rb-menu</span>=<span class="tk-s">"#menu-1"</span><span class="tk-k">&gt;</span>Acciones<span class="tk-k">&lt;/button&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"rb-menu"</span> <span class="tk-a">id</span>=<span class="tk-s">"menu-1"</span><span class="tk-k">&gt;</span>
    <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"rb-menu-label"</span><span class="tk-k">&gt;</span>Proyecto<span class="tk-k">&lt;/div&gt;</span>
    <span class="tk-k">&lt;button&gt;</span>Editar<span class="tk-k">&lt;/button&gt;</span>
    <span class="tk-k">&lt;button</span> <span class="tk-a">aria-disabled</span>=<span class="tk-s">"true"</span><span class="tk-k">&gt;</span>Archivar<span class="tk-k">&lt;/button&gt;</span>
    <span class="tk-k">&lt;hr /&gt;</span>
    <span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"danger"</span><span class="tk-k">&gt;</span>Eliminar<span class="tk-k">&lt;/button&gt;</span>
  <span class="tk-k">&lt;/div&gt;</span>
<span class="tk-k">&lt;/span&gt;</span>

<span class="tk-c">/* roles, aria-expanded y teclado los aplica rumbo-ui.js */</span>`,
    })}

    <h3 class="sub">Popover</h3>
    ${RB.demo({
      stage: `
        <span class="rb-menu-wrap">
          <button class="btn secondary" data-rb-popover="#ds-pop-1">¿Qué incluye?</button>
          <div class="rb-popover" id="ds-pop-1">
            <h6>Alcance del plan</h6>
            <p>Proyectos ilimitados, colaboración en tiempo real y export de tokens a Tailwind. El almacenamiento se factura aparte.</p>
          </div>
        </span>
      `,
      code: `<span class="tk-k">&lt;button</span> <span class="tk-a">data-rb-popover</span>=<span class="tk-s">"#pop-1"</span><span class="tk-k">&gt;</span>¿Qué incluye?<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"rb-popover"</span> <span class="tk-a">id</span>=<span class="tk-s">"pop-1"</span><span class="tk-k">&gt;</span>…<span class="tk-k">&lt;/div&gt;</span>

<span class="tk-c">/* A diferencia del modal, el popover NO atrapa el foco. */</span>`,
    })}
  </section>
`;

/* ============ DRAWER (RF-12) ============ */
RB.pages.drawer = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Panel lateral para filtros, detalles y formularios secundarios. Comparte el contrato de accesibilidad del modal: foco atrapado, Esc cierra, el foco vuelve al disparador. Úsalo cuando el contexto de fondo importa; si la decisión es puntual, usa un modal.")}

    ${RB.demo({
      stage: `
        <button class="btn" data-rb-drawer="#ds-drawer">Abrir panel de filtros</button>
        <button class="btn secondary" onclick="RumboUI.openDrawer('#ds-drawer-left')">Abrir desde la izquierda</button>
      `,
      code: `<span class="tk-k">&lt;button</span> <span class="tk-a">data-rb-drawer</span>=<span class="tk-s">"#panel"</span><span class="tk-k">&gt;</span>Filtros<span class="tk-k">&lt;/button&gt;</span>

<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"rb-drawer"</span> <span class="tk-a">id</span>=<span class="tk-s">"panel"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"rb-drawer-scrim"</span><span class="tk-k">&gt;&lt;/div&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"rb-drawer-panel"</span><span class="tk-k">&gt;</span>
    <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"rb-drawer-head"</span><span class="tk-k">&gt;</span>
      <span class="tk-k">&lt;h5&gt;</span>Filtros<span class="tk-k">&lt;/h5&gt;</span>
      <span class="tk-k">&lt;button</span> <span class="tk-a">data-rb-close</span> <span class="tk-a">aria-label</span>=<span class="tk-s">"Cerrar"</span><span class="tk-k">&gt;</span>×<span class="tk-k">&lt;/button&gt;</span>
    <span class="tk-k">&lt;/div&gt;</span>
    …
  <span class="tk-k">&lt;/div&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>

<span class="tk-c">// También por API: RumboUI.openDrawer('#panel')</span>
<span class="tk-c">// Variante izquierda: &lt;div class="rb-drawer left"&gt;</span>`,
    })}

    <div class="rb-drawer" id="ds-drawer" aria-labelledby="ds-drawer-t">
      <div class="rb-drawer-scrim"></div>
      <div class="rb-drawer-panel">
        <div class="rb-drawer-head">
          <h5 id="ds-drawer-t">Filtros</h5>
          <button class="btn ghost icon" data-rb-close aria-label="Cerrar panel">${RB.ic("x", 16)}</button>
        </div>
        <div class="field" style="max-width:none;margin-bottom:16px">
          <label>Estado</label>
          <select class="input select"><option>Todos</option><option>Activo</option><option>Pausado</option></select>
        </div>
        <div class="field" style="max-width:none;margin-bottom:16px">
          <label>Cliente</label>
          <input class="input" placeholder="Buscar cliente…" />
        </div>
        <label class="switch" style="margin-bottom:20px"><input type="checkbox" checked><span class="track"></span><span>Solo mis proyectos</span></label>
        <button class="btn" style="width:100%" data-rb-close>Aplicar filtros</button>
      </div>
    </div>

    <div class="rb-drawer left" id="ds-drawer-left" aria-labelledby="ds-drawer-lt">
      <div class="rb-drawer-scrim"></div>
      <div class="rb-drawer-panel">
        <div class="rb-drawer-head">
          <h5 id="ds-drawer-lt">Navegación</h5>
          <button class="btn ghost icon" data-rb-close aria-label="Cerrar panel">${RB.ic("x", 16)}</button>
        </div>
        <p style="font-size:13px">Variante <code>.left</code> — útil como menú en móvil.</p>
      </div>
    </div>
  </section>
`;
