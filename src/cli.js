import readlineSync from 'readline-sync';

export default function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getName() {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
}
