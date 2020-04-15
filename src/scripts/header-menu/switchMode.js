import saveLS from '../localStorage/saveLS'

const switchMode = () => {
  const switchModeInput = document.getElementById('switch-mode')
  switchModeInput.addEventListener('change', () => {
    if (switchModeInput.checked) {
      saveLS({ gameModeOn: true })
    } 
    if (!switchModeInput.checked) {
      saveLS({ gameModeOn: false })
    }
  })

}
export default switchMode
