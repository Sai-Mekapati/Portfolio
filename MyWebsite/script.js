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