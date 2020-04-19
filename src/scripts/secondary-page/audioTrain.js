import getLS from '../localStorage/getLS'
import playAudio from './playAudio'

const audioTrain = () => {
  const { gameModeOn } = getLS()
  // eslint-disable-next-line no-restricted-globals
  const { target } = event
  if (
    target.parentElement.classList.contains('secondary-card') &&
    !target.classList.contains('rotate') &&
    !target.classList.contains('back') &&
    !gameModeOn
  ) {
    playAudio(target.innerText)
  }
}
const audioTrainHandler = () => {
  const container = document.querySelector('.container')
  container.addEventListener('click', audioTrain)
}

export default audioTrainHandler
