import { query } from './elements.js'

export function Musics(musicType, number) {
  const music = new Audio(`./assets/sounds/${musicType}.wav`)
  music.loop = true
  return {
    musicObj: query('.music').children[number].addEventListener('click', () => {
      music.play()
    })
  }
}
