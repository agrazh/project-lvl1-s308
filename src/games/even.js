/* Отличительные черты игры: задание,
генератор впросов и правильных ответов (генератор пар (воспрос, правильный ответ))
*/

import { randomInt } from 'mathjs';
import playGame from '..';

const gameTask = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const genQuestionAndCorrectAnswer = () => {
  const number = randomInt(1, 99);
  const question = (`Question: ${number}`);

  switch (isEven(number)) {
    case true:
      return [question, 'yes'];
    case false:
      return [question, 'no'];
    default:
      return 'Unknown result of isEven() function';
  }
};

export default () => playGame(gameTask, genQuestionAndCorrectAnswer);
