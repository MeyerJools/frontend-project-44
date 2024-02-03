import playGame from '../index.js';
import createProgression from '../progression.js';

const playBrainProgression = () => {
  const askQuestion = () => console.log('What number is missing in the progression?');

  const createQuestionAnswer = () => {
    const question = createProgression();
    const coll = question.split(' ');
    const step = Number(coll[1]) - Number(coll[0]);
    const missNum = coll.indexOf('..');
    const answer = `${Number(coll[missNum + 1]) - Number(step)}`;
    return [question, answer];
  };

  playGame(createQuestionAnswer, askQuestion);
};

export default playBrainProgression;
