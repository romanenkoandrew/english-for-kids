import saveLS from "./saveLS"

const defaultLS = () => {
  window.addEventListener('beforeunload', () => {
    saveLS({ 
      gameModeOn: false,
      mainPage: true
    })
  })
}
export default defaultLS