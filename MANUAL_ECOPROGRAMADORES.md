# Manual de Usuario y Documentación Técnica - EcoProgramadores

**Proyecto:** EcoProgramadores STEAM MUTIS  
**Tipo:** Página Web Estática (Landing Page + Galería de Proyectos)  
**Institución:** Colegio Celestino Mutis - Programa STEAM Education  
**Líder:** Profesora Nathalie Rosales C.  
**Licencia:** MIT  

---

## 1. ¿Qué es EcoProgramadores?

EcoProgramadores es la **página web oficial** del grupo de estudiantes STEAM del Colegio Celestino Mutis. Es un espacio digital que muestra la identidad del equipo, sus proyectos innovadores en ecología y tecnología, y sirve como vitrina para presentar sus trabajos a la comunidad educativa, colaboradores y el público general.

### ¿Qué problema soluciona?
- Centraliza la información de un grupo de investigación estudiantil dispersa en múltiples proyectos.
- Presenta de forma profesional los proyectos realizados (videos, prototipos, podcasts, juegos).
- Permite el contacto directo con el equipo mediante formulario funcional.
- Documenta la evolución del grupo desde 2025 hasta 2026 (prototipos → manufactura circular).

---

## 2. Manual de Usuario (Cómo navegar la página)

### 2.1 Estructura de la Página

La web está organizada en secciones accesibles desde el menú de navegación:

| Sección | Descripción |
|---------|-------------|
| **Home** | Pantalla principal con carrusel de proyectos destacados y llamada a acción. |
| **Quiénes Somos** | Historia del grupo, enfoque STEAM, vínculo con OVAIRE y perfil de la profesora líder. |
| **Equipo** | Fichas de cada integrante con foto, nombre, rol y grado. |
| **Galería** | 7 proyectos con tarjetas interactivas y enlaces a páginas individuales. |
| **Fases** | Línea de tiempo del proyecto (Fase 1: prototipos 2025 → Fase 2: innovación 2026). |
| **Lab STEAM** | Infraestructura del laboratorio (aula creativa, conectividad IoT, espacio de innovación). |
| **Álbum** | Galería fotográfica 2025-2026. |
| **Contacto** | Formulario de contacto y enlaces a redes sociales. |

### 2.2 Proyectos Disponibles (Galería)

Cada proyecto tiene su propia página HTML con contenido detallado:

1. **Video de Presentación** - Conoce al equipo y su misión.
2. **Prototipo Punto Ecológico** - Contenedor inteligente para reciclaje.
3. **Diseño del Prototipo** - Bocetos y diseño 2D del punto ecológico.
4. **EcoVoces Podcast** - Podcast sobre ecología y medio ambiente.
5. **Juego de Clasificación** - Juego interactivo en Scratch para aprender a reciclar.
6. **Animación Digital** - Videos de sensibilización ambiental.
7. **Video Educativo** - Contenido educativo para niños.

### 2.3 Características Interactivas

- **Carrusel de proyectos destacados** con navegación automática y botones.
- **Menú responsive** adaptable a móviles y tablets.
- **Botón "Ver más"** en la sección de equipo para mostrar integrantes adicionales.
- **Formulario de contacto funcional** mediante EmailJS.
- **Animaciones visuales** (elementos flotantes, transiciones, efectos hover).
- **Enlaces a redes sociales** (Facebook, Instagram, TikTok).

### 2.4 Formulario de Contacto

Para contactar al equipo:
1. Ir a la sección **Contacto**.
2. Completar nombre, email y mensaje.
3. Enviar formulario (se envía por EmailJS a `ecoprogramadores@gmail.com`).

---

## 3. Documentación Técnica y Exposición (Para desarrollo y presentación)

### 3.1 Arquitectura del Sitio

```
EcoProgramadores/
├── index.html                    # Página principal (landing)
├── styles.css                    # Hoja de estilos global
├── script.js                     # Funcionalidad JS (carrusel, menú móvil, etc.)
├── README.md                     # Documentación del proyecto
├── session-ses_0988.md           # Sesión/documento auxiliar
├── Album-2025-2026.html          # Galería fotográfica anual
├── proyecto-animacion.html       # Página: Animación Digital
├── proyecto-juego.html           # Página: Juego de Clasificación
├── proyecto-podcast.html         # Página: Podcast EcoVoces
├── proyecto-prototipo.html       # Página: Prototipo Punto Ecológico
├── proyecto-diseno.html          # Página: Diseño 2D
├── proyecto-presentacion.html    # Página: Video de Presentación
├── proyecto-educativo.html       # Página: Video Educativo
├── assets/
│   ├── css/                      # Estilos
│   ├── js/                       # Scripts
│   ├── img/                      # Imágenes (logos, equipo, proyectos)
│   └── ...
└── Ecoprogramadores/             # Recursos de proyectos individuales
    ├── Animación digital de sensibilización/
    ├── Diseño del prototipo del punto ecológico inteligente/
    ├── Juego de clasificación de residuos/
    ├── Podcast EcoVoces/
    ├── Prototipo de Punto Ecológico Inteligente/
    ├── video-presentacion-ecoprogramadores/
    └── video educativo para pequeños/
```

