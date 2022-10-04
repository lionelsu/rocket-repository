import { query } from './elements.js'

export function musics(musicType, number) {
  const music = new Audio(`./assets/sounds/${musicType}.wav`)
  return {
    musicObj: query('.music').children[number].addEventListener('click', () => {
      music.play()
    })
  }
}