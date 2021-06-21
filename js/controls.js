import {isEscEvent} from './utils.js';

const page = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
const popup = document.querySelector('.big-picture');

const closeModalEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    popup.classList.add('hidden');
    page.classList.remove('modal-open');
    document.removeEventListener('keydown', closeModalEsc);
    //eslint-disable-next-line no-use-before-define
    cancelButton.removeEventListener('click', closeModal);
  }
};

const closeModal = () => {
  document.removeEventListener('keydown', closeModalEsc);
  cancelButton.removeEventListener('click', closeModal);
  popup.classList.add('hidden');
  page.classList.remove('modal-open');
};

const openModal = () => {
  popup.classList.remove('hidden');
  page.classList.add('modal-open');
  document.addEventListener('keydown', closeModalEsc);
  cancelButton.addEventListener('click', closeModal);
};

export {openModal};
