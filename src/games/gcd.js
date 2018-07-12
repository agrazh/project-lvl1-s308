import playGame from '..';
import { randomInt, gcd } from 'mathjs';

const findGCD = (num1, num2) => gcd(num1, num2);

const gameTask = 'Find the greatest common divisor of given numbers.';

const genQuestionAndCorrectAnswer = () => {
  const questionElemets = [randomInt(1, 100), randomInt(1, 100)];
  const question = (`Question: ${questionElemets[0]} ${questionElemets[1]}`);
  const correctAnswer = findGCD(questionElemets[0], questionElemets[1]);

  return [question, correctAnswer];
};

const playGCDGame = () => {
  playGame(gameTask, genQuestionAndCorrectAnswer);
};

export default playGCDGame;
