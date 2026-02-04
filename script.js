document.addEventListener('DOMContentLoaded', () => {
    /* ================= GLOBALS ================= */
    const body = document.body;

    /* ================= DYNAMIC YEAR ================= */
    const yearSpan = document.getElementById('y');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ================= MOBILE MENU ================= */
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.style.overflow = !isExpanded ? 'hidden' : ''; // Prevent scroll when menu open
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Close menu when resizing to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }

    /* ================= SCROLL REVEAL OBSERVER ================= */
    const revealElements = document.querySelectorAll('.section h2, .section p, .card, .pill-list li, .kv-list li, .hero-copy > *');

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach((el, index) => {
        // Add staggered delay via CSS variable if needed, or just let CSS handle base
        el.classList.add('reveal-hidden');
        revealOnScroll.observe(el);
    });

    /* ================= 3D TILT EFFECT (Vanilla) ================= */
    const tiltElements = document.querySelectorAll('.tilt-card, .hero-media');

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
            const rotateY = ((x - centerX) / centerX) * 10;

            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    /* ================= MOUSE GLOW FOLLOWER ================= */
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        // Smooth interpolation
        const ease = 0.15;
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        body.style.setProperty('--x', `${currentX}px`);
        body.style.setProperty('--y', `${currentY}px`);

        requestAnimationFrame(animateGlow);
    }
    animateGlow();
});
