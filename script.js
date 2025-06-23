// Simple form handler for the contact form
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
        contactForm.reset();
    });
}

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
