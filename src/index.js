/* Игровой поток */

import readlineSync from 'readline-sync';

const questionsMaxCount = 3;

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};

const validateAnswer = (correctAnswer, answer) => {
  if (correctAnswer == answer) {
    console.log('Correct!');
    return true;
  }

  return false;
}

export const playGame = (gameTask, genQuestionAndCorrectAnswer) => {
  console.log('Welcome to Brain Games!');
  console.log(`${gameTask}\n`);
  const userName = getName();

  for (let i = 1; i <= questionsMaxCount; i += 1) {
    const questionAndCorrectAnswer = genQuestionAndCorrectAnswer();
    const question = questionAndCorrectAnswer[0];
    const correctAnswer = questionAndCorrectAnswer[1];
    
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const resultOfValidation = validateAnswer(correctAnswer, answer);

    if (!resultOfValidation) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
