import {isEscEvent} from './utils.js';

const page = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
const popup = document.querySelector('.big-picture');

const closeModal = (evt) => {
  document.removeEventListener('keydown', closeModal);
  cancelButton.removeEventListener('click', closeModal);
  popup.classList.add('hidden');
  page.classList.remove('modal-open');
  if (isEscEvent(evt)) {
    evt.preventDefault();
    popup.classList.add('hidden');
    page.classList.remove('modal-open');
  }
};

const openModal = () => {
  popup.classList.remove('hidden');
  page.classList.add('modal-open');
  document.addEventListener('keydown', closeModal);
  cancelButton.addEventListener('click', closeModal);
};

export {openModal};
