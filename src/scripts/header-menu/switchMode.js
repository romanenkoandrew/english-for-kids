import data from '../data'

const switchMode = () => {
  const switchModeContainer = document.getElementById('switchModeContainer')
  const switchModeHandler = document.querySelector('.switch-handler')
  // const switchModeText = document.querySelector('.switch-mode-text')
  switchModeContainer.addEventListener('click', () => {
    if(!data.game) {
      switchModeHandler.style.animationName = 'switch-handler-left'
      // switchModeText.before.style.opacity = '1'
      data.game = true
    } else {
      switchModeHandler.style.animationName = 'switch-handler-right'
      // switchModeText.before.style.opacity = '1'
      data.game = false

    }

    console.log(data.game)
  })
}
export default switchMode
