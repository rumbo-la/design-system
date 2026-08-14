# PRD · Rumbo Design System

| Campo | Valor |
|---|---|
| Documento | PRD · v1.0 |
| Estado | Borrador para revisión |
| Fecha | 13 · Ago · 2026 |
| Base | Manual de marca v1.0 · Design System v1.0 |
| Owner | Por asignar |

Requisitos para convertir el manual de marca y el design system v1 en un sistema consumible: una fuente de verdad de tokens, una librería de componentes accesible y documentación viva versionada.

---

## 01 · Contexto — problema y oportunidad

**Problema.** Rumbo tiene dos artefactos maduros — un manual de marca de 15 capítulos y un design system v1 con 33 vistas — pero viven como documentos HTML paralelos: comparten valores a mano, ya divergen en 6 puntos concretos, y ningún producto puede consumirlos como código. Cada pieza nueva (web, app, post) rehace decisiones ya tomadas.

**Oportunidad.** No existe todavía código de producto: el costo de establecer la fuente de verdad hoy es mínimo y evita toda la deuda posterior. El DS ya prototipó los tres formatos de salida (CSS variables, preset Tailwind, JSON design-tokens) — falta convertirlos de texto de ejemplo en artefactos generados y versionados.

### Usuarios del sistema

| Usuario | Necesita | Hoy |
|---|---|---|
| Devs de producto | Tokens y componentes instalables, accesibles, con ejemplos copiables | Copian del HTML a mano |
| Diseño / marketing | Reglas de marca inequívocas: paleta, ratios, tipografía, usos de logo | Manual correcto pero con erratas y valores en conflicto con el DS |
| Fundadores | Consistencia de marca en cada superficie sin revisar pieza por pieza | Revisión manual |

---

## 02 · Alcance — objetivos y no-objetivos

### Objetivos v1.x

- Una sola fuente de verdad (`tokens.json`) que genera CSS, Tailwind y docs
- Cero contradicciones entre manual y DS
- Librería de componentes CSS accesible (AA) y versionada
- Pipeline de íconos y tipografía empaquetada
- Documentación viva con changelog semver

### No-objetivos v1.x

- Capa de framework (React/Vue/Web Components) — se decide con el primer producto real
- Publicación en npm público
- Sincronización con Figma (evaluar en v2)
- Rediseñar componentes o paleta — se consolida lo que existe
- Soporte de navegadores legacy

---

## 03 · Requisitos funcionales

### Tokens

| ID | Prioridad | Requisito | Criterio de aceptación |
|---|---|---|---|
| RF-01 | P0 | Fuente de verdad `tokens.json` (formato design-tokens.org) con color, espaciado, radios, sombras, tipografía y motion | Un build regenera `rumbo.css` y `tailwind.preset.js` sin edición manual; los tres artefactos siempre coinciden |
| RF-02 | P0 | Resolución de valores canónicos: ink `#0A0A0B`, paper `#F4F2ED`, white como token aparte, purple RGB 132·82·253, estatus del naranja `#FF5A36`, roles de Dx Grafik SemiBold vs Black Italic | Acta de decisión registrada; manual y DS actualizados; cero valores en conflicto (auditable con script de diff) |
| RF-03 | P0 | Arquitectura de 3 capas: primitivos → semánticos → componente; temas dark (default) y light redefinen solo la capa semántica | Cambiar `data-theme` no requiere tocar ningún componente; los componentes solo referencian tokens semánticos o de componente |
| RF-04 | P1 | Dos escalas tipográficas documentadas: marketing (Display 96 · H1 56 · Body 20/16) y producto (base 14, xs→6xl) | Ambas escalas viven en `tokens.json` con contexto de uso explícito |

### Tipografía e íconos

