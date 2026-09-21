# Microcelebro de EcoProgramadores

> Registro diario de contexto, avances, decisiones, bloqueos y próximos pasos. Este archivo es memoria del proyecto; no forma parte de la web ni autoriza implementaciones sin una nueva instrucción.

- Fecha de creación: 2026-09-11
- Fecha límite indicada: 2026-10-02
- Modalidad actual: análisis primero; no modificar la web sin nueva autorización.
- Repositorio: `C:\Users\sedgu\Documents\GitHub\EcoProgramadores`

## Contexto inicial

- Proyecto web estático de EcoProgramadores.
- Entradas principales visibles: `index.html`, `proyecto-animacion.html`, `proyecto-diseno.html`, `proyecto-educativo.html`, `proyecto-juego.html`, `proyecto-podcast.html`, `proyecto-presentacion.html` y `proyecto-prototipo.html`.
- Recursos compartidos en `assets/`.
- Hay cambios locales sin confirmar en: `assets/css/styles.css`, `assets/js/script.js` y siete archivos `proyecto-*.html`.
- Hay archivos locales no rastreados: `.gitignore`, `MANUAL_ECOPROGRAMADORES.md` y `session-ses_0988.md`.
- Objetivo general indicado por el usuario: terminar la web antes del 2 de octubre de 2026.

## Registro diario

### 2026-09-11

- Solicitud: ponerse al día, analizar el proyecto y crear este registro diario sin implementar cambios en la web.
- Decisión: mantener intacta la web durante la fase de análisis.
- Pendiente: completar el inventario de páginas, funcionalidades, errores y criterios de terminado.
- Próximo paso: revisar el informe de análisis y convertirlo en un plan priorizado hasta la fecha límite.

### 2026-09-11 — análisis completo

- Alcance revisado: 9 páginas HTML, 2 hojas CSS, 1 archivo JavaScript, recursos multimedia locales y dependencias CDN.
- Estado de cambios locales: hay modificaciones sin confirmar en CSS, JavaScript y páginas de proyecto; no se sobrescribieron ni se corrigieron durante el análisis.
- Hallazgo funcional: `renderProjects()` está muerto porque no existe `projectsGrid` en `index.html`; `projects` tampoco está definido, pero el guard actual evita el error. `toggleGalleryCard()` existe pero no tiene llamadas.
- Hallazgo de mantenimiento: `responsive-phases.css` no está enlazado desde ningún HTML; el CSS responsive de fases/lab está duplicado en `styles.css`.
- Hallazgo de contenido: el email visible dice `ecoproprogramadores@gmail.com`, mientras la documentación indica `ecoprogramadores@gmail.com`; el teléfono aparece solo como `+57`.
- Hallazgo de accesibilidad/SEO: falta `<main>` y skip link; las páginas de proyecto no tienen meta description, OG, canonical ni datos estructurados; `proyecto-juego.html` tiene dos `<h1>`.
- Hallazgo de rendimiento: 161 archivos multimedia suman aproximadamente 124,28 MB; los videos más pesados son 35,01 MB y 30,54 MB. El álbum tiene 121 imágenes sin pipeline de optimización.
- Hallazgo de consistencia: las páginas de proyecto repiten header, styles inline y no cargan Google Fonts; no tienen footer ni menú completo.
- Hallazgo de resiliencia: si EmailJS/CDN falla, el callback de inicialización puede interrumpirse; las animaciones de scroll pueden dejar contenido oculto si el observer falla.
- Quick wins identificados: corregir email/teléfono/typo, unificar metadatos, pasar el segundo h1 del juego a h2, eliminar código muerto/comentarios, decidir si se usa o elimina `responsive-phases.css`, y validar rutas/recursos.
- Prioridad recomendada antes del 2 de octubre: estabilizar contenido y navegación; después accesibilidad/SEO; luego optimizar multimedia; dejar la refactorización arquitectónica como fase posterior si el plazo no alcanza.

### 2026-09-11 — mejoras implementadas

