import Card from './cardCreate'
import cards from '../../assets/cards'

class SecondPage {
  constructor(index) {
    this.index = index + 1
    this.init()
  }

  init() {
    console.log(cards[this.index])
    const container = document.querySelector('.container')
    const stars = document.createElement('div')
    stars.classList.add('stars')
    container.appendChild(stars)
    cards[this.index].forEach(el => {
      new Card(el)
    })
    const button = document.createElement('div')
    button.classList.add('button hidden')
    button.innerText = 'Start game'
    container.appendChild(button)
  }
}

export default SecondPage
