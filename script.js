const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('nav-open');

  navToggle.classList.toggle('open');

  navToggle.setAttribute(
    'aria-expanded',
    String(isOpen)
  );
});