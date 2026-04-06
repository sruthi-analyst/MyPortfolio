// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, observerOptions);

// Select all elements to reveal
document.querySelectorAll('.section, .project-card, .timeline-item, .skill-tags span, .ach-list li').forEach(el => {
    el.classList.add('reveal-hidden');
    revealObserver.observe(el);
});

// Navbar change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.style.padding = '0.5rem 2rem';
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
        nav.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
    } else {
        nav.style.padding = '1rem 2rem';
        nav.style.background = 'rgba(15, 23, 42, 0.8)';
        nav.style.boxShadow = 'none';
    }
});

// Highlight social links and scroll for all internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            
            // If it's the contact trigger, highlight WITHOUT scrolling
            if (this.classList.contains('highlight-trigger')) {
                const socialLinks = document.getElementById('social-links');
                socialLinks.classList.add('pulse');
                
                // Add hover listener once to remove highlight
                socialLinks.addEventListener('mouseenter', () => {
                    socialLinks.classList.remove('pulse');
                }, { once: true });
            } else {
                // Otherwise scroll normally
                window.scrollTo({
                    top: targetElement.offsetTop - 150,
                    behavior: 'smooth'
                });
            }
        }
    });
});


