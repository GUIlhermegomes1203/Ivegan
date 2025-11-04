window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  const navbarShort = document.querySelector(".navbarshort");

  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (navbarShort) {
    if (window.scrollY > 20) {
      navbarShort.classList.add("scrolled");
    } else {
      navbarShort.classList.remove("scrolled");
    }
  }
});

// Controle do menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuToggles = document.querySelectorAll('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  const navbarShort = document.querySelector('.navbarshort');
  
  if (menuToggles.length > 0 && navbar && navbarShort) {
      // Adiciona evento para todos os botões de menu (☰ e ✕)
      menuToggles.forEach(toggle => {
          toggle.addEventListener('click', function() {
              // Verifica qual navbar está visível
              const isNavbarVisible = window.getComputedStyle(navbar).display !== 'none';
              
              if (isNavbarVisible) {
                  // Fecha o menu - volta para navbar short
                  navbar.style.display = 'none';
                  navbarShort.style.display = 'flex';
              } else {
                  // Abre o menu - mostra navbar completa
                  navbar.style.display = 'flex';
                  navbarShort.style.display = 'none';
              }
          });
      });
  }

  // Fecha menu ao clicar em links (exceto no botão ✕)
  const navLinks = document.querySelectorAll('.navbar a:not(.menu-toggle)');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (window.innerWidth <= 890) {
              navbar.style.display = 'none';
              navbarShort.style.display = 'flex';
          }
      });
  });

  // Garante estado correto ao redimensionar
  window.addEventListener('resize', function() {
      if (window.innerWidth > 890) {
          navbar.style.display = 'flex';
          navbarShort.style.display = 'none';
      } else {
          // No mobile, garante que só a short esteja visível
          if (navbar.style.display !== 'none') {
              navbar.style.display = 'none';
              navbarShort.style.display = 'flex';
          }
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel-simple');
  if (!carousel) return;
  
  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const indicators = carousel.querySelectorAll('.indicator');
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  
  // Função para mostrar slide
  function showSlide(index) {
      // Remove active de todos
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(indicator => indicator.classList.remove('active'));
      
      // Adiciona active no atual
      slides[index].classList.add('active');
      indicators[index].classList.add('active');
      
      currentSlide = index;
  }
  
  // Próximo slide
  function nextSlide() {
      let next = currentSlide + 1;
      if (next >= totalSlides) next = 0;
      showSlide(next);
  }
  
  // Slide anterior
  function prevSlide() {
      let prev = currentSlide - 1;
      if (prev < 0) prev = totalSlides - 1;
      showSlide(prev);
  }
  
  // Event listeners
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  
  // Indicadores
  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
          showSlide(index);
      });
  });
  
  // Auto-play (opcional)
  let autoPlay = setInterval(nextSlide, 5000);
  
  // Pausa auto-play quando mouse está em cima
  carousel.addEventListener('mouseenter', () => {
      clearInterval(autoPlay);
  });
  
  carousel.addEventListener('mouseleave', () => {
      autoPlay = setInterval(nextSlide, 5000);
  });
});