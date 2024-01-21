import readlineSync from 'readline-sync';
import playGame from '../index.js';

const playBrainCalc = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  const askQuestion = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const num1 = random(1, 100);
    const num2 = random(1, 100);
    const operators = ['+', '-', '*'];
    const operator = operators[random(0, 2)];
    const result = `${num1} ${operator} ${num2}`;
    return result;
  };

  const findeCorrAnswer = (quest) => {
    const number = eval(quest);
    const result = `${number}`;
    return result;
  };

  playGame(name, askQuestion, findeCorrAnswer);
};

export default playBrainCalc;
