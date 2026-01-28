/* HERO */
window.addEventListener("load", () => {
  const title = document.querySelector(".hero-title");
  const services = document.querySelector(".hero-services");
  const button = document.querySelector(".hero-btn");

  if (title) {
    setTimeout(() => {
      title.style.transition = "all 1s ease";
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 300);
  }

  if (services) {
    setTimeout(() => {
      services.style.transition = "all 1s ease";
      services.style.opacity = "0.8";
      services.style.transform = "translateY(0)";
    }, 700);
  }

  if (button) {
    setTimeout(() => {
      button.style.transition = "all 1s ease";
      button.style.opacity = "1";
      button.style.transform = "translateY(0)";
    }, 1100);
  }
});



/* ABOUT - SOMOS */
const aboutSection = document.querySelector(".about");
const aboutTitle = document.querySelector(".about-title");
const aboutText = document.querySelector(".about-text");

if (aboutSection) {
  const aboutObserver = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        aboutTitle.style.transition = "all 0.9s ease";
        aboutTitle.style.opacity = "1";
        aboutTitle.style.transform = "translateY(0)";

        setTimeout(() => {
          aboutText.style.transition = "all 0.9s ease";
          aboutText.style.opacity = "1";
          aboutText.style.transform = "translateY(0)";
        }, 300);
      }
    },
    { threshold: 0.4 }
  );

  aboutObserver.observe(aboutSection);
}





// Detectar clicks en links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // evita que el anchor haga el salto instantáneo
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;

    // Actualizar scroll inercial
    targetScroll = rect.top + scrollTop;
    currentScroll = targetScroll; // sincroniza con la posición actual

    // Opcional: animación instantánea sin esperar wheel
    window.scrollTo(0, targetScroll);
  });
});



















let currentScroll = window.scrollY;
let targetScroll = currentScroll;
let isScrolling = false;



function smoothScroll() {
  isScrolling = true;
  currentScroll += (targetScroll - currentScroll) * 0.08;
  window.scrollTo(0, currentScroll);

  if (Math.abs(targetScroll - currentScroll) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    isScrolling = false;
  }
}




const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach(el => observer.observe(el));












