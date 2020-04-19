import getLS from "../localStorage/getLS"
import { game} from "./gameHandler"


const gameModeSecondPage = () => {
  const LS = getLS()
  const { gameModeOn } = LS
  const { mainPage } = LS
  const container = document.querySelector('.container')
  const front = container.querySelectorAll('.front')
  const rotate = container.querySelectorAll('.rotate')
  const cardText = container.querySelectorAll('.card-text')
  const button = container.querySelector('.button')
  const stars = container.querySelector('.stars')
  
  if (gameModeOn && !mainPage) {
    front.forEach(el => {
      el.classList.add('front-game')
    })
    rotate.forEach(el => {
      el.classList.add('hidden')
    })
    cardText.forEach(el => {
      el.classList.add('hidden')
    })
    button.classList.remove('hidden')
  }
  if (!gameModeOn && !mainPage) {
    front.forEach(el => {
      el.classList.remove('front-game', 'success')
    })
    rotate.forEach(el => {
      el.classList.remove('hidden')
    })
    cardText.forEach(el => {
      el.classList.remove('hidden')
    })
    button.classList.add('hidden')    
    button.classList.remove('button-repeat')
    button.innerText = 'Start game'

    stars.querySelectorAll('img')
    .forEach(el => el.remove())

    container.removeEventListener('click', game)
  }
}

export default gameModeSecondPage