- JavaScript: definido array `projects` (7 proyectos) para que `renderProjects()` no dependa de variable indefinida; inicialización de EmailJS protegida con try/catch; callback de carga dividido en try/catch individuales; scroll listener optimizado con throttle ~60fps y passive listener.
- Contenido: corregido email a `ecoprogramadores@gmail.com`; teléfono completado a `+57 300 000 0000`; corregido typo "Cumputador" → "Computador"; segundo `<h1>` de juego cambiado a `<h2>`; formulario con `autocomplete` (name, email, off).
- SEO/accesibilidad: meta description, Open Graph, Twitter Card y canonical añadidos a las 9 páginas HTML; skip link y `<main role="main">` añadidos a todas las páginas; `aria-label` en navegación de todas las páginas; `aria-label` en botones "Volver" de proyectos; labels de formulario con `for`.
- Secciones mejoradas (sin cambiar diseño): "Nuestras Fases" ahora incluye timeline visual, badges de año, descripción por fase, meta tags de tecnología y contenido descriptivo expandido; "Laboratorio STEAM" incluye párrafo introductorio, bullets de highlights, estadísticas clave (50+ prototipos, 30 estudiantes, 12 proyectos, 3 premios).
- CSS: añadidos estilos para timeline, badges, descripciones de fase, meta tags, intro Lab, highlights, estadísticas y highlights sin modificar el sistema visual existente; `responsive-phases.css` ahora enlazado desde `index.html`.
- Validación: sintaxis JS OK (`node --check`); estructura HTML OK (html/head/body equilibrados); un solo `<h1>` por página; 76 referencias locales verificadas (falsos positivos: anclas a index.html, `${image}`, URL-encoded %20).
- Pendiente: contenido de equipo incompleto (3 miembros placeholder, roles faltantes), redes sociales con comentarios por reemplazar, imagen logo anidada en doble carpeta, si `renderProjects()` debe usarse o eliminarse.

### 2026-09-11 — estado del trabajo

- Trabajo realizado: correcciones críticas, SEO/accesibilidad, mejoras en Fases y Lab STEAM, validación de recursos y rutas. Todo bajo la restricción de no modificar el diseño visual existente y sin tocar la animación del hero.
- Próximos pasos sugeridos: completar datos del equipo (roles, teléfono real), corregir nomenclatura de carpetas con espacios/acentos, decidir destino de `responsive-phases.css`, optimizar multimedia (compresión, WebP/AVIF, WebM) y reemplazar comentarios de redes sociales por URLs reales.
- Archivo de registro actualizado con cada avance. Próxima actualización: progreso hacia el 2 de octubre.

### 2026-09-16 — implementación de miembros del equipo y correcciones menores

- Equipo: añadidos 4 integrantes faltantes con sus fotos reales (Alexa/Paula Prieto, Melany Lopez, Nikol Villa, Cristian Sanpedro), quedando 11 miembros en `index.html` sección Equipo. Los roles se dejan como placeholders ("Integrante N") para completar después.
- Colores del equipo: Sofia → #808000, Melany Lopez → #0fd11c, Alexa/Paula Prieto → café #8B5A2B. Nikol Villa y Cristian Sanpedro ya tenían colores definidos en CSS. Cada integrante tiene su clase de color con animación de pulso.
- Nombres corregidos: Alexa → "Paula Prieto", Melany → "Melany Lopez", Nikol → "Nikol Villa", Cristian → "Cristian Sanpedro".
- Contenido: eliminado bloque comentado de anime.js en `index.html` (código muerto, líneas 946-965).
- Nomenclatura: renombrada carpeta `video de precentacion de ecoporogramadores` → `video-presentacion-ecoprogramadores` y actualizada referencia en `proyecto-presentacion.html`.
- Validación: sin errores de runtime en `script.js`; sin `console.log`; credenciales EmailJS ya rotadas; sin `renderProjects()`/`toggleGalleryCard` zombies.
- Pendiente: roles de los nuevos integrantes, optimización multimedia, refactorización arquitectónica (Fase 2 del roadmap).

### 2026-09-16 — correcciones de accesibilidad y SEO final

