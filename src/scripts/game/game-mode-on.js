import dataChange from '../data'

dataChange()
const gameModeOn = currentGame => {
  const verticalColorChange = document.querySelectorAll('.train-color-vertical')
  const horizontalColorChange = document.querySelectorAll(
    '.train-color-horizontal'
  )
  const verticalColorChangeArr = [...verticalColorChange]
  const horizontalColorChangeArr = [...horizontalColorChange]
  if (currentGame === true) {
    verticalColorChangeArr.forEach(
      el => el.classList.remove('train-color-vertical')
      // console.log(el)
    )
    horizontalColorChangeArr.forEach(el =>
      el.classList.remove('train-color-horizontal')
    )
  }
  if (currentGame === false) {
    verticalColorChangeArr.forEach(
      el => el.classList.add('train-color-vertical')
      // console.log(el)
    )
    horizontalColorChangeArr.forEach(el =>
      el.classList.add('train-color-horizontal')
    )
  }
}

export default gameModeOn
