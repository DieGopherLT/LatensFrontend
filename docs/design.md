# Latens Design System
*Inspirado en Vercel, optimizado para expresividad controlada*

---

## Filosofía de Diseño

**Base Conservadora + Expresividad Rica = Credibilidad + Satisfacción**
- Fondos y estructura proyectan seriedad técnica
- Animaciones y micro-interacciones generan satisfacción
- El "despertar" de proyectos es el momento de máxima expresividad

---

## Tipografía

### Jerarquía Principal
- **H1**: Inter 32px, font-weight 700, line-height 1.2, letter-spacing -0.02em
- **H2**: Inter 24px, font-weight 600, line-height 1.3, letter-spacing -0.01em
- **H3**: Inter 20px, font-weight 600, line-height 1.4
- **Body Large**: Inter 16px, font-weight 400, line-height 1.6
- **Body**: Inter 14px, font-weight 400, line-height 1.5
- **Small**: Inter 12px, font-weight 500, line-height 1.4

### Reglas Tipográficas
- **Máximo 3 weights**: 400, 500, 600, 700
- **Variable font preferred**: Inter Variable para performance
- **Monospace para código**: Fira Code 14px, line-height 1.4

---

## Espaciado y Layout

### Sistema de Espaciado (8px base)
```
4px  = 0.5 unit  (micro-spacing)
8px  = 1 unit    (small)
16px = 2 units   (medium)
24px = 3 units   (large)
32px = 4 units   (xl)
48px = 6 units   (xxl)
64px = 8 units   (section)
```

### Grid y Contenedores
- **Max-width principal**: 1200px
- **Padding lateral**: 24px (mobile), 48px (desktop)
- **Grid gaps**: 24px (cards), 16px (elementos internos)
- **Sidebar width**: 280px (desktop)

### Jerarquía de Espacios
- **Entre secciones**: 64px
- **Entre cards**: 24px
- **Dentro de cards**: 16px padding
- **Entre elementos relacionados**: 8px
- **Micro-ajustes**: 4px

---

## Colores y Estados

### Aplicación de Paleta
- **Backgrounds**: Pure White (`#FFFFFF`) / Deep Night (`#0F172A`) como base
- **Surface elements**: Morning Mist (`#F8FAFC`) / Slate Dark (`#1E293B`)
- **Interactive elements**: Aurora Orange (`#FF6B35` / `#FF7A59`) para CTAs principales
- **Secondary actions**: Dawn Blue (`#2E86AB`) / Cyber Blue (`#3B9ECD`)

### Estados de Interacción
| Estado | Transformación | Duración |
|--------|----------------|----------|
| **Hover** | +10% brightness, scale(1.02) | 150ms |
| **Active** | -5% brightness, scale(0.98) | 100ms |
| **Focus** | Box-shadow Aurora Orange (`#FF6B35`) | 200ms |
| **Disabled** | 50% opacity | 300ms |

---

## Componentes Base

