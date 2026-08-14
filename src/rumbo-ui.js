/* ============================================================
   Rumbo Design System · comportamiento de componentes
   RF-09 modal · RF-10 tooltip · RF-11 menu/popover · RF-12 drawer/toast
   Sin dependencias. Expone window.RumboUI.
   ============================================================ */
(function (global) {
  "use strict";

  const FOCUSABLE = [
    "a[href]", "button:not([disabled])", "input:not([disabled])",
    "select:not([disabled])", "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
  ].join(",");

  const focusable = (root) =>
    [...root.querySelectorAll(FOCUSABLE)].filter(
      (el) => el.offsetWidth || el.offsetHeight || el.getClientRects().length
    );

  /* =========================================================
     Modal — foco atrapado, Esc, click en scrim, retorno de foco
     ========================================================= */
  const openModals = [];

  function openModal(target) {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el || el.classList.contains("is-open")) return null;

    const opener = document.activeElement;
    el.classList.add("is-open");
    el.setAttribute("role", el.getAttribute("role") || "dialog");
    el.setAttribute("aria-modal", "true");
    document.body.style.overflow = "hidden";

    const first = focusable(el)[0] || el.querySelector(".rb-modal-panel");
    if (first) {
      if (!first.hasAttribute("tabindex") && !first.matches(FOCUSABLE)) first.tabIndex = -1;
      first.focus();
    }

    const onKeydown = (e) => {
      if (e.key === "Escape") { e.stopPropagation(); closeModal(el); return; }
      if (e.key !== "Tab") return;
      const items = focusable(el);
      if (!items.length) return;
      const firstEl = items[0], lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
      else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
    };

    // Mantiene el foco dentro aunque se enfoque algo de fuera (p. ej. con el ratón)
    const onFocusIn = (e) => {
      if (!el.contains(e.target)) {
        const items = focusable(el);
        if (items.length) items[0].focus();
      }
    };

    const onClick = (e) => {
      if (e.target.closest("[data-rb-close]") || e.target.classList.contains("rb-modal-scrim")) {
        closeModal(el);
      }
    };

    document.addEventListener("keydown", onKeydown, true);
    document.addEventListener("focusin", onFocusIn);
    el.addEventListener("click", onClick);

    const entry = { el, opener, onKeydown, onFocusIn, onClick };
    openModals.push(entry);
    return entry;
  }

  function closeModal(target) {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    const i = openModals.findIndex((m) => m.el === (el || (openModals.at(-1) || {}).el));
    if (i === -1) return;
    const { el: modal, opener, onKeydown, onFocusIn, onClick } = openModals[i];

    document.removeEventListener("keydown", onKeydown, true);
    document.removeEventListener("focusin", onFocusIn);
    modal.removeEventListener("click", onClick);
    modal.classList.remove("is-open");
    modal.removeAttribute("aria-modal");
    openModals.splice(i, 1);

    if (!openModals.length) document.body.style.overflow = "";
    if (opener && document.contains(opener)) opener.focus();
  }

  /* =========================================================
     Tooltip — accesible por teclado y lectores de pantalla
     Uso: <span class="rb-tip"><button …>…</button><span class="rb-tip-bubble">texto</span></span>
     o bien data-rb-tip="texto" sobre el disparador.
     ========================================================= */
  let tipSeq = 0;

  function initTooltips(scope) {
    (scope || document).querySelectorAll("[data-rb-tip]").forEach((trigger) => {
      if (trigger.dataset.rbTipReady) return;
      trigger.dataset.rbTipReady = "1";

      const wrap = document.createElement("span");
      wrap.className = "rb-tip";
      trigger.parentNode.insertBefore(wrap, trigger);
      wrap.appendChild(trigger);

      const bubble = document.createElement("span");
      bubble.className = "rb-tip-bubble";
      bubble.id = `rb-tip-${++tipSeq}`;
      bubble.setAttribute("role", "tooltip");
      bubble.textContent = trigger.dataset.rbTip;
      wrap.appendChild(bubble);

      trigger.setAttribute("aria-describedby", bubble.id);

      // Esc oculta el tooltip sin mover el foco
      trigger.addEventListener("keydown", (e) => {
        if (e.key === "Escape") bubble.style.visibility = "hidden";
      });
      trigger.addEventListener("blur", () => { bubble.style.visibility = ""; });
    });
  }

  /* =========================================================
     Menu / Dropdown — patrón WAI-ARIA de teclado
     ========================================================= */
  function initMenus(scope) {
    (scope || document).querySelectorAll("[data-rb-menu]").forEach((trigger) => {
      if (trigger.dataset.rbMenuReady) return;
      trigger.dataset.rbMenuReady = "1";

      const menu = document.querySelector(trigger.dataset.rbMenu);
      if (!menu) return;

      trigger.setAttribute("aria-haspopup", "menu");
      trigger.setAttribute("aria-expanded", "false");
      menu.setAttribute("role", "menu");
      menu.querySelectorAll("button,a").forEach((it) => {
        it.setAttribute("role", "menuitem");
        it.tabIndex = -1;
      });

      const items = () =>
        [...menu.querySelectorAll('[role="menuitem"]')].filter(
          (i) => i.getAttribute("aria-disabled") !== "true"
        );

      const open = () => {
        menu.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        const list = items();
        if (list.length) list[0].focus();
        document.addEventListener("click", onOutside, true);
      };
      const close = (refocus) => {
        if (!menu.classList.contains("is-open")) return;
        menu.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
        document.removeEventListener("click", onOutside, true);
        if (refocus) trigger.focus();
      };
      const onOutside = (e) => {
        if (!menu.contains(e.target) && !trigger.contains(e.target)) close(false);
      };

      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        menu.classList.contains("is-open") ? close(false) : open();
      });
      trigger.addEventListener("keydown", (e) => {
        if (["ArrowDown", "Enter", " "].includes(e.key)) { e.preventDefault(); open(); }
      });

      menu.addEventListener("keydown", (e) => {
        const list = items();
        const i = list.indexOf(document.activeElement);
        if (e.key === "Escape") { e.preventDefault(); close(true); }
        else if (e.key === "ArrowDown") { e.preventDefault(); list[(i + 1) % list.length].focus(); }
        else if (e.key === "ArrowUp") { e.preventDefault(); list[(i - 1 + list.length) % list.length].focus(); }
        else if (e.key === "Home") { e.preventDefault(); list[0].focus(); }
        else if (e.key === "End") { e.preventDefault(); list[list.length - 1].focus(); }
        else if (e.key === "Tab") close(false);
      });
      menu.addEventListener("click", (e) => {
        if (e.target.closest('[role="menuitem"]')) close(true);
      });

      menu.__rbClose = () => close(false);
    });
  }

  /* =========================================================
     Popover — no atrapa el foco; Esc y click-fuera lo cierran
     ========================================================= */
  function initPopovers(scope) {
    (scope || document).querySelectorAll("[data-rb-popover]").forEach((trigger) => {
      if (trigger.dataset.rbPopReady) return;
      trigger.dataset.rbPopReady = "1";

      const pop = document.querySelector(trigger.dataset.rbPopover);
      if (!pop) return;
      trigger.setAttribute("aria-expanded", "false");

      const close = (refocus) => {
        pop.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
        document.removeEventListener("click", onOutside, true);
        document.removeEventListener("keydown", onKey, true);
        if (refocus) trigger.focus();
      };
      const onOutside = (e) => {
        if (!pop.contains(e.target) && !trigger.contains(e.target)) close(false);
      };
      const onKey = (e) => { if (e.key === "Escape") close(true); };

      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        if (pop.classList.contains("is-open")) return close(false);
        pop.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        document.addEventListener("click", onOutside, true);
        document.addEventListener("keydown", onKey, true);
      });
    });
  }

  /* =========================================================
     Drawer — mismo contrato de foco que el modal
     ========================================================= */
  function openDrawer(target) {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;
    el.classList.add("is-open");
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    const opener = document.activeElement;
    const first = focusable(el)[0];
    if (first) first.focus();

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        const items = focusable(el);
        if (!items.length) return;
        const f = items[0], l = items[items.length - 1];
        if (e.shiftKey && document.activeElement === f) { e.preventDefault(); l.focus(); }
        else if (!e.shiftKey && document.activeElement === l) { e.preventDefault(); f.focus(); }
      }
    };
    const onClick = (e) => {
      if (e.target.classList.contains("rb-drawer-scrim") || e.target.closest("[data-rb-close]")) close();
    };
    function close() {
      el.classList.remove("is-open");
      el.removeAttribute("aria-modal");
      document.removeEventListener("keydown", onKey, true);
      el.removeEventListener("click", onClick);
      if (opener && document.contains(opener)) opener.focus();
    }
    document.addEventListener("keydown", onKey, true);
    el.addEventListener("click", onClick);
    el.__rbClose = close;
  }

  const closeDrawer = (target) => {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (el && el.__rbClose) el.__rbClose();
  };

  /* =========================================================
     Toast — cola, variantes, duración, descarte
     ========================================================= */
  const ICONS = {
    success: '<polyline points="20 6 9 17 4 12"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    warn: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
    danger: '<circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/>',
  };

  function dock() {
    let d = document.querySelector(".rb-toast-dock");
    if (!d) {
      d = document.createElement("div");
      d.className = "rb-toast-dock";
      d.setAttribute("role", "status");
      d.setAttribute("aria-live", "polite");
      document.body.appendChild(d);
    }
    return d;
  }

  function toast(message, opts = {}) {
    const { variant = "success", duration = 3200 } = typeof opts === "string" ? { variant: opts } : opts;
    const el = document.createElement("div");
    el.className = `toast ${variant}`;
    el.innerHTML =
      `<svg class="ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[variant] || ICONS.info}</svg>` +
      `<span></span>` +
      `<button class="close" aria-label="Cerrar aviso"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button>`;
    el.querySelector("span").textContent = message;

    const remove = () => {
      el.classList.add("is-leaving");
      setTimeout(() => el.remove(), 220);
    };
    el.querySelector(".close").addEventListener("click", remove);
    dock().appendChild(el);
    if (duration > 0) setTimeout(remove, duration);
    return { dismiss: remove };
  }

  /* =========================================================
     Auto-init + delegación de atributos data-*
     ========================================================= */
  function init(scope) {
    initTooltips(scope);
    initMenus(scope);
    initPopovers(scope);
  }

  document.addEventListener("click", (e) => {
    const open = e.target.closest("[data-rb-open]");
    if (open) { e.preventDefault(); openModal(open.dataset.rbOpen); return; }
    const drawer = e.target.closest("[data-rb-drawer]");
    if (drawer) { e.preventDefault(); openDrawer(drawer.dataset.rbDrawer); }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => init());
  } else {
    init();
  }

  global.RumboUI = {
    init, openModal, closeModal, openDrawer, closeDrawer, toast,
    initTooltips, initMenus, initPopovers,
  };
})(window);
