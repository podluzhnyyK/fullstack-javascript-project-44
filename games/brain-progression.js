#!/usr/bin/env node
import randomIntFromInterval from '../src/cli.js';
import playGame from '../src/index.js';

const description = 'What number is missing in the progression?';

function getProgression() {
  const firstProgression = randomIntFromInterval(1, 20);
  const stepProgression = randomIntFromInterval(1, 10);
  const lengthprogression = randomIntFromInterval(5, 10);
  const hiddenNumberIndex = randomIntFromInterval(0, lengthprogression - 1);
  let hiddenNumber = 0;
  const rogression = [];

  for (let i = firstProgression; rogression.length < lengthprogression; i += stepProgression) {
    rogression.push(i);

    if (rogression.length - 1 === hiddenNumberIndex) {
      hiddenNumber = i;
      rogression[hiddenNumberIndex] = '..';
    }
  }

  const question = rogression.join(' ');
  const answer = hiddenNumber;

  return [question, String(answer)];
}

const progression = () => playGame(description, getProgression);

export default progression;