### Cards
```
Background: Morning Mist (#F8FAFC) / Slate Dark (#1E293B)
Border-radius: 12px
Padding: 24px
Box-shadow: 0 1px 3px rgba(0,0,0,0.1)
Hover: 0 8px 25px rgba(0,0,0,0.15), translateY(-2px)
Transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Botones
```
Primary:
  Background: Aurora Orange (#FF6B35 / #FF7A59)
  Color: White
  Padding: 12px 24px
  Border-radius: 8px
  Font-weight: 500
  
Secondary:
  Background: Dawn Blue (#2E86AB) / Cyber Blue (#3B9ECD)
  Color: White
  Padding: 12px 24px
  Border-radius: 8px
  
Ghost:
  Background: Transparent
  Border: 1px solid border-color
  Color: Primary Text (#0F172A / #F1F5F9)
```

### Inputs
```
Background: Pure White (#FFFFFF) / Deep Night (#0F172A)
Border: 1px solid Soft Gray (#E2E8F0) / Border Gray (#334155)
Border-radius: 8px
Padding: 12px 16px
Focus: Border Aurora Orange (#FF6B35), box-shadow glow
```

---

## Animaciones y Transiciones

### Timing Functions
- **Estándar**: `cubic-bezier(0.4, 0, 0.2, 1)` - 300ms
- **Entrada**: `cubic-bezier(0, 0, 0.2, 1)` - 200ms
- **Salida**: `cubic-bezier(0.4, 0, 1, 1)` - 150ms
- **Bouncy**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` - 400ms

### Micro-interacciones
- **Button hover**: Scale 1.02, shadow elevation
- **Card hover**: Lift 2px, shadow expand
- **Input focus**: Border glow, slight scale
- **Icon hover**: Rotate 5deg o scale 1.1

### Proceso de "Despertar" (Signature Animation)

#### Estado Inicial (Deep Sleep)
```
Opacity: 0.5
Scale: 0.92
Filter: grayscale(60%) blur(1px)
Color: Deep Sleep color (#A855F7)
```

#### Fase 1: Standard Sleep
```
Opacity: 0.7
Scale: 0.96
Filter: grayscale(35%) blur(0.5px)
Color: Transition to Standard Sleep color (#8B5CF6)
Duration: 800ms
```

#### Fase 2: Light Sleep
```
Opacity: 0.9
Scale: 0.98
Filter: grayscale(15%)
Color: Light Sleep color (#F59E0B)
Duration: 600ms
```

#### Fase 3: Ready to Resume (Light Sleep)
```
Opacity: 1
Scale: 1
Filter: none
Color: Light Sleep color (#F59E0B / #F97316)
Glow effect: 0 0 20px rgba(color, 0.3)
Duration: 400ms
```

#### Fase 4: Fully Ready
```
Gentle pulse animation
Scale: 1 → 1.02 → 1 (2s loop)
Glow fade out over 1s
```

---

## Layout Específicos

### Dashboard Principal
```
Header: 80px height, sticky
Sidebar: 280px width, slide-out mobile
Main: Flex-1, max-width 1200px
Grid: CSS Grid, auto-fit columns
Gap: 24px between project cards
```

### Project Card
```
Width: 320px (desktop), 100% (mobile)
Height: Auto (min 200px)
Sleep Score: Top-right corner badge
Project Info: 16px padding interno
Actions: Bottom-aligned buttons
```

### Sleep Score Badge
```
Position: Absolute top-right
Size: 48px diameter
Border-radius: 50%
Font: 12px, weight 600
Animation: Gentle pulse for deep sleep
```

---

## Estados del Sleep Score

### Visualización por Estado

#### Tema Claro (Dawn)
| Estado | Color | Efecto Visual | Animación |
|--------|-------|---------------|-----------|
| **Light Sleep (0-30)** | `#F59E0B` | Sin efectos | Respiración (4s) |
| **Standard Sleep (31-60)** | `#8B5CF6` | Blur leve | Pulse lento (5s) |
| **Deep Sleep (61-100)** | `#A855F7` | Blur moderado | Pulse muy lento (6s) |

#### Tema Oscuro (Midnight)
| Estado | Color | Efecto Visual | Animación |
|--------|-------|---------------|-----------|
| **Light Sleep (0-30)** | `#F97316` | Sin efectos | Respiración (4s) |
| **Standard Sleep (31-60)** | `#A855F7` | Blur leve | Pulse lento (5s) |
| **Deep Sleep (61-100)** | `#7C3AED` | Blur moderado | Pulse muy lento (6s) |

### Transiciones entre Estados
- **Duración**: 1200ms
- **Easing**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Propiedades**: color, filter, box-shadow
- **Stagger**: 100ms delay entre elementos

---

## Iconografía

### Estilo de Íconos
- **Librería**: Lucide React (24px base)
- **Stroke-width**: 1.5px
- **Estados**: Outline (inactivo), filled (activo)
- **Animaciones**: Rotate, scale, path transitions

### Íconos Específicos
- **Sleep**: Moon, ZZZ, Bed
- **Awakening**: Sun, Eye, Sunrise
- **Repository**: Folder, Code, Git-branch
- **Actions**: Play, Pause, Refresh

---

## Responsive Breakpoints

```
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1439px
Large: 1440px+
```

### Adaptaciones por Dispositivo
- **Mobile**: Single column, bottom navigation
- **Tablet**: 2-column grid, sidebar overlay
- **Desktop**: 3-column grid, persistent sidebar
- **Large**: 4-column grid, expanded spacing

---

## Performance Guidelines

### Animaciones
- **Transform y opacity only** para 60fps garantizado
- **Will-change** solo durante animaciones activas
- **Reduced motion** query para accesibilidad

### Carga de Componentes
- **Skeleton screens** durante análisis asíncrono
- **Progressive enhancement** para efectos avanzados
- **Lazy loading** para project cards fuera de viewport

---

## Accesibilidad

### Contraste y Color
- **Mínimo 4.5:1** para texto normal
- **Mínimo 3:1** para elementos grandes
- **Color-blind friendly** sleep score indicators

### Interacción
- **Focus visible** en todos los elementos interactivos
- **Skip links** para navegación por teclado
- **ARIA labels** para sleep states

### Movimiento
- **Prefers-reduced-motion** respetado
- **Alternativas estáticas** para todas las animaciones
- **Pausar animaciones** en hover/focus

---

## Notas de Implementación

### CSS Architecture
- **CSS Modules** o **Styled-components** para estilos
- **CSS Custom Properties** para theming
- **Container queries** para responsive components

### Estado de Carga
- **Skeleton placeholders** con shimmer effect
- **Progressive reveal** conforme completa análisis
- **Error states** con retry actions claros