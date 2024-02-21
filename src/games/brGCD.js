import playGame from '../index.js';
import getRandomNumber from '../random.js';

const playBrainGCD = () => {
  const askQuestion = () => console.log('Find the greatest common divisor of given numbers.');

  const createQuestionAnswer = () => {
    const rangeStart = 1;
    const rangeEnd = 100;
    const num1 = getRandomNumber(rangeStart, rangeEnd);
    const num2 = getRandomNumber(rangeStart, rangeEnd);
    const question = `${num1} ${num2}`;

    const toFindeGCD = (number1, number2) => {
      const arr = [number1, number2];
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
      return `${coll[coll.length - 1]}`;
    };

    const answer = toFindeGCD(num1, num2);
    return [question, answer];
  };

  playGame(createQuestionAnswer, askQuestion);
};

export default playBrainGCD;
