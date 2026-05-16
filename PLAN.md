opencode -s ses_1ce28c2b3ffeUaPqhRpp68eAwF
# Dossier Interactivo S.A.V.A.M. — Plan Arquitectónico

> Dossier web de 6 slides con scroll-driven animations, partículas de fondo fijas y tipografía académica.
> Stack: React 19 + Vite + TypeScript + GSAP + Lenis + tsparticles + TailwindCSS v4 + pnpm

---

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Package Manager | **pnpm** |
| Bundler | **Vite 8** |
| UI | **React 19 + TypeScript** |
| Styling | **TailwindCSS v4** |
| Scroll Animation | **GSAP 3 + ScrollTrigger + Lenis** |
| Particles | **tsparticles (react + engine + interaction-particles-links)** |
| GIF por scroll | **Canvas API + requestAnimationFrame** |
| State | **Zustand** |

---

## Las 6 Plantillas de Diseño

Cada slide usa una **plantilla visual** que inyecta contenido dinámicamente. Todas reciben `{ data, progress, phase }`:

| # | Slide | Plantilla | Descripción Visual |
|---|-------|-----------|-------------------|
| 1 | **Portada** | `HeroPortada` | Full viewport, logo grande centrado, título S.A.V.A.M., subtítulo UNETI, glow pulsante en fondo |
| 2 | **Filosofía** | `ValoresGrid` | Misión + Visión en tarjetas anchas tipo bloque, Valores en triada con iconos |
| 3 | **Equipo** | `TeamShowcase` | Fotos en hexágonos con borde glow, rol abajo, frase destacada en hover |
| 4 | **Problema** | `SplitTextImage` | Izquierda: texto del diagnóstico (15% quejas, herencia digital, proceso manual). Derecha: diagrama de flujo del problema |
| 5 | **Solución** | `TimelineFlow` | Diagrama de arquitectura + secuencia. Nodos conectados por SVG (Backend Node.js → MongoDB → App Kotlin → APIs WhatsApp/Telegram) |
| 6 | **Innovación** | `MetricasImpacto` | Grid de métricas con números grandes, iconos de soberanía tecnológica, lecciones aprendidas |

---

## Mecánica de Scroll

| Parámetro | Valor |
|-----------|-------|
| Slides | 6 (viewport completo cada uno) |
| Scroll real | ~600vh (100vh por slide) |
| Transición | Cross-fade con overlap suave |
| Scroll suave | **Lenis** con duración 1.2s |

Cada slide tiene 4 fases de animación:
| Fase | Progress | Efecto |
|------|----------|--------|
| **ENTRY** | 0.00–0.30 | scale(0.8→1) + fade(0→1) + blur(6→0) |
| **IMPACT** | 0.30–0.55 | glow pulsante, elementos principales aparecen |
| **CONTENT** | 0.55–0.80 | estabilizado, contenido secundario con stagger |
| **EXIT** | 0.80–1.00 | fade(1→0) + scale(1→0.95) |

---

## Elementos Visuales Fijos

### 1. GIF por scroll (fondo)
- `<canvas>` con `position: fixed; z-index: 0`
- Un solo fotograma/gradiente animado que progresa según `scrollY / totalScroll`
- Opacidad 15–25% para no interferir con contenido
- Se mueve con `requestAnimationFrame` sincronizado a Lenis

### 2. Partículas (capa media)
- `tsparticles` con `preset: links` (partículas conectadas por líneas)
- `position: fixed; z-index: 1; pointer-events: none`
- Color: gradiente entre azul UNETI y verde Movilnet
- Densidad: ~80 partículas
- Linking: líneas entre partículas < 150px

### 3. Capa de contenido (z-index: 2)
- Slides con fondo semitransparente (`bg-black/40` o `bg-white/10`)
- Tarjetas con `backdrop-blur` para legibilidad

---

## Contenido de Cada Slide (extraído del PDF)

### Slide 1 — HeroPortada
```
Título: S.A.V.A.M.
Subtítulo: Sistema de Análisis de Verificación de API Móviles
Línea: Proyecto Sociotecnológico — UNETI
Grupo 3 — Chimera
Fecha: Febrero 2026
```

### Slide 2 — ValoresGrid
```
Misión:
Automatizar la verificación de líneas telefónicas recicladas en Movilnet,
consultando en tiempo real su vinculación con WhatsApp Business y Telegram,
para garantizar una asignación libre de identidades digitales previas.

Visión (3 años):
Ser la plataforma de código abierto referente en Latinoamérica para la
gestión de activos numéricos en telecomunicaciones.

Valores:
• Soberanía Tecnológica — Código abierto, herramientas nacionales
• Seguridad — JWT, cifrado, control de roles (Admin/Moderador/Agente)
• Eficiencia — Automatización de procesos manuales, respuesta < 3s
```

