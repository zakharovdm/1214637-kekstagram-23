const uploadButton = document.querySelector('#upload-file');
const editorForm = document.querySelector('.img-upload__overlay');
const page = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');

const closeUpload = (evt) => {
  document.removeEventListener('keydown', closeUpload);
  cancelButton.removeEventListener('click', closeUpload);
  editorForm.classList.add('hidden');
  page.classList.remove('modal-open');
  if (isEscEvent(evt)) {
    evt.preventDefault();
    cancelButton.classList.add('hidden');
    page.classList.remove('modal-open');
  }
}

const openUpload = () => {
  editorForm.classList.remove('hidden');
  page.classList.add('modal-open');
  document.addEventListener('keydown', closeUpload);
  cancelButton.addEventListener('click', closeUpload);
}

uploadButton.addEventListener('click', () => {
  openUpload();
})
