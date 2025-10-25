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