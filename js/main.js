const getRandomNumber = (min, max) => {
  if (max <= min || max < 0 || min < 0) {
    return null;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkLength = (value, maxValue) => value.length <= maxValue;

getRandomNumber(0, 23);
checkLength('строка', 10);
