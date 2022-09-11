export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  /* a funcao também pode ser feita desta forma
  open: function() {},
  close: function() {}*/
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  //modalWrapper.classList.remove('open')
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
  if(event.key === 'Escape') {
    Modal.close()
  }
}