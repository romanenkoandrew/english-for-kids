import cards from '../assets/cards'
import image from '../assets/image&mp3'
import menuToggle from './header-menu/menuOpen'
import switchMode from './header-menu/switchMode'
import rotateCard from './secondary-page/rotateCard'
import gameModeOn from './game/game-mode-on'
import dataChange from './data'
import secondPageCreate from './secondary-page/secondPageCreate'
import audioTrainHandler from './secondary-page/audioTrain'
// DOMContentLoaded
console.log(cards)
document.addEventListener('DOMContentLoaded', () => {
  dataChange()
  switchMode()
  menuToggle()
  rotateCard()
  gameModeOn()
  secondPageCreate()
  audioTrainHandler()
})
