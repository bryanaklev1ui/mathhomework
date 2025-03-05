const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomBoolean = () => {
  return Math.random() >= 0.5;
};

const getRandomNumber = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return getRandomInt(max - min + 1) + min;
};
