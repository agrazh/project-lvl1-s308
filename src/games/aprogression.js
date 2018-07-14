import { randomInt } from 'mathjs';
import playGame from '..';

const gameTask = 'What number is missing in this progression?';

const progressionLength = 10;

const genQuestionAndCorrectAnswer = () => {
  const firstNumber = randomInt(1, 20);
  const progressionStep = randomInt(1, 9);
  const hiddenNumberPosition = randomInt(1, progressionLength);

  let question = '';
  let nextNumber = firstNumber;
  let correctAnswer = '';
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === hiddenNumberPosition) {
      question += '... ';
      correctAnswer = nextNumber;
    } else {
      question += `${nextNumber} `;
    }
    nextNumber += progressionStep;
  }

  return [question, correctAnswer];
};

export default () => playGame(gameTask, genQuestionAndCorrectAnswer);
