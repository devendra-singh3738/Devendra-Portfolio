// Devendra Singh - Portfolio JavaScript

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Typewriter Effect ---
    const typewriterElement = document.getElementById('typewriter-text');
    const roles = [
        "Software Developer",
        "B.Tech CSE Student",
        "Java & C++ Enthusiast",
        "Problem Solver"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDelay = 1500;

    function typeEffect() {
        if (!typewriterElement) return;

        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = pauseDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 300;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();


    // --- 2. Mobile Hamburger Menu Toggle ---
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close menu when a navigation link is clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
            }
        });
    }


    // --- 3. Scroll to Top Floating Button ---
    const scrollTopBtn = document.getElementById('scroll-top-btn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // --- 4. Active Navigation Link on Scroll ---
    const sections = document.querySelectorAll('section[id]');

    function highlightNavOnScroll() {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

            if (correspondingNavLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingNavLink.classList.add('active');
                } else {
                    correspondingNavLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);
});
