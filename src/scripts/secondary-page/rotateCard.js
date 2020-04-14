const rotateCard = () => {
  const container = document.querySelector('.container')
  container.addEventListener('click', event => {
    const { target } = event
    const parentTarget = target.parentElement
    if (target.classList.contains('rotate')) {
      parentTarget.classList.add('translate')
    }
    parentTarget.addEventListener('mouseleave', el => {
      if (el.target !== el) {
        parentTarget.classList.remove('translate')
      }
    })
  })
}

export default rotateCard
