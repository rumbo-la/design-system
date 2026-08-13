/* ============================================================
   Rumbo DS — router, theme toggle, command menu, copy util
   ============================================================ */

(function () {
  const wrap = document.getElementById("page-wrap");
  const crumb = document.getElementById("crumb-page");
  const sb = document.getElementById("sidebar");

  /* ---------- Router ---------- */
  const pages = Object.assign({}, RB.pages || {});
  function route() {
    const hash = (location.hash || "#/home").replace(/^#\//, "");
    const [r] = hash.split("/");
    const def = RB.routes.find(x => x.r === r) || RB.routes[0];
    crumb.textContent = def.t;
    document.querySelectorAll(".sb-list a").forEach(a => {
      a.classList.toggle("is-active", a.dataset.route === def.r);
    });
    const fn = pages[def.r] || pages.home;
    wrap.innerHTML = fn ? fn(def) : `<section class="page is-visible"><h1 class="display">${def.t}</h1><p class="lead">Coming soon.</p></section>`;
    // Hooks por página (galería de íconos generada)
    if (def.r === "iconography" && RB.mountIconGallery) RB.mountIconGallery();
    if (def.r === "home") {
      fetch("dist/icons/index.json").then(r => r.json())
        .then(list => { const el = document.getElementById("stat-icons"); if (el) el.textContent = list.length; })
        .catch(() => {});
    }
    // Re-inicializa componentes con comportamiento en el contenido inyectado
    if (window.RumboUI) RumboUI.init(wrap);
    // Scroll top
    window.scrollTo({ top: 0, behavior: "instant" });
    if (sb.classList.contains("is-open")) sb.classList.remove("is-open");
    // Persist
    try { localStorage.setItem("rb-ds-route", def.r); } catch (e) {}
  }
  window.addEventListener("hashchange", route);
  // Initial restore
  if (!location.hash) {
    let saved = null;
    try { saved = localStorage.getItem("rb-ds-route"); } catch (e) {}
    location.hash = "#/" + (saved || "home");
  } else {
    route();
  }

  /* ---------- Theme toggle ---------- */
  const savedTheme = (() => { try { return localStorage.getItem("rb-ds-theme"); } catch (e) { return null; } })();
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  syncThemeBtns();
  document.querySelectorAll("[data-theme-btn]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.documentElement.dataset.theme = btn.dataset.themeBtn;
      try { localStorage.setItem("rb-ds-theme", btn.dataset.themeBtn); } catch (e) {}
      syncThemeBtns();
    });
  });
  function syncThemeBtns() {
    const cur = document.documentElement.dataset.theme;
    document.querySelectorAll("[data-theme-btn]").forEach(b => b.setAttribute("aria-pressed", b.dataset.themeBtn === cur));
  }

  /* ---------- Copy util ---------- */
  RB.copy = (text, label = "Copiado") => {
    const ta = document.getElementById("copybuf");
    ta.value = text;
    ta.select();
    try {
      navigator.clipboard.writeText(text);
    } catch (e) {
      document.execCommand("copy");
    }
    ta.blur();
    RB.toast(label + " · " + (text.length > 30 ? text.slice(0, 30) + "…" : text));
  };

  /* ---------- Toast ---------- */
  const dock = document.getElementById("toast-dock");
  RB.toast = (msg) => {
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>${msg}</span>`;
    dock.appendChild(el);
    requestAnimationFrame(() => {
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    });
    setTimeout(() => {
      el.style.opacity = "0";
      el.style.transform = "translateY(8px)";
      setTimeout(() => el.remove(), 300);
    }, 1800);
  };

  /* ---------- Swatch click-to-copy ---------- */
  document.addEventListener("click", (e) => {
    const sw = e.target.closest("[data-copy]");
    if (!sw) return;
    RB.copy(sw.dataset.copy, "Token copiado");
    sw.classList.add("is-copied");
    setTimeout(() => sw.classList.remove("is-copied"), 900);
  });

  /* ---------- Command menu ---------- */
  const cmdk = document.getElementById("cmdk");
  const cmdInput = document.getElementById("cmdk-input");
  const cmdResults = document.getElementById("cmdk-results");
  let cmdIndex = 0;

  window.openCmdk = () => {
    cmdk.classList.add("is-open");
    cmdInput.value = "";
    renderCmd("");
    setTimeout(() => cmdInput.focus(), 10);
  };
  window.closeCmdk = () => cmdk.classList.remove("is-open");
  cmdk.addEventListener("click", (e) => { if (e.target === cmdk) closeCmdk(); });

  function renderCmd(q) {
    const ql = q.trim().toLowerCase();
    const matches = RB.routes.filter(r => !ql || r.t.toLowerCase().includes(ql) || r.g.toLowerCase().includes(ql) || r.r.includes(ql));
    cmdIndex = 0;
    cmdResults.innerHTML = matches.length
      ? matches.map((r, i) => `<div class="res ${i === 0 ? "active" : ""}" data-route="${r.r}">${r.t}<span class="cat">${r.g}</span></div>`).join("")
      : `<div class="res" style="opacity:.5">Sin resultados</div>`;
  }
  cmdInput && cmdInput.addEventListener("input", (e) => renderCmd(e.target.value));
  cmdResults.addEventListener("click", (e) => {
    const r = e.target.closest(".res[data-route]");
    if (!r) return;
    location.hash = "#/" + r.dataset.route;
    closeCmdk();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openCmdk(); return; }
    if (e.key === "Escape" && cmdk.classList.contains("is-open")) { closeCmdk(); return; }
    if (!cmdk.classList.contains("is-open")) return;
    const items = cmdResults.querySelectorAll(".res[data-route]");
    if (!items.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); cmdIndex = Math.min(cmdIndex + 1, items.length - 1); items.forEach((x, i) => x.classList.toggle("active", i === cmdIndex)); items[cmdIndex].scrollIntoView({ block: "nearest" }); }
    if (e.key === "ArrowUp")   { e.preventDefault(); cmdIndex = Math.max(cmdIndex - 1, 0); items.forEach((x, i) => x.classList.toggle("active", i === cmdIndex)); items[cmdIndex].scrollIntoView({ block: "nearest" }); }
    if (e.key === "Enter")     { e.preventDefault(); const r = items[cmdIndex].dataset.route; location.hash = "#/" + r; closeCmdk(); }
  });

  /* ---------- Demo playground: prop controls update stage via [data-stage-target] ---------- */
  document.addEventListener("click", (e) => {
    const tog = e.target.closest("[data-tog]");
    if (tog) {
      const key = tog.dataset.tog;
      const val = tog.dataset.val;
      const seg = tog.closest("[data-seg]");
      if (seg) seg.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b === tog));
      const target = tog.closest(".demo").querySelector("[data-stage]");
      if (!target) return;
      target.dataset[key] = val;
      RB.applyStage && RB.applyStage(target);
    }
  });

  // Export-panel tab switching
  document.addEventListener("click", (e) => {
    const tb = e.target.closest(".export-tabs button[data-export-tab]");
    if (!tb) return;
    const panel = tb.closest(".export").querySelector(".export-panel");
    tb.parentElement.querySelectorAll("button").forEach(b => b.setAttribute("aria-selected", b === tb));
    panel.innerHTML = RB.exports[tb.dataset.exportTab]();
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-top";
    copyBtn.textContent = "Copy";
    copyBtn.onclick = () => RB.copy(panel.textContent.replace(/^Copy/, "").trim(), tb.dataset.exportTab + " copiado");
    panel.prepend(copyBtn);
  });
})();
