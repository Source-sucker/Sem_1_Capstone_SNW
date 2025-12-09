// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');

  // Toggle menu open/close
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    const isOpen = nav.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
