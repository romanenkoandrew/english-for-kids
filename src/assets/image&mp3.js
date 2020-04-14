const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace('./', '')] = require(next)
    return acc
  }, {})

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/))

const mp3 = importAll(require.context('./audio', false, /\.mp3$/))
