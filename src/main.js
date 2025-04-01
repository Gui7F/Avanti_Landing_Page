const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;
const totalSlides = slides.length;

function updateCarousel() {
  // Move os slides
  carousel.style.transform = `translateX(${-index * 100}%)`;

  // Atualiza os indicadores (bolinhas)
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-neutral-700", i === index); // Deixa a bolinha ativa azul
    dot.classList.toggle("bg-gray-400", i !== index); // Bolinhas inativas cinza
  });
}

// Avançar
next.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
});

// Voltar
prev.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// Clicar nas bolinhas para navegar
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
});

// Define o primeiro estado correto
updateCarousel();
