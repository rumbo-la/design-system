/* ============================================================
   Rumbo DS — Patterns + Screens
   Hero, Pricing, Forms, Login screen, Dashboard screen, Pricing page
   ============================================================ */

window.RB = window.RB || {};
RB.pages = RB.pages || {};

/* ============ HERO PATTERNS ============ */
RB.pages.hero = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Héroes de marketing. Siempre una frase editorial pesada (Dx Grafik italic), una bajada en Space Grotesk, máximo dos CTAs. El símbolo de Rumbo puede usarse como fondo decorativo al ~8% de opacidad.")}

    <h3 class="sub">Hero editorial</h3>
    ${RB.demo({
      stage: `
        <div class="hero-pattern">
          <svg class="sym" viewBox="0 0 800 800"><use href="#rb-sym"/></svg>
          <div>
            <div style="font-family:ui-monospace,monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:16px">Estudio · 2026</div>
            <h3>Encontramos el <em>rumbo</em>.</h3>
            <p>Estrategia, identidad y producto para equipos que quieren dejar de navegar a la deriva.</p>
            <div style="display:flex;gap:12px">
              <button class="btn cyan">Ver casos ${RB.ic("arrowUR", 14)}</button>
              <button class="btn ghost" style="color:#fff">Agenda una llamada</button>
            </div>
          </div>
          <div style="position:relative;z-index:2">
            <div style="background:rgba(71,235,235,.1);border:1px solid rgba(71,235,235,.3);border-radius:var(--radius-3);padding:20px;color:#fff">
              <div style="font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.15em;color:var(--rb-cyan);text-transform:uppercase;margin-bottom:8px">Caso del mes</div>
              <div style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:32px;letter-spacing:-.02em;line-height:1;margin-bottom:8px">Norte.</div>
              <div style="font-size:12px;color:rgba(255,255,255,.65)">Rebranding completo + plataforma para una startup de agricultura regenerativa.</div>
            </div>
          </div>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"hero-pattern"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;svg</span> <span class="tk-a">class</span>=<span class="tk-s">"sym"</span><span class="tk-k">&gt;</span>...<span class="tk-k">&lt;/svg&gt;</span>
  <span class="tk-k">&lt;h3&gt;</span>Encontramos el <span class="tk-k">&lt;em&gt;</span>rumbo<span class="tk-k">&lt;/em&gt;</span>.<span class="tk-k">&lt;/h3&gt;</span>
  <span class="tk-k">&lt;p&gt;</span>Estrategia, identidad y producto…<span class="tk-k">&lt;/p&gt;</span>
  <span class="tk-k">&lt;button</span> <span class="tk-a">class</span>=<span class="tk-s">"btn cyan"</span><span class="tk-k">&gt;</span>Ver casos<span class="tk-k">&lt;/button&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}

    <h3 class="sub">Hero split</h3>
    ${RB.demo({
      stage: `
        <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:0;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3);overflow:hidden">
          <div style="padding:40px">
            <span class="badge accent" style="margin-bottom:16px">v2.0 — beta</span>
            <h3 style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:44px;letter-spacing:-.025em;line-height:1;margin:0 0 12px">tiempo, <em style="color:var(--accent)">espacio</em>, tribu.</h3>
            <p style="color:var(--text-muted);margin:0 0 20px">Herramientas para equipos creativos que diseñan el trayecto, no solo el destino.</p>
            <div style="display:flex;gap:8px">
              <button class="btn">Empezar gratis</button>
              <button class="btn outline">Ver demo</button>
            </div>
          </div>
          <div style="background:var(--rb-blue);display:grid;place-items:center;position:relative;overflow:hidden">
            <svg viewBox="0 0 800 800" style="width:60%;color:rgba(255,255,255,.3);position:relative;z-index:1"><use href="#rb-sym"/></svg>
            <div style="position:absolute;inset:0;background:radial-gradient(circle at 30% 30%,rgba(71,235,235,.4),transparent 60%)"></div>
          </div>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-c">/* Grid 1.2fr 1fr — texto + visual. */</span>
<span class="tk-c">/* El panel visual usa var(--rb-blue) con un radial highlight en cyan. */</span>`,
    })}
  </section>
`;

/* ============ PRICING ============ */
RB.pages.pricing = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "3 planes con el del medio destacado en azul Rumbo. Cada plan tiene tier, precio, descripción y lista de features. El CTA del featured usa cyan como acento.")}
    ${RB.demo({
      stage: `
        <div class="price-grid" style="width:100%">
          <div class="price">
            <div>
              <div class="p-tier">Explorador</div>
              <p class="p-desc">Para freelancers y proyectos puntuales.</p>
            </div>
            <div class="p-price"><span class="big">$0</span><span class="per">/mes</span></div>
            <ul>
              <li>1 proyecto activo</li>
              <li>3GB de almacenamiento</li>
              <li>Tokens y temas básicos</li>
              <li>Soporte por email</li>
            </ul>
            <button class="btn outline">Empezar gratis</button>
          </div>
          <div class="price feat">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div class="p-tier">Navegante</div>
              <span class="badge cyan" style="background:rgba(71,235,235,.2);color:var(--rb-cyan);border-color:rgba(71,235,235,.4)">Más popular</span>
            </div>
            <p class="p-desc">Para estudios y equipos pequeños.</p>
            <div class="p-price"><span class="big">$29</span><span class="per">/mes · por usuario</span></div>
            <ul>
              <li>Proyectos ilimitados</li>
              <li>100GB de almacenamiento</li>
              <li>Temas custom y export Tailwind</li>
              <li>Colaboración en tiempo real</li>
              <li>Roles y permisos</li>
              <li>Soporte prioritario</li>
            </ul>
            <button class="btn cyan">Probar 14 días</button>
          </div>
          <div class="price">
            <div>
              <div class="p-tier">Capitán</div>
              <p class="p-desc">Para estudios grandes y agencias.</p>
            </div>
            <div class="p-price"><span class="big">Custom</span></div>
            <ul>
              <li>Todo lo del plan Navegante</li>
              <li>SSO + SAML</li>
              <li>Almacenamiento ilimitado</li>
              <li>SLA y onboarding dedicado</li>
              <li>Cuenta manager asignado</li>
            </ul>
            <button class="btn secondary">Hablar con ventas</button>
          </div>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"price-grid"</span><span class="tk-k">&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"price"</span><span class="tk-k">&gt;</span>
    <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"p-tier"</span><span class="tk-k">&gt;</span>Explorador<span class="tk-k">&lt;/div&gt;</span>
    <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"p-price"</span><span class="tk-k">&gt;</span>
      <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"big"</span><span class="tk-k">&gt;</span>$0<span class="tk-k">&lt;/span&gt;</span>
      <span class="tk-k">&lt;span</span> <span class="tk-a">class</span>=<span class="tk-s">"per"</span><span class="tk-k">&gt;</span>/mes<span class="tk-k">&lt;/span&gt;</span>
    <span class="tk-k">&lt;/div&gt;</span>
    <span class="tk-k">&lt;ul&gt;&lt;li&gt;</span>1 proyecto<span class="tk-k">&lt;/li&gt;</span>...<span class="tk-k">&lt;/ul&gt;</span>
  <span class="tk-k">&lt;/div&gt;</span>

  <span class="tk-c">&lt;!-- .feat = versión destacada (azul + cyan) --&gt;</span>
  <span class="tk-k">&lt;div</span> <span class="tk-a">class</span>=<span class="tk-s">"price feat"</span><span class="tk-k">&gt;</span>...<span class="tk-k">&lt;/div&gt;</span>
<span class="tk-k">&lt;/div&gt;</span>`,
    })}
  </section>
