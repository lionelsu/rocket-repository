import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calcIMC, notANumber } from './utils.js'

// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

/* Estes valores foram colocados no objeto Modal 
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')
*/


// script
form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightHeigthNotNumber = notANumber(weight) || notANumber(height)

  if(weightHeigthNotNumber) {
    AlertError.open()
    return

  }

  AlertError.close()

  const result = calcIMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  //modalWrapper.classList.add('open')
  Modal.open()
}


// end