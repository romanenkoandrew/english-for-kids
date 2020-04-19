import Card from './cardCreate'
import cards from '../../assets/cards'

class SecondPage {
  constructor(index) {
    this.index = index + 1
    this.init()
  }

  init() {
    const container = document.querySelector('.container')
    const linkArr = container.querySelectorAll('a')
    linkArr.forEach(el => container.removeChild(el))
    const cardsArr = container.querySelectorAll('div')
    cardsArr.forEach(el => el.remove())
    container.classList.remove('main-page-container')
    container.classList.add('second-page-container')
    const stars = document.createElement('div')
    stars.classList.add('stars')
    container.appendChild(stars)
    cards[this.index].forEach(el => {
      // eslint-disable-next-line no-new
      new Card(el)
    })
    const button = document.createElement('button')
    button.classList.add('button', 'hidden')
    button.innerText = 'Start game'
    const buttons = document.createElement('div')
    buttons.classList.add('buttons')
    buttons.appendChild(button)
    const audio = document.createElement('audio')
    audio.id = 'audio'
    container.append(buttons, audio)
  }
}

export default SecondPage
