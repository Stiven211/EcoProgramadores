# Auditoría técnica Sitio Web Ecoprogramadores

**Session ID:** ses_098805814ffeQ34Hsse2b7tSpv
**Created:** 15/7/2026, 15:37:27
**Updated:** 15/7/2026, 21:38:10

---

## User

# PROYECTO

Nombre: Sitio Web Ecoprogramadores
Fase: 0 - Auditoría Técnica Integral
Versión: 1.0
Prioridad: Crítica
Estado: Análisis

# ROL

Actúa como un Software Architect Senior, Tech Lead y Auditor Técnico con experiencia en proyectos Frontend de nivel empresarial.

NO eres un programador durante esta fase.

Eres un auditor.

Tu objetivo es comprender completamente el proyecto antes de permitir cualquier modificación.

No debes asumir nada.

Todo debe basarse únicamente en el análisis del proyecto.

--------------------------------------------------

# OBJETIVO

Realizar una auditoría técnica completa del proyecto para conocer su estado real.

En esta fase queda estrictamente prohibido modificar archivos.

No debes crear archivos.

No debes eliminar archivos.

No debes instalar dependencias.

No debes corregir errores.

No debes refactorizar código.

Solo debes analizar el proyecto.

--------------------------------------------------

# ALCANCE DEL ANÁLISIS

Analiza absolutamente todo el proyecto.

Incluye como mínimo:

• estructura de carpetas
• organización del proyecto
• arquitectura utilizada
• flujo general
• HTML
• CSS
• JavaScript
• recursos multimedia
• navegación
• reutilización
• componentes
• consistencia visual
• rendimiento
• accesibilidad
• SEO
• responsive
• mantenibilidad
• escalabilidad
• deuda técnica
• seguridad básica
• organización del código

--------------------------------------------------

# DEBES IDENTIFICAR

Arquitectura

- cómo está organizado el proyecto
- fortalezas
- debilidades
- acoplamientos innecesarios
- duplicaciones

HTML

- estructura semántica
- etiquetas incorrectas
- problemas de accesibilidad
- elementos repetidos
- organización

CSS

- calidad del código
- variables
- repetición
- selectores demasiado específicos
- reglas duplicadas
- tamaños inconsistentes
- colores repetidos
- responsive
- animaciones
- escalabilidad

JavaScript

- organización
- reutilización
- funciones repetidas
- eventos
- rendimiento
- posibles fugas
- código muerto
- malas prácticas

Recursos

- imágenes sin optimizar
- archivos innecesarios
- nombres inconsistentes
- recursos duplicados

Responsive

- puntos de ruptura
- consistencia
- problemas visibles
- riesgos futuros

Accesibilidad

- contraste
- navegación por teclado
- etiquetas
- textos alternativos
- jerarquía de encabezados
- formularios

SEO

- estructura
- títulos
- metadatos
- organización
- semántica

UX

- consistencia
- interacción
- navegación
- experiencia general

Performance

- renderizado
- carga
- CSS innecesario
- JS innecesario
- imágenes
- animaciones costosas

--------------------------------------------------

# CLASIFICA CADA PROBLEMA

Utiliza esta prioridad.

🔴 Crítico

🟠 Alto

🟡 Medio

🟢 Bajo

--------------------------------------------------

# POR CADA PROBLEMA INDICA

Descripción

Impacto

Dónde ocurre

Por qué ocurre

Cómo debería solucionarse

Prioridad

--------------------------------------------------

# TAMBIÉN QUIERO

Una lista de:

Fortalezas del proyecto

Debilidades

Riesgos futuros

Oportunidades de mejora

Quick Wins (mejoras fáciles)

Mejoras importantes

Refactorizaciones recomendadas

--------------------------------------------------

# ROADMAP

Al finalizar crea un roadmap dividido por fases.

Ejemplo:

Fase 1
Arquitectura

Fase 2
Sistema Base

Fase 3
Componentes

Fase 4
Layout

Fase 5
Responsive

Fase 6
UX

Fase 7
Animaciones

Fase 8
Accesibilidad

Fase 9
Optimización

Fase 10
Performance

Fase 11
SEO

Fase 12
Auditoría Final

No copies exactamente este roadmap si encuentras uno mejor.

Diseña el roadmap ideal según el estado real del proyecto.

--------------------------------------------------

# RESTRICCIONES

NO modificar código.

NO crear código.

NO eliminar código.

NO instalar dependencias.

NO refactorizar.

NO proponer cambios sin justificar.

No inventar problemas.

Todo debe estar basado en evidencia encontrada durante el análisis.

--------------------------------------------------

# FORMATO DE RESPUESTA

Responde exactamente con esta estructura:

# AUDITORÍA COMPLETADA

## Resumen Ejecutivo

## Estado General del Proyecto

## Arquitectura

## HTML

## CSS

## JavaScript

## Recursos

## Responsive

## Accesibilidad

## SEO

## UX

## Performance

## Fortalezas

## Debilidades

## Riesgos

## Deuda Técnica

## Problemas Detectados

(clasificados por prioridad)

## Quick Wins

## Refactorizaciones Recomendadas

## Roadmap Propuesto

## Conclusión Final

No escribas código.

No modifiques archivos.

Solo entrega la auditoría técnica completa.

---

## Assistant

**Tool: todowrite**

---

## Assistant

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

**Tool: read**

---

## Assistant

**Tool: todowrite**

---

## Assistant

**Tool: todowrite**

---

## Assistant



# AUDITORÍA COMPLETADA

## Resumen Ejecutivo

Se auditó el proyecto **EcoProgramadores STEAM MUTIS**, un sitio web estático de presentación institucional con 8 páginas HTML, 2 hojas CSS (2.577 + 213 líneas) y 1 archivo JS (385 líneas). El proyecto funciona correctamente desde el punto de vista visual, pero presenta **deuda técnica crítica** por duplicación masiva de código, arquitectura no escalable, credenciales expuestas en cliente, recursos multimedia no optimizados y fallos funcionales en JavaScript que impiden que partes del código declarado se ejecuten.

## Estado General del Proyecto

El sitio cumple su objetivo de exhibir los proyectos del grupo. Sin embargo, se encuentra en **Fase 0 - Auditoría Técnica** por razones justificadas: no existe sistema de construcción, no hay control de versiones semántico visible más allá de Git básico, no hay pruebas, no hay optimización de assets y el crecimiento del proyecto (12 integrantes, 121 fotos de álbum, 7 proyectos con videos) ha acelerado la deuda técnica.

## Arquitectura

**Organización:**
- Sitio 100% estático: HTML5 + CSS3 + JavaScript vanilla
- Sin bundler, sin transpilador, sin framework, sin package.json
- 8 archivos HTML independientes que replican header, nav y estilos inline
- Estilos globales en `assets/css/styles.css` (2.577 líneas) y `responsive-phases.css` (213 líneas)
- Lógica en `assets/js/script.js` (385 líneas)

**Fortalezas arquitectónicas:**
- Uso de variables CSS nativas (`:root`) para paleta y espaciado
- Separación parcial de assets en carpetas (`css/`, `js/`, `img/`)
- Navegación por anclas y scroll suave
- CDN para dependencias externas (Font Awesome, Google Fonts, EmailJS)

**Debilidades arquitectónicas:**
- **Duplicación total de layout**: header, nav y estilos inline repetidos en 7 páginas de proyecto
- **Sin sistema de componentes**: no existe partials, includes, templates ni SSR
- **CSS monolítico**: un solo archivo de 2.577 líneas sin módulos
- **Acoplamiento rígido**: agregar un proyecto requiere copiar y pegar HTML completo
- **Sin build pipeline**: no hay optimización, minificación, hashing ni cache busting

## HTML

### Estructura semántica
- Uso correcto de `<header>`, `<nav>`, `<section>`, `<footer>` en `index.html`
- Etiquetas semánticas respetadas en página principal
- **Problema**: en `proyecto-juego.html` existe un `<h1>` dentro de `.project-detail-content` (línea 143), generando dos `<h1>` en la misma página
- **Problema**: en páginas de proyecto no hay `<main>` ni landmarks adicionales

### Metaetiquetas
- `index.html` y `Album-2025-2026.html` tienen meta description
- **Las 6 páginas de proyecto carecen de `<meta name="description">`**
- **Ninguna página tiene Open Graph, Twitter Cards, canonical URL ni structured data**
- No hay `robots.txt` ni `sitemap.xml`

### Elementos repetidos y duplicación
- Header completo duplicado 7 veces (una por página de proyecto)
- Bloque `<style>` inline de ~70 líneas duplicado en cada página de proyecto con las mismas reglas `.project-detail`, `.back-button`, etc.
- Estructura de navegación inconsistente: en páginas de proyecto el botón "Volver" está dentro de `.nav-content` pero no hay menú desktop ni móvil

### Accesibilidad en HTML
- Buen uso de `lang="es"` y `alt` en la mayoría de imágenes
- **Falta skip link**
- **Falta `role="main"` o `<main>`**
- **Falta `aria-label` descriptivo en enlaces de redes sociales** (solo tienen SVG y texto visible)
- **Falta `autocomplete` en formulario de contacto**
- **Falta `for` en labels** (en `index.html` los labels tienen `for` correctamente, pero no en otras páginas porque no hay formularios)
- Texto alternativo genérico: "Proceso 1", "Juego 1", "Juego 2"... en `proyecto-animacion.html` y `proyecto-juego.html`
- **Typos en alt**: "Juegp 8" en `proyecto-juego.html` línea 166
- Teléfono incompleto: solo `+57` sin número (línea 765)
- `<span class="contact-note"></span>` vacío (línea 748 y 766)

## CSS

### Calidad del código
- **2.577 líneas en un solo archivo** (`styles.css`)
- **Selectores duplicados**:
  - `.team-photo-placeholder` declarado dos veces (líneas 976-985 y 1007-1012)
  - `.teacher-name` declarado dos veces (líneas 853-862 y 864-868)
  - `.teacher-label` declarado dos veces (líneas 859-863 y 870-873)
- **Comentarios duplicados**: `LABORATORIO STEAM SECTION` aparece en líneas 2253 y 2256
- **Reglas muertas**: `.chevron-icon` (línea 443) nunca se usa en HTML
- **Selectores innecesariamente específicos**: `.phase-2 .phase-card h4`, `.phase-2 .phase-card p`
- **`!important` usado 25+ veces** en la sección responsive inferior
- **Variables CSS incompletas**: muchos colores hardcodeados (`#333`, `#555`, `white`, `rgba(255,255,255,0.9)`)
- Falta `color-scheme` en `:root`
- No hay estrategia de capas (layers) ni organización por componentes

### Responsive
- **Demasiados breakpoints solapados**: 320px, 480px, 640px, 641px, 768px, 1024px, 1025px, 2000px
- Cambio de `font-size` en `html` en breakpoints pequeños (480px, 481-640px) — afecta accesibilidad y previsibilidad
- `responsive-phases.css` es un archivo separado pero debería estar integrado o usar la misma lógica
- Falta `prefers-reduced-motion`
- Falta `prefers-color-scheme`
- No hay container queries
- No hay soporte RTL (no requerido pero limitante para escalabilidad)

### Animaciones
- 9 animaciones definidas: `neonGlow`, `float1`, `float2`, `fadeIn`, `bounce`, `pulse-master`, `pulse-leader`, `pulse-icon`, `levitacion`, `pulse-neon`, `expandFade`, `rotateBg`, `spin`, `fadeInDown`, `fadeInUp`, `project-detail-content`
- Uso intensivo de `filter: blur()` y `box-shadow` animados — costo de renderizado alto
- `will-change` usado solo en `.team-photo-placeholder` y `.lab-card p`
- Animaciones aplicadas globalmente sin `prefers-reduced-motion`

## JavaScript

### Organización y reutilización
- Un solo archivo `script.js` mezcla navegación, carrusel, renderizado de proyectos, formulario, animaciones scroll y utilidades
- **Función no definida**: `toggleGalleryCard` se exporta en línea 348 pero no existe en el archivo
- **Variable no definida**: `projects` se usa en `renderProjects()` (línea 178) y se referencia en el log de DOMContentLoaded (línea 337), pero el array `projects` no está declarado en ninguna parte del archivo. La función `renderProjects()` fallará en tiempo de ejecución.
- **Comentado código muerto**: bloque anime.js comentado en `index.html` (líneas 889-908)
- **Console.log en producción**: 4 mensajes de consola (líneas 328, 337, 382-384)

### Eventos
- Múltiples `DOMContentLoaded` listeners (líneas 36 y 327)
- Scroll listener sin throttling/debouncing (línea 57)
- No hay delegación de eventos para elementos dinámicos (excepto carrusel)

### Seguridad
- **Credenciales expuestas**: Public Key de EmailJS en código cliente (línea 229): `emailjs.init('ibWeP7W-ngDc8fiuD')`
- Service ID y Template ID expuestos (línea 245): `service_r9k026l`, `template_w2p6vr8`
- Sin sanitización de inputs antes de enviar (se confía en EmailJS)
- Scripts externos sin `integrity` ni `crossorigin` (Font Awesome, Google Fonts, EmailJS)

### Rendimiento
- No hay lazy loading nativo para imágenes (excepto en `Album-2025-2026.html` línea 800)
- No hay Intersection Observer para videos
- No hay preload/prefetch para recursos críticos
- El carrusel tiene autoplay sin pausa accesible visible

## Recursos

### Imágenes
- **121 imágenes en `assets/img/Album/`** con nombres tipo WhatsApp (`WhatsApp Image 2026-04-24 at 10.25.09 AM (1).jpeg`) — sin renombrar, sin compresión visible, sin WebP/AVIF
- **13 imágenes en `assets/img/equipo/`**:
  - `Isa-2.jpg` y `Isa-23.jpg` (posible duplicado o variante)
  - `Stiven-1.png` y `Stiven-2.png` (duplicado aparente)
- Logo anidado en `assets/img/logo/logo/logo.jpg` (doble carpeta `logo/logo/`)
- Imágenes en `Ecoprogramadores/` referenciadas con rutas relativas desde las páginas de proyecto — **funcionan solo si se sirve desde la raíz**, pero los paths son frágiles

### Videos y audio
- 7 videos MP4 en `Ecoprogramadores/` (sin versiones WebM)
- 2 podcasts MP3 en `Ecoprogramadores/Podcast EcoVoces/`
- Videos cargan con `preload="metadata"` (correcto)
- Sin thumbnails generados ni posters en videos

### Fuentes
- Google Fonts (Montserrat + Roboto) cargados en `index.html` y `Album-2025-2026.html`
- **No se cargan en las 6 páginas de proyecto**, que usan `var(--font-primary)` y `var(--font-secondary)` — si las variables no están definidas en esos contextos, fallback a sans-serif del sistema

## Responsive

- Se identifican breakpoints: 320px, 480px, 640px, 641px, 768px, 1024px, 1025px, 2000px
- Inconsistencia entre `styles.css` y `responsive-phases.css` en valores de padding y font-size para mismas secciones
- Uso de `!important` en media queries indica sobreescritura de reglas en lugar de especificidad controlada
- En móvil (`max-width: 480px`) se reduce el `font-size` de `html` a 14px, lo que puede afectar legibilidad
- No hay pruebas en dispositivos reales documentadas

## Accesibilidad

### Contraste
- Uso extensivo de gradientes oscuros con texto blanco/verde neón — el contraste puede fallar en algunos puntos, especialmente con `rgba(255,255,255,0.6)` sobre fondos complejos
- No se evidenció auditoría de contraste con herramientas

### Navegación por teclado
- **No hay skip link**
- **Lightbox en Album no captura foco ni previene scroll del body** (solo oculta overflow pero no hay trampa de foco)
- **Carrusel sin controles de pausa accesible ni `aria-live`**
- Botones de carrusel tienen `aria-label` (bien)
- Botón de menú móvil tiene `aria-label` (bien)

### Formularios
- Labels correctamente asociados con `for` en `index.html`
- **Falta `autocomplete`** en nombre, email y mensaje
- Mensaje de éxito es un `div` sin `role="status"` ni `aria-live`
- Error se muestra con `alert()` nativo (pobre UX y accesibilidad)

## SEO

- Meta description presente solo en `index.html` y `Album-2025-2026.html`
- Títulos de página adecuados pero genéricos
- Sin etiquetas Open Graph / Twitter Cards
- Sin canonical URLs
- Sin `robots.txt`
- Sin `sitemap.xml`
- Sin structured data (JSON-LD)
- URLs de proyectos son descriptivas pero sin slug semántico adicional
- En `proyecto-juego.html` hay dos `<h1>` en el mismo documento

## UX

### Consistencia
- Tema visual consistente (verde/turquesa) en toda la navegación
- Tipografía consistente (Montserrat + Roboto)
- Patrones de botones y cards repetidos
- **Inconsistencia**: páginas de proyecto tienen header reducido sin menú, rompiendo la experiencia de navegación
- Botón "Volver" en páginas de proyecto apunta a `index.html#gallery`, pero el usuario pierde el contexto de scroll

### Interacción
- Carrusel con autoplay (5s) que se pausa al hover — puede ser disruptivo
- Animaciones de entrada con `IntersectionObserver` en `index.html` — buen enfoque
- Galería expandible en `index.html` referenciada en estilos pero no hay lógica JS conectada (solo `toggleGalleryCard` exportada pero no definida)
- Lightbox funcional en Album con navegación por teclado (flechas y ESC) — buen detalle
- Formulario con feedback visual limitado

## Performance

### Renderizado
- CSS monolítico de 2.577 líneas — potencial para podar reglas no usadas
- Animaciones con `filter: blur(80px)` en fondos — costo de composición alto en GPUs modestas
- No hay `content-visibility` para secciones fuera de viewport
- `will-change` limitado a selectores específicos

### Carga
- 3 recursos externos bloqueantes en `<head>`: Google Fonts, Font Awesome CDN, EmailJS
- No hay `preload` para fuentes críticas
- No hay lazy loading nativo en `index.html` (sí en Album)
- No hay dimensiones intrínsecas en imágenes (no `width`/`height` ni `aspect-ratio`) — riesgo de layout shift

### Assets
- 121 imágenes de álbum sin compresión ni formatos modernos
- Videos MP4 sin WebM (mejor compresión)
- Logo de 48x48 en header y 160x160 en hero — misma imagen escalada, sin `srcset`

## Fortalezas

1. Tema visual cohesionado y alineado con la identidad ecológica
2. Variables CSS bien definidas para colores, espaciado, bordes y sombras
3. HTML semántico en página principal (header, nav, section, footer)
4. Scroll suave y experiencia de navegación fluida en página principal
5. Carrusel interactivo con controles, dots y autoplay
6. Galería de proyectos con páginas individuales dedicadas
7. Uso de `IntersectionObserver` para animaciones al scroll
8. Lightbox funcional en álbum con navegación por teclado
9. Formulario de contacto integrado con EmailJS
10. Diseño responsive con múltiples breakpoints
11. Animaciones y micro-interacciones que mejoran la experiencia
12. Documentación básica en README.md

## Debilidades

1. Duplicación masiva de HTML/CSS entre páginas de proyecto
2. CSS monolítico sin arquitectura ni modularidad
3. JavaScript con funciones no definidas (`toggleGalleryCard`) y variables no declaradas (`projects`)
4. Credenciales de EmailJS expuestas en código cliente
5. 121 imágenes sin optimizar ni renombrar
6. Sin metaetiquetas SEO en páginas de proyecto
7. Sin skip link ni landmarks de accesibilidad robustos
8. Sin sistema de construcción ni control de dependencias
9. Nombres de archivo inconsistentes y con espacios (carpetas en `Ecoprogramadores/`)
10. Teléfono de contacto incompleto

## Riesgos

1. **Rendimiento degradado** al crecer el álbum de fotos (actualmente 121 imágenes cargadas en grid)
2. **Fallo silencioso** de `renderProjects()` y `toggleGalleryCard` puede confundir a mantenedores
3. **Fuga de credenciales** de EmailJS puede ser abusada si el repositorio es público
4. **Inconsistencia de layouts** al agregar nuevos proyectos (cada desarrollador copia y pega inline styles)
5. **Dependencia de CDNs** sin fallback: si Font Awesome, Google Fonts o EmailJS caen, el sitio se degrada
6. **Costo de hosting** por videos y audio sin compresión ni streaming adaptativo
7. **Accesibilidad deficiente** puede excluir usuarios y generar problemas legales en algunos contextos
8. **Mantenibilidad cero** a mediano plazo sin refactor: un cambio de color requiere editar 8 archivos

## Deuda Técnica

1. **Duplicación de layout**: 7 páginas repiten ~100 líneas de header/nav/idénticas
2. **CSS inline en páginas de proyecto**: ~70 líneas repetidas 7 veces
3. **Selectores CSS duplicados** (.team-photo-placeholder, .teacher-name, .teacher-label)
4. **Comentarios duplicados** en CSS
5. **Funciones JavaScript zombie**: `toggleGalleryCard`, `renderProjects` con `projects` no definido
6. **Console.log en producción**
7. **Sin tipado ni linting**: cero garantías de calidad
8. **Sin pruebas**: ningún test automatizado
9. **Recursos sin pipeline**: imágenes y videos editados manualmente sin optimización
10. **Nombres de carpetas con espacios y tildes** (`Animación digital de sensibilización`, `video de precentacion de ecoporogramadores`)

## Problemas Detectados

### 🔴 Crítico

**1. Variables y funciones JavaScript no definidas causan fallos en runtime**
- **Descripción**: `script.js` referencia el array `projects` en `renderProjects()` y en el log de inicialización, pero dicho array no existe. También exporta `toggleGalleryCard` al objeto `window` sin estar definida.
- **Impacto**: Errores en consola, funciones que no ejecutan, experiencia de mantenimiento confusa
- **Dónde**: `assets/js/script.js` líneas 178, 337, 348, 369-379
- **Por qué**: Código inacabado o eliminado sin limpiar referencias
- **Cómo solucionarse**: Definir el array `projects` con datos reales o eliminar `renderProjects()` si no se usa. Definir o eliminar `toggleGalleryCard`.
- **Prioridad**: Crítico

**2. Credenciales de EmailJS expuestas en código fuente**
- **Descripción**: Public Key, Service ID y Template ID de EmailJS están hardcodeados en `script.js`.
- **Impacto**: Cualquier persona con acceso al repositorio puede usar la cuota de envío de emails del proyecto
- **Dónde**: `assets/js/script.js` líneas 229 y 245
- **Por qué**: EmailJS es un servicio client-side, pero las credenciales deben rotarse y limitarse por dominio
- **Cómo solucionarse**: Mover configuración a variables de entorno en build, o en su defecto restringir el servicio EmailJS por dominio y rotar las credenciales expuestas
- **Prioridad**: Crítico

**3. Duplicación total de layout en 7 páginas de proyecto**
- **Descripción**: Cada página (`proyecto-animacion.html`, `proyecto-juego.html`, etc.) contiene header, nav y estilos inline idénticos.
- **Impacto**: Cualquier cambio de logo, color o estructura requiere editar 8 archivos
- **Dónde**: `proyecto-*.html` (7 archivos)
- **Por qué**: Ausencia de sistema de templates, includes o componentes
- **Cómo solucionarse**: Adoptar un generador estático (Eleventy, Astro) o crear partials HTML
- **Prioridad**: Crítico

### 🟠 Alto

**4. Falta de metaetiquetas SEO en 6 de 8 páginas**
- **Descripción**: Solo `index.html` y `Album-2025-2026.html` tienen meta description. Ninguna página tiene OG tags, canonical ni structured data.
- **Impacto**: Pobre indexación en motores de búsqueda, previews pobres en redes sociales
- **Dónde**: `proyecto-animacion.html`, `proyecto-juego.html`, `proyecto-podcast.html`, `proyecto-presentacion.html`, `proyecto-prototipo.html`, `proyecto-diseno.html`, `proyecto-educativo.html`
- **Por qué**: Metatags agregados solo en página principal y álbum
- **Cómo solucionarse**: Establecer template base con metadatos por página
- **Prioridad**: Alto

**5. CSS monolítico de 2.577 líneas sin arquitectura**
- **Descripción**: Un solo archivo CSS con estilos de todas las secciones mezclados
- **Impacto**: Dificultad para mantener, depurar y escalar; riesgo de regresiones
- **Dónde**: `assets/css/styles.css`
- **Por qué**: Crecimiento orgánico sin plan de arquitectura CSS
- **Cómo solucionarse**: Migrar a metodología de capas (ITCSS, CSS Modules) o preprocesador con partials
- **Prioridad**: Alto

**6. Selectores y declaraciones CSS duplicados**
- **Descripción**: `.team-photo-placeholder`, `.teacher-name`, `.teacher-label` declarados dos veces cada uno. Comentario `LABORATORIO STEAM SECTION` duplicado.
- **Impacto**: Código muerto, confusion en mantenimiento, posible overriding inesperado
- **Dónde**: `assets/css/styles.css` líneas 976-985/1007-1012, 853-862/864-868, 859-863/870-873, 2253/2256
- **Por qué**: Copia y pega sin limpieza
- **Cómo solucionarse**: Auditoría CSS con herramientas como `stylelint` para detectar duplicados
- **Prioridad**: Alto

**7. Recursos multimedia no optimizados**
- **Descripción**: 121 imágenes de álbum con nombres de WhatsApp, sin compresión, sin WebP/AVIF. Videos MP4 sin WebM.
- **Impacto**: Página de álbum extremadamente pesada, LCP alto, consumo excesivo de datos
- **Dónde**: `assets/img/Album/` (121 archivos), `Ecoprogramadores/` (videos y audios)
- **Por qué**: Sin pipeline de optimización de imágenes/videos
- **Cómo solucionarse**: Renombrar archivos, comprimir con Squoosh/ImageOptim, generar WebP/AVIF, usar `<picture>` y `srcset`
- **Prioridad**: Alto

**8. Teléfono de contacto incompleto**
- **Descripción**: Solo aparece `+57` sin número telefónico real.
- **Impacto**: Información de contacto falsa/incompleta
- **Dónde**: `index.html` línea 765
- **Por qué**: Placeholder nunca reemplazado
- **Cómo solucionarse**: Agregar número real o eliminar el campo si no aplica
- **Prioridad**: Alto

### 🟡 Medio

**9. HTML inline en 7 páginas de proyecto**
- **Descripción**: Cada página de proyecto tiene un bloque `<style>` con las mismas reglas de layout.
- **Impacto**: Duplicación, dificultad de mantenimiento, peso adicional por reglas repetidas
- **Dónde**: `proyecto-*.html` (7 archivos)
- **Por qué**: Falta de CSS compartido o base común
- **Cómo solucionarse**: Extraer estilos comunes a un archivo CSS compartido o usar plantillas
- **Prioridad**: Medio

