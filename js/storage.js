import {createPosts} from './data.js';
const data = createPosts(25);
let currentComments = [];

const getData = () => data;

const setCurrentComments = (comment) => {
  currentComments.push(comment);
};

const getCurrentComments = () => currentComments;

const clearComments = () => {
  currentComments = [];
};

export {getData, getCurrentComments, setCurrentComments, clearComments};
