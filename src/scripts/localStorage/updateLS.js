import gameModeMainPage from '../game/gameModeMainPage'
import gameModeSecondPage from '../game/gameModeSecondPage'
import { gameHandler } from '../game/gameHandler'

const updateLS = () => {
  gameModeMainPage()
  gameModeSecondPage()
  gameHandler()
}

export default updateLS
