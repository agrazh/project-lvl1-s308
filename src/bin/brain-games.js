#!/usr/bin/env node

import readlineSync from 'readline-sync';
// import { getName } from '..';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

console.log('Welcome to the Brain Games!\n');

getName();