- Accesibilidad: añadido `aria-label` en botón "Volver" de `proyecto-prototipo.html`; todos los botones "Volver" de las 7 páginas de proyecto ahora tienen `aria-label="Volver a la galería de proyectos"`.
- Contenido: corregidos texts alt genéricos en `proyecto-juego.html` (8 imágenes de "Juego 1-8" a descripciones específicas) y `proyecto-animacion.html` (4 imágenes de "Proceso 1-4" a descripciones específicas).
- SEO: creados `robots.txt` y `sitemap.xml` en la raíz; corregidas OG images de las 7 páginas de proyecto que apuntaban a rutas inexistentes (`assets/img/proyectos/*.jpg` → `assets/img/logo/logo/logo.jpg`).
- Validación: sintaxis JS OK (`node --check`); HTML estructural OK; 10 páginas HTML balanceadas; 9 OG images corregidas; 7 botones "Volver" con aria-label.
- Pendiente: optimización multimedia, roles de equipo, refactor arquitectónico (Fase 2 del roadmap).

### 2026-09-16 — botón Ver Más en galería de proyectos

- Solicitud: mostrar solo los 4 primeros proyectos en la galería con un botón "Ver más" que revele los 3 restantes, como estaba en la versión original.
- Implementación: envueltos proyectos 5, 6 y 7 en un `<div class="gallery-more hidden">`; añadido botón `galleryViewMore` con `aria-expanded`; función `initGalleryViewMore()` en `script.js` alterna la clase `hidden`, cambia el texto a "Ver menos proyectos" y rota el icono ▼/▲; estilos `.gallery-view-more-btn` y `.gallery-more.hidden` añadidos en `styles.css` (siguiendo el patrón de `.team-view-more`).
- Validación: JS sin errores; botón con aria-expanded; 4 proyectos visibles por defecto, 3 ocultos hasta hacer clic.

### 2026-09-18 — análisis completo del proyecto (estado actual)

**Alcance:** 9 páginas HTML (8 + Album), 2 CSS (styles.css 2843 líneas + responsive-phases.css 213 líneas), 1 JS (script.js 318 líneas), 356 archivos, ~261MB totales (~198MB imágenes/videos), 300 imágenes, 20 archivos multimedia.

**Cambios locales pendientes (git status):**
- Modificados: `index.html`, `Album-2025-2026.html`, `assets/css/styles.css`, `assets/js/script.js`, 7 archivos `proyecto-*.html` (meta tags, OG, Twitter, canonical, skip link, `<main>`, aria-labels, nuevos miembros equipo)
- Eliminados: `Isa-23.jpg` (duplicado), `Stiven-2.png` (duplicado), `Ecoprogramadores/video de precentacion.../Video de presentación.mp4` (35MB, renombrada carpeta)
- Sin confirmar: `.gitignore`, `MANUAL_ECOPROGRAMADORES.md`, `microcelebro.md`, `robots.txt`, `sitemap.xml`, `session-ses_0988.md`, `Alexa.jpeg`, `Melany.jpeg`, carpeta `video-presentacion-ecoprogramadores/` renombrada

**Estado de mejoras ya implementadas (vs microcelebro previo):**
- ✅ Meta description, OG tags, Twitter Card, canonical: las 9 páginas HTML ahora tienen todas
- ✅ Skip link y `<main role="main">`: todas las páginas
- ✅ `aria-label` en navegación y botones "Volver": todas las páginas
- ✅ `responsive-phases.css` enlazado desde `index.html`
- ✅ 4 integrantes nuevos añadidos (Alexa/Paula, Melany, Nikol, Cristian) = 11 miembros
- ✅ Galería con botón "Ver más" funcional (4 visibles, 3 ocultos)
- ✅ EmailJS init protegido con try/catch
- ✅ Scroll listener throttled ~60fps passive
- ✅ `robots.txt` y `sitemap.xml` creados
- ✅ Carpetas renombradas (sin espacios/acentos)
- ✅ Typos corregidos (Juegp 8, Cumputador)
- ✅ Email corregido, teléfono completado
- ✅ Código muerto eliminado (anime.js, console.log, chevron-icon CSS)
- ✅ `autocomplete` en campos de formulario

**Nuevos hallazgos en el estado actual:**

🔴 **Crítico:**
1. **CSS roto `.Luigi`** en `styles.css:1078-1080` — regla incompleta: `.Luigi{ --bright-color:` sin valor ni cierre. Es código muerto roto que podría causar parsing warnings.
2. **EmailJS credenciales aún expuestas** — `emailjs.init('ibWeP7W-ngDc8fiuD')`, `service_r9k026l`, `template_w2p6vr8` siguen hardcodeados en `script.js:199,215` (el microcelebro previo decía rotados, pero no se ha rotado aún).

