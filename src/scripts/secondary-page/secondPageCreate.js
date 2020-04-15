import cards from '../../assets/cards'
import SecondPage from './secondPage'
import menuActive from '../header-menu/menuActiveLink'
import getLS from '../localStorage/getLS'
import gameModeSecondPage from '../game/gameModeSecondPage'
import gameModeMainPage from '../game/gameModeMainPage'

const secondPageCreate = () => {
  document.addEventListener('click', event => {
    // event.preventDefault()
    const LS = getLS()
    const { gameModeOn } = LS
    const { target } = event
    if (
      target.classList.contains('main-card') ||
      target.parentElement.classList.contains('main-card') ||
      target.classList.contains('menu-item')
    ) {
      let linkIndex
      cards[0].forEach((el, index) => {
        if (el === target.parentElement.innerText || el === target.innerText) {
          linkIndex = index
        }
      })
      new SecondPage(linkIndex)
      menuActive(linkIndex)
      if (gameModeOn) {
        const switchModeInput = document.getElementById('switch-mode')
        switchModeInput.checked = true
        gameModeSecondPage()
        gameModeMainPage()
      }
    }
  })
}

export default secondPageCreate
