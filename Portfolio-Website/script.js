// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form validation for the contact section
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    const emailInput = document.getElementById('email');

    if (!isValidEmail(emailInput.value)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
