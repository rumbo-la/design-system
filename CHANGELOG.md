# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.1.0/).
Versionado [semver](https://semver.org/lang/es/): **MAJOR** = breaking visual · **MINOR** = componente o token nuevo · **PATCH** = fix.

## [1.1.0] — 2026-08-13

Consolidación del manual de marca y el design system en un sistema consumible (PRD M1–M4).

### Añadido
- `tokens/tokens.json` como **fuente de verdad** en formato design-tokens.org (93 tokens).
- `scripts/build-tokens.mjs` → genera `dist/rumbo.css`, `dist/tailwind.preset.js` y `dist/tokens.js`.
- `scripts/build-icons.mjs` → parte `icons-sheet.svg` en **26 íconos** individuales + `sprite.svg` + `index.json`, normalizados a una caja de 24×24 y con trazo en `currentColor`.
- `scripts/check-consistency.mjs` → audita que manual, docs y `dist/` no contradigan los tokens (PRD métrica 4).
- `dist/rumbo-ui.css` — librería de componentes independiente del sitio de docs.
- `dist/rumbo-ui.js` — comportamiento accesible: modal con foco atrapado, tooltip por teclado, menu y popover con patrón WAI-ARIA, drawer y API de toast.
- `dist/fonts.css` — 7 cortes self-hosted (Space Grotesk ×5, Dx Grafik ×2).
- Componentes nuevos: **Menu**, **Popover**, **Drawer**; API formal de **Toast**.
- `examples/kitchen-sink.html` — prueba de que la librería es autosuficiente (RF-08).
- `assets/logo/` — 15 archivos de logo importados (símbolo, lockups, perfiles) en SVG y PNG.
- Acta de decisión de valores canónicos en `docs/decisions/`.

### Cambiado
- El sitio de documentación **consume `dist/`** en vez de duplicar tokens y CSS de componentes (−19.6 KB de duplicación).
- Los swatches, escalas y estadísticas de la doc se derivan de `tokens.json`: cambiar un token y correr el build actualiza la documentación.
- Página de Iconografía: ahora muestra los íconos generados (con nombre y copia al portapapeles) en vez de la hoja plana como imagen.
- Modal & Dialog: la demo estática se acompaña de un modal funcional.

### Corregido
- **Ink** canónico `#0A0A0B` (el manual declaraba `#000000`).
- **Paper** canónico `#F4F2ED` (el manual declaraba `#FFFFFF`); `#FFFFFF` queda como `--rb-white`.
- **Purple**: RGB corregido a `132 · 82 · 253` (el manual decía 137).
- Conteo de íconos: el sistema declaraba 28; son **26**.

### Consolidado
- **Un solo toast**: se elimina la implementación duplicada del sitio de docs; `RB.toast` queda como alias de `RumboUI.toast`. La documentación ahora muestra la API real (con variantes y duración) en vez de una que los consumidores no tienen.
- **Íconos de UI distribuidos**: los 19 íconos funcionales que usan los componentes salen del sitio de docs y pasan a `assets/icons-ui/*.svg` → `dist/icons-ui.svg`. Antes vivían dentro de `ds-data.js` y no llegaban a quien consumía el sistema.

### Decisiones
- El naranja `#FF5A36` es **color funcional** (error), no de marca.
- Dx Grafik: Black Italic para display y firma; SemiBold para titulares largos.
- Dos escalas tipográficas explícitas: marketing y producto.

## [1.0.0] — 2026-04

- Primer release del Design System: foundations, 16 componentes, patrones y 3 pantallas.
- Manual de marca v1.0 (15 capítulos).
