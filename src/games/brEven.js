import playGame from '../index.js';
import getRandomNumber from '../random.js';

const playBrainEven = () => {
  const askQuestion = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const createQuestion = () => {
    const rangeStart = 1;
    const rangeEnd = 100;
    return getRandomNumber(rangeStart, rangeEnd);
  };

  const findeCorrAnswer = (quest) => (quest % 2 === 0 ? 'yes' : 'no');

  playGame(createQuestion, askQuestion, findeCorrAnswer);
};

export default playBrainEven;
