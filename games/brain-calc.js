#!/usr/bin/env node
import randomIntFromInterval from '../src/cli.js';
import playGame from '../src/index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

function getCalc() {
  let answer = 0;
  const one = randomIntFromInterval(1, 100);
  const two = randomIntFromInterval(1, 100);
  const operator = randomIntFromInterval(0, operators.length - 1);
  const question = `${one} ${operators[operator]} ${two}`;

  switch (operators[operator]) {
    case '+':
      answer = one + two;
      break;
    case '-':
      answer = one - two;
      break;
    case '*':
      answer = one * two;
      break;
    case '/':
      answer = one / two;
      break;
    default:
      break;
  }

  return [question, String(answer)];
}

const calc = () => playGame(description, getCalc);

export default calc;
