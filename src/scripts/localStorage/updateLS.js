import gameModeMainPage from "../game/gameModeMainPage"
import gameModeSecondPage from "../game/gameModeSecondPage"
import buttonRemoveRepeat from "../game/buttonRemoveRepeat"
import switchMode from "../header-menu/switchMode"

const updateLS = () => {
  gameModeMainPage()
  gameModeSecondPage()
  buttonRemoveRepeat()
  switchMode()
}

export default updateLS