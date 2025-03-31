window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.project-card');
    reveals.forEach(card => {
      const top = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 50) {
        card.style.transform = 'translateY(0)';
        card.style.opacity = 1;
      }
    });
  });
  window.addEventListener('load', () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // slight delay to ensure it runs after iframe loads
  });
