const rotateCard = () => {
  const container = document.querySelector('.container')
  container.addEventListener('click', event => {
    const target = event.target
    const parentTarget = event.target.parentElement
    if (target.classList.contains('rotate')) {
      parentTarget.classList.add('translate')
    }
    console.log(parentTarget)
    parentTarget.addEventListener('mouseleave', (el) => {
        if (el.target !== el) {
          parentTarget.classList.remove('translate')
        }
    })
  })
}

export default rotateCard
