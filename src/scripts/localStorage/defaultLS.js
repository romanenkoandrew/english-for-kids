import saveLS from "./saveLS"

const defaultLS = () => {
  window.addEventListener('beforeunload', () => {
    saveLS({ gameModeOn: false })
  })
}
export default defaultLS