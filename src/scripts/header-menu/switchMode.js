import data from '../data'

const switchMode = () => {
  const switchModeLabel = document.getElementById('switchMode')

  switchModeLabel.addEventListener('click', () => {
    if (!data.game) {
      data.game = true
      localStorage.setItem('game', data.game)
    } else {
      data.game = false
      localStorage.setItem('game', data.game)
    }
  })
}
export default switchMode
