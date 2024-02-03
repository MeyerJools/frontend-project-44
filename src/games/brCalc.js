import playGame from '../index.js';
import getRandomNumber from '../random.js';

const playBrainCalc = () => {
  const askQuestion = () => console.log('What is the result of the expression?');

  const createQuestionAnswer = () => {
    const range = [1, 100];
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(0, 2)];
    const operand1 = getRandomNumber(range[0], range[1]);
    const operand2 = getRandomNumber(range[0], range[1]);
    const question = `${operand1} ${operator} ${operand2}`;

    let answer;
    if (operator === '+') {
      answer = operand1 + operand2;
    }
    if (operator === '-') {
      answer = operand1 - operand2;
    }
    if (operator === '*') {
      answer = operand1 * operand2;
    }

    return [question, answer.toString()];
  };

  playGame(createQuestionAnswer, askQuestion);
};

export default playBrainCalc;
