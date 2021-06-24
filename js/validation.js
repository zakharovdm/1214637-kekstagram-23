import {hasDuplicates, checkStringLength} from './utils.js';

const regHashtag = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const hashtagInput =  document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const MAX_HASHTAG_AMOUNT = 5;
const MAX_COMMENT_LENGTH = 140;

const validateHashtagInput = () => {
  hashtagInput.addEventListener('input', () => {
    let invalid = false;
    const hashtagsList = hashtagInput.value.toLowerCase().split(' ');
    if (hashtagsList.length > MAX_HASHTAG_AMOUNT) {
      invalid = true;
      hashtagInput.setCustomValidity(`Удалите лишние ${hashtagsList.length - MAX_HASHTAG_AMOUNT} хэштэга`);
      hashtagInput.classList.add('error-input');
    }
    hashtagsList.forEach((hashtag) => {
      if (!regHashtag.test(hashtag)) {
        invalid = true;
        hashtagInput.setCustomValidity('Хэштэг должен начинаться с #, состоять из букв и чисел, не может содержать спецсимволы, символы пунктуации, эмодзи. Не длинее 20 символов;');
        hashtagInput.classList.add('error-input');
      }
    });
    if (hasDuplicates(hashtagsList)) {
      invalid = true;
      hashtagInput.setCustomValidity('Хэштэг не должен повторяться.');
      hashtagInput.classList.add('error-input');
    }
    if (!invalid) {
      hashtagInput.setCustomValidity('');
      hashtagInput.classList.remove('error-input');
    }
    hashtagInput.reportValidity();
  });
};

const validateCommentInput = () => {
  commentInput.removeAttribute('maxlength');
  commentInput.addEventListener('input', () => {
    if (!checkStringLength(commentInput.value, MAX_COMMENT_LENGTH)) {
      commentInput.setCustomValidity(`Удалите лишние ${commentInput.value.length - MAX_COMMENT_LENGTH} симв.`);
      commentInput.classList.add('error-input');
    } else {commentInput.setCustomValidity('');}
    commentInput.reportValidity();
  });
};

export {validateHashtagInput, validateCommentInput};
