export const initCarrouselOfer = () => {
  const carrouselWapper = document.getElementById('carouselWrapper')
  const cards = document.querySelectorAll('.cardOfer')
  const dots = document.querySelectorAll('.dotOfer')
  const prev = document.getElementById('prevOfer')
  const next = document.getElementById('nextOfer')
  let index = 0
  const totalSlides = cards.length
  const updateCarrouselOfer = () => {
    // Move os slides
    carrouselWapper.style.transform = `translateX(${-index * 100}%)`

    // Atualiza os indicadores (bolinhas)
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-neutral-700', i === index) // Deixa a bolinha ativa preto
      dot.classList.toggle('bg-gray-400', i !== index) // Bolinhas inativas cinza
    })
  }
  // Avançar
  next.addEventListener('click', () => {
    index = (index + 1) % totalSlides
    updateCarrouselOfer()
  })
  // Voltar
  prev.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides
    updateCarrouselOfer()
  })
  // Clicar nas bolinhas para navegar
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i
      updateCarrouselOfer()
    })
  })
  // Define o primeiro estado correto
  updateCarrouselOfer()
  return updateCarrouselOfer
}