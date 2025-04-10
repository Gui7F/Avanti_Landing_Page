// carousel.js

export function initCarousel() {
    const carousel = document.getElementById('carouselMobile');
    const slides = document.querySelectorAll('.slideMobile');
    const dots = document.querySelectorAll('.dotMobile');
  
    let currentIndex = 0;
    const totalSlides = slides.length;
  
    let startX = 0;
    let endX = 0;
  
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
  
      dots.forEach((dot, index) => {
        dot.classList.toggle('bg-gray-800', index === currentIndex);
        dot.classList.toggle('bg-gray-400', index !== currentIndex);
      });
    }
  
    // Bolinhas
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });
  
    // Toque
    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
  
    carousel.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX;
    });
  
    carousel.addEventListener('touchend', () => {
      const distance = endX - startX;
  
      if (distance > 50) {
        currentIndex = Math.max(currentIndex - 1, 0);
      } else if (distance < -50) {
        currentIndex = Math.min(currentIndex + 1, totalSlides - 1);
      }
  
      updateCarousel();
    });
  
    // Inicializa na primeira posição
    updateCarousel();
  }
  
