import playGame from '../index.js';
import getRandomNumber from '../random.js';

const playBrainGCD = () => {
  const askQuestion = () => console.log('Find the greatest common divisor of given numbers.');

  const createQuestionAnswer = () => {
    const range = [1, 100];
    const num1 = getRandomNumber(range[0], range[1]);
    const num2 = getRandomNumber(range[0], range[1]);
    const question = `${num1} ${num2}`;
    const arr = [num1, num2];
    const coll = arr.sort((a, b) => b - a);
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
    const answer = `${coll[coll.length - 1]}`;
    return [question, answer];
  };

  playGame(createQuestionAnswer, askQuestion);
};

export default playBrainGCD;
