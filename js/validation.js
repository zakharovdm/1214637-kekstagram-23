import {hasDuplicates} from './utils.js';

const regHashtag = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const hashtagInput =  document.querySelector('.text__hashtags');
const MAX_HASHTAG_AMOUNT = 5;

const validateHashtagInput = () => {
  hashtagInput.addEventListener('input', () => {
    let invalid = false;
    const hashtagsList = hashtagInput.value.toLowerCase().split(' ');
    if (hashtagsList.length > MAX_HASHTAG_AMOUNT) {
      invalid = true;
      hashtagInput.setCustomValidity(`Удалите лишние ${hashtagsList.length - MAX_HASHTAG_AMOUNT} хэштэга`);
    }
    hashtagsList.forEach((hashtag) => {
      if (!regHashtag.test(hashtag)) {
        invalid = true;
        hashtagInput.setCustomValidity('Хэштэг должен начинаться с #, состоять из букв и чисел, не может содержать спецсимволы, символы пунктуации, эмодзи. Не длинее 20 символов;');
      } else if (hasDuplicates(hashtagsList)) {
        invalid = true;
        hashtagInput.setCustomValidity('Хэштэг не должен повторяться.');
      }
    });
    if (!invalid) {
      hashtagInput.setCustomValidity('');
    }
    hashtagInput.reportValidity();
  });
};

export {validateHashtagInput};
