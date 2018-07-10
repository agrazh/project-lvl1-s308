#!/usr/bin/env node
import { askForName } from '..';
import { randomInt } from 'mathjs';
import readlineSync from 'readline-sync';

console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = askForName();

let answerIsCorrect = true;
let askedQuestions = 0;

while (answerIsCorrect && (askedQuestions < 3)) {
  const number = randomInt(1, 99);
  console.log(`Question: ${number}`);
  askedQuestions += 1;

  const answer = readlineSync.question('Your answer: ');

  if ((number % 2 === 0) && (answer !== 'yes')) {
    answerIsCorrect = false;
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
  } else if (number % 2 !== 0 && answer !== 'no') {
    answerIsCorrect = false;
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
  }
}

if (answerIsCorrect && askedQuestions === 3) console.log(`Congratulations, ${userName}!`);
