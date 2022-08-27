import readlineSync from 'readline-sync';

export default function getName() {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
}
