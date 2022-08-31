#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function NOD() {  
  for (let x = arguments[0], i = 1; i < arguments.length; i += 1) {
    let y = arguments[i];
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  return x;
}

function getGCD() {
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

getGCD();
