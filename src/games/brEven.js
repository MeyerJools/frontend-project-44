import playGame from '../index.js';
import getRandomNumber from '../random.js';

const playBrainEven = () => {
  const askQuestion = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const createQuestionAnswer = () => {
    const rangeStart = 1;
    const rangeEnd = 100;
    const question = getRandomNumber(rangeStart, rangeEnd);

    const isEven = (num) => num % 2 === 0;

    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };

  playGame(createQuestionAnswer, askQuestion);
};

export default playBrainEven;
