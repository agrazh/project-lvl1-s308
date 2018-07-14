import playGame from '..';
import { randomInt } from 'mathjs';

const gameTask = 'Find out if the number is prime.';

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;

  for (let divisor = 2; divisor <= number / 2; divisor += 1) {
    if (number % divisor === 0) return false;
  }

  return true;
};

const genQuestionAndCorrectAnswer = () => {
  const number = randomInt(1, 90);
  const question = `Is this number prime? ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => playGame(gameTask, genQuestionAndCorrectAnswer);
