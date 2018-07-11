import readlineSync from 'readline-sync';
import { randomInt } from 'mathjs';

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

// getName(); // если раскомментировать, то brain-games.js два раза запросит ввести имя :-/

export const playEvenGame = () => {
  const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = getName();

  const questionsMaxCount = 3;

  for (let i = 1; i <= questionsMaxCount; i += 1) {
    const question = randomInt(1, 99);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (isEven(question) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(question)}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
