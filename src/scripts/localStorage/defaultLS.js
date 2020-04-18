import saveLS from "./saveLS"

const defaultLS = () => {
  window.addEventListener('beforeunload', () => {
    saveLS({ 
      gameModeOn: false,
      mainPage: true,
      gameStart: false
    })
  })
}
export default defaultLS