`;

/* ============ FORMS ============ */
RB.pages.forms = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Formularios de autenticación y contacto. Siempre una columna, campos espaciados a 16px, acción primaria full-width. Los links secundarios en color muted.")}

    <h3 class="sub">Login</h3>
    ${RB.demo({
      stage: `
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3);padding:32px;width:100%;max-width:380px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:24px">
            <svg width="24" height="24" viewBox="0 0 800 800" style="color:var(--accent)"><use href="#rb-sym"/></svg>
            <span style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:20px;letter-spacing:-.02em">rumbo<span style="color:var(--accent)">.</span></span>
          </div>
          <h4 style="margin:0 0 4px;font-size:20px;font-family:'Space Grotesk';font-weight:600;letter-spacing:-.01em">Bienvenido de vuelta</h4>
          <p style="margin:0 0 20px;font-size:13px;color:var(--text-muted)">Ingresa para continuar donde lo dejaste.</p>
          <div class="field" style="max-width:none;margin-bottom:12px">
            <label>Email</label>
            <input class="input" type="email" value="ana@rumbo.la" />
          </div>
          <div class="field" style="max-width:none;margin-bottom:16px">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <label>Contraseña</label>
              <a href="#" style="font-size:11px;color:var(--text-muted)">¿Olvidaste?</a>
            </div>
            <input class="input" type="password" value="••••••••••" />
          </div>
          <button class="btn" style="width:100%">Ingresar</button>
          <div style="display:flex;align-items:center;gap:10px;margin:20px 0;color:var(--text-dim);font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-family:ui-monospace,monospace">
            <div style="flex:1;height:1px;background:var(--border)"></div>
            o
            <div style="flex:1;height:1px;background:var(--border)"></div>
          </div>
          <button class="btn outline" style="width:100%">Continuar con Google</button>
          <div style="text-align:center;margin-top:20px;font-size:12px;color:var(--text-muted)">
            ¿Sin cuenta? <a href="#" style="color:var(--accent)">Crear una</a>
          </div>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-c">/* Card de 380px con logo + 2 campos + CTA full-width + divider + OAuth. */</span>`,
    })}

    <h3 class="sub">Signup</h3>
    ${RB.demo({
      stage: `
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3);padding:32px;width:100%;max-width:380px">
          <h4 style="margin:0 0 4px;font-size:20px;font-family:'Space Grotesk';font-weight:600">Crea tu cuenta</h4>
          <p style="margin:0 0 20px;font-size:13px;color:var(--text-muted)">Empieza gratis, sin tarjeta de crédito.</p>
          <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px">
            <div class="field" style="max-width:none"><label>Nombre completo</label><input class="input" /></div>
            <div class="field" style="max-width:none"><label>Email de trabajo</label><input class="input" type="email" /></div>
            <div class="field" style="max-width:none"><label>Contraseña</label><input class="input" type="password" /><span class="hint">Mínimo 8 caracteres con 1 número</span></div>
          </div>
          <label class="check" style="margin-bottom:16px;font-size:12px">
            <input type="checkbox">
            <span class="box">${RB.ic("check", 10)}</span>
            <span>Acepto los <a href="#" style="color:var(--accent)">términos</a> y la <a href="#" style="color:var(--accent)">política de privacidad</a></span>
          </label>
          <button class="btn" style="width:100%">Crear cuenta</button>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-c">/* Signup: 3 campos + checkbox de términos + CTA. */</span>`,
    })}

    <h3 class="sub">Contacto</h3>
    ${RB.demo({
      stage: `
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3);padding:32px;width:100%;max-width:520px">
          <h4 style="margin:0 0 4px;font-size:22px;font-family:'Space Grotesk';font-weight:600">Cuéntanos de tu proyecto</h4>
          <p style="margin:0 0 20px;font-size:13px;color:var(--text-muted)">Te respondemos en menos de 24h hábiles.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
            <div class="field" style="max-width:none"><label>Nombre</label><input class="input" /></div>
            <div class="field" style="max-width:none"><label>Empresa</label><input class="input" /></div>
          </div>
          <div class="field" style="max-width:none;margin-bottom:12px">
            <label>Email</label>
            <input class="input" type="email" />
          </div>
          <div class="field" style="max-width:none;margin-bottom:12px">
            <label>Tipo de proyecto</label>
            <select class="input select">
              <option>Brand identity</option>
              <option>Website / Landing</option>
              <option>Producto digital</option>
              <option>Estrategia / Consultoría</option>
              <option>Otro</option>
            </select>
          </div>
          <div class="field" style="max-width:none;margin-bottom:16px">
            <label>Presupuesto aproximado</label>
            <div class="input-group">
              <span class="addon">$</span>
              <input class="input" placeholder="15,000" />
              <span class="addon">USD</span>
            </div>
          </div>
          <div class="field" style="max-width:none;margin-bottom:16px">
            <label>Cuéntanos más</label>
            <textarea class="input" rows="4" placeholder="Objetivos, timing, referencias…"></textarea>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:11px;color:var(--text-dim);font-family:ui-monospace,monospace">ENVIAR TOMA ~30s</span>
            <button class="btn">Enviar consulta ${RB.ic("arrowUR", 14)}</button>
          </div>
        </div>
      `,
      opts: { left: true },
      code: `<span class="tk-c">/* Form compuesto: grid 2-col en nombre/empresa, campo con prefix/suffix para budget, textarea al final. */</span>`,
    })}
  </section>
