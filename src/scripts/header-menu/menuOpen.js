const menuToggle = () => {
  const menu = document.getElementById('menu')
  const menuCheck = document.getElementById('menuCheck')
  menuCheck.addEventListener('click', () => {
    if (menuCheck.checked) {
      menu.style.animationName = 'menu-right'
      menuCheck.checked = true
    }
    if (!menuCheck.checked) {
      menu.style.animationName = 'menu-left'
      menuCheck.checked = false
    }
  })
  document.addEventListener('click', event => {
    if (
      menuCheck.checked &&
      event.target !== menu &&
      event.target !== menuCheck
    ) {
      menu.style.animationName = 'menu-left'
      menuCheck.checked = false
    }
  })
}

export default menuToggle
