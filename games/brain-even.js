#!/usr/bin/env node
import randomIntFromInterval from '../src/cli.js';
import playGame from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2) === 0;

function getNumber() {
  const rndInt = randomIntFromInterval(1, 100);
  const question = rndInt;

  const answer = isEven(rndInt) ? 'yes' : 'no';

  return [question, answer];
}

const even = () => playGame(description, getNumber);

export default even;
