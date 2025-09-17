#!/usr/bin/env node

const arg = process.argv[2];

function factorial(n) {
  if (isNaN(n) || n <= 1) return 1;
  return n * factorial(n - 1);
}

if (!arg) {
  console.log("No argument");
} else {
  console.log("Factorial " + factorial(parseInt(arg)));
}
