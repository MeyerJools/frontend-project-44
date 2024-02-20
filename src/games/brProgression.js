import playGame from '../index.js';
import createProgression from '../progression.js';
import getRandomNumber from '../random.js';

const playBrainProgression = () => {
  const askQuestion = () => console.log('What number is missing in the progression?');

  const createQuestionAnswer = () => {
    const start = getRandomNumber(1, 50);
    const step = getRandomNumber(1, 10);
    const length = getRandomNumber(5, 10);
    const progression = createProgression(start, step, length);
    const coll = progression.split(' ');
    const missingNumbIndex = getRandomNumber(2, length - 2);
    coll[missingNumbIndex] = '..';
    const question = coll;
    const answer = `${Number(coll[missingNumbIndex + 1]) - Number(step)}`;
    return [question, answer];
  };

  playGame(createQuestionAnswer, askQuestion);
};

export default playBrainProgression;
