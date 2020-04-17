import getLS from "../localStorage/getLS"

const playAudioTrain = (audioSrc) => {
  const audio = document.getElementById('audio')
  audio.src = `assets/audio/${audioSrc}.mp3`
  audio.play().catch(e => e)
}
const audioTrain = () => {
  const LS = getLS()
  const { gameModeOn } = LS
  const { target } = event
  if (target.parentElement.classList.contains('secondary-card') &&
  !target.classList.contains('rotate') &&
  !target.classList.contains('back') && 
  !gameModeOn) {
    playAudioTrain(target.innerText)
  }
}
const audioTrainHandler = () => {
    const container = document.querySelector('.container')
    container.addEventListener('click', audioTrain)
}

export default audioTrainHandler