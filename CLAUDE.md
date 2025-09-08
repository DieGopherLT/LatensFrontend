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

- On development ongoing, when performing important architecture updates, update this document as well.

## Implementation Notes

### Tailwind CSS 4 Integration
- Uses **CSS-first configuration** with `@theme` directive instead of `tailwind.config.js`
- Theme switching via `data-theme="midnight"` attribute
- Sleep state animations implemented as utility classes
- Custom design tokens defined in `@src/app/globals.css`

### Development Status
- **MVP in development** targeting September 30, 2025
- Currently in initial setup phase with design system established
- Frontend dependencies planned but not yet installed
- Backend planned: Go + Fiber + MongoDB
- Authentication: GitHub OAuth via Auth.js
- Analysis: OpenAI API integration

### Configuration Files
- `next.config.ts` - Next.js with Turbopack configuration
- `postcss.config.mjs` - PostCSS with Tailwind 4 support
- `eslint.config.mjs` - ESLint 9 configuration
- Tailwind configuration via `@theme` in `globals.css`