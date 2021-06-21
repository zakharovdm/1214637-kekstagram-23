import {isEscEvent} from './utils.js';

const uploadInput = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const editorForm = document.querySelector('.img-upload__overlay');
const hashtagInput =  document.querySelector('.text__hashtags');
const commentText = document.querySelector('.text__description');
const page = document.querySelector('body');

const resetInputs = () => {
  uploadInput.value = '';
  hashtagInput.value ='';
  commentText.value = '';
};

const closeUploadEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    editorForm.classList.add('hidden');
    page.classList.remove('modal-open');
    resetInputs();
    document.removeEventListener('keydown', closeUploadEsc);
    //eslint-disable-next-line no-use-before-define
    cancelButton.removeEventListener('click', closeUpload);
  }
};

const closeUpload = () => {
  resetInputs();
  editorForm.classList.add('hidden');
  page.classList.remove('modal-open');
  document.removeEventListener('keydown', closeUploadEsc);
  cancelButton.removeEventListener('click', closeUpload);
};

const openUpload = () => {
  editorForm.classList.remove('hidden');
  page.classList.add('modal-open');
  document.addEventListener('keydown', closeUploadEsc);
  cancelButton.addEventListener('click', closeUpload);
};

uploadInput.addEventListener('click', () => {
  openUpload();
});
