function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        history.pushState(null, null, `/${targetId}`);
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  window.addEventListener('popstate', () => {
    const path = window.location.pathname.substring(1);
    const targetElement = document.getElementById(path);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});