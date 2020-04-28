import getLS from '../localStorage/getLS'

const gameModeMainPage = () => {
  const { gameModeOn, mainPage, firstTime } = getLS()
  const verticalColorChangeArr = [...document.querySelectorAll('.main-card')]

  const menu = document.getElementById('menu')
  const switchMode = document.getElementById('switchMode')
  // const verticalColorChangeArr = [...verticalColorChange]
  const horizontalColorChangeArr = [menu, switchMode]
  if (gameModeOn) {
    horizontalColorChangeArr.forEach(el =>
      el.classList.remove('train-color-horizontal')
    )
    if (mainPage) {
      verticalColorChangeArr.forEach(el =>
        el.classList.remove('train-color-vertical')
      )
    }
  }
  if (!gameModeOn) {
    if (!firstTime) {
      horizontalColorChangeArr.forEach(el =>
        el.classList.add('train-color-horizontal')
      )
    }
    if (mainPage) {
      verticalColorChangeArr.forEach(el =>
        el.classList.add('train-color-vertical')
      )
    }
  }
}

export default gameModeMainPage
