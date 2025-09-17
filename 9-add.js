function add(a, b) {
  return a + b;
}

const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (!arg1 || !arg2) {
  console.log('NaN');
} else {
  console.log(add(parseInt(arg1), parseInt(arg2)));
}
