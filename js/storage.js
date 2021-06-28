import {createPosts} from './data.js';
const data = createPosts(25);
let currentComments = [];
let idActiveElement;

const getData = () => {
  return data;
}

const setActiveId = (id) => {
  idActiveElement = id;
}

const getActiveId = () => {
  return idActiveElement;
}

const setCurrentComments = (comment) => {
  currentComments.push(comment);
}

const getCurrentComments = () => {
  return currentComments;
}

const clearComments = () => {
  currentComments = [];
}

export {setActiveId, getData, getActiveId, getCurrentComments, setCurrentComments, clearComments}
