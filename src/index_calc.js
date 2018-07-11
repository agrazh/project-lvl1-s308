import readlineSync from 'readline-sync';
import { randomInt, pickRandom } from 'mathjs';

const questionsMaxCount = 3;

const greet = () => {
  console.log('Welcome to Brain Games!');
}

const tellAboutRules = (rules) => {
  console.log(`${rules}\n`);
}

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const isEven = number => number % 2 === 0;

const calculateExpression = (expression) => {
  switch (expression[1]) {
    case '+':
      return expression[0] + expression[2];
    case '-':
      return expression[0] - expression[2];
    case '*':
      return expression[0] * expression[2];
    default:
      return 'Incorrect operator';
  }
};

const validateAnswer = (correctAnswer, answer) => {
  if (correctAnswer == Number(answer)) {
    console.log('Correct!');
    return true;
  }
  
  return false;
}

const tellCorrectAnswer = (correctAnswer, answer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
}

const askForNewTry = (userName) => {
  console.log(`Let's try again, ${userName}!`);
} 

const congratulate = (userName) => {
  console.log(`Congratulations, ${userName}!`);
}

export const playCalcGame = () => {
  greet();
  tellAboutRules('What is the result of the expression?');
  
  const userName = getName();

  for (let i = 1; i <= questionsMaxCount; i += 1) {
    const question = [randomInt(1, 10), pickRandom(['+', '-', '*']), randomInt(1, 10)];
    console.log(`Question: ${question[0]} ${question[1]} ${question[2]}`);
    
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = calculateExpression(question);
    const resultOfValidation = validateAnswer(correctAnswer, answer);

    if (!resultOfValidation) {
      tellCorrectAnswer(correctAnswer, answer);
      askForNewTry(userName);
      return;
    }
  }

  congratulate(userName);
};

playCalcGame();

/* export const playEvenGame = () => {
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
}; */
