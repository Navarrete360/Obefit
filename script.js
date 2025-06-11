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

window.addEventListener('resize', createMobileMenu);
createMobileMenu();