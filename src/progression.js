import random from './random.js';

const createProgression = () => {
  const rangeStart = 1;
  const rangeEnd = 50;
  const array = [random(rangeStart, rangeEnd)];
  const arrLengthMin = 5;
  const arrLengthMax = 10;
  const arrayLength = random(arrLengthMin, arrLengthMax);
  const stepMin = 1;
  const stepMax = 10;
  const step = random(stepMin, stepMax);
  for (let i = 1; i < arrayLength; i += 1) {
    const nextNumb = array[i - 1] + step;
    array.push(nextNumb);
  }
  const missingNumb = random(2, array.length - 2);
  array[missingNumb] = '..';
  return array.join(' ');
};

export default createProgression;
