import {showAlert} from './utils.js';

let currentComments = [];

const getData = () => fetch('https://23.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {showAlert('Не удалось загрузить страницу, проверьте интернет соединение.');
    }
  }).catch(() => {
    showAlert('Не удалось отправить форму. Попробуйте ещё раз');
  });

const setCurrentComments = (comment) => {
  currentComments.push(comment);
};

const getCurrentComments = () => currentComments;

const clearComments = () => {
  currentComments = [];
};

export {getData, getCurrentComments, setCurrentComments, clearComments};
