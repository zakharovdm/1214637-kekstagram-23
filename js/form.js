import {validateHashtagInput, validateCommentInput} from'./validation.js';
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

function closeUploadEsc(evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    editorForm.classList.add('hidden');
    page.classList.remove('modal-open');
    resetInputs();
    document.removeEventListener('keydown', closeUploadEsc);
    cancelButton.removeEventListener('click', closeUpload);
  }
}

function closeUpload() {
  editorForm.classList.add('hidden');
  page.classList.remove('modal-open');
  resetInputs();
  document.removeEventListener('keydown', closeUploadEsc);
  cancelButton.removeEventListener('click', closeUpload);
}

const openUpload = () => {
  editorForm.classList.remove('hidden');
  page.classList.add('modal-open');
  document.addEventListener('keydown', closeUploadEsc);
  cancelButton.addEventListener('click', closeUpload);
  validateHashtagInput();
  validateCommentInput();
};

const startsForm = () => {
  uploadInput.addEventListener('click', () => {
    openUpload();
  });
};

hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

commentText.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

export {startsForm};