**10. Falta de skip link y landmarks de accesibilidad**
- **Descripción**: No hay enlace para saltar al contenido principal, no hay `<main>`, no hay landmarks semánticos adicionales.
- **Impacto**: Navegación por teclado dificultada para usuarios de lectores de pantalla
- **Dónde**: Todas las páginas
- **Por qué**: Accesibilidad no considerada en el diseño inicial
- **Cómo solucionarse**: Agregar `<a href="#main-content" class="skip-link">Saltar al contenido</a>` y `<main id="main-content">`
- **Prioridad**: Medio

**11. Texto alternativo genérico y typos**
- **Descripción**: Alt texts como "Proceso 1", "Juego 1", "Juegp 8" (typo)
- **Impacto**: Accesibilidad deficiente para usuarios de lectores de pantalla
- **Dónde**: `proyecto-animacion.html`, `proyecto-juego.html`
- **Por qué**: Rápida carga de assets sin revisión de accesibilidad
- **Cómo solucionarse**: Revisar y corregir todos los atributos `alt` con descripciones significativas
- **Prioridad**: Medio

**12. Uso excesivo de `!important` en media queries**
- **Descripción**: Más de 25 usos de `!important` en la sección responsive inferior de `styles.css`
- **Impacto**: Sobreescritura frágil, dificulta debugging y herencia
- **Dónde**: `assets/css/styles.css` líneas 2398-2577
- **Por qué**: Breakpoints solapados que requieren forzar valores
- **Cómo solucionarse**: Reorganizar media queries por especificidad y eliminar solapamientos
- **Prioridad**: Medio

**13. Animaciones sin `prefers-reduced-motion`**
- **Descripción**: Ninguna animación respeta la preferencia del sistema para reducir movimiento.
- **Impacto**: Excluye usuarios con trastornos vestibulares
- **Dónde**: `assets/css/styles.css`
- **Por qué**: No se implementó preferencia de accesibilidad
- **Cómo solucionarse**: Agregar `@media (prefers-reduced-motion: reduce)` para desactivar animaciones
- **Prioridad**: Medio

**14. Dependencias externas sin `integrity`**
- **Descripción**: Google Fonts, Font Awesome y EmailJS se cargan sin atributos `integrity` ni `crossorigin`.
- **Impacto**: Riesgo de inyección si los CDN son comprometidos
- **Dónde**: `index.html` líneas 13-26
- **Por qué**: Implementación estándar sin hardening
- **Cómo solucionarse**: Agregar `integrity` con hashes SRI y `crossorigin="anonymous"`
- **Prioridad**: Medio

**15. Scroll listener sin throttling**
- **Descripción**: Evento `scroll` en `window` sin optimización.
- **Impacto**: Posible jank en scroll en dispositivos de baja gama
- **Dónde**: `assets/js/script.js` línea 57
- **Por qué**: Código simple sin optimización de rendimiento
- **Cómo solucionarse**: Usar `requestAnimationFrame` o `IntersectionObserver` para header scroll effect
- **Prioridad**: Medio

### 🟢 Bajo

**16. Console.log en producción**
- **Descripción**: 4 mensajes de consola en `script.js`
- **Impacto**: Ruido en consola, fuga de nombres de proyecto
- **Dónde**: `assets/js/script.js` líneas 328, 337, 382-384
- **Por qué**: Debugging olvidado
- **Cómo solucionarse**: Eliminar o usar logger condicional por entorno
- **Prioridad**: Bajo

**17. Código comentado muerto**
- **Descripción**: Bloque anime.js comentado en `index.html` líneas 889-908
- **Impacto**: Desorden visual, confusión
- **Dónde**: `index.html`
- **Por qué**: Prueba abandonada
- **Cómo solucionarse**: Eliminar código muerto
- **Prioridad**: Bajo

**18. Selectores CSS muertos**
- **Descripción**: `.chevron-icon` (línea 443) nunca se usa en HTML
- **Impacto**: Código muerto
- **Dónde**: `assets/css/styles.css`
- **Por qué**: Clase sobrante de evolución del diseño
- **Cómo solucionarse**: Eliminar selector no usado
- **Prioridad**: Bajo

**19. Nombres de carpetas con espacios y errores tipográficos**
- **Descripción**: `video de precentacion de ecoporogramadores` (typo: precentacion/ecoporogramadores)
- **Impacto**: URLs frágiles, riesgo de links rotos
- **Dónde**: `Ecoprogramadores/video de precentacion de ecoporogramadores/`
- **Por qué**: Nombres creados manualmente sin convención
- **Cómo solucionarse**: Renombrar a `video-presentacion-ecoprogramadores/` y actualizar referencias
- **Prioridad**: Bajo

**20. Falta de atributos `width`/`height` en imágenes para CLS**
- **Descripción**: Muchas imágenes carecen de dimensiones intrínsecas.
- **Impacto**: Layout shift (CLS) en carga
- **Dónde**: Varias páginas
- **Por qué**: No se implementó reserva de espacio
- **Cómo solucionarse**: Agregar `width` y `height` o `aspect-ratio` en CSS para imágenes
- **Prioridad**: Bajo

## Quick Wins

1. **Corregir teléfono incompleto** — agregar número real o eliminar campo (5 min)
2. **Corregir typo "Juegp 8"** en `proyecto-juego.html` (1 min)
3. **Eliminar `console.log`** de `script.js` (2 min)
4. **Eliminar código comentado** anime.js en `index.html` (1 min)
5. **Eliminar selector `.chevron-icon`** no usado (1 min)
6. **Agregar meta description** faltantes en 6 páginas (15 min)
7. **Rotar credenciales EmailJS** expuestas (10 min + cambio en servicio)
8. **Agregar skip link** a todas las páginas (10 min)
9. **Renombrar carpeta** `video de precentacion de ecoporogramadores` (5 min)
10. **Agregar `autocomplete`** a campos de formulario (5 min)

## Refactorizaciones Recomendadas

1. **Adoptar generador estático** (Astro, Eleventy o 11ty) para eliminar duplicación de header/footer/nav
2. **Migrar CSS a arquitectura por capas** (ITCSS) o preprocesador con partials
3. **Crear componentes visuales reutilizables** (cards, botones, secciones) en CSS
4. **Unificar breakpoints** en un sistema coherente (ej: 480, 768, 1024, 1280)
5. **Implementar pipeline de imágenes** con Sharp/Vite para generar WebP, AVIF y tamaños múltiples
6. **Extraer estilos inline** de páginas de proyecto a CSS compartido
7. **Crear sistema de datos JSON** para proyectos, integrantes y álbum, renderizados dinámicamente
8. **Implementar linting** (stylelint + ESLint) y formateo (Prettier)
9. **Agregar tests** básicos de smoke con Playwright o Vitest
10. **Implementar Service Worker** para cache offline de assets estáticos

## Roadmap Propuesto

### Fase 1: Estabilización (Semana 1)
- Corregir errores críticos: telefono, typos, console.log, código muerto
- Rotar credenciales EmailJS
- Agregar metaetags faltantes
- Agregar skip link y mejoras básicas de accesibilidad

### Fase 2: Arquitectura Base (Semana 2-3)
- Seleccionar e implementar generador estático (Astro recomendado por simplicidad)
- Crear layouts compartidos (header, footer, nav)
- Eliminar duplicación de HTML en páginas de proyecto

### Fase 3: Sistema de Componentes (Semana 3-4)
- Migrar CSS a arquitectura por capas o CSS Modules
- Crear componentes: Button, Card, Section, ProjectCard, TeamMember
- Unificar breakpoints y eliminar `!important`

### Fase 4: Gestión de Contenido (Semana 4-5)
- Mover contenido de proyectos a archivos JSON/Markdown
- Implementar rutas dinámicas para páginas de proyecto
- Generar álbum dinámicamente desde carpeta de imágenes

### Fase 5: Optimización de Assets (Semana 5-6)
- Renombrar y comprimir imágenes
- Generar formatos WebP/AVIF
- Implementar `srcset` y `sizes`
- Comprimir videos y generar WebM
- Implementar lazy loading nativo y dimensiones intrínsecas

### Fase 6: Accesibilidad y SEO (Semana 6)
- Auditoría de contraste con herramientas
- Implementar `prefers-reduced-motion`
- Mejorar textos alternativos
- Agregar structured data, OG tags, canonical URLs
- Crear `sitemap.xml` y `robots.txt`

### Fase 7: Performance (Semana 7)
- Implementar preload para fuentes críticas
- Agregar `integrity` a CDNs
- Code splitting automático (si aplica en Astro)
- Optimizar animaciones con `will-change` y `transform` only
- Implementar Service Worker para cache

### Fase 8: Calidad y Pruebas (Semana 8)
- Configurar ESLint + Stylelint + Prettier
- Agregar tests de smoke con Playwright
- Configurar CI/CD básico (GitHub Actions)
- Documentación de mantenimiento

### Fase 9: Auditoría Final (Semana 9)
- Validación Lighthouse en todas las páginas
- Pruebas de accesibilidad con axe DevTools
- Pruebas en dispositivos reales
- Revisión de seguridad

## Conclusión Final

El proyecto **EcoProgramadores STEAM MUTIS** es un sitio web funcional y visualmente atractivo que cumple su objetivo de divulgación. Sin embargo, presenta **deuda técnica crítica** que limita su escalabilidad y mantenibilidad. Los problemas más urgentes son:

1. **Fallo funcional en JavaScript** (`projects` no definido, `toggleGalleryCard` zombie)
2. **Credenciales expuestas** de EmailJS
3. **Duplicación masiva** de HTML/CSS que impedirá crecer sin refactor

El proyecto necesita urgentemente una **Fase 0** de estabilización antes de agregar nuevos contenidos. La arquitectura actual (HTML estático sin sistema de componentes) es insostenible para 8 páginas y se volverá crítica con 12 integrantes y contenido multimedia creciente.

Se recomienda **detener la adición de nuevos proyectos** hasta completar al menos la Fase 2 del roadmap (Arquitectura Base con generador estático). De lo contrario, cada nuevo proyecto duplicará la deuda técnica existente.

---

## User

# PROYECTO

Nombre: EcoProgramadores STEAM MUTIS
Fase: 0.5 - Mapa Arquitectónico del Proyecto
Versión: 1.0
Prioridad: Crítica
Estado: Inspección Arquitectónica

# ROL

Actúa como un Software Architect Principal con experiencia en arquitectura de software, frontend, UX, rendimiento, mantenibilidad y escalabilidad.

NO eres un desarrollador durante esta fase.

NO eres un auditor tradicional.

Tu misión es construir un documento técnico que sirva como mapa maestro del proyecto para todas las fases futuras.

Este documento será la referencia oficial para cualquier modificación posterior.

No debes asumir absolutamente nada.

Toda afirmación debe estar basada en evidencia encontrada dentro del proyecto.

--------------------------------------------------

# OBJETIVO

Construir el Mapa Arquitectónico completo del proyecto.

El objetivo NO es encontrar errores.

El objetivo es comprender completamente cómo funciona el proyecto.

Debes documentar:

- estructura
- relaciones
- dependencias
- reutilización
- consistencia
- recursos
- riesgos
- oportunidades

como lo haría un arquitecto antes de aprobar una refactorización.

--------------------------------------------------

# RESTRICCIONES

NO modificar archivos.

NO crear archivos.

NO eliminar archivos.

NO mover archivos.

NO instalar dependencias.

NO escribir código.

NO sugerir tecnologías.

NO proponer migraciones.

NO recomendar frameworks.

NO proponer Astro.

NO proponer React.

NO proponer Vite.

NO proponer Next.

NO proponer ninguna tecnología.

En esta fase únicamente se documenta el estado actual.

--------------------------------------------------

# TAREAS

## 1. INVENTARIO GENERAL

Genera un inventario completo del proyecto.

Incluye:

- carpetas
- subcarpetas
- HTML
- CSS
- JavaScript
- imágenes
- videos
- SVG
- iconos
- audios
- documentos
- fuentes
- librerías externas

Indica cantidades.

--------------------------------------------------

## 2. MAPA DE LA ESTRUCTURA

Construye un árbol del proyecto.

Ejemplo:

Proyecto

├── assets

├── css

├── js

├── img

├── videos

├── ...

No copies este ejemplo.

Genera el árbol real.

--------------------------------------------------

## 3. MAPA DE PÁGINAS

Para cada HTML documenta:

Nombre

Propósito

Secciones

Componentes

Recursos utilizados

Dependencias

Relación con otras páginas

Navegación

--------------------------------------------------

## 4. MAPA DE DEPENDENCIAS

Identifica:

Qué archivo depende de cuál.

Qué CSS afecta qué páginas.

Qué JS afecta qué páginas.

Qué recursos utiliza cada página.

Qué elementos son compartidos.

Qué elementos son exclusivos.

--------------------------------------------------

## 5. MATRIZ DE REUTILIZACIÓN

Construye una matriz indicando:

Header

Footer

Navbar

Botones

Cards

Formularios

Galerías

Secciones

Animaciones

Variables CSS

Tipografías

Colores

Sombras

Espaciados

Border Radius

Íconos

Para cada uno indica:

Cantidad

Dónde se usa

Nivel de reutilización

--------------------------------------------------

## 6. MAPA DEL CSS

Analiza completamente el sistema visual.

Documenta:

Variables

Colores

Tipografías

Espaciados

Sombras

Gradientes

Animaciones

Breakpoints

Media Queries

Z-index

Transiciones

Duraciones

Selectores repetidos

Jerarquía

Especificidad

Capas visuales

Consistencia

--------------------------------------------------

## 7. MAPA DEL JAVASCRIPT

Documenta:

Funciones

Eventos

Listeners

Inicializaciones

Flujo de ejecución

Dependencias

Funciones reutilizadas

Funciones aisladas

Código muerto

Código duplicado

Flujo general del sistema

--------------------------------------------------

## 8. MAPA DE RECURSOS

Clasifica:

Imágenes

Videos

SVG

Audios

Íconos

Fuentes

Documentos

Indica:

cantidad

peso aproximado si es posible

nomenclatura

organización

consistencia

--------------------------------------------------

## 9. CONSISTENCIA VISUAL

Documenta:

Botones

Cards

Inputs

Etiquetas

Títulos

Subtítulos

Colores

Espaciados

Sombras

Iconografía

Animaciones

Indicando:

cantidad

variantes

consistencia

--------------------------------------------------

## 10. MATRIZ DE IMPACTO

Construye una tabla indicando:

Elemento

Archivos afectados

Nivel de impacto

Nivel de riesgo

Ejemplo

Modificar Navbar

↓

Afecta:

index

proyectos

footer

...

Riesgo

Alto

--------------------------------------------------

## 11. MÉTRICAS DEL PROYECTO

Genera métricas reales.

Ejemplo:

Archivos HTML

Archivos CSS

Archivos JS

Líneas CSS

Líneas JS

Imágenes

Videos

Audios

SVG

Dependencias externas

Variables CSS

Animaciones

Media Queries

Breakpoints

Selectores

Componentes repetidos

Recursos duplicados

Funciones

Eventos

Listeners

--------------------------------------------------

## 12. ÍNDICE DE SALUD

Califica objetivamente:

Arquitectura

Mantenibilidad

Escalabilidad

Performance

UX

Accesibilidad

SEO

Consistencia

Seguridad

Organización

Deuda Técnica

Asignando un porcentaje y justificando brevemente cada uno.

--------------------------------------------------

## 13. OPORTUNIDADES

Identifica:

Qué partes del proyecto tienen mayor potencial de mejora.

Qué partes están correctamente construidas.

Qué partes deberían mantenerse intactas.

Qué partes requerirán especial cuidado durante futuras refactorizaciones.

--------------------------------------------------

# FORMATO DE RESPUESTA

Entrega un documento técnico profesional con esta estructura:

# MAPA ARQUITECTÓNICO DEL PROYECTO

## Resumen Ejecutivo

## Inventario General

## Árbol del Proyecto

## Mapa de Páginas

## Mapa de Dependencias

## Matriz de Reutilización

## Mapa del CSS

## Mapa del JavaScript

## Mapa de Recursos

## Consistencia Visual

## Matriz de Impacto

## Métricas del Proyecto

## Índice de Salud

## Oportunidades de Mejora

## Riesgos de Modificación

## Conclusión Arquitectónica

IMPORTANTE:

No escribas código.

No modifiques archivos.

No propongas tecnologías.

No propongas frameworks.

No propongas migraciones.

Tu única misión es construir el documento arquitectónico más completo posible sobre el estado actual del proyecto.

---

## Assistant

# MAPA ARQUITECTÓNICO DEL PROYECTO

## Resumen Ejecutivo

Este documento describe la arquitectura real del proyecto **EcoProgramadores STEAM MUTIS** en su estado actual, basado exclusivamente en la evidencia encontrada en el repositorio. El proyecto es un sitio web estático compuesto por 8 páginas HTML, 2 hojas CSS y 1 archivo JavaScript, con recursos multimedia alojados localmente y dependencias externas por CDN. No existe un sistema de construcción, bundling, transpilación ni gestión de dependencias. La arquitectura es monolítica, con duplicación estructural entre páginas y una hoja de estilos consolidada de 2.577 líneas. El proyecto funciona, pero su arquitectura actual limita la escalabilidad y la mantenibilidad.

---

## Inventario General

| Tipo | Cantidad | Ruta / Detalle |
|------|----------|----------------|
| Páginas HTML | 8 | `index.html`, `Album-2025-2026.html`, `proyecto-animacion.html`, `proyecto-juego.html`, `proyecto-podcast.html`, `proyecto-presentacion.html`, `proyecto-prototipo.html`, `proyecto-diseno.html`, `proyecto-educativo.html` |
| Hojas CSS | 2 | `assets/css/styles.css` (2.577 líneas), `assets/css/responsive-phases.css` (213 líneas) |
| Archivos JavaScript | 1 | `assets/js/script.js` (385 líneas) |
| Imágenes (activos) | 134 | `assets/img/equipo/` (13), `assets/img/logo/logo/` (1), `assets/img/Album/` (121) |
| Imágenes (contenido) | 17 | Referenciadas desde `Ecoprogramadores/` en páginas de proyecto |
| Videos MP4 | 7 | `Ecoprogramadores/Animación digital de sensibilización/` (2), `Ecoprogramadores/Juego de clasificación de residuos/` (0 directo), `Ecoprogramadores/Prototipo de Punto Ecológico Inteligente/` (2), `Ecoprogramadores/Diseño del prototipo del punto ecológico inteligente/` (1), `Ecoprogramadores/video de precentacion de ecoporogramadores/` (1), `Ecoprogramadores/video educativo para pequeños/` (1) |
| Audios MP3 | 2 | `Ecoprogramadores/Podcast EcoVoces/` (2) |
| Archivos de proyecto Scratch | 1 | `Ecoprogramadores/Juego de clasificación de residuos/Video-juego-clasifica-los-residuos.sb3` |
| Fuentes del sistema | 2 familias | Montserrat, Roboto (cargadas desde Google Fonts CDN en `index.html` y `Album-2025-2026.html`) |
| Librerías externas | 3 | Google Fonts, Font Awesome 6.4.0 (CDN), EmailJS 3 (CDN) |
| SVG inline | Múltiples | Definidos dentro de `index.html` (iconos de contacto, carrusel, scroll indicator) |
| Documentos | 1 | `README.md` (111 líneas) |
| Carpetas de recursos | 7 | Dentro de `Ecoprogramadores/` |

---

## Árbol del Proyecto

```
EcoProgramadores/
├── index.html
├── Album-2025-2026.html
├── proyecto-animacion.html
├── proyecto-diseno.html
├── proyecto-educativo.html
├── proyecto-juego.html
├── proyecto-podcast.html
├── proyecto-presentacion.html
├── proyecto-prototipo.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── responsive-phases.css
│   ├── img/
│   │   ├── Album/ (121 imágenes)
│   │   ├── equipo/ (13 imágenes)
│   │   └── logo/
│   │       └── logo/ (1 imagen)
│   └── js/
│       └── script.js
└── Ecoprogramadores/
    ├── Animación digital de sensibilización/
    │   ├── Animación _Dilema_.mp4
    │   ├── Animación Belleza triste.mp4
    │   └── Proceso de creación/ (4 imágenes)
    ├── Diseño del prototipo del punto ecológico inteligente/
    │   ├── Boceto inicial.jpeg
    │   ├── Diseño del Prototipo en 2D.mp4
    │   └── Imagen del diseño del prototipo en 2D.jpeg
    ├── Juego de clasificación de residuos/
    │   ├── Proceso del juego/ (8 imágenes)
    │   └── Video-juego-clasifica-los-residuos.sb3
    ├── Podcast EcoVoces/
    │   ├── podcast-Ecovoces-capitulo-1.mp3
    │   └── podcast-Ecovoces-capitulo-2.mp3
    ├── Prototipo de Punto Ecológico Inteligente/
    │   ├── video 1.mp4
    │   └── video 2.mp4
    ├── video de precentacion de ecoporogramadores/
    │   └── Video de presentación.mp4
    └── video educativo para pequeños/
        └── Video educativo para pequeños.mp4
```

---

## Mapa de Páginas

| Página | Propósito | Secciones Principales | Componentes | Recursos Utilizados | Dependencias |
|--------|-----------|----------------------|-------------|---------------------|--------------|
| `index.html` | Página principal del sitio | Header, Hero, Carrusel, Quiénes Somos, Equipo, Galería, Fases, Lab STEAM, Contacto, Footer | Navbar, carrusel, cards de proyectos, cards de equipo, formulario de contacto, galería expandible, lightbox no presente | `assets/css/styles.css`, `assets/css/responsive-phases.css`, `assets/js/script.js`, Google Fonts, Font Awesome CDN, EmailJS CDN, imágenes en `assets/img/` | Depende de `assets/css/styles.css` y `assets/js/script.js`. Referencia recursos locales en `assets/img/` y remotos en CDN. |
| `Album-2025-2026.html` | Galería de fotos del equipo | Header, Hero Álbum, Grid de fotos, Lightbox, Footer | Header propio, grid de álbum, lightbox con navegación | CSS inline duplicado (variables, reset, header, footer, responsive), imágenes en `assets/img/Album/` | No depende de `assets/css/styles.css` ni `assets/js/script.js`. CSS y JS inline/autocontenido. |
| `proyecto-animacion.html` | Detalle del proyecto Animación Digital | Header, detalle de proyecto, videos, galería de proceso | Header reducido, botón Volver, videos, imágenes | `assets/css/styles.css` (no, usa CSS inline), imágenes/videos en `Ecoprogramadores/Animación digital de sensibilización/` | Depende solo de su propio CSS inline. Referencia `script.js` en body pero no lo usa. |
| `proyecto-diseno.html` | Detalle del proyecto Diseño del Prototipo | Header, detalle, imágenes, video | Header reducido, botón Volver, contenido multimedia | CSS inline, `Ecoprogramadores/Diseño del prototipo del punto ecológico inteligente/` | Mismo patrón que otras páginas de proyecto. |
| `proyecto-educativo.html` | Detalle del proyecto Video Educativo | Header, detalle, video | Header reducido, botón Volver, video | CSS inline, `Ecoprogramadores/video educativo para pequeños/` | Mismo patrón. |
| `proyecto-juego.html` | Detalle del proyecto Juego de Clasificación | Header, detalle, iframes Scratch, imágenes de proceso | Header reducido, botón Volver, iframes externos, imágenes | CSS inline, `Ecoprogramadores/Juego de clasificación de residuos/`, iframes de scratch.mit.edu | Mismo patrón. Inline styles adicionales para `iframe-container`. |
| `proyecto-podcast.html` | Detalle del proyecto Podcast EcoVoces | Header, detalle, audios | Header reducido, botón Volver, audios | CSS inline, `Ecoprogramadores/Podcast EcoVoces/` | Mismo patrón. |
| `proyecto-presentacion.html` | Detalle del proyecto Video de Presentación | Header, detalle, video | Header reducido, botón Volver, video | CSS inline, `Ecoprogramadores/video de precentacion de ecoporogramadores/` | Mismo patrón. |
| `proyecto-prototipo.html` | Detalle del proyecto Prototipo Punto Ecológico | Header, detalle, videos | Header reducido, botón Volver, videos | CSS inline, `Ecoprogramadores/Prototipo de Punto Ecológico Inteligente/` | Mismo patrón. |

**Relaciones entre páginas:**
- `index.html` es la página central. Desde ella se navega a las 7 páginas de proyecto mediante enlaces en la galería.
- Las 7 páginas de proyecto tienen un botón "Volver" que apunta a `index.html#gallery`.
- `Album-2025-2026.html` está enlazada desde la navbar de `index.html` y desde su propio header hacia `index.html`.

---

## Mapa de Dependencias

### Dependencias CSS
- `index.html` → `assets/css/styles.css` + `assets/css/responsive-phases.css`
- `Album-2025-2026.html` → CSS inline propio (no depende de archivos CSS externos)
- 7 páginas de proyecto → CSS inline propio (no dependen de `assets/css/styles.css` ni de `responsive-phases.css`)

### Dependencias JavaScript
- `index.html` → `assets/js/script.js`
- `Album-2025-2026.html` → JS inline propio (no depende de `script.js`)
- 7 páginas de proyecto → Referencian `<script src="script.js"></script>` en el body, pero el archivo está en `assets/js/script.js`, por lo que **la ruta es incorrecta** desde esas páginas (debería ser `assets/js/script.js`). Sin embargo, ninguna de esas páginas usa funcionalidad de `script.js`; solo el álbum y la página principal requieren lógica JS.

### Dependencias de Recursos
- **`index.html`**: Google Fonts, Font Awesome CDN, EmailJS CDN, imágenes en `assets/img/logo/logo/`, `assets/img/equipo/`, y videos/audios en `Ecoprogramadores/` (para la galería y secciones).
- **`Album-2025-2026.html`**: 121 imágenes en `assets/img/Album/`.
- **Páginas de proyecto**: recursos específicos dentro de `Ecoprogramadores/[proyecto]/`.

### Elementos Compartidos vs Exclusivos
| Elemento | Compartido | Exclusivo |
|----------|------------|-----------|
| Header/Navbar | Solo en `index.html` y `Album-2025-2026.html` | Cada página de proyecto tiene su propio header reducido sin navegación |
| Footer | Solo en `index.html` y `Album-2025-2026.html` | Páginas de proyecto no tienen footer |
| Variables CSS | Definidas en `styles.css` y duplicadas en CSS inline de otras páginas | Cada página de proyecto redefine sus propias variables en `<style>` |
| Tipografía | Montserrat y Roboto variables | No aplica |
| Iconografía | Font Awesome (solo `index.html`) | Páginas de proyecto usan emojis como iconografía |

---

## Matriz de Reutilización

