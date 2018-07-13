/* Игровой поток */

import readlineSync from 'readline-sync';

const questionsMaxCount = 3;

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};

const isCorrect = (answer, correctAnswer) => String(answer) === String(correctAnswer) ? true : false;

const playGame = (gameTask, genQuestionAndCorrectAnswer) => {
  console.log('Welcome to Brain Games!');
  console.log(`${gameTask}\n`);
  const userName = getName();

  for (let i = 1; i <= questionsMaxCount; i += 1) {
    const questionAndCorrectAnswer = genQuestionAndCorrectAnswer();
    const question = questionAndCorrectAnswer[0];
    const correctAnswer = questionAndCorrectAnswer[1];

    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    
    if (isCorrect(answer, correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
