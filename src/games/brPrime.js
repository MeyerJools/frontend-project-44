import playGame from '../index.js';
import getRandomNumber from '../random.js';

const playBrainPrime = () => {
  const askQuestion = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const createQuestion = () => {
    const rangeStart = 1;
    const rangeEnd = 50;
    return getRandomNumber(rangeStart, rangeEnd);
  };

  const findeCorrAnswer = (quest) => {
    if (quest <= 1) {
      return 'no';
    }
    for (let i = 2; i <= Math.sqrt(quest); i += 1) {
      if (quest % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  playGame(createQuestion, askQuestion, findeCorrAnswer);
};

export default playBrainPrime;