`;

/* ============ SCREEN: LOGIN ============ */
RB.pages["screen-login"] = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Pantalla completa de login. Split 50/50: visual de marca a la izquierda, formulario a la derecha. Funciona en light y dark.")}
    <div class="screen-preview">
      <div class="chrome">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <span class="url">rumbo.la/login</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;min-height:560px">
        <!-- Visual side -->
        <div style="background:var(--rb-ink);color:#fff;padding:48px;display:flex;flex-direction:column;position:relative;overflow:hidden">
          <svg class="sym" viewBox="0 0 800 800" style="position:absolute;right:-80px;top:40%;transform:translateY(-50%);width:520px;height:520px;color:rgba(71,235,235,.08)"><use href="#rb-sym"/></svg>
          <div style="display:flex;align-items:center;gap:10px;position:relative;z-index:2">
            <svg width="28" height="28" viewBox="0 0 800 800" style="color:#fff"><use href="#rb-sym"/></svg>
            <span style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:22px;letter-spacing:-.02em">rumbo<span style="color:var(--rb-cyan)">.</span></span>
          </div>
          <div style="margin-top:auto;position:relative;z-index:2">
            <div style="font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.2em;color:rgba(255,255,255,.4);text-transform:uppercase;margin-bottom:12px">Manifiesto · 01</div>
            <div style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:44px;letter-spacing:-.025em;line-height:1;margin-bottom:16px">Los ríos no avanzan en <em style="color:var(--rb-cyan)">línea recta</em>.</div>
            <div style="color:rgba(255,255,255,.6);font-size:13px;max-width:360px">Serpentean, eligen su cauce, encuentran el mar.</div>
          </div>
        </div>
        <!-- Form side -->
        <div style="background:var(--surface);padding:48px;display:flex;flex-direction:column;justify-content:center">
          <div style="max-width:320px;width:100%;margin:0 auto">
            <h3 style="margin:0 0 6px;font-size:24px;font-family:'Dx Grafik';font-weight:900;font-style:italic;letter-spacing:-.02em">Bienvenido de vuelta.</h3>
            <p style="margin:0 0 32px;font-size:14px;color:var(--text-muted)">Ingresa para continuar donde lo dejaste.</p>
            <div class="field" style="max-width:none;margin-bottom:12px"><label>Email</label><input class="input" type="email" value="ana@rumbo.la" /></div>
            <div class="field" style="max-width:none;margin-bottom:20px">
              <div style="display:flex;justify-content:space-between;align-items:center"><label>Contraseña</label><a href="#" style="font-size:11px;color:var(--text-muted)">¿Olvidaste?</a></div>
              <input class="input" type="password" value="••••••••••" />
            </div>
            <button class="btn" style="width:100%">Ingresar</button>
            <div style="display:flex;align-items:center;gap:10px;margin:20px 0;color:var(--text-dim);font-size:10px;letter-spacing:.12em;text-transform:uppercase;font-family:ui-monospace,monospace">
              <div style="flex:1;height:1px;background:var(--border)"></div>o<div style="flex:1;height:1px;background:var(--border)"></div>
            </div>
            <button class="btn outline" style="width:100%">Continuar con Google</button>
            <div style="text-align:center;margin-top:28px;font-size:12px;color:var(--text-muted)">¿Sin cuenta? <a href="#" style="color:var(--accent)">Crear una</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

/* ============ SCREEN: DASHBOARD ============ */
RB.pages["screen-dashboard"] = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Dashboard de producto con sidebar, topbar y grid de métricas. Usa la misma gramática del resto del sistema — nada nuevo aquí, solo composición.")}
    <div class="screen-preview">
      <div class="chrome">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <span class="url">app.rumbo.la/dashboard</span>
      </div>
      <div style="display:grid;grid-template-columns:220px 1fr;min-height:640px;background:var(--bg)">
        <!-- Sidebar -->
        <aside style="background:var(--bg-elev);border-right:1px solid var(--border);padding:20px 12px;display:flex;flex-direction:column;gap:2px">
          <div style="display:flex;align-items:center;gap:8px;padding:4px 8px 16px;border-bottom:1px solid var(--border);margin-bottom:12px">
            <svg width="22" height="22" viewBox="0 0 800 800" style="color:var(--accent)"><use href="#rb-sym"/></svg>
            <span style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:18px;letter-spacing:-.02em">rumbo<span style="color:var(--accent)">.</span></span>
          </div>
          ${[
            ["Dashboard", true, "trend"],
            ["Proyectos", false, "inbox"],
            ["Clientes", false, "user"],
            ["Bitácora", false, "star"],
            ["Reportes", false, "info"],
          ].map(([lab, active, ic]) => `
            <a href="#" style="display:flex;align-items:center;gap:10px;padding:8px 10px;font-size:13px;color:${active?'var(--text)':'var(--text-muted)'};${active?'background:var(--accent-soft);box-shadow:inset 2px 0 0 var(--accent);':''}border-radius:4px">
              ${RB.ic(ic, 14)} ${lab}
            </a>
          `).join("")}
          <div style="margin-top:auto;padding:12px 10px;border-top:1px solid var(--border);display:flex;align-items:center;gap:10px">
            <span class="avatar sm">AR</span>
            <div style="flex:1;min-width:0">
              <div style="font-size:12px;font-weight:500;color:var(--text)">Ana Ruiz</div>
              <div style="font-size:11px;color:var(--text-dim);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">ana@rumbo.la</div>
            </div>
            ${RB.ic("gear", 14)}
          </div>
        </aside>
        <!-- Main -->
        <div style="display:flex;flex-direction:column;overflow:hidden">
          <!-- Topbar -->
          <div style="display:flex;align-items:center;gap:12px;padding:14px 24px;border-bottom:1px solid var(--border);background:var(--bg-elev)">
            <div class="breadcrumbs" style="font-family:ui-monospace,monospace;font-size:11px"><a>Home</a><span class="sep">/</span><b>Dashboard</b></div>
            <div style="flex:1"></div>
            <div class="input-group" style="max-width:240px;height:32px">
              <span class="addon" style="padding:0 10px">${RB.ic("search", 12)}</span>
              <input class="input" placeholder="Buscar…" style="padding:6px 10px 6px 0;font-size:12px" />
            </div>
            <button class="btn sm">${RB.ic("plus", 12)} Nuevo proyecto</button>
            <button class="btn sm ghost icon">${RB.ic("bell", 14)}</button>
          </div>

          <!-- Content -->
          <div style="padding:24px;overflow:auto">
            <!-- Title -->
            <div style="display:flex;justify-content:space-between;align-items:end;margin-bottom:20px">
              <div>
                <div style="font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.18em;color:var(--text-dim);text-transform:uppercase;margin-bottom:4px">Visión general</div>
                <h2 style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:36px;letter-spacing:-.02em;margin:0;line-height:1">Buenos días, Ana.</h2>
              </div>
              <div class="segmented"><button aria-pressed="false">Día</button><button aria-pressed="true">Semana</button><button aria-pressed="false">Mes</button></div>
            </div>

            <!-- Stats -->
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px">
              ${[
                ["Proyectos activos","12","+2 esta semana","success"],
                ["Sesiones","47","+18%","success"],
                ["Clientes","8","= igual","muted"],
                ["Facturado","$24.8k","-5%","danger"],
              ].map(([l,n,d,tone]) => `
                <div style="padding:16px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-2)">
                  <div style="font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.15em;color:var(--text-dim);text-transform:uppercase">${l}</div>
                  <div style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:32px;letter-spacing:-.025em;margin-top:6px;line-height:1">${n}</div>
                  <div style="font-size:11px;margin-top:4px;color:${tone==='success'?'var(--success)':tone==='danger'?'var(--danger)':'var(--text-dim)'}">${d}</div>
                </div>
              `).join("")}
            </div>

            <!-- Chart + list -->
            <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:12px;margin-bottom:20px">
              <div style="padding:20px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3);min-height:220px">
                <div style="display:flex;justify-content:space-between;margin-bottom:12px">
                  <div>
                    <h4 style="margin:0;font-size:14px;font-weight:600">Sesiones por día</h4>
                    <div style="font-size:11px;color:var(--text-muted);margin-top:2px">Última semana</div>
                  </div>
                  <span class="badge dot success">Tendencia positiva</span>
                </div>
                <svg viewBox="0 0 400 120" style="width:100%;height:140px">
                  <polyline points="0,80 60,70 120,50 180,55 240,30 300,40 360,20 400,15" fill="none" stroke="var(--accent)" stroke-width="2"/>
                  <polyline points="0,80 60,70 120,50 180,55 240,30 300,40 360,20 400,15 400,120 0,120" fill="url(#ch)" opacity=".3"/>
                  <defs><linearGradient id="ch" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#382EDC"/><stop offset="1" stop-color="#382EDC" stop-opacity="0"/></linearGradient></defs>
                  ${[0,60,120,180,240,300,360].map((x,i)=>`<circle cx="${x}" cy="${[80,70,50,55,30,40,20][i]}" r="3" fill="var(--bg)" stroke="var(--accent)" stroke-width="1.5"/>`).join("")}
                </svg>
                <div style="display:flex;justify-content:space-between;font-family:ui-monospace,monospace;font-size:10px;color:var(--text-dim);margin-top:8px;letter-spacing:.08em">
                  <span>LUN</span><span>MAR</span><span>MIÉ</span><span>JUE</span><span>VIE</span><span>SÁB</span><span>DOM</span>
                </div>
              </div>
              <div style="padding:20px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3)">
                <h4 style="margin:0 0 12px;font-size:14px;font-weight:600">Próximas entregas</h4>
                ${[
                  ["Norte · Brand system","Mañana","accent"],
                  ["Verso · Website V2","Vie 26","warn"],
                  ["Ruta · App scoping","Mar 30","muted"],
                  ["Mar · Estrategia Q2","Abr 3","muted"],
                ].map(([t,d,tone]) => `
                  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
                    <span style="font-size:13px">${t}</span>
                    <span class="badge ${tone==='accent'?'accent':tone==='warn'?'warn':''}">${d}</span>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Table -->
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-3);overflow:hidden">
              <div style="display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid var(--border)">
                <h4 style="margin:0;font-size:14px;font-weight:600">Proyectos recientes</h4>
                <a href="#" style="font-size:12px;color:var(--accent)">Ver todos ${RB.ic("arrowUR", 10)}</a>
              </div>
              <table class="tbl" style="max-width:none">
                <thead><tr><th>Cliente</th><th>Proyecto</th><th>Estado</th><th>Presupuesto</th><th style="width:40px"></th></tr></thead>
                <tbody>
                  <tr><td><div class="user"><span class="avatar sm">AR</span> Ana Ruiz</div></td><td>Rebranding Norte</td><td><span class="badge dot success">Activo</span></td><td>$12,400</td><td>${RB.ic("chevR", 14)}</td></tr>
                  <tr><td><div class="user"><span class="avatar sm" style="background:linear-gradient(135deg,var(--rb-cyan),var(--rb-blue))">JM</span> J. Mendoza</div></td><td>Website Verso</td><td><span class="badge dot warn">En revisión</span></td><td>$8,200</td><td>${RB.ic("chevR", 14)}</td></tr>
                  <tr><td><div class="user"><span class="avatar sm" style="background:linear-gradient(135deg,var(--rb-orange),var(--rb-purple))">LC</span> Lu Castro</div></td><td>App Ruta</td><td><span class="badge dot accent">Scoping</span></td><td>$24,000</td><td>${RB.ic("chevR", 14)}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

