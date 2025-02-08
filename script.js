document.addEventListener('DOMContentLoaded', () => {
  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  
  // Animated boxes hover effect
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
      box.style.transform = 'translateY(-10px)';
    });
    
    box.addEventListener('mouseout', () => {
      box.style.transform = 'translateY(0)';
    });
  });
});
