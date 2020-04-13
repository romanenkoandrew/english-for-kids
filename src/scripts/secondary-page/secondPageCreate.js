import cards from '../../assets/cards'
import SecondPage from './secondPage'

const secondPageCreate = () => {
  document.addEventListener('click', event => {
    event.preventDefault()
    const target = event.target
    if ((target.elementTagName = 'a')) {
      let linkIndex
      cards[0].forEach((el, index) => {
        if (el === target.innerText) {
          linkIndex = index
        }
      })
      const secondPage = new SecondPage(linkIndex)
      secondPage()
    }
  })
  // console.log(linkIndex)
}

export default secondPageCreate
