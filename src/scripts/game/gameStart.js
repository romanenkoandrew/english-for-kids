import getLS from '../localStorage/getLS'
import saveLS from '../localStorage/saveLS'

const gameStartHandler = () => {
  const button = document.querySelector('.button')
  const { mainPage, gameStart } = getLS()
  button.addEventListener('click', () => {
    if (
      !mainPage &&
      !gameStart &&
      !button.classList.contains('button-repeat')
    ) {
      saveLS({ gameStart: true })
      button.classList.add('button-repeat')
      button.innerText = ''
    }
  })
}

export default gameStartHandler
