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
    const stars = document.createElement('div')
    stars.classList.add('stars')
    container.appendChild(stars)
    cards[this.index].forEach(el => {
      new Card(el)
    })
    const button = document.createElement('div')
    button.classList.add('button', 'hidden')
    button.innerText = 'Start game'
    container.appendChild(button)
  }
}

export default SecondPage
