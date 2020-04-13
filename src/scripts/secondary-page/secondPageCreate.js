import cards from '../../assets/cards'
import SecondPage from './secondPage'
import menuActive from '../header-menu/menuActiveLink'

const secondPageCreate = () => {
  document.addEventListener('click', event => {
    // event.preventDefault()
    const target = event.target
    if (target.classList.contains('main-card') || 
    target.parentElement.classList.contains('main-card') || 
    target.classList.contains('menu-item'))
     {
      let linkIndex
      cards[0].forEach((el, index) => {
        if (el === target.parentElement.innerText || el === target.innerText ) {
          linkIndex = index
        }
      })
      new SecondPage(linkIndex)
      menuActive(linkIndex)
    }
  })
}

export default secondPageCreate
