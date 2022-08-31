#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

function randomIntFromInterval(min, max) {
// min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num);) {
    if (num % i === 0) return false;
    i === 2 ? i += 1 : i += 2;
  }
  return num > 1;
}

function getPrime() {
  let step = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (step < 3) {
    const rndInt = randomIntFromInterval(1, 100);
    console.log(`Question: ${rndInt}`);

    const intAnswer = readlineSync.question('Your answer: ');
    let booleanInt = intAnswer;

    if (booleanInt === 'yes') {
      booleanInt = true;
    } else if (booleanInt === 'no') {
      booleanInt = false;
    }

    if (isPrime(rndInt) === booleanInt) {
      console.log('Correct!');
      step += 1;
    } else {
      console.log(`"${intAnswer}" is wrong answer ;(. Correct answer was "${booleanInt ? 'no' : 'yes'}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (step === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}

getPrime();
