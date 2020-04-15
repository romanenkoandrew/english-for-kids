import cards from '../assets/cards'
import image from '../assets/image&mp3'
import menuToggle from './header-menu/menuOpen'
import switchMode from './header-menu/switchMode'
import rotateCard from './secondary-page/rotateCard'
import secondPageCreate from './secondary-page/secondPageCreate'
import audioTrainHandler from './secondary-page/audioTrain'
import saveLS from './localStorage/saveLS'
import defaultLS from './localStorage/defaultLS'

document.addEventListener('DOMContentLoaded', () => {
  defaultLS()
  switchMode()
  menuToggle()
  rotateCard()
  secondPageCreate()
  audioTrainHandler()
  saveLS()
})
