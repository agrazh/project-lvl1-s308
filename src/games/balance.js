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

const getMinMaxDigitsQuantity = (number) => {
  const digitsSum = getDigitsSum(number);
  const digitsQuantity = String(number).length;

  const maxDigitsQuantity = digitsSum % digitsQuantity;
  const minDigitsQuantity = digitsQuantity - maxDigitsQuantity;

  return [minDigitsQuantity, maxDigitsQuantity];
};

const getMinMaxDigit = (number) => {
  const digitsSum = getDigitsSum(number);
  const digitsQuantity = String(number).length;

  const digitsMean = digitsSum / digitsQuantity;
  const minDigit = Math.trunc(digitsMean);
  const maxDigit = minDigit + 1;

  return [minDigit, maxDigit];
};

const makeBalanced = (number) => {
  const minMaxDigit = getMinMaxDigit(number);
  const minDigit = minMaxDigit[0];
  const maxDigit = minMaxDigit[1];

  const minMaxDigitsQuantity = getMinMaxDigitsQuantity(number);
  const minDigitsQuantity = minMaxDigitsQuantity[0];
  const maxDigitsQuantity = minMaxDigitsQuantity[1];

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
