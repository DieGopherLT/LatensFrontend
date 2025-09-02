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

## Architecture

### Tech Stack
- **Next.js 15.5.2** with App Router and Turbopack
- **React 19.1.0** 
- **TypeScript 5**
- **Tailwind CSS 4** with PostCSS integration
- **ESLint 9** with Next.js configuration

### Planned Dependencies (per docs/stack.md)
- **Zustand** - State management ligero y simple
- **TanStack Query** - Manejo de estado servidor y cache
- **Auth.js** - Autenticación con GitHub OAuth
- **Shadcn/ui** - Componentes accesibles copy-paste
- **Framer Motion** - Animaciones fluidas y transiciones
- **React Hook Form** - Formularios performantes con validación
- **Zod** - Validación de esquemas TypeScript-first
- **use-websocket** - Hook React para WebSocket nativo

### Design System
The project implements the **Latens Design System** with:
- **CSS-first configuration** using Tailwind 4's `@theme` directive
- **Dual theme support**: Dawn (light) and Midnight (dark) modes
- **Sleep state animations**: Visual effects for Light/Standard/Deep sleep states
- **Component utilities**: Pre-built classes for buttons, cards, inputs, and layouts

Key design files:
- `@docs/design.md` - Complete design system specification
- `@docs/colors.md` - Color palette and usage guidelines  
- `@src/app/globals.css` - Tailwind 4 implementation with custom variables

### File Structure
```
src/
├── app/
│   ├── globals.css     # Tailwind 4 theme configuration
│   ├── layout.tsx      # Root layout with font setup
│   └── page.tsx        # Landing page (currently default Next.js)
docs/
├── design.md           # Design system specification
└── colors.md           # Color palette documentation
```

### Configuration Files
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - PostCSS with Tailwind 4 support
- `eslint.config.mjs` - ESLint 9 configuration
- `tailwind` configuration via `@theme` in `globals.css`

## Key Implementation Notes

### Tailwind CSS 4 Integration
- Uses **CSS-first configuration** with `@theme` directive instead of `tailwind.config.js`
- Custom design tokens defined in `globals.css` for spacing, colors, typography, and animations
- Theme switching via `data-theme="midnight"` attribute
- Sleep state animations implemented as utility classes (`.sleep-light`, `.sleep-standard`, `.sleep-deep`)

### Component System
- Custom component classes in `@layer components` for buttons (`.btn-primary`, `.btn-secondary`, `.btn-ghost`)
- Project card system with sleep badge positioning 
- Layout utilities for responsive dashboard grid
- Accessibility support with `prefers-reduced-motion` queries

### Development Status
- **MVP in development** targeting September 30, 2025
- Currently in initial setup phase with design system established
- Frontend dependencies planned but not yet installed (see Planned Dependencies)
- Backend planned: Go + Fiber + MongoDB
- Authentication: GitHub OAuth via Auth.js
- Analysis: OpenAI API integration

The codebase follows modern Next.js 15 patterns with App Router, uses cutting-edge Tailwind CSS 4 features, and implements a comprehensive design system ready for the core application development.