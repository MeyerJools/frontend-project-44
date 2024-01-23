import playGame from '../index.js';
import random from '../random.js';

const playBrainCalc = () => {
  const askQuestion = () => console.log('What is the result of the expression?');

  const createQuestion = () => {
    const rangeStart = 1;
    const rangeEnd = 100;
    const operators = ['+', '-', '*'];
    const operator = operators[random(0, 2)];
    return `${random(rangeStart, rangeEnd)} ${operator} ${random(rangeStart, rangeEnd)}`;
  };

  const findeCorrAnswer = (quest) => {
    const number = eval(quest);
    const result = `${number}`;
    return result;
  };

  playGame(createQuestion, askQuestion, findeCorrAnswer);
};

export default playBrainCalc;
