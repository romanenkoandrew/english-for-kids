const rotateCard = () => {
  const container = document.querySelector('.container')
  const cards = container.querySelectorAll('.secondary-card')
  const rotate = container.querySelector('.rotate')

  cards.forEach(el => {
    el.addEventListener('click', event => {
      if (event.target === rotate) {
        el.classList.add('translate')
      }
    })
    el.addEventListener('mouseout', event => {
      if (event.target !== el) {
        el.classList.remove('translate')
      }
    })
  })
}

export default rotateCard
