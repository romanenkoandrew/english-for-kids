const dataChange = () => {
  // const currentGame = localStorage.getItem('game')
  // console.log(currentGame)
  const data = {
    game: localStorage.getItem('game') || false
  }
  return data
}
export default dataChange
