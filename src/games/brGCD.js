import playGame from '../index.js';
import random from '../random.js';

const playBrainGCD = () => {
  const askQuestion = () => console.log('Find the greatest common divisor of given numbers.');

  const createQuestion = () => {
    const rangeStart = 1;
    const rangeEnd = 100;
    return `${random(rangeStart, rangeEnd)} ${random(rangeStart, rangeEnd)}`;
  };

  const findeCorrAnswer = (quest) => {
    const arr = quest.split(' ');
    const coll = [];
    if (arr[0] > arr[1]) {
      coll.push(arr[0]);
      coll.push(arr[1]);
    } else {
      coll.push(arr[1]);
      coll.push(arr[0]);
    }

    let [a, b] = coll;
    for (let i = 1; b > 0; i += 1) {
      const c = a % b;
      if (c > 0) {
        coll.push(c);
        a = coll[i];
        b = coll[i + 1];
      } else {
        break;
      }
    }
    return `${coll[coll.length - 1]}`;
  };

  playGame(createQuestion, askQuestion, findeCorrAnswer);
};

export default playBrainGCD;
