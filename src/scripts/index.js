import cards from '../assets/cards'
import menuToggle from './header-menu/menuOpen'
import rotateCard from './secondary-page/rotateCard'
import secondPageCreate from './secondary-page/secondPageCreate'
import audioTrainHandler from './secondary-page/audioTrain'
import saveLS from './localStorage/saveLS'
import defaultLS from './localStorage/defaultLS'

document.addEventListener('DOMContentLoaded', () => {
  defaultLS()
  menuToggle()
  rotateCard()
  secondPageCreate()
  audioTrainHandler()
  saveLS()
})