### 3.2 Stack Tecnológico

| Componente | Tecnología | Descripción |
|-----------|-----------|-------------|
| Estructura | **HTML5** | Marcado semántico de todas las páginas. |
| Estilos | **CSS3** | Diseño responsivo, variables CSS, animaciones, layout con Flexbox/Grid. |
| Interactividad | **JavaScript (Vanilla)** | Carrusel, menú móvil, scroll suave, toggle de equipo. |
| Formularios | **EmailJS** | Envío de mensajes de contacto sin backend. |
| Iconos | **Font Awesome 6.4** | Iconografía vectorial mediante CDN. |
| Fuentes | **Google Fonts** | Montserrat + Roboto para tipografía web. |

### 3.3 Módulos y Proyectos

#### Web Principal (index.html)
- **Header fijo** con navegación responsive.
- **Hero section** con presentación del grupo y CTA.
- **Carrusel** de 3 proyectos destacados.
- **Sección "Quiénes Somos"** con historia, misión y líder.
- **Galería** de 7 proyectos con tarjetas.
- **Sección de Fases** (2025 vs 2026).
- **Lab STEAM** con infraestructura.
- **Contacto** con formulario y redes sociales.

#### Proyectos Individuales (Carpeta Ecoprogramadores/)
Cada subcarpeta contiene los assets y recursos de un proyecto específico:
- **Animación digital:** Videos de sensibilización ambiental.
- **Diseño 2D:** Bocetos técnicos del prototipo.
- **Juego Scratch:** Juego educativo de clasificación de residuos.
- **Podcast EcoVoces:** Episodios de audio sobre ecología.
- **Prototipo IoT:** Hardware del Punto Ecológico Inteligente.
- **Video presentación:** Spot institucional del equipo.
- **Video educativo:** Contenido para niños.

### 3.4 Flujo de Navegación

1. Usuario entra a `index.html`.
2. Ve carrusel automático de proyectos destacados.
3. Navega por secciones mediante menú superior o scroll.
4. En Galería, hace clic en un proyecto para abrir su página individual.
5. En Contacto, completa formulario y envía mensaje por EmailJS.

### 3.5 Características Destacadas

- **100% estático:** No requiere servidor backend ni base de datos. Se puede hostear en GitHub Pages, Netlify o Vercel.
- **Responsive:** Adaptable a móviles, tablets y escritorio.
- **Galería multimedia:** Soporta imágenes, videos y audio según el proyecto.
- **Formulario funcional:** EmailJS permite recibir mensajes sin infraestructura adicional.
- **Branding coherente:** Paleta de colores verde/turquesa alineada con el tema ecológico.

### 3.6 Equipo

| # | Nombre | Rol | Grado |
|---|--------|-----|-------|
| 1 | Stiven Urrego | Desarrollador de software | 11 |
| 2 | Isabella Quevedo | Divulgadora y desarrolladora de prototipos | - |
| 3 | Mariana Acosta | Divulgadora y desarrolladora de prototipos | - |
| 4 | Denisse Rodríguez | Programadora de código | - |
| 5 | Kevin Montoya | Ayudante de creador de videojuegos | - |
| 6 | Sofia Villagas | Diseñadora | - |
| 7 | Karel Gonzales | Desarrollador de videojuegos | - |

**Profesora Líder:** Nathalie Rosales C.

---

## 4. Presentación del Proyecto (Exposición)

**EcoProgramadores** es la página web de un grupo estudiantil STEAM del Colegio Celestino Mutis dedicado a crear soluciones tecnológicas con impacto ecológico. Nació para documentar, presentar y difundir los proyectos del equipo, que van desde videojuegos educativos en Scratch hasta prototipos IoT de reciclaje y una planta de filamento PET. La web funciona como una **vitrina digital completa**: muestra la identidad del grupo, su evolución por fases (2025-2026), los proyectos realizados y su infraestructura de laboratorio STEAM. Incluye contacto funcional y presencia en redes sociales, convirtiéndose en la cara pública de la investigación estudiantil.
