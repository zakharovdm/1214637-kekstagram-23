let currentComments = [];
let postsList;

const setCurrentComments = (comment) => {
  currentComments.push(comment);
};

const getCurrentComments = () => currentComments;

const clearComments = () => {
  currentComments = [];
};

const setPosts = (posts) => {
  postsList = posts.slice();
};

const getPosts = () => postsList;

export {getCurrentComments, setCurrentComments, clearComments, setPosts, getPosts};
