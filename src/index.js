import readlineSync from 'readline-sync';

export const askForName = () => {
  const answer = readlineSync.question('May I have your name? ');
  console.log();
  return answer;
};

export default askForName;
