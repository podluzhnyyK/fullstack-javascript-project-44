#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

const operators = ['+', '-', '*'];

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getCalc() {
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
  }
}

getCalc();
