#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomIntFromInterval from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

export default function getProgression() {
  let step = 0;
  console.log('What number is missing in the progression?');

  while (step < 3) {
    const firstProgression = randomIntFromInterval(1, 20);
    const stepProgression = randomIntFromInterval(1, 10);
    const hiddenNumberIndex = randomIntFromInterval(0, 9);
    let hiddenNumber = 0;
    const rogressionArray = [];

    for (let i = firstProgression; rogressionArray.length < 10; i += stepProgression) {
      rogressionArray.push(i);

      if (rogressionArray.length - 1 === hiddenNumberIndex) {
        hiddenNumber = i;
        rogressionArray[hiddenNumberIndex] = '..';
      }
    }

    console.log(`Question: ${rogressionArray}`); // error .join(' ')
    const intAnswer = readlineSync.question('Your answer: ');

    if (Number(intAnswer) === hiddenNumber) {
      console.log('Correct!');
      step += 1;
    } else {
      console.log(`"${intAnswer}" is wrong answer ;(. Correct answer was "${hiddenNumber}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (step === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
