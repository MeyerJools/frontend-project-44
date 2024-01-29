import playGame from '../index.js';
import createProgression from '../progression.js';

const playBrainProgression = () => {
  const askQuestion = () => console.log('What number is missing in the progression?');

  const createQuestion = () => createProgression();

  const findeCorrAnswer = (quest) => {
    const coll = quest.split(' ');
    const step = Number(coll[1]) - Number(coll[0]);
    const missNum = coll.indexOf('..');
    const result = `${Number(coll[missNum + 1]) - Number(step)}`;
    return result;
  };

  playGame(createQuestion, askQuestion, findeCorrAnswer);
};

export default playBrainProgression;
