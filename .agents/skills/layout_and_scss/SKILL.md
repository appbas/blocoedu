---
name: Layout and SCSS Definitions
description: Guidelines and standard definitions for layout structures and SCSS authoring in the project.
---

# Layout and SCSS Definitions

## Overview
This document defines the standard approach for creating layouts and writing SCSS in this project. When styling new components or pages, these rules should be followed to ensure consistency, maintainability, and responsiveness.

## 1. General SCSS Rules
- **Variables First**: Always use predefined SCSS variables or CSS variables for colors, spacing, borders, and typography.
- **Nesting**: Do not nest selectors deeper than 3 levels. Too much nesting makes the code hard to read and overrides difficult.
- **Naming Convention**: Prefer semantic class names. If using a specific methodology (like BEM - Block Element Modifier), follow it strictly.

## 2. Layout & Grid
- **Flexbox and Grid**: Use Flexbox for linear components (1D) and CSS Grid for more complex layout structures (2D).
- **Spacing System**: Maintain consistent margins and paddings using a predefined spacing scale (e.g., multiples of 4px or 8px).
- **Responsive Design**: Use mobile-first media queries. Define content breakpoints based on the design, not just specific device widths.

## 3. Project Specific Guidelines
> [!NOTE]
> Please complete this section with your specific tokens, paths to global styles, or mixins you want the AI to always use.

- **Colors**: (Definir paleta: primárias, secundárias, background, texto, etc.)
- **Typography**: (Definir fontes, tamanhos padrão, pesos, etc.)
- **Mixins**: (Listar mixins úteis, ex: para media queries, tipografia responsiva)

---

## Como usar esta skill?
Sempre que você for criar ou alterar componentes visuais, o Agente lerá este arquivo e seguirá as orientações descritas acima na hora de gerar o código SCSS / HTML.
