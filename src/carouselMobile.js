// carousel.js

export function initCarousel() {
  const carousel = document.getElementById('carouselMobile');
  const slides = document.querySelectorAll('.slideMobile');
  const dots = document.querySelectorAll('.dotMobile');

  let currentIndex = 0;
  const totalSlides = slides.length;

  let startX = 0;
  let isSwiping = false;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    carousel.style.transition = 'transform 0.3s ease';

    dots.forEach((dot, index) => {
      dot.classList.toggle('bg-gray-800', index === currentIndex);
      dot.classList.toggle('bg-gray-400', index !== currentIndex);
    });
  }

  // Navegação pelos dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Swipe
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
  });

  carousel.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;

    // Movimentação visual opcional durante o swipe
    carousel.style.transition = 'none';
    carousel.style.transform = `translateX(${-currentIndex * 100 + (deltaX / window.innerWidth) * 100}%)`;
  });

  carousel.addEventListener('touchend', (e) => {
    if (!isSwiping) return;
    const endX = e.changedTouches[0].clientX;
    const distance = endX - startX;

    if (distance > 50) {
      currentIndex = Math.max(currentIndex - 1, 0);
    } else if (distance < -50) {
      currentIndex = Math.min(currentIndex + 1, totalSlides - 1);
    }

    isSwiping = false;
    updateCarousel();
  });

  // Inicializa
  updateCarousel();
}

  
