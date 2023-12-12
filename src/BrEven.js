import game from './index.js';

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const gameQuestion = random(1, 10);
  const correctAnswer = (gameQuestion % 2 === 0) ? 'yes' : 'no';
  game();
};

export default brainEven;
