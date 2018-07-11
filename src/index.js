import readlineSync from 'readline-sync';
import { randomInt, pickRandom } from 'mathjs';

const questionsMaxCount = 3;

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const isEven = number => number % 2 === 0;

export const playEvenGame = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = getName();

  for (let i = 1; i <= questionsMaxCount; i += 1) {
    const question = randomInt(1, 99);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export const playCalcGame = () => {
  const calculateExpression = (question) => {
    switch (question[1]) {
      case '+':
        return question[0] + question[2];
      case '-':
        return question[0] - question[2];
      case '*':
        return question[0] * question[2];
      default:
        return 'Incorrect operator';
    }
  };

  console.log('Welcome to Brain Games!');
  console.log('What is the result of the expression?\n');
  const userName = getName();

  for (let i = 1; i <= questionsMaxCount; i += 1) {
    const question = [randomInt(1, 10), pickRandom(['+', '-', '*']), randomInt(1, 10)];

    console.log(`Question: ${question[0]} ${question[1]} ${question[2]}`);
    const answer = readlineSync.question('Your answer: ');

    if (calculateExpression(question) !== Number(answer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${calculateExpression(question)}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
