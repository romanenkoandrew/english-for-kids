const menuActive = () => {
  const menu = document.getElementById('menu')
  const menuLinks = menu.querySelectorAll('a')
  menu.addEventListener('click', event => {
    // event.preventDefault()
    menuLinks.forEach(el => el.classList.remove('active'))
    event.target.classList.add('active')
  })
}
export default menuActive
