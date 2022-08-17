export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal h2'),
  buttonClose: document.querySelector('.modal button'),

  open() {
    Modal.wrapper.classList.add('open');
  },

  close() {
    Modal.wrapper.classList.remove('open');
  }
};

Modal.buttonClose.onclick = () => Modal.close();

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    Modal.close();
  }
});
