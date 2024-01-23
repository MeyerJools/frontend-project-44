import playGame from '../index.js';
import random from '../random.js';

const playBrainProgression = () => {
  const askQuestion = () => console.log('What number is missing in the progression?');

  const createQuestion = () => {
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

  const findeCorrAnswer = (quest) => {
    const coll = quest.split(' ');
    const step = Number(coll[1]) - Number(coll[0]);
    let i = 0;
    for (const num of coll) {
      if (num !== '..') {
        i += 1;
      } else {
        i += 1;
        break;
      }
    }
    const result = `${Number(coll[i]) - Number(step)}`;
    return result;
  };

  playGame(createQuestion, askQuestion, findeCorrAnswer);
};

export default playBrainProgression;
