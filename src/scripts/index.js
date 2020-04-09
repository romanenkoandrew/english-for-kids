import cards from '../assets/cards'
import menuActive from './header-menu/menuActiveLink'
import menuToggle from './header-menu/menuOpen'
import switchMode from './header-menu/switchMode'
// import data from './data'

console.log(cards)
document.addEventListener('DOMContentLoaded', () => {
  menuActive()
  menuToggle()
  switchMode()
})
