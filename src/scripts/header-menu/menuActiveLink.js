const menuActive = (option) => {
  const menu = document.getElementById('menu')
  const menuLinks = menu.querySelectorAll('a')
    const linkindex = option + 1
    menuLinks.forEach(el => el.classList.remove('active'))
    menuLinks[linkindex].classList.add('active')
}
export default menuActive
