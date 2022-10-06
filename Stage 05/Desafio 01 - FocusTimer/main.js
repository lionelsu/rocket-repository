import { Musics } from './modules/sounds.js'

const musicPlayer = {
  forest: Musics('Floresta', 0),
  rain: Musics('Chuva', 1),
  house: Musics('Casa', 2),
  fire: Musics('Lareira', 3)
}





function colocacor() {
  document.querySelector('.music').addEventListener('click', () => {
    document.querySelector('.music').children[1].classList.add('cardClicked')
  })
}

function tiracor() {
  document.querySelector('.music').addEventListener('click', () => {
    document.querySelector('.music').children[1].classList.remove('cardClicked')
  })
}
