/**
 * Restaurante Wongein - Main JavaScript File
 * Optimized for performance and functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Bootstrap carousels with customized settings
  const initCarousels = () => {
      const carousels = document.querySelectorAll('.carousel');
      carousels.forEach(carousel => {
          new bootstrap.Carousel(carousel, {
              interval: 5000,
              ride: 'carousel',
              pause: 'hover',
              wrap: true
          });
      });
  };

  // Add scroll effect to navbar
  const setupNavbarScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;

      window.addEventListener('scroll', function() {
          navbar.classList.toggle('scrolled', window.scrollY > 50);
      });
  };

  // Smooth scrolling for navigation links
  const setupSmoothScrolling = () => {
      document.querySelectorAll('.nav-link').forEach(link => {
          link.addEventListener('click', function(e) {
              if (this.hash) {
                  e.preventDefault();
                  const target = document.querySelector(this.hash);
                  if (target) {
                      window.scrollTo({
                          top: target.offsetTop - 70,
                          behavior: 'smooth'
                      });
                      
                      // Update URL hash without jumping
                      if (history.pushState) {
                          history.pushState(null, null, this.hash);
                      } else {
                          window.location.hash = this.hash;
                      }
                  }
              }
          });
      });
  };

  // Force table redraw on resize for better mobile responsiveness
  const handleTableResize = () => {
      window.addEventListener('resize', function() {
          document.querySelectorAll('.table').forEach(table => {
              table.style.display = 'none';
              table.offsetHeight; // Trigger reflow
              table.style.display = 'table';
          });
      });
  };

  // Initialize all functions
  const init = () => {
      initCarousels();
      setupNavbarScroll();
      setupSmoothScrolling();
      handleTableResize();
      
      // Console message (remove in production)
      console.log('%cRestaurante Wongein 🥢', 'color: #8B0000; font-size: 16px; font-weight: bold;');
      console.log('%c¡Bienvenido a nuestro sitio web!', 'color: #333; font-size: 14px;');
  };

  // Start the application
  init();
});

const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const lazyElement = entry.target;
          if (lazyElement.dataset.src) {
              lazyElement.src = lazyElement.dataset.src;
          }
          if (lazyElement.dataset.srcset) {
              lazyElement.srcset = lazyElement.dataset.srcset;
          }
          lazyElement.classList.remove('lazy');
          observer.unobserve(lazyElement);
      }
  });
});

document.querySelectorAll('img.lazy, iframe.lazy').forEach(el => {
  lazyLoadObserver.observe(el);
});
