import readlineSync from 'readline-sync';
import playGame from '../index.js';

const playBrainPrime = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const askQuestion = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const result = random(1, 50);
    return result;
  };

  const findeCorrAnswer = (quest) => {
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
    let result;
    if (primeNumbers.includes(quest) === true) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return result;
  };

  playGame(name, askQuestion, findeCorrAnswer);
};

export default playBrainPrime;
