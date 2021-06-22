import {hasDuplicates} from './utils.js';

const regHashtag = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const hashtagInput =  document.querySelector('.text__hashtags');
const MAX_HASHTAG_AMOUNT = 5;

hashtagInput.addEventListener('input', () => {
  const hashtagsList = hashtagInput.value.split(' ');
  if (hashtagsList.length > 5) {
    hashtagInput.setCustomValidity(`Удалите лишние ${hashtagsList.length - MAX_HASHTAG_AMOUNT} хэштэга`);
  }
  hashtagsList.forEach((hashtag) => {
    if (!regHashtag.test(hashtag)) {
      hashtagInput.setCustomValidity('Хэштэг должен начинаться с #, состоять из букв и чисел, не может содержать спецсимволы, символы пунктуации, эмодзи. Не длинее 20 символов;');
    } else if (hasDuplicates(hashtagsList)) {
        hashtagInput.setCustomValidity('Хэштэг не должен повторяться.');
      }
    else {
      hashtagInput.setCustomValidity('');
    }
  hashtagInput.reportValidity();
  })
});
