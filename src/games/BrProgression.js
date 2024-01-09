import readlineSync from 'readline-sync';
import game from '../index.js';

const brainProgression = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const gameQuestion = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const array = [random(1, 100)];
    const arrayLength = random(5, 10);
    const step = random(1, 10);
    for (let i = 1; i < arrayLength; i += 1) {
      const nextNumb = array[i - 1] + step;
      array.push(nextNumb);
    }
    const missingNumb = random(2, array.length - 2);
    array[missingNumb] = '..';
    return array.join(' ');
  };

  const correctAnswer = (quest) => {
    const coll = quest.split(' ');
    const step = Number(coll[1]) - Number(coll[0]);
    let i = 0;
    for (const num of coll) {
      if (num !== '..') {
        i += 1;
      } else {
        i += 1;
        break;
      }
    }
    const result = `${Number(coll[i]) - Number(step)}`;
    return result;
  };

  game(name, gameQuestion, correctAnswer);
};

export default brainProgression;
