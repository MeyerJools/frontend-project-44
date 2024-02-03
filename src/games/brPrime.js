import playGame from '../index.js';
import getRandomNumber from '../random.js';

const playBrainPrime = () => {
  const askQuestion = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const createQuestionAnswer = () => {
    const range = [1, 50];
    const question = getRandomNumber(range[0], range[1]);

    const findeCorrAnswer = () => {
      if (question <= 1) {
        return 'no';
      }
      for (let i = 2; i <= Math.sqrt(question); i += 1) {
        if (question % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    const answer = findeCorrAnswer();
    return [question, answer];
  };

  playGame(createQuestionAnswer, askQuestion);
};

export default playBrainPrime;
