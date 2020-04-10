import data from '../data'

const switchMode = () => {
  const switchModeLabel = document.getElementById('switchMode')

  switchModeLabel.addEventListener('click', () => {
    if (!data.game) {
      data.game = true
    } else {
      data.game = false
    }
  })
}
export default switchMode
