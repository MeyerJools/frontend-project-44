import readlineSync from 'readline-sync';
import game from '../index.js';

const brainEven = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const gameQuestion = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const result = random(1, 10);
    return result;
  };

  const correctAnswer = (quest) => {
    let result;
    if (quest % 2 === 0) {
      result = 'yes';
    }
    if (quest % 2 !== 0) {
      result = 'no';
    }
    return result;
  };

  game(name, gameQuestion, correctAnswer);
};

export default brainEven;
