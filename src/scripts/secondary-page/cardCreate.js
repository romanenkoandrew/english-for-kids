class Card {
  constructor(option) {
    this.word = option.word
    this.translation = option.translation
    this.image = option.image
    this.audioSrc = option.audioSrc
    this.init()
  }

  init() {
    const container = document.querySelector('.container')
    const card = document.createElement('div')
    card.classList.add('secondary-card')
    const front = document.createElement('div')
    front.classList.add('front')
    front.style.backgroundImage = `url(assets/${this.image})`
    const cardText = document.createElement('div')
    cardText.classList.add('card-text')
    cardText.innerText = this.word
    front.appendChild(cardText)

    const back = document.createElement('div')
    back.classList.add('back')
    back.style.backgroundImage = `url(assets/${this.image})`
    const cardTextTranslate = document.createElement('div')
    cardTextTranslate.classList.add('card-text-translate')
    cardTextTranslate.innerText = this.translation
    back.appendChild(cardTextTranslate)

    const rotate = document.createElement('div')
    rotate.classList.add('rotate')
    card.append(front, back, rotate)
    container.appendChild(card)
  }
}

export default Card
