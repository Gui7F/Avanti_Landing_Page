const carousel = document.getElementById("carousel2");
const slides = document.querySelectorAll(".slide_carousel_2");
const dots = document.querySelectorAll(".dot2");
const prev = document.getElementById("prev2");
const next = document.getElementById("next2");

let index = 0;
const totalSlides = slides.length;

function updateCarousel2() {
  // Move os slides
  carousel.style.transform = `translateX(${-index * 100}%)`;

  // Atualiza os indicadores (bolinhas)
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-neutral-700", i === index); // Deixa a bolinha ativa preto
    dot.classList.toggle("bg-gray-400", i !== index); // Bolinhas inativas cinza
  });
}

// Avançar
next.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateCarousel2();
});

// Voltar
prev.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel2();
});

// Clicar nas bolinhas para navegar
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel2();
  });
});

// Define o primeiro estado correto
export default updateCarousel2;