| ID | Prioridad | Requisito | Criterio de aceptación |
|---|---|---|---|
| RF-05 | P0 | Paquete tipográfico self-hosted: 7 cortes (Space Grotesk ×5, Dx Grafik ×2) con `@font-face` listos, condicionado a licencia web de Dx Grafik | Un `<link>` + una hoja de estilos cargan toda la tipografía; licencia verificada y archivada |
| RF-06 | P1 | Pipeline de íconos: partir `icons-sheet.svg` en 28 SVGs individuales nombrados + sprite, trazo en `currentColor` | Cada ícono es referenciable por nombre (`<use href="#icono">`); hereda color del contexto; optimizado (SVGO) |
| RF-07 | P0 | Assets de logo importados al repo (`assets/logo/`: símbolo, lockups y variantes en SVG + PNG) desde el proyecto de Claude Design | Todas las variantes del capítulo 04 del manual existen como archivo local |

### Componentes

| ID | Prioridad | Requisito | Criterio de aceptación |
|---|---|---|---|
| RF-08 | P0 | Formalizar los 16 componentes existentes como librería CSS (`rumbo-ui.css`) separada de los estilos del sitio de docs | Una página en blanco que importa tokens + librería reproduce cualquier demo del DS sin CSS adicional |
| RF-09 | P0 | Modal funcional: overlay, foco atrapado, cierre con Esc y click-fuera, `role="dialog"` + `aria-modal` | Navegable completo con teclado; el foco vuelve al disparador al cerrar |
| RF-10 | P0 | Tooltip accesible: visible con foco de teclado, asociado por `aria-describedby`, no interactivo | Aparece con Tab, se anuncia por lector de pantalla, se descarta con Esc |
| RF-11 | P1 | Componentes nuevos: dropdown/menu y popover (requeridos por tablas con acciones) | Patrón de teclado WAI-ARIA (flechas, Home/End, Esc); posicionamiento sin dependencias externas |
| RF-12 | P2 | Drawer/panel lateral y API formal de toast (`RB.toast`: variantes, cola, duración, descarte) | Documentados con ejemplo y código copiable como el resto |

### Documentación y gobernanza

| ID | Prioridad | Requisito | Criterio de aceptación |
|---|---|---|---|
| RF-13 | P1 | El DS HTML evoluciona a sitio de docs: consume los artefactos generados (no valores duplicados) y conserva playground, código copiable, ⌘K y dark/light | Los valores mostrados en docs provienen de `tokens.json`; actualizar un token actualiza la doc |
| RF-14 | P1 | Versionado semver + changelog mantenido (la vista Changelog existe); repositorio git con estructura de paquetes | Cada release etiquetada; MAJOR = breaking visual, MINOR = componente nuevo, PATCH = fix |
| RF-15 | P2 | Publicación del sitio de docs en subdominio propio (p. ej. `ds.rumbo.la`) | Accesible al equipo con la última versión estable |

---

## 04 · Requisitos no funcionales

| ID | Área | Requisito |
|---|---|---|
| RNF-01 | Accesibilidad | **WCAG 2.1 AA** como piso: contraste (los pares del manual ya verifican AAA en su mayoría), operación completa por teclado, `:focus-visible` en todo elemento interactivo, `prefers-reduced-motion` respetado |
| RNF-02 | Peso | CSS de tokens + librería sin dependencias de runtime; presupuesto ≤ 60 KB sin comprimir (fuentes aparte, con `font-display: swap`) |
| RNF-03 | Compatibilidad | Navegadores evergreen. Nota: el CSS actual usa `color-mix()` y `oklab` → piso efectivo Chrome/Edge 111+, Safari 16.2+, Firefox 113+; documentar o proveer fallback |
| RNF-04 | Idioma | Documentación y copys en español; nombres de tokens, clases y archivos en inglés (convención ya establecida) |
| RNF-05 | Marca | Las reglas del manual son restricciones del sistema: un solo acento por pieza, ratio 60/20/10/7/3 en composiciones de marca, área de respeto 1x del logo, prohibido estirar/rotar/fondo purple |

---

## 05 · Plan de entrega — hitos

