#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

function randomIntFromInterval(min, max) {
// min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const evenInt = {'yes' : true, 'no' : false};

function getNumber() {
  let step = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

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

    if ((rndInt % 2 === 0) === booleanInt) {
      console.log('Correct!');
      step += 1;
    } else {
      console.log(`"${intAnswer}" is wrong answer ;(. Correct answer was "no".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (step === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}

getNumber();
