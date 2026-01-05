document.addEventListener('DOMContentLoaded', function() {
  const parallaxElements = document.querySelectorAll('.hero-parallax');

  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = el.offsetHeight;

      if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
        const relativeScroll = scrolled - elementTop;
        el.style.setProperty('--scroll', relativeScroll);
      }
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  updateParallax(); // Initial call
});