| Hito | Fecha | Entregable | Requisitos |
|---|---|---|---|
| M1 | Ago · sem 3–4 | **Fuente de verdad** — decisiones cerradas, `tokens.json` + build funcionando, logos importados, repo en git | RF-02 · RF-01 · RF-03 · RF-07 |
| M2 | Sep · sem 1–2 | **Fundamentos empaquetados** — tipografía self-hosted con licencia verificada, íconos individuales, escalas documentadas | RF-04 · RF-05 · RF-06 |
| M3 | Sep sem 3 – Oct sem 2 | **Librería de componentes** — `rumbo-ui.css` + brechas de accesibilidad cerradas + componentes nuevos P1 | RF-08 a RF-12 |
| M4 | Oct · continuo | **Docs vivas** — sitio consumiendo artefactos generados, semver activo, publicación | RF-13 · RF-14 · RF-15 |

> **Dependencia crítica:** la verificación de licencia web de Dx Grafik (RF-05) debe iniciarse en M1 aunque se entregue en M2 — si la licencia no cubre self-hosting, hay que decidir fallback tipográfico antes de construir sobre ella.

---

## 06 · Métricas — criterios de éxito

| Métrica | Objetivo | Cómo se mide |
|---|---|---|
| Propagación de cambios | 1 archivo | Cambiar un color de marca en `tokens.json` actualiza CSS, Tailwind y docs en un build |
| Cobertura del sistema | 100% | Una pantalla nueva tipo dashboard se construye solo con clases del sistema (cero CSS ad-hoc) |
| Accesibilidad | AA sin fallos | Auditoría axe/Lighthouse sobre el sitio de docs + prueba manual de teclado por componente |
| Consistencia marca ↔ código | 0 conflictos | Script de diff entre valores del manual y `tokens.json` corre en cada release |
| Adopción | 1er producto | El primer proyecto real de Rumbo consume los paquetes sin fork ni copia modificada |

---

## 07 · Riesgos y decisiones abiertas

### Riesgos

| Riesgo | Nivel | Mitigación |
|---|---|---|
| Licencia de Dx Grafik no cubre web/self-hosting | Alto | Verificar en M1; fallback definido: Space Grotesk Bold asume display hasta resolver (degrada estilo, no funcionalidad) |
| Sobre-ingeniería sin consumidor real | Medio | Capa de framework y npm fuera de alcance v1.x; copy-in versionado hasta que existan ≥2 consumidores |
| Drift futuro entre manual y DS | Medio | Script de diff en releases (métrica 4); el manual referencia tokens en lugar de duplicar valores donde sea posible |
| Mantenimiento unipersonal | Medio | Todo generado desde una fuente; documentación de contribución en M4; sin dependencias exóticas |

### Decisiones abiertas

| ID | Decisión | Cierre |
|---|---|---|
| DA-01 | Estatus del naranja `#FF5A36`: ¿color funcional (solo error) o se sustituye el danger? | M1 |
| DA-02 | Roles de Dx Grafik SemiBold vs Black Italic | M1 |
| DA-03 | Stack del primer producto consumidor (define la capa de framework post-v1) | Sin fecha |
| DA-04 | Dominio de docs (`ds.rumbo.la` u otro) | M4 |

---

## 08 · Apéndice — referencias

- `brand-manual.html` — manual de marca v1.0 (15 capítulos), autoridad de marca.
- `design-system.html` + `site/ds-*.js` — design system v1.0 (33 vistas), autoridad de UI y base del sitio de docs.
- [Plan de trabajo previo](https://claude.ai/code/artifact/28b8d86f-4be7-4fb5-a1d7-ddcbb85dff10) (base de este PRD) · [Versión web de este PRD](https://claude.ai/code/artifact/1baa602d-3cd2-4f72-9616-dbe9fda4aea6).
- Formato de tokens: [design-tokens.org](https://design-tokens.org) · Accesibilidad: WCAG 2.1 AA · Patrones de teclado: WAI-ARIA Authoring Practices.
