import readlineSync from 'readline-sync';

const playGame = (createQuestionAnswer, askQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  askQuestion();

  for (let i = 1; i <= 3; i += 1) {
    const [question, answer] = createQuestionAnswer();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === answer) {
      console.log('Correct!');
    }
    if (playerAnswer !== answer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
