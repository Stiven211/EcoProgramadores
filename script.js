// ============================================
// CONFIGURACIÓN DE PROYECTOS
// INSTRUCCIONES: Para agregar un nuevo proyecto, añade un objeto al array "projects"
// ============================================

const projects = [
    {
        id: 1,
        title: '',
        description: '',
        image: '',
        date: 'Enero 2026',
        category: 'IoT'
    },
    {
        id: 2,
        title: 'App EcoRecicla',
        description: '',
        image: '',
        date: 'Diciembre 2025',
        category: 'App'
    },
    {
        id: 3,
        title: 'Robot Recolector',
        description: 'Prototipo de robot autónomo que recolecta basura en áreas verdes. Equipado con sensores ultrasónicos y cámara para navegación inteligente.',
        image: '',
        date: 'Noviembre 2025',
        category: 'Hardware'
    },
    {
        id: 4,
        title: 'EstaciónEscolar',
        description: '',
        image: '',
        date: 'Octubre 2025',
        category: 'IoT'
    },
    {
        id: 5,
        title: '',
        description: '',
        image: '',
        date: 'Septiembre 2025',
        category: 'Hardware'
    },
    {
        id: 6,
        title: 'Portal Web Educativo Eco',
        description: 'Sitio web interactivo con recursos educativos sobre sostenibilidad, cambio climático y tecnologías verdes. Incluye juegos y quizzes para estudiantes.',
        image: 'h',
        date: 'Agosto 2025',
        category: 'Web'
    }
];

// ============================================
// NAVEGACIÓN Y SCROLL
// ============================================

// Smooth scroll para navegación
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Función para scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Manejar clicks en todos los enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Cerrar menú móvil si está abierto
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================================
// MENÚ MÓVIL
// ============================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// ============================================
// CARRUSEL DE PROYECTOS DESTACADOS
// ============================================

let currentSlide = 0;
const totalSlides = 3;
let autoPlayInterval;

function initCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselDots = document.getElementById('carouselDots');
    
    if (!carouselTrack) return;
    
    // Crear dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Ir a slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        carouselDots.appendChild(dot);
    }
    
    // Funciones de navegación
    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Actualizar dots
        const dots = carouselDots.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
        stopAutoPlay();
    }
    
    // Event listeners
    if (carouselNext) {
        carouselNext.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
        });
    }
    
    if (carouselPrev) {
        carouselPrev.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
        });
    }
    
    // Auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Iniciar auto-play
    startAutoPlay();
    
    // Pausar auto-play cuando el mouse está sobre el carrusel
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    }
}

// ============================================
// RENDERIZAR PROYECTOS
// ============================================

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('article');
        projectCard.classList.add('project-card');
        
        projectCard.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-overlay"></div>
                <div class="project-category">${project.category}</div>
                <div class="project-hover-overlay">
                    <svg class="project-hover-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </div>
            </div>
            <div class="project-content">
                <div class="project-date">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>${project.date}</span>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const formSuccess = document.getElementById('formSuccess');
        
        // Deshabilitar botón y mostrar loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <div style="width: 20px; height: 20px; border: 2px solid #003727; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <span>Enviando...</span>
        `;
        
        // Agregar animación de spin
        if (!document.querySelector('#spinAnimation')) {
            const style = document.createElement('style');
            style.id = 'spinAnimation';
            style.textContent = `
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Simulación de envío (en producción, aquí iría la lógica real)
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <span>Enviar Mensaje</span>
            `;
            
            // Mostrar mensaje de éxito
            formSuccess.style.display = 'block';
            
            // Limpiar formulario
            contactForm.reset();
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        }, 1500);
    });
}

// ============================================
// ANIMACIONES AL HACER SCROLL
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar secciones
    const sections = document.querySelectorAll('.section-header, .about-grid, .features-grid, .projects-grid, .contact-grid');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Observar cards individuales con delay
    const cards = document.querySelectorAll('.feature-card, .project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌱 EcoProgramadores STEAM MUTIS - Sitio Web Cargado');
    
    // Inicializar componentes
    initCarousel();
    renderProjects();
    initContactForm();
    initScrollAnimations();
    
    // Log de proyectos cargados
    console.log(`📂 ${projects.length} proyectos cargados`);
});

// ============================================
// UTILIDADES GLOBALES
// ============================================

// Exponer funciones globalmente para uso en HTML
window.scrollToSection = scrollToSection;
window.scrollToTop = scrollToTop;

// Debug: Mostrar mensaje en consola
console.log('%c🌱 EcoProgramadores STEAM MUTIS', 'color: #00F771; font-size: 20px; font-weight: bold;');
console.log('%cSitio Web Desarrollado con HTML, CSS y JavaScript', 'color: #00C8E6; font-size: 14px;');
console.log('%cProgramando un futuro sostenible 💻🌿', 'color: #00A65A; font-size: 12px;');
