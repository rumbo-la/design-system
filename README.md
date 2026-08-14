# Rumbo Design System

Tokens, componentes y documentación viva de [rumbo.la](https://rumbo.la). Un solo lenguaje visual para marketing y producto, en dark (primario) y light.

```bash
npm run dev     # sirve el proyecto en http://localhost:8471
npm run build   # regenera dist/ desde tokens/ y assets/
npm run check   # audita consistencia entre manual, docs y tokens
```

`npm run dev` abre la portada (`index.html`) con enlaces a las tres superficies. No hace falta `npm install`: el sistema no tiene dependencias. Tiene que servirse por HTTP — con `file://` las galerías de íconos fallan por CORS.

## Qué hay aquí

| Ruta | Qué es |
|---|---|
| `tokens/tokens.json` | **Fuente de verdad.** Todo lo demás se genera desde aquí |
| `src/` | Fuente de la librería escrita a mano: componentes CSS, comportamiento JS y `@font-face` |
| `dist/` | **Todo generado** — nunca editar a mano (`npm run build` lo reconstruye) |
| `scripts/` | Build de tokens e íconos, y auditoría de consistencia |
| `assets/` | Fuentes, logos, íconos fuente (`icons/` marca, `icons-ui/` UI) y posts |
| `examples/kitchen-sink.html` | Todos los componentes usando solo `dist/` |
| `index.html` | Portada — construida con el propio sistema |
| `Rumbo Design System.html` | Sitio de documentación (35 vistas) |
| `site/` | Código del sitio de docs: router, datos y páginas (no es parte de la librería) |
| `brand-manual.html` | Manual de marca (15 capítulos) |
| `PRD.md` · `CHANGELOG.md` | Requisitos e historial de versiones |
| `docs/decisions/` | Actas de decisión (valores canónicos) |

## Cómo consumirlo

```html
<link rel="stylesheet" href="dist/fonts.css" />
<link rel="stylesheet" href="dist/rumbo.css" />    <!-- tokens -->
<link rel="stylesheet" href="dist/rumbo-ui.css" /> <!-- componentes -->
<script src="dist/rumbo-ui.js"></script>           <!-- modal, menu, toast… -->
```

Con Tailwind: `presets: [require('./dist/tailwind.preset.js')]`.

### Temas

Dark es el tema primario. El tema se controla con `data-theme` en `<html>`:

```html
<html data-theme="dark">  <!-- o "light" -->
```

Los componentes **solo** referencian tokens semánticos (`--bg`, `--surface`, `--text`, `--accent`), nunca primitivos de marca. Por eso cambiar de tema no requiere tocar ningún componente.

### Íconos

Dos sets con propósitos distintos, ambos en caja de 24×24 y heredando `currentColor`:

| Set | Sprite | Prefijo | Para qué |
|---|---|---|---|
| **UI** (19) | `dist/icons-ui.svg` | `#rb-ui-*` | Funcionales: los usan botones, alertas, tablas y menús |
| **Marca** (26) | `dist/icons/sprite.svg` | `#rb-icon-*` | Ilustrativos: servicios y pilares del manual |

```html
<svg viewBox="0 0 24 24"><use href="#rb-ui-check"/></svg>     <!-- UI -->
<svg viewBox="0 0 24 24"><use href="#rb-icon-product"/></svg>  <!-- marca -->
```

Inyecta el sprite que necesites una vez en la página. Catálogos en `dist/icons-ui.json` y `dist/icons/index.json`, y en la vista *Iconography* de la documentación.

Para **añadir un ícono de UI**: deja el SVG en `assets/icons-ui/<nombre>.svg` (24×24, `stroke="currentColor"`) y corre `npm run build:icons`.

### Componentes con comportamiento

`dist/rumbo-ui.js` se auto-inicializa y expone `window.RumboUI`:

```js
RumboUI.openModal('#dlg');            // foco atrapado, Esc, retorno de foco
RumboUI.openDrawer('#panel');
RumboUI.toast('Sesión guardada');     // variantes: success|info|warn|danger
RumboUI.init(scope);                  // re-inicializa en contenido inyectado
```

Por atributos, sin escribir JS:

```html
<button data-rb-open="#dlg">Abrir modal</button>
<button data-rb-drawer="#panel">Abrir panel</button>
<button data-rb-menu="#menu-1">Acciones</button>
<button data-rb-popover="#pop-1">Info</button>
<button data-rb-tip="Copiar · ⌘C">Con tooltip</button>
```

## Reglas de trabajo

1. **Nunca edites `dist/`.** Es enteramente generado. Según lo que quieras cambiar:
   - valores de diseño → `tokens/tokens.json`
   - CSS de componentes o comportamiento → `src/`
   - íconos → `assets/icons-ui/` o `assets/icons/`

   Luego `npm run build`. Si editas `dist/` por error, `npm run check` lo detecta.
2. **Un cambio de valor se hace en un solo lugar.** Si necesitas escribir un hex dos veces, falta un token.
3. **Corre `npm run check` antes de cada release.** Falla si el manual, la documentación y los tokens se contradicen.
4. **Accesibilidad AA como piso**: foco visible, operable por teclado, `prefers-reduced-motion` respetado.

## Compatibilidad

Navegadores evergreen. El CSS usa `color-mix()` y `oklab`: piso efectivo **Chrome/Edge 111+, Safari 16.2+, Firefox 113+**.

## Pendientes

- **Licencia de Dx Grafik**: es fuente comercial. Confirmar que cubre self-hosting web antes de publicar un sitio público (PRD · riesgo alto).
- Capa de framework (React/Vue/WC): se decide con el primer producto que consuma el sistema.

---

Ver [`PRD.md`](PRD.md) para requisitos y hitos, y [`CHANGELOG.md`](CHANGELOG.md) para el historial.
