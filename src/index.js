import readlineSync from 'readline-sync';

const playGame = (createQuestionAnswer, askQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  askQuestion();

  for (let i = 1; i <= 3; i += 1) {
    const questionAnswer = createQuestionAnswer();
    console.log(`Question: ${questionAnswer[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === questionAnswer[1]) {
      console.log('Correct!');
    }
    if (answer !== questionAnswer[1]) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${questionAnswer[1]}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export default playGame;
