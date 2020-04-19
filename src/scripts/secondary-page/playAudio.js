const playAudio = (audioSrc) => {
  const audio = document.getElementById('audio')
  audio.src = `assets/audio/${audioSrc}.mp3`
  audio.play().catch(e => e)
}

export default playAudio