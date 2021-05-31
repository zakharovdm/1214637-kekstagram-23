const getRandomNumber = (min, max) => {
  if (max <= min || max < 0 || min < 0) {
    return null;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomNumber(0, 23);
