#!/usr/bin/env node
import randomIntFromInterval from '../src/cli.js';
import playGame from '../src/index.js';

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num);) {
    if (num % i === 0) {
      return false;
    }
    if (i === 2) {
      i += 1;
    } else {
      i += 2;
    }
  }
  return num > 1;
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getPrime() {
  const rndInt = randomIntFromInterval(1, 100);
  const question = rndInt;
  const answer = isPrime(rndInt) ? 'yes' : 'no';

  return [question, answer];
}

const prime = () => playGame(description, getPrime);

export default prime;
