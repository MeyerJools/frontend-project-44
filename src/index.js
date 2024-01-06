import readlineSync from 'readline-sync';

const game = (name, gameQuestion, correctAnswer) => {
  for (let i = 1; i <= 3; i += 1) {
    const quest = gameQuestion();
    const corrAns = correctAnswer(quest);
    console.log(`Question: ${quest}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === corrAns) {
      console.log('Correct!');
    }
    if (answer !== corrAns) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${corrAns}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export default game;
