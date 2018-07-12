/* Отличительные черты игры: задание,
генератор впросов и правильных ответов (генератор пар (воспрос, правильный ответ))
*/

import { randomInt, pickRandom } from 'mathjs';
import playGame from '..';

const gameTask = 'What is the result of the expression?';

const calculateExpression = (argument1, operator, argument2) => {
  switch (operator) {
    case '+':
      return argument1 + argument2;
    case '-':
      return argument1 - argument2;
    case '*':
      return argument1 * argument2;
    default:
      return 'Incorrect operator';
  }
};

const genQuestionAndCorrectAnswer = () => {
  const questionElemets = [randomInt(1, 10), pickRandom(['+', '-', '*']), randomInt(1, 10)];
  const question = (`Question: ${questionElemets[0]} ${questionElemets[1]} ${questionElemets[2]}`);
  const correctAnswer = calculateExpression(questionElemets[0], questionElemets[1],
    questionElemets[2]);

  return [question, correctAnswer];
};


const playCalcGame = () => {
  playGame(gameTask, genQuestionAndCorrectAnswer);
};

export default playCalcGame;
