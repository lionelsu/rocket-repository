const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

let seconds = Number(secondsDisplay.textContent)
let minutes = Number(minutesDisplay.textContent)
let timeout

function addMinutes() {
  buttonPlus.addEventListener('click', () => {
    minutesDisplay.textContent++
  })
}

addMinutes()


function subMinutes() {
  buttonMinus.addEventListener('click', () => {
    minutesDisplay.textContent--

    if (minutesDisplay.textContent <= 0) {
      minutesDisplay.textContent = String(0).padStart(2, "0")
    }
  })
}

subMinutes()


function resetControl() {
  seconds = 0
  minutes = 25

  buttonStop.addEventListener('click', () => {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")

    clearTimeout(timeout)
    resetControl()
  })
}

resetControl()



function tempo() {
  let isFinished = minutes <= 0 && seconds <= 0

  timeout = setTimeout(() => {

      if(isFinished) {
        resetControl()
      }

      if(seconds <= 0) {
        seconds = 60
        --minutes
      }

      if(seconds != 61) {
          seconds--
      }

      console.log(seconds)
      
      secondsDisplay.textContent = String(seconds).padStart(2, "0")
      minutesDisplay.textContent = String(minutes).padStart(2, "0")

      tempo()
  }, 1000)
}

buttonPlay.addEventListener('click', () => {
  tempo()
})