| Elemento | Cantidad | Dónde se usa | Nivel de reutilización |
|----------|----------|--------------|------------------------|
| Header con logo + nav | 2 variantes | `index.html` (completo), `Album-2025-2026.html` (reducido), 7 páginas de proyecto (propio reducido) | Bajo: 3 implementaciones diferentes |
| Footer | 2 | `index.html`, `Album-2025-2026.html` | Bajo: no existe en páginas de proyecto |
| Navbar / Navegación | 2 | `index.html` (desktop + mobile), `Album-2025-2026.html` (solo desktop) | Bajo: no hay navegación en páginas de proyecto |
| Botones primarios (CTA) | 3 estilos | `index.html` (`.cta-button`, `.nav-link-button`, `.contact-cta-button`), páginas de proyecto (`.back-button`) | Medio: estilos similares pero clases diferentes |
| Cards de contenido | 5 tipos | `index.html`: `.about-card`, `.feature-card`, `.phase-card`, `.lab-card`, `.gallery-card` | Medio: comparten border-radius, sombras, transiciones |
| Formulario | 1 | Solo `index.html` (contacto) | Nulo: no hay formularios en otras páginas |
| Inputs | 1 conjunto | Solo `index.html` | Nulo |
| Galería / Grid | 3 | `index.html` (gallery-grid), `Album-2025-2026.html` (album-grid), grid de equipo en `index.html` | Medio: comparten `display: grid` pero con configuraciones distintas |
| Animaciones | 15 definidas | `index.html` y `Album-2025-2026.html` (inline) | Bajo: definidas en CSS inline duplicado |
| Variables CSS | 30+ | `index.html` vía `styles.css`; duplicadas en páginas de proyecto y álbum | Bajo: duplicación manual en lugar de importación |
| Tipografías | 2 familias | `index.html` y `Album-2025-2026.html` via CDN; páginas de proyecto dependen de variables definidas en su propio CSS | Medio: variables compartidas en nombre pero no en carga |
| Colores | 15 variables + hardcodeados | Toda la estructura | Medio: variables definidas pero mucho código hardcodeado |
| Sombras | 4 variables | `styles.css` y páginas que copian variables | Medio |
| Espaciados | 5 variables | `styles.css` y páginas que copian variables | Medio |
| Border Radius | 4 variables | `styles.css` y páginas que copian variables | Medio |
| Íconos | 2 sistemas | `index.html`: Font Awesome (CDN) + SVG inline; resto: emojis | Bajo: sistemas diferentes por página |
| Scroll behavior | 1 | `index.html` y `Album-2025-2026.html` (`scroll-behavior: smooth`) | Bajo |
| Carrusel | 1 implementación | Solo `index.html` | Nulo |
| Lightbox | 1 implementación | Solo `Album-2025-2026.html` | Nulo |
| Formulario de contacto | 1 | Solo `index.html` | Nulo |
| Reproductores multimedia | 1 estilo | Videos y audios en distintas páginas | Bajo: estilos inline similares |

---

## Mapa del CSS

### Variables Definidas (`:root`)
**Archivo**: `assets/css/styles.css` (líneas 4-40) y duplicadas en:
- `Album-2025-2026.html` (líneas 22-53)
- `proyecto-animacion.html` (no define variables propias en `<style>`, pero usa `var(--font-primary)` asumiendo herencia — sin embargo el CSS inline no las define, por lo que **no funcionan**)
- Otras páginas de proyecto: idéntico bloque de variables inline.

**Variables documentadas:**
- Colores: `--color-primary-dark`, `--color-primary-medium`, `--color-primary-green`, `--color-primary-light`, `--color-accent-neon`, `--color-accent-turquoise`, `--color-accent-light`, `--color-accent-mint`, `--color-accent-aqua`, `--color-deep-green`, `--color-teal`
- Tipografía: `--font-primary`, `--font-secondary`
- Espaciado: `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`
- Border radius: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`
- Sombras: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`

### Colores Hardcodeados (sin variable)
- `#333` (body), `#555` (textos), `#fff` / `white`, `rgba(255,255,255,...)` en múltiples variantes, `#f1f1f1` (scrollbar track), `#000` (videos), `#E8F5E9`, `#C8E6C9` (teacher placeholder), `#002600`, `#0c845b`, `#77f697` (contact CTA), `#169b5d`, `#3eb25d` (about section), `#064d15` (project detail background), `#003727` (project detail background), `#115e30`, `#003828`, `#317f6b` (phases), `#36826e`, `#0f6859`, `#004122` (lab), `#90b190` (phases subtitle)

### Tipografía
- **Familias**: Montserrat (weights: 400, 500, 600, 700), Roboto (weights: 300, 400, 500, 700)
- **Tamaños base**: `html { font-size: 16px; }` (modificado en breakpoints móviles)
- **Tamaños comunes**: 0.75rem, 0.85rem, 0.875rem, 0.9rem, 0.95rem, 1rem, 1.1rem, 1.125rem, 1.25rem, 1.5rem, 1.8rem, 2rem, 2.5rem, 3rem, 4rem, 5rem

### Espaciados
- Variables definidas pero **uso inconsistente**: muchos valores hardcodeados como `1rem`, `2rem`, `3rem`, `4rem`, `5rem`, `6rem` sin usar las variables.

### Sombras
- 4 variables definidas, usadas consistentemente en cards y botones.
- Sombras adicionales hardcodeadas: `0 4px 15px rgba(0,0,0,0.06)`, `0 8px 25px rgba(0,200,230,0.15)`, etc.

### Gradientes
- **Fondos de sección**: 8+ gradientes lineales y radiales distintos:
  - Hero: `linear-gradient(135deg, #003727, #00C8E6, ...)`
  - About: `linear-gradient(to bottom, #169b5d, #3eb25d)`
  - Gallery: `linear-gradient(135deg, #3eb25d, #003f20)`
  - Contact: `linear-gradient(135deg, #003727, #006400, #008849)`
  - Project detail: `linear-gradient(135deg, #064d15, #003727)`
  - Phases: `linear-gradient(180deg, #115e30, #003828, #317f6b)`
  - Lab: `linear-gradient(135deg, #36826e, #0f6859, #004122)`
  - Footer: `var(--color-primary-dark)`
  - Carousel overlay: `linear-gradient(to top, rgba(0,55,39,0.5), transparent)`

### Animaciones
Definidas en `styles.css`:
1. `neonGlow` (hero title)
2. `float1` / `float2` (hero background circles)
3. `fadeIn` (entrada general)
4. `bounce` (scroll indicator)
5. `pulse-master` (team photo placeholders)
6. `pulse-leader` (teacher photo)
7. `pulse-icon` (lab icons)
8. `levitacion` (hero logo)
9. `pulse-neon` (hero logo)
10. `expandFade` (gallery cards)
11. `rotateBg` (phases section background)
12. `spin` (featured phase card star)
13. `fadeInDown` / `fadeInUp` (solo en `Album-2025-2026.html` inline)
14. `project-detail-content` (solo en `proyecto-juego.html` inline)

### Breakpoints y Media Queries
**En `styles.css`**:
- `min-width: 768px` (líneas 106, 391, 539, 720, 960, 888, 1890)
- `min-width: 1024px` (líneas 397, 889, 966, 1190, 1411, 1613, 2506)
- `min-width: 640px` (líneas 882, 1183, 1405)
- `max-width: 768px` (líneas 170, 183, 231, 1161, 2521)
- `max-width: 640px` (líneas 1971)
- `max-width: 480px` (líneas 1368, 2399)
- `min-width: 481px and max-width: 640px` (línea 2456)
- `min-width: 641px and max-width: 1024px` (línea 2487)
- `min-width: 1025px` (línea 2506)
- `min-width: 2000px` (línea 2565)

**En `responsive-phases.css`**:
- `max-width: 768px` (línea 6)
- `max-width: 480px` (línea 90)
- `max-width: 320px` (línea 201)

**Total de breakpoints únicos**: 320px, 480px, 640px, 641px, 768px, 1024px, 1025px, 2000px.

### Uso de `!important`
- 25+ usos en `styles.css` líneas 2398-2577.
- 8 usos en `Album-2025-2026.html` inline CSS.
- Uso en `responsive-phases.css`: 0.

### Z-index
- `z-index: 1000` (header)
- `z-index: 2000` (lightbox en álbum)
- `z-index: 10` (hero content, contact grid)
- `z-index: 2` (phases section header)

---

## Mapa del JavaScript

### Funciones Definidas en `assets/js/script.js`

| Función | Líneas | Propósito | Usada en |
|---------|--------|-----------|----------|
| `scrollToSection(sectionId)` | 13-25 | Scroll suave a sección por ID | `index.html` (onclick en CTA), listeners de nav |
| `scrollToTop()` | 28-33 | Scroll al top | `index.html` (botón en contact CTA) |
| `initCarousel()` | 88-172 | Inicializa carrusel, dots, autoplay | Solo `index.html` |
| `updateCarousel()` | 107-119 | Actualiza posición del carrusel | Dentro de `initCarousel` |
| `nextSlide()` | 121-124 | Siguiente slide | Dentro de `initCarousel` |
| `prevSlide()` | 126-129 | Slide anterior | Dentro de `initCarousel` |
| `goToSlide(index)` | 131-135 | Ir a slide específico | Dentro de `initCarousel` |
| `startAutoPlay()` | 153-157 | Inicia autoplay | Dentro de `initCarousel` |
| `stopAutoPlay()` | 158-162 | Detiene autoplay | Dentro de `initCarousel` |
| `renderProjects()` | 178-218 | Renderiza proyectos en grid | Llamada en DOMContentLoaded, pero `projects` no está definido |
| `initContactForm()` | 224-283 | Inicializa formulario EmailJS | Solo `index.html` |
| `initScrollAnimations()` | 289-321 | IntersectionObserver para animaciones | Solo `index.html` |
| `toggleTeamMembers()` | 351-366 | Mostrar/ocultar más integrantes | `index.html` (onclick) |
| `toggleGalleryCard(card)` | 369-379 | Expandir/colapsar tarjeta de galería | Exportada a window pero no definida en HTML |

### Funciones en `Album-2025-2026.html` (inline)
| Función | Líneas | Propósito |
|---------|--------|-----------|
| `initAlbum()` | 792-808 | Generar grid de álbum |
| `openLightbox(index)` | 811-819 | Abrir lightbox |
| `closeLightbox()` | 822-826 | Cerrar lightbox |
| `nextImage()` | 829-834 | Siguiente imagen |
| `prevImage()` | 837-842 | Imagen anterior |

### Event Listeners y Flujo de Ejecución

**`assets/js/script.js`**:
1. `DOMContentLoaded` (línea 36): Agrega smooth scroll a todos los enlaces `a[href^="#"]`. Cierra menú móvil tras navegación.
2. `DOMContentLoaded` (línea 327): Inicializa `initCarousel()`, `renderProjects()`, `initContactForm()`, `initScrollAnimations()`.
3. `scroll` en `window` (línea 57): Agrega/quita clase `.scrolled` en header.
4. `click` en `mobileMenuBtn` (línea 74): Toggle menú móvil.
5. `submit` en `contactForm` (línea 231): Envío por EmailJS.
6. `mouseenter`/`mouseleave` en carrusel (líneas 169-170): Pausa/reanuda autoplay.
7. `click` en dots, prev, next del carrusel.
8. Exportaciones a `window`: `scrollToSection`, `scrollToTop`, `toggleTeamMembers`, `toggleGalleryCard`.

**`Album-2025-2026.html`**:
1. `DOMContentLoaded` (línea 862): Inicializa `initAlbum()`.
2. `keydown` en `document` (línea 845): Navegación de lightbox (ESC, ArrowRight, ArrowLeft).
3. `scroll` en `window` (línea 852): Header scroll effect.

### Código Muerto / No Utilizado
- `toggleGalleryCard` exportada en `window` (línea 348) pero nunca llamada desde HTML; la función existe (líneas 369-379) pero no hay evento que la dispare.
- `renderProjects()` (líneas 178-218): función completa definida, pero depende del array `projects` que **no existe** en el archivo. Por tanto, la función falla en runtime y no renderiza nada.
- Bloque anime.js comentado en `index.html` (líneas 889-908).

### Dependencias Externas en JS
- EmailJS browser SDK (`https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js`): usado para envío de formulario.
- No hay otras dependencias JS externas.

---

## Mapa de Recursos

### Imágenes
| Carpeta | Cantidad | Formato | Nomenclatura | Observaciones |
|---------|----------|---------|--------------|---------------|
| `assets/img/equipo/` | 13 | JPG, PNG | `Nombre.jpg` / `Nombre-1.png`, `Nombre-2.png` | Incluye variantes (`Isa-2.jpg`, `Isa-23.jpg`, `Stiven-1.png`, `Stiven-2.png`) |
| `assets/img/logo/logo/` | 1 | JPG | `logo.jpg` | Ruta anidada doble (`logo/logo/`) |
| `assets/img/Album/` | 121 | JPEG | `WhatsApp Image 2026-04-24 at HH.MM.SS AM/PM (n).jpeg` | Nombres de WhatsApp, sin compresión visible, sin formatos modernos |
| `Ecoprogramadores/Animación digital de sensibilización/Proceso de creación/` | 4 | JPEG | `WhatsApp Image ... .jpeg` | Nombres de WhatsApp |
| `Ecoprogramadores/Juego de clasificación de residuos/Proceso del juego/` | 8 | JPEG, PNG | `WhatsApp Image ... .jpeg`, `Captura de pantalla (n).png` | Mezcla de nomenclaturas |

**Total imágenes**: 147 archivos.

### Videos
| Carpeta | Cantidad | Formato | Tamaño aproximado | Observaciones |
|---------|----------|---------|-------------------|---------------|
| `Ecoprogramadores/Animación digital de sensibilización/` | 2 | MP4 | No determinado | Sin versiones WebM |
| `Ecoprogramadores/Juego de clasificación de residuos/` | 0 directo | — | — | Solo iframes externos |
| `Ecoprogramadores/Prototipo de Punto Ecológico Inteligente/` | 2 | MP4 | No determinado | Sin posters ni thumbnails |
| `Ecoprogramadores/Diseño del prototipo del punto ecológico inteligente/` | 1 | MP4 | No determinado | Sin WebM |
| `Ecoprogramadores/video de precentacion de ecoporogramadores/` | 1 | MP4 | No determinado | Sin WebM |
| `Ecoprogramadores/video educativo para pequeños/` | 1 | MP4 | No determinado | Sin WebM |

**Total videos**: 7 archivos MP4.

### Audios
| Carpeta | Cantidad | Formato |
|---------|----------|---------|
| `Ecoprogramadores/Podcast EcoVoces/` | 2 | MP3 |

### Otros Recursos
- **Scratch project**: 1 archivo `.sb3` en `Ecoprogramadores/Juego de clasificación de residuos/`.
- **Fuentes**: No hay fuentes locales; se cargan desde Google Fonts CDN.
- **Iconos vectoriales**: Font Awesome (CDN) y SVG inline en `index.html`.
- **Documentación**: `README.md` (111 líneas).

---

## Consistencia Visual

### Botones
| Variante | Clases CSS | Dónde se usa | Consistencia |
|----------|------------|--------------|--------------|
| Primario (CTA) | `.cta-button` | `index.html` | Alto: padding, border-radius, transición, hover scale |
| Navegación (Contacto) | `.nav-link-button` | `index.html` | Medio: similar a CTA pero con box-shadow diferente |
| Contact CTA | `.contact-cta-button` | `index.html` | Medio: width 100%, border-radius distinto |
| Volver (proyectos) | `.back-button` | 7 páginas de proyecto | Medio: inline styles, mismo patrón visual pero CSS duplicado |

**Inconsistencias**: border-radius varía (`--radius-full` vs `--radius-sm`), box-shadows variables vs hardcodeados, transiciones con diferentes `ease`.

### Cards
| Tipo | Clases | Dónde | Consistencia |
|------|--------|-------|--------------|
| About | `.about-card` | `index.html` | Alto: padding, border-left, sombra |
| Feature | `.feature-card` | `index.html` | Alto: border-top, sombra, hover translateY |
| Team member | `.team-member` + `.team-photo-placeholder` | `index.html` | Alto: estructura repetida con variantes de color |
| Phase | `.phase-card` | `index.html` | Alto: grid, hover, featured con estrella |
| Lab | `.lab-card` | `index.html` | Alto: glassmorphism, hover 3D |
| Gallery | `.gallery-card` | `index.html` | Alto: border, transiciones, tags |
| Project | `.project-card` | No usado en `index.html` (solo estilos definidos, no markup) | Nulo: CSS presente pero HTML ausente |

**Inconsistencia**: `.project-card` tiene estilos completos pero no aparece en el DOM de `index.html`; la galería usa `.gallery-card` en su lugar.

### Inputs y Formularios
- Solo existen en `index.html` (formulario de contacto).
- Estilos: `.form-input`, `.form-textarea` con background semitransparente, border blanco, focus con `--color-accent-neon`.
- **Inconsistencia**: No hay estilos de formulario en otras páginas (ninguna tiene formulario).

### Títulos y Subtítulos
| Elemento | Clases | Consistencia |
|----------|--------|--------------|
| Título de sección | `.section-title`, `.section-title.dark`, `.section-title.light` | Alto: familia, weight, tamaño responsivo |
| Subtítulo | `.section-subtitle`, `.dark`, `.light` | Alto: opacidad controlada |
| Título de proyecto | `.carousel-title`, `.gallery-title`, `.project-title` | Medio: tamaños distintos por contexto |

