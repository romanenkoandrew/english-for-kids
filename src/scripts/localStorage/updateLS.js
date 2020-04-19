import gameModeMainPage from "../game/gameModeMainPage"
import gameModeSecondPage from "../game/gameModeSecondPage"
import switchMode from "../header-menu/switchMode"
import { gameHandler } from "../game/gameHandler"

const updateLS = () => {
  gameModeMainPage()
  gameModeSecondPage()
  switchMode()
  gameHandler()
}

export default updateLS