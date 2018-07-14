import { randomInt } from 'mathjs';
import playGame from '..';

const gameTask = 'Balance the given number.';

const getDigitsSum = (number) => {
  const digits = String(number).split('');

  let digitsSum = 0;
  for (let i = 0; i < digits.length; i += 1) {
    digits[i] = Number(digits[i]);
    digitsSum += digits[i];
  }

  return digitsSum;
};

const makeBalanced = (number) => {
  const digitsSum = getDigitsSum(number);
  const minDigit = Math.trunc(digitsSum / String(number).length);
  const maxDigit = minDigit + 1;

  const maxDigitsQuantity = digitsSum - minDigit * String(number).length;
  const minDigitsQuantity = String(number).length - maxDigitsQuantity;

  let balancedNumber = '';
  for (let i = 1; i <= minDigitsQuantity; i += 1) {
    balancedNumber += `${minDigit}`;
  }
  for (let i = 1; i <= maxDigitsQuantity; i += 1) {
    balancedNumber += `${maxDigit}`;
  }

  return balancedNumber;
};

const genQuestionAndCorrectAnswer = () => {
  const number = randomInt(10, 999);
  const question = `Question: ${number}`;
  const correctAnswer = makeBalanced(number);

  return [question, correctAnswer];
};

export default () => playGame(gameTask, genQuestionAndCorrectAnswer);
