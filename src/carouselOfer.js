export const initCarrouselOfer = () => {
  const carrouselWapper = document.getElementById('carouselWrapper')
  const cards = document.querySelectorAll('.cardOfer')
  const dots = document.querySelectorAll('.dotOfer')
  const prev = document.getElementById('prevOfer')
  const next = document.getElementById('nextOfer')

  let index = 0
  const totalSlides = cards.length

  let startX = 0
  let isSwiping = false

  const updateCarrouselOfer = () => {
    carrouselWapper.style.transform = `translateX(${-index * 100}%)`
    carrouselWapper.style.transition = 'transform 0.3s ease'

    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-neutral-700', i === index)
      dot.classList.toggle('bg-gray-400', i !== index)
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

  // Clicar nas bolinhas
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i
      updateCarrouselOfer()
    })
  })

  // Eventos de toque (swipe)
  carrouselWapper.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
    isSwiping = true
  })

  carrouselWapper.addEventListener('touchmove', (e) => {
    if (!isSwiping) return
    const currentX = e.touches[0].clientX
    const deltaX = currentX - startX

    carrouselWapper.style.transition = 'none'
    carrouselWapper.style.transform = `translateX(${-index * 100 + (deltaX / window.innerWidth) * 100}%)`
  })

  carrouselWapper.addEventListener('touchend', (e) => {
    if (!isSwiping) return
    const endX = e.changedTouches[0].clientX
    const distance = endX - startX

    if (distance > 50) {
      index = Math.max(index - 1, 0)
    } else if (distance < -50) {
      index = Math.min(index + 1, totalSlides - 1)
    }

    isSwiping = false
    updateCarrouselOfer()
  })

  // Inicializa com o primeiro slide
  updateCarrouselOfer()

  return updateCarrouselOfer
}
