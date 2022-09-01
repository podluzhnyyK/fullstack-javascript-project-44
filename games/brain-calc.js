#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomIntFromInterval from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

const operators = ['+', '-', '*'];

export default function getCalc() {
  let step = 0;
  console.log('What is the result of the expression?');

  while (step < 3) {
    let question = 0;
    const one = randomIntFromInterval(1, 100);
    const two = randomIntFromInterval(1, 100);
    const operator = randomIntFromInterval(0, operators.length - 1);
    console.log(`Question: ${one} ${operators[operator]} ${two}`);

    switch (operators[operator]) {
      case '+':
        question = one + two;
        break;
      case '-':
        question = one - two;
        break;
      case '*':
        question = one * two;
        break;
      case '/':
        question = one / two;
        break;
      default:
        break;
    }

    const intAnswer = readlineSync.question('Your answer: ');

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
