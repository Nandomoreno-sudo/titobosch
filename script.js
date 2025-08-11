// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Lightbox functionality
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    portfolioItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            lightbox.style.display = 'block';
            lightboxImg.src = item.href;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });

    // Efecto de desvanecimiento al hacer scroll
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const heroHeight = hero.offsetHeight;
        
        // Control por clases
        if (scrollPosition > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
        
        // Control directo de opacidad (alternativa)
        // const opacity = 1 - (scrollPosition / (heroHeight * 0.5));
        // heroContent.style.opacity = Math.max(0, opacity);
    });
});