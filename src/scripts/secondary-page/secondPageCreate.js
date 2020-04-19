import cards from '../../assets/cards'
import SecondPage from './secondPage'
import menuActive from '../header-menu/menuActiveLink'
import getLS from '../localStorage/getLS'
import gameModeSecondPage from '../game/gameModeSecondPage'
import gameModeMainPage from '../game/gameModeMainPage'
import gameStartHandler from '../game/gameStart'

const secondPageCreate = () => {
  document.addEventListener('click', event => {
    const { gameModeOn } = getLS()
    const { target } = event
    if (target.closest('a')) {
      const category = target.closest('a').innerText.trim()
      let linkIndex
      cards[0].forEach((el, index) => {
        if (el === category) {
          linkIndex = index
        }
      })
      // eslint-disable-next-line no-new
      new SecondPage(linkIndex)
      menuActive(linkIndex)
      gameStartHandler()
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
