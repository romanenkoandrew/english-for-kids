import cards from '../assets/cards'
import menuActive from './header-menu/menuActiveLink'
import menuToggle from './header-menu/menuOpen'
import switchMode from './header-menu/switchMode'
import rotateCard from './secondary-page/rotateCard'
import gameModeOn from './game/game-mode-on'
import dataChange from './data'
import secondPageCreate from './secondary-page/secondPageCreate'
// DOMContentLoaded
console.log(cards)
document.addEventListener('DOMContentLoaded', () => {
  dataChange()
  switchMode()
  menuActive()
  menuToggle()
  rotateCard()
  gameModeOn()
  secondPageCreate()
})