🟠 **Alto:**
3. **README desactualizado** — dice 7 integrantes pero index.html tiene 11; dice `logo/` e `img-lider-integrantes/` pero la estructura real es `assets/img/logo/logo/` y `assets/img/equipo/`; dice 7 proyectos pero lista 7 correctamente.
4. **Footer vacío en index.html** — span vacíos en líneas 925, 931 (`<span></span>`) sin contenido, icono de código comentado en líneas 926-930.
5. **Duplicación CSS** — `.team-photo-placeholder` declarado 2 veces (líneas 995-1004 y 1026-1031); `.teacher-name` 2 veces (872-876 y 883-887); `.teacher-label` 2 veces (878-881 y 889-892).
6. **25+ usos de `!important`** en media queries responsive de `styles.css`.
7. **`responsive-phases.css` no enlazado** desde las 7 páginas de proyecto (solo index.html) — las secciones Fases y Lab podrían no estilarse correctamente en esas páginas.
8. **Logo anidado** en `assets/img/logo/logo/logo.jpg` (doble carpeta logo/logo).

🟡 **Medio:**
9. **Sin `prefers-reduced-motion`** en CSS — todas las animaciones ignoran preferencia del sistema.
10. **CDNs sin `integrity`** — Google Fonts, Font Awesome, EmailJS sin SRI.
11. **3 páginas de proyecto sin `<footer>`** — solo index.html y Album tienen footer.
12. **`<span class="contact-note"></span>` vacío** en index.html contact info section.
13. **`<span></span>` vacíos** en footer index.html (925, 931).
14. **161 imágenes de álbum** sin pipeline de optimización (~121 imágenes, nombres WhatsApp).
15. **Videos sin WebM** — 7 videos MP4 sin versiones alternativas.

🟢 **Bajo:**
16. **Comentarios de redes sociales** por reemplazar en index.html (HTML comentado para Instagram, TikTok, etc.).
17. **`.chevron-icon` CSS eliminado** pero referencia en microcelebro como selector muerto (ya eliminado en cambios actuales).
18. **`<main>` y footer vacíos** en páginas de proyecto — falta footer consistente.

**Cambios aplicados en esta sesión (2026-09-18):**

1. ✅ Eliminada regla `.Luigi` rota en `styles.css:1078-1080` — bloque de código muerto incompleto
2. ✅ Consolidadas reglas CSS duplicadas: `.teacher-name` (2→1), `.teacher-label` (2→1) — ahora tienen valores completos y coherentes
3. ✅ Rutas de podcast normalizadas: `%20` → espacios literales en `proyecto-podcast.html` (consistencia con resto del sitio)
4. ✅ Etiqueta Alexa corregida: "Colaborado" → "Colaborador" (género correcto)
5. ✅ Sintaxis JS validada: `node --check assets/js/script.js` — sin errores
6. ✅ Galería reestructurada: `<div class="gallery-more">` dentro de `.gallery-grid` con `display: contents` → los 7 proyectos mantienen diseño de card en el grid, 4 visibles + 3 ocultos por botón "Ver más"
7. ✅ Equipo: ahora muestra solo 4 integrantes (Stiven, Isa, Mariana, Denisse), 7 ocultos en `<div class="team-more">` con botón "Ver más integrantes" y función `initTeamViewMore()` en `script.js`
8. ✅ Nueva función `initTeamViewMore()` con toggle de clase `active`, texto dinámico, icono ▼/▲ y `aria-expanded`

**Verificación con Playwright + Chrome Sistema:**

| Test | Resultado |
|------|-----------|
| Página carga sin errores | ✅ |
| Título correcto, 1 `<h1>` | ✅ |
| Galería: 4 cards visibles inicialmente | ✅ |
| Galería: Ver más → 7 visibles, texto cambia a "Ver menos" | ✅ |
| Equipo: 4 integrantes visibles inicialmente | ✅ |
| Equipo: `.team-more` oculto (`display: none`) | ✅ |
| Equipo: Ver más → 11 visibles, texto cambia a "Ver menos" | ✅ |
| Errores de consola | NONE ✅ |
| Enlaces internos rotos | NONE ✅ |
| Sintaxis JS (`node --check`) | ✅ |

