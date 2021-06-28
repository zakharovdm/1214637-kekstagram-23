import {isEscEvent} from './utils.js';
import {clearComments} from './storage.js';

const page = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
const popup = document.querySelector('.big-picture');

function closeModalEsc (evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    popup.classList.add('hidden');
    page.classList.remove('modal-open');
    document.removeEventListener('keydown', closeModalEsc);
    cancelButton.removeEventListener('click', closeModal);
  }
}

function closeModal() {
  document.removeEventListener('keydown', closeModalEsc);
  cancelButton.removeEventListener('click', closeModal);
  popup.classList.add('hidden');
  page.classList.remove('modal-open');
  clearComments();
}

const openModal = () => {
  popup.classList.remove('hidden');
  page.classList.add('modal-open');
  document.addEventListener('keydown', closeModalEsc);
  cancelButton.addEventListener('click', closeModal);
};

export {openModal};
