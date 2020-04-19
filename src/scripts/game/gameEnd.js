import playAudio from "../secondary-page/playAudio"

const container = document.querySelector('.container')

const gameEnd = () => {
  const stars = container.querySelector('.stars')
  let counterErrors = 0
  stars.querySelectorAll('img').forEach(el => {
    if (el.classList.contains('error')) {
      counterErrors += 1
    }
  })
  const main = document.querySelector('#main')
  main.firstElementChild.classList.add('hidden')
  main.lastElementChild.classList.add('hidden')
  const result = document.createElement('div')
  result.classList.add('result')
  const resultText = document.createElement('div')
  const img = document.createElement('img')
  if (!counterErrors) {
    resultText.classList.add('win-text')
    resultText.innerText = 'Win'
    img.src = 'assets/img/success.jpg'
    setTimeout(playAudio, 500, 'success')
  }

  if (counterErrors) {
    resultText.classList.add('lose-text')
    img.src = 'assets/img/failure.jpg'
    if (counterErrors === 1) {
      resultText.innerText = `${counterErrors} error`
    } 
    if (counterErrors > 1) {
      resultText.innerText = `${counterErrors} errors`
    } 
    playAudio('failure')
  }

  result.append(resultText, img)
  main.appendChild(result)
  setTimeout(toTheMainPage, 3000)
}

const toTheMainPage = () => {
  const link = document.createElement('a')
  link.href = 'index.html'
  link.click()
}

export default gameEnd
