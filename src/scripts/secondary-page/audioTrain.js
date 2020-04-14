const playAudioTrain = (audioSrc) => {
  const audio = document.getElementById('audio')
  audio.src = `/dist/assets/audio/${audioSrc}.mp3`
  audio.play()
}
const audioTrain = () => {
  const { target } = event
  if (target.parentElement.classList.contains('secondary-card') &&
  !target.classList.contains('rotate') &&
  !target.classList.contains('back') ) {
    playAudioTrain(target.innerText)
  }
}
const audioTrainHandler = () => {
  const container = document.querySelector('.container')
  container.addEventListener('click', audioTrain)
}
  

export default audioTrainHandler