const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const checkStringLength = (string, length) => string.length <= length;

checkStringLength('строка', 10);

export {getRandomPositiveInteger, checkStringLength};
