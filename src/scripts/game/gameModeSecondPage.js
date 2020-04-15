import getLS from "../localStorage/getLS"


const gameModeSecondPage = () => {
  const LS = getLS()
  const { gameModeOn } = LS
  const front = document.querySelectorAll('.front')
  const rotate = document.querySelectorAll('.rotate')
  const cardText = document.querySelectorAll('.card-text')
  const button = document.querySelector('.button')
  const menu = document.getElementById('menu')
  if (gameModeOn && !menu.firstElementChild.classList.contains('active')) {
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
  if (!gameModeOn && !menu.firstElementChild.classList.contains('active')) {
    front.forEach(el => {
      el.classList.remove('front-game')
    })
    rotate.forEach(el => {
      el.classList.remove('hidden')
    })
    cardText.forEach(el => {
      el.classList.remove('hidden')
    })
    button.classList.add('hidden')
  }
}

export default gameModeSecondPage
