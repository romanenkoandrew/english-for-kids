import saveLS from '../localStorage/saveLS'

const switchMode = () => {
  const switchModeInput = document.getElementById('switch-mode')
  switchModeInput.addEventListener('change', () => {
    if (switchModeInput.checked) {
      saveLS({ gameModeOn: true, firstTime: false })
    }
    if (!switchModeInput.checked) {
      saveLS({
        gameModeOn: false,
        gameStart: false,
        firstTime: false
      })
    }
  })
}
export default switchMode