### Slide 3 — TeamShowcase
```
Diossmer Villamizar — Scrum Master / Lead Developer
"Ing. en formación, backend Node.js + TypeScript, orquestación del ciclo Scrum"

Omar Rivas — Backend Developer
"Ing. en formación, API REST, integración MongoDB y APIs de mensajería"

Rosa Palacios — QA Engineer / Frontend
"Ing. en formación, pruebas funcionales, UI/UX en Kotlin + Material Design"
```

### Slide 4 — SplitTextImage (Problema)
```
Texto izquierda:
El 15% de los nuevos suscriptores de Movilnet reciben líneas que aún
conservan perfiles activos en WhatsApp Business y Telegram. Esto genera:
• Herencia de identidad digital del dueño anterior
• Re-trabajo en OSAC y centros de servicio
• Vulneración de privacidad y pérdida de suscriptores
• Proceso manual: el agente verifica empíricamente en su propio teléfono

Diagrama derecha:
[Diagrama de flujo: Suscriptor → OSAC → Asignación manual → 
 Línea vinculada → Queja → Re-proceso]
```

### Slide 5 — TimelineFlow (Solución)
```
Arquitectura:
App Android (Kotlin) → Retrofit → Backend Node.js + TypeScript → MongoDB
                                          ↓
                              GramJS / Playwright → APIs WhatsApp + Telegram

Diagrama de secuencia:
Agente → App → Backend → MongoDB (status interno) 
         → Backend → WhatsApp API (paralelo) 
         → Backend → Telegram API (paralelo) 
         → Backend → Respuesta JSON → App → Resultado al agente

Tecnologías:
• Node.js + TypeScript (Backend)
• MongoDB (Base de datos NoSQL)
• Kotlin + Android Studio (App nativa)
• JWT (Autenticación)
• GramJS + Playwright (Automatización APIs)
• Retrofit (Cliente HTTP)
```

### Slide 6 — MetricasImpacto (Innovación)
```
Métricas de éxito:
• 90% reducción de errores de integración
• Consultas en tiempo real (< 3 segundos)
• 3 roles definidos: Admin, Moderador, Agente
• Código abierto (GitHub: /Diossmer/savam)

Lecciones aprendidas:
• La integración Retrofit + TypeScript sincronizó modelos al 100%
• Desacoplamiento por servicios web facilita actualizaciones
• La tecnología debe ser humana: programamos para personas

Tecnologías libres:
Node.js · TypeScript · MongoDB · Kotlin · JWT · GramJS · Playwright
```

---

## Estructura de Archivos

```
src/
├── main.tsx
├── App.tsx
├── index.css                          # Tipografía clamp + keyframes
├── data/
│   └── dossierContent.ts              # Todo el texto del PDF estructurado
├── components/
│   ├── DossierContainer.tsx            # Lenis + scroll container
│   ├── SlideRenderer.tsx              # Renderiza slide activo según fase
│   ├── slides/
│   │   └── slides.tsx                 # Todas las 6 plantillas en un archivo
│   ├── effects/
│   │   ├── ParticleBackground.tsx      # tsparticles fijo
│   │   ├── ScrollGIF.tsx              # Canvas animado por scroll
│   │   └── ScrollProgress.tsx         # Barra de progreso lateral
│   └── ui/
│       ├── TeamCard.tsx               # Hexágono con hover
│       ├── DiagramaArquitectura.tsx   # SVG de arquitectura
│       └── MapaConceptual.tsx         # SVG de mapa conceptual
├── hooks/
│   ├── useScrollProgress.ts
│   └── useGIFAnimation.ts
├── stores/
│   └── useDossierStore.ts
└── types/
    └── dossier.ts
```

---

## Orden de Implementación

| Fase | Descripción | Archivos |
|------|------------|----------|
| **1** | Scaffold base + tipos + datos + estilos | `main.tsx`, `App.tsx`, `index.css`, `types/dossier.ts`, `data/dossierContent.ts`, `stores/useDossierStore.ts` |
| **2** | DossierContainer + SlideRenderer + 6 plantillas | `DossierContainer.tsx`, `SlideRenderer.tsx`, `slides/slides.tsx` |
| **3** | Partículas + ScrollGIF + ScrollProgress | `ParticleBackground.tsx`, `ScrollGIF.tsx`, `ScrollProgress.tsx`, hooks |
| **4** | Componentes UI (TeamCard, DiagramaArquitectura, MapaConceptual) | `TeamCard.tsx`, `DiagramaArquitectura.tsx`, `MapaConceptual.tsx` |
| **5** | Animaciones GSAP, transiciones, responsive, build | Refinar todos los componentes con ScrollTrigger |
