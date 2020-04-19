import saveLS from './saveLS'

const defaultLS = () => {
  saveLS({
    gameModeOn: false,
    mainPage: true,
    gameStart: false,
    firstTime: true
  })
}
export default defaultLS
