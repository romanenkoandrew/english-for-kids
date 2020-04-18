import getLS from "../localStorage/getLS"

const buttonRemoveRepeat = () => {
  const button = document.querySelector('.button')
  const LS = getLS()
  const { gameStart } = LS
  const { mainPage } = LS
  if (!gameStart && !mainPage) {
    button.classList.remove('button-repeat')
    button.innerText = 'Start game'
  }

}

export default buttonRemoveRepeat