#!/usr/bin/env node
import randomIntFromInterval from '../src/cli.js';
import playGame from '../src/index.js';

function NOD(a, b) {
  if (!b) {
    return a;
  }

  return NOD(b, a % b);
}

const description = 'Find the greatest common divisor of given numbers.';

function getGCD() {
  const one = randomIntFromInterval(1, 100);
  const two = randomIntFromInterval(1, 100);
  const question = `${one} ${two}`;
  const answer = NOD(one, two);

  return [question, String(answer)];
}

const gcd = () => playGame(description, getGCD);

export default gcd;
