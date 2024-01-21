import readlineSync from 'readline-sync';
import playGame from '../index.js';

const playBrainGCD = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const askQuestion = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const num1 = random(1, 100);
    const num2 = random(1, 100);
    const result = `${num1} ${num2}`;
    return result;
  };

  const findeCorrAnswer = (quest) => {
    const arr = quest.split(' ');
    const coll = [];
    if (Number(arr[0]) > Number(arr[1])) {
      coll.push(arr[0]);
      coll.push(arr[1]);
    } else {
      coll.push(arr[1]);
      coll.push(arr[0]);
    }

    let a = Number(coll[0]);
    let b = Number(coll[1]);
    for (let i = 1; b > 0; i += 1) {
      const c = a % b;
      if (c > 0) {
        coll.push(c);
        a = Number(coll[i]);
        b = Number(coll[i + 1]);
      } else {
        break;
      }
    }
    const result = `${coll[coll.length - 1]}`;
    return result;
  };

  playGame(name, askQuestion, findeCorrAnswer);
};

export default playBrainGCD;
