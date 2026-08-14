# Acta de decisión · Valores canónicos del sistema

- **Fecha:** 13 de agosto de 2026
- **Referencia:** PRD RF-02, DA-01, DA-02
- **Estado:** Adoptada por defecto en `tokens/tokens.json` — **pendiente de ratificación** por los fundadores. Si alguna se revierte, se corrige en `tokens.json` y se regenera todo con un build.

## Decisiones

| # | Tema | Decisión | Fundamento |
|---|---|---|---|
| 1 | Ink | Canónico **`#0A0A0B`** (no `#000000`) | Es el valor que el CSS del manual y del DS ya usan; el negro puro solo aparece en el texto del capítulo 05 del manual. Debe corregirse esa página |
| 2 | Paper | Canónico **`#F4F2ED`**; `#FFFFFF` se mantiene como token aparte (`--rb-white`) | Paper es el fondo cálido de marca; white es color de superficie en tema light. El capítulo 05 del manual debe corregirse |
| 3 | Purple RGB | **132 · 82 · 253** (hex `#8452FD`) | El manual dice "137·82·253": errata — `0x84` = 132 |
| 4 | Naranja `#FF5A36` (DA-01) | Se adopta como **color funcional** (`--danger` / estados de error) y primitivo `--rb-orange`. **No es color de marca**: no aparece en composiciones de marketing ni en el ratio 60/20/10/7/3 | El DS ya lo usa como danger; introducirlo a la paleta de marca contradiría el manual |
| 5 | Cortes de Dx Grafik (DA-02) | **Black Italic**: display, heros, cifras destacadas y firma editorial. **SemiBold**: titulares largos de documento y piezas donde el italic pierde legibilidad (> 2 líneas) | Propuesta del plan; el manual declara ambos cortes oficiales pero el DS solo usaba Black Italic |
| 6 | Escalas tipográficas | Dos contextos en los mismos tokens: **marketing** (Display 96 · H1 56 · H2 36 · Body L 20 · Body 16 · Caption 11, del manual) y **producto** (base 14, `xs`→`6xl`, del DS) | Ambos usos son legítimos; la ambigüedad venía de no nombrar el contexto |
| 7 | Cyan como texto en tema light | Nuevo primitivo **`cyan-800 #0B7373`**; el tema light redefine `--highlight` a ese valor | El cyan de marca `#47EBEB` sobre paper da **1.31:1** — falla WCAG AA (RNF-01). Ni `cyan-600` alcanza (2.19:1). `cyan-800` da 5.05:1. En dark se mantiene `#47EBEB` (13.52:1). El cyan de marca sigue usándose sin cambios como **fondo** (con ink encima) y sobre superficies oscuras |

## Consecuencias

- `tokens/tokens.json` es la única fuente de verdad; `dist/rumbo.css` y `dist/tailwind.preset.js` se generan desde ahí (`node scripts/build-tokens.mjs`).
- `scripts/check-consistency.mjs` audita que el manual y el DS no declaren valores en conflicto con los tokens (métrica 4 del PRD).
- Pendiente (fuera de este repo): corregir las erratas del capítulo 05 del manual (ink, paper, RGB del purple) en la próxima edición del documento.
