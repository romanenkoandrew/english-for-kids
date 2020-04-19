import saveLS from '../localStorage/saveLS'

const mainPage = () => {
  const menu = document.getElementById('menu')
  if (menu.firstElementChild.classList.contains('active')) {
    saveLS({ mainPage: true })
  } else {
    saveLS({ mainPage: false })
  }
}

export default mainPage
