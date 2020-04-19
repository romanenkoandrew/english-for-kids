/* eslint-disable no-restricted-globals */
import getLS from '../localStorage/getLS'
import playAudio from '../secondary-page/playAudio'
import gameEnd from './gameEnd'

const container = document.querySelector('.container')
let wordsArr = []

const correct = () => {
  playAudio('correct')
}
const error = () => {
  playAudio('error')
}
// creating stars after answer
const createStar = image => {
  const stars = container.querySelector('.stars')
  const img = document.createElement('img')
  if (image) {
    img.src = 'assets/img/starWin.svg'
  } else {
    img.src = 'assets/img/starLose.svg'
    img.classList.add('error')
  }
  stars.appendChild(img)
}

const game = () => {
  const button = container.querySelector('.button')
  let lastWord = wordsArr.length - 1
  const { target } = event
  if (
    target.closest('.front') &&
    target.innerText !== wordsArr[lastWord] &&
    !target.classList.contains('success')
  ) {
    error()
    if (target !== button) {
      createStar(false)
      setTimeout(playAudio, 1000, wordsArr[lastWord])
    }
  }
  if (target === button) {
    event.preventDefault()
    lastWord = wordsArr.length - 1
    setTimeout(playAudio, 500, wordsArr[lastWord])
  }
  if (target.innerText === wordsArr[lastWord]) {
    correct()
    createStar(true)
    if (lastWord > 0) {
      target.classList.add('success')
      wordsArr.pop()
      lastWord = wordsArr.length - 1
      setTimeout(playAudio, 1000, wordsArr[lastWord])
    } else {
      target.classList.add('success')
      setTimeout(gameEnd, 500)
    }
  }
}

const gameHandler = () => {
  const { gameStart, mainPage, gameModeOn } = getLS()
  if (gameStart && !mainPage && gameModeOn) {
    const front = container.querySelectorAll('.front')
    wordsArr = []
    front.forEach(el => wordsArr.push(el.innerText))
    wordsArr.sort(function sort() {
      return Math.random() - 0.5
    })
  }
  if (gameStart && !mainPage && gameModeOn) {
    container.addEventListener('click', game)
  }
}

export { gameHandler, game }
