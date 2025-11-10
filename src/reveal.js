// /src/reveal.js
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

  function initReveal() {
    document.querySelectorAll('.services__card-button, .services__product-card, .services__detail, .services__product-detail').forEach((el) => {
      // Skip if already initialized
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
        io.observe(el);
      }
    });
  }

  // Initialize after React renders (multiple attempts to catch delayed renders)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }

  // Retry after a delay to catch React-rendered elements
  setTimeout(initReveal, 300);
  setTimeout(initReveal, 1000);
}
