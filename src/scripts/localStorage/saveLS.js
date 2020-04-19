import getLS from './getLS'
import updateLS from './updateLS'

const saveLS = obj => {
  const LS = getLS()
  localStorage.setItem('store', JSON.stringify({ ...LS, ...obj }))
  updateLS()
}

export default saveLS
