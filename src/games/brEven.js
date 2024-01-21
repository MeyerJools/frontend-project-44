import playGame from '../index.js';

const playBrainEven = () => {
  const askQuestion = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  };

  const createQuestion = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const result = random(1, 10);
    return result;
  };

  const findeCorrAnswer = (quest) => {
    let result;
    if (quest % 2 === 0) {
      result = 'yes';
    }
    if (quest % 2 !== 0) {
      result = 'no';
    }
    return result;
  };

  playGame(createQuestion, askQuestion, findeCorrAnswer);
};

export default playBrainEven;
