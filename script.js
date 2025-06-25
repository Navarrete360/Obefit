// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// ==========================================
// CARRUSEL INTERACTIVO - FUNCIONES GLOBALES
// ==========================================
let slideIndex = 1;
const totalSlides = 5; // Hay 5 slides según el HTML

// Función global para cambiar slide (llamada desde HTML)
function changeSlide(direction) {
    slideIndex += direction;
    
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = totalSlides;
    }
    
    showSlide(slideIndex);
}

// Función global para ir a slide específico (llamada desde HTML)
function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

// Función para mostrar el slide actual
function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Remove active from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    if (slides[n - 1]) {
        slides[n - 1].classList.add('active');
    }
    
    // Activate current dot
    if (dots[n - 1]) {
        dots[n - 1].classList.add('active');
    }
}

// Auto-slide functionality
function autoSlide() {
    changeSlide(1);
}

// Inicializar carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carrusel
    showSlide(slideIndex);
    
    // Start auto-slide every 5 seconds
    setInterval(autoSlide, 6000);
});

// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = question.nextElementSibling;
            
            // Toggle active state
            const isActive = faqItem.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
                faqAnswer.classList.add('active');
            }
        });
    });

    // Add click effect to FAQ questions
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('mousedown', () => {
            question.style.transform = 'scale(0.98)';
        });
        
        question.addEventListener('mouseup', () => {
            question.style.transform = 'scale(1)';
        });
        
        question.addEventListener('mouseleave', () => {
            question.style.transform = 'scale(1)';
        });
    });
});

// Mobile menu toggle
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.nav-links');
        if (nav) {
            nav.style.display = 'none';
        }
    } else {
        const nav = document.querySelector('.nav-links');
        if (nav) {
            nav.style.display = 'flex';
        }
    }
};

// URL de tu Google Form (reemplaza con tu URL real)
    const GOOGLE_FORM_URL = 'https://forms.gle/CrhdzWPnvFpPGaTF7';
    
    // Agregar event listeners a todos los botones CTA
    document.querySelectorAll('.cta-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Abrir Google Form en nueva pestaña
            window.open(GOOGLE_FORM_URL, '_blank');
            
            // Opcional: También puedes redirigir en la misma pestaña
            // window.location.href = GOOGLE_FORM_URL;
        });
    });

    // Si tienes otros botones específicos, puedes agregarlos aquí
    document.querySelectorAll('[data-action="join-beta"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(GOOGLE_FORM_URL, '_blank');
        });
    });

window.addEventListener('resize', createMobileMenu);
createMobileMenu();