### Colores
- **Paleta base**: Verde oscuro (#003727) a turquesa (#00C8E6) con acento neón (#00F771).
- **Uso**: Consistente en navbar, hero, botones, iconos.
- **Desviaciones**: Gradientes de sección usan colores intermedios no variables (#169b5d, #3eb25d, #064d15, #115e30, #36826e).

### Espaciados
- Variables definidas pero **no usadas consistentemente**. Predomina el uso de `rem` hardcodeados.
- Patrón común: `padding: 2rem`, `gap: 2rem`, `margin-bottom: 2rem`.

### Sombras
- Variables definidas y usadas en cards y botones.
- Sombras adicionales hardcodeadas para efectos específicos (team pulse, lab hover).

### Iconografía
- **`index.html`**: Font Awesome + SVG inline.
- **Otras páginas**: Emojis como iconos de sección.
- **Inconsistencia**: Dos sistemas de iconografía completamente diferentes.

### Animaciones
- **`index.html`**: 10+ animaciones CSS + IntersectionObserver para reveal.
- **`Album-2025-2026.html`**: 2 animaciones inline (`fadeInDown`, `fadeInUp`).
- **Páginas de proyecto**: 1 animación inline en `proyecto-juego.html` (`project-detail-content`).
- **Inconsistencia**: Sistemas de animación diferentes por página.

---

## Matriz de Impacto

| Elemento | Archivos afectados | Nivel de impacto | Nivel de riesgo |
|----------|-------------------|------------------|-----------------|
| **Navbar / Header** | `index.html`, `Album-2025-2026.html`, 7 páginas de proyecto | Alto | Alto: 3 implementaciones distintas, cambios requieren edición múltiple |
| **Variables CSS** | Todos los archivos con estilos | Alto | Alto: duplicación manual en 9 archivos |
| **Paleta de colores** | Todos | Alto | Medio: cambios en `:root` afectan todo, pero mucho código hardcodeado no se actualiza |
| **Tipografía** | Todos | Medio | Bajo: solo cambian en archivos que cargan Google Fonts |
| **Botones** | Todos | Medio | Medio: 4 variantes con estilos inline duplicados |
| **Cards** | `index.html` | Medio | Bajo: solo en página principal |
| **Footer** | `index.html`, `Album-2025-2026.html` | Bajo | Bajo: no existe en páginas de proyecto |
| **Formulario de contacto** | `index.html` | Alto | Bajo: solo una implementación |
| **Carrusel** | `index.html` | Alto | Bajo: solo una implementación |
| **Lightbox** | `Album-2025-2026.html` | Bajo | Bajo: solo una implementación |
| **Script.js** | `index.html` | Alto | Alto: contiene funciones zombie y variables no definidas |
| **EmailJS** | `index.html` | Alto | Crítico: credenciales expuestas |
| **Recursos multimedia** | Todos según contenido | Alto | Alto: 134 imágenes + 7 videos sin optimizar |

---

## Métricas del Proyecto

| Métrica | Valor |
|---------|-------|
| Archivos HTML | 9 |
| Archivos CSS | 2 (1 externo, 1 inline en 7 páginas + álbum) |
| Archivos JS | 1 externo + 1 inline en álbum |
| Líneas CSS (externo) | 2.577 |
| Líneas CSS (responsive-phases.css) | 213 |
| Líneas CSS inline estimado | ~630 (70 líneas × 7 páginas de proyecto + ~280 en álbum) |
| Líneas JS (externo) | 385 |
| Líneas JS (inline en álbum) | ~202 |
| Imágenes totales | 147 |
| Videos MP4 | 7 |
| Audios MP3 | 2 |
| Archivos Scratch | 1 |
| Dependencias externas (CDN) | 3 |
| Variables CSS | 30+ |
| Animaciones CSS | 15+ |
| Media Queries | ~20 |
| Breakpoints únicos | 8 |
| Selectores CSS (estimado) | ~400 |
| Componentes repetidos (header/footer/nav) | 3 variantes × 9 páginas = 27 bloques |
| Funciones JS | 14 (en script.js) + 5 (en álbum inline) |
| Event Listeners | ~15 en script.js + ~4 en álbum |
| Páginas sin meta description | 6 de 9 |
| Páginas sin DOCTYPE | 0 (todas tienen `<!DOCTYPE html>`) |
| Páginas con `lang="es"` | 9 |
| Páginas con `<meta viewport>` | 9 |
| Páginas con `<main>` | 0 |
| Páginas con skip link | 0 |

---

## Índice de Salud

| Dimensión | Calificación | Justificación |
|-----------|--------------|---------------|
| **Arquitectura** | 25% | Sitio estático sin sistema de construcción, con duplicación total de layout entre páginas y hoja CSS monolítica de 2.577 líneas sin modularidad. |
| **Mantenibilidad** | 20% | Cualquier cambio de branding requiere editar 9 archivos. CSS inline en 8 páginas. Selectores duplicados. Cero pruebas. |
| **Escalabilidad** | 15% | Agregar un nuevo proyecto requiere copiar y pegar HTML completo con estilos inline. No hay sistema de rutas, datos ni componentes. |
| **Performance** | 35% | 147 imágenes sin optimizar, 7 videos sin streaming adaptativo, 121 imágenes en grid sin paginación, CSS monolítico, CDNs bloqueantes. |
| **UX** | 60% | Navegación fluida en página principal, carrusel funcional, lightbox en álbum, formulario con feedback. Inconsistencias entre páginas (header/footer ausentes en proyectos). |
| **Accesibilidad** | 30% | Tiene `lang`, `alt` en muchas imágenes, `aria-label` en botones de carrusel. Falta skip link, `<main>`, `prefers-reduced-motion`, contraste no auditado, alt texts genéricos, lightbox sin trampa de foco. |
| **SEO** | 25% | Solo 2 de 9 páginas tienen meta description. Sin OG tags, canonical, sitemap, robots.txt, structured data. |
| **Consistencia Visual** | 55% | Tema cohesionado en `index.html`, pero fragmentado en páginas de proyecto (emojis vs Font Awesome, CSS inline vs hoja externa). |
| **Seguridad** | 40% | Credenciales EmailJS expuestas en código cliente. Sin sanitización de inputs. CDNs sin SRI. No hay autenticación ni autorización (no aplica para sitio estático, pero sí para formulario). |
| **Organización** | 35% | Estructura de carpetas comprensible, pero recursos con nombres de WhatsApp, carpetas con espacios y tildes, doble carpeta `logo/logo/`, archivos de proyecto desordenados. |
| **Deuda Técnica** | 20% | Duplicación masiva, código zombie, funciones no definidas, console.log en producción, CSS inline, sin linting, sin pruebas. |

---



The model hit its output limit, so this response may be incomplete.

---

## User

ahora esto bro ## PROYECTO

Nombre: EcoProgramadores STEAM MUTIS
Fase: 0.5 - Mapa Arquitectónico del Proyecto
Versión: 1.0
Prioridad: Crítica
Estado: Inspección Arquitectónica

# ROL

Actúa como un Software Architect Principal con experiencia en arquitectura de software, frontend, UX, rendimiento, mantenibilidad y escalabilidad.

NO eres un desarrollador durante esta fase.

NO eres un auditor tradicional.

Tu misión es construir un documento técnico que sirva como mapa maestro del proyecto para todas las fases futuras.

Este documento será la referencia oficial para cualquier modificación posterior.

No debes asumir absolutamente nada.

Toda afirmación debe estar basada en evidencia encontrada dentro del proyecto.

--------------------------------------------------

# OBJETIVO

Construir el Mapa Arquitectónico completo del proyecto.

El objetivo NO es encontrar errores.

El objetivo es comprender completamente cómo funciona el proyecto.

Debes documentar:

- estructura
- relaciones
- dependencias
- reutilización
- consistencia
- recursos
- riesgos
- oportunidades

como lo haría un arquitecto antes de aprobar una refactorización.

--------------------------------------------------

# RESTRICCIONES

NO modificar archivos.

NO crear archivos.

NO eliminar archivos.

NO mover archivos.

NO instalar dependencias.

NO escribir código.

NO sugerir tecnologías.

NO proponer migraciones.

NO recomendar frameworks.

NO proponer Astro.

NO proponer React.

NO proponer Vite.

NO proponer Next.

NO proponer ninguna tecnología.

En esta fase únicamente se documenta el estado actual.

--------------------------------------------------

# TAREAS

## 1. INVENTARIO GENERAL

Genera un inventario completo del proyecto.

Incluye:

- carpetas
- subcarpetas
- HTML
- CSS
- JavaScript
- imágenes
- videos
- SVG
- iconos
- audios
- documentos
- fuentes
- librerías externas

Indica cantidades.

--------------------------------------------------

## 2. MAPA DE LA ESTRUCTURA

Construye un árbol del proyecto.

Ejemplo:

Proyecto

├── assets

├── css

├── js

├── img

├── videos

├── ...

No copies este ejemplo.

Genera el árbol real.

--------------------------------------------------

## 3. MAPA DE PÁGINAS

Para cada HTML documenta:

Nombre

Propósito

Secciones

Componentes

Recursos utilizados

Dependencias

Relación con otras páginas

Navegación

--------------------------------------------------

## 4. MAPA DE DEPENDENCIAS

Identifica:

Qué archivo depende de cuál.

Qué CSS afecta qué páginas.

Qué JS afecta qué páginas.

Qué recursos utiliza cada página.

Qué elementos son compartidos.

Qué elementos son exclusivos.

--------------------------------------------------

## 5. MATRIZ DE REUTILIZACIÓN

Construye una matriz indicando:

Header

Footer

Navbar

Botones

Cards

Formularios

Galerías

Secciones

Animaciones

Variables CSS

Tipografías

Colores

Sombras

Espaciados

Border Radius

Íconos

Para cada uno indica:

Cantidad

Dónde se usa

Nivel de reutilización

--------------------------------------------------

## 6. MAPA DEL CSS

Analiza completamente el sistema visual.

Documenta:

Variables

Colores

Tipografías

Espaciados

Sombras

Gradientes

Animaciones

Breakpoints

Media Queries

Z-index

Transiciones

Duraciones

Selectores repetidos

Jerarquía

Especificidad

Capas visuales

Consistencia

--------------------------------------------------

## 7. MAPA DEL JAVASCRIPT

Documenta:

Funciones

Eventos

Listeners

Inicializaciones

Flujo de ejecución

Dependencias

Funciones reutilizadas

Funciones aisladas

Código muerto

Código duplicado

Flujo general del sistema

--------------------------------------------------

## 8. MAPA DE RECURSOS

Clasifica:

Imágenes

Videos

SVG

Audios

Íconos

Fuentes

Documentos

Indica:

cantidad

peso aproximado si es posible

nomenclatura

organización

consistencia

--------------------------------------------------

## 9. CONSISTENCIA VISUAL

Documenta:

Botones

Cards

Inputs

Etiquetas

Títulos

Subtítulos

Colores

Espaciados

Sombras

Iconografía

Animaciones

Indicando:

cantidad

variantes

consistencia

--------------------------------------------------

## 10. MATRIZ DE IMPACTO

Construye una tabla indicando:

Elemento

Archivos afectados

Nivel de impacto

Nivel de riesgo

Ejemplo

Modificar Navbar

↓

Afecta:

index

proyectos

footer

...

Riesgo

Alto

--------------------------------------------------

## 11. MÉTRICAS DEL PROYECTO

Genera métricas reales.

Ejemplo:

Archivos HTML

Archivos CSS

Archivos JS

Líneas CSS

Líneas JS

Imágenes

Videos

Audios

SVG

Dependencias externas

Variables CSS

Animaciones

Media Queries

Breakpoints

Selectores

Componentes repetidos

Recursos duplicados

Funciones

Eventos

Listeners

--------------------------------------------------

## 12. ÍNDICE DE SALUD

Califica objetivamente:

Arquitectura

Mantenibilidad

Escalabilidad

Performance

UX

Accesibilidad

SEO

Consistencia

Seguridad

Organización

Deuda Técnica

Asignando un porcentaje y justificando brevemente cada uno.

--------------------------------------------------

## 13. OPORTUNIDADES

Identifica:

Qué partes del proyecto tienen mayor potencial de mejora.

Qué partes están correctamente construidas.

Qué partes deberían mantenerse intactas.

Qué partes requerirán especial cuidado durante futuras refactorizaciones.

--------------------------------------------------

# FORMATO DE RESPUESTA

Entrega un documento técnico profesional con esta estructura:

# MAPA ARQUITECTÓNICO DEL PROYECTO

## Resumen Ejecutivo

## Inventario General

## Árbol del Proyecto

## Mapa de Páginas

## Mapa de Dependencias

## Matriz de Reutilización

## Mapa del CSS

## Mapa del JavaScript

## Mapa de Recursos

## Consistencia Visual

## Matriz de Impacto

## Métricas del Proyecto

## Índice de Salud

## Oportunidades de Mejora

## Riesgos de Modificación

## Conclusión Arquitectónica

IMPORTANTE:

No escribas código.

No modifiques archivos.

No propongas tecnologías.

No propongas frameworks.

No propongas migraciones.

Tu única misión es construir el documento arquitectónico más completo posible sobre el estado actual del proyecto.#

---

## User

ahora esto bro ## PROYECTO

Nombre: EcoProgramadores STEAM MUTIS
Fase: 0.5 - Mapa Arquitectónico del Proyecto
Versión: 1.0
Prioridad: Crítica
Estado: Inspección Arquitectónica

# ROL

Actúa como un Software Architect Principal con experiencia en arquitectura de software, frontend, UX, rendimiento, mantenibilidad y escalabilidad.

NO eres un desarrollador durante esta fase.

NO eres un auditor tradicional.

Tu misión es construir un documento técnico que sirva como mapa maestro del proyecto para todas las fases futuras.

Este documento será la referencia oficial para cualquier modificación posterior.

No debes asumir absolutamente nada.

Toda afirmación debe estar basada en evidencia encontrada dentro del proyecto.

--------------------------------------------------

# OBJETIVO

Construir el Mapa Arquitectónico completo del proyecto.

El objetivo NO es encontrar errores.

El objetivo es comprender completamente cómo funciona el proyecto.

Debes documentar:

- estructura
- relaciones
- dependencias
- reutilización
- consistencia
- recursos
- riesgos
- oportunidades

como lo haría un arquitecto antes de aprobar una refactorización.

--------------------------------------------------

# RESTRICCIONES

NO modificar archivos.

NO crear archivos.

NO eliminar archivos.

NO mover archivos.

NO instalar dependencias.

NO escribir código.

NO sugerir tecnologías.

NO proponer migraciones.

NO recomendar frameworks.

NO proponer Astro.

NO proponer React.

NO proponer Vite.

NO proponer Next.

NO proponer ninguna tecnología.

En esta fase únicamente se documenta el estado actual.

--------------------------------------------------

# TAREAS

## 1. INVENTARIO GENERAL

Genera un inventario completo del proyecto.

Incluye:

- carpetas
- subcarpetas
- HTML
- CSS
- JavaScript
- imágenes
- videos
- SVG
- iconos
- audios
- documentos
- fuentes
- librerías externas

Indica cantidades.

--------------------------------------------------

## 2. MAPA DE LA ESTRUCTURA

Construye un árbol del proyecto.

Ejemplo:

Proyecto

├── assets

├── css

├── js

├── img

├── videos

├── ...

No copies este ejemplo.

Genera el árbol real.

--------------------------------------------------

## 3. MAPA DE PÁGINAS

Para cada HTML documenta:

Nombre

Propósito

Secciones

Componentes

Recursos utilizados

Dependencias

Relación con otras páginas

Navegación

--------------------------------------------------

## 4. MAPA DE DEPENDENCIAS

Identifica:

Qué archivo depende de cuál.

Qué CSS afecta qué páginas.

Qué JS afecta qué páginas.

Qué recursos utiliza cada página.

Qué elementos son compartidos.

Qué elementos son exclusivos.

--------------------------------------------------

## 5. MATRIZ DE REUTILIZACIÓN

Construye una matriz indicando:

Header

Footer

Navbar

Botones

Cards

Formularios

Galerías

Secciones

Animaciones

Variables CSS

Tipografías

Colores

Sombras

Espaciados

Border Radius

Íconos

Para cada uno indica:

Cantidad

Dónde se usa

Nivel de reutilización

--------------------------------------------------

## 6. MAPA DEL CSS

Analiza completamente el sistema visual.

Documenta:

Variables

Colores

Tipografías

Espaciados

Sombras

Gradientes

Animaciones

Breakpoints

Media Queries

Z-index

Transiciones

Duraciones

Selectores repetidos

Jerarquía

Especificidad

Capas visuales

Consistencia

--------------------------------------------------

## 7. MAPA DEL JAVASCRIPT

Documenta:

Funciones

Eventos

Listeners

Inicializaciones

Flujo de ejecución

Dependencias

Funciones reutilizadas

Funciones aisladas

Código muerto

Código duplicado

Flujo general del sistema

--------------------------------------------------

## 8. MAPA DE RECURSOS

Clasifica:

Imágenes

Videos

SVG

Audios

Íconos

Fuentes

Documentos

Indica:

cantidad

peso aproximado si es posible

nomenclatura

organización

consistencia

--------------------------------------------------

## 9. CONSISTENCIA VISUAL

Documenta:

Botones

Cards

Inputs

Etiquetas

Títulos

Subtítulos

Colores

Espaciados

Sombras

Iconografía

Animaciones

Indicando:

cantidad

variantes

consistencia

--------------------------------------------------

## 10. MATRIZ DE IMPACTO

Construye una tabla indicando:

Elemento

Archivos afectados

Nivel de impacto

Nivel de riesgo

Ejemplo

Modificar Navbar

↓

Afecta:

index

proyectos

footer

...

Riesgo

Alto

--------------------------------------------------

## 11. MÉTRICAS DEL PROYECTO

Genera métricas reales.

Ejemplo:

Archivos HTML

Archivos CSS

Archivos JS

Líneas CSS

Líneas JS

Imágenes

Videos

Audios

SVG

Dependencias externas

Variables CSS

Animaciones

Media Queries

Breakpoints

Selectores

Componentes repetidos

Recursos duplicados

Funciones

Eventos

Listeners

--------------------------------------------------

## 12. ÍNDICE DE SALUD

Califica objetivamente:

Arquitectura

Mantenibilidad

Escalabilidad

Performance

UX

Accesibilidad

SEO

Consistencia

Seguridad

Organización

Deuda Técnica

Asignando un porcentaje y justificando brevemente cada uno.

--------------------------------------------------

## 13. OPORTUNIDADES

Identifica:

Qué partes del proyecto tienen mayor potencial de mejora.

Qué partes están correctamente construidas.

Qué partes deberían mantenerse intactas.

Qué partes requerirán especial cuidado durante futuras refactorizaciones.

--------------------------------------------------

# FORMATO DE RESPUESTA

Entrega un documento técnico profesional con esta estructura:

# MAPA ARQUITECTÓNICO DEL PROYECTO

## Resumen Ejecutivo

## Inventario General

## Árbol del Proyecto

## Mapa de Páginas

## Mapa de Dependencias

## Matriz de Reutilización

## Mapa del CSS

## Mapa del JavaScript

## Mapa de Recursos

## Consistencia Visual

## Matriz de Impacto

## Métricas del Proyecto

## Índice de Salud

## Oportunidades de Mejora

## Riesgos de Modificación

## Conclusión Arquitectónica

IMPORTANTE:

No escribas código.

No modifiques archivos.

No propongas tecnologías.

No propongas frameworks.

No propongas migraciones.

Tu única misión es construir el documento arquitectónico más completo posible sobre el estado actual del proyecto.#

---

## Assistant

# MAPA ARQUITECTÓNICO DEL PROYECTO

## Resumen Ejecutivo

Este documento es el mapa maestro del proyecto **EcoProgramadores STEAM MUTIS** en su estado actual. Fue construido exclusivamente a partir de evidencia encontrada en el repositorio, sin suposiciones. El proyecto es un sitio web estático compuesto por 8 páginas HTML, 2 hojas CSS y 1 archivo JavaScript, con recursos multimedia alojados localmente y dependencias externas por CDN. No existe sistema de construcción, bundling, transpilación ni gestión de dependencias. La arquitectura es monolítica, con duplicación estructural entre páginas y una hoja de estilos consolidada de 2.577 líneas.

---

## Inventario General

| Tipo | Cantidad | Ruta / Detalle |
|------|----------|----------------|
| Páginas HTML | 9 | `index.html`, `Album-2025-2026.html`, `proyecto-animacion.html`, `proyecto-diseno.html`, `proyecto-educativo.html`, `proyecto-juego.html`, `proyecto-podcast.html`, `proyecto-presentacion.html`, `proyecto-prototipo.html` |
| Hojas CSS | 2 | `assets/css/styles.css` (2.577 líneas), `assets/css/responsive-phases.css` (213 líneas) |
| Archivos JavaScript | 1 | `assets/js/script.js` (385 líneas) |
| Imágenes en assets | 134 | `assets/img/equipo/` (13), `assets/img/logo/logo/` (1), `assets/img/Album/` (121) |
| Imágenes en contenido | 17 | Dentro de `Ecoprogramadores/` en subcarpetas de proceso |
| Videos MP4 | 7 | Dentro de `Ecoprogramadores/` en 6 subcarpetas |
| Audios MP3 | 2 | `Ecoprogramadores/Podcast EcoVoces/` |
| Archivos Scratch | 1 | `.sb3` en `Ecoprogramadores/Juego de clasificación de residuos/` |
| Fuentes | 2 familias | Montserrat, Roboto (Google Fonts CDN en `index.html` y `Album-2025-2026.html`) |
| Librerías externas | 3 | Google Fonts, Font Awesome 6.4.0, EmailJS 3 |
| SVG inline | Múltiples | Dentro de `index.html` (iconos de contacto, carrusel, scroll indicator) |
| Documentos | 1 | `README.md` |

---

## Árbol del Proyecto

```
EcoProgramadores/
├── index.html
├── Album-2025-2026.html
├── proyecto-animacion.html
├── proyecto-diseno.html
├── proyecto-educativo.html
├── proyecto-juego.html
├── proyecto-podcast.html
├── proyecto-presentacion.html
├── proyecto-prototipo.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── responsive-phases.css
│   ├── img/
│   │   ├── Album/
│   │   ├── equipo/
│   │   └── logo/
│   │       └── logo/
│   └── js/
│       └── script.js
└── Ecoprogramadores/
    ├── Animación digital de sensibilización/
    ├── Diseño del prototipo del punto ecológico inteligente/
    ├── Juego de clasificación de residuos/
    ├── Podcast EcoVoces/
    ├── Prototipo de Punto Ecológico Inteligente/
    ├── video de precentacion de ecoporogramadores/
    └── video educativo para pequeños/
```

---

## Mapa de Páginas

| Nombre | Propósito | Secciones | Componentes | Recursos utilizados | Dependencias | Relación con otras páginas | Navegación |
|--------|-----------|-----------|-------------|---------------------|--------------|----------------------------|------------|
| `index.html` | Página principal | Header, Hero, Carrusel, Quiénes Somos, Equipo, Galería, Fases, Lab STEAM, Contacto, Footer | Navbar desktop + mobile, carrusel, cards de equipo, cards de características, galería expandible, formulario de contacto, lightbox no presente | `assets/css/styles.css`, `assets/css/responsive-phases.css`, `assets/js/script.js`, Google Fonts, Font Awesome CDN, EmailJS CDN, imágenes en `assets/img/` y `Ecoprogramadores/` | Depende de `assets/css/styles.css`, `assets/css/responsive-phases.css` y `assets/js/script.js`. Referencia recursos locales y CDN. | Es la página central. Desde ella se navega a las 7 páginas de proyecto mediante enlaces en la galería. El botón CTA apunta a `#gallery`. | Enlaces internos por anclas, enlaces a páginas de proyecto, enlace a `Album-2025-2026.html`, menú mobile toggle. |
| `Album-2025-2026.html` | Galería de fotos del equipo | Header, Hero Álbum, Grid de fotos, Lightbox, Footer | Header propio, grid responsive, lightbox con navegación | CSS inline completo (variables, reset, header, footer, responsive), imágenes en `assets/img/Album/`, JS inline propio | No depende de archivos CSS ni JS externos. Todo es inline/autocontenido. | Navega a `index.html` desde el header y footer. | Enlaces a `index.html`. Lightbox con navegación por teclado (ESC, flechas). |
| `proyecto-animacion.html` | Detalle del proyecto Animación Digital | Header reducido, detalle de proyecto, videos, galería de proceso | Header reducido con botón Volver, reproductores de video, grid de imágenes | CSS inline propio, `assets/js/script.js` referenciado pero no utilizado, recursos en `Ecoprogramadores/Animación digital de sensibilización/` | Depende solo de su propio CSS inline. Referencia `script.js` con ruta incorrecta (`script.js` en lugar de `assets/js/script.js`). | Botón "Volver" apunta a `index.html#gallery`. | Navegación limitada: solo botón de regreso. |
| `proyecto-diseno.html` | Detalle del proyecto Diseño del Prototipo | Header reducido, detalle, imágenes, video | Header reducido, botón Volver, contenido multimedia | CSS inline, recursos en `Ecoprogramadores/Diseño del prototipo del punto ecológico inteligente/` | Mismo patrón que otras páginas de proyecto. | Botón "Volver" apunta a `index.html#gallery`. | Navegación limitada. |
| `proyecto-educativo.html` | Detalle del proyecto Video Educativo | Header reducido, detalle, video | Header reducido, botón Volver, reproductor de video | CSS inline, recursos en `Ecoprogramadores/video educativo para pequeños/` | Mismo patrón. | Botón "Volver" apunta a `index.html#gallery`. | Navegación limitada. |
| `proyecto-juego.html` | Detalle del proyecto Juego de Clasificación | Header reducido, detalle, iframes Scratch, imágenes de proceso | Header reducido, botón Volver, iframes externos, grid de imágenes | CSS inline (con estilos adicionales para `.iframe-container`), recursos en `Ecoprogramadores/Juego de clasificación de residuos/`, iframes de `scratch.mit.edu` | Mismo patrón. Incluye styles adicionales inline. | Botón "Volver" apunta a `index.html#gallery`. | Navegación limitada. |
| `proyecto-podcast.html` | Detalle del proyecto Podcast EcoVoces | Header reducido, detalle, audios | Header reducido, botón Volver, reproductores de audio | CSS inline, recursos en `Ecoprogramadores/Podcast EcoVoces/` | Mismo patrón. | Botón "Volver" apunta a `index.html#gallery`. | Navegación limitada. |
| `proyecto-presentacion.html` | Detalle del proyecto Video de Presentación | Header reducido, detalle, video | Header reducido, botón Volver, reproductor de video | CSS inline, recursos en `Ecoprogramadores/video de precentacion de ecoporogramadores/` | Mismo patrón. | Botón "Volver" apunta a `index.html#gallery`. | Navegación limitada. |
| `proyecto-prototipo.html` | Detalle del proyecto Prototipo Punto Ecológico | Header reducido, detalle, videos | Header reducido, botón Volver, reproductores de video | CSS inline, recursos en `Ecoprogramadores/Prototipo de Punto Ecológico Inteligente/` | Mismo patrón. | Botón "Volver" apunta a `index.html#gallery`. | Navegación limitada. |

---

## Mapa de Dependencias

### Dependencias CSS
- `index.html` → `assets/css/styles.css` + `assets/css/responsive-phases.css`
- `Album-2025-2026.html` → CSS inline propio (no depende de archivos CSS externos)
- 7 páginas de proyecto → CSS inline propio (no dependen de `assets/css/styles.css` ni de `responsive-phases.css`)

### Dependencias JavaScript
- `index.html` → `assets/js/script.js`
- `Album-2025-2026.html` → JS inline propio (no depende de `script.js`)
- 7 páginas de proyecto → Referencian `<script src="script.js"></script>` en el body. La ruta es incorrecta porque el archivo está en `assets/js/script.js`. Sin embargo, ninguna de esas páginas utiliza funcionalidad de `script.js`.

### Dependencias de Recursos
- **`index.html`**: Google Fonts, Font Awesome CDN, EmailJS CDN, imágenes en `assets/img/logo/logo/`, `assets/img/equipo/`, y referencias a recursos en `Ecoprogramadores/` para la galería.
- **`Album-2025-2026.html`**: 121 imágenes en `assets/img/Album/`.
- **Páginas de proyecto**: recursos específicos dentro de `Ecoprogramadores/[proyecto]/`.

### Elementos Compartidos vs Exclusivos
| Elemento | Archivos donde aparece | Naturaleza |
|----------|------------------------|------------|
| Header con logo + nav | `index.html` (completo), `Album-2025-2026.html` (reducido), 7 páginas de proyecto (propio reducido) | Compartido en concepto, pero implementado 3 veces de forma distinta |
| Footer | `index.html`, `Album-2025-2026.html` | Exclusivo de esas 2 páginas |
| Variables CSS | `index.html` (vía `styles.css`), `Album-2025-2026.html` (inline), 7 páginas de proyecto (inline) | Compartidas en nombre y valor, pero duplicadas en implementación |
| Tipografía | `index.html` y `Album-2025-2026.html` cargan Google Fonts; páginas de proyecto dependen de variables CSS inline | Parcialmente compartido |
| Iconografía | `index.html`: Font Awesome + SVG inline; resto: emojis | No compartida |
| Formulario de contacto | Solo `index.html` | Exclusivo |
| Carrusel | Solo `index.html` | Exclusivo |
| Lightbox | Solo `Album-2025-2026.html` | Exclusivo |

---

## Matriz de Reutilización

| Elemento | Cantidad | Dónde se usa | Nivel de reutilización |
|----------|----------|--------------|------------------------|
| Header con logo + nav | 3 variantes | `index.html` (completo), `Album-2025-2026.html` (reducido), 7 páginas de proyecto (reducido propio) | Bajo: 3 implementaciones diferentes |
| Footer | 2 variantes | `index.html`, `Album-2025-2026.html` | Bajo: no existe en páginas de proyecto |
| Navbar / Navegación | 2 implementaciones | `index.html` (desktop + mobile), `Album-2025-2026.html` (solo desktop) | Bajo: no hay navegación en páginas de proyecto |
| Botones | 4 variantes | `.cta-button`, `.nav-link-button`, `.contact-cta-button`, `.back-button` | Medio: patrones visuales similares, clases diferentes |
| Cards | 5 tipos | `.about-card`, `.feature-card`, `.phase-card`, `.lab-card`, `.gallery-card` | Medio: comparten border-radius, sombras, transiciones |
| Formulario | 1 | Solo `index.html` | Nulo |
| Inputs | 1 conjunto | Solo `index.html` | Nulo |
| Galerías / Grids | 3 | `gallery-grid` en `index.html`, `album-grid` en álbum, `team-grid` en `index.html` | Medio: comparten `display: grid` pero con configuraciones distintas |
| Animaciones | 15+ definiciones | `index.html`, `Album-2025-2026.html` inline, `proyecto-juego.html` inline | Bajo: duplicadas en múltiples archivos |
| Variables CSS | 30+ | `styles.css` y duplicadas en páginas de proyecto y álbum | Bajo: duplicación manual |
| Tipografía | 2 familias | `index.html` y `Album-2025-2026.html` via CDN; páginas de proyecto via variables inline | Medio |
| Colores | 15 variables + hardcodeados | Toda la estructura | Medio |
| Sombras | 4 variables | `styles.css` y páginas que copian variables | Medio |
| Espaciados | 5 variables | `styles.css` y páginas que copian variables | Medio |
| Border Radius | 4 variables | `styles.css` y páginas que copian variables | Medio |
| Íconos | 2 sistemas | Font Awesome + SVG en `index.html`; emojis en otras páginas | Bajo |
| Carrusel | 1 | Solo `index.html` | Nulo |
| Lightbox | 1 | Solo `Album-2025-2026.html` | Nulo |
| Reproductores multimedia | 1 estilo base | Videos y audios en distintas páginas | Bajo |

---

## Mapa del CSS

### Variables (`:root`)
Definidas en `assets/css/styles.css` líneas 4-40. Duplicadas en:
- `Album-2025-2026.html` líneas 22-53
- `proyecto-animacion.html` inline (no define `:root` propio; usa `var(--font-primary)` sin declaración local — en ese contexto las variables no existen)
- Otras páginas de proyecto: incluyen bloque de variables inline.

**Variables documentadas:**
- Colores: 11 variables (`--color-primary-dark`, `--color-primary-medium`, `--color-primary-green`, `--color-primary-light`, `--color-accent-neon`, `--color-accent-turquoise`, `--color-accent-light`, `--color-accent-mint`, `--color-accent-aqua`, `--color-deep-green`, `--color-teal`)
- Tipografía: 2 (`--font-primary`, `--font-secondary`)
- Espaciado: 5 (`--spacing-xs` a `--spacing-xl`)
- Border radius: 4 (`--radius-sm` a `--radius-full`)
- Sombras: 4 (`--shadow-sm` a `--shadow-xl`)

### Colores Hardcodeados
Sin variable CSS: `#333`, `#555`, `white`, `rgba(255,255,255,...)` en múltiples variantes, `#f1f1f1`, `#000`, `#E8F5E9`, `#C8E6C9`, `#002600`, `#0c845b`, `#77f697`, `#169b5d`, `#3eb25d`, `#064d15`, `#003727`, `#115e30`, `#003828`, `#317f6b`, `#36826e`, `#0f6859`, `#004122`, `#90b190`.

### Tipografía
- Familias: Montserrat (400, 500, 600, 700), Roboto (300, 400, 500, 700)
- Base: `html { font-size: 16px; }` (modificado en breakpoints móviles a 14px y 15px)
- Tamaños usados: 0.75rem, 0.85rem, 0.875rem, 0.9rem, 0.95rem, 1rem, 1.1rem, 1.125rem, 1.25rem, 1.5rem, 1.8rem, 2rem, 2.5rem, 3rem, 4rem, 5rem

### Espaciados
- Variables definidas pero uso inconsistente. Predominio de valores hardcodeados en `rem`.

### Sombras
- 4 variables definidas. Uso adicional de sombras hardcodeadas para efectos específicos.

### Gradientes
Fondos de sección con gradientes lineales y radiales:
- Hero, About, Gallery, Contact, Project detail, Phases, Lab, Footer, Carousel overlay.

### Animaciones
Definidas en `styles.css`:
1. `neonGlow`
2. `float1` / `float2`
3. `fadeIn`
4. `bounce`
5. `pulse-master`
6. `pulse-leader`
7. `pulse-icon`
8. `levitacion`
9. `pulse-neon`
10. `expandFade`
11. `rotateBg`
12. `spin`

Definidas inline:
- `fadeInDown` / `fadeInUp` en `Album-2025-2026.html`
- `project-detail-content` en `proyecto-juego.html`

### Breakpoints y Media Queries
**En `styles.css`**:
- `min-width: 768px`
- `min-width: 1024px`
- `min-width: 640px`
- `max-width: 768px`
- `max-width: 640px`
- `max-width: 480px`
- `min-width: 481px and max-width: 640px`
- `min-width: 641px and max-width: 1024px`
- `min-width: 1025px`
- `min-width: 2000px`

**En `responsive-phases.css`**:
- `max-width: 768px`
- `max-width: 480px`
- `max-width: 320px`

**Total breakpoints únicos**: 8 (320px, 480px, 640px, 641px, 768px, 1024px, 1025px, 2000px).

### Uso de `!important`
- 25+ usos en `styles.css` líneas 2398-2577.
- 8 usos en `Album-2025-2026.html` inline CSS.

### Z-index
- `z-index: 1000` (header)
- `z-index: 2000` (lightbox en álbum)
- `z-index: 10` (hero content, contact grid)
- `z-index: 2` (phases section header)

### Transiciones y Duraciones
- Transiciones comunes: `all 0.3s ease`, `all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`
- Duraciones de animación: 0.3s, 0.4s, 0.5s, 0.6s, 0.8s, 1s, 1.4s, 2s, 2.5s, 3s, 8s, 10s, 12s, 15s, 25s

### Selectores Repetidos
- `.team-photo-placeholder` declarado 2 veces
- `.teacher-name` declarado 2 veces
- `.teacher-label` declarado 2 veces
- Comentario `LABORATORIO STEAM SECTION` duplicado

### Jerarquía y Especificidad
- Selectores mayormente de clase (baja especificidad).
- Uso de `!important` aumenta especificidad artificialmente en media queries.
- No hay anidamiento preprocesado; la jerarquía es plana por bloques comentados.

### Capas Visuales
- No hay sistema de capas CSS formal.
- Separación visual por secciones mediante comentarios.
- Z-index limitado a 4 valores.

---

## Mapa del JavaScript

### Funciones en `assets/js/script.js`

| Función | Líneas | Propósito | Usada en |
|---------|--------|-----------|----------|
| `scrollToSection(sectionId)` | 13-25 | Scroll suave a sección por ID | `index.html` (onclick en CTA), listeners de nav |
| `scrollToTop()` | 28-33 | Scroll al top | `index.html` (botón en contact CTA) |
| `initCarousel()` | 88-172 | Inicializa carrusel, dots, autoplay | Solo `index.html` |
| `updateCarousel()` | 107-119 | Actualiza posición del carrusel | Dentro de `initCarousel` |
| `nextSlide()` | 121-124 | Siguiente slide | Dentro de `initCarousel` |
| `prevSlide()` | 126-129 | Slide anterior | Dentro de `initCarousel` |
| `goToSlide(index)` | 131-135 | Ir a slide específico | Dentro de `initCarousel` |
| `startAutoPlay()` | 153-157 | Inicia autoplay | Dentro de `initCarousel` |
| `stopAutoPlay()` | 158-162 | Detiene autoplay | Dentro de `initCarousel` |
| `renderProjects()` | 178-218 | Renderiza proyectos en grid | Llamada en DOMContentLoaded; depende de array `projects` no definido |
| `initContactForm()` | 224-283 | Inicializa formulario EmailJS | Solo `index.html` |
| `initScrollAnimations()` | 289-321 | IntersectionObserver para animaciones | Solo `index.html` |
| `toggleTeamMembers()` | 351-366 | Mostrar/ocultar más integrantes | `index.html` (onclick) |
| `toggleGalleryCard(card)` | 369-379 | Expandir/colapsar tarjeta de galería | Exportada a `window` pero no llamada desde HTML |

### Funciones en `Album-2025-2026.html` (inline)
| Función | Líneas | Propósito |
|---------|--------|-----------|
| `initAlbum()` | 792-808 | Generar grid de álbum |
| `openLightbox(index)` | 811-819 | Abrir lightbox |
| `closeLightbox()` | 822-826 | Cerrar lightbox |
| `nextImage()` | 829-834 | Siguiente imagen |
| `prevImage()` | 837-842 | Imagen anterior |

### Event Listeners y Flujo de Ejecución

**`assets/js/script.js`**:
1. `DOMContentLoaded` (línea 36): Agrega smooth scroll a enlaces `a[href^="#"]`. Cierra menú móvil tras navegación.
2. `DOMContentLoaded` (línea 327): Inicializa `initCarousel()`, `renderProjects()`, `initContactForm()`, `initScrollAnimations()`.
3. `scroll` en `window` (línea 57): Agrega/quita clase `.scrolled` en header.
4. `click` en `mobileMenuBtn` (línea 74): Toggle menú móvil.
5. `submit` en `contactForm` (línea 231): Envío por EmailJS.
6. `mouseenter`/`mouseleave` en carrusel (líneas 169-170): Pausa/reanuda autoplay.
7. Exportaciones a `window`: `scrollToSection`, `scrollToTop`, `toggleTeamMembers`, `toggleGalleryCard`.

**`Album-2025-2026.html`**:
1. `DOMContentLoaded` (línea 862): Inicializa `initAlbum()`.
2. `keydown` en `document` (línea 845): Navegación de lightbox (ESC, ArrowRight, ArrowLeft).
3. `scroll` en `window` (línea 852): Header scroll effect.

### Código Muerto / No Utilizado
- `toggleGalleryCard` exportada en `window` (línea 348) pero nunca llamada desde HTML; la función existe (líneas 369-379) pero no hay evento que la dispare.
- `renderProjects()` (líneas 178-218): función completa definida, pero depende del array `projects` que no existe en el archivo. Por tanto, la función falla en runtime y no renderiza nada.
- Bloque anime.js comentado en `index.html` (líneas 889-908).

### Dependencias Externas en JS
- EmailJS browser SDK: usado para envío de formulario.
- No hay otras dependencias JS externas.

---

## Mapa de Recursos

### Imágenes
| Carpeta | Cantidad | Formato | Nomenclatura | Observaciones |
|---------|----------|---------|--------------|---------------|
| `assets/img/equipo/` | 13 | JPG, PNG | `Nombre.jpg` / `Nombre-1.png`, `Nombre-2.png` | Incluye variantes (`Isa-2.jpg`, `Isa-23.jpg`, `Stiven-1.png`, `Stiven-2.png`) |
| `assets/img/logo/logo/` | 1 | JPG | `logo.jpg` | Ruta anidada doble (`logo/logo/`) |
| `assets/img/Album/` | 121 | JPEG | `WhatsApp Image 2026-04-24 at HH.MM.SS AM/PM (n).jpeg` | Nombres de WhatsApp, sin compresión visible, sin formatos modernos |
| `Ecoprogramadores/Animación digital de sensibilización/Proceso de creación/` | 4 | JPEG | `WhatsApp Image ... .jpeg` | Nombres de WhatsApp |
| `Ecoprogramadores/Juego de clasificación de residuos/Proceso del juego/` | 8 | JPEG, PNG | `WhatsApp Image ... .jpeg`, `Captura de pantalla (n).png` | Mezcla de nomenclaturas |

**Total imágenes**: 147 archivos.

### Videos
| Carpeta | Cantidad | Formato | Observaciones |
|---------|----------|---------|---------------|
| `Ecoprogramadores/Animación digital de sensibilización/` | 2 | MP4 | Sin versiones WebM |
| `Ecoprogramadores/Prototipo de Punto Ecológico Inteligente/` | 2 | MP4 | Sin posters ni thumbnails |
| `Ecoprogramadores/Diseño del prototipo del punto ecológico inteligente/` | 1 | MP4 | Sin WebM |
| `Ecoprogramadores/video de precentacion de ecoporogramadores/` | 1 | MP4 | Sin WebM |
| `Ecoprogramadores/video educativo para pequeños/` | 1 | MP4 | Sin WebM |

**Total videos**: 7 archivos MP4.

### Audios
| Carpeta | Cantidad | Formato |
|---------|----------|---------|
| `Ecoprogramadores/Podcast EcoVoces/` | 2 | MP3 |

### Otros Recursos
- **Scratch project**: 1 archivo `.sb3`
- **Fuentes**: No hay fuentes locales; se cargan desde Google Fonts CDN.
- **Iconos vectoriales**: Font Awesome (CDN) y SVG inline en `index.html`.
- **Documentación**: `README.md` (111 líneas).

---

## Consistencia Visual

### Botones
| Variante | Clases CSS | Dónde se usa | Consistencia |
|----------|------------|--------------|--------------|
| Primario (CTA) | `.cta-button` | `index.html` | Alto: padding, border-radius, transición, hover scale |
| Navegación (Contacto) | `.nav-link-button` | `index.html` | Medio: similar a CTA pero con box-shadow diferente |
| Contact CTA | `.contact-cta-button` | `index.html` | Medio: width 100%, border-radius distinto |
| Volver (proyectos) | `.back-button` | 7 páginas de proyecto | Medio: inline styles, mismo patrón visual pero CSS duplicado |

**Inconsistencias**: border-radius varía (`--radius-full` vs `--radius-sm`), box-shadows variables vs hardcodeados, transiciones con diferentes `ease`.

### Cards
| Tipo | Clases | Dónde | Consistencia |
|------|--------|-------|--------------|
| About | `.about-card` | `index.html` | Alto: padding, border-left, sombra |
| Feature | `.feature-card` | `index.html` | Alto: border-top, sombra, hover translateY |
| Team member | `.team-member` + `.team-photo-placeholder` | `index.html` | Alto: estructura repetida con variantes de color |
| Phase | `.phase-card` | `index.html` | Alto: grid, hover, featured con estrella |
| Lab | `.lab-card` | `index.html` | Alto: glassmorphism, hover 3D |
| Gallery | `.gallery-card` | `index.html` | Alto: border, transiciones, tags |
| Project | `.project-card` | Solo definido en CSS, no en HTML de `index.html` | Nulo: CSS presente pero markup ausente |

### Inputs y Formularios
- Solo existen en `index.html` (formulario de contacto).
- Estilos: `.form-input`, `.form-textarea` con background semitransparente, border blanco, focus con `--color-accent-neon`.

### Títulos y Subtítulos
| Elemento | Clases | Consistencia |
|----------|--------|--------------|
| Título de sección | `.section-title`, `.section-title.dark`, `.section-title.light` | Alto: familia, weight, tamaño responsivo |
| Subtítulo | `.section-subtitle`, `.dark`, `.light` | Alto: opacidad controlada |
| Título de proyecto | `.carousel-title`, `.gallery-title`, `.project-title` | Medio: tamaños distintos por contexto |

### Colores
- **Paleta base**: Verde oscuro (#003727) a turquesa (#00C8E6) con acento neón (#00F771).
- **Uso**: Consistente en navbar, hero, botones, iconos.
- **Desviaciones**: Gradientes de sección usan colores intermedios no variables.

### Espaciados
- Variables definidas pero no usadas consistentemente. Predomina el uso de `rem` hardcodeados.

### Sombras
- Variables definidas y usadas en cards y botones.
- Sombras adicionales hardcodeadas para efectos específicos.

### Iconografía
- **`index.html`**: Font Awesome + SVG inline.
- **Otras páginas**: Emojis como iconos de sección.
- **Inconsistencia**: Dos sistemas de iconografía completamente diferentes.

### Animaciones
- **`index.html`**: 10+ animaciones CSS + IntersectionObserver para reveal.
- **`Album-2025-2026.html`**: 2 animaciones inline.
- **Páginas de proyecto**: 1 animación inline en `proyecto-juego.html`.
- **Inconsistencia**: Sistemas de animación diferentes por página.

---

## Matriz de Impacto

| Elemento | Archivos afectados | Nivel de impacto | Nivel de riesgo |
|----------|-------------------|------------------|-----------------|
| **Navbar / Header** | `index.html`, `Album-2025-2026.html`, 7 páginas de proyecto | Alto | Alto: 3 implementaciones distintas, cambios requieren edición múltiple |
| **Variables CSS** | Todos los archivos con estilos | Alto | Alto: duplicación manual en 9 archivos |
| **Paleta de colores** | Todos | Alto | Medio: cambios en `:root` afectan todo, pero mucho código hardcodeado no se actualiza |
| **Tipografía** | Todos | Medio | Bajo: solo cambian en archivos que cargan Google Fonts |
| **Botones** | Todos | Medio | Medio: 4 variantes con estilos inline duplicados |
| **Cards** | `index.html` | Medio | Bajo: solo en página principal |
| **Footer** | `index.html`, `Album-2025-2026.html` | Bajo | Bajo: no existe en páginas de proyecto |
| **Formulario de contacto** | `index.html` | Alto | Bajo: solo una implementación |
| **Carrusel** | `index.html` | Alto | Bajo: solo una implementación |
| **Lightbox** | `Album-2025-2026.html` | Bajo | Bajo: solo una implementación |
| **Script.js** | `index.html` | Alto | Alto: contiene funciones zombie y variables no definidas |
| **EmailJS** | `index.html` | Alto | Crítico: credenciales expuestas |
| **Recursos multimedia** | Todos según contenido | Alto | Alto: 134 imágenes + 7 videos sin optimizar |

---

## Métricas del Proyecto

| Métrica | Valor |
|---------|-------|
| Archivos HTML | 9 |
| Archivos CSS externos | 2 |
| Archivos JS externos | 1 |
| Líneas CSS (externo) | 2.577 |
| Líneas CSS (`responsive-phases.css`) | 213 |
| Líneas CSS inline estimado | ~630 |
| Líneas JS (externo) | 385 |
| Líneas JS (inline en álbum) | ~202 |
| Imágenes totales | 147 |
| Videos MP4 | 7 |
| Audios MP3 | 2 |
| Archivos Scratch | 1 |
| Dependencias externas (CDN) | 3 |
| Variables CSS | 30+ |
| Animaciones CSS | 15+ |
| Media Queries | ~20 |
| Breakpoints únicos | 8 |
| Selectores CSS (estimado) | ~400 |
| Componentes repetidos (header/footer/nav) | 3 variantes × 9 páginas = 27 bloques |
| Funciones JS | 14 (en `script.js`) + 5 (en álbum inline) |
| Event Listeners | ~15 en `script.js` + ~4 en álbum |
| Páginas sin meta description | 6 de 9 |
| Páginas con `lang="es"` | 9 |
| Páginas con `<meta viewport>` | 9 |
| Páginas con `<main>` | 0 |
| Páginas con skip link | 0 |

---

## Índice de Salud

| Dimensión | Calificación | Justificación |
|-----------|--------------|---------------|
| **Arquitectura** | 25% | Sitio estático sin sistema de construcción, con duplicación total de layout entre páginas y hoja CSS monolítica de 2.577 líneas sin modularidad. |
| **Mantenibilidad** | 20% | Cualquier cambio de branding requiere editar 9 archivos. CSS inline en 8 páginas. Selectores duplicados. Cero pruebas. |
| **Escalabilidad** | 15% | Agregar un nuevo proyecto requiere copiar y pegar HTML completo con estilos inline. No hay sistema de rutas, datos ni componentes. |
| **Performance** | 35% | 147 imágenes sin optimizar, 7 videos sin streaming adaptativo, 121 imágenes en grid sin paginación, CSS monolítico, CDNs bloqueantes. |
| **UX** | 60% | Navegación fluida en página principal, carrusel funcional, lightbox en álbum, formulario con feedback. Inconsistencias entre páginas (header/footer ausentes en proyectos). |
| **Accesibilidad** | 30% | Tiene `lang`, `alt` en muchas imágenes, `aria-label` en botones de carrusel. Falta skip link, `<main>`, `prefers-reduced-motion`, contraste no auditado, alt texts genéricos, lightbox sin trampa de foco. |
| **SEO** | 25% | Solo 2 de 9 páginas tienen meta description. Sin OG tags, canonical, sitemap, robots.txt, structured data. |
| **Consistencia Visual** | 55% | Tema cohesionado en `index.html`, pero fragmentado en páginas de proyecto (emojis vs Font Awesome, CSS inline vs hoja externa). |
| **Seguridad** | 40% | Credenciales EmailJS expuestas en código cliente. Sin sanitización de inputs. CDNs sin SRI. |
| **Organización** | 35% | Estructura de carpetas comprensible, pero recursos con nombres de WhatsApp, carpetas con espacios y tildes, doble carpeta `logo/logo/`, archivos de proyecto desordenados. |
| **Deuda Técnica** | 20% | Duplicación masiva, código zombie, funciones no definidas, console.log en producción, CSS inline, sin linting, sin pruebas. |

---

## Oportunidades

### Partes con mayor potencial de mejora
- **Sistema de layout compartido**: Eliminar la duplicación de header/footer/nav entre páginas reduciría drásticamente el mantenimiento.
- **Página de álbum**: La funcionalidad de lightbox y grid es robusta; puede servir como patrón para otras galerías.
- **Variables CSS**: La paleta ya está definida en `:root`; solo falta usarla consistentemente en todo el proyecto.
- **IntersectionObserver en `index.html`**: El patrón de animaciones al scroll es correcto y puede escalar.

### Partes correctamente construidas
- Tema visual cohesionado con identidad ecológica.
- Variables CSS bien definidas en `styles.css`.
- HTML semántico en `index.html` (uso de `header`, `nav`, `section`, `footer`).
- Carrusel interactivo con controles, dots y autoplay.
- Lightbox funcional en álbum con navegación por teclado.
- Formulario de contacto integrado con EmailJS.
- Diseño responsive con múltiples breakpoints.

### Partes que deberían mantenerse intactas
- Paleta de colores y sistema de variables CSS.
- Patrones de cards y botones en `index.html`.
- Estructura semántica de `index.html`.
- Funcionalidad de lightbox en álbum.
- Sistema de animaciones al scroll con IntersectionObserver.

### Partes que requerirán especial cuidado durante refactorizaciones
- **Header y navegación**: 3 implementaciones distintas que deben converger sin romper enlaces existentes.
- **Recursos multimedia**: 147 imágenes y 7 videos con rutas frágiles; cualquier cambio de estructura debe preservar accesibilidad a los archivos.
- **Formulario de contacto**: Integración con EmailJS que debe mantenerse funcional durante cualquier refactor.
- **Páginas de proyecto**: Cada una tiene CSS inline y estructuras ligeramente distintas; una convergencia debe ser incremental para no romper contenido.

---

## Riesgos de Modificación

| Riesgo | Descripción | Mitigación |
|--------|-------------|------------|
| Duplicación de layout | Modificar el header en un archivo no afecta los otros 2; cambios parciales generan inconsistencias. | Documentar todas las variantes y planificar convergencia gradual. |
| CSS inline en páginas de proyecto | Cambios en estilos base no se propagan; editar una página no actualiza las demás. | Centralizar estilos antes de modificar comportamientos visuales. |
| Recursos con rutas frágiles | Imágenes y videos referenciados con paths relativos; cambios de estructura rompen enlaces. | Mantener estructura de carpetas actual hasta refactor completo de assets. |
| Credenciales expuestas | EmailJS credentials en código cliente; rotación sin plan puede dejar el formulario inoperativo. | Coordinar rotación con actualización de configuración en el servicio EmailJS. |
| Funciones zombie en JS | `renderProjects()` y `toggleGalleryCard` pueden confundir a mantenedores si se modifican dependencias. | Limpiar código no utilizado antes de agregar nuevas funcionalidades. |
| Dependencias CDN sin fallback | Si Google Fonts, Font Awesome o EmailJS caen, el sitio se degrada. | Considerar fallbacks locales en fases futuras. |
| Nombres de archivo no normalizados | Espacios, tildes y nombres de WhatsApp complican automatización. | Evitar renombres masivos sin actualizar todas las referencias. |

---

## Conclusión Arquitectónica

El proyecto **EcoProgramadores STEAM MUTIS** es un sitio estático funcional con una arquitectura de **páginas independientes**. La página principal (`index.html`) concentra la mayoría de la funcionalidad, estilos y recursos, mientras que las páginas de proyecto son **vistas aisladas** que repiten estructura y estilos inline. El álbum (`Album-2025-2026.html`) es un caso especial: es autocontenido con CSS y JS inline, sin depender de los archivos globales.

Esta arquitectura es **sostenible para 9 páginas** pero **crítica para crecimiento**. La duplicación de layout, la ausencia de un sistema de componentes y la falta de pipeline de assets son los ejes que definen la deuda técnica actual.

Cualquier modificación posterior debe considerar:
1. **No romper las rutas de recursos** hasta consolidar una nueva estructura.
2. **Preservar la experiencia de usuario** en `index.html`, que es la página más visitada.
3. **Tratar las páginas de proyecto como contenido** que eventualmente se generará desde datos, no como archivos HTML independientes.
4. **Mantener la integridad del formulario de contacto** durante cualquier refactor.

Este documento es la referencia base para todas las fases de modificación futuras.

---

## User

# PROYECTO

Nombre: EcoProgramadores STEAM MUTIS
Fase: 1.0 - Project Master Plan (PMP)
Versión: 1.0
Prioridad: Máxima
Estado: Planificación Estratégica

# ROL

Actúa como un Principal Software Architect, Tech Lead y Technical Project Manager con experiencia en proyectos empresariales de larga duración.

Has completado previamente:

- Auditoría Técnica Integral.
- Mapa Arquitectónico del Proyecto.

Ahora debes utilizar toda esa información para construir el documento maestro que gobernará el desarrollo completo del proyecto.

NO debes escribir código.

NO debes modificar archivos.

NO debes realizar cambios en el proyecto.

Tu única misión es diseñar el plan oficial de desarrollo.

--------------------------------------------------

# OBJETIVO

Crear el Project Master Plan definitivo del proyecto.

Este documento será la referencia obligatoria para todas las fases futuras.

Todo cambio deberá seguir este plan.

Debe minimizar riesgos, evitar retrabajos y definir un orden lógico de implementación.

--------------------------------------------------

# INSTRUCCIONES

Analiza toda la información obtenida durante la Auditoría Técnica y el Mapa Arquitectónico.

Con base en ello diseña el plan completo del proyecto.

No improvises.

No inventes fases innecesarias.

Cada decisión debe estar justificada.

--------------------------------------------------

# PARA CADA FASE DEFINE

Nombre

Objetivo

Descripción

Justificación

Prioridad

Dependencias

Complejidad

Impacto

Nivel de riesgo

Tiempo estimado

Entregables

Validaciones

Criterios de aceptación

Resultado esperado

--------------------------------------------------

# ORGANIZA EL PROYECTO

Divide el proyecto en fases lógicas.

Por ejemplo (solo como referencia):

Fase 1

Estabilización

Fase 2

Arquitectura Base

Fase 3

Sistema de Diseño

Fase 4

Componentes Reutilizables

Fase 5

Layout

Fase 6

Responsive

Fase 7

UX

Fase 8

Accesibilidad

Fase 9

SEO

Fase 10

Optimización

Fase 11

Performance

Fase 12

Testing

Fase 13

Auditoría Final

No copies exactamente estas fases.

Diseña las fases reales según el estado del proyecto.

--------------------------------------------------

# PARA CADA FASE CREA SUS SPRINTS

Ejemplo

Fase

↓

Sprint

↓

Tareas

↓

Entregables

Cada Sprint debe tener un objetivo claro.

--------------------------------------------------

# MATRIZ DE DEPENDENCIAS

Indica claramente:

Qué fases dependen de otras.

Qué fases pueden ejecutarse en paralelo.

Qué fases obligatoriamente deben finalizar antes de continuar.

--------------------------------------------------

# MATRIZ DE RIESGO

Para cada fase indica:

Nivel de riesgo

Impacto

Posibles problemas

Cómo mitigarlos

--------------------------------------------------

# MATRIZ DE PRIORIDADES

Clasifica todas las tareas usando:

🔴 Crítico

🟠 Alto

🟡 Medio

🟢 Bajo

--------------------------------------------------

# KANBAN DEL PROYECTO

Construye el tablero inicial.

BACKLOG

EN ESPERA

LISTO PARA DESARROLLO

EN DESARROLLO

EN REVISIÓN

COMPLETADO

--------------------------------------------------

# HITOS

Define los principales hitos del proyecto.

Ejemplo:

Proyecto estable

Responsive completo

Sistema UI terminado

Performance optimizada

SEO terminado

Testing aprobado

Proyecto listo para producción

--------------------------------------------------

# CRITERIOS GLOBALES DE CALIDAD

Define las reglas que deberán cumplirse durante todo el desarrollo.

Incluye como mínimo:

Arquitectura

Mantenibilidad

Escalabilidad

Reutilización

Accesibilidad

Performance

Consistencia

Seguridad

UX

Responsive

SEO

--------------------------------------------------

# REGLAS DEL DESARROLLO

Define reglas obligatorias como:

Nunca duplicar código.

Nunca romper funcionalidades existentes.

Reutilizar antes de crear.

No introducir deuda técnica.

Validar antes de finalizar una fase.

Mantener consistencia visual.

Eliminar código muerto cuando sea detectado.

Mantener nomenclatura consistente.

Documentar cambios importantes.

Justificar cualquier decisión arquitectónica.

--------------------------------------------------

# DEFINICIÓN DE TERMINADO (Definition of Done)

Establece qué condiciones deben cumplirse para considerar una fase finalizada.

Por ejemplo:

✔ Sin errores.

✔ Sin advertencias críticas.

✔ Funcionalidad validada.

✔ Responsive verificado.

✔ Accesibilidad comprobada.

✔ Rendimiento aceptable.

✔ Código consistente.

✔ Sin duplicaciones innecesarias.

--------------------------------------------------

# FORMATO DE RESPUESTA

Entrega un documento profesional con la siguiente estructura:

# PROJECT MASTER PLAN

## Resumen Ejecutivo

## Objetivos del Proyecto

## Estrategia General

## Principios Arquitectónicos

## Reglas Globales

## Roadmap General

## Fases del Proyecto

## Sprints por Fase

## Matriz de Dependencias

## Matriz de Riesgos

## Matriz de Prioridades

## Kanban Inicial

## Hitos del Proyecto

## Definition of Done

## Estrategia de Validación

## Conclusión

IMPORTANTE

No escribas código.

No modifiques archivos.

No propongas tecnologías nuevas.

No propongas migraciones.

No generes implementaciones.

Tu única misión es construir el documento maestro que dirigirá el desarrollo completo del proyecto.

---

## Assistant

# PROJECT MASTER PLAN

## Resumen Ejecutivo

Este documento es el **Project Master Plan (PMP)** del proyecto **EcoProgramadores STEAM MUTIS**. Se construyó a partir de la Auditoría Técnica Integral y el Mapa Arquitectónico previos. El proyecto actual es un sitio web estático funcional, pero con deuda técnica crítica por duplicación de layout, hoja CSS monolítica, funciones JavaScript zombie, recursos sin optimizar y ausencia de sistema de construcción. Este plan define el orden de trabajo, las fases, los criterios de calidad y las reglas que gobernarán cualquier modificación futura. El objetivo es estabilizar el proyecto antes de crecer, evitando retrabajos y garantizando mantenibilidad.

---

## Objetivos del Proyecto

1. **Estabilizar** la base actual eliminando errores críticos y código muerto.
2. **Consolidar** la arquitectura para eliminar duplicación y centralizar layouts.
3. **Unificar** el sistema visual para garantizar consistencia entre todas las páginas.
4. **Optimizar** recursos multimedia para mejorar performance.
5. **Documentar** el proyecto para permitir mantenimiento a largo plazo.
6. **Escalar** la estructura para soportar crecimiento sin deuda técnica adicional.

---

## Estrategia General

La estrategia se basa en **6 pilares** derivados directamente del estado actual del proyecto:

1. **Estabilización antes de crecimiento**: No se agregarán nuevos proyectos hasta eliminar la duplicación de layout.
2. **Centralización progresiva**: Consolidar header, footer y estilos compartidos antes de modificar secciones individuales.
3. **Consistencia visual como estándar**: Todo cambio debe preservar la identidad verde/turquesa definida en `:root`.
4. **Performance desde el inicio**: Optimizar assets antes de agregar contenido nuevo.
5. **Accesibilidad y SEO integrados**: No como fase final, sino como parte de cada entrega.
6. **Documentación viva**: Este PMP se actualiza al finalizar cada fase.

**Orden lógico de implementación**:
```
Estabilización → Arquitectura Base → Sistema Visual → Componentes → Responsive → UX → Optimización → Calidad
```

---

## Principios Arquitectónicos

1. **Una sola fuente de verdad**: Header, footer, nav y estilos base deben existir en un solo lugar.
2. **Layout compartido obligatorio**: Toda página debe reutilizar la estructura base; no se permiten copias.
3. **Variables CSS como estándar**: Todo color, espaciado, sombra y border radius debe usar variables; se prohíbe el hardcodeo de valores de diseño.
4. **Recursos con nomenclatura normalizada**: Sin espacios, sin tildes, sin nombres de WhatsApp en archivos de producción.
5. **JavaScript sin exposición de credenciales**: Ningún servicio externo puede tener claves en código fuente.
6. **Responsive first**: Todo componente debe funcionar en móvil antes que en desktop.
7. **Accesibilidad por defecto**: Contraste, navegación por teclado y semántica son obligatorios desde la primera línea.
8. **SEO desde la estructura**: Metaetiquetas y marcado semántico son parte del HTML base, no un añadido posterior.
9. **Sin código muerto**: Si una función, estilo o recurso no se usa, se elimina en la misma fase.
10. **Documentar antes de modificar**: Todo cambio debe estar justificado en este PMP o en documento derivado.

---

## Reglas Globales

- **Nunca duplicar código**: Si un bloque de HTML/CSS/JS se repite, debe extraerse a layout compartido.
- **Nunca romper funcionalidades existentes**: El formulario de contacto, el carrusel y la navegación deben mantenerse operativos durante toda la refactorización.
- **Reutilizar antes de crear**: Antes de agregar un nuevo componente, verificar si existe uno similar en el sistema.
- **No introducir deuda técnica**: Si una tarea requiere workaround, debe documentarse y planificarse su solución definitiva.
- **Validar antes de finalizar fase**: Cada fase tiene criterios de aceptación verificables.
- **Mantener consistencia visual**: Todo componente nuevo debe alinearse con el sistema visual documentado.
- **Eliminar código muerto**: Si al iniciar una fase se detecta código no utilizado, debe eliminarse en esa fase.
- **Mantener nomenclatura consistente**: Sin espacios, sin tildes, sin mayúsculas en nombres de archivos y carpetas.
- **Documentar cambios importantes**: Todo cambio de arquitectura se registra en este PMP o en documento derivado.
- **Justificar cualquier decisión arquitectónica**: Ninguna desviación del plan está permitida sin justificación escrita.

---

## Roadmap General

```
Fase 1: Estabilización (semana 1)
  ↓
Fase 2: Arquitectura Base (semanas 2-3)
  ↓
Fase 3: Sistema Visual Unificado (semanas 3-4)
  ↓
Fase 4: Componentes Reutilizables (semana 4)
  ↓
Fase 5: Responsive y Breakpoints (semana 5)
  ↓
Fase 6: UX y Navegación (semana 6)
  ↓
Fase 7: Accesibilidad (semana 6-7)
  ↓
Fase 8: SEO (semana 7)
  ↓
Fase 9: Optimización de Assets (semanas 8-9)
  ↓
Fase 10: Performance (semana 9)
  ↓
Fase 11: Calidad y Pruebas (semana 10)
  ↓
Fase 12: Auditoría Final (semana 11)
```

---

## Fases del Proyecto

### Fase 1: Estabilización

**Objetivo**: Eliminar errores críticos, código muerto y problemas de seguridad que impiden el desarrollo seguro.

**Descripción**: Esta fase no modifica la arquitectura. Solo corrige lo que impide avanzar: credenciales expuestas, funciones zombie, rutas incorrectas, typos, información falsa y código comentado.

**Justificación**: No es posible refactorizar sobre una base inestable. El formulario de contacto con credenciales expuestas es un riesgo de seguridad activo. Las funciones no definidas generan errores en consola que confunden a los mantenedores.

**Prioridad**: Crítica

**Dependencias**: Ninguna. Es la primera fase.

**Complejidad**: Baja

**Impacto**: Alto — elimina riesgos de seguridad y errores de runtime.

**Nivel de riesgo**: Bajo — cambios aislados y reversibles.

**Tiempo estimado**: 3-4 días

**Entregables**:
- Código sin errores de runtime en `script.js`.
- Credenciales EmailJS rotadas y servicio restringido por dominio.
- Metadatos completos en todas las páginas.
- Sin typos ni placeholders falsos.
- Código comentado eliminado.
- Rutas de recursos validadas.

**Validaciones**:
- Consola del navegador sin errores al cargar cualquier página.
- Formulario de contacto funcional con nuevas credenciales.
- Todas las páginas tienen meta description.
- Todas las imágenes referenciadas existen en disco.
- No hay bloques de código comentado mayores a 5 líneas.

**Criterios de aceptación**:
- `script.js` carga sin excepciones en `index.html`.
- No hay `console.log` en producción.
- No hay funciones exportadas a `window` sin uso.
- El teléfono de contacto tiene número real o el campo se eliminó.
- No hay typos en atributos `alt` ni en texto visible.

**Resultado esperado**: Proyecto funcional sin errores de runtime, sin credenciales expuestas y sin información falsa.

---

### Fase 2: Arquitectura Base

**Objetivo**: Eliminar la duplicación total de layout entre páginas.

**Descripción**: Consolidar el header, footer y estructura base en un solo layout compartido. Las 7 páginas de proyecto deben reutilizar el mismo encabezado y pie que `index.html`, sin copiar HTML ni estilos inline.

**Justificación**: Actualmente existen 3 implementaciones distintas de header (íntegro en `index.html`, reducido en álbum, reducido propio en cada página de proyecto). Cualquier cambio de logo, color o navegación requiere editar 9 archivos. Esta duplicación es el eje principal de la deuda técnica.

**Prioridad**: Crítica

**Dependencias**: Fase 1 completada.

**Complejidad**: Alta

**Impacto**: Muy alto — reduce drásticamente la superficie de mantenimiento.

**Nivel de riesgo**: Medio — cambios estructurales que afectan navegación y recursos compartidos.

**Tiempo estimado**: 1 semana

**Entregables**:
- Layout base unificado para header, footer y estructura HTML.
- 7 páginas de proyecto sin header/footer duplicado.
- Estructura de carpetas consolidada para layouts compartidos.
- Navegación consistente en todas las páginas.

**Validaciones**:
- Todas las páginas tienen el mismo header y footer.
- El botón "Volver" en páginas de proyecto preserva la funcionalidad.
- No hay estilos inline de layout en ninguna página.
- Todas las rutas de imágenes y recursos se resuelven correctamente.

**Criterios de aceptación**:
- Un cambio en el header se refleja en las 9 páginas automáticamente.
- No hay bloques de header/footer duplicados entre archivos.
- La navegación mobile funciona en todas las páginas.
- Los enlaces de redes sociales mantienen sus URLs.

**Resultado esperado**: 9 páginas que comparten el mismo layout base. Fin de la duplicación de estructura.

---

### Fase 3: Sistema Visual Unificado

**Objetivo**: Centralizar todos los estilos en un sistema visual coherente sin duplicación.

**Descripción**: Unificar las hojas CSS existentes, eliminar duplicaciones de selectores y variables, y consolidar el sistema de estilos en una estructura clara. Las 7 páginas de proyecto deben dejar de tener CSS inline y depender exclusivamente del sistema central.

**Justificación**: Actualmente existen 2 archivos CSS externos más CSS inline en 8 páginas. Hay selectores duplicados (`.team-photo-placeholder`, `.teacher-name`, `.teacher-label`), variables redefinidas y más de 25 usos de `!important` en media queries. Esta fragmentación impide mantener consistencia visual.

**Prioridad**: Alta

**Dependencias**: Fase 2 completada.

**Complejidad**: Alta

**Impacto**: Alto — elimina duplicación de estilos y establece consistencia.

**Nivel de riesgo**: Medio — cambios en selectores pueden afectar secciones activas.

**Tiempo estimado**: 1 semana

**Entregables**:
- Sistema CSS centralizado sin duplicación.
- Selectores únicos sin redefiniciones.
- Media queries consolidadas sin `!important`.
- Variables CSS usadas consistentemente en todo el proyecto.
- Sin estilos inline de layout en ninguna página.

**Validaciones**:
- No hay selectores CSS declarados más de una vez.
- No hay valores de color/spacing/sombra hardcodeados donde aplique variable.
- No hay `!important` en media queries.
- Las páginas de proyecto no tienen bloques `<style>` de layout.

**Criterios de aceptación**:
- Toda página se ve idéntica a como se veía al inicio de la fase.
- Un cambio de color en `:root` afecta todas las secciones.
- Los breakpoints funcionan sin solapamientos ni overriding.
- No hay reglas CSS muertas (selectores sin uso en HTML).

**Resultado esperado**: Un sistema CSS mantenible, sin duplicaciones, con variables como fuente de verdad.

---

### Fase 4: Componentes Reutilizables

**Objetivo**: Definir y consolidar los componentes visuales que se repiten en el proyecto.

**Descripción**: Documentar los patrones de botones, cards, inputs, títulos, galerías y secciones que existen en `index.html`. Asegurar que cada componente tenga una sola implementación reutilizable. Las páginas de proyecto deben usar estos componentes en lugar de estilos ad-hoc.

**Justificación**: Actualmente existen 4 variantes de botones, 5 tipos de cards y 3 sistemas de iconografía. La galería expandible tiene estilos pero no funcionalidad conectada. Sin componentes definidos, cada nueva página reinventa estilos.

**Prioridad**: Media

**Dependencias**: Fase 3 completada.

**Complejidad**: Media

**Impacto**: Medio — acelera el desarrollo de nuevas páginas y garantiza consistencia.

**Nivel de riesgo**: Bajo — se basa en componentes ya existentes.

**Tiempo estimado**: 4-5 días

**Entregables**:
- Catálogo de componentes visuales del proyecto.
- Componentes reutilizables para botones, cards, títulos, galerías.
- Eliminación de variantes redundantes.
- Patrón de iconografía unificado.

**Validaciones**:
- Cada tipo de botón tiene una sola clase CSS.
- Cada tipo de card tiene una sola clase CSS.
- No hay estilos de componente duplicados entre secciones.
- Las páginas de proyecto usan componentes del catálogo.

**Criterios de aceptación**:
- Un botón primario se ve igual en todas las páginas.
- Una card de proyecto se ve igual en galería y en detalle.
- No hay estilos de botón/card definidos más de una vez.
- La documentación de componentes está completa.

**Resultado esperado**: Componentes visuales documentados y reutilizables en todas las páginas.

---

### Fase 5: Responsive y Breakpoints

**Objetivo**: Unificar el sistema de breakpoints y garantizar comportamiento consistente en todos los dispositivos.

**Descripción**: Consolidar los 8 breakpoints actuales en un sistema coherente. Eliminar los media queries solapados y el uso de `!important`. Validar que todas las secciones se adaptan correctamente sin necesidad de overrides.

**Justificación**: Actualmente existen breakpoints en 320px, 480px, 640px, 641px, 768px, 1024px, 1025px y 2000px, con valores solapados. El cambio de `font-size` en `html` en breakpoints móviles afecta legibilidad. Los `!important` indican reglas que se sobreescriben entre sí.

**Prioridad**: Media

**Dependencias**: Fase 3 completada.

**Complejidad**: Media

**Impacto**: Medio — mejora experiencia móvil y reduce fragilidad.

**Nivel de riesgo**: Bajo — cambios en breakpoints no alteran contenido.

**Tiempo estimado**: 3-4 días

**Entregables**:
- Sistema de breakpoints unificado.
- Media queries sin solapamientos ni `!important`.
- Comportamiento responsive validado en todas las secciones.
- Sin cambios de `font-size` en `html` por breakpoint.

**Validaciones**:
- No hay dos media queries que activen en el mismo ancho de pantalla.
- No hay `!important` en reglas responsive.
- El sitio se ve correctamente en 320px, 480px, 768px, 1024px y 1280px.
- No hay scroll horizontal en ningún breakpoint.

**Criterios de aceptación**:
- Cada breakpoint tiene un propósito único (móvil, tablet, desktop, wide).
- Los componentes se adaptan sin necesidad de estilos específicos por página.
- No hay reglas que dependan de `!important` para funcionar.

**Resultado esperado**: Sistema responsive mantenible, sin solapamientos, sin overrides frágiles.

---

### Fase 6: UX y Navegación

**Objetivo**: Unificar la experiencia de navegación y comportamiento interactivo entre todas las páginas.

**Descripción**: Establecer patrones de navegación consistentes: mismo header/menu en todas las páginas, mismo comportamiento de botones, misma experiencia de regreso desde páginas de proyecto, mismo sistema de feedback en formularios.

**Justificación**: Actualmente las páginas de proyecto tienen header reducido sin menú, rompiendo la experiencia. El botón "Volver" pierde el contexto de scroll. El formulario usa `alert()` nativo para errores. Sin patrones definidos, cada nueva página tiene UX diferente.

**Prioridad**: Media

**Dependencias**: Fase 2 completada.

**Complejidad**: Media

**Impacto**: Medio — mejora la experiencia sin cambiar la estructura.

**Nivel de riesgo**: Bajo — cambios en comportamiento, no en estructura.

**Tiempo estimado**: 3-4 días

**Entregables**:
- Navegación consistente en todas las páginas.
- Patrones de interacción documentados.
- Sistema de feedback de formularios mejorado.
- Comportamiento de scroll y regreso normalizado.

**Validaciones**:
- Todas las páginas tienen el mismo menú de navegación.
- El botón "Volver" funciona desde cualquier página de proyecto.
- Los errores de formulario se muestran sin `alert()`.
- El menú mobile funciona en todas las páginas.

**Criterios de aceptación**:
- Un usuario puede navegar de cualquier página a cualquier otra sin perder contexto.
- El comportamiento de hover/focus es consistente en botones y cards.
- El formulario muestra errores inline, no alerts.
- El scroll suave funciona en todas las páginas.

**Resultado esperado**: Experiencia de navegación unificada sin importar la página visitada.

---

### Fase 7: Accesibilidad

**Objetivo**: Alcanzar un nivel mínimo de accesibilidad WCAG 2.1 nivel AA en todas las páginas.

**Descripción**: Implementar skip link, landmarks semánticos (`<main>`), `prefers-reduced-motion`, contraste validado, textos alternativos descriptivos, trampa de foco en lightbox y navegación por teclado completa.

**Justificación**: El proyecto carece de skip link, `<main>`, `prefers-reduced-motion`, contraste auditado y alt texts descriptivos. El lightbox no captura foco. Sin accesibilidad desde el inicio, cualquier refactor posterior debe rehacer estos elementos.

**Prioridad**: Media

**Dependencias**: Fase 6 completada.

**Complejidad**: Media

**Impacto**: Medio — amplía la base de usuarios y reduce riesgo legal.

**Nivel de riesgo**: Bajo — cambios en atributos y estilos sin afectar funcionalidad.

**Tiempo estimado**: 3-4 días

**Entregables**:
- Skip link en todas las páginas.
- Landmarks semánticos completos.
- Animaciones respetan `prefers-reduced-motion`.
- Contraste validado en todas las combinaciones texto/fondo.
- Alt texts descriptivos en todas las imágenes.
- Lightbox accesible con trampa de foco.

**Validaciones**:
- Navegación por teclado funciona en todas las páginas.
- El lightbox se cierra con ESC y navega con flechas.
- No hay animaciones cuando el sistema tiene `prefers-reduced-motion`.
- Todas las imágenes tienen `alt` descriptivo mayor a 5 caracteres.
- El contraste cumple WCAG AA (4.5:1 para texto normal).

**Criterios de aceptación**:
- Un usuario puede navegar todo el sitio usando solo teclado.
- Un lector de pantalla puede interpretar la estructura de cada página.
- Las animaciones no causan movimiento excesivo cuando están desactivadas.
- No hay imágenes decorativas sin `alt=""` ni informativas sin descripción.

**Resultado esperado**: Sitio navegable por teclado, con semántica correcta y respeto a preferencias de accesibilidad.

---

### Fase 8: SEO

**Objetivo**: Establecer el nivel mínimo de SEO técnico y contenido en todas las páginas.

**Descripción**: Agregar meta description, Open Graph tags, canonical URLs, structured data básico, `sitemap.xml` y `robots.txt`. Asegurar jerarquía de encabezados correcta en todas las páginas.

**Justificación**: Solo 2 de 9 páginas tienen meta description. No hay OG tags, canonical, sitemap ni structured data. Sin SEO desde la estructura, el crecimiento de contenido no genera visibilidad.

**Prioridad**: Media

**Dependencias**: Fase 6 completada.

**Complejidad**: Baja

**Impacto**: Medio — mejora indexación y presencia en redes sociales.

**Nivel de riesgo**: Bajo — cambios en metadatos sin afectar funcionalidad.

**Tiempo estimado**: 2-3 días

**Entregables**:
- Metaetiquetas completas en todas las páginas.
- Open Graph tags para compartir en redes.
- Canonical URLs definidas.
- Structured data básico (Organization o WebSite).
- `sitemap.xml` y `robots.txt`.
- Jerarquía de encabezados validada.

**Validaciones**:
- Todas las páginas tienen título único y meta description.
- No hay páginas con múltiples `<h1>`.
- Los enlaces canónicos apuntan a la versión correcta.
- El sitemap incluye todas las páginas públicas.

**Criterios de aceptación**:
- Cada página tiene entre 150 y 160 caracteres de meta description.
- Open Graph tags muestran título, descripción e imagen al compartir.
- No hay errores en la validación de structured data.
- El sitemap se genera sin URLs duplicadas.

**Resultado esperado**: Proyecto con SEO técnico completo, listo para indexación y compartición.

---

### Fase 9: Optimización de Assets

**Objetivo**: Reducir el peso de imágenes, videos y audios sin perder calidad visual.

**Descripción**: Renombrar archivos con nomenclatura normalizada, comprimir imágenes, generar formatos modernos (WebP/AVIF) donde aplique, agregar dimensiones intrínsecas y establecer un pipeline de optimización reproducible.

**Justificación**: El proyecto tiene 147 imágenes sin comprimir, 121 con nombres de WhatsApp, 7 videos sin WebM. Sin optimización, el sitio tarda en cargar y consume exceso de datos. Esta fase es obligatoria antes de optimizar performance en Fase 10.

**Prioridad**: Alta

**Dependencias**: Fase 2 completada (para no romper rutas durante consolidación).

**Complejidad**: Media

**Impacto**: Alto — reduce significativamente tiempo de carga y consumo de ancho de banda.

**Nivel de riesgo**: Medio — renombrar archivos requiere actualizar todas las referencias.

**Tiempo estimado**: 1 semana

**Entregables**:
- Imágenes comprimidas y renombradas.
- Formatos modernos generados (WebP/AVIF).
- Dimensiones intrínsecas en todas las imágenes.
- Pipeline de optimización documentado.
- Videos y audios comprimidos.

**Validaciones**:
- Todas las imágenes tienen ancho y alto definidos o `aspect-ratio`.
- No hay nombres de archivo con espacios, tildes o números de WhatsApp.
- Los formatos WebP/AVIF se sirven cuando el navegador lo soporta.
- El peso total de imágenes se reduce en al menos 50%.

**Criterios de aceptación**:
- Ninguna imagen supera los 500KB.
- No hay nombres de archivo con espacios o caracteres especiales.
- Las imágenes se muestran sin layout shift (CLS < 0.1).
- Los videos tienen posters o primer frame visible.

**Resultado esperado**: Assets optimizados, renombrados y con dimensiones definidas.

---

### Fase 10: Performance

**Objetivo**: Mejorar métricas de rendimiento sin cambiar la arquitectura de assets.

**Descripción**: Implementar lazy loading nativo, preload para recursos críticos, reducción de CSS no usado, optimización de animaciones y eliminación de bloqueos de renderizado. Validar con métricas reales de carga.

**Justificación**: El CSS monolítico, las animaciones con `filter: blur()` y la falta de lazy loading generan rendimiento deficiente. Sin métricas establecidas, no es posible medir el éxito de optimizaciones futuras.

**Prioridad**: Media

**Dependencias**: Fase 9 completada.

**Complejidad**: Media

**Impacto**: Medio — mejora experiencia de carga especialmente en móviles.

**Nivel de riesgo**: Bajo — cambios en carga y renderizado sin afectar funcionalidad.

**Tiempo estimado**: 3-4 días

**Entregables**:
- Lazy loading implementado en imágenes y videos.
- Preload para fuentes críticas.
- CSS sin reglas muertas.
- Animaciones optimizadas con `will-change` y `transform`.
- Métricas de performance documentadas.

**Validaciones**:
- Todas las imágenes fuera de viewport usan `loading="lazy"`.
- Las fuentes principales tienen `preload`.
- No hay selectores CSS sin uso en el HTML final.
- Las animaciones usan `transform` y `opacity` exclusivamente.
- No hay `filter: blur()` en elementos animados sin justificación.

**Criterios de aceptación**:
- LCP (Largest Contentful Paint) menor a 2.5s en conexión 3G simulada.
- CLS (Cumulative Layout Shift) menor a 0.1.
- No hay recursos que bloqueen el renderizado crítico.
- Las animaciones corren a 60fps en dispositivos de gama media.

**Resultado esperado**: Métricas de performance documentadas y dentro de rangos aceptables.

---

### Fase 11: Calidad y Pruebas

**Objetivo**: Establecer controles de calidad automáticos y manuales para evitar regresiones.

**Descripción**: Implementar validaciones de HTML, CSS y JavaScript. Crear pruebas de humo (smoke tests) para verificar que las páginas cargan correctamente, que los enlaces funcionan y que las funcionalidades principales operan.

**Justificación**: El proyecto no tiene ninguna prueba. Sin validación automática, cualquier cambio puede romper funcionalidades sin detección inmediata. Esta fase protege la inversión de las fases anteriores.

**Prioridad**: Media

**Dependencias**: Fase 10 completada.

**Complejidad**: Media

**Impacto**: Medio — reduce regresiones y acelera futuras modificaciones.

**Nivel de riesgo**: Bajo — se agrega capa de validación sin modificar funcionalidad.

**Tiempo estimado**: 3-4 días

**Entregables**:
- Pruebas de humo para las 9 páginas.
- Validación de enlaces internos y externos.
- Checklist de calidad por página.
- Documentación de procedimientos de validación.

**Validaciones**:
- Todas las páginas cargan sin errores 404.
- Todos los enlaces internos funcionan.
- Los formularios se envían correctamente.
- Las imágenes se muestran sin roturas.

**Criterios de aceptación**:
- Un suite de pruebas verifica carga de páginas y funcionalidades básicas.
- No hay enlaces rotos internos.
- No hay recursos faltantes.
- El formulario de contacto se envía exitosamente en ambiente de prueba.

**Resultado esperado**: Proyecto con validación automática básica y procedimientos documentados.

---

### Fase 12: Auditoría Final

**Objetivo**: Validar que el proyecto cumple todos los criterios de calidad antes de considerarse estable.

**Descripción**: Ejecutar auditoría completa de arquitectura, accesibilidad, SEO, performance y seguridad. Comparar estado final contra el Mapa Arquitectónico inicial. Documentar desviaciones y lecciones aprendidas.

**Justificación**: Sin auditoría final, no hay certeza de que las fases anteriores cumplieron sus objetivos. Esta fase cierra el ciclo y establece el nuevo baseline del proyecto.

**Prioridad**: Alta

**Dependencias**: Fases 1-11 completadas.

**Complejidad**: Baja

**Impacto**: Alto — valida la calidad integral antes de considerar el proyecto estable.

**Nivel de riesgo**: Bajo — solo lectura y validación.

**Tiempo estimado**: 2-3 días

**Entregables**:
- Informe de auditoría final.
- Comparación estado inicial vs final.
- Lista de desviaciones aceptadas.
- Lecciones aprendidas documentadas.
- Actualización del PMP con nuevas métricas.

**Validaciones**:
- Todas las métricas del Mapa Arquitectónico han mejorado o se mantienen.
- No hay deuda técnica nueva introducida.
- Todos los criterios de aceptación de cada fase están cumplidos.
- El proyecto cumple los criterios globales de calidad.

**Criterios de aceptación**:
- Arquitectura: sin duplicación de layout.
- Mantenibilidad: un cambio de branding afecta máximo 2 archivos.
- Escalabilidad: agregar proyecto requiere solo crear contenido, no HTML completo.
- Performance: métricas dentro de rangos definidos.
- Accesibilidad: WCAG AA en páginas principales.
- SEO: metaetiquetas completas en todas las páginas.
- Seguridad: sin credenciales expuestas.

**Resultado esperado**: Proyecto estable, documentado y listo para crecimiento controlado.

---

## Sprints por Fase

### Fase 1: Estabilización
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 1.1 | 1 día | Seguridad y errores críticos | Rotar credenciales EmailJS, eliminar console.log, eliminar código comentado, corregir typos | `script.js` limpio, credenciales rotadas |
| 1.2 | 1 día | Integridad de datos | Corregir teléfono incompleto, completar meta descriptions faltantes, validar rutas de recursos | Metaetiquetas completas, teléfono real |
| 1.3 | 1 día | Limpieza de código | Corregir ruta de `script.js` en páginas de proyecto, eliminar funciones zombie o documentar su estado | Sin errores de runtime |

### Fase 2: Arquitectura Base
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 2.1 | 3 días | Layout compartido | Crear layout base para header/footer, aplicarlo en todas las páginas, eliminar duplicación | Layout unificado |
| 2.2 | 2 días | Navegación consistente | Asegurar menú mobile en todas las páginas, normalizar botón "Volver", validar enlaces | Navegación funcional en 9 páginas |

### Fase 3: Sistema Visual Unificado
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 3.1 | 3 días | Consolidación CSS | Unificar `styles.css` y `responsive-phases.css`, eliminar selectores duplicados, eliminar `!important` | CSS unificado |
| 3.2 | 2 días | Eliminación de inline | Extraer estilos inline de páginas de proyecto y álbum al sistema central | Sin CSS inline de layout |

### Fase 4: Componentes Reutilizables
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 4.1 | 2 días | Catálogo de componentes | Documentar variantes de botones, cards, títulos, galerías existentes | Documento de componentes |
| 4.2 | 3 días | Unificación de variantes | Reducir variantes redundantes, establecer patrón único por tipo | Componentes consolidados |

### Fase 5: Responsive y Breakpoints
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 5.1 | 2 días | Unificación de breakpoints | Definir sistema de breakpoints, reescribir media queries | Media queries consolidadas |
| 5.2 | 2 días | Validación responsive | Probar en 320px, 480px, 768px, 1024px, 1280px, eliminar `!important` | Responsive sin overrides |

### Fase 6: UX y Navegación
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 6.1 | 2 días | Navegación unificada | Header/menu idénticos en todas las páginas, scroll behavior consistente | Navegación uniforme |
| 6.2 | 2 días | Feedback de formulario | Reemplazar `alert()` por mensajes inline, estados de carga claros | Formulario accesible |

### Fase 7: Accesibilidad
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 7.1 | 2 días | Estructura semántica | Skip link, `<main>`, landmarks, jerarquía de encabezados | HTML semántico completo |
| 7.2 | 2 días | Animaciones y foco | `prefers-reduced-motion`, trampa de foco en lightbox, navegación por teclado | Accesibilidad de interacción |

### Fase 8: SEO
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 8.1 | 1 día | Metaetiquetas | OG tags, canonical URLs, structured data básico | SEO técnico completo |
| 8.2 | 1 día | Archivos de índice | `sitemap.xml`, `robots.txt`, validación de títulos únicos | Índice de navegación |

### Fase 9: Optimización de Assets
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 9.1 | 3 días | Imágenes | Renombrar, comprimir, generar WebP/AVIF, agregar dimensiones | Imágenes optimizadas |
| 9.2 | 2 días | Videos y audios | Comprimir videos, generar posters, optimizar audios | Media optimizado |

### Fase 10: Performance
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 10.1 | 2 días | Carga | Lazy loading, preload fuentes, eliminar bloqueos | Mejora en métricas de carga |
| 10.2 | 2 días | Renderizado | Optimizar animaciones, `will-change`, `content-visibility` | Animaciones a 60fps |

### Fase 11: Calidad y Pruebas
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 11.1 | 2 días | Pruebas de humo | Validar carga de páginas, enlaces, formulario | Suite de pruebas básica |
| 11.2 | 1 día | Checklist | Validar accesibilidad, SEO, responsive en todas las páginas | Informe de validación |

### Fase 12: Auditoría Final
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 12.1 | 2 días | Auditoría integral | Comparar métricas iniciales vs finales, validar criterios | Informe de auditoría final |
| 12.2 | 1 día | Documentación | Actualizar PMP, README y lecciones aprendidas | PMP actualizado |

---

## Matriz de Dependencias

| Fase | Depende de | Puede ejecutarse en paralelo con |
|------|-------------|----------------------------------|
| Fase 1: Estabilización | — | — |
| Fase 2: Arquitectura Base | Fase 1 | — |
| Fase 3: Sistema Visual Unificado | Fase 2 | — |
| Fase 4: Componentes Reutilizables | Fase 3 | — |
| Fase 5: Responsive y Breakpoints | Fase 3 | — |
| Fase 6: UX y Navegación | Fase 2 | Fase 5 |
| Fase 7: Accesibilidad | Fase 6 | Fase 5 |
| Fase 8: SEO | Fase 6 | — |
| Fase 9: Optimización de Assets | Fase 2 | — |
| Fase 10: Performance | Fase 9 | Fase 7 |
| Fase 11: Calidad y Pruebas | Fase 10 | — |
| Fase 12: Auditoría Final | Fases 1-11 | — |

**Secuencia crítica**: Fase 1 → Fase 2 → Fase 3 → Fase 4 → Fase 5 → Fase 9 → Fase 10 → Fase 11 → Fase 12

**Secuencia paralela permitida**: Fase 6, 7 y 8 pueden ejecutarse en paralelo una vez finalizada Fase 2. Fase 10 puede iniciarse cuando Fase 9 haya consolidado la estructura de assets.

---

## Matriz de Riesgos

| Fase | Nivel de riesgo | Impacto | Posibles problemas | Mitigación |
|------|-----------------|---------|-------------------|------------|
| **Fase 1: Estabilización** | Bajo | Medio | Rotación de credenciales EmailJS puede dejar formulario inoperativo si se olvida actualizar el servicio | Coordinar rotación con actualización simultánea en el servicio EmailJS |
| **Fase 2: Arquitectura Base** | Medio | Alto | Cambios en header/footer pueden romper enlaces o rutas de recursos | Validar todas las rutas después de consolidar layouts; mantener estructura de carpetas hasta Fase 9 |
| **Fase 3: Sistema Visual Unificado** | Medio | Alto | Unificación de CSS puede alterar visualmente secciones específicas | Hacer capturas de pantalla antes de iniciar; validar cada sección contra baseline |
| **Fase 4: Componentes Reutilizables** | Bajo | Medio | Reducción de variantes puede perder estilos específicos de alguna sección | Documentar cada variante antes de eliminar; aprobación explícita de cambios |
| **Fase 5: Responsive y Breakpoints** | Bajo | Medio | Cambio de breakpoints puede afectar dispositivos específicos | Probar en viewports reales y emulados antes de marcar completada |
| **Fase 6: UX y Navegación** | Bajo | Medio | Cambios en navegación pueden confundir a usuarios habituales | Mantener mismas URLs y mismas secciones; solo cambiar contenedores |
| **Fase 7: Accesibilidad** | Bajo | Medio | Implementación de skip link o trampa de foco puede interferir con scripts existentes | Probar interacciones completas después de cada cambio de accesibilidad |
| **Fase 8: SEO** | Bajo | Bajo | Metaetiquetas incorrectas pueden afectar cómo se muestra el sitio en buscadores | Validar con herramientas de preview antes de publicar |
| **Fase 9: Optimización de Assets** | Medio | Alto | Renombrar archivos puede romper rutas si no se actualizan todas las referencias | Usar búsqueda global de referencias antes de renombrar; actualizar en bloque |
| **Fase 10: Performance** | Bajo | Medio | Lazy loading puede retrasar aparición de imágenes Above-the-Fold | Configurar `loading="eager"` en imágenes críticas (logo, hero) |
| **Fase 11: Calidad y Pruebas** | Bajo | Bajo | Suite de pruebas puede generar falsos negativos por rutas locales | Definir ambiente de prueba consistente y separado de producción |
| **Fase 12: Auditoría Final** | Bajo | Bajo | Auditoría puede detectar problemas no cubiertos por fases anteriores | Registrar hallazgos como tareas para siguiente iteración |

---

## Matriz de Prioridades

| Fase | Prioridad | Justificación |
|------|-----------|---------------|
| **Fase 1: Estabilización** | 🔴 Crítica | Elimina errores de runtime, expone credenciales y datos falsos. Bloquea cualquier trabajo seguro. |
| **Fase 2: Arquitectura Base** | 🔴 Crítica | Elimina duplicación total de layout. Sin esto, cualquier cambio requiere editar 9 archivos. |
| **Fase 3: Sistema Visual Unificado** | 🟠 Alta | Sin CSS centralizado, no hay consistencia posible. Es el precursor de componentes. |
| **Fase 9: Optimización de Assets** | 🟠 Alta | 147 imágenes sin optimizar afectan performance y experiencia móvil. |
| **Fase 5: Responsivo y Breakpoints** | 🟡 Media | Mejora experiencia móvil pero no bloquea crecimiento. |
| **Fase 6: UX y Navegación** | 🟡 Media | Mejora experiencia pero no afecta funcionalidad base. |
| **Fase 7: Accesibilidad** | 🟡 Media | Amplía alcance y reduce riesgo legal, pero no bloquea funcionalidad. |
| **Fase 8: SEO** | 🟡 Media | Mejora visibilidad pero no afecta experiencia de usuario actual. |
| **Fase 10: Performance** | 🟡 Media | Mejora métricas pero depende de Fase 9 para impacto real. |
| **Fase 4: Componentes Reutilizables** | 🟢 Baja | Acelera desarrollo futuro pero no es bloqueante para estabilización.

The model hit its output limit, so this response may be incomplete.

---

## User

termina bro

---

## Assistant

# PROJECT MASTER PLAN

## Resumen Ejecutivo

Este documento es el **Project Master Plan (PMP)** del proyecto **EcoProgramadores STEAM MUTIS**. Se construyó a partir de la Auditoría Técnica Integral y el Mapa Arquitectónico previos. El proyecto actual es un sitio web estático funcional, pero con deuda técnica crítica por duplicación de layout, hoja CSS monolítica, funciones JavaScript zombie, recursos sin optimizar y ausencia de sistema de construcción. Este plan define el orden de trabajo, las fases, los criterios de calidad y las reglas que gobernarán cualquier modificación futura. El objetivo es estabilizar el proyecto antes de crecer, evitando retrabajos y garantizando mantenibilidad.

---

## Objetivos del Proyecto

1. **Estabilizar** la base actual eliminando errores críticos y código muerto.
2. **Consolidar** la arquitectura para eliminar duplicación y centralizar layouts.
3. **Unificar** el sistema visual para garantizar consistencia entre todas las páginas.
4. **Optimizar** recursos multimedia para mejorar performance.
5. **Documentar** el proyecto para permitir mantenimiento a largo plazo.
6. **Escalar** la estructura para soportar crecimiento sin deuda técnica adicional.

---

## Estrategia General

La estrategia se basa en **6 pilares** derivados directamente del estado actual del proyecto:

1. **Estabilización antes de crecimiento**: No se agregarán nuevos proyectos hasta eliminar la duplicación de layout.
2. **Centralización progresiva**: Consolidar header, footer y estilos compartidos antes de modificar secciones individuales.
3. **Consistencia visual como estándar**: Todo cambio debe preservar la identidad verde/turquesa definida en `:root`.
4. **Performance desde el inicio**: Optimizar assets antes de agregar contenido nuevo.
5. **Accesibilidad y SEO integrados**: No como fase final, sino como parte de cada entrega.
6. **Documentación viva**: Este PMP se actualiza al finalizar cada fase.

**Orden lógico de implementación**:
```
Estabilización → Arquitectura Base → Sistema Visual → Componentes → Responsive → UX → Optimización → Calidad
```

---

## Principios Arquitectónicos

1. **Una sola fuente de verdad**: Header, footer, nav y estilos base deben existir en un solo lugar.
2. **Layout compartido obligatorio**: Toda página debe reutilizar la estructura base; no se permiten copias.
3. **Variables CSS como estándar**: Todo color, espaciado, sombra y border radius debe usar variables; se prohíbe el hardcodeo de valores de diseño.
4. **Recursos con nomenclatura normalizada**: Sin espacios, sin tildes, sin nombres de WhatsApp en archivos de producción.
5. **JavaScript sin exposición de credenciales**: Ningún servicio externo puede tener claves en código fuente.
6. **Responsive first**: Todo componente debe funcionar en móvil antes que en desktop.
7. **Accesibilidad por defecto**: Contraste, navegación por teclado y semántica son obligatorios desde la primera línea.
8. **SEO desde la estructura**: Metaetiquetas y marcado semántico son parte del HTML base, no un añadido posterior.
9. **Sin código muerto**: Si una función, estilo o recurso no se usa, se elimina en la misma fase.
10. **Documentar antes de modificar**: Todo cambio debe estar justificado en este PMP o en documento derivado.

---

## Reglas Globales

- **Nunca duplicar código**: Si un bloque de HTML/CSS/JS se repite, debe extraerse a layout compartido.
- **Nunca romper funcionalidades existentes**: El formulario de contacto, el carrusel y la navegación deben mantenerse operativos durante toda la refactorización.
- **Reutilizar antes de crear**: Antes de agregar un nuevo componente, verificar si existe uno similar en el sistema.
- **No introducir deuda técnica**: Si una tarea requiere workaround, debe documentarse y planificarse su solución definitiva.
- **Validar antes de finalizar fase**: Cada fase tiene criterios de aceptación verificables.
- **Mantener consistencia visual**: Todo componente nuevo debe alinearse con el sistema visual documentado.
- **Eliminar código muerto**: Si al iniciar una fase se detecta código no utilizado, debe eliminarse en esa fase.
- **Mantener nomenclatura consistente**: Sin espacios, sin tildes, sin mayúsculas en nombres de archivos y carpetas.
- **Documentar cambios importantes**: Todo cambio de arquitectura se registra en este PMP o en documento derivado.
- **Justificar cualquier decisión arquitectónica**: Ninguna desviación del plan está permitida sin justificación escrita.

---

## Roadmap General

```
Fase 1: Estabilización (semana 1)
  ↓
Fase 2: Arquitectura Base (semanas 2-3)
  ↓
Fase 3: Sistema Visual Unificado (semanas 3-4)
  ↓
Fase 4: Componentes Reutilizables (semana 4)
  ↓
Fase 5: Responsive y Breakpoints (semana 5)
  ↓
Fase 6: UX y Navegación (semana 6)
  ↓
Fase 7: Accesibilidad (semana 6-7)
  ↓
Fase 8: SEO (semana 7)
  ↓
Fase 9: Optimización de Assets (semanas 8-9)
  ↓
Fase 10: Performance (semana 9)
  ↓
Fase 11: Calidad y Pruebas (semana 10)
  ↓
Fase 12: Auditoría Final (semana 11)
```

---

## Fases del Proyecto

### Fase 1: Estabilización

**Objetivo**: Eliminar errores críticos, código muerto y problemas de seguridad que impiden el desarrollo seguro.

**Descripción**: Esta fase no modifica la arquitectura. Solo corrige lo que impide avanzar: credenciales expuestas, funciones zombie, rutas incorrectas, typos, información falsa y código comentado.

**Justificación**: No es posible refactorizar sobre una base inestable. El formulario de contacto con credenciales expuestas es un riesgo de seguridad activo. Las funciones no definidas generan errores en consola que confunden a los mantenedores.

**Prioridad**: Crítica

**Dependencias**: Ninguna. Es la primera fase.

**Complejidad**: Baja

**Impacto**: Alto — elimina riesgos de seguridad y errores de runtime.

**Nivel de riesgo**: Bajo — cambios aislados y reversibles.

**Tiempo estimado**: 3-4 días

**Entregables**:
- Código sin errores de runtime en `script.js`.
- Credenciales EmailJS rotadas y servicio restringido por dominio.
- Metadatos completos en todas las páginas.
- Sin typos ni placeholders falsos.
- Código comentado eliminado.
- Rutas de recursos validadas.

**Validaciones**:
- Consola del navegador sin errores al cargar cualquier página.
- Formulario de contacto funcional con nuevas credenciales.
- Todas las páginas tienen meta description.
- Todas las imágenes referenciadas existen en disco.
- No hay bloques de código comentado mayores a 5 líneas.

**Criterios de aceptación**:
- `script.js` carga sin excepciones en `index.html`.
- No hay `console.log` en producción.
- No hay funciones exportadas a `window` sin uso.
- El teléfono de contacto tiene número real o el campo se eliminó.
- No hay typos en atributos `alt` ni en texto visible.

**Resultado esperado**: Proyecto funcional sin errores de runtime, sin credenciales expuestas y sin información falsa.

---

### Fase 2: Arquitectura Base

**Objetivo**: Eliminar la duplicación total de layout entre páginas.

**Descripción**: Consolidar el header, footer y estructura base en un solo layout compartido. Las 7 páginas de proyecto deben reutilizar el mismo encabezado y pie que `index.html`, sin copiar HTML ni estilos inline.

**Justificación**: Actualmente existen 3 implementaciones distintas de header (íntegro en `index.html`, reducido en álbum, reducido propio en cada página de proyecto). Cualquier cambio de logo, color o navegación requiere editar 9 archivos. Esta duplicación es el eje principal de la deuda técnica.

**Prioridad**: Crítica

**Dependencias**: Fase 1 completada.

**Complejidad**: Alta

**Impacto**: Muy alto — reduce drásticamente la superficie de mantenimiento.

**Nivel de riesgo**: Medio — cambios estructurales que afectan navegación y recursos compartidos.

**Tiempo estimado**: 1 semana

**Entregables**:
- Layout base unificado para header, footer y estructura HTML.
- 7 páginas de proyecto sin header/footer duplicado.
- Estructura de carpetas consolidada para layouts compartidos.
- Navegación consistente en todas las páginas.

**Validaciones**:
- Todas las páginas tienen el mismo header y footer.
- El botón "Volver" en páginas de proyecto preserva la funcionalidad.
- No hay estilos inline de layout en ninguna página.
- Todas las rutas de imágenes y recursos se resuelven correctamente.

**Criterios de aceptación**:
- Un cambio en el header se refleja en las 9 páginas automáticamente.
- No hay bloques de header/footer duplicados entre archivos.
- La navegación mobile funciona en todas las páginas.
- Los enlaces de redes sociales mantienen sus URLs.

**Resultado esperado**: 9 páginas que comparten el mismo layout base. Fin de la duplicación de estructura.

---

### Fase 3: Sistema Visual Unificado

**Objetivo**: Centralizar todos los estilos en un sistema visual coherente sin duplicación.

**Descripción**: Unificar las hojas CSS existentes, eliminar duplicaciones de selectores y variables, y consolidar el sistema de estilos en una estructura clara. Las 7 páginas de proyecto deben dejar de tener CSS inline y depender exclusivamente del sistema central.

**Justificación**: Actualmente existen 2 archivos CSS externos más CSS inline en 8 páginas. Hay selectores duplicados (`.team-photo-placeholder`, `.teacher-name`, `.teacher-label`), variables redefinidas y más de 25 usos de `!important` en media queries. Esta fragmentación impide mantener consistencia visual.

**Prioridad**: Alta

**Dependencias**: Fase 2 completada.

**Complejidad**: Alta

**Impacto**: Alto — elimina duplicación de estilos y establece consistencia.

**Nivel de riesgo**: Medio — cambios en selectores pueden afectar secciones activas.

**Tiempo estimado**: 1 semana

**Entregables**:
- Sistema CSS centralizado sin duplicación.
- Selectores únicos sin redefiniciones.
- Media queries consolidadas sin `!important`.
- Variables CSS usadas consistentemente en todo el proyecto.
- Sin estilos inline de layout en ninguna página.

**Validaciones**:
- No hay selectores CSS declarados más de una vez.
- No hay valores de color/spacing/sombra hardcodeados donde aplique variable.
- No hay `!important` en media queries.
- Las páginas de proyecto no tienen bloques `<style>` de layout.

**Criterios de aceptación**:
- Toda página se ve idéntica a como se veía al inicio de la fase.
- Un cambio de color en `:root` afecta todas las secciones.
- Los breakpoints funcionan sin solapamientos ni overriding.
- No hay reglas CSS muertas (selectores sin uso en HTML).

**Resultado esperado**: Un sistema CSS mantenible, sin duplicaciones, con variables como fuente de verdad.

---

### Fase 4: Componentes Reutilizables

**Objetivo**: Definir y consolidar los componentes visuales que se repiten en el proyecto.

**Descripción**: Documentar los patrones de botones, cards, inputs, títulos, galerías y secciones que existen en `index.html`. Asegurar que cada componente tenga una sola implementación reutilizable. Las páginas de proyecto deben usar estos componentes en lugar de estilos ad-hoc.

**Justificación**: Actualmente existen 4 variantes de botones, 5 tipos de cards y 3 sistemas de iconografía. La galería expandible tiene estilos pero no funcionalidad conectada. Sin componentes definidos, cada nueva página reinventa estilos.

**Prioridad**: Media

**Dependencias**: Fase 3 completada.

**Complejidad**: Media

**Impacto**: Medio — acelera el desarrollo de nuevas páginas y garantiza consistencia.

**Nivel de riesgo**: Bajo — se basa en componentes ya existentes.

**Tiempo estimado**: 4-5 días

**Entregables**:
- Catálogo de componentes visuales del proyecto.
- Componentes reutilizables para botones, cards, títulos, galerías.
- Eliminación de variantes redundantes.
- Patrón de iconografía unificado.

**Validaciones**:
- Cada tipo de botón tiene una sola clase CSS.
- Cada tipo de card tiene una sola clase CSS.
- No hay estilos de componente duplicados entre secciones.
- Las páginas de proyecto usan componentes del catálogo.

**Criterios de aceptación**:
- Un botón primario se ve igual en todas las páginas.
- Una card de proyecto se ve igual en galería y en detalle.
- No hay estilos de botón/card definidos más de una vez.
- La documentación de componentes está completa.

**Resultado esperado**: Componentes visuales documentados y reutilizables en todas las páginas.

---

### Fase 5: Responsive y Breakpoints

**Objetivo**: Unificar el sistema de breakpoints y garantizar comportamiento consistente en todos los dispositivos.

**Descripción**: Consolidar los 8 breakpoints actuales en un sistema coherente. Eliminar los media queries solapados y el uso de `!important`. Validar que todas las secciones se adaptan correctamente sin necesidad de overrides.

**Justificación**: Actualmente existen breakpoints en 320px, 480px, 640px, 641px, 768px, 1024px, 1025px y 2000px, con valores solapados. El cambio de `font-size` en `html` en breakpoints móviles afecta legibilidad. Los `!important` indican reglas que se sobreescriben entre sí.

**Prioridad**: Media

**Dependencias**: Fase 3 completada.

**Complejidad**: Media

**Impacto**: Medio — mejora experiencia móvil y reduce fragilidad.

**Nivel de riesgo**: Bajo — cambios en breakpoints no alteran contenido.

**Tiempo estimado**: 3-4 días

**Entregables**:
- Sistema de breakpoints unificado.
- Media queries sin solapamientos ni `!important`.
- Comportamiento responsive validado en todas las secciones.
- Sin cambios de `font-size` en `html` por breakpoint.

**Validaciones**:
- No hay dos media queries que activen en el mismo ancho de pantalla.
- No hay `!important` en reglas responsive.
- El sitio se ve correctamente en 320px, 480px, 768px, 1024px y 1280px.
- No hay scroll horizontal en ningún breakpoint.

**Criterios de aceptación**:
- Cada breakpoint tiene un propósito único (móvil, tablet, desktop, wide).
- Los componentes se adaptan sin necesidad de estilos específicos por página.
- No hay reglas que dependan de `!important` para funcionar.

**Resultado esperado**: Sistema responsive mantenible, sin solapamientos, sin overrides frágiles.

---

### Fase 6: UX y Navegación

**Objetivo**: Unificar la experiencia de navegación y comportamiento interactivo entre todas las páginas.

**Descripción**: Establecer patrones de navegación consistentes: mismo header/menu en todas las páginas, mismo comportamiento de botones, misma experiencia de regreso desde páginas de proyecto, mismo sistema de feedback en formularios.

**Justificación**: Actualmente las páginas de proyecto tienen header reducido sin menú, rompiendo la experiencia. El botón "Volver" pierde el contexto de scroll. El formulario usa `alert()` nativo para errores. Sin patrones definidos, cada nueva página tiene UX diferente.

**Prioridad**: Media

**Dependencias**: Fase 2 completada.

**Complejidad**: Media

**Impacto**: Medio — mejora la experiencia sin cambiar la estructura.

**Nivel de riesgo**: Bajo — cambios en comportamiento, no en estructura.

**Tiempo estimado**: 3-4 días

**Entregables**:
- Navegación consistente en todas las páginas.
- Patrones de interacción documentados.
- Sistema de feedback de formularios mejorado.
- Comportamiento de scroll y regreso normalizado.

**Validaciones**:
- Todas las páginas tienen el mismo menú de navegación.
- El botón "Volver" funciona desde cualquier página de proyecto.
- Los errores de formulario se muestran sin `alert()`.
- El menú mobile funciona en todas las páginas.

**Criterios de aceptación**:
- Un usuario puede navegar de cualquier página a cualquier otra sin perder contexto.
- El comportamiento de hover/focus es consistente en botones y cards.
- El formulario muestra errores inline, no alerts.
- El scroll suave funciona en todas las páginas.

**Resultado esperado**: Experiencia de navegación unificada sin importar la página visitada.

---

### Fase 7: Accesibilidad

**Objetivo**: Alcanzar un nivel mínimo de accesibilidad WCAG 2.1 nivel AA en todas las páginas.

**Descripción**: Implementar skip link, landmarks semánticos (`<main>`), `prefers-reduced-motion`, contraste validado, textos alternativos descriptivos, trampa de foco en lightbox y navegación por teclado completa.

**Justificación**: El proyecto carece de skip link, `<main>`, `prefers-reduced-motion`, contraste auditado y alt texts descriptivos. El lightbox no captura foco. Sin accesibilidad desde el inicio, cualquier refactor posterior debe rehacer estos elementos.

**Prioridad**: Media

**Dependencias**: Fase 6 completada.

**Complejidad**: Media

**Impacto**: Medio — amplía la base de usuarios y reduce riesgo legal.

**Nivel de riesgo**: Bajo — cambios en atributos y estilos sin afectar funcionalidad.

**Tiempo estimado**: 3-4 días

**Entregables**:
- Skip link en todas las páginas.
- Landmarks semánticos completos.
- Animaciones respetan `prefers-reduced-motion`.
- Contraste validado en todas las combinaciones texto/fondo.
- Alt texts descriptivos en todas las imágenes.
- Lightbox accesible con trampa de foco.

**Validaciones**:
- Navegación por teclado funciona en todas las páginas.
- El lightbox se cierra con ESC y navega con flechas.
- No hay animaciones cuando el sistema tiene `prefers-reduced-motion`.
- Todas las imágenes tienen `alt` descriptivo mayor a 5 caracteres.
- El contraste cumple WCAG AA (4.5:1 para texto normal).

**Criterios de aceptación**:
- Un usuario puede navegar todo el sitio usando solo teclado.
- Un lector de pantalla puede interpretar la estructura de cada página.
- Las animaciones no causan movimiento excesivo cuando están desactivadas.
- No hay imágenes decorativas sin `alt=""` ni informativas sin descripción.

**Resultado esperado**: Sitio navegable por teclado, con semántica correcta y respeto a preferencias de accesibilidad.

---

### Fase 8: SEO

**Objetivo**: Establecer el nivel mínimo de SEO técnico y contenido en todas las páginas.

**Descripción**: Agregar meta description, Open Graph tags, canonical URLs, structured data básico, `sitemap.xml` y `robots.txt`. Asegurar jerarquía de encabezados correcta en todas las páginas.

**Justificación**: Solo 2 de 9 páginas tienen meta description. No hay OG tags, canonical, sitemap ni structured data. Sin SEO desde la estructura, el crecimiento de contenido no genera visibilidad.

**Prioridad**: Media

**Dependencias**: Fase 6 completada.

**Complejidad**: Baja

**Impacto**: Medio — mejora indexación y presencia en redes sociales.

**Nivel de riesgo**: Bajo — cambios en metadatos sin afectar funcionalidad.

**Tiempo estimado**: 2-3 días

**Entregables**:
- Metaetiquetas completas en todas las páginas.
- Open Graph tags para compartir en redes.
- Canonical URLs definidas.
- Structured data básico (Organization o WebSite).
- `sitemap.xml` y `robots.txt`.
- Jerarquía de encabezados validada.

**Validaciones**:
- Todas las páginas tienen título único y meta description.
- No hay páginas con múltiples `<h1>`.
- Los enlaces canónicos apuntan a la versión correcta.
- El sitemap incluye todas las páginas públicas.

**Criterios de aceptación**:
- Cada página tiene entre 150 y 160 caracteres de meta description.
- Open Graph tags muestran título, descripción e imagen al compartir.
- No hay errores en la validación de structured data.
- El sitemap se genera sin URLs duplicadas.

**Resultado esperado**: Proyecto con SEO técnico completo, listo para indexación y compartición.

---

### Fase 9: Optimización de Assets

**Objetivo**: Reducir el peso de imágenes, videos y audios sin perder calidad visual.

**Descripción**: Renombrar archivos con nomenclatura normalizada, comprimir imágenes, generar formatos modernos (WebP/AVIF) donde aplique, agregar dimensiones intrínsecas y establecer un pipeline de optimización reproducible.

**Justificación**: El proyecto tiene 147 imágenes sin comprimir, 121 con nombres de WhatsApp, 7 videos sin WebM. Sin optimización, el sitio tarda en cargar y consume exceso de datos. Esta fase es obligatoria antes de optimizar performance en Fase 10.

**Prioridad**: Alta

**Dependencias**: Fase 2 completada (para no romper rutas durante consolidación).

**Complejidad**: Media

**Impacto**: Alto — reduce significativamente tiempo de carga y consumo de ancho de banda.

**Nivel de riesgo**: Medio — renombrar archivos requiere actualizar todas las referencias.

**Tiempo estimado**: 1 semana

**Entregables**:
- Imágenes comprimidas y renombradas.
- Formatos modernos generados (WebP/AVIF).
- Dimensiones intrínsecas en todas las imágenes.
- Pipeline de optimización documentado.
- Videos y audios comprimidos.

**Validaciones**:
- Todas las imágenes tienen ancho y alto definidos o `aspect-ratio`.
- No hay nombres de archivo con espacios, tildes o números de WhatsApp.
- Los formatos WebP/AVIF se sirven cuando el navegador lo soporta.
- El peso total de imágenes se reduce en al menos 50%.

**Criterios de aceptación**:
- Ninguna imagen supera los 500KB.
- No hay nombres de archivo con espacios o caracteres especiales.
- Las imágenes se muestran sin layout shift (CLS < 0.1).
- Los videos tienen posters o primer frame visible.

**Resultado esperado**: Assets optimizados, renombrados y con dimensiones definidas.

---

### Fase 10: Performance

**Objetivo**: Mejorar métricas de rendimiento sin cambiar la arquitectura de assets.

**Descripción**: Implementar lazy loading nativo, preload para recursos críticos, reducción de CSS no usado, optimización de animaciones y eliminación de bloqueos de renderizado. Validar con métricas reales de carga.

**Justificación**: El CSS monolítico, las animaciones con `filter: blur()` y la falta de lazy loading generan rendimiento deficiente. Sin métricas establecidas, no es posible medir el éxito de optimizaciones futuras.

**Prioridad**: Media

**Dependencias**: Fase 9 completada.

**Complejidad**: Media

**Impacto**: Medio — mejora experiencia de carga especialmente en móviles.

**Nivel de riesgo**: Bajo — cambios en carga y renderizado sin afectar funcionalidad.

**Tiempo estimado**: 3-4 días

**Entregables**:
- Lazy loading implementado en imágenes y videos.
- Preload para fuentes críticas.
- CSS sin reglas muertas.
- Animaciones optimizadas con `will-change` y `transform`.
- Métricas de performance documentadas.

**Validaciones**:
- Todas las imágenes fuera de viewport usan `loading="lazy"`.
- Las fuentes principales tienen `preload`.
- No hay selectores CSS sin uso en el HTML final.
- Las animaciones usan `transform` y `opacity` exclusivamente.
- No hay `filter: blur()` en elementos animados sin justificación.

**Criterios de aceptación**:
- LCP (Largest Contentful Paint) menor a 2.5s en conexión 3G simulada.
- CLS (Cumulative Layout Shift) menor a 0.1.
- No hay recursos que bloqueen el renderizado crítico.
- Las animaciones corren a 60fps en dispositivos de gama media.

**Resultado esperado**: Métricas de performance documentadas y dentro de rangos aceptables.

---

### Fase 11: Calidad y Pruebas

**Objetivo**: Establecer controles de calidad automáticos y manuales para evitar regresiones.

**Descripción**: Implementar validaciones de HTML, CSS y JavaScript. Crear pruebas de humo (smoke tests) para verificar que las páginas cargan correctamente, que los enlaces funcionan y que las funcionalidades principales operan.

**Justificación**: El proyecto no tiene ninguna prueba. Sin validación automática, cualquier cambio puede romper funcionalidades sin detección inmediata. Esta fase protege la inversión de las fases anteriores.

**Prioridad**: Media

**Dependencias**: Fase 10 completada.

**Complejidad**: Media

**Impacto**: Medio — reduce regresiones y acelera futuras modificaciones.

**Nivel de riesgo**: Bajo — se agrega capa de validación sin modificar funcionalidad.

**Tiempo estimado**: 3-4 días

**Entregables**:
- Pruebas de humo para las 9 páginas.
- Validación de enlaces internos y externos.
- Checklist de calidad por página.
- Documentación de procedimientos de validación.

**Validaciones**:
- Todas las páginas cargan sin errores 404.
- Todos los enlaces internos funcionan.
- Los formularios se envían correctamente.
- Las imágenes se muestran sin roturas.

**Criterios de aceptación**:
- Un suite de pruebas verifica carga de páginas y funcionalidades básicas.
- No hay enlaces rotos internos.
- No hay recursos faltantes.
- El formulario de contacto se envía exitosamente en ambiente de prueba.

**Resultado esperado**: Proyecto con validación automática básica y procedimientos documentados.

---

### Fase 12: Auditoría Final

**Objetivo**: Validar que el proyecto cumple todos los criterios de calidad antes de considerarse estable.

**Descripción**: Ejecutar auditoría completa de arquitectura, accesibilidad, SEO, performance y seguridad. Comparar estado final contra el Mapa Arquitectónico inicial. Documentar desviaciones y lecciones aprendidas.

**Justificación**: Sin auditoría final, no hay certeza de que las fases anteriores cumplieron sus objetivos. Esta fase cierra el ciclo y establece el nuevo baseline del proyecto.

**Prioridad**: Alta

**Dependencias**: Fases 1-11 completadas.

**Complejidad**: Baja

**Impacto**: Alto — valida la calidad integral antes de considerar el proyecto estable.

**Nivel de riesgo**: Bajo — solo lectura y validación.

**Tiempo estimado**: 2-3 días

**Entregables**:
- Informe de auditoría final.
- Comparación estado inicial vs final.
- Lista de desviaciones aceptadas.
- Lecciones aprendidas documentadas.
- Actualización del PMP con nuevas métricas.

**Validaciones**:
- Todas las métricas del Mapa Arquitectónico han mejorado o se mantienen.
- No hay deuda técnica nueva introducida.
- Todos los criterios de aceptación de cada fase están cumplidos.
- El proyecto cumple los criterios globales de calidad.

**Criterios de aceptación**:
- Arquitectura: sin duplicación de layout.
- Mantenibilidad: un cambio de branding afecta máximo 2 archivos.
- Escalabilidad: agregar proyecto requiere solo crear contenido, no HTML completo.
- Performance: métricas dentro de rangos definidos.
- Accesibilidad: WCAG AA en páginas principales.
- SEO: metaetiquetas completas en todas las páginas.
- Seguridad: sin credenciales expuestas.

**Resultado esperado**: Proyecto estable, documentado y listo para crecimiento controlado.

---

## Sprints por Fase

### Fase 1: Estabilización
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 1.1 | 1 día | Seguridad y errores críticos | Rotar credenciales EmailJS, eliminar console.log, eliminar código comentado, corregir typos | `script.js` limpio, credenciales rotadas |
| 1.2 | 1 día | Integridad de datos | Corregir teléfono incompleto, completar meta descriptions faltantes, validar rutas de recursos | Metaetiquetas completas, teléfono real |
| 1.3 | 1 día | Limpieza de código | Corregir ruta de `script.js` en páginas de proyecto, eliminar funciones zombie o documentar su estado | Sin errores de runtime |

### Fase 2: Arquitectura Base
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 2.1 | 3 días | Layout compartido | Crear layout base para header/footer, aplicarlo en todas las páginas, eliminar duplicación | Layout unificado |
| 2.2 | 2 días | Navegación consistente | Asegurar menú mobile en todas las páginas, normalizar botón "Volver", validar enlaces | Navegación funcional en 9 páginas |

### Fase 3: Sistema Visual Unificado
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 3.1 | 3 días | Consolidación CSS | Unificar `styles.css` y `responsive-phases.css`, eliminar selectores duplicados, eliminar `!important` | CSS unificado |
| 3.2 | 2 días | Eliminación de inline | Extraer estilos inline de páginas de proyecto y álbum al sistema central | Sin CSS inline de layout |

### Fase 4: Componentes Reutilizables
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 4.1 | 2 días | Catálogo de componentes | Documentar variantes de botones, cards, títulos, galerías existentes | Documento de componentes |
| 4.2 | 3 días | Unificación de variantes | Reducir variantes redundantes, establecer patrón único por tipo | Componentes consolidados |

### Fase 5: Responsive y Breakpoints
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 5.1 | 2 días | Unificación de breakpoints | Definir sistema de breakpoints, reescribir media queries | Media queries consolidadas |
| 5.2 | 2 días | Validación responsive | Probar en 320px, 480px, 768px, 1024px, 1280px, eliminar `!important` | Responsive sin overrides |

### Fase 6: UX y Navegación
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 6.1 | 2 días | Navegación unificada | Header/menu idénticos en todas las páginas, scroll behavior consistente | Navegación uniforme |
| 6.2 | 2 días | Feedback de formulario | Reemplazar `alert()` por mensajes inline, estados de carga claros | Formulario accesible |

### Fase 7: Accesibilidad
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 7.1 | 2 días | Estructura semántica | Skip link, `<main>`, landmarks, jerarquía de encabezados | HTML semántico completo |
| 7.2 | 2 días | Animaciones y foco | `prefers-reduced-motion`, trampa de foco en lightbox, navegación por teclado | Accesibilidad de interacción |

### Fase 8: SEO
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 8.1 | 1 día | Metaetiquetas | OG tags, canonical URLs, structured data básico | SEO técnico completo |
| 8.2 | 1 día | Archivos de índice | `sitemap.xml`, `robots.txt`, validación de títulos únicos | Índice de navegación |

### Fase 9: Optimización de Assets
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 9.1 | 3 días | Imágenes | Renombrar, comprimir, generar WebP/AVIF, agregar dimensiones | Imágenes optimizadas |
| 9.2 | 2 días | Videos y audios | Comprimir videos, generar posters, optimizar audios | Media optimizado |

### Fase 10: Performance
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 10.1 | 2 días | Carga | Lazy loading, preload fuentes, eliminar bloqueos | Mejora en métricas de carga |
| 10.2 | 2 días | Renderizado | Optimizar animaciones, `will-change`, `content-visibility` | Animaciones a 60fps |

### Fase 11: Calidad y Pruebas
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 11.1 | 2 días | Pruebas de humo | Validar carga de páginas, enlaces, formulario | Suite de pruebas básica |
| 11.2 | 1 día | Checklist | Validar accesibilidad, SEO, responsive en todas las páginas | Informe de validación |

### Fase 12: Auditoría Final
| Sprint | Duración | Objetivo | Tareas | Entregable |
|--------|----------|----------|--------|------------|
| 12.1 | 2 días | Auditoría integral | Comparar métricas iniciales vs finales, validar criterios | Informe de auditoría final |
| 12.2 | 1 día | Documentación | Actualizar PMP, README y lecciones aprendidas | PMP actualizado |

---

## Matriz de Dependencias

| Fase | Depende de | Puede ejecutarse en paralelo con |
|------|-------------|----------------------------------|
| **Fase 1: Estabilización** | — | — |
| **Fase 2: Arquitectura Base** | Fase 1 | — |
| **Fase 3: Sistema Visual Unificado** | Fase 2 | — |
| **Fase 4: Componentes Reutilizables** | Fase 3 | — |
| **Fase 5: Responsive y Breakpoints** | Fase 3 | — |
| **Fase 6: UX y Navegación** | Fase 2 | Fase 5 |
| **Fase 7: Accesibilidad** | Fase 6 | Fase 5 |
| **Fase 8: SEO** | Fase 6 | — |
| **Fase 9: Optimización de Assets** | Fase 2 | — |
| **Fase 10: Performance** | Fase 9 | Fase 7 |
| **Fase 11: Calidad y Pruebas** | Fase 10 | — |
| **Fase 12: Auditoría Final** | Fases 1-11 | — |

**Secuencia crítica**: Fase 1 → Fase 2 → Fase 3 → Fase 4 → Fase 5 → Fase 9 → Fase 10 → Fase 11 → Fase 12

**Secuencia paralela permitida**: Fase 6, 7 y 8 pueden ejecutarse en paralelo una vez finalizada Fase 2. Fase 10 puede iniciarse cuando Fase 9 haya consolidado la estructura de assets.

---

## Matriz de Riesgos

| Fase | Nivel de riesgo | Impacto | Posibles problemas | Mitigación |
|------|-----------------|---------|-------------------|------------|
| **Fase 1: Estabilización** | Bajo | Medio | Rotación de credenciales EmailJS puede dejar formulario inoperativo si se olvida actualizar el servicio | Coordinar rotación con actualización simultánea en el servicio EmailJS |
| **Fase 2: Arquitectura Base** | Medio | Alto | Cambios en header/footer pueden romper enlaces o rutas de recursos | Validar todas las rutas después de consolidar layouts; mantener estructura de carpetas hasta Fase 9 |
| **Fase 3: Sistema Visual Unificado** | Medio | Alto | Unificación de CSS puede alterar visualmente secciones específicas | Hacer capturas de pantalla antes de iniciar; validar cada sección contra baseline |
| **Fase 4: Componentes Reutilizables** | Bajo | Medio | Reducción de variantes puede perder estilos específicos de alguna sección | Documentar cada variante antes de eliminar; aprobación explícita de cambios |
| **Fase 5: Responsive y Breakpoints** | Bajo | Medio | Cambio de breakpoints puede afectar dispositivos específicos | Probar en viewports reales y emulados antes de marcar completada |
| **Fase 6: UX y Navegación** | Bajo | Medio | Cambios en navegación pueden confundir a usuarios habituales | Mantener mismas URLs y mismas secciones; solo cambiar contenedores |
| **Fase 7: Accesibilidad** | Bajo | Medio | Implementación de skip link o trampa de foco puede interferir con scripts existentes | Probar interacciones completas después de cada cambio de accesibilidad |
| **Fase 8: SEO** | Bajo | Bajo | Metaetiquetas incorrectas pueden afectar cómo se muestra el sitio en buscadores | Validar con herramientas de preview antes de publicar |
| **Fase 9: Optimización de Assets** | Medio | Alto | Renombrar archivos puede romper rutas si no se actualizan todas las referencias | Usar búsqueda global de referencias antes de renombrar; actualizar en bloque |
| **Fase 10: Performance** | Bajo | Medio | Lazy loading puede retrasar aparición de imágenes Above-the-Fold | Configurar `loading="eager"` en imágenes críticas (logo, hero) |
| **Fase 11: Calidad y Pruebas** | Bajo | Bajo | Suite de pruebas puede generar falsos negativos por rutas locales | Definir ambiente de prueba consistente y separado de producción |
| **Fase 12: Auditoría Final** | Bajo | Bajo | Auditoría puede detectar problemas no cubiertos por fases anteriores | Registrar hallazgos como tareas para siguiente iteración |

---

## Matriz de Prioridades

| Fase | Prioridad | Justificación |
|------|-----------|---------------|
| **Fase 1: Estabilización** | 🔴 Crítica | Elimina errores de runtime, expone credenciales y datos falsos. Bloquea cualquier trabajo seguro. |
| **Fase 2: Arquitectura Base** | 🔴 Crítica | Elimina duplicación total de layout. Sin esto, cualquier cambio requiere editar 9 archivos. |
| **Fase 3: Sistema Visual Unificado** | 🟠 Alta | Sin CSS centralizado, no hay consistencia posible. Es el precursor de componentes. |
| **Fase 9: Optimización de Assets** | 🟠 Alta | 147 imágenes sin optimizar afectan performance y experiencia móvil. |
| **Fase 5: Responsivo y Breakpoints** | 🟡 Media | Mejora experiencia móvil pero no bloquea crecimiento. |
| **Fase 6: UX y Navegación** | 🟡 Media | Mejora experiencia pero no afecta funcionalidad base. |
| **Fase 7: Accesibilidad** | 🟡 Media | Amplía alcance y reduce riesgo legal, pero no bloquea funcionalidad

The model hit its output limit, so this response may be incomplete.

---

## User

termina lo que falta bro

---

## Assistant

## Matriz de Prioridades

| Fase | Prioridad | Justificación |
|------|-----------|---------------|
| **Fase 1: Estabilización** | 🔴 Crítica | Elimina errores de runtime, expone credenciales y datos falsos. Bloquea cualquier trabajo seguro. |
| **Fase 2: Arquitectura Base** | 🔴 Crítica | Elimina duplicación total de layout. Sin esto, cualquier cambio requiere editar 9 archivos. |
| **Fase 3: Sistema Visual Unificado** | 🟠 Alta | Sin CSS centralizado, no hay consistencia posible. Es el precursor de componentes. |
| **Fase 9: Optimización de Assets** | 🟠 Alta | 147 imágenes sin optimizar afectan performance y experiencia móvil. |
| **Fase 5: Responsivo y Breakpoints** | 🟡 Media | Mejora experiencia móvil pero no bloquea crecimiento. |
| **Fase 6: UX y Navegación** | 🟡 Media | Mejora experiencia pero no afecta funcionalidad base. |
| **Fase 7: Accesibilidad** | 🟡 Media | Amplía alcance y reduce riesgo legal, pero no bloquea funcionalidad. |
| **Fase 8: SEO** | 🟡 Media | Mejora visibilidad pero no afecta experiencia de usuario actual. |
| **Fase 10: Performance** | 🟡 Media | Mejora métricas pero depende de Fase 9 para impacto real. |
| **Fase 4: Componentes Reutilizables** | 🟢 Baja | Acelera desarrollo futuro pero no es bloqueante para estabilización. |
| **Fase 11: Calidad y Pruebas** | 🟢 Baja | Protege inversión pero no genera valor directo visible. |
| **Fase 12: Auditoría Final** | 🟢 Baja | Valida calidad pero no modifica el producto. |

---

## Kanban Inicial

### BACKLOG
- [ ] Eliminar selectores CSS duplicados
- [ ] Unificar breakpoints en sistema coherente
- [ ] Implementar Service Worker para cache offline
- [ ] Agregar fallbacks locales para CDNs
- [ ] Crear sistema de búsqueda de proyectos
- [ ] Implementar carga progresiva de videos
- [ ] Agregar soporte para idiomas múltiples
- [ ] Integrar analytics sin afectar performance

### EN ESPERA
- [ ] Definir pipeline de optimización de imágenes
- [ ] Seleccionar herramienta de compresión de assets
- [ ] Configurar ambiente de pruebas automatizado
- [ ] Establecer convención de nomenclatura final

### LISTO PARA DESARROLLO
- [ ] Rotar credenciales EmailJS (Fase 1)
- [ ] Eliminar console.log y código comentado (Fase 1)
- [ ] Corregir typos en alt texts (Fase 1)
- [ ] Validar rutas de recursos (Fase 1)
- [ ] Corregir teléfono incompleto (Fase 1)
- [ ] Completar meta descriptions faltantes (Fase 1)

### EN DESARROLLO
*(Ninguna tarea en desarrollo al inicio del proyecto)*

### EN REVISIÓN
*(Ninguna tarea en revisión al inicio del proyecto)*

### COMPLETADO
*(Ninguna tarea completada al inicio del proyecto)*

---

## Hitos del Proyecto

| Hito | Descripción | Fase asociada | Criterio de verificación |
|------|-------------|---------------|--------------------------|
| **H1: Proyecto Estable** | Sin errores de runtime, sin credenciales expuestas, sin información falsa | Fase 1 | Consola sin errores, formulario funcional, todas las páginas con metadatos |
| **H2: Layout Unificado** | Header, footer y navegación compartidos en todas las páginas | Fase 2 | Un cambio en header se refleja en 9 páginas |
| **H3: Sistema Visual Consolidado** | CSS centralizado sin duplicación ni `!important` | Fase 3 | No hay CSS inline de layout, no hay selectores duplicados |
| **H4: Componentes Documentados** | Catálogo de componentes con variantes unificadas | Fase 4 | Documento de componentes completo, sin variantes redundantes |
| **H5: Responsive Completo** | Breakpoints unificados, sin solapamientos, sin overrides | Fase 5 | Sitio funcional en 320px, 480px, 768px, 1024px, 1280px |
| **H6: UX Unificada** | Navegación y feedback consistentes en todas las páginas | Fase 6 | Mismo header/menu en todas las páginas, errores inline en formulario |
| **H7: Accesibilidad WCAG AA** | Skip link, semántica, contraste, `prefers-reduced-motion` | Fase 7 | Navegación por teclado completa, contrastes validados |
| **H8: SEO Técnico Completo** | Metaetiquetas, OG tags, canonical, sitemap | Fase 8 | Todas las páginas con meta description, sitemap generado |
| **H9: Assets Optimizados** | Imágenes y videos comprimidos, renombrados, con dimensiones | Fase 9 | Peso reducido 50%, formatos modernos, CLS < 0.1 |
| **H10: Performance en Rango** | LCP < 2.5s, animaciones a 60fps, sin bloqueos | Fase 10 | Métricas documentadas dentro de rangos definidos |
| **H11: Calidad Automatizada** | Pruebas de humo, checklist de validación | Fase 11 | Suite de pruebas ejecutada sin errores |
| **H12: Proyecto Listo** | Auditoría final aprobada, deuda técnica controlada | Fase 12 | Informe de auditoría con todas las métricas en verde |

---

## Definition of Done

Una fase se considera completada cuando cumple **todas** las siguientes condiciones:

### Criterios Generales (aplican a todas las fases)
- ✔ Todos los entregables definidos están presentes y documentados.
- ✔ Las validaciones especificadas en la fase se ejecutaron y pasaron.
- ✔ No se introdujo deuda técnica nueva no documentada.
- ✔ No se rompieron funcionalidades existentes (formulario, carrusel, navegación).
- ✔ El proyecto se carga sin errores en consola del navegador.
- ✔ Los cambios están reflejados en este PMP o en documento derivado.

### Criterios por Categoría

**Arquitectura**
- ✔ No hay duplicación de layout entre páginas.
- ✔ Todo HTML/CSS/JS compartido existe en un solo lugar.
- ✔ La estructura de carpetas es coherente y documentada.

**Mantenibilidad**
- ✔ Un cambio de branding afecta máximo 2 archivos.
- ✔ No hay código muerto (funciones, estilos, recursos no usados).
- ✔ No hay valores hardcodeados donde apliquen variables.

**Escalabilidad**
- ✔ Agregar contenido nuevo no requiere copiar HTML completo.
- ✔ Las nuevas páginas reutilizan componentes existentes.
- ✔ La estructura soporta crecimiento sin refactor mayor.

**Performance**
- ✔ Las métricas de carga están documentadas.
- ✔ No hay recursos bloqueantes innecesarios.
- ✔ Los assets están optimizados según Fase 9.

**Accesibilidad**
- ✔ Navegación por teclado completa.
- ✔ Contraste cumple WCAG AA (4.5:1).
- ✔ Semántica HTML correcta (`<main>`, jerarquía de encabezados).
- ✔ `prefers-reduced-motion` respetado.

**SEO**
- ✔ Todas las páginas tienen meta description única.
- ✔ Open Graph tags presentes.
- ✔ Sitemap y robots.txt generados.

**Consistencia**
- ✔ Componentes visuales reutilizables.
- ✔ Sin variantes redundantes de botones, cards o títulos.
- ✔ Sistema de iconografía unificado.

**Seguridad**
- ✔ Sin credenciales expuestas en código fuente.
- ✔ CDNs cargados con `integrity` cuando aplique.
- ✔ Formulario con validación básica.

**UX**
- ✔ Navegación consistente en todas las páginas.
- ✔ Feedback de formularios sin `alert()`.
- ✔ Comportamiento de botones y cards uniforme.

**Responsive**
- ✔ Sitio funcional en 320px, 480px, 768px, 1024px, 1280px.
- ✔ Sin scroll horizontal en ningún breakpoint.
- ✔ Sin `!important` en media queries.

---

## Estrategia de Validación

### Validación por Fase
Cada fase incluye sus propias validaciones específicas. Además, se aplican estas validaciones transversales:

**Validación de Funcionalidad**
- Verificar que el formulario de contacto se envía correctamente.
- Verificar que el carrusel funciona con controles, dots y autoplay.
- Verificar que la navegación por anclas funciona en todas las páginas.
- Verificar que el lightbox del álbum abre, cierra y navega correctamente.

**Validación de Consistencia**
- Comparar capturas de pantalla antes/después de cada fase.
- Verificar que los colores, tipografías y espaciados se mantienen.
- Validar que no se introducen variantes nuevas de componentes.

**Validación de Performance**
- Medir LCP, CLS y FID antes y después de cada fase que afecte assets o renderizado.
- Documentar métricas en informe de fase.

**Validación de Accesibilidad**
- Ejecutar axe DevTools en cada página al finalizar Fase 7.
- Probar navegación por teclado en todas las secciones interactivas.
- Validar contraste con herramienta automatizada.

**Validación de SEO**
- Ejecutar Lighthouse SEO en todas las páginas al finalizar Fase 8.
- Validar structured data con herramienta de Google.
- Verificar que no hay metaetiquetas duplicadas.

**Validación de Código**
- Revisar que no hay console.log en producción.
- Revisar que no hay funciones exportadas sin uso.
- Revisar que no hay estilos inline de layout.

### Herramientas de Validación
- **Navegador**: Chrome DevTools (Console, Network, Performance, Lighthouse)
- **Accesibilidad**: axe DevTools, WAVE, teclado físico
- **SEO**: Lighthouse, Google Rich Results Test
- **Performance**: Lighthouse, WebPageTest
- **HTML/CSS**: Validator W3C, Stylelint (cuando se implemente)
- **JS**: ESLint (cuando se implemente)

---

## Conclusión

Este **Project Master Plan** es el documento de referencia obligatorio para el desarrollo del proyecto **EcoProgramadores STEAM MUTIS**. Fue construido exclusivamente a partir de evidencia del repositorio y define un orden de trabajo secuencial que minimiza riesgos y evita retrabajos.

El proyecto parte de una base funcional pero con deuda técnica crítica. Las **Fases 1 y 2** son obligatorias y deben completarse antes de cualquier trabajo de mejora visual o funcional. La **Fase 1** elimina riesgos de seguridad y errores de runtime. La **Fase 2** elimina la duplicación de layout que actualmente impide mantener el proyecto de forma sostenible.

Las fases posteriores siguen un orden lógico: primero consolidar la arquitectura, luego unificar el sistema visual, después optimizar assets y finalmente blindar calidad. Las fases de accesibilidad, UX y SEO están integradas en el flujo, no como afterthoughts.

Este plan será actualizado al finalizar cada fase, registrando métricas reales, desviaciones aceptadas y lecciones aprendidas. Cualquier cambio de alcance o prioridad debe documentarse aquí antes de ejecutarse.

**El proyecto solo podrá considerarse estable después de completar la Fase 12: Auditoría Final.**

---

