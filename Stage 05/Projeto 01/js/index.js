import resetControls from "./controls.js"
import { Timer } from "./timer.js"

const BUTTON_PLAY = document.querySelector('.play')
const BUTTON_PAUSE = document.querySelector('.pause')
const BUTTON_STOP = document.querySelector('.stop')
const BUTTON_SET = document.querySelector('.set')
const BUTTON_SOUND_ON = document.querySelector('.sound-on')
const BUTTON_SOUND_OFF = document.querySelector('.sound-off')
const MINUTES_DISPLAY = document.querySelector('.minutes')
const SECONDS_DISPLAY = document.querySelector('.seconds')
let minutes = Number(MINUTES_DISPLAY.textContent)
let timerTimeOut

// O Dom é Event-driven, direcionado a eventos.

const timer = Timer({
  MINUTES_DISPLAY,
  SECONDS_DISPLAY,
  timerTimerOut,
  resetControls,
})

//callback
BUTTON_PLAY.addEventListener('click', function() {
  BUTTON_PLAY.classList.add('hide')
  BUTTON_PAUSE.classList.remove('hide')
  BUTTON_SET.classList.add('hide')
  BUTTON_STOP.classList.remove('hide')

  timer.countDown()
})

BUTTON_PAUSE.addEventListener('click', function() {
  BUTTON_PAUSE.classList.add('hide')
  BUTTON_PLAY.classList.remove('hide')
  clearTimeout(timerTimeOut)
})

BUTTON_STOP.addEventListener('click', function() {
  resetControls()
  timer.resetTimer()
})

BUTTON_SOUND_OFF.addEventListener('click', function() {
  BUTTON_SOUND_ON.classList.remove('hide')
  BUTTON_SOUND_OFF.classList.add('hide')
})

BUTTON_SOUND_ON.addEventListener('click', function() {
  BUTTON_SOUND_OFF.classList.remove('hide')
  BUTTON_SOUND_ON.classList.add('hide')
})

BUTTON_SET.addEventListener('click', function() {
  let newMinutes = prompt('Quantos minutos?')
  if (!newMinutes) {
    timer.resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})

