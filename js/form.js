import {validateHashtagInput, validateCommentInput} from'./validation.js';
import {activateScaleEditor, deactivateScaleEditor} from './scale.js';
import {startUploader} from './upload.js';
import {createSlider, removeSlider} from './editor.js';
import {showSuccessMessage, showErrorMessage} from './alerts.js';
import {sendData} from './api.js';
import {isEscEvent} from './utils.js';

const DEFAULT_IMG_URL = 'img/upload-default-image.jpg';
const imgUploadForm = document.querySelector('.img-upload__form');
const preview = imgUploadForm.querySelector('.img-upload__preview img');
const uploadInput = imgUploadForm.querySelector('#upload-file');
const cancelButton = imgUploadForm.querySelector('#upload-cancel');
const imgUploader = imgUploadForm.querySelector('.img-upload__overlay');
const hashtagInput =  imgUploadForm.querySelector('.text__hashtags');
const commentText = imgUploadForm.querySelector('.text__description');
const effectNone = imgUploadForm.querySelector('#effect-none');
const page = document.querySelector('body');

const resetInputs = () => {
  preview.src = DEFAULT_IMG_URL;
  uploadInput.value = '';
  hashtagInput.value ='';
  commentText.value = '';
  effectNone.checked = true;
};

function closeUploadEsc(evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    imgUploader.classList.add('hidden');
    page.classList.remove('modal-open');
    resetInputs();
    deactivateScaleEditor();
    removeSlider();
    document.removeEventListener('keydown', closeUploadEsc);
    cancelButton.removeEventListener('click', closeUpload);
  }
}

function closeUpload() {
  imgUploader.classList.add('hidden');
  page.classList.remove('modal-open');
  resetInputs();
  deactivateScaleEditor();
  removeSlider();
  document.removeEventListener('keydown', closeUploadEsc);
  cancelButton.removeEventListener('click', closeUpload);
}

const openUpload = () => {
  imgUploader.classList.remove('hidden');
  page.classList.add('modal-open');
  document.addEventListener('keydown', closeUploadEsc);
  cancelButton.addEventListener('click', closeUpload);
  activateScaleEditor();
  createSlider();
  validateHashtagInput();
  validateCommentInput();
  startUploader();
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

const onSuccess = () => {
  closeUpload();
  showSuccessMessage();
};

const setUserFormSubmit = () => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    sendData(onSuccess, showErrorMessage, formData);
  });
};

setUserFormSubmit(onSuccess);

export {startsForm};