/* ============ SCREEN: PRICING PAGE ============ */
RB.pages["screen-pricing"] = (route) => `
  <section class="page is-visible">
    ${RB.sectionHeader(route, "Landing de pricing full. Hero editorial + 3 planes + toggle billing + FAQ + CTA final. Combina hero, pricing y forms sin introducir nada nuevo.")}
    <div class="screen-preview">
      <div class="chrome">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <span class="url">rumbo.la/pricing</span>
      </div>
      <div style="background:var(--bg);padding:0">
        <!-- Nav -->
        <div style="display:flex;align-items:center;gap:24px;padding:20px 40px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:8px">
            <svg width="24" height="24" viewBox="0 0 800 800" style="color:var(--accent)"><use href="#rb-sym"/></svg>
            <span style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:20px;letter-spacing:-.02em">rumbo<span style="color:var(--accent)">.</span></span>
          </div>
          <nav style="display:flex;gap:4px;margin-left:20px">
            <a style="padding:6px 12px;font-size:13px;color:var(--text-muted)">Producto</a>
            <a style="padding:6px 12px;font-size:13px;color:var(--text-muted)">Casos</a>
            <a style="padding:6px 12px;font-size:13px;color:var(--text)">Pricing</a>
            <a style="padding:6px 12px;font-size:13px;color:var(--text-muted)">Bitácora</a>
          </nav>
          <div style="flex:1"></div>
          <a style="font-size:13px;color:var(--text-muted)">Ingresar</a>
          <button class="btn sm">Empezar gratis</button>
        </div>

        <!-- Hero -->
        <div style="padding:80px 40px 40px;text-align:center;max-width:800px;margin:0 auto">
          <div class="eyebrow" style="justify-content:center"><b>Planes</b> · Simple pricing · Cancela cuando quieras</div>
          <h2 style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:64px;letter-spacing:-.03em;line-height:.95;margin:0 0 20px">Precios para cada <em style="color:var(--accent)">rumbo</em>.</h2>
          <p style="color:var(--text-muted);font-size:17px;max-width:520px;margin:0 auto 32px">Desde el explorador solitario hasta el capitán con flota: hay un plan alineado con tu manera de navegar.</p>
          <div class="segmented" style="display:inline-flex"><button aria-pressed="true">Mensual</button><button aria-pressed="false">Anual · <span style="color:var(--success)">ahorra 20%</span></button></div>
        </div>

        <!-- Plans -->
        <div style="padding:40px 40px 80px;max-width:1080px;margin:0 auto">
          <div class="price-grid">
            <div class="price">
              <div><div class="p-tier">Explorador</div><p class="p-desc">Freelancers y proyectos puntuales.</p></div>
              <div class="p-price"><span class="big">$0</span><span class="per">/mes</span></div>
              <ul><li>1 proyecto activo</li><li>3GB de almacenamiento</li><li>Tokens y temas básicos</li><li>Soporte por email</li></ul>
              <button class="btn outline">Empezar gratis</button>
            </div>
            <div class="price feat">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <div class="p-tier">Navegante</div>
                <span class="badge cyan" style="background:rgba(71,235,235,.2);color:var(--rb-cyan);border-color:rgba(71,235,235,.4)">Más popular</span>
              </div>
              <p class="p-desc">Estudios y equipos pequeños.</p>
              <div class="p-price"><span class="big">$29</span><span class="per">/mes · por usuario</span></div>
              <ul><li>Proyectos ilimitados</li><li>100GB de almacenamiento</li><li>Temas custom + export Tailwind</li><li>Colaboración tiempo real</li><li>Roles y permisos</li><li>Soporte prioritario</li></ul>
              <button class="btn cyan">Probar 14 días</button>
            </div>
            <div class="price">
              <div><div class="p-tier">Capitán</div><p class="p-desc">Estudios grandes y agencias.</p></div>
              <div class="p-price"><span class="big">Custom</span></div>
              <ul><li>Todo lo del plan Navegante</li><li>SSO + SAML</li><li>Almacenamiento ilimitado</li><li>SLA y onboarding dedicado</li><li>Cuenta manager asignado</li></ul>
              <button class="btn secondary">Hablar con ventas</button>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div style="padding:40px;max-width:720px;margin:0 auto">
          <h3 style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:32px;letter-spacing:-.02em;text-align:center;margin:0 0 32px">preguntas frecuentes</h3>
          ${[
            ["¿Puedo cambiar de plan en cualquier momento?", "Sí. Puedes subir, bajar o cancelar desde tu cuenta, sin penalidades. El cambio se prorratea en la siguiente facturación."],
            ["¿Qué pasa con mis datos si cancelo?", "Mantenemos tus proyectos disponibles en modo read-only por 90 días. Puedes reactivar o exportar en cualquier momento."],
            ["¿Hay descuentos para equipos grandes?", "Desde 10 usuarios aplicamos un descuento por volumen. Agenda una llamada con el equipo de ventas."],
            ["¿Aceptan pagos en moneda local?", "Sí — USD, EUR, MXN y COP. La factura siempre llega con el tipo de cambio aplicado del día."],
          ].map(([q,a],i) => `
            <details ${i===0?'open':''} style="padding:16px 0;border-bottom:1px solid var(--border)">
              <summary style="cursor:pointer;font-size:15px;font-weight:600;display:flex;justify-content:space-between;align-items:center;list-style:none">${q}<span style="color:var(--text-dim);font-family:ui-monospace,monospace">+</span></summary>
              <div style="color:var(--text-muted);font-size:14px;margin-top:12px;line-height:1.6">${a}</div>
            </details>
          `).join("")}
        </div>

        <!-- CTA -->
        <div style="padding:60px 40px 80px;text-align:center">
          <div style="background:var(--rb-ink);color:#fff;border-radius:var(--radius-4);padding:60px 40px;max-width:800px;margin:0 auto;position:relative;overflow:hidden">
            <svg viewBox="0 0 800 800" style="position:absolute;right:-100px;top:-80px;width:400px;height:400px;color:rgba(71,235,235,.08)"><use href="#rb-sym"/></svg>
            <div style="position:relative;z-index:1">
              <h3 style="font-family:'Dx Grafik';font-weight:900;font-style:italic;font-size:40px;letter-spacing:-.025em;margin:0 0 12px">¿Listo para encontrar tu <em style="color:var(--rb-cyan)">rumbo</em>?</h3>
              <p style="color:rgba(255,255,255,.7);font-size:15px;max-width:480px;margin:0 auto 24px">Empieza gratis, sin tarjeta de crédito. Upgrade cuando lo necesites.</p>
              <button class="btn cyan lg">Crear mi cuenta ${RB.ic("arrowUR", 14)}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