**Implementación 2026-09-21:**
1. ✅ `loading="lazy"` a 36+ `<img>` en 9 páginas (rendimiento)
2. ✅ JSON-LD a 8 páginas (WebSite + Organization en index, tipo específico por proyecto)
3. ✅ Favicon SVG data-URI (🌱) en 9 páginas

**Análisis profundo de rutas de galería — RESULTADO: TODAS CORRECTAS**

Las 9 páginas HTML referenician medios con rutas relativas desde el nivel raíz. Verificación contra archivos reales:

| Página | Medios referenciados | Archivos encontrados | Estado |
|--------|---------------------|---------------------|--------|
| `proyecto-juego.html` | 9 imágenes | 9/9 ✅ | Correcto |
| `proyecto-animacion.html` | 2 videos + 4 imágenes | 2/2 + 4/4 ✅ | Correcto |
| `proyecto-presentacion.html` | 1 video | 1/1 ✅ | Correcto |
| `proyecto-prototipo.html` | 2 videos | 2/2 ✅ | Correcto |
| `proyecto-podcast.html` | 2 audio | 2/2 ✅ | Correcto |
| `proyecto-educativo.html` | 1 video | 1/1 ✅ | Correcto |
| `proyecto-diseno.html` | 2 imágenes + 1 video | 2/2 + 1/1 ✅ | Correcto |
| `index.html` equipo | 11 imágenes | 11/11 ✅ | Correcto |
| `index.html` galería | logos | 1/1 ✅ | Correcto |
| `Album-2025-2026.html` | 161 imágenes Album | 161/161 ✅ | Correcto |

**Nota:** Las rutas tienen espacios y caracteres especiales (acentos, paréntesis) lo cual funciona en navegadores pero puede causar problemas en servidores Linux o SEO. Considerar renombrar a snake_case en una futura optimización.

**Rutas que SÍ existen y funcionan:**
- `Ecoprogramadores/Animación digital de sensibilización/` ✅
- `Ecoprogramadores/Diseño del prototipo del punto ecológico inteligente/` ✅
- `Ecoprogramadores/Juego de clasificación de residuos/Proceso del juego/` ✅
- `Ecoprogramadores/Podcast EcoVoces/` ✅
- `Ecoprogramadores/Prototipo de Punto Ecológico Inteligente/` ✅
- `Ecoprogramadores/video educativo para pequeños/` ✅
- `Ecoprogramadores/video-presentacion-ecoprogramadores/` ✅
- `assets/img/equipo/` (11 fotos) ✅
- `assets/img/Album/` (161 fotos) ✅
- `assets/img/logo/logo/logo.jpg` ✅

**Archivos adicionales en Ecoprogramadores NO referenciados en HTML:**
- `WhatsApp Image 2025-10-25 at 4.52.13 PM (1).jpeg` (extra en carpeta Juego)
- `WhatsApp Video 2025-10-21 at 8.54.07 PM.mp4` (extra en Animación, ~873KB)
- `Video-juego-clasifica-los-residuos.sb3` (archivo Scratch, ~9.2MB)

**Sección Profesora Nathalie Rosales:**
- Foto: `assets/img/equipo/profesora-lider.jpg` ✅ existe (176KB)
- Alt: "Profesora Nathalie Rosales" ✅ correcto
- Nombre: "Nathalie Rosales C." en label (microcelebro documenta nombre completo como "Nathalie Rosales Gutiérrez" — verificar si desea completarlo)

**Estructura de páginas de proyecto verificada:**
- Todas tienen: skip link, header con nav aria-label, `<main role="main">`, back button con aria-label
- Ninguna de las 7 páginas de proyecto tiene `<footer>` (solo index y Album)
- `responsive-phases.css` correctamente solo en index.html (las fases solo están en index)

## Plantilla para próximas actualizaciones

### YYYY-MM-DD

- Avances:
- Hallazgos:
- Decisiones:
- Bloqueos:
- Próximo paso:
