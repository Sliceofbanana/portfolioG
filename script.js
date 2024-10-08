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

document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('mousemove', function(e) {
  let trail = document.createElement('div');
  trail.className = 'trail';
  document.body.appendChild(trail);
  
  trail.style.left = e.pageX + 'px';
  trail.style.top = e.pageY + 'px';
  
  setTimeout(function() {
      trail.remove();
  }, 500);
});

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeIcon.src = "./assets/moon.png";
    themeIcon.style.filter = "invert(1)";
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.src = "./assets/sun.png";
    themeIcon.style.filter = "invert(0)";
    localStorage.setItem('theme', 'light');
  }
}

window.onload = function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add("dark-mode");
    document.getElementById("theme-icon").src = "./assets/moon.png";
    themeIcon.style.filter = "invert(1)";
  }
};
