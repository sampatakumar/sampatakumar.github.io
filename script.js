document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const yearSpan = document.getElementById('y');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.style.overflow = !isExpanded ? 'hidden' : '';
        });
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            });
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }

    // Unified Mouse Tracking
    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    /* Linked circles mouse trail */
    const cursor = document.querySelector('.cursor-head');
    const trailSegments = 20;
    const trails = [];

    for (let i = 0; i < trailSegments; i++) {
        const t = document.createElement('div');
        t.className = 'trail';
        document.body.appendChild(t);
        trails.push({ el: t, x: 0, y: 0 });
    }

    function animateTrail() {
        let x = mouseX, y = mouseY;
        if (cursor) {
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
        }
        trails.forEach((trail, index) => {
            trail.x += (x - trail.x) * 0.3;
            trail.y += (y - trail.y) * 0.3;
            trail.el.style.left = trail.x + 'px';
            trail.el.style.top = trail.y + 'px';
            const size = 8 * (1 - index / trailSegments);
            trail.el.style.width = size + 'px';
            trail.el.style.height = size + 'px';
            x = trail.x; y = trail.y;
        });
        requestAnimationFrame(animateTrail);
    }
    animateTrail();

    // Hover effects for reveal (mix-blend-mode difference)
    document.querySelectorAll('a, button, .project-card, .glass-card, h1, h2, h3').forEach(el => {
        el.addEventListener('mouseenter', () => cursor?.classList.add('hover-active'));
        el.addEventListener('mouseleave', () => cursor?.classList.remove('hover-active'));
    });

    // Reveal on scroll
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.section h2, .section p, .card, .pill-list li, .kv-list li, .hero-copy > *').forEach(el => {
        el.classList.add('reveal-hidden');
        revealOnScroll.observe(el);
    });

    // Tilt Effect
    document.querySelectorAll('.tilt-card, .hero-media').forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.width / 2, centerY = rect.height / 2;
            const rotateX = ((e.clientY - rect.top - centerY) / centerY) * -10;
            const rotateY = ((e.clientX - rect.left - centerX) / centerX) * 10;
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        el.addEventListener('mouseleave', () => el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)');
    });

    // Glow Animation (Background interaction)
    function animateGlow() {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;
        body.style.setProperty('--x', `${currentX}px`);
        body.style.setProperty('--y', `${currentY}px`);
        requestAnimationFrame(animateGlow);
    }
    animateGlow();

    // Typewriter
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const textToType = "Sampatakumar";
        let charIndex = 0;
        function type() {
            if (charIndex < textToType.length) {
                typewriterElement.textContent += textToType.charAt(charIndex++);
                setTimeout(type, 150);
            }
        }
        setTimeout(type, 1000);
    }
});
