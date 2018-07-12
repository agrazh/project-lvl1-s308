/* Отличительные черты игры: задание,
генератор впросов и правильных ответов (генератор пар (воспрос, правильный ответ))
*/

import { randomInt } from 'mathjs';
import { playGame } from '..';

const gameTask = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const genQuestionAndCorrectAnswer = () => {
  const questionElements = randomInt(1, 99);
  const question = (`Question: ${questionElements}`);
  const correctAnswer = isEven(questionElements) ? 'yes' : 'no';
  
  return [question, correctAnswer];
};

export const playEvenGame = () => {
  playGame(gameTask, genQuestionAndCorrectAnswer)
};
