#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomIntFromInterval from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

function NOD(a, b) {
  if (!b) {
    return a;
  }

  return NOD(b, a % b);
}

export default function getGCD() {
  let step = 0;
  console.log('Find the greatest common divisor of given numbers.');

  while (step < 3) {
    let question = 0;
    const one = randomIntFromInterval(1, 100);
    const two = randomIntFromInterval(1, 100);

    console.log(`Question: ${one} ${two}`);

    const intAnswer = readlineSync.question('Your answer: ');

    question = NOD(one, two);

    if (Number(intAnswer) === question) {
      console.log('Correct!');
      step += 1;
    } else {
      console.log(`"${intAnswer}" is wrong answer ;(. Correct answer was "${question}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (step === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
