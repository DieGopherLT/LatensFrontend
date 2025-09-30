# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Latens** is a tool for awakening sleeping projects by analyzing repository state and providing contextual memory of where development left off. The frontend is built with Next.js 15 + TypeScript + Tailwind CSS 4.

### Core Concept

Projects have a "Sleep Score" indicating development inactivity:

- **Light Sleep (0-30)**: Recent active development
- **Standard Sleep (31-60)**: Moderate pause, intermediate difficulty to awake
- **Deep Sleep (61-100)**: Deep sleep, requires careful awakening

The tool performs "Latens Recovery" to help projects remember their state and "Latens Awakening" to resume development naturally.

## Development Commands

```bash
# Install dependencies
pnpm add <dependencies>

# Development with Turbopack
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Architecture References

### Tech Stack & Dependencies

See `@docs/stack.md` for complete frontend dependencies and planned integration details.

### Design System

The project implements the **Latens Design System** - see `@docs/design.md` for complete specifications including:

- Color palettes and theming (Dawn/Midnight modes)
- Typography, spacing, and component patterns
- Sleep state animations and micro-interactions
- Responsive layouts and accessibility guidelines

### Key Files

```
src/
├── app/
│   ├── globals.css     # Tailwind 4 theme implementation
│   ├── layout.tsx      # Root layout with font setup
│   └── page.tsx        # Landing page
docs/
├── design.md           # Complete design system specification
└── stack.md            # Frontend dependencies and integration plan
```

### How to structure the src directory

- Identify domains by grouping elements together that are related to an entity or feature.
- Identified domains will have their own directory at `src/modules/<domain>/`.
  - Each domain will be auto-contained, all the files related to it will live under its directory.
  - Each domain can have different types of files that are grouped in these directories:
    - Components, reusable pieces of UI.
    - Hooks, to extract logic from components.
    - Styles, CSS modules if needed.
    - Pages, the components bounded to Next.js router.
    - Layouts, the components that will work as Next.js layouts inside a set of routes.
    - Utils, pure functions with an input and an output, no side effects.
    - Constants, hardcoded values that are read-only.
    - Contexts, in case the component three of a domain turns deep.
  - All the elements a domain/module exposes goes into an index.ts file.
- Shared logic will live in a `src/modules/core` domain with general purpose components, hooks and helpers.

## Implementation Notes

### Code generation guidelines

#### Imports

They go in this order:

- React dependencies
- External dependencies
- Components
- Hooks (including contexts)
- Constants
- Utils
- Styles

#### Components structure

Outside of the component:

- Interface of props (if applies).
  - Sort props so primitive types are first, then objects, then functions.
- Functions or constants that are not tied to component life cycle.

Inside the component:

- Props destructuring
- Custom hooks declaration
- Local state variables declaration
- Local useMemo/useCallback declarations
- useEffects Calls
- Non-memoized variables and functions
- Guard clauses for conditional rendering
- JSX

#### Content rendering

- Avoid using ternaries, always use `&&` and handle all edge cases.
- If looped content is 40+ lines of code, extract it into a component.
- If a component should not be rendered, return null.

### Tailwind CSS 4 Integration

- Uses **CSS-first configuration** with `@theme` directive instead of `tailwind.config.js`
- Theme switching via `data-theme="midnight"` attribute
- Sleep state animations implemented as utility classes
- Custom design tokens defined in `@src/app/globals.css`

### Development Status

- Currently in initial setup phase with design system established
- Frontend dependencies planned but not yet installed
- Backend planned: Go + Fiber + MongoDB
- Authentication: GitHub OAuth via Auth.js
- Analysis: OpenAI API integration

### Configuration Files

- `@next.config.ts` - Next.js with Turbopack configuration
- `@postcss.config.mjs` - PostCSS with Tailwind 4 support
- `@eslint.config.mjs` - ESLint 9 configuration
- Tailwind configuration via `@theme` in `@globals.css`
