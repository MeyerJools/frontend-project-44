import readlineSync from 'readline-sync';

const brainEven = () => {
  // ask player's name and start the game
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    // generate random number
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNum = random(1, 10);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    // game outcome options
    if (randomNum % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    }
    if (randomNum % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    }
    if (randomNum % 2 !== 0 && answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (randomNum % 2 === 0 && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default brainEven;
