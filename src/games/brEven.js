import playGame from '../index.js';
import getRandomNumber from '../random.js';

const playBrainEven = () => {
  const askQuestion = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const createQuestionAnswer = () => {
    const range = [1, 100];
    const question = getRandomNumber(range[0], range[1]);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return [question, answer];
  };

  playGame(createQuestionAnswer, askQuestion);
};

export default playBrainEven;
