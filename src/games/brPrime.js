import playGame from '../index.js';
import getRandomNumber from '../random.js';

const playBrainPrime = () => {
  const askQuestion = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const createQuestionAnswer = () => {
    const rangeStart = 2;
    const rangeEnd = 50;
    const question = getRandomNumber(rangeStart, rangeEnd);

    const findeCorrAnswer = () => {
      for (let i = 2; i <= Math.sqrt(question); i += 1) {
        if (question % i === 0) {
          return false;
        }
      }
      return true;
    };

    const answer = findeCorrAnswer() ? 'yes' : 'no';
    return [question, answer];
  };

  playGame(createQuestionAnswer, askQuestion);
};

export default playBrainPrime;
