import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { calculateIMC, notANumber } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = e => {
  e.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  let result = calculateIMC(weight, height);

  displayResultMessage(result);
};

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;
  Modal.message.innerText = message;
  Modal.open();
}
