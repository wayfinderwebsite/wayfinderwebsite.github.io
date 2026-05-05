// Shared site behaviors
(function () {
  // Nav burger binding lives in partials.js (runs right after nav HTML is injected).
  // Binding it again here would attach a second handler that re-toggles the class on the same click.

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
