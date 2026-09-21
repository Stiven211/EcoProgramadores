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
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (!target) return;

            e.preventDefault();
            scrollToSection(targetId);

            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
            if (mobileMenuBtn) {
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.setAttribute('aria-label', 'Abrir menú');
            }
        });
    });
});

// Header scroll effect - optimizado con passive listener
let headerScrollTimeout;
window.addEventListener('scroll', function() {
    if (headerScrollTimeout) return;
    headerScrollTimeout = setTimeout(function() {
        headerScrollTimeout = null;
        try {
            const header = document.getElementById('header');
            if (header) {
                if (window.scrollY > 20) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        } catch (e) { /* silent */ }
    }, 16); // ~60fps throttle
}, { passive: true });

// ============================================
// MENÚ MÓVIL
// ============================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active', isOpen);
        mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
        mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });
}

// ============================================
// CARRUSEL DE PROYECTOS DESTACADOS
// ============================================

let currentSlide = 0;
const totalSlides = 3; // Actualizado: Punto Ecológico, Planta Filamento, Colector PET
let autoPlayInterval;

function initCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselDots = document.getElementById('carouselDots');
    
    if (!carouselTrack || !carouselDots) return;
    
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
// FORMULARIO DE CONTACTO
// ============================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    if (!contactForm || !submitBtn || !formSuccess || !formError) return;

    const submitLabel = submitBtn.innerHTML;

    try {
        if (typeof emailjs === 'undefined') {
            throw new Error('EmailJS no disponible');
        }
        emailjs.init('ibWeP7W-ngDc8fiuD');
    } catch (e) {
        submitBtn.disabled = true;
        formError.style.display = 'block';
        return;
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formError.style.display = 'none';
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <div style="width: 20px; height: 20px; border: 2px solid #003727; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <span>Enviando...</span>
        `;

        emailjs.sendForm('service_r9k026l', 'template_w2p6vr8', contactForm)
            .then(function() {
                submitBtn.disabled = false;
                submitBtn.innerHTML = submitLabel;
                formSuccess.style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            })
            .catch(function() {
                submitBtn.disabled = false;
                submitBtn.innerHTML = submitLabel;
                formError.style.display = 'block';
            });
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
    
    // Observar secciones principales
    const sections = document.querySelectorAll('.section-header, .about-grid, .features-grid, .contact-grid, .phase-block');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Observar cards individuales con delay
    const cards = document.querySelectorAll('.feature-card, .project-card, .phase-card, .lab-card');
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
    // Inicializar componentes con manejo de errores individual
    try { initCarousel(); } catch (e) { console.warn('Error en carrusel:', e); }
    try { initContactForm(); } catch (e) { console.warn('Error en formulario:', e); }
    try { initScrollAnimations(); } catch (e) { console.warn('Error en animaciones scroll:', e); }
    try { initGalleryViewMore(); } catch (e) { console.warn('Error en botón ver más:', e); }
    try { initTeamViewMore(); } catch (e) { console.warn('Error en botón ver más equipo:', e); }
    try { initNoDownload(); } catch (e) { console.warn('Error en protección de imágenes:', e); }
});

// ============================================
// GALERÍA - Botón Ver Más
// ============================================

function initGalleryViewMore() {
    const viewMoreBtn = document.getElementById('galleryViewMore');
    const galleryMore = document.querySelector('.gallery-more');
    if (!viewMoreBtn || !galleryMore) return;

    viewMoreBtn.addEventListener('click', function() {
        const isHidden = galleryMore.classList.toggle('hidden');
        const isExpanded = !isHidden;

        galleryMore.classList.toggle('hidden', !isExpanded);
        viewMoreBtn.setAttribute('aria-expanded', String(isExpanded));

        const viewMoreText = viewMoreBtn.querySelector('.view-more-text');
        const viewMoreIcon = viewMoreBtn.querySelector('.view-more-icon');

        if (isExpanded) {
            viewMoreText.textContent = 'Ver menos proyectos';
            viewMoreIcon.textContent = '▲';
        } else {
            viewMoreText.textContent = 'Ver más proyectos';
            viewMoreIcon.textContent = '▼';
        }
    });
}

// ============================================
// EQUIPO - Botón Ver Más
// ============================================

function initTeamViewMore() {
    const viewMoreBtn = document.getElementById('teamViewMore');
    const teamMore = document.querySelector('.team-more');
    if (!viewMoreBtn || !teamMore) return;

    viewMoreBtn.addEventListener('click', function() {
        const isActive = teamMore.classList.toggle('active');

        viewMoreBtn.setAttribute('aria-expanded', String(isActive));

        const viewMoreText = viewMoreBtn.querySelector('.view-more-text');
        const viewMoreIcon = viewMoreBtn.querySelector('.view-more-icon');

        if (isActive) {
            viewMoreText.textContent = 'Ver menos integrantes';
            viewMoreIcon.textContent = '▲';
        } else {
            viewMoreText.textContent = 'Ver más integrantes';
            viewMoreIcon.textContent = '▼';
        }
    });
}

// ============================================
// PROTECCIÓN DE IMÁGENES - Anti-descarga
// ============================================

function initNoDownload() {
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    document.addEventListener('copy', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
}

// ============================================
// UTILIDADES GLOBALES
// ============================================

// Exponer funciones globalmente para uso en HTML
window.scrollToSection = scrollToSection;
window.scrollToTop = scrollToTop;
