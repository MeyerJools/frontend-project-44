import playGame from '../index.js';
import random from '../random.js';

const playBrainEven = () => {
  const askQuestion = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const createQuestion = () => {
    const rangeStart = 1;
    const rangeEnd = 100;
    return random(rangeStart, rangeEnd);
  };

  const findeCorrAnswer = (quest) => {
    if (quest % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  playGame(createQuestion, askQuestion, findeCorrAnswer);
};

export default playBrainEven;
