function add(a, b) {
  return a + b;
}

const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (!arg1 && !arg2) {
  console.log('no argument');
} else if (arg1 && !arg2) {
  console.log('argument:', arg1);
} else {
  console.log('arguments:', arg1, arg2);
  console.log(add(parseInt(arg1), parseInt(arg2)));
}
