import playGame from '../index.js';
import getRandomNumber from '../random.js';
import calc from '../exprCalc.js';

const playBrainCalc = () => {
  const askQuestion = () => console.log('What is the result of the expression?');

  const createQuestionAnswer = () => {
    const rangeStart = 1;
    const rangeEnd = 100;
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    const operand1 = getRandomNumber(rangeStart, rangeEnd);
    const operand2 = getRandomNumber(rangeStart, rangeEnd);
    const question = `${operand1} ${operator} ${operand2}`;
    const answer = calc(operator, operand1, operand2);
    return [question, answer.toString()];
  };

  playGame(createQuestionAnswer, askQuestion);
};

export default playBrainCalc;
