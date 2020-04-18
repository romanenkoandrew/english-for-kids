import getLS from "../localStorage/getLS"
import saveLS from "../localStorage/saveLS"

const gameStart = () => {
  const button = document.querySelector('.button')
  const LS = getLS()
  const { mainPage } = LS
  const { gameStart } = LS
  button.addEventListener('click', () => {
  if(!mainPage &&
    !gameStart) 
    {
      saveLS({gameStart : true})
      button.classList.add('button-repeat')
      button.innerText = ''
    } 
  })
  
}

export default gameStart