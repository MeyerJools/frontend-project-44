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
    const partOfExpr = quest.split(' ');
    const operand1 = Number(partOfExpr[0]);
    const operator = partOfExpr[1];
    const operand2 = Number(partOfExpr[2]);
    let result;

    if (operator === '+') {
      result = operand1 + operand2;
    }
    if (operator === '-') {
      result = operand1 - operand2;
    }
    if (operator === '*') {
      result = operand1 * operand2;
    }

    return result.toString();
  };

  playGame(createQuestion, askQuestion, findeCorrAnswer);
};

export default playBrainCalc;
