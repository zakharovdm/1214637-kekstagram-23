import {isEscEvent} from './utils.js';

const page = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
const popup = document.querySelector('.big-picture');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = () => {
  popup.classList.remove('hidden');
  page.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  cancelButton.addEventListener('click', closeModal);
}

const closeModal = () => {
  popup.classList.add('hidden');
  page.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  cancelButton.removeEventListener('click', closeModal);
}

export {openModal};
