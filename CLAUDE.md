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

**Domain Organization:**
- Group related functionality into domains at `src/modules/<domain>/`
- Each domain is self-contained with all related files inside its directory
- Use `src/modules/core` for shared logic (general-purpose components, hooks, utilities)

**Directory Structure per Domain:**

Each domain may contain these subdirectories (create only if needed):
- `components/` - Reusable UI pieces
- `hooks/` - Custom React hooks for logic extraction
- `services/` - API calls, data fetching, business logic
- `types/` - TypeScript interfaces and types
- `pages/` - Next.js route-bound components
- `layouts/` - Next.js layout components
- `utils/` - Pure functions (input → output, no side effects)
- `constants/` - Read-only hardcoded values
- `contexts/` - React Context providers (if component tree is deep)
- `styles/` - CSS modules (if needed)

**Important Rules:**
1. Only create directories when you have files to put in them (no empty directories)
2. Each domain MUST have an `index.ts` file that exports all public elements
3. Components in subdirectories (e.g., `components/navigation/`) don't need their own index files
4. Use `.ts` extension for non-JSX files, `.tsx` for files with JSX

**Example Structure:**
```
src/modules/
├── core/
│   ├── components/providers/
│   ├── services/http/
│   └── index.ts
├── auth/
│   ├── components/
│   ├── hooks/
│   ├── types/
│   ├── auth.config.ts
│   └── index.ts
└── dashboard/
    ├── components/
    ├── services/
    ├── types/
    └── index.ts
```

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
