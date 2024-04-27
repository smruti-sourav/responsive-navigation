const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navbar = document.querySelector('nav');

    // Function to toggle navbar color
    const toggleNavbarColor = () => {
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = '#2c3e50'; // Change color when scrolled down
        } else {
            navbar.style.backgroundColor = '#5D4954'; // Change color back to original
        }
    };

    // Listen for scroll event to toggle navbar color
    window.addEventListener('scroll', toggleNavbarColor);

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Animation Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
};

navSlide();
