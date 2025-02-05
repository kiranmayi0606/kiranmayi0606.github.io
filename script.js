document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Dark mode toggle
  const toggleButton = document.getElementById('dark-mode-